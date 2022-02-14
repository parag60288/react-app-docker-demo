import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href={process.env.REACT_APP_COMPANY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {process.env.REACT_APP_COMPANY_NAME}
                </a>
            </header>
        </div>
    );
}

export default App;
