import React from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import LoginContainer from "./loginContainer";
import RegisterContainer from "./registerContainer";
const Login = props => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path={props.match.path}
                    component={LoginContainer}
                />
                <Route
                    path={`${props.match.path}/register`}
                    component={RegisterContainer}
                />
            </Switch>
        </div>
    );
};

export default withRouter(Login);

// import React from "react";
// import LoginContainer from "./loginContainer";
// // class Login extends React.Component {
// //     render() {
// //         return <h1>login</h1>;
// //     }
// // }

// const Login = props => {
//     return <LoginContainer />;
// };

// export default Login;
