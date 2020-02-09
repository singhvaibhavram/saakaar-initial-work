import React from 'react';
import '../assets/css/App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        this.props.history.push('/event');
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="contentDiv">
                        <b>साकार में हम आपके लिए जल्दी ही कुछ नया लेकर आ रहे हैं। ❤
                            हम जानते हैं वेट करना किसी को पसंद नहीं है। 😋
                        </b>
                        <a href='https://wa.me/917022789970?text=Hello!%20'> तो हिंट के लिए हमें इस लिंक पर क्लिक कर whatsapp करें: </a>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
