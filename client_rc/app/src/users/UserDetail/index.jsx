import React, {Fragment} from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import UserForm from "./userForm";

class UserDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            path: props.match.path,
            user: {}
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
        return null;
    }


 render() {
     return (
         <Fragment>
            <UserForm data={this.props.data} />
         </Fragment>
     )
 }
}


const GET_USER_BY_ID = gql`
  query User($userId: String!) {
    user(id: $userId) {
      id
      firstName,
      lastName
    }
  }
`;



const Provider = (props) => {
    const userId = props.match.params.id;
    return (
        <Query query={GET_USER_BY_ID} variables={{userId}} >
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return (
                    <UserDetail {...props} data={data} loading={loading} />
                );
            }}
        </Query>
    )
}
export default Provider;





