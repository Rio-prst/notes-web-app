import React from 'react';
import NotesItem from './NotesItem';

function ArchivedList({notes, onArchived, onDelete}) {
    return (
        <div className='archived-list'>
            <h2>Archive Notes</h2>
            {notes.length > 0 ? (
                <div className='archived-notes-list'>
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
                <p className='archived-list-empty'>Unavailable archived notes.</p>
            )}
        </div>
    );
}

export default ArchivedList;