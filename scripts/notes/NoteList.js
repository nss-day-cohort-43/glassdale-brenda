/*
map over an array and display all notes from Note.js
*/

import { getNotes, useNotes, deleteNote } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector("#noteListContainer")
const eventHub = document.querySelector("#main")


eventHub.addEventListener("noteStateChanged", () => {	
    const newNotes = useNotes()
    render(newNotes, useCriminals())
})

eventHub.addEventListener("click", event => {
    event.preventDefault()
    if(event.target.id.startsWith("deleteNote--")){
        const [prefix, id] = event.target.id.split("--")
        deleteNote(id)
    }
})



export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        const notes = useNotes();
        const suspects = useCriminals()
        render(notes, suspects)
    })
}


const render = (notes, suspects) => {

    contentTarget.innerHTML = notes.map((noteObject) => {
        noteObject.suspectObj = suspects.find(suspect => {
            return suspect.id === parseInt(noteObject.suspectId)
        })
            return NoteHTMLConverter(noteObject)
        }).join("");
}
