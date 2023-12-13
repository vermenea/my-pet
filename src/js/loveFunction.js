import { isMovingActive } from '/src/js/main.js';
export function loveFunction() {
	if (!isMovingActive) {
		const gameContainer = document.querySelector('#game-container');
		const love = document.createElement('img');
		const sound = new Audio('./public/audio/lovesound.wav');
		love.src = './public/images/love.png';

		love.style.position = 'fixed';
		love.style.right = '630px';
		love.style.top = '300px';
		love.width = 80;
		love.height = 80;
		gameContainer.appendChild(love);
		sound.play();

		setTimeout(() => {
			gameContainer.removeChild(love);
		}, 3000);
	}
}
