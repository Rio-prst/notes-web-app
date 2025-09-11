import React from 'react';
import NotesItemHeader from './NotesItemHeader';
import NotesItemBody from './NotesItemBody';
import NotesItemButton from './NotesItemButton';
import { showFormattedDate } from '../utils';

function NotesItem({id, title, body, createdAt, onArchived, onDelete}) {
    return (
        <div className="notes-item">
            <NotesItemHeader title={title} createdAt={showFormattedDate(createdAt)}/>
            <hr />
            <NotesItemBody body={body}/>
            <NotesItemButton id={id} onArchived={onArchived} onDelete={onDelete}/>
        </div>
    );
}

export default NotesItem;