import React from 'react';
import NotesItemHeader from './NotesItemHeader';
import NotesItemBody from './NotesItemBody';
import { showFormattedDate } from '../utils';
import {Link} from 'react-router-dom';

function NotesItem({id, title, body, createdAt}) {
    return (
        <div className='notes-item'>
            <Link to={`/notes/${id}`}>
                <NotesItemHeader title={title} createdAt={showFormattedDate(createdAt)}/>
            </Link>
            <hr />
            <NotesItemBody body={body}/>
        </div>
    );
}

export default NotesItem;