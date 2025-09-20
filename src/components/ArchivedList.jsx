import React from 'react';
import NotesItem from './NotesItem';

function ArchivedList({notes}) {
    return (
        <div className='archived-list'>
            {notes.length > 0 ? (
                <div className='archived-notes-list'>
                    {notes.map((note) => (
                        <NotesItem
                        key={note.id}
                        id={note.id}
                        {...note}
                        />
                    ))}
                </div>
            ): (
                <p className='archived-list-empty'>Arsip kosong.</p>
            )}
        </div>
    );
}

export default ArchivedList;