import React from 'react';
import { addNote } from '../utils';
import AddNoteModel from '../components/AddNoteModel';
import { useNavigate } from 'react-router-dom';

function AddNotePage() {
    const navigate = useNavigate();

    function onAddNoteHandler({title, body}) {
        addNote(title, body);
        navigate('/');
    }

    return (
        <section>
            <hr />
            <AddNoteModel addNote={onAddNoteHandler}/>
        </section>
    )
}

export default AddNotePage;