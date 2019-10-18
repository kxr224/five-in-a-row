import React from 'react'
import CheckerboardCell from "./CheckerboardCell";

export default class CheckerboardRow extends React.Component {
    onClickCell(row, col) {
        this.props.onClickCell(row, col);
    }

    render() {
        return (
            <div className="CheckerboardRow-row">
                {
                    // cols是个数组
                    this.props.cols.map((col, index) => {
                        return <CheckerboardCell key={index} col={index} row={this.props.row} value={col}
                                                 onClickCell={this.onClickCell.bind(this)} />
                    })
                }
            </div>
        );
    }
}
