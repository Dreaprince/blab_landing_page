import React from 'react'
import styled from 'styled-components';
import img1 from '../images/4.png'
import img2 from '../images/5.png'
import img3 from '../images/1.png'
import img4 from '../images/2.png'
import img5 from '../images/3.png'

const Section = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #e5e5e5;
    box-sizing: border-box;
    background: #fff;
`;

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const Top = styled.div`
  /* height: 133px; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #fefefe;
  padding: 29px 0px 37px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 120px;
    padding-left: 30px;
    }
`;

const Img1 = styled.img`
   width: 165px;
   height: 67px;
   object-fit: cover;
   background: url(${img1});
`;

const Img2 = styled.img`
   width: 171px;
   height: 71px;
   object-fit: cover;
   background: url(${img2});
`;

const Img3 = styled.img`
   width: 152px;
   height: 62px;
   object-fit: cover;
   background: url(${img3});
`;

const Img4 = styled.img`
   width: 198px;
   height: 81px;
   object-fit: cover;
   background: url(${img4});
`;

const Img5 = styled.img`
   width: 162px;
   height: 66px;
   object-fit: cover;
   background: url(${img5});
`;

const Media = styled.div`
   width: 100%;
   max-width: 1238px;
   margin: 131px auto 0;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   @media screen and (max-width: 768px) {
      flex-direction: column;
      padding-left: 30px;
    }
`;

const Box = styled.div`
   width: 100%;
   max-width: 387.62px;
   height: 317.69px;
   background: #fbfbfb;
   border: 1px solid #D6D6D6;
   box-sizing: border-box;
   border-radius: 4px;
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 768px) {
      margin-bottom: 30px;
    }
   h3 {
     font-weight: 600;
     font-size: 20px;
     line-height: 24px;
     color: #c2c2c2;
     text-align: center;
   }
`;

const Signup = styled.div`
  width: 100%;
  max-width: 1083px;
  height: 183px;
  background: #ffebff;
  border: 1px solid #ffebff;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 138px auto 107px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
      flex-direction: column;
      padding-left: 30px;
    }

  h3 {
    font-weight: normal;
     font-size: 25px;
     line-height: 30px;
     color: #303030; 
     width: 389px;
  }
`;

const Button = styled.button`
   background: #ff6634;
   white-space: nowrap;
   outline: none;
   border: none;
   height: 54px;
   width: 223px;;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   font-size: 17px;
   line-height: 21px;

   &:hover {
       transform: translateY(-2px);
   }
`;

const Advertise = () => {
    return (
        <Section>
            <Container>
                <Top>
                   <Img1  />
                   <Img2  />
                   <Img3  />
                   <Img4  />
                   <Img5 />
                </Top>
                <Media>
                    <Box>
                        <h3>ADVERTISEMENT</h3>
                    </Box>
                    <Box>
                        <h3>ADVERTISEMENT</h3>
                    </Box>
                    <Box>
                        <h3>ADVERTISEMENT</h3>
                    </Box>
                </Media>
                <Signup>
                        <h3>
                Get started today sign up and start reveiwing business.
                        </h3>
                        <Button to='/signup'>
                              Create free Account
                        </Button>
                </Signup>
            </Container>
        </Section>
    )
}

export default Advertise
