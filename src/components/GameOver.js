import React, { Component } from "react";

class GameOver extends Component {
    render() {
        if(!this.props.open) return null;
        return(
            <div>
                <div className="Overlay"></div>
                <div className="GameOver">
                    {this.props.children}
                    <button onClick={this.props.onClose}>Try Again</button>
                </div>
            </div>
        );
    }
}

export default GameOver;