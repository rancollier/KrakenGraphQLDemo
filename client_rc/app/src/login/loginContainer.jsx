import React from "react";
import LoginComponent from "./loginComponent";
import Api from "../components/api";
import urls from "../components/api/url";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            isSubmitting: false,
            isSubmitDisabled: true,
            showPassword: true
        };
    }
    componentDidUpdate(prevProps, prevState) {
        const { userName, password, isSubmitDisabled } = this.state;
        let updateState = {};
        if (isSubmitDisabled && userName.length && password.length) {
            updateState["isSubmitDisabled"] = false;
        } else if (
            !isSubmitDisabled &&
            (!userName.length || !password.length)
        ) {
            updateState["isSubmitDisabled"] = true;
        }

        if (Object.keys(updateState).length) {
            this.setState(updateState);
        }
    }
    userNameOnChange = event => {
        this.setState({ userName: event.target.value });
    };
    passwordOnChange = event => {
        this.setState({ password: event.target.value });
    };
    doSubmitAuthentication = () => {
        const { userName, password } = this.state;
        const url = urls.loginUser();
        this.setState({ isSubmitting: true });
        Api.put(url, { firstName: userName, password })
            .then(response => {
                debugger;
                console.log(response.token);
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {
                this.setState({ isSubmitting: false });
            });
    };
    handleSubmit = async event => {
        event.preventDefault();
        this.doSubmitAuthentication();
    };
    render() {
        const isSubmitDisabled = this.state.isSubmitDisabled;
        const userNameOnChange = this.userNameOnChange;
        const passwordOnChange = this.passwordOnChange;
        const showPassword = this.showPassword;
        const handleSubmit = this.handleSubmit;
        return (
            <div>
                <h1>login</h1>
                <LoginComponent
                    userNameOnChange={userNameOnChange}
                    passwordOnChange={passwordOnChange}
                    handleSubmit={handleSubmit}
                    isSubmitDisabled={isSubmitDisabled}
                    showPassword={showPassword}
                />
            </div>
        );
    }
}

export default LoginContainer;
