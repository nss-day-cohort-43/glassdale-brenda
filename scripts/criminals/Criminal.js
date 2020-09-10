import {AlibiDialog} from './AlibiDialog.js';

const eventHub = document.querySelector("#main");

eventHub.addEventListener("click", event => {
	if(event.target.id.startsWith("associates--")){
		const [prefix, criminalId] = event.target.id.split("--")

		const alibiEvent = new CustomEvent("associatesClicked", {
			detail: {
				chosenCriminal: criminalId
			}
		})
		eventHub.dispatchEvent(alibiEvent);

	}else if(event.target.id.startsWith("witness--")){
		const [prefix, criminalId] = event.target.id.split("--")

		const witnessEvent = new CustomEvent("witnessClicked", {
			detail: {
				chosenCriminal: criminalId
			}
		})
		eventHub.dispatchEvent(witnessEvent);
	}
})


export const CriminalHTML = (criminalObj) => {
	return `
		<section id="officer-${criminalObj.id}" class="card-criminal">
			<p><strong>Name:</strong> ${criminalObj.name}</p>
			<p>Age: ${criminalObj.age}</p>
			<p>Crime: ${criminalObj.conviction}</p>
			<p>Dates:</p>
			<button id="associates--${criminalObj.id}">Alibis</button>
			${AlibiDialog(criminalObj.id)}
		</section>
	`
} 