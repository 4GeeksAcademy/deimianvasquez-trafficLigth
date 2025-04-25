import { useState } from "react"
import PropTypes from "prop-types"

export const TrafficLight = (props) => {

    const [color, setColor] = useState("")

    const changeColor = (colorSelected) => {
        if (colorSelected != color) return setColor(() => colorSelected)
        setColor(color ? "" : colorSelected)
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-12 traffic-container">
                    <div className="traffic-pole"></div>
                    <div className="traffic-light">
                        <div
                            className={`light-red ${color == "red" ? "on" : ""}`}
                            onClick={() => changeColor("red")}
                        ></div>
                        <div
                            className={`light-yellow ${color == "yellow" ? "on" : ""}`}
                            onClick={() => changeColor("yellow")}
                        ></div>
                        <div
                            className={`light-green ${color == "green" ? "on" : ""}`}
                            onClick={() => changeColor("green")}
                        ></div>
                    </div>
                </div>
                <h1>{props.text}</h1>
            </div>
        </div>
    )
}

TrafficLight.propTypes = {
    text: PropTypes.string
}