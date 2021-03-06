/*
hold on to array of notes
useNotes - makes copy of array of notes and returns
get all the notes from DB
add a note to the DB
*/

let notes = [];

const eventHub = document.querySelector("#main")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const useNotes = () => {
	return notes.slice();
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
		return getNotes()
	})
    .then(dispatchStateChangeEvent)
}

//button click
//reference specific note by the id
//removed from api
//get all notes
//display notes

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
		.then(getNotes)
		.then(dispatchStateChangeEvent)
}
