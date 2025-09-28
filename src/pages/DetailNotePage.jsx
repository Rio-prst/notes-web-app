import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import NotesItemHeader from '../components/NotesItemHeader';
import NotesItemBody from '../components/NotesItemBody';
import NotesItemButton from '../components/NotesItemButton';
import { showFormattedDate } from '../utils/index';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';

function DetailNotePage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNote() {
            const {data} = await getNote(id);
            setNote(data);
            setLoading(false);
        }
        fetchNote();
    }, [id]);

    async function onDeleteHandler(id) {
        await deleteNote(id);
        navigate('/');
    }

    async function onArchivedHandler(id) {
        await archiveNote(id);
        navigate('/');
    }

    async function onUnarchivedHandler(id) {
        await unarchiveNote(id);
        navigate('/');
    }

    return (
        <section className='detail-note-page'>
            <hr />
            {loading ? (
                <p className='loading'>Loading ...</p>
            ): (
                <div className='detail-note__page-body'>
                    <NotesItemHeader title={note.title} createdAt={showFormattedDate(note.createdAt)}/>
                    <NotesItemBody body={note.body}/>
                    <NotesItemButton id={id} onDelete={onDeleteHandler} onArchived={note.archived ? onUnarchivedHandler : onArchivedHandler} isArchived={note.archived}/>
                </div>
            )}
        </section>
    )
}

export default DetailNotePage;