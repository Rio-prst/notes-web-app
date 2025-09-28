import React from 'react';
import {Trash2, ArchiveRestore} from 'lucide-react';

function NotesItemButton({id, onDelete, onArchived, isArchived}) {
    return (
        <div className='notes-item-button'>
            <button className='button-item__archived' onClick={() => onArchived(id)}>
                {isArchived? <ArchiveRestore/> : <ArchiveRestore/>}
            </button>
            <button className='button-item__delete' onClick={() => onDelete(id)}><Trash2/></button>
        </div>
    );
}

export default NotesItemButton;