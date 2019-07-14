import React from "react";
import LoginComponent from "./loginComponent";
import Api from "../components/api";
import urls from "../components/api/url";
import { LoggedInContext } from "../components/UserLoginContext"
import { WebSocketsContext } from "../components/WebSocketsContext"
// setup proptypes for context
// isLoggedIn: false,
// setUserInfo: this.setUserInfo

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log("logincontainer", props)
        this.state = {
            userName: "",
            password: "",
            userData: null,
            isSubmitting: false,
            isSubmitDisabled: true,
            // isLoggedIn: props.context.isLoggedIn,
            loginError: false,
            showPassword: false,
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

        if(prevState.isLoggedIn !== this.state.isLoggedIn) {
            console.log('setting state to true')
            // updateState["isLoggedIn"] = true;
            debugger;
            this.props.ws.emitILoggedIn('tom')
            // this.props.context.setUserInfo = this.state.userData;
            // this.props.context.setIsLoggedIn = this.state.isLoggedIn
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
                if(response.data.user) {
                    this.setState({'userData': response.data.user, "isLoggedIn": true})
                }
            })
            .catch(error => {
                debugger;
                console.log(error);
            })
            .then((response) => {
          
                this.setState({ isSubmitting: false });
            });
    };
    handleSubmit = async event => {
        event.preventDefault();
        this.doSubmitAuthentication();
    };
    render() {
   
        const {isSubmitDisabled, logginError} = this.state;
        const userNameOnChange = this.userNameOnChange;
        const passwordOnChange = this.passwordOnChange;
        const showPassword = this.showPassword;
        const handleSubmit = this.handleSubmit;
        return (
            <div>
                <h1>login</h1>
                <LoginComponent
                    logginError={logginError}
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

const Test = (props) => {
    return (
  
        <WebSocketsContext.Consumer>
        {(ws) => {
            return (
                <LoggedInContext.Consumer>
                    {(context) => {
                        
                        const propsWithContext = {...props,context, ws}
                        return <LoginContainer {...propsWithContext}/>
                    }}
                </LoggedInContext.Consumer>
            )
            }
        }
            
          </WebSocketsContext.Consumer>
    )
}
export default Test;
// export default LoginContainer;
