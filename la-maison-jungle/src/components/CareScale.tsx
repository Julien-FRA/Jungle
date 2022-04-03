import Sun from '../img/sun.svg'
import Water from '../img/water.svg'

interface ClickProps {
	scaleValue: number
	careType: string
}

const careScaleClick = (info, value) => {
	info === 3 ? alert(`Cette plante requiert beaucoup de ${value}.`) 
	: info === 2 ? alert(`Cette plante requiert modérement de ${value}.`)
	: alert(`Cette plante requiert peu de ${value}.`)
	
}

const CareScale = ({ scaleValue, careType }: ClickProps) => {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => careScaleClick(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}


export default CareScale;
