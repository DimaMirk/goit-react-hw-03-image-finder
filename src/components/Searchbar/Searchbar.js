/* eslint-disable no-undef */
import { Component } from 'react';
import s from './Searchbar.module.css';
class Searchbar extends Component {
  state = { image: '' };
  handleChange = event => {
    this.setState({ image: event.currentTarget.value });
  };

  onSubmite = e => {
    e.preventDefault();
    this.props.onSubmite(this.state.image);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button
            type="submit"
            className={s.SearchForm_button}
            onClick={this.onSubmite}
          >
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
