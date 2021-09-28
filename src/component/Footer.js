import React from 'react'
import styled from 'styled-components'
import img1 from '../images/x.png'
import img2 from '../images/s.png'
import img3 from '../images/i.png'



const Section = styled.div`
     width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    background: #1f2131;
    box-sizing: border-box;
    font-family: montserrat;
`;

const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;

     
  @media screen and (max-width: 768px) {
      flex-direction: column;
      padding-left: 30px;
    }
`;

const FooterBoxA = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 141px;
   /* margin-left: 90px; */
  h5 {
    font-weight: normal;
   font-size: 15px;
   line-height: 145.8%;
   color: #fff; 
   opacity: 0.6;
   width: 370px;
  }
`;

const ImageBox = styled.div`
   display: flex;
   flex-direction: row;
   margin: 30px 0px 80px;
`;

const Image1 = styled.img`
   width: 35px;
   height: 45px;
   border: 2px solid #393c4d;
   border-radius: 25px;
   box-sizing: border-box;
   margin-right: 15px;
   /* background-repeat: no-repeat; */
   background: url(${img1});
`;

const Image2 = styled.img`
      width: 48px;
   height: 48px;
   border: 2px solid #393c4d;
   border-radius: 25px;
   box-sizing: border-box;
   margin-right: 15px;
   background: url(${img2});
   background-repeat: no-repeat;
`;

const Image3 = styled.img`
   width: 48px;
   height: 48px;
   border: 2px solid #393c4d;
   border-radius: 25px;
   box-sizing: border-box;
   margin-right: 15px;
   background: url(${img3});
`;

const Copy = styled.div`
  font-weight: normal;
   font-size: 13px;
   line-height: 145.8%;
   color: #fff; 
   opacity: 0.4;
`;

const FooterBoxB = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   max-width: 600px;
   justify-content: space-between;
   margin: 87px 0px 171px;
`;

const BoxA = styled.div`
    display: flex;
   flex-direction: column;
  h4 {
    font-weight: 500;
   font-size: 18px;
   line-height: 19px;
   color: #fff; 
   margin-bottom: 20px;
  }

  h6 {
    font-weight: normal;
   font-size: 13px;
   line-height: 22px;
   /* color: rgba(255, 255, 255 0.6);  */
   color: #fff;
   margin-bottom: 10px;
   width: 160px;
  }
`;

const Footer = () => {
    return (
        <Section>
           <Container>
              <FooterBoxA>
                  <h5>
                  This platform for minority groups to express their opinions on employment, workplace experiences and rate employers. 
                  </h5>
                  <ImageBox>
                      <Image1 />
                      <Image2 />
                      <Image3 />
                  </ImageBox>
                  <Copy>Copyright 2021</Copy>
              </FooterBoxA> 
              <FooterBoxB>
                  <BoxA>
                      <h4>Company</h4>
                      <h6>About Us</h6>
                      <h6>Contact Us</h6>
                      <h6>Terms of Use</h6>
                      <h6>Privacy Policy</h6>
                  </BoxA>
                  <BoxA>
                      <h4>Features</h4>
                      <h6>Timeline</h6>
                      <h6>Peer Reveiw</h6>
                      <h6>Create Account</h6>
                      <h6>Sign In</h6>
                  </BoxA>
                  <BoxA>
                      <h4>Contact Us</h4>
                      <h6>Inquiry@thaapp.com</h6>
                      <h6>1-800-200-300</h6>
                      <h6>
                          54 Curragh birin,
                          Castletroy, Limerick,
                          Ireland
                      </h6>
                  </BoxA>
              </FooterBoxB>
            </Container> 
        </Section>
    )
}

export default Footer
