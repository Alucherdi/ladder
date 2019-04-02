import React from 'react'
import Rival from './Rival'
import './Match.scss'

class Match extends React.Component {    
    render() {
        return (
            <div className="match">
                <Rival name={this.props.rivals[0]} />
                <Rival name={this.props.rivals[1]} />
            </div>
        )
    }
}

export default Match