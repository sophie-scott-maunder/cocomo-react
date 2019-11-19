import React from 'react'
// import { Link } from 'react-router-dom'
import { getProducts } from '../api/products'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
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
                    <MDBCol md="5">.col-md-3</MDBCol>
                    <MDBCol md="5">
                        <h2>{product && product.name}</h2>
                        <h5>${product && product.price}</h5>
                        <p>
                            {product && product.description}
                        </p>
                        <p>
                            {product && product.ingredients}
                        </p>
                    </MDBCol>
                </MDBRow>
                <FormPage />
            </MDBContainer>

        )
    }

}


export default ProductPage