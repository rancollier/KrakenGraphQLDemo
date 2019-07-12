import React, { Fragment } from "react";
import UserDetail from "./UserDetail";
import UserList from "./UserList";
import NewUser from "./UserDetail/newUser";
import { Switch, Route } from "react-router-dom";

const routes = props => {
    const match = props.match;
    
    return (
        <Fragment>
            <Switch>
                <Route
                    exact
                    path={match.path}
                    component={UserList}
                    fetchurl="stuff"
                    {...props}
                />
                <Route path={`${match.path}/new`} component={NewUser} />
                <Route path={`${match.path}/:id`} component={UserDetail} />
            </Switch>
        </Fragment>
    );
};
export default routes;
