import profileImage from "../assets/profile.jpg";

function Header() {
    return (
        <header className="hero container">
            <div className="hero-text">
                <div className="tag">Student Developer</div>
                <h1>
                    Hi, I'm <span>Galymzhan</span>
                </h1>
                <p>
                    I build websites, applications, and games while studying
                    Computer Engineering and Software at KBTU.
                </p>
            </div>

            <div className="hero-image">
                <img src={profileImage} alt="Galymzhan" />
            </div>
        </header>
    );
}

export default Header;