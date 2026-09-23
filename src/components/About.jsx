function About() {
    return (
        <section className="container">
            <div className="card">
                <h2 className="section-title">About Me</h2>

                <p className="about-text">
                    I am a Computer Engineering and Software student at KBTU.
                    I enjoy creating practical software and learning new
                    technologies through personal and university projects.
                </p>

                <p className="about-text">
                    My interests include web development, Android development,
                    game development, and cybersecurity.
                </p>

                <div className="skills">
                    <span className="skill">React</span>
                    <span className="skill">JavaScript</span>
                    <span className="skill">Python</span>
                    <span className="skill">Django</span>
                    <span className="skill">Kotlin</span>
                    <span className="skill">Unity</span>
                </div>
            </div>
        </section>
    );
}

export default About;