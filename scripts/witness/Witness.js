import { useWitness } from "./WitnessProvider.js"
import { useCriminals } from "./../criminals/CriminalProvider.js"

const eventHub = document.querySelector("#main")

//on eventHub, listen for changes
eventHub.addEventListener("click", event => {
	//do this if witness is selected
	if (event.target.id === "showMeWitness"){
		const customEvent = new CustomEvent("showAllWitnesses")

		//add event to the hub
		eventHub.dispatchEvent(customEvent)
	}else if (event.target.id === "showMeCrimeStuff"){
		const customEvent = new CustomEvent("showCrimeStuff")
		eventHub.dispatchEvent(customEvent);
	}
})