import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="support-trafic-light"></div>
			<div className="light-container">
				<div className="light red my-2"></div>
				<div className="light yellow my-2"></div>
				<div className="light green my-2"></div>
			</div>
		</div>
	);
};

export default Home;
