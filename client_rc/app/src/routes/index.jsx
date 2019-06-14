import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
} from "react-router-dom";
import Users from "../users";
import Products from "../products";
import urls from "../components/api/url";
import handleLogOut from "./components/logout";
import Login from "../login";
import Account from "../account";
import ProtectedRoute from "./components/protectedRoute";
import { Nav, NavUl } from "./styles/nav";
import ScrollToTop from "../components/ScrollToTop";
import PrimaryNav from "../components/Navigation/PrimaryNavigation";
import About from "../About"
import PrimeDrawer from "../components/Navigation/Drawer"; 


function Index() {
    return <h2>Home</h2>;
}



const AppRouter = () => {
    return (
       
        <Router>
            <PrimeDrawer/>
            <PrimaryNav/>
            <div>
                {/* <Nav>
                    <NavUl>
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
                            <Link to="/protectedProducts">
                                ProtectedProducts
                            </Link>
                        </li>
                        <li>
                            <Link to="/account">Account</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <button type="button" onClick={handleLogOut}>
                                Log out
                            </button>
                        </li>
                        <li>
                            <Link to="/login/register">Register</Link>
                        </li>
                    </NavUl>
                </Nav> */}
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/about" component={About} />
                        <Route path="/users" component={Users} />
                        <Route path="/products" component={Products} url="xxxx" />
                        <Route
                            path="/protectedProducts"
                            component={() => <Products url={urls.pretectedProds()} />}
                        />
            
                        {/* <Route path="/account" component={Account} /> */}
                        <ProtectedRoute path="/account" component={Account} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </ScrollToTop>
            </div>
            
        </Router>
        
    );
};

export default AppRouter;
