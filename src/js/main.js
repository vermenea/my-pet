import '../style/style.css';
import { feedFunction } from '../js/feedFunction.js';
import { loveFunction } from '../js/loveFunction.js';
import { sleepFunction } from '../js/sleepFunction.js';

const foodBtn = document.querySelector('#feed');
const loveBtn = document.querySelector('#love');
const sleepBtn = document.querySelector('#sleep');
const sittingPet = document.querySelector('.pet-sit');

export let isMovingActive = true;
export const defaultPet = document.querySelector('.pet');

const beginningState = () => {
	//deactivates moving pet and sets it's beggining state to sitting pet
	sittingPet.classList.remove('active');
	defaultPet.classList.add('active');
	defaultPet.innerHTML = sittingPet;
};
beginningState();
const initMovement = () => {
	//initializes movement
	sittingPet.classList.add('active');
	defaultPet.classList.remove('active');
	defaultPet.innerHTML = '';
};
setTimeout(initMovement, 2000);
function moveLeft() {
	if (isMovingActive) {
		defaultPet.classList.remove('turn-left');
		defaultPet.classList.add('move-left');
		//pet is moving to the left, remove previously added turn-left
		setTimeout(() => {
			defaultPet.classList.remove('move-left');
			defaultPet.classList.add('turn-right');
		}, 4000);
		//remove previously added moving to the left, turn pet's face to the right
		setTimeout(moveRight, 5000);
	}
}
function moveRight() {
	if (isMovingActive) {
		//turn pet's face to the left and start moving to the right
		defaultPet.classList.remove('turn-right');
		defaultPet.classList.add('move-right');

		setTimeout(() => {
			defaultPet.classList.remove('move-right');
			defaultPet.classList.add('turn-left');
			setTimeout(moveLeft, 3000);
			//remove previously added moving to the right, turn pet's face to the left
		}, 5000);
	}
}
setTimeout(moveLeft, 2200);
//start moving
foodBtn.addEventListener('click', () => {
	isMovingActive = false; // Stop movement when the feed button is clicked
	feedFunction();
	isMovingActive = true; // Resume movement after feeding
});

loveBtn.addEventListener('click', () => {
	isMovingActive = false; // Stop movement when the love button is clicked
	loveFunction();
	isMovingActive = true; // Resume movement after showing love
});

sleepBtn.addEventListener('click', () => {
	isMovingActive = false; // Stop movement when the sleep button is clicked
	sleepFunction();
	isMovingActive = true; // Resume movement after putting to sleep
});
