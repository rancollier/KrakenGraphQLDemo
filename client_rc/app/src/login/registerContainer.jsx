import React from "react";
import RegisterComponent from "./registerComponent";
import Api from "../components/api";
import urls from "../components/api/url";
class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            lastName: "",
            email: "",
            password: "",
            isSubmitting: false,
            isSubmitDisabled: true,
            showPassword: true
        };
    }
    handleChange = event => {
        console.log(event.target.name);
        const target = event.target;
        this.setState({ [target.name]: target.value });
    };
    doSubmitAuthentication = () => {
        const url = urls.registerUser();
        const { firstName, lastName, email, password } = this.state;
        this.setState({ isSubmitting: true });
        Api.post(url, { firstName, lastName, email, password })
            .then(response => {
                //check header
                console.log(response.token);
                debugger;
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

        console.log(this.state);
        this.doSubmitAuthentication();
    };
    render() {
        const handleChange = this.handleChange;
        const handleSubmit = this.handleSubmit;
        const isSubmitDisabled = this.isSubmitDisabled;
        const showPassword = this.isSubmitDisabled;
        return (
            <div>
                <h1>Register</h1>
                <RegisterComponent
                    onInputOnChange={handleChange}
                    handleSubmit={handleSubmit}
                    isSubmitDisabled={isSubmitDisabled}
                    showPassword={showPassword}
                />
            </div>
        );
    }
}
export default RegisterContainer;
