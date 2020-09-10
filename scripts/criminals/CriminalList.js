import {CriminalHTML} from './Criminal.js';
import {getCriminals, useCriminals} from './CriminalProvider.js';
import { useWitness } from '../witness/WitnessProvider.js';

const eventHub = document.querySelector("#main");

//the list needs to listen for the custom event
eventHub.addEventListener("crimeChosen", event => {
	//get selected one of officer
	const contentTarget = document.querySelector("#officerSelect")
	console.log("what officer is selected?", contentTarget.value);
	
	if (event.detail.crimeThatWasChosen !== "0"){
		//filter
		const matchingCriminals = useCriminals().filter(singleCriminal => {
			return singleCriminal.conviction === event.detail.crimeThatWasChosen
		});
		//invoke render with filter result
		addCriminalsToDOM(matchingCriminals)
	}else{
		addCriminalsToDOM(useCriminals())
	}
})

eventHub.addEventListener("OfficerChosen", event =>{
	if (event.detail.officerThatWasChosen !== "0"){
		const matchingCriminals = useCriminals().filter(singleCriminal => {
			return singleCriminal.arrestingOfficer === event.detail.officerThatWasChosen
		});
		addCriminalsToDOM(matchingCriminals)
	}else{
		addCriminalsToDOM(useCriminals())
	}
})

eventHub.addEventListener("showAllWitnesses", event => {
	addCriminalsToDOM(useWitness());
})

eventHub.addEventListener("showCrimeStuff", event => {
	addCriminalsToDOM(useCriminals());
})

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
