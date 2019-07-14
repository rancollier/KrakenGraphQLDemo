const jwtSecret = require("./jwtConfig");
const bcrypt = require("bcrypt");
const { users } = require("../../db/models");
const BCRYPT_SALT_ROUNDS = 12;
const redisClient = require("../../redis")

const passport = require("passport"),
    localStrategy = require("passport-local").Strategy,
    JWTstrategy = require("passport-jwt").Strategy,
    ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
    "register",
    new localStrategy(
        {
            usernameField: "firstName",
            passwordField: "password",
            session: false
        },
        (firstName, password, done) => {
            console.log("try register", firstName, password);
            try {
                users
                    .findOne({
                        where: {
                            firstName: firstName
                        }
                    })
                    .then(user => {
                        if (user != null) {
                            console.log("username already taken");
                            return done(null, false, {
                                message: "username already taken"
                            });
                        } else {
                            console.log("user not found :)");
                            bcrypt
                                .hash(password, BCRYPT_SALT_ROUNDS)
                                .then(hashedPassword => {
                                    console.log("create user in db");
                                    return users
                                        .create({
                                            firstName,
                                            password: hashedPassword
                                        })
                                        .then(user => {
                                            console.log("user created");
                                            // note the return needed with passport local - remove this return for passport JWT to work
                                            done(null, user);
                                        });
                                });
                        }
                    });
            } catch (err) {
                done(err);
            }
        }
    )
);

passport.use(
    "login",
    new localStrategy(
        {
            usernameField: "firstName",
            passwordField: "password",
            session: false
        },
        (firstName, password, done) => {
            try {
                console.log("login find person first");
                users
                    .findOne({
                        where: {
                            firstName: firstName
                        }
                    })
                    .then(user => {
                        if (user === null) {
                            return done(null, false, {
                                message: "bad username"
                            });
                        } else {
                            console.log("1bcryupt");
                            bcrypt
                                .compare(password, user.password)
                                .then(response => {
                                    if (response !== true) {
                                        console.log("passwords do not match");
                                        return done(null, false, {
                                            message: "passwords do not match"
                                        });
                                    }
                                    console.log("user found & authenticated");
                                    // note the return needed with passport local - remove this return for passport JWT
                                    return done(null, user);
                                });
                        }
                    });
            } catch (err) {
                done(err);
            }
        }
    )
);

var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies["token"];
    }
    return token;
};
const opts = {
    // jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
    jwtFromRequest: cookieExtractor,
    secretOrKey: jwtSecret.secret
};

passport.use(
    "jwt",
    
    new JWTstrategy(opts, (jwt_payload, done) => {
        try {
            console.log( "try jwt", jwt_payload)
       
            // if(async()=> await !redisClient('xyz')) {
            //     done(null, false);
            // }
            users
                .findOne({
                    where: {
                        id: jwt_payload.id
                    }
                })
                .then(user => {
                    if (user) {
                        console.log("user found in db in passport");
                        const exp = jwt_payload.hasOwnProperty("exp")
                            ? jwt_payload.exp
                            : new Date() / 1000;
                        console.log(exp);
                        // note the return removed with passport JWT - add this return for passport local
                        console.log("found user")
                        done(null, {...user, tokenExp:exp});
                    } else {
                        console.log("user not found in db");
                        done(null, false);
                    }
                });
        } catch (err) {
            done(err);
        }
    })
);
