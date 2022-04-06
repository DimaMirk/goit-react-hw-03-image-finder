import { Component } from 'react';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Container from 'components/Container';

import fetchImages from 'services/Api';

import { Rings } from 'react-loader-spinner';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };
class App extends Component {
  state = {
    image: '',
    images: [],
    showModal: false,
    selectedImage: {},
    status: 'idle',
    page: 1,
    massege: '',
  };

  componentDidUpdate(prevProp, prevState) {
    const prevName = prevState.image;
    const nextName = this.state.image;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      fetchImages(this.state.image, this.state.page)
        .then(response => response.json())
        .then(data => {
          let imageArray = data.hits;
          if (data.hits.length !== 0) {
            this.setState(({ images, status }) => ({
              images: [...imageArray],
              status: 'resolved',
            }));
            return imageArray;
          } else {
            this.setState({ status: 'rejected' });
            return Promise.reject(new Error('Write something correct please'));
          }
        })
        .catch(error => {
          alert(error);
        });
    }

    if (prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      fetchImages(this.state.image, this.state.page)
        .then(response => response.json())
        .then(data => {
          let imageArray = data.hits;
          this.setState(({ images, status }) => ({
            images: [...images, ...imageArray],
            status: 'resolved',
          }));

          return imageArray;
        });
    }
  }

  getImages = img => {
    this.setState({ image: img });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addSelectedImage = image => {
    this.toggleModal();
    this.setState(({ selectedImage }) => ({ selectedImage: image }));
  };

  paginatePage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { selectedImage, showModal, images, status } = this.state;
    return (
      <Container>
        <Searchbar onSubmite={this.getImages} />
        <ImageGallery images={images} onClickImage={this.addSelectedImage} />
        {status === 'pending' && (
          <Rings color="#00BFFF" height={100} width={100} />
        )}
        {status === 'resolved' && <Button loadMore={this.paginatePage} />}
        {showModal && (
          <Modal onClose={this.toggleModal} imageItem={selectedImage} />
        )}
      </Container>
    );
  }
}
export default App;
