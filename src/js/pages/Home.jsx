import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLight } from "../components/TrafficLight";

//create your first component
const Home = () => {
	return (
		<TrafficLight text="texto de prueba de proptypes" />
	);
};

export default Home;