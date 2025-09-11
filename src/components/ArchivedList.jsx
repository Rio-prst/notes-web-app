import React from 'react';
import NotesItem from './NotesItem';

function ArchivedList({notes, onArchived, onDelete}) {
    const archivedNotes = notes.filter((note) => note.archived);

    return (
        <div className='archived-list'>
            <h2>Archive Notes</h2>
            {archivedNotes.length > 0 ? (
                <div className='archived-notes-list'>
                    {archivedNotes.map((note) => (
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
                <p className='archived-list-empty'>Unavailable archived notes.</p>
            )}
        </div>
    );
}

export default ArchivedList;