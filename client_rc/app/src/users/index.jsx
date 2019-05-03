import React, { Fragment } from "react";
import axios from "axios";
import Api from "../components/api";
import { H1 } from "../components/syles/typography";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            users: []
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        console.log("fetching");
        this.setState({ isFetching: true });
        Api.get("api/users").then(response => {
            console.log(response);
            this.setState({
                isFetching: false,
                users: response.data
            });
            return response;
        });
        // axios
        //     .get("http://localhost:3030/api/users")
        //     .then(response => {
        //         console.log(response);
        //         this.setState({
        //             isFetching: false,
        //             users: response.data
        //         });
        //         return response;
        //     })
        //     .catch(function(error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .then(function() {
        //         // always executed
        //     });
    };
    render() {
        return (
            <Fragment>
                {this.state.isFetching && <H1>is fetching</H1>}
                {!this.state.isFetching && <H1>is not fetching</H1>}
                {this.state.users.length &&
                    this.state.users.map((user, index) => {
                        return <div key={user.id}>{user.firstName}</div>;
                    })}
            </Fragment>
        );
    }
}

export default Users;
