import { Component } from 'react';
import Searchbar from 'components/Searchbar';

class App extends Component {
  state = {
    name: '',
  };
  getImages(img) {
    fetch(
      `https://pixabay.com/api/?q=${img}&page=1&key=24657500-5c2ff9cb7634f4ca49a4c6811&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <>
        <Searchbar onSubmite={this.getImages} />
      </>
    );
  }
}
export default App;
