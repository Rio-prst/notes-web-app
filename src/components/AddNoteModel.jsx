import React from 'react';
import { Check } from 'lucide-react';
import LocaleContext from '../context/LocaleContext';
import { translation } from '../utils/localeContent';
import ThemeContext from '../context/ThemeContext';

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
    return (
      <ThemeContext.Consumer>
        {(themeContext) => (
          <LocaleContext.Consumer>
            {(localeContext) => {
              const {locale} = localeContext;
              const {theme} = themeContext;
              const remainingChars = TITLE_LIMIT - this.state.title.length;

              return (
                <div className={`add-note ${theme}`}>
                  <h2>{translation[locale].addNote}</h2>
                  <form onSubmit={this.onSubmitHandler}>
                    <p className='char-limit'>{translation[locale].remainingCharacters} {remainingChars}</p>
                    <input
                      type='text'
                      placeholder={translation[locale].inputTitlePlaceholder}
                      value={this.state.title}
                      onChange={this.onTitleChange}
                      required
                    />
                    <textarea
                      placeholder={translation[locale].inputContentPlaceholder}
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
            }}
          </LocaleContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default AddNoteModel;