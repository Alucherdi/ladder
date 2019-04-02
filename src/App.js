import React from 'react'
import Lap from "./modules/Lap"

class App extends React.Component {
    constructor() {
        super()

        var rivals = [
            "Guillermo",
            "Gerry",
            "Kirito",
            "Mario"
        ]

        rivals.sort((a, b) => Math.random() < 0.5 ? 1 : -1)

        var lap = {
            matches: [],
        }

        for (var i = 0; i < rivals.length; i = i + 2) {
            lap.matches.push({
                rivals: [
                    rivals[i],
                    rivals[i + 1]
                ],
                ended: false,
                winner: ''  
            })
        }

        this.state = {
            lastLap: 0,
            laps: [
                lap
            ]
        }
    }

    setWinner = () => {
        var currentLap = this.state.laps[this.state.lastLap]
    }

    render() {
        return (
            <div>
                {this.state.laps.map((lap, ind) => (
                    <Lap matches={lap.matches} key={ind}/>
                ))}
            </div>
        )
    }
}

export default App