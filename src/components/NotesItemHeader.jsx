import React from 'react';

function NotesItemHeader({title, createdAt}) {
    return (
        <div className='notes-item-header'>
            <h3 className='note-item__title'>{title}</h3>
            <p className='note-item__date'>{createdAt}</p>
        </div>
    );
}

export default NotesItemHeader;