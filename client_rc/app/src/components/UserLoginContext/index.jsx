import React, { createContext, useContext, useState } from "react";

export const LoggedInContext = createContext();
class LoggedInProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            userInfo: null,
            setUserInfo: (userInfo) => {
                console.log("context setUserInfo")
                this.setState({userInfo: userInfo})
            },
            setIsLoggedIn: (value)=>{
                console.log("context setIsLoggedIn", value)
                this.setState({isLoggedIn: value});
            }, 
        }
    }

    setIsLoggedIn = (value) => {
        debugger;
        console.log('context setIsLoggedIn')
        return this.setState({isLoggedIn: value});
    };
    setUserInfo=(request)=>{
        console.log("setUserInfo")
    }
    render() {
        return (
            <LoggedInContext.Provider value={this.state}>
                {this.props.children}
            </LoggedInContext.Provider>
        )
    }
}
// const LoggedInProvider = props => {
//     const [primaryNavDrawerShow, setPrimaryNavDrawerShow] = useState(false);
//     const values = { primaryNavDrawerShow, setPrimaryNavDrawerShow };
//     return (
//         <LoggedInContext.Provider value={values}>
//             {props.children}
//         </LoggedInContext.Provider>
//     );
// };


export const LoggedInConsumer = () => useContext(LoggedInContext);


export default LoggedInProvider;