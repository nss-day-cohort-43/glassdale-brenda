/*
    ConvictionSelect component that renders a select HTML element
    which lists all convictions in the Glassdale PD API
 */

import { useConvictions, getConvictions } from "./ConvictionProvider.js"

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
                    return `<option value="${ convictionObject.id }">${convictionObject.name}</option>`
                }).join("")
            }
		</select>
	`

	//could also look like this
	// const convictionsHTMLArray = theConvictionsArray.map(convictionObject => {
	// 	return `<option value="${ convictionObject.id }">${convictionObject.name}</option>`
	// })

	// contentTarget.innerHTML = `
	// 	<select class="dropdown" id="crimeSelect">
	// 	<option value="0">Please select a crime...</option>
	// 	${convictionsHTMLArray}.join("")
	// 	</select>
	// 	`
}

