import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Users from "../users";
import Products from "../products";
import urls from "../components/api/url"

import Login from "../login";
import Account from "../account";
import ProtectedRoute from "./components/protectedRoute";

function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/protectedProducts">ProtectedProducts</Link>
                        </li>
                        <li>
                            <Link to="/account">Account</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li><buton type="button" onClick={()=>{alert('logout')}}>Log out</buton></li>
                        <li>
                            <Link to="/login/register">Register</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Index} />
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
                <Route path="/products" component={Products} url="xxxx" />
                <Route path="/protectedProducts" component={()=>(<Products url={urls.pretectedProds()}/>) }/>

                {/* <Route path="/account" component={Account} /> */}
                <ProtectedRoute path="/account" component={Account} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    );
};

export default AppRouter;
