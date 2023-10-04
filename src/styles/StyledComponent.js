import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Section = styled(Box)`
  padding: 4rem 0;
  @media (min-width: 1401px) and (max-width: 1500px) {
  }
  @media (min-width: 1001px) and (max-width: 1400px) {
  }
  @media (min-width: 991px) and (max-width: 1000px) {
    padding: 2rem 0 !important;
  }
  @media (min-width: 551px) and (max-width: 990px) {
    padding: 2rem 0 !important;
  }
  @media (max-width: 550px) {
    padding: 2rem 0 !important;
  }
`;

export const ContainerBox = styled(Box)`
  padding: 20px 0 10px 0;
  background-color: #f2f2f2;
  @media (min-width: 300px) and (max-width: 700px) {
    padding: 25px 0 65px 0;
  }
`;

export const ImageBackGround1 = styled(Box)`
  background-image: linear-gradient(
    to bottom right,
    #7b579d,
    #4b458d,
    #595772
  );
  background-position: center center;
  background-size: cover !important;

  // .feature {
  //  // background: rgba(0, 0, 0, 0.3);
  // }
  @media (max-width: 550px) {
    background-image: linear-gradient(
      to bottom right,
      #7b579d,
      #4b458d,
      #4b458d,
      #4b458d,
      #595772
    );
  }
`;

export const BackgroundColorSection = styled(Box)`
  padding: 2.5rem 0;
  background-image: linear-gradient(
    to right,
    #7b579d,
    #4b458d,
    #4b458d,
    #4b458d,
    #595772
  );
  background-size: cover;
  @media (max-width: 550px) {
    background-image: linear-gradient(
      to bottom right,
      #7b579d,
      #4b458d,
      #4b458d,
      #4b458d,
      #595772
    );
  }
`;

export const ImageBackGround = styled(Box)`
  background-size: cover;
  background-position: top center;
  background-color: #42428a;
`;
export const ImpactBackground = styled(Box)`
  background-size: cover;
  background-color: #42428a;
`;

export const MainContainer = styled(Box)`
  min-height: 100%;
`;
export const Links = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const MainHeadingTitle = styled(Typography)`
  @media (min-width: 900px) and (max-width: 1100px) {
    &.subheading {
      font-size: 1.3rem !important;
      font-family: Montserrat !important;
      font-weight: 700 !important;
      letter-spacing: 1px;
    }
  }
  @media (min-width: 1100px) and (max-width: 1160px) {
    &.subheading {
      font-size: 1.4rem !important;
      font-family: Montserrat !important;
      font-weight: 700 !important;
      letter-spacing: 1px;
    }
  }
  @media (min-width: 1160px) and (max-width: 1400px) {
    &.subheading {
      font-size: 1.7rem !important;
      font-family: Montserrat !important;
      font-weight: 700 !important;
      letter-spacing: 1px;
    }
  }
`;

export const DifferentiatorTitle = styled(Typography)`
  @media (min-width: 900px) and (max-width: 1250px) {
    &.diffenentiatorheading {
      font-size: 0.8rem !important;
      font-family: Montserrat !important;
      font-weight: 900 !important;
      line-height: 26px !important;
      letter-spacing: "1px";
    }
  }
  @media (min-width: 1250px) and (max-width: 1400px) {
    &.diffenentiatorheading {
      font-size: 1rem !important;
      font-family: Montserrat !important;
      font-weight: 900 !important;
      line-height: 26px !important;
      letter-spacing: "1px";
    }
  }
`;
