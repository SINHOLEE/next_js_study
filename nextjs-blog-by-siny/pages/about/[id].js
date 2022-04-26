import React from 'react';
import {useRouter} from "next/router";
import GoHome from "../../GoHome";

const Id = () => {
    const {query:{id}} = useRouter()
    if(!id){
        return null
    }

    return (
        <div>
            {id}
            <span>
            으악
            </span>
            <GoHome/>
        </div>
    );
};

    export default Id;