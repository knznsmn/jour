import {Header} from './components/Header.js';
import {Main} from './components/Main.js';
import {Footer} from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
	console.log("Insertion succeeded.")
	document.body.appendChild(Header());
	document.body.appendChild(Main());
	document.body.appendChild(Footer());
})