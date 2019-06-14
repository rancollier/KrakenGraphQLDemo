import React, { Fragment } from "react";
import Api from "../components/api";
import urls from "../components/api/url";
 import CircularProgress from "../components/CircularProgress";
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
        const url = urls.users();
        console.log("fetching",url);
        this.setState({ isFetching: true });
        Api.get(url).then(response => {
            console.log(response);
            this.setState({
                isFetching: false,
                users: response.data
            });
            return response;
        });
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
