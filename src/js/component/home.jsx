import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	const [active, setActive] = useState('')
	const [loop, setLoop] = useState(false)
	let [position, setPosition] = useState(0) 
	const lights = [{color:'red'},{color:'yellow'},{color:'green'}]

	useEffect(()=>{
		const color = ['red','yellow','green']
		let ColorInterval = setInterval((prev)=>{
			// setActive(color[position])
			// setPosition[prev++]
			if(position <= color.length-1){
				console.log(color[position])
				console.log(position)
				setActive(color[position])
				setPosition(position++)
			}else{
				console.log("es mayor")
				console.log(position)
				setPosition(0)
			}
		},1000)
	},[loop])

	
	return (
		<div className="container">
			<div className="support-trafic-light"></div>
			<div className="light-container">
				{lights.map((light) => {
					const {color} = light;
					return <div onClick={()=>{setActive(light.color)}} className={`light ${color} my-2 ${active===color ? 'active' : ''}`}></div>	
				})}
			</div>
			<button className="btn btn-primary mt-2" onClick={()=>{setLoop(!loop)}}>Activar por tiempo</button>
		</div>
	);
};

export default Home;
