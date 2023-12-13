import { isMovingActive, defaultPet } from '../js/main';
export function sleepFunction() {
	if (!isMovingActive) {
		const sleepPet = document.querySelector('.pet-sleep');
		const sound = new Audio('./public/audio/sleepsound.wav');

		const sleep = () => {
			sleepPet.classList.remove('active');
			defaultPet.classList.add('active');
			sound.play();
		};

		sleep();
		setTimeout(() => {
			defaultPet.classList.remove('active');
			sleepPet.classList.add('active');
		}, 8000);
	}
}
