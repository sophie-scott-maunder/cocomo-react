import React from 'react'
// import { Link } from 'react-router-dom'
import { getProducts } from '../api/products'
import { MDBContainer, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact"
import FormPage from './Form'


class ProductPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            currentProduct: null
        }

        this.getData = this.getData.bind(this)
    }


    componentDidMount() {
        getProducts()
            .then(products => {
                this.setState({
                    products: products
                })
            })
    }

    getData = (products) => {
        this.setState({
            currentProduct: products
        })
    }

    render() {
        console.log(this.props.match.params)
        const product = this.state.products.find(p => {
            return p.id == this.props.match.params.id
        })
        return (

            <MDBContainer>
                <MDBRow>
                    <MDBCol md="5"><MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
      ><MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="/images/img-4.jpeg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="/images/img_5.jpeg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="/images/img-6.jpeg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner></MDBCarousel></MDBCol>
                    <MDBCol md="5">
                        <h2>{product && product.name}</h2>
                        <h5>${product && product.price}</h5>
                        <p>
                            {product && product.description}
                        </p>
                        <p>
                            Ingredients: {product && product.ingredients}
                        </p>
                    </MDBCol>
                </MDBRow>
                <FormPage />
            </MDBContainer>

        )
    }

}


export default ProductPage