import React from 'react';
import NotesItem from './NotesItem';

function NotesList({notes, onArchived, onDelete}) {
    return (
        <div className='notes-list'>
            <h2>Active Notes</h2>
            {notes.length > 0 ? (
                <div className='active-notes-list'>
                    {notes.map((note) => (
                        <NotesItem
                        key={note.id}
                        id={note.id}
                        {...note}
                        onArchived={onArchived}
                        onDelete={onDelete}
                        />
                    ))}
                </div>
            ): (
                <p className='active-list-empty'>Unavailable active notes</p>
            )}
        </div>
    );
}

export default NotesList;