// everything related to browser notepad
class NotePad {
    _ls = new LS;
    _ui = new UI;
    _NOTES = 'notes';

    // add new note 
    addNote(note) {
        let notesArr = this._ls.getInfo(this._NOTES);

        // create note object
        const noteInfo = {
            note: note,
            id: notesArr.length + 1
        }

        // save notes in localStorage
        notesArr.push(noteInfo);
        this._ls.setInfo(this._NOTES, notesArr);

        // update UI
        this._ui.updateNotes(notesArr);
    }

    // delete a note
    deleteNote(noteId) {
        let notesArr = this._ls.getInfo(this._NOTES);

        // find and delete chosen note
        notesArr.map(
            (info, index) => {
                if (info.id == noteId) {
                    notesArr.splice(index, 1);
                }
            }
        );

        // save changes in localStorage
        this._ls.setInfo(this._NOTES, notesArr);

        // update notes UI
        this._ui.updateNotes(notesArr);
    }

    // edite a note
    editNote(editedNote, id) {
        let notesArr = this._ls.getInfo(this._NOTES);

        // find and edite chosen note
        notesArr.map(
            info => {
                if (info.id == id) {
                    info.note = editedNote;
                }
            }
        );

        // save changes in localStorage
        this._ls.setInfo(this._NOTES, notesArr);

        // update UI
        this._ui.updateNotes(notesArr);
    }
}