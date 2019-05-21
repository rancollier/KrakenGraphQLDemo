import React, { Fragment } from "react";
import Api from "../components/api";
import urls from "../components/api/url";
import { H1 } from "../components/syles/typography";

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            items: []
        };
        console.log("prods",props)
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
       
        const url =  (this.props.url)?  (this.props.url) : urls.products();
        console.log("fetching", url);
        this.setState({ isFetching: true });
        Api.get(url).then(response => {
            console.log(response);
            this.setState({
                isFetching: false,
                items: response.data
            });
            return response;
        });
    };
    render() {
        return (
            <Fragment>
                {this.state.isFetching && <H1>is fetching</H1>}
                {!this.state.isFetching && <H1>is not fetching</H1>}
                {this.state.items.length &&
                    this.state.items.map((user, index) => {
                        return <div key={user.id}>{user.title}</div>;
                    })}
            </Fragment>
        );
    }
}

export default Products;
