import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem.tsx'
import '../assets/ShoppingList.css'
import plantImg from '../img/monstera.png'


function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, plantImg, name, water, light }) => (
					<PlantItem
						key={id}
						cover={plantImg}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList