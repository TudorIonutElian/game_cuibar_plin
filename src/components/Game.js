import React, {Component} from "react";
import GameBoard from "./GameBoard";
import PlayerBoard from "./PlayerBoard";

class Game extends Component {

    render() {
        return (
            <div>
                <div>Game Cuibar Plin</div>
                <GameBoard />
                <div className="players h-full w-full flex flex-col items-center"> 
                    <PlayerBoard />
                    <PlayerBoard />
                </div>
            </div>
        );
    }
}


export default Game;