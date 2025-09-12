import React from 'react';
import {Search} from 'lucide-react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: ''
        };

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        const value = event.target.value;
        this.setState({searchKeyword: value});
        this.props.onSearch(value);
    }

    render() {
        return (
            <div className='search-bar'>
                <Search/>
                <input type="text" 
                placeholder="Search notes..." 
                value={this.state.searchKeyword} 
                onChange={this.onSearchChange}
                />
            </div>
        );
    }
}

export default SearchBar;