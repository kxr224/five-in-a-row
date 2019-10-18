import React from 'react'
import {Button} from 'antd'

class Control extends React.Component {
    render() {
        return <div>
            <Button onClick={this.props.restart} type="primary">重新开始</Button>
            <Button onClick={this.props.undo}>悔棋</Button>
        </div>
    }
}

export default Control
