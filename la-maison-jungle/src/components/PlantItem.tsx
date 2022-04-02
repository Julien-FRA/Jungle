import { Children } from 'react';
import React from 'react';
import CareScale from './CareScale';
import '../assets/PlantItem.css';

interface PlantProps {
    name: string
    cover: string
    id: int
    water: int
    light: int
}

const PlantItem = ({name, cover, id, water, light}: PlantProps) => {
    return (
        <div key={id} className='lmj-plant-item'>
            <p>{name}</p>
            <img src={cover} alt={name} className='lmj-plant-item-cover'></img>
            <div>
                <CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
            </div>
        </div>    
    )
}

export default PlantItem