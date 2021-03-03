import React, { Component } from 'react'

class toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <ul>
                    <li>undo</li>
                    <li>redo</li>
                    <li>rectangle</li>
                    <li>circle</li>
                    <li>line</li>
                </ul>
            </div>
        )
    }
}

export default toolbar
