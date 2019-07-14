import React, { createContext, useContext } from "react";
import urls from "../../components/api/url";
import Api from "../../components/api";

export const LoggedInContext = createContext();
class LoggedInProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: null,
            userInfo: null,

            setUserInfo: (userInfo) => {
                console.log("context setUserInfo")
                this.setState({userInfo: userInfo})
            },
            setIsLoggedIn: (value)=>{
                console.log("context setIsLoggedIn", value)
                this.setState({isLoggedIn: value});
            },
            intervalId: null,
        }
    }
    static getDerivedStateFromProps(props,state) {

    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.isLoggedIn !== nextState.isLoggedIn && !nextState.isLoggedIn) {
            //redirect and stop interval
            this.clearTimer();
        }
        return false;
    }

    componentDidMount() {
        debugger;
        this.checkIfLoggedIn();
        this.startInterval();

    }
    clearTimer = () => {
        const intervalId = this.state.intervalId;
        if(typeof intervalId === Number) {
            clearInterval(intervalId);
        }
    }
    startInterval = () => {
        const interval = setInterval(()=>{
            this.checkIfLoggedIn();
        },
        30000)
        this.setState({intervalId: interval});
    }
    checkIfLoggedIn = () => {
        debugger;
        const url= urls.isLoggedIn();
        Api.get(url)
        .then (response=>{
            console.log(response)
            this.setState({isLoggedIn: true})
        })
        .catch(err=>{
            this.setState({isLoggedIn: false})
        })
    }
    setIsLoggedIn = (value) => {
        debugger;
        console.log('context setIsLoggedIn')
        return this.setState({isLoggedIn: value});
    };

    setUserInfo=(request)=>{
        console.log("setUserInfo")
    };

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