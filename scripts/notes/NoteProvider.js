/*
hold on to array of notes
useNotes - makes copy of array of notes and returns
get all the notes from DB
add a note to the DB
*/

let notes = [];

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}


const getNotes = () => {
	console.log("getNotes called");
}

export const saveNote = noteObj => {
	return fetch("http://localhost:8088/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(noteObj)
	})
	.then(() => {
		getNotes()
	})
    // .then(dispatchStateChangeEvent)
}