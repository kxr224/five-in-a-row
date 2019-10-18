import React from 'react'
import CheckerboardRow from "./CheckerboardRow";
import {isSuccess} from "../utils/fiveSuccess";

export default class Checkerboard extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(row, col) {
        this.props.handleClickCell(row, col)
    }

    render() {
        const {checkerboard} = this.props;

        return (
            <div className='Checkerboard'>
                {
                    checkerboard.map((row, index) => {
                        return <CheckerboardRow key={index} cols={row} row={index}
                                                onClickCell={this.handleClick.bind(this)} />
                    })
                }
            </div>
        );
    }
}
