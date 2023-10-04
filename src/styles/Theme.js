import { createTheme } from "@mui/material/styles";
import FONT from "./Font";

const theme = createTheme({
  typography: {
    fontFamily: FONT.FAMILY.BODY_FONT,
    h1: {
      fontFamily: FONT.FAMILY.HEADING_FONT,
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      letterSpacing: "4px",
      fontSize: FONT.SIZES[48],
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[42],
      },
    },
    h2: {
      fontFamily: FONT.FAMILY.BODY_FONT,
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[40],
      letterSpacing: "1px",
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[28],
      },
    },
    h3: {
      fontFamily: FONT.FAMILY.BODY_FONT,
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[32],
      lineHeight: "2.5rem !important",
      letterSpacing: "1px",
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[26],
      },
    },
    h4: {
      fontFamily: FONT.FAMILY.BODY_FONT,
      fontWeight: FONT.WEIGHT.SEMI_BOLD,
      fontSize: FONT.SIZES[24],
      paddingBottom: "1rem",
      letterSpacing: "1px",
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[22],
      },
    },
    h5: {
      fontFamily: FONT.FAMILY.BODY_FONT,
      fontWeight: FONT.WEIGHT.SEMI_BOLD,
      fontSize: FONT.SIZES[18],
      letterSpacing: "1px",
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[16],
      },
    },
    h6: {
      fontFamily: FONT.FAMILY.HEADING_FONT,
      fontWeight: FONT.WEIGHT.SEMI_BOLD,
      fontSize: FONT.SIZES[18],
      lineHeight: "2rem !important",
      letterSpacing: "1px",
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[16],
      },
    },
    subtitle1: {
      fontSize: FONT.SIZES[24],
      fontFamily: FONT.FAMILY.BODY_FONT,
      fontWeight: FONT.WEIGHT.SEMI_BOLD,
      lineHeight: "2.5rem !important",
      color: "#000",
      paddingBottom: "0.2rem",
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[19],
        lineHeight: "1.875rem !important",
      },
    },
    subtitle2: {
      fontSize: FONT.SIZES[18],
      fontFamily: FONT.FAMILY.BODY_FONT,
      fontWeight: FONT.WEIGHT.SEMI_BOLD,
      lineHeight: "1.5rem !important",
      letterSpacing: "0.0625rem",
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[16],
      },
    },

    body: {
      fontWeight: FONT.WEIGHT.MEDIUM,
      fontSize: FONT.SIZES[16],
      fontFamily: FONT.FAMILY.ASSISTANT,
    },

    body1: {
      fontSize: FONT.SIZES[18],
      fontFamily: FONT.FAMILY.BODY_FONT,
      fontWeight: FONT.WEIGHT.MEDIUM,
      // paddingBottom: '0.2rem',
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[16],
      },
    },
    body2: {
      fontWeight: FONT.WEIGHT.DEMI_BOLD,
      fontSize: FONT.SIZES[14],
      fontFamily: FONT.FAMILY.BODY_FONT,
    },
    body3: {
      fontSize: FONT.SIZES[18],
      fontFamily: FONT.FAMILY.ASSISTANT,
      fontWeight: FONT.WEIGHT.MEDIUM,
      lineHeight: "28px !important",
      color: "#fff",
      paddingBottom: "0.2rem",
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[16],
      },
    },
    body4: {
      fontSize: FONT.SIZES[16],
      fontFamily: FONT.FAMILY.ASSISTANT,
      fontWeight: FONT.WEIGHT.MEDIUM,
      lineHeight: "16px !important",
      color: "#000",
      paddingBottom: "0.2rem",
      letterSpacing: "1px",
    },
    body5: {
      fontSize: FONT.SIZES[30],
      fontFamily: FONT.FAMILY.ASSISTANT,
      fontWeight: FONT.WEIGHT.MEDIUM,
      lineHeight: "28px !important",
      color: "#fff",
      "@media (max-width:550px)": {
        fontSize: FONT.SIZES[20],
      },
    },
    link: {
      fontSize: FONT.SIZES[32],
      fontFamily: FONT.FAMILY.CAMPAIGN,
      lineHeight: "48px",
      paddingBottom: "5px",
    },
  },

  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          padding: 0, 
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width:450px)": {
            paddingLeft: "50px",
            paddingRight: "50px",
          },
          "@media (min-width:0px) and (max-width:449px)": {
            paddingLeft: "20px",
            paddingRight: "20px",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            background: "linear-gradient(to right, #855ba1 0%, #2a2b74 100%)",
            "&.MuiButton-root": {
              color: "white",
              "&:hover": {
                color: "black",
                background: "#ffe22a",
              },
            },
          },
        },
        {
          props: { variant: "notContained" },
          style: {
            background: "linear-gradient(to right, #FFE22A, #FFE22A)",
            "&.MuiButton-root": {
              color: "black",
              "&:hover": {
                color: "black",
              },
            },
          },
        },
        {
          props: { variant: "Subcribe" },
          style: {
            "&.MuiButton-root": {
              color: "white",
              border: "1px solid white",
              fontSize: "16px",
              borderRadius: 0,
              height: 34,
              textTransform: "none",
            },
          },
        },
        {
          props: { variant: "submit" },
          style: {
            "&.MuiButton-root": {
              color: "black",
              border: "1px solid white",
              borderRadius: 0,
              fontSize: "16px",
              height: 34,
              textTransform: "none",
            },
            "&:hover": {
              backgroundColor: "white", // Change the background color on hover
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            "&.MuiButton-root": {
              color: "#2a2b74",
              border: "1px solid #2a2b74",
              // borderColor:'linear-gradient(to right, #855ba1 0%, #2a2b74 100%)',
              // height: 24,
              textTransform: "none",
            },
          },
        },
        {
          props: { variant: "right-arrow-btn" },
          style: {
            top: "45%",
            zIndex: 1,
            float: "right",
            border: "1px solid black",
          },
        },
        {
          props: { variant: "left-arrow-btn" },
          style: {
            top: "45%",
            zIndex: 1,
            border: "1px solid black",
          },
        },
        {
          props: { variant: "text" },
          style: {
            textTransform: "none",
            color: "#000",
            fontFamily: FONT.FAMILY.HEADING_FONT,
            fontSize: FONT.SIZES[18],
            "&:hover": {
              backgroundColor: "#FFE22A",
            },
          },
        },
        {
          props: { variant: "active" },
          style: {
            backgroundColor: "#FFE22A",
          },
        },
      ],
    },
    MuiLink: {
      variants: [
        {
          props: { variant: "inherit" },
          style: {
            border: "1px solid #2a2b74",
            padding: "5px 15px 5px 15px",
            fontFamily: FONT.FAMILY.HEADING_FONT,
            color: "#2a2b74",
          },
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: { classes: "icon-btn" },
          style: {
            "&.MuiIconButton-root": {
              marginRight: "0px",
            },
          },
        },
      ],
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&.MuiCardContent-card-content": {
            paddingBottom: 0,
          },
        },
      },
    },
  },
});

export default theme;
