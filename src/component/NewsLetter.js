import React from 'react'
import styled from 'styled-components';
import FormInput from '../utils/FormInput'
import image from '../images/mail.png'

const Section = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #f8f8f8;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: montserrat;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding-left: 30px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 106px;
    width: 100%;
    max-width: 575px;
`;

const ContainerB = styled.div`
   display: flex;
   margin-top: 100px;
   align-content: center;
   

`;

const Heading = styled.div`
    font-weight: 800;
   font-size: 29px;
   line-height: 35px;
   color: #303030;  
   margin-top: 95px;
`;


const SubHeading = styled.div`
   margin-top: 12px;
   margin-bottom: 22px;
    font-weight: normal;
   font-size: 14px;
   line-height: 21px;
   color: #8d8d8d;  
   width: 500px;
  
 
`;

const Image = styled.img`
   width: 220px;
   height: 175px;
   object-fit: cover;
   background: url(${image});
`;

const NewsLetter = () => {
    return (
        <Section>
           <Container>
               <Heading>
                 Subscribe to our Newsletter
               </Heading>
               <SubHeading>
               Get latest update lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here
               </SubHeading>
               <FormInput />
            </Container> 
            <ContainerB>
                <Image />
            </ContainerB>
        </Section>
    )
}

export default NewsLetter
