import React from 'react'
import styled, {css} from 'styled-components/macro'
import Box from '../utils/Box';
import FormSearch from './FormSearch';



const Section = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #ffebff;
    box-sizing: border-box;
`;

const Container = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   padding: 90px 90px 0px;
`;

const ContainerB = styled.div`
   position: absolute;
   top: 90px;
   right: 80px;
   @media screen and (max-width: 1000px) {
       display: none;
    }
`;

const Group = styled.div`
   padding-left: 35px;
`;

const Dim = styled.div`
   display: flex;
   flex-direction: row;
 

   h1 {
     width: 490px;
     font-weight: 900;
     font-size: 40px;
     line-height: 49px;
     color: #303030;
     margin-right: 170px;
     margin-bottom: 6px;

     @media screen and (max-width: 768px) {
        margin: 0px;
        width: 290px;
        font-weight: 700;
        font-size: 30px;
        line-height: 39px;
    }
   }

   img {
     width: 58px;
     height: 58px;
     object-fit: cover;  
   }
`;

const Div = styled.div`
    display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 34px;

   img {
     width: 86px;
     height: 84px;
     object-fit: cover;  
   }
`;

const Pfont = css`
    font-weight: normal;
     font-size: 16px;
     line-height: 20px;
     color: #747474;
`;

const SubHeading = styled.div`
   ${Pfont}
   width: 480px;
`;

const LowerHeading = styled.div`
   ${Pfont}
   margin-top: 34px;

   span {
       color: #ff6634;
   }
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 789px;
    margin-top: 31px;
    justify-content: space-between;
    margin-bottom: 70px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const FooterQuote = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;

    @media screen and (max-width: 768px) {
      margin-bottom: 20px;
    }

    img {
      width: 9.95px;
      height: 17.94px;
      object-fit: cover;
    }

    img {
      width: 9.95px;
      height: 17.94px;
      object-fit: cover;
      
    }
`;

const Notediv1 = styled.div`
   margin-right: 17px;
`;

const Notediv = styled.div`
   align-self: flex-end;
`;

const Note = styled.div`
  width: 280px;
 
  font-size: 14px;
  line-height: 17px;
  font-weight: normal;
  color: #8d8d8d;
  @media screen and (max-width: 768px) {
      width: 220px; 
      font-size: 12px;
      line-height: 12px;
  }
`;

const InfoSectionn = ({
   heading,
   paragraphOne,
   paragraphTwo,
   comment,
   image1,
   image2,
   image3,
   image4,
   image5
}) => {
    return (
        <Section>
           <ContainerB>
             <img src={image5} alt='hero'/>
          </ContainerB>
          <Container>
            <Group>
              <Dim>
                  <h1>{heading}</h1>
                  <img src={image1} alt='loading' />
              </Dim>
              <Div>
                  <SubHeading>{paragraphOne}</SubHeading>
                  <img src={image2} alt='15k'/>
              </Div>
              <FormSearch />
              <LowerHeading>
                  {comment} 
                  <span>Sign in</span>
              </LowerHeading>
            </Group>
            <Footer>
                <FooterQuote>
                  <Notediv1>
                    <img src={image3} alt='comment'/>
                    <img src={image3} alt='comment'/>
                  </Notediv1>
                    <Note>{paragraphTwo}</Note>
                  <Notediv>
                      <img src={image4} alt='coment'/>
                      <img src={image4} alt='coment'/>
                   </Notediv>
                </FooterQuote>
                <Box />
            </Footer>  
          </Container>
         
        </Section>
    )
}

export default InfoSectionn
