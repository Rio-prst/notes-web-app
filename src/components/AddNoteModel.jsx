import React from 'react';
import {CircleX} from 'lucide-react';

class AddNoteModel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChange(event) {
        this.setState({title: event.target.value});
    }

    onBodyChange(event) {
        this.setState({body: event.target.value});
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className='modal-overlay'>
                <div className='modal-content'>
                    <button className='modal-close__button' onClick={this.props.onClose}><CircleX size={25}/></button>
                    <h2>Create a New Note</h2>
                    <form onSubmit={this.onSubmitHandler}>
                        <input 
                        type='text'
                        placeholder='Note title'
                        value={this.state.title}
                        onChange={this.onTitleChange}
                        required
                        />
                        <textarea
                        placeholder='Fill in the notes...'
                        value={this.state.body}
                        onChange={this.onBodyChange}
                        required
                        ></textarea>
                        <button type='submit'>Add Note</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddNoteModel;