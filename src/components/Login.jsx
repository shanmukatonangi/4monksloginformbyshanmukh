import React from 'react';
import "../App.css"
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {
  return (
    <div className='conatiner'>
    <MDBContainer style={{color:"gray"}} className="p-39 my-54 d-flex flex-column  ">
        <h1 style={{color:"black"}}>Hello, Again</h1>
        <p style={{width:"300px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mut minus nisi. Officiis dolorem totam quam ea!</p>
    <MDBInput className='mdbinp'  wrapperClass='mb-4' label='Customer Id' id='form1' type='name'/>
      <MDBInput className='mdbinp' wrapperClass='mb-4' label='Email' id='form1' type='email'/>
      <MDBInput className='mdbinp' wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

      <div className="text-center">
        <p>Don't have an account? <a href="#!">Sign In</a></p>
        

        
      </div>

    </MDBContainer>
    </div>
  );
}

export default Login;