import React from 'react';
import NotesItem from './NotesItem';

function NotesList({notes, onArchived, onDelete}) {
    const activeNotes = notes.filter((note) => !note.archived);

    return (
        <div className='notes-list'>
            <h2>Active Notes</h2>
            {activeNotes.length > 0 ? (
                <div className='active-notes-list'>
                    {activeNotes.map((note) => (
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