import React from "react";
// import {LoggedInConsumer} from "../components/UserLoginContext";
// import { LoggedInContext } from "../components/UserLoginContext"

const LoginComponent = props => {
    const {
        userNameOnChange,
        passwordOnChange,
        handleSubmit,
        isSubmitDisabled,
        showPassword,
        logginError,
    } = props;
    // const{ isLoggedIn }=LoggedInConsumer()
    
    return (
        <div>
            {/* <div>Is logged In: {isLoggedIn}</div> */}
            <form onSubmit={handleSubmit}>
                <label>
                    User name
                    <input type="text" onChange={userNameOnChange} />
                </label>
                <label>
                    password
                    <input
                        type={showPassword ? "text" : "password"}
                        onChange={passwordOnChange}
                    />
                </label>
                <button type="submit" disabled={isSubmitDisabled}>
                    Login
                </button>
                {logginError && <div>Error logging in.</div>}
            </form>
        </div>
    );
};
export default LoginComponent;
