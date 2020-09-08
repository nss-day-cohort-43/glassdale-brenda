import {useCriminals} from "./CriminalProvider.js"

//get a reference to eventHub
const eventHub = document.querySelector("#main");

eventHub.addEventListener("alibiClicked", event => {
	const criminalId = event.detail.chosenCriminal
	const contentTarget =  document.querySelector(`.alibiDialog--${criminalId}`)
    const hTarget = contentTarget.querySelector("h4")

console.log("contentTarget", contentTarget);
    const targetCriminal = useCriminals().find(
        (criminal) => criminal.id === parseInt(criminalId)
    )

    if (contentTarget.contains(hTarget)){
        contentTarget.innerHTML = "";
    } else{
        contentTarget.innerHTML = `${
            targetCriminal.known_associates.map(associate => {
                return `
                    <h4>${associate.name}</h4>
                    <div>${associate.alibi}</div>
                `
            }).join("")
        }`
    }

	// Show the dialog element
	// dialog and showModel work together
    // contentTarget.showModal() or show()
})


export const AlibiDialog = (id) => {
	return `
        <span class="alibiDialog--${id}">
        
		</span>`
		
	// return `
	// <dialog class="alibiDialog--${id}">
	// 	<button onclick="closeDialog()">Close dialog</button>
	// </dialog>`
}