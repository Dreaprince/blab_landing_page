import React from 'react'
import styled from 'styled-components';
import imgA from '../images/stars.png'
import imgB from '../images/Ellipse1.png'


const Container = styled.div`
  width: 263px;
  height: 146.37px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding:  16.77px 21.34px;
  box-shadow: 0px 4px 11px 5px rgba(239, 239, 239, 0.25);
  border-radius: 4px;
`;

const ImageA = styled.img`
   width: 75px;
    height: 15px;
    object-fit: cover; 
    background: url(${imgA});
    margin-bottom: 18px;
`;

const SubHeading = styled.div`
   font-weight: normal;
   font-size: 12px;
   line-height: 15px;
   color: #8D8D8D;
   margin-bottom: 13px;
`;

const Dim = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageB = styled.img`
   width: 36px;
   height: 38px;
  margin-right: 15px;
   background: url(${imgB});
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

const Box = () => {
    return (
        <Container>
            <ImageA />
            <SubHeading>
               Great place to work with the good work culture and people skills
            </SubHeading>
            <Dim>
              <ImageB /> 
              <Group>
                  <h5>Anonymous</h5>
                  <h6>Business Analysis</h6>
              </Group>
            </Dim>
            
        </Container>
    )
}

export default Box
