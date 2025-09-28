import React, {useContext} from 'react';
import {Search} from 'lucide-react';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext';
import { translation } from '../utils/localeContent';

function SearchBar({keyword, keywordChange}) {
    const {locale} = useContext(LocaleContext);

    return (
        <div className='search-bar'>
            <Search/>
            <input 
            type='text'
            placeholder={translation[locale].searchPlaceholder}
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
            />
        </div>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;