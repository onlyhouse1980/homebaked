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
        length={4}
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
              <h1 className='h1-responsive'></h1>
              <h3></h3>
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
              <h1 className='h1-responsive'></h1>
              <h3></h3>
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
              <h3 className='h3-responsive'></h3>
              <h5></h5>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='4'>
            <MDBView>
              <img
                className='d-block w-100'
                src='../../images/hvnSJi8k_4x.jpg'
                alt='Fourth slide'
              />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'></h3>
              <h5></h5>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carousel;
