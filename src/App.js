import { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

class App extends Component {
  state = {
    name: '',
    images: [],
  };

  getImages = img => {
    fetch(
      `https://pixabay.com/api/?q=${img}&page=1&key=24657500-5c2ff9cb7634f4ca49a4c6811&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data => {
        let imageArray = data.hits;
        this.setState(({ images }) => ({ images: [...imageArray] }));
        return imageArray;
      });
  };
  show;

  render() {
    return (
      <>
        <Searchbar onSubmite={this.getImages} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}
export default App;
