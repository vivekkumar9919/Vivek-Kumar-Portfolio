import React from "react";

function Skills() {
  return (
    <section id="skills">
        <h2 class="section-title fade-in">My Toolbox</h2>
        <p class="section-subtitle fade-in">"If code is art, these are my brushes."</p>

        <table class="skills-table fade-in">
            <thead>
                <tr>
                    <th>Languages</th>
                    <th>Databases</th>
                    <th>Tools & Infra</th>
                    <th>Dev Practices</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Python 🐍</td>
                    <td>MongoDB 🍃</td>
                    <td>Docker 🐳</td>
                    <td>Logging & Monitoring</td>
                </tr>
                <tr>
                    <td>JavaScript (React) ⚛️</td>
                    <td>Redis 🚀</td>
                    <td>Kafka ⚡</td>
                    <td>CI/CD Pipelines</td>
                </tr>
                <tr>
                    <td>C++</td>
                    <td>PostgreSQL (learning)</td>
                    <td>GCP</td>
                    <td>Test Suites</td>
                </tr>
                <tr>
                    <td></td>
                    <td>MySQL (learning)</td>
                    <td>Newrelic, Sentry</td>
                    <td>Code Reviews</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Grafana, Coralogix</td>
                    <td>Clean Architecture</td>
                </tr>
            </tbody>
        </table>

        <div class="quote fade-in">
            <p>"Logs tell stories. Listen to them."</p>
            <div class="quote-author">— Debugging Philosophy</div>
        </div>
    </section>
  );
}

export default Skills;
