import React from 'react'

export default class CheckerboardCell extends React.Component {

    // 每次点击的时候需要做什么？
    // 修改棋盘的值
    // 修改棋盘的值需要哪些参数，横坐标，纵坐标，这个数字该是0还是1
    handleClick = () => {
        this.props.onClickCell(this.props.row, this.props.col);
    };

    render() {
        return (
            <div className="CheckerboardCell-cell" onClick={this.handleClick}>
                <div className="CheckerboardCell-cell-row" />
                <div className="CheckerboardCell-cell-col" />
                {
                    this.props.value === 1 && <div className="pieces" style={{background:'#333'}} />
                }
                {
                    this.props.value === 2 && <div className="pieces" style={{background:'white'}} />
                }
            </div>
        );
    }
}
