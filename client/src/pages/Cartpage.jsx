// import React, { createContext } from 'react'
// import { useContext } from 'react'
// import { useCart } from '../store/Cart'

// export default function Cartpage() {
//   const { cart } = useCart();
//   return (
//     <div>
//       <p className='CartPage'>My Cart</p>
//       <div>
//         {
//           cart.map((values)=>{
//             return <div>
//               {values.name}
//             </div>
//           })
//         }
//       </div>
//     </div>
//   )
// }

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";
  import React from "react";
import { useCart } from "../store/Cart";
  
  export default function CartPage() {
    const {cart,setCart}=useCart();
    const removeProduct=(pid)=>{
      setCart((values)=>{
        return values.filter((items)=>{
          return items._id!==pid
        })
      })
    }
    let total=0;
    cart.map((item)=>{
      total=total+item.price
    })
  return (
  <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard>
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol lg="7">
                  <MDBTypography tag="h5">
                    <a href="#!" className="text-body">
                      <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                      shopping
                    </a>
                  </MDBTypography>
  
                  <hr />
  
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p className="mb-1">Shopping cart</p>
                      <p className="mb-0">You have {cart.length} items in your cart</p>
                    </div>
                    <div>
                      <p>
                        <span className="text-muted">Sort by:</span>
                        <a href="#!" className="text-body">
                          price
                          <MDBIcon fas icon="angle-down mt-1" />
                        </a>
                      </p>
                    </div>
                  </div>
                  {
                    cart.map((product)=>{
                      return <MDBCard className="mb-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src={product.image}
                              fluid className="rounded-3" style={{ width: "65px" }}
                              alt="Shopping item" />
                          </div>
                          <div className="ms-3">
                            <MDBTypography tag="h5">
                              {product.name}
                            </MDBTypography>
                            <p className="small mb-0">256GB, Navy Blue</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <MDBTypography tag="h5" className="fw-normal mb-0">
                            <i class="fas fa-minus"></i>
                              1
                            <i class="fas fa-plus"></i>
                            </MDBTypography>
                          </div>
                          <div style={{ width: "80px" }}>
                            <MDBTypography tag="h5" className="mb-0">
                              {product.price}
                            </MDBTypography>
                          </div>
                            <MDBIcon fas icon="trash-alt" onClick={()=>{removeProduct(product._id)}}/>    
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                    })
                  }
                </MDBCol>
  
                <MDBCol lg="5">
                  <MDBCard className="bg-primary text-white rounded-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBTypography tag="h5" className="mb-0">
                          Card details
                        </MDBTypography>
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                      </div>
  
                      <p className="small">Card type</p>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-visa fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-amex fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                      </a>
  
                      <form className="mt-4">
                        <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                          placeholder="Cardholder's Name" contrast />
  
                        <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                          minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
  
                        <MDBRow className="mb-4">
                          <MDBCol md="6">
                            <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                              minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                          </MDBCol>
                          <MDBCol md="6">
                            <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                              maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                          </MDBCol>
                        </MDBRow>
                      </form>
  
                      <hr />
  
                      {/* <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">$4798.00</p>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">$20.00</p>
                      </div> */}
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Total(Incl. taxes)</p>
                        <p className="mb-2">{total}</p>
                      </div>
  
                      <MDBBtn color="info" block size="lg">
                        <div className="d-flex justify-content-between">
                          <span>{total}</span>
                          <span>
                            Checkout{" "}
                            <i className="fas fa-long-arrow-alt-right ms-2"></i>
                          </span>
                        </div>
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  );
  }