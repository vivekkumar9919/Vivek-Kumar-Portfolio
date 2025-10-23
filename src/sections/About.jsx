import React from "react";

function About() {
    return (
        <section id="about">
            <h2 className="section-title fade-in">What I Focus On</h2>
            <p className="section-subtitle fade-in">"Build systems that scale — not just work."</p>

            <div className="focus-grid">
                <div className="focus-card fade-in">
                    <div className="focus-icon">🏗</div>
                    <h3>Backend Architecture</h3>
                    <p>Designing backend flows with reliability and performance in mind</p>
                </div>
                <div className="focus-card fade-in">
                    <div className="focus-icon">🛠</div>
                    <h3>Code Refactoring</h3>
                    <p>Refactoring legacy code to adopt clean, modular patterns</p>
                </div>
                <div className="focus-card fade-in">
                    <div className="focus-icon">🔍</div>
                    <h3>Debugging Master</h3>
                    <p>Debugging deep production issues — logs are my best friend</p>
                </div>
                <div className="focus-card fade-in">
                    <div className="focus-icon">📊</div>
                    <h3>Data Operations</h3>
                    <p>Handling high-volume data operations with efficiency</p>
                </div>
                <div className="focus-card fade-in">
                    <div className="focus-icon">🧪</div>
                    <h3>Testing & Deployment</h3>
                    <p>Writing meaningful tests and safe deployment routines</p>
                </div>
                <div className="focus-card fade-in">
                    <div className="focus-icon">🧩</div>
                    <h3>Clean Code</h3>
                    <p>Writing code that other devs want to read and maintain</p>
                </div>
            </div>

        </section>
    );
}

export default About;
