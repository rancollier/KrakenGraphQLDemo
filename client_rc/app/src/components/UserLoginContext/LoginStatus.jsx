import React from "react";
import {withRouter} from "react-router-dom";
import urls from "../../components/api/url";
import Api from "../../components/api";


class LoginStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: null,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        this.fetchUserStatus()
        this.fetchInterval()
    }
    shouldComponentUpdate() {
        // I don't want this to render
        return false;
    }
    setIntervalId = (id) => {
        this.setState({intervalId: id})
    }
    setIsLoggedIn = (id) => {
        this.setState({isLoggedIn: id})
    }

    deleteInvervalId = () => {
        const id = this.state.intervalId;
        clearInterval(id)
        this.setIntervalId(null);
    }
    
    fetchInterval = () => { 
        const intId = setInterval(()=>{
            this.fetchUserStatus();
        }, 30000);
        this.setIntervalId(intId)
    }

    fetchUserStatus = () => {
       return Api.get(urls.isLoggedIn())
        .then(response => {
            this.setIsLoggedIn(true)
            console.log('is logged in')
        })
        .catch(err=>{
            this.setIsLoggedIn(false)
            this.props.history.push("/login")
            console.log('not logged in')
        })
    }


    render() {
        return null;
    }
}
// const LoginStatus = (props) => {
//     const [intervalId, setInterId] = useState(null);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
    
//     useEffect(()=>{
//         debugger;
//         console.log('loginstatus')
//         fetchUserStatus()
//         fetchInterval()
//         return function cleanup() {
//             clearTimer()
//         }
       
//     }, [])

//     const fetchInterval = () => {
//         console.log(
//             fetchInterval
//         )
//         const intId = setInterval(()=>{
//             fetchUserStatus();
//             setInterId(intId)
//         }, 30000);
//     }

//     const clearTimer = () => {
//         clearInterval(intervalId);
//     }
  
//     const fetchUserStatus = () => {
//        return Api.get(urls.isLoggedIn())
//         .then(response => {
//             setIsLoggedIn(true)
//             console.log('is logged in')
//         })
//         .catch(err=>{
//             debugger;
//             setIsLoggedIn(false)

//             console.log('not logged in')
//         })
//     }

 
//     return null;
// }
// const Providers = (props) => {
//     return withRouter(LoginStatus)
// }
export default withRouter(LoginStatus);