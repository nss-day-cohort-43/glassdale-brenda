//setup a listener for the alibi button
import {AlibiDialog} from './AlibiDialog.js'
const eventHub = document.querySelector("#main");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("alibi--")) {
        const [prefix, criminalId] = clickEvent.target.id.split("--")

        const alibiEvent = new CustomEvent("alibiClicked", {
            detail: {
                chosenCriminal: criminalId
            }
        })

        eventHub.dispatchEvent(alibiEvent)
    }
})



export const CriminalHTML = (criminalObj) => {
	return `
		<section id="criminal-${criminalObj.id}" class="card-criminal">
			<p><strong>Name:</strong> ${criminalObj.name}</p>
			<p>Age: ${criminalObj.age}</p>
			<p>Crime: ${criminalObj.conviction}</p>
			<p>Dates:</p>
			<button id="alibi--${criminalObj.id}">Alibis</button>
			${AlibiDialog(criminalObj.id)}
		</section>
	`
} 