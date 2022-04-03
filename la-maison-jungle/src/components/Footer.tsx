import { useState } from 'react'
import '../assets/Footer.css'

function blurClick(mail) {
    const arobase = '@';
    mail.includes(arobase) ? alert('Votre email est valide.') : alert('Votre email est mal renseigné.');
}

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <textarea 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => blurClick(inputValue)}>Envoyer</button>
		</footer>
	)
}

export default Footer