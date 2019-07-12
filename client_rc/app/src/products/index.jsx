import React, { Fragment } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import { Switch, Route } from "react-router-dom";
 
const routes = props => {
    const match = props.match;
    return (
        <Fragment>
            <Switch>
                <Route
                    exact
                    path={match.path}
                    component={ProductList}
                    {...props}
                />
                <Route path={`${match.path}/new`} component={ProductDetail} />
                <Route path={`${match.path}/:id`} component={ProductDetail} />
                                
            </Switch>
        </Fragment>
    );
};
export default routes;
