import {CriminalHTML} from './Criminal.js';
import {getCriminals, useCriminals} from './CriminalProvider.js';

export const CriminalList = () => {
	getCriminals()
	.then(()=> {
		const criminalArray = useCriminals();
		console.log("criminalArray", criminalArray);
		addCriminalsToDOM(criminalArray);
	})
}

const addCriminalsToDOM = (aCriminalArray) => {
	const domElement = document.querySelector(".criminalsContainer");
	// addSelectToTheDOM();
	let HTMLArray = aCriminalArray.map(singleCriminal => {
		return CriminalHTML(singleCriminal);
	})
	domElement.innerHTML = HTMLArray.join("");
}
