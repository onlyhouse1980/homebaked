import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from 'mdbreact';

const Carousel = () => {
  return (
    <MDBContainer className='mt-5'>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className='z-depth-1'
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId='1'>
            <MDBView>
              <img
                className='d-block w-100'
                src='../../images/hero-bg.jpg'
                alt='First slide'
              />
            </MDBView>
            <MDBCarouselCaption>
              <h1 className='h1-responsive'>Orchard Beach</h1>
              <h3>Community Group</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='2'>
            <MDBView>
              <img
                className='d-block w-100'
                src='../../images/boat.png'
                alt='Second slide'
              />
            </MDBView>
            <MDBCarouselCaption>
              <h1 className='h1-responsive'>Orchard Beach</h1>
              <h3>Community Group</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='3'>
            <MDBView>
              <img
                className='d-block w-100'
                src='../../images/img_0.jpg'
                alt='Third slide'
              />
            </MDBView>
            <MDBCarouselCaption>
              <h1 className='h1-responsive'>Orchard Beach</h1>
              <h3>Community Group</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carousel;
