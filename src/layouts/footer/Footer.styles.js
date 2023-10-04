import { styled } from "@mui/system";
import { Box,ListItemText } from "@mui/material";


export const FooterSection = styled(Box)`
  color: #fff !important;
  padding-top:3rem;
  span{
    font-weight:600 !important;
  font-family:montserrat;
  padding-bottom:0rem;
    color:#fff;
  }
`;
export const Links = styled("a")`
  text-decoration: none;
`;

export const ListText = styled(ListItemText)`
font-weight: 600;
`
