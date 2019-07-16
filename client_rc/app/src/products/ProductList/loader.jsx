import React, { useState, useEffect, Fragment } from "react";
// import PropTypes from "prop-types";
// import LoadingIcon from "../components/LoadingIcon";

const LoadingComponent = props => {
    const {options} = props;
    const waitMS = options.wait ? options.wait : 1500;
    const fetchList = options.fetchList ? options.fetchList : [];
    // const loaderWithMinHeight = options.loaderWithMinHeight
    //         ? options.loaderWithMinHeight
    //         : false;

    console.log("what", props.isFetched)
    const [wait, setWait] = useState(waitMS > 0);
    const [waitTimeOut, setWaitTimeOut] = useState(undefined);
    const [isFetched, setIsFetched] = useState(props.isFetched);
 

    useEffect(() => {
        if(!isFetched) {
            doFetchList()
        }
        if(wait) {
            const timout = setTimeout(() => {
                setWait(false)         
            }, waitMS);
            setWaitTimeOut(timout)
        }
        return function cleanup() {
            if (typeof waitTimeOut === "number") {
                clearTimeout(waitTimeOut);
            }
        }
    },[isFetched, wait, "doFetchList", waitMS,waitTimeOut]);//run only once

    useEffect(()=> {
        if(!isFetched && props.isFetched) {
            setIsFetched(true)
        }
    })

    const doFetchList = () => {
        fetchList.forEach(item => {
            props.fetchMethods[item]();
        });   
    }

    if (!isFetched && wait) {
        return null;
    } else if (!isFetched && !wait) {
        return (
            <div>loading...</div>
            // <LoadingIcon loaderWithMinHeight={loaderWithMinHeight} />
        );
    }
    return (
        <Fragment>
            {props.children}
        </Fragment>
    );
}


export default LoadingComponent