/*
    ConvictionSelect component that renders a select HTML element
    which lists all convictions in the Glassdale PD API
 */

import { useConvictions, getConvictions } from "./ConvictionProvider.js"

//reference to container that holds all
const eventHub = document.querySelector("#main");

//on eventHub, listen for changes
eventHub.addEventListener("change", event => {
	//do this if crimeSelect element changes
	if (event.target.id === "crimeSelect"){
		const customEvent = new CustomEvent("crimeChosen", {
			detail: {
				crimeThatWasChosen: event.target.value,
			}
		})

		//add event to the hub
		eventHub.dispatchEvent(customEvent)
	}
})

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
	getConvictions()
	.then(() => {
        // Get all convictions from application state
        const convictionsArray = useConvictions()
        render(convictionsArray)
    })
}

const render = theConvictionsArray => {
	contentTarget.innerHTML = `
		<select class="dropdown" id="crimeSelect">
			<option value="0">Please select a crime...</option>
			${
                theConvictionsArray.map(convictionObject => {
                    return `<option value="${ convictionObject.name }">${convictionObject.name}</option>`
                }).join("")
            }
		</select>
	`

	//could also look like this
	// const convictionsHTMLArray = theConvictionsArray.map(convictionObject => {
	// 	return `<option value="${ convictionObject.name }">${convictionObject.name}</option>`
	// })

	// contentTarget.innerHTML = `
	// 	<select class="dropdown" id="crimeSelect">
	// 	<option value="0">Please select a crime...</option>
	// 	${convictionsHTMLArray}.join("")
	// 	</select>
	// 	`
}

