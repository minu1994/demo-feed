import React, {Fragment} from "react";
import { toast} from 'react-toastify';


export function showToast(toastContent, onClick) {
    const options =  {
        onClick: onClick,
        autoClose: false,
        position: "bottom-right",
        draggable: false
    }
    console.log("called showToast")
    toast(toastContent, options)
}

export function simulateCallToEndpoint(callbackSuccess) {
    setTimeout(() => callbackSuccess(), 1000)
}

export const FeedContainer = ({children}) => (
    <Fragment>
        <h1> My Feed </h1>
        {children}
    </Fragment>
)

