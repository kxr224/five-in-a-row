import React from 'react'
import Control from "../components/Control";
import Checkerboard from "../components/Checkerboard";

/**
 * 游戏的类
 */
class Game extends React.Component {
    render() {
        return <div>
            <Control />
            <Checkerboard />
        </div>
    }
}

export default Game;
