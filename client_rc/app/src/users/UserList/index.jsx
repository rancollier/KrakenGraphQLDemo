import React, { Fragment } from "react";
// import Api from "../../components/api";
// import urls from "../../components/api/url";
// import CircularProgress from "../../components/CircularProgress";
import { H1 } from "../../components/syles/typography";
import {UserListLayout} from "./components";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            path: props.match.path,
            users: []
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (!props.data.loading && props.data.users) {
            return {
                users: props.data.users,
                isFetching: props.data.loading
            };
        }
        console.log(props);
        return { users: [] };
    }

    
    render() {
        
        return (
            <Fragment>
                {this.state.isFetching && <H1>is fetching</H1>}

                {!this.state.isFetching && (
                    <UserListLayout list={this.state.users} path={this.state.path} />
                )}
            </Fragment>
        );
    }
}

const query = gql`
    {
        users {
            id
            firstName
            lastName
        }
    }
`;

export default graphql(query)(Users);
