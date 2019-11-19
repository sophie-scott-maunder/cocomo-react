import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4">
        <form className="contact-form" method="POST" action="/contact">
            <p className="h4 text-center mb-4">Order</p>
            <label htmlFor="name" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="email" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="quantity" className="grey-text">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              id="defaultFormContactQuantity"
              className="form-control"
            />
            <br />
            <label
              htmlFor="deliveryAdress"
              className="grey-text">
              Delivery Address
            </label>
            <textarea
              type="text"
              name="deliveryAddress"
              id="defaultFormContactDeliveryAddress"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
              <MDBBtn color="warning" outline type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
            <div>
                { window.location.hasdh === '#success' &&
            <div id="success">
                <p>Your order has been sent! We will be in touch within two working days.</p>
                </div>
            }
            { window.location.hash === '#error' &&
        <div id="error">
            <p>An error occured while submitting your order. Please contact us on help@cocomo.com</p>
            </div>}
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;