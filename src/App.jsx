import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="app">
            <nav className="navbar">
                <div className="nav-container">
                    <strong>Galymzhan</strong>
                    <div>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

            <Header />

            <main className="sections">
              <div id="about" className="section-wrapper">
                  <About />
              </div>

              <div id="contact" className="section-wrapper">
                  <Contact />
              </div>
            </main>

            <footer>
                <p>© 2026 Galymzhan</p>
            </footer>
        </div>
    );
}

export default App;