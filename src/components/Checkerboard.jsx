import React from 'react'
import CheckerboardRow from "./CheckerboardRow";

export default class Checkerboard extends React.Component {
    constructor(props) {
        super(props);
        const checkerboard = [];
        for (let i = 0; i < 15; i++) {
            const row = [];
            for (let j = 0; j < 15; j++) {
                row.push(0);
            }
            checkerboard.push(row);
        }

        this.state = {
            // 如果是黑棋子的话就设置为1,否则设置为2
            isBlack: true,
            checkerboard
        }
    }

    handleClick(row, col) {
        console.log(row, col)
        // 在这里拿到了行和列之后，就可以去根据isBlack属性修改checkerboard的值了
        // react中提倡数据是不可变的
        // 传值赋值，和传址赋值
        // 拿到这个数组的深层拷贝
        // 先转为字符串，再转为对象
        const checkerboard = JSON.parse(JSON.stringify(this.state.checkerboard));
        // 根据行列的不同设置不同的值
        if (this.state.isBlack) {
            checkerboard[row][col] = 1;
        } else {
            checkerboard[row][col] = 2;
        }
        // 设置state
        this.setState({
            isBlack: !this.state.isBlack,
            checkerboard
        })
    }

    render() {
        const {checkerboard} = this.state;

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
