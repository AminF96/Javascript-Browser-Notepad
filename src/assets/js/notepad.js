import LS from "./ls";
import UI from "./ui";

// everything related to browser notepad
export default class NotePad {
    _lsInstance = new LS;
    _uiInstance = new UI;
    _NOTES = 'notes';

    // add new note 
    addNote(note) {
        let notesArr = this._lsInstance.getInfo(this._NOTES);

        // create note object
        const noteInfo = {
            note: note,
            id: notesArr.length + 1
        }

        // save notes in localStorage
        notesArr.push(noteInfo);
        this._lsInstance.setInfo(this._NOTES, notesArr);

        // update UI
        this._uiInstance.updateNotes(notesArr);
    }

    // delete a note
    deleteNote(noteId) {
        let notesArr = this._lsInstance.getInfo(this._NOTES);

        // find and delete chosen note
        notesArr.map(
            (info, index) => {
                if (info.id == noteId) {
                    notesArr.splice(index, 1);
                }
            }
        );

        // save changes in localStorage
        this._lsInstance.setInfo(this._NOTES, notesArr);

        // update notes UI
        this._uiInstance.updateNotes(notesArr);
    }

    // edite a note
    editNote(editedNote, id) {
        let notesArr = this._lsInstance.getInfo(this._NOTES);

        // find and edite chosen note
        notesArr.map(
            info => {
                if (info.id == id) {
                    info.note = editedNote;
                }
            }
        );

        // save changes in localStorage
        this._lsInstance.setInfo(this._NOTES, notesArr);

        // update UI
        this._uiInstance.updateNotes(notesArr);
    }
}