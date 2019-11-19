import React from 'react'
import {Link} from 'react-router-dom'

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";

const CarouselPage = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView><Link to="/products/1">
                            <img
                                className="d-block w-100"
                                src="/images/img-1.jpeg"
                                alt="Christmas Chocolate Salami"
                            /></Link>
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Christmas Chocolate Salami</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView><Link to="/products/2">
                            <img
                                className="d-block w-100"
                                src="/images/img-2.jpeg"
                                alt="Second slide"
                            /></Link>
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Strong mask</h3>
                            <p>Second text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView><Link to="/products/3">
                            <img
                                className="d-block w-100"
                                src="/images/img-3.jpeg"
                                alt="Third slide"
                            /></Link>
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Slight Mast</h3>
                            <p>Third text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
  );
}

export default CarouselPage;