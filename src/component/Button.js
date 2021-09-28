import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
   background: #fff;
   white-space: nowrap;
   outline: none;
   height: 54px;
   width: 128px;
   height: 46px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   color:  #ff6634;
   font-size: 16px;
   line-height: 20px;
   border-radius: 4px;
   box-sizing: border-box;
   border: 1px solid #ff6634;

   &:hover {
       transform: translateY(-2px);
   }
`;