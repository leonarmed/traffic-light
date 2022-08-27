import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	const [active, setActive] = useState('')
	const [loop, setLoop] = useState(false)
	const [lights, setLights] = useState(['red','yellow','green'])

	function setColor(){
		let position = 0;
		let interval = setInterval((prev)=>{
			if(position <= lights.length-1){
				setActive(prev=>{
					return lights[position]
				})
				return position++
			}else{
				console.log("es mayor")
				position = 0
				return
			}
		},1000)
		setLoop(()=>{
			return interval
		})
	}

	const handleLight = () => {
		if(loop){
			clearInterval(loop)
			setLoop(false)
			setActive("")
		}else{
			setColor()
		}
	}

	
	return (
		<div className="container">
			<div className="support-trafic-light"></div>
			<div className="light-container">
				{lights.map((light, i) => {
					return <div key={i} onClick={()=>{setActive(light)}} className={`light ${light} my-2 ${active===light ? 'active' : ''}`}></div>	
				})}
			</div>
			<button className="btn btn-primary mt-2" onClick={handleLight}>Activar por tiempo</button>
			<button className="btn btn-primary mt-2" onClick={()=>setLights([...lights,'purple'])}>Agregar color Purpura al Semáforo</button>
		</div>
	);
};

export default Home;
