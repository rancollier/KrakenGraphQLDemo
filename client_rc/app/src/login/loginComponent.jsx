import React from "react";

const LoginComponent = props => {
    const {
        userNameOnChange,
        passwordOnChange,
        handleSubmit,
        isSubmitDisabled,
        showPassword
    } = props;
    return (
        <div>
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
            </form>
        </div>
    );
};
export default LoginComponent;
