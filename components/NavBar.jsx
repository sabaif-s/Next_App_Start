import React from 'react';
import Link from 'next/link';
const  NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/" >Home</Link> 
                </li>
                <li>
                     <Link href="/about" >about</Link>
                </li>
                <li>
                    <Link href="/about/users" >Users</Link>
                </li>
            </ul>
        </div>
    );
};

export default  NavBar;