"use client";

import React from 'react';

const  Greeting = ({params}) => {
    const {name}=React.use(params);
    return (
        <div>Greet {name} </div>
    );
};

export default  Greeting;