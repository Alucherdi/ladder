import React from 'react'
import './Rival.scss'

class Rival extends React.Component {
    loose = (e) => {
        e.currentTarget.classList.add('looser')
    }

    render() {
        return (
            <div className="rival" onClick={this.loose}>
                {this.props.name}
            </div>
        )
    }
}

export default Rival