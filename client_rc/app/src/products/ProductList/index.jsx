import React, { Fragment } from "react";
import Api from "../../components/api";
import urls from "../../components/api/url";
import { Link } from "react-router-dom";
import { H1 } from "../../components/syles/typography";
import Paper from "../../components/layout/paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Loader from "./loader";
import {AppStateConsumer} from "../../components/AppContext";

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            isFetched: false,
            items: [],
            fetchMethods: { fetchUsers: this.fetchUsers
            }
           
        };
     
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        const url =  (this.props.match.path === "/protectedProducts")?  urls.pretectedProds(): urls.products();
        this.setState({ isFetching: true });
        Api.get(url).then(response => {
            this.props.context.updateAllProducts(response.data);
            console.log("look",response);
            this.setState({
                isFetching: false,
                isFetched: true,
                items: response.data
            });
            return response;
        });
    };
    render() {
        const path = this.props.match.path;
        console.log("no GRAPHQL")
        const products = Object.values(this.props.context.allProducts);
    
        return (
            // <Loader  options={{fetchList:["fetchUsers"]}} isFetching={this.state.isFetching} isFetched={this.state.isFetched} fetchMethods={this.state.fetchMethods}>
                <Fragment>
                    <Paper>
                        {this.state.isFetching && <H1>is fetching</H1>}
                        {!this.state.isFetching && <H1>is not fetching</H1>}
                        <List>
                            { products.length &&
                                products.map((product, index) => {
                                    return (
                                        <ListItem
                                        button
                                        key={index}
                                    
                                    component={Link}
                                    to={`${path}/${product.id}`}
                                    >
                                    {product.title}  
                                    </ListItem>
                                );
                                })
                            }
                        </List>
                    </Paper>
                </Fragment>
            // </Loader>
        );
    }
}
const CustomProvider = (props) => {
    const context = AppStateConsumer();
    return(
        <Fragment>
            <Products context={context} {...props} />
        </Fragment>
    )
    
}
export default CustomProvider;
