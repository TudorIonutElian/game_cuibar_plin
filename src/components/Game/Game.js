import React, {Component} from "react";
import GameBoard from "../GameBoard/GameBoard";
import PlayerBoard from "../PlayerBoard/PlayerBoard";

import "./Game.css";

class Game extends Component {

    render() {
        return (
            <div className="Game">
                <div>Game Cuibar Plin</div>
                <GameBoard />
                <div className="Players"> 
                    <PlayerBoard/>
                    <PlayerBoard/>
                </div>
            </div>
        );
    }
}


export default Game;