import React from 'react';
import { addNote } from '../utils/network-data';
import AddNoteModel from '../components/AddNoteModel';
import { useNavigate } from 'react-router-dom';

function AddNotePage() {
    const navigate = useNavigate();

    async function onAddNoteHandler({title, body}) {
        await addNote({title, body});
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