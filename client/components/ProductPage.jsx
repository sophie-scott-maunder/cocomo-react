import React from 'react'
// import { Link } from 'react-router-dom'
import { getProducts } from '../api/products'
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
            <body>
            <section>
                <div>

                    <h1> {product && product.name}</h1>
                    <FormPage/>
                    </div>
                    </section>
                    </body>
        )}
        
}
// const ProductPage = () => {
//     return <h1>HEY</h1>

// }

export default ProductPage