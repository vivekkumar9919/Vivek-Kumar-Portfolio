import React from "react";


function Projects() {
  return (
    <section id="projects">
        <h2 class="section-title fade-in">Featured Projects</h2>
        <p class="section-subtitle fade-in">"First solve the problem. Then, write the code."</p>

        <div class="projects-grid">
            <div class="project-card fade-in">
                <div class="project-header">
                    <div class="project-title">AI Agent for Product Querying</div>
                </div>
                <div class="project-body">
                    <p>This project is a lightweight AI agent that understands user queries related to products and
                        automatically calls the correct internal tool to fetch data. It simplifies search operations by
                        using the DeepSeek model to determine tools and parameters dynamically, enabling intelligent
                        e-commerce-like query handling.</p>
                    <div class="tech-tags">
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">MongoDB</span>
                        <span class="tech-tag">Docker</span>
                        <span class="tech-tag">React</span>
                    </div>

                    <div class="project-links mt-3">
                        <a href="https://github.com/vivekkumar9919/AI-search-agent" target="_blank">🔗 GitHub</a> |
                        <a href="https://github.com/vivekkumar9919/smart-product-search-frontend" target="_blank">🔗 GitHub</a> 
                        {/* <a href="https://your-live-demo-url.com" target="_blank">🚀 Live Demo</a> */}
                    </div>

                </div>
            </div>

            <div class="project-card fade-in">
                <div class="project-header">
                    <div class="project-title">Scalable Messaging App</div>
                </div>
                <div class="project-body">
                    <p>Developed a high-performance real-time messaging application supporting seamless communication
                        and message persistence. Focused on scalable architecture with efficient Redis-based message
                        queues and PostgreSQL storage, ensuring minimal latency and reliability under heavy load.</p>
                    <div class="tech-tags">
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">PostgreSQL</span>
                        <span class="tech-tag">Redis</span>
                        <span class="tech-tag">Docker</span>
                        <span class="tech-tag">React</span>
                    </div>
                    <div class="project-links mt-3">
                        <a href="https://github.com/vivekkumar9919/chat-application-backend" target="_blank">🔗 GitHub</a> |
                        <a href="https://github.com/vivekkumar9919/chat-application-frontend" target="_blank">🔗 GitHub</a> 
                        {/* <a href="https://your-live-demo-url.com" target="_blank">🚀 Live Demo</a> */}
                    </div>
                </div>
            </div>

            <div class="project-card fade-in">
                <div class="project-header">
                    <div class="project-title">Coding Profile Manager</div>
                </div>
                <div class="project-body">
                    <p>Created a unified platform that integrates data from LeetCode, CodeChef, and Codeforces into a
                        single developer profile. Users can manage friends, view progress, and educators can track and
                        rank students based on coding performance, ratings, and solved problems across platforms.</p>
                    <div class="tech-tags">
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">MongoDB</span>
                        <span class="tech-tag">React</span>
                    </div>
                    <div class="project-links mt-3">
                        <a href="https://github.com/vivekkumar9919/Coding-Profile-manager" target="_blank">🔗 GitHub</a> |
                        <a href="https://coding-profile-manager.vercel.app/" target="_blank">🚀 Live Demo</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
  );
}

export default Projects;
