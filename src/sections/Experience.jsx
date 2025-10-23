import React from "react";

function Experience() {

  return (
    <section id="experience">
        <h2 class="section-title fade-in">Experience & Growth</h2>
        <p class="section-subtitle fade-in">"Keep it clean, keep it consistent, keep it scalable."</p>

        <div class="timeline">
            <div class="timeline-item fade-in">
                <div class="timeline-title">Software Development Engineer</div>
                <div class="timeline-date">Fynd (Shopsense Retail Technologies Limited) </div>
                <div><i>Sept-2023 - Current</i></div>
                <ul>
                    <li>Designed and developed scalable backend systems, optimizing processes to support high-volume
                        data and improve system efficiency.</li>
                    <li>Focused on performance improvement through query optimization, ensuring faster data processing
                        and enhanced system responsiveness.</li>
                    <li>Refactored and modernized legacy systems to improve code quality, scalability, and long-term
                        maintainability.</li>
                    <li>Worked on implementing robust logging and monitoring solutions to improve visibility and
                        identify issues proactively.</li>
                    <li>Played a key role in improving system reliability and ensuring that business operations run
                        smoothly.</li>
                    <li>Contributed to the growth of the team by sharing knowledge and improving team processes.</li>
                </ul>

            </div>

            <div class="timeline-item fade-in">
                <div class="timeline-title">Intern</div>
                <div class="timeline-date">Fynd (Shopsense Retail Technologies Limited) </div>
                <div><i>Aug-2022 - Nov-2022</i></div>

                <ul>
                    <li>Completed 3 months of training in Full Stack Development with JavaScript.</li>
                    <li>Learned key technologies including MongoDB, Express, Vue.js, and Node.js.</li>
                    <li>Developed two minor projects during training:
                        <ul>
                            <li><strong>Typing Master</strong> – a web-based typing speed improvement app.</li>
                            <li><strong>Technostore</strong> – an e-commerce website for tech products.</li>
                        </ul>
                    </li>
                    <li>Built one major project – <strong>Coding Profile Manager</strong>, a platform to manage and
                        track coding profiles across different platforms.</li>
                </ul>

            </div>
        </div>
    </section>
  );
}

export default Experience;
