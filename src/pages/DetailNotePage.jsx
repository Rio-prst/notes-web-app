import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import NotesItemHeader from '../components/NotesItemHeader';
import NotesItemBody from '../components/NotesItemBody';
import NotesItemButton from '../components/NotesItemButton';
import { showFormattedDate, getNote, deleteNote, archiveNote } from '../utils';

function DetailNotePage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const note = getNote(id);

    if (!note) {
        return <p>Note not found</p>
    }   

    function onDeleteHandler(id) {
        deleteNote(Number(id));
        navigate('/');
    }

    function onArchivedHandler(id) {
        archiveNote(Number(id));
        navigate('/');
    }

    return (
        <section className='detail-note-page'>
            <hr />
            <div className='detail-note__page-body'>
                <NotesItemHeader title={note.title} createdAt={showFormattedDate(note.createdAt)}/>
                <NotesItemBody body={note.body}/>
                <NotesItemButton id={id} onDelete={onDeleteHandler} onArchived={onArchivedHandler}/>
            </div>
        </section>
    )
}

export default DetailNotePage;