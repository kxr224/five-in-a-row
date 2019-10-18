import React from 'react'
import Control from "../components/Control";
import Checkerboard from "../components/Checkerboard";
import {isSuccess} from "../utils/fiveSuccess";
import { message } from 'antd';
import { Modal } from 'antd';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { confirm } = Modal;
/**
 * 游戏的类
 */
class Game extends React.Component {
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
        // 实现悔棋功能，就需要记录每一步发生什么，每次一有修改就记录下
        this.state = {
            // 如果是黑棋子的话就设置为1,否则设置为2
            isBlack: true,
            checkerboard,
            isSuccess: false,
            history: []
        }
    }

    handleClickCell(row, col) {
        console.log(row, col)
        // 在这里拿到了行和列之后，就可以去根据isBlack属性修改checkerboard的值了
        // react中提倡数据是不可变的
        // 传值赋值，和传址赋值
        // 拿到这个数组的深层拷贝
        // 先转为字符串，再转为对象
        const checkerboard = JSON.parse(JSON.stringify(this.state.checkerboard));
        // 这一行没有值，我们在设置值
        if (checkerboard[row][col] !== 0) {
            return;
        }
        if (this.state.isSuccess) {
            return;
        }

        // 根据行列的不同设置不同的值
        if (this.state.isBlack) {
            checkerboard[row][col] = 1;
        } else {
            checkerboard[row][col] = 2;
        }
        // 落子之后，判断是否胜利
        if (isSuccess(checkerboard, row, col)) {
            message.success('你赢了');
            this.setState({
                isSuccess: true
            })
        }

        // 设置state
        // 每次设置state的时候会触发数据的修改
        const history = JSON.parse(JSON.stringify(this.state.history));
        history.push({
            isBlack: this.state.isBlack,
            checkerboard: this.state.checkerboard
        });
        this.setState({
            isBlack: !this.state.isBlack,
            checkerboard,
            history
        })
    }

    restart() {
        const checkerboard = [];
        for (let i = 0; i < 15; i++) {
            const row = [];
            for (let j = 0; j < 15; j++) {
                row.push(0);
            }
            checkerboard.push(row);
        }

        this.setState({
            // 如果是黑棋子的话就设置为1,否则设置为2
            isBlack: true,
            checkerboard,
            isSuccess: false,
            history: []
        })
    }

    undo() {
        confirm({
            title: '确定',
            content: '您确定要悔棋吗',
            okText:'确定',
            cancelText:'取消',
            onOk:()=> {
                const {history} = this.state;
                const lastState = history.pop();
                this.setState({
                    isBlack: lastState.isBlack,
                    checkerboard: lastState.checkerboard,
                    isSuccess: false,
                    history
                })
            },
            onCancel() {},
        });

    }

    render() {
        return <div>
            <Control restart={this.restart.bind(this)}  undo={this.undo.bind(this)}/>
            <Checkerboard checkerboard={this.state.checkerboard} handleClickCell={this.handleClickCell.bind(this)} />
        </div>
    }
}

export default Game;
