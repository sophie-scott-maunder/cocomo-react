import React from 'react'
// import { Link } from 'react-router-dom'
import { getProducts } from '../api/products'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const gridExamplesPage = () => {
    return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">.col-md-3</MDBCol>
        <MDBCol md="6">.col-md-4</MDBCol>

      </MDBRow>
    </MDBContainer>
    );
    }
    
export default gridExamplesPage;


