import React from 'react'

export default class CheckerboardCell extends React.Component {

    // 每次点击的时候需要做什么？
    // 修改棋盘的值
    // 修改棋盘的值需要哪些参数，横坐标，纵坐标，这个数字该是0还是1
    handleClick = () => {
        this.props.onClickCell(this.props.row, this.props.col);
    };

    render() {
        let rowStyle = {};
        let colStyle = {};
        if (this.props.row === 0) {
            colStyle = {
                ...colStyle,
                height: '50%',
                top: '50%'
            }
        }

        if (this.props.row === 14) {
            colStyle = {
                ...colStyle,
                height: '50%',
            }
        }

        if (this.props.col === 0){
            rowStyle={
                ...rowStyle,
                width:'50%',
                left:'50%'
            }
        }

        if (this.props.col === 14){
            rowStyle={
                ...rowStyle,
                width:'50%',
            }
        }

        return (
            <div className="CheckerboardCell-cell" onClick={this.handleClick}>
                <div className="CheckerboardCell-cell-row" style={rowStyle} />
                <div className="CheckerboardCell-cell-col" style={colStyle} />
                {
                    this.props.value === 1 && <div className="pieces" style={{background: '#333'}} />
                }
                {
                    this.props.value === 2 && <div className="pieces" style={{background: 'white'}} />
                }
            </div>
        );
    }
}
