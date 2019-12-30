import React from "react";
import '../assets/css/eventform.css'

class Eventregister extends React.Component{
    render() {
        return(
            <div className="eventForm">
                <div className="Desktop">Hello Desktop
                </div>
                <div className="Mobile">
                    <form action="sumbit">
                        Hello World
                    </form>
                </div>
            </div>
        );
    }
}

export default Eventregister;