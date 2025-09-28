import React, {useContext} from 'react';
import NotesItem from './NotesItem';
import LocaleContext from '../context/LocaleContext';
import { translation } from '../utils/localeContent';
import ThemeContext from '../context/ThemeContext';

function ArchivedList({notes, onDelete, onUnarchived, isArchived}) {
    const {locale} = useContext(LocaleContext);

    return (
        <div className='archived-list'>
            {notes.length > 0 ? (
                <div className='archived-notes-list'>
                    {notes.map((note) => (
                        <NotesItem
                        key={note.id}
                        id={note.id}
                        {...note}
                        onDelete={onDelete}
                        onUnarchived={onUnarchived}
                        isArchived={isArchived}
                        />
                    ))}
                </div>
            ): (
                <p className='archived-list-empty'>{translation[locale].isEmptyArchive}</p>
            )}
        </div>
    );
}

export default ArchivedList;