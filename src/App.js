import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Modal } from "./main";

function App() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div className="custom_component_wrapper">
                <div>
                    <Button
                        label="Click me"
                        onClick={() => console.log("Button clicked")}
                    />
                </div>
                <div>
                    <button onClick={openModal}>Open Modal</button>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <h2>Modal Content</h2>
                        <p>This is the content of your modal.</p>
                        <button onClick={closeModal}>Close Modal</button>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default App;
