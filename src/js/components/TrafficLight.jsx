import { useEffect, useState } from "react"
import PropTypes from "prop-types"

export const TrafficLight = (props) => {

    const [color, setColor] = useState("")
    const [lightPurple, setLightPurple] = useState(false)
    const [colorAuto, setColorAuto] = useState(false)

    const changeColor = (colorSelected) => {
        if (colorSelected != color) {
            setColor(() => colorSelected)
        } else {

            setColor("")
        }
    }

    const autoChangeColors = () => {
        if (colorAuto) {
            if (lightPurple) {
                if (color == "") {
                    setColor("red")
                } else if (color == "red") {
                    setColor("yellow")
                } else if (color == "yellow") {
                    setColor("green")
                } else if (color == "green") {
                    setColor("purple")
                } else if (color == "purple") {
                    setColor("red")
                } else {
                    setColor("")
                }
            } else {
                if (color == "") {
                    setColor("red")
                } else if (color == "red") {
                    setColor("yellow")
                } else if (color == "yellow") {
                    setColor("green")
                } else if (color == "green") {
                    setColor("red")
                } else {
                    setColor("")
                }
            }
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            autoChangeColors()
        }, 1000)

        return () => clearInterval(intervalId)
    }, [color, colorAuto])


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
                        {
                            lightPurple &&
                            <div
                                className={`light-purple ${color == "purple" ? "on" : ""}`}
                                onClick={() => changeColor("purple")}
                            ></div>
                        }
                    </div>
                </div>
                <div className="col-12 mt-5 d-flex justify-content-center py-3 gap-3 border border-danger">
                    <button
                        className={`btn btn-outline-${!lightPurple ? "success" : "danger"}`}
                        onClick={() => setLightPurple((prev) => !prev)}
                    >
                        {
                            lightPurple ? "Remove Light" : "Add New Light"
                        }
                    </button>

                    <button
                        className="btn btn-outline-success"
                        onClick={() => setColorAuto((prev) => !prev)}
                    >
                        {colorAuto ? "On Automatic" : "Off Automatic"}
                    </button>
                </div>
            </div>
        </div>
    )
}
