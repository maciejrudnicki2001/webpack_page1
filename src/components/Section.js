import React from "react";
import Article from "./Article";
import data from "../data/browsers.json";


export default function Section({}){
    return (
        <section>
            <h1>Popular web browsers</h1>
            {data.map((browser, i) => (
                <Article key={i} name={browser.name} logo={browser.logo} description={browser.description} />
            ))}
        </section>
    );
}