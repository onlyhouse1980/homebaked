import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBCol,
  MDBRow
} from 'mdbreact';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Example = () => (
  <React.Fragment>
    <MDBRow className='mt-5'>
      <MDBCol md='6' className='mx-auto'>
      <Link href="/howtoreadmeter.pdf">How to read your meter?</Link>
        <MDBCard>
          <MDBCardImage
            className='img-fluid'
            src='/images/imgmeter1.jpg'
            waves
          />
          <MDBCardBody>
            <form>
              <p className='h5 text-center mb-4'>Sign up</p>
              <div className='grey-text'>
                <MDBInput
                  name='user'
                  label='Meter Serial #(numbers only, omit any text)'
                  icon='user'
                  group
                  type='integer'
                  validate
                  error='wrong'
                  success='right'
                /> 
                
              </div>
              <div className='text-center'>
                <MDBBtn type='register' color='primary'>Submit</MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </React.Fragment>
);

export default Example;
