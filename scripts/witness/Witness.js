import { useWitness } from "./WitnessProvider.js"
import { useCriminals } from "./../criminals/CriminalProvider.js"

const eventHub = document.querySelector("#main")

eventHub.addEventListener("witnessClicked", event => {
	const smoothCriminal = useCriminals().find(criminal => {
		return criminal.id === parseInt(event.detail.chosenCriminal)
	})
})

export const WitnessDialog = (id) => {
	return `
		<span class="witnessDialog--${id}"></span>
	`
}