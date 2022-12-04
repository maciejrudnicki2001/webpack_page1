import React from 'react';
import navData from "../data/navBar.json";
export default function Nav() {
    return (
        <ul>
            {
                navData.map((navItem, index) => {
                    return <li key={index}>{navItem.name}</li>
                })
            }
        </ul>
    );

}