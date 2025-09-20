import React from 'react';
import { Check } from 'lucide-react';

const TITLE_LIMIT = 50;

class AddNoteModel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(event) {
    const value = event.target.value;

    if (value.length <= TITLE_LIMIT) {
      this.setState({ title: value });
    }
  }

  onBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const remainingChars = TITLE_LIMIT - this.state.title.length;

    return (
      <div className='add-note'>
        <h2>Create a New Note</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className='char-limit'>Remaining characters: {remainingChars}</p>
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
          <button type='submit'>
            <Check />
          </button>
        </form>
      </div>
    );
  }
}

export default AddNoteModel;