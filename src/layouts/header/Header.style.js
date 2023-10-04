import { styled } from '@mui/system';
import { AppBar } from '@mui/material';

export const MenuBar = styled(AppBar)`
  background-color: #fff;
  color: #000;
  box-shadow: none;
  button {
    font-size: 1.125rem;
    @media (min-width: 935px) and (max-width: 984px) {
      font-size: 1rem;
    }
    @media (min-width: 899px) and (max-width: 934px) {
      font-size: 0.9rem;
    }
    font-weight: 400;
    font-family: roboto slab;
    text-transform: uppercase;
    color: #000;
    // &:hover {
    //   background: #ffe22a;
    // }
  }
`;
