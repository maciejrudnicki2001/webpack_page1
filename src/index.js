import React,{StrictMode} from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Nav from "./components/Navbar";

const root = createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <header>
            <p>Navigation bar</p>
            <Header />
        </header>
        <Section />
        <Footer />
    </StrictMode>
);