import React from 'react'
import Charts from './Charts'
import Editor from './Editor'



class Echarts extends React.Component {
    render() {
        return (
            <div style={{ padding: 8, display: 'flex' }}>

                <div style={{ flex: 1 }}>
                    <Charts />
                </div>
                <div style={{ flex: 1 }}>
                    <Editor />
                </div>



            </div>
        )
    }
}

export default Echarts;