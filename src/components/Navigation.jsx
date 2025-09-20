import React from 'react';
import { Link } from 'react-router-dom';
import {House, FileArchive} from 'lucide-react';

function navigation() {
    return (
        <nav className='navigation'>
            <ul>
                <li><Link to = '/'><House color='white'/></Link></li>
                <li><Link to='archive'><FileArchive color='white'/></Link></li>
            </ul>
        </nav>
    );
}

export default navigation;