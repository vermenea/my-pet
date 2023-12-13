import { isMovingActive, defaultPet } from '../js/main';
export function feedFunction() {
	if (!isMovingActive) {
		const foodPet = document.querySelector('.pet-food');
		const sound = new Audio('./public/audio/eatingsound.ogg');
		const chat = document.querySelector('.pop-up');

		const feed = () => {
			foodPet.classList.remove('active');
			defaultPet.classList.add('active');
			chat.classList.remove('active');
			chat.innerText = 'Yum!';
			sound.play();
		};

		feed();
		setTimeout(() => {
			chat.classList.add('active');
			defaultPet.classList.remove('active');
			foodPet.classList.add('active');
		}, 8000);
	}
}
