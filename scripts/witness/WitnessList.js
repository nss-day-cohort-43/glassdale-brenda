import { getWitness, useWitness } from "./WitnessProvider.js"
import { Witness } from "./Witness.js";

export const WitnessList = () => {
	getWitness()
	.then(() => {
		const witnessArray = useWitness();
		addWitnessToDOM(witnessArray);
	})
}

const addWitnessToDOM = (witnessCollection) => {
	//get a refernce to the DOM location where this list will be put
	const domElement = document.querySelector("#witnessContainer");
	// loop through witnessCollection and 
	let HTMLArray = witnessCollection.map(singleWitness => {
		//make some HTML stuff for each one
		return Witness(singleWitness)
	}).join("")
	//add to innerHTML
	domElement.innerHTML += HTMLArray;
}