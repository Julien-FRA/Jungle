import { Children } from "react";
import React from "react";
import CareScale from "./CareScale.tsx";
import "../assets/PlantItem.css";

interface PlantProps {
  name: string;
  cover: string;
  id: number;
  water: number;
  light: number;
}

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

const PlantItem= ({ cover, name, water, light }: PlantProps) => {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem;
