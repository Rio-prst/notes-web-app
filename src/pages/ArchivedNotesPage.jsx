import React from 'react';
import SearchBar from '../components/SearchBar';
import ArchivedList from '../components/ArchivedList';
import { getNotes } from '../utils';
import { useSearchParams } from 'react-router-dom';

function ArchivedNotesPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchKeyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({keyword});
    }

    return <ArchivedNotesPage defaultKeyword={searchKeyword} keywordChange={changeSearchParams}/>
}

class ArchivedNotesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getNotes(),
            searchKeyword: props.defaultKeyword || ''
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(keyword) {
        this.setState(() => {
            return {
                searchKeyword: keyword
            }
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.searchKeyword.toLowerCase()
            );
        });

        const archivedNotes = filteredNotes.filter((note) => note.archived);

        return (
            <section>
                <hr />
                <h2>Catatan Arsip</h2>
                <div className='search-bar-container'>
                    <SearchBar keyword={this.state.searchKeyword} keywordChange={this.onSearchHandler} />
                </div>
                <ArchivedList notes={archivedNotes}/>
            </section>
        );
    }
}

export default ArchivedNotesPageWrapper;