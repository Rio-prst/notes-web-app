import React from 'react';

function NotesItemBody({body}) {
    return (
        <p className='note-item__content'>{body}</p>
    );
}

export default NotesItemBody;