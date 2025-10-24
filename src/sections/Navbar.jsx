import React from "react";

function Navbar() {
    return (
        <nav>
        <div class="container">
            <div class="logo">vivek<span>@dev</span></div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;
