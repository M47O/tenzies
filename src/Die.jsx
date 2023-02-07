import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    const dieDots = `./die${props.value}.png`

    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <img src={dieDots} alt={`Die face showing ${props.value}`} />
        </div>
    )
}