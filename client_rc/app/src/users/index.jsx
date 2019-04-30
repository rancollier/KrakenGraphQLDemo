import React, { Fragment } from "react";
import axios from "axios";

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
        axios
            .get("http://localhost:3030/api/users")
            .then(function(response) {
                // handle success
                console.log(response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(function() {
                // always executed
            });
    };
    render() {
        return (
            <Fragment>
                {this.state.isFetching && <h1>is fetching</h1>}
                {!this.state.isFetching && <h1>is not fetching</h1>}
            </Fragment>
        );
    }
}

export default Users;
