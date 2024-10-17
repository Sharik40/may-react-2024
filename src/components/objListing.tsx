import React from "react";

const objListing = (obj: any) => {
    return Object.entries(obj).map(([key, value]) => {
        if (typeof value === 'object') {
            return (
                <div key={key}>{objListing(value)}</div>
            );
        } else {
            return (<p key={key}>{key} : {String(value)}</p>);
        }
    });
};

export default objListing;
