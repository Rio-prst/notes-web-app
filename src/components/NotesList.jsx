import React from 'react';
import NotesItem from './NotesItem';

function NotesList({notes, onArchived, onDelete, isArchived}) {
    return (
        <div className='notes-list'>
            {notes.length > 0 ? (
                <div className='active-notes-list'>
                    {notes.map((note) => (
                        <NotesItem
                        key={note.id}
                        id={note.id}
                        {...note}
                        onArchive={onArchived}
                        onDelete={onDelete}
                        isArchived={isArchived}
                        />
                    ))}
                </div>
            ): (
                <p className='active-list-empty'>Catatan kosong.</p>
            )}
        </div>
    );
}

export default NotesList;