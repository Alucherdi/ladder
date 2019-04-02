import React from 'react'

import Match from './Match'

class Lap extends React.Component {
    render() {
        return (
            <div>
                {this.props.matches.map((match, ind) => {
                    return (
                        <Match rivals={[
                            match.rivals[0],
                            match.rivals[1]
                        ]} key={ind}/>
                    )
                })}
            </div>
        )
    }
}

export default Lap