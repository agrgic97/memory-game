import React, { Component } from "react";

class Header extends Component {
    render() {
        return(
            <div className="Header">
                <span className="Title">One Piece Memory Game</span>
                <span className="HighScore">HighScore: {this.props.Highscore}</span>
                <span className="Score">Score: {this.props.Score}</span>
            </div>
        )
    }
}

export default Header;