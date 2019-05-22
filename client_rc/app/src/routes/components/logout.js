import api from "../../components/api";
import urls from "../../components/api/url";

const logOut = () => {
    const url = urls.logOut();
    return api.get(url).then(response => {
        debugger;
        console.table({ response });
    });
};

export default logOut;