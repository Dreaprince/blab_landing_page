import React from 'react'
import styled from 'styled-components';
import { SLiderData } from '../data/SliderData';


const Section = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #fff;
    box-sizing: border-box;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;

`;

const Top = styled.div`
  margin-top: 103px;
`;

const Heading = styled.div`
    font-weight: 800;
   font-size: 29px;
   line-height: 35px;
   color: #303030;  
   margin-bottom: 12px;
   text-align: center;
`;

const SubHeading = styled.div`
    font-weight: normal;
   font-size: 14px;
   line-height: 17px;
   color: #8d8d8d;  
   margin-bottom: 58px;
   text-align: center;
`;

const ReviewGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 337px;
  width: 100%;
  max-width: 1025px;
  margin: 0 auto 55px;

  @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: none;
      padding-left: 8rem ;
    }
 
`;

const Review = styled.div`
  width: 290px;
  height: 225px;
  background: #fff;
  border: 1px solid #fbfbfb;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px 2px rgba(0,0,0, 0.4);
  border-radius: 6px;
  
  @media screen and (max-width: 768px) {
      margin-bottom: 25px;
    }
`;

const StarGroup = styled.div`
   display: flex;
   flex-direction: row;
   margin-bottom: 15px;
   padding-top: 30px;
   padding-left: 31px;
   
   img {
     width: 70px;
     height: 11px;
     object-fit: cover; 
     margin-right: 10px;
   }
`;

const Rating = styled.div`
   font-weight: bold;
   font-size: 11px;
   line-height: 13px;
   color: #000;  
`;

const H5 = styled.div`
   width: 160px;
   font-weight: normal;
   font-size: 12px;
   line-height: 15px;
   color: #8d8d8d;
   margin-bottom: 15px;
   padding-left: 31px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 13px;
  padding-left: 31px;
  padding-right: 25px;
`;

const Box = styled.div`
  height: 19px;
  background: rgba(225, 102, 52, 0.05);
  border-radius: 6px;

  h6 {
   font-weight: normal;
   font-size: 12px;
   line-height: 15px;
   color: #ff6634;    
  }
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: row;

  img {
     width: 10px;
     height: 9px;
     object-fit: cover;  
   }

   h3 {
    font-weight: 600;
   font-size: 10px;
   line-height: 12px;
   color: #000; 
   margin-left: 7px;
   }
`;

const Dim = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  background: #fcfcfc;
  padding-left: 31px;
  padding-top: 16px;
`;

const ImageB = styled.img`
   width: 36px;
   height: 38px;
  margin-right: 15px;

`;

const Group = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-weight: normal;
   font-size: 11px;
   line-height: 13px;
   color: #6c6c6c;  
  }

  h6 {
    font-weight: normal;
   font-size: 11px;
   line-height: 13px;
   color: #bfbfbf;  
  }
`;

const PaginationBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 63px;
  justify-content: space-between;
  margin-bottom: 84px;
`;

const Pbox = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 10px;
  background: #8a8a8a;
  box-sizing: border-box;
  border: 2px solid #e9e9e9;
`;

const Pbox1 = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 10px;
  background: #fff;
  box-sizing: border-box;
  border: 2px solid #e9e9e9;
`;

const Feature = () => {
    return (
        <Section>
            <Container>
                <Top>
                  <Heading>Featured Reviews</Heading>
                  <SubHeading>
                      Here are some from the reveiw been done by some of the employees on this platform
                  </SubHeading>
                </Top>
                <ReviewGroup>
                    {SLiderData.map((item, index) => (
                    <Review key={index}>
                        <StarGroup>
                            <img src={item.star} alt={item.alt} />
                            <Rating>{item.rating}</Rating>
                        </StarGroup>
                        <H5>{item.title}</H5>
                        <Div>
                            <Box>
                                <h6>{item.act}</h6> 
                            </Box> 
                            <Box2>
                                <img src={item.logo} alt={item.alt} />
                                <h3>{item.search}</h3>
                            </Box2>
                        </Div>
                        <Dim>
                            <ImageB src={item.images} alt={item.alt} /> 
                            <Group>
                                <h5>{item.label}</h5>
                                <h6>{item.business}</h6>
                            </Group>
                        </Dim>
                    </Review>
                    ))}
                </ReviewGroup>
                <PaginationBox>
                    <Pbox />
                    <Pbox1 />
                    <Pbox1 />
                </PaginationBox>
            </Container>
        </Section>
    )
}

export default Feature
