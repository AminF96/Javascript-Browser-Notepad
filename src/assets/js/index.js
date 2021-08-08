'use srict';
// import styles
import '../css/bootstrap-rtl.css';
import '../css/custom.css';

// constants & variables
const form = document.querySelector('#form');
const noteInput = document.querySelector('#note');
const notesWrapper = document.querySelector('#notes-container');

let isEdit = false; // for understand if submit on form is for editing a note or not

// clasess
import NotePad from "./notepad";
import UI from "./ui";
import LS from "./ls";

const notePadInstance = new NotePad;
const uiInstance = new UI;
const lsInstance = new LS;

// eventListeners
eventListeners();

function eventListeners() {
    // when page load was complete
    document.addEventListener('DOMContentLoaded', (e) => {
        uiInstance.updateNotes(lsInstance.getInfo('notes'));
    });

    // when submit happens on form
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // if submite was for editing a note
        if (isEdit) {
            document.querySelectorAll('[editing]').forEach(element => {
                if (element.getAttribute('editing') == 'true') {
                    notePadInstance.editNote(noteInput.value, element.dataset.id);
                }
            });

            noteInput.value = '';
            isEdit = false;
            return;
        }

        // add a new note 
        notePadInstance.addNote(noteInput.value);
    });

    // when click happens on notes container
    notesWrapper.addEventListener('click', (e) => {
        const {
            target
        } = e;


        // if click happens on delete note button
        if (target.classList.contains('del-button')) {
            const noteElement = target.parentElement.parentElement.parentElement;
            notePadInstance.deleteNote(noteElement.dataset.id);
        }

        // if click happens on edit note button
        if (target.classList.contains('edit-button')) {
            const noteElement = target.parentElement.parentElement.parentElement;
            isEdit = true;
            noteElement.setAttribute('editing', true);
            noteInput.value = noteElement.querySelector('li').innerHTML;
            noteInput.focus();
        }
    });
}