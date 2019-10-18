import React from 'react'
import { PageHeader, Button } from 'antd';


class Control extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: '#F5F5F5',
                    padding: 24,
                }}
            >
                <PageHeader
                    ghost={false}
                    title="五子棋"
                    subTitle="react五子棋"
                    extra={[
                            <Button onClick={this.props.restart} type="primary">重新开始</Button>,
                            <Button onClick={this.props.undo}>悔棋</Button>
                    ]}
                >
                </PageHeader>
            </div>
        )
    }
}

export default Control
