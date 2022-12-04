import React from "react";

export default function Article({name, logo, description}) {
    return (
        <article>
            <h2>{name}</h2>
            <img src={logo} alt={name} height={100} width={100} />
            <p>{description}</p>
        </article>
    );
}