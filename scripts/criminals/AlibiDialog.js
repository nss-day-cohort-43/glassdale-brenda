import {useCriminals} from "./CriminalProvider.js"

//get a reference to eventHub
const eventHub = document.querySelector("#main");

eventHub.addEventListener("alibiClicked", customEvent => {
	const criminalId = customEvent.detail.chosenCriminal
	const contentTarget = document.querySelector(`.alibiDialog--${criminalId}`)
    

    const targetCriminal = useCriminals().find(
        (criminal) => criminal.id === parseInt(criminalId)
    )

    contentTarget.innerHTML = `${
        targetCriminal.known_associates.map(associate => {
            return `
                <h4>${associate.name}</h4>
                <div>${associate.alibi}</div>
            `
        }).join("")
    }`

	// Show the dialog element
	// dialog and showModel work together
    // contentTarget.showModal() or show()
})


export const AlibiDialog = (id) => {
	return `
		<p class="alibiDialog--${id}">
		
		</p>`
		
	// return `
	// <dialog class="alibiDialog--${id}">
	// 	<button onclick="closeDialog()">Close dialog</button>
	// </dialog>`
}