import React from 'react';
import '../assets/css/App.css';

class App extends React.Component{
    render() {
        function handleClick(e) {
            window.open('/event')
        }
        return (
            <div className="App">
                <header className="App-header">
                    <div className="mobile-register">
                        <button className="register-button" onClick={handleClick}>Register</button>
                    </div>
                    <div className="desktop-register">
                        <button className="register-button" onClick={handleClick}>Register</button>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
