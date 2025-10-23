import React from "react";

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="terminal">
                <div className="terminal-header">
                    <span className="terminal-btn btn-close"></span>
                    <span className="terminal-btn btn-minimize"></span>
                    <span className="terminal-btn btn-maximize"></span>
                    <span
                        style={{ marginLeft: "1rem", color: "var(--text-secondary)" }}
                    >
                        vivek@developer:~
                    </span>
                </div>

                <div className="terminal-body">
                    <div className="comment">"All my essentials, packed in JSON."</div>
                    <div className="code-block">
                        <div className="code-line">
                            <span className="key">var</span> vivek = {"{"}
                        </div>
                        <div className="code-line">
                            <span className="key">role:</span>{" "}
                            <span className="string">'Software Developer'</span>,
                        </div>
                        <div className="code-line">
                            <span className="key">loves:</span>{" "}
                            <span className="array">
                                ['clean code', 'system design', 'debugging']
                            </span>,
                        </div>
                        <div className="code-line">
                            <span className="key">tools:</span>{" "}
                            <span className="array">
                                ['Javascript', 'Python', 'MongoDB', 'Redis']
                            </span>,
                        </div>
                        <div className="code-line">
                            <span className="key">learning:</span>{" "}
                            <span className="array">
                                ['PostgreSQL', 'MySQL', 'system architecture']
                            </span>,
                        </div>
                        <div className="code-line">
                            <span className="key">hobbies:</span>{" "}
                            <span className="array">
                                ['exploring logs', 'optimizing queries', 'mentoring juniors']
                            </span>,
                        </div>
                        <div className="code-line">
                            <span className="key">motto:</span>{" "}
                            <span className="string">
                                'Build systems that scale — not just work'
                            </span>
                        </div>
                        <div className="code-line">{"};"}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
