import React from 'react';
import '../assets/css/App.css';

class App extends React.Component{

    handleClick = (e) =>  {
        this.props.history.push('/event');
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="mobile-register">
                        <button className="register-button"
                                onClick={(event) => this.handleClick(event)}
                        >Register</button>
                    </div>
                    <div className="desktop-register">
                        <button  className="register-button"
                                 onClick={(event) => this.handleClick(event)}
                        >Register</button>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
