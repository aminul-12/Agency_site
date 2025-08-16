import React from "react";
import "../src/styls_1.0/scholerships.css";
import "../src/scripts/scholership.js";

export default function Scholarship() {
    return (
        <div className="scholarship-container">
            <header className="scholarship-header">
                <h1>🎓 Scholarship Opportunities</h1>
                <p>Find the best scholarships tailored for Computer Science & AI students</p>
            </header>

            <section className="scholarship-intro">
                <h2>Why Scholarships Matter?</h2>
                <p>
                    Scholarships provide financial support, recognition of academic
                    excellence, and opportunities for higher education abroad. Whether
                    you're applying in the UK, USA, or Canada – these scholarships can
                    shape your future.
                </p>
            </section>

            <section className="scholarship-list">
                <h2>Available Scholarships</h2>
                <div className="scholarship-card">
                    <h3>Chevening Scholarship (UK)</h3>
                    <p>Fully funded master’s program for future leaders from Bangladesh.</p>
                    <a href="https://www.chevening.org/apply/" target="_blank" rel="noreferrer">
                        Apply Now
                    </a>
                </div>

                <div className="scholarship-card">
                    <h3>Fulbright Scholarship (USA)</h3>
                    <p>Prestigious US government-funded scholarship for postgraduate studies.</p>
                    <a href="https://foreign.fulbrightonline.org/apply" target="_blank" rel="noreferrer">
                        Apply Now
                    </a>
                </div>

                <div className="scholarship-card">
                    <h3>Commonwealth Scholarship (UK)</h3>
                    <p>Fully funded scholarship for talented students from developing countries.</p>
                    <a href="https://cscuk.fcdo.gov.uk/scholarships/" target="_blank" rel="noreferrer">
                        Apply Now
                    </a>
                </div>

                <div className="scholarship-card">
                    <h3>Vanier Canada Graduate Scholarship</h3>
                    <p>Canadian government scholarship for world-class PhD candidates.</p>
                    <a href="https://vanier.gc.ca/en/home-accueil.html" target="_blank" rel="noreferrer">
                        Apply Now
                    </a>
                </div>
            </section>

            <section className="scholarship-tips">
                <h2>📌 Tips for Applying</h2>
                <ul>
                    <li>Prepare a strong Statement of Purpose (SOP).</li>
                    <li>Maintain an updated CV with academic & research achievements.</li>
                    <li>Request strong recommendation letters early.</li>
                    <li>Meet IELTS/TOEFL or English requirements.</li>
                </ul>
            </section>

            <footer className="scholarship-footer">
                <p>Designed & Developed by Aminul Islam © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}