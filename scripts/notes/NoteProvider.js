/*
hold on to array of notes
useNotes - makes copy of array of notes and returns
get all the notes from DB
add a note to the DB
*/

export const saveNote = noteObj => {
	return fetch("http://localhost:8088/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(noteObj)
	})
	.then((result) => {
		console.log("CELEBRATE RIGHT NOW");
	})
}