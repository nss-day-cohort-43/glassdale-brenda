import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { saveNote } from "./NoteDataProvider.js";

const eventHub = document.querySelector("#main")
const contentTarget = document.querySelector("#noteFormContainer");

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
		
        const noteContent = document.querySelector("#noteForm--text")
        const noteCriminal = document.querySelector("#noteForm--criminal")
		// Make a new object representation of a note
		//make sure a suspect is choosen
		if (parseInt(noteCriminal.value) !== 0){
			const newNote = {
				noteText: noteContent.value,
				suspect: parseInt(noteCriminal.value),
				date: Date.now()
			}

        	// Change API state and application state
			saveNote(newNote)
			//put something here to clear note form
		}else {
			window.alert("Please choose a suspect");
		}
    }
})

const render = (criminalsArray) => {
    contentTarget.innerHTML = `
	<h3>Let's make a note</h3>	
	<div><textarea id="noteForm--text" placeholder="Note text here"></textarea></div>
		<select id="noteForm--criminal">
			<option value="0">Select a criminal...</option>
			${
				criminalsArray.map(
					(criminalObj) => {
						return `<option value="${criminalObj.id}">
							${ criminalObj.name }
						</option>`
					}
				)
			}
		</select>
        <div><button id="saveNote">Save Note</button></div>
    `
}

export const NoteForm = () => {
	getCriminals()
	.then(() => {
		render(useCriminals());
	})
    
}