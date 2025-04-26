import { useEffect, useState } from "react"


export const TrafficLightRefactor = (props) => {

    const [trafficState, setTrafficState] = useState({
        color: "",
        lightPurple: false,
        colorAuto: false
    })


    const changeColor = (newColor) => {
        setTrafficState((prev) => ({
            ...prev,
            color: prev.color == newColor ? "" : newColor

        }))
    }

    const getColorSequence = (lightPurple) =>
        lightPurple ? ["red", "yellow", "green", "purple"] : ["red", "yellow", "green"];


    const autoChangeColors = () => {
        setTrafficState(prev => {
            const colors = getColorSequence(prev.lightPurple);
            const nextColor = colors.find((_, i) => colors[i - 1] === prev.color) || colors[0];
            return { ...prev, color: nextColor };
        });
    };



    useEffect(() => {
        if (trafficState.colorAuto) {


            const intervalId = setInterval(() => {
                autoChangeColors()
            }, 1000)

            return () => clearInterval(intervalId)
        }
    }, [trafficState.colorAuto])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 traffic-container">
                    <div className="traffic-pole"></div>
                    <div className="traffic-light">
                        {
                            getColorSequence(trafficState.lightPurple).map((color, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`light-${color} ${trafficState.color == color ? "on" : ""}`}
                                        onClick={() => changeColor(color)}
                                    ></div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="col-12 mt-5 d-flex justify-content-center py-3 gap-3 ">
                    <button
                        className={`btn btn-outline-${!trafficState.lightPurple ? "success" : "danger"}`}
                        onClick={() => setTrafficState((prev) => ({ ...prev, lightPurple: !prev.lightPurple }))}
                    >
                        {
                            trafficState.lightPurple ? "Remove Light" : "Add New Light"
                        }
                    </button>

                    <button
                        className="btn btn-outline-success"
                        onClick={() => setTrafficState((prev) => ({
                            ...prev,
                            colorAuto: !prev.colorAuto
                        }))}
                    >
                        {trafficState.colorAuto ? "On Automatic" : "Off Automatic"}
                    </button>
                </div>
            </div>
        </div>
    )
}
