// everything related to UI
export default class UI {
    // empty an element
    _emptyElem(elem) {
        elem.innerHTML = '';
    }

    // create note element
    _createNoteElem(info) {
        // get a clone from note element which exsists in template element in HTML
        const temp = document.getElementById('noteTemp');
        const note = temp.content.cloneNode(true).firstElementChild;

        // customize note element for info
        note.dataset.id = info.id;
        note.innerHTML = note.innerHTML.replace(/{{\s*(.*?)\s*}}/g, info.note);

        return note;
    }

    // update notes wrapper in page
    updateNotes(arr) {
        let notesWrapper = document.querySelector('#notes-container');
        this._emptyElem(notesWrapper);
        arr.map(
            info => {
                // show notes in UI
                notesWrapper.appendChild(this._createNoteElem(info));
            }
        );
    }
}