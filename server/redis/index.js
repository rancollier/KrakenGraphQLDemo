var redis = require("redis");
var client = redis.createClient(`${process.env.REDIS_URL}`);

client.on("connect", function() {
    console.log("Redis client connected");
});

client.on("error", function(err) {
    console.log("Something went wrong " + err);
});
client.setTokenToBlacklist = (token, expiration) => {
    const now = Math.floor(Date.now() / 1000);
    const expSec = expiration - now;
    // We are setting a key value to expire so we don't have to clean up.
    redisClient.set(token, token, "EX", expSec);
};
client.isTokenBlackListed = token => {
    return new Promise((resolver, reject) => {
        client.get(token, response => {
            debugger;
            if (response) {
                resolver(response);
            }
            reject();
        });
    });
};
// client.set('my test key', 'my test value', redis.print);
// client.get('my test key', function (error, result) {
//     if (error) {
//         console.log(error);
//         throw error;
//     }
//     console.log('GET result ->' + result);
// });

module.exports = client;
