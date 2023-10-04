import {
  Container,
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  Button,
  Stack,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
// import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
// import dataList from '../../db.json';
import { FooterSection } from './Footer.styles';
// import linkInImage from '../../assets/footerImages/linkedin-logo-png-1853.png';
// // import fbImage from "../../assets/footerImages/logo-facebookpng-32204.png";
// import twitterImage from '../../assets/footerImages/logo-twitter-png-5860.png';
// import youtubeImage from '../../assets/footerImages/youtube-logo-png-2067.png';
import { ImageBackGround } from '../../styles/StyledComponent';
// <img src={fbImage} alt="link" width="42" height="36" />
import axios from 'axios';
import { Snackbar } from '@mui/material';

const Footer = () => {
  const [email, setEmail] = useState('');
  const url = process.env.REACT_APP_CONTACT_API_URL;
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState('');
  //onchange function for input
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };
  //subscribeEvent for email
  const subscribeEvent = async () => {
    try {
      if (email === '') {
        setErrorMessage('Please enter an email address.');
      } else if (!isValidEmail(email)) {
        setErrorMessage('Please enter a valid email address.');
      } else {
        const formData = new FormData();
        formData.append('email', email);
        const joinCummnityResponse = await axios.post(`${url}`, formData);
        if (joinCummnityResponse.data) {
          setOpen(true);
          setMessage(joinCummnityResponse.data.message);
          setEmail('');
          setErrorMessage('');
        }
      }
    } catch (error) {
      setOpen(true);
      setEmail('');
      setMessage(error.message);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      <ImageBackGround>
        <FooterSection>
          <Container maxWidth="xl">
            <Grid container direction="row" justifyContent={{sm:"space-between",md:"flex-start"}} spacing={1}>
              <Grid item xs={12} sm={5} md={4} lg={3}>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography variant="body">
                    Get updates in your inbox
                  </Typography>

                  <FormControl variant="outlined">
                    <OutlinedInput
                      value={email}
                      onChange={handleInputChange}
                      id="outlined-start-adornment"
                      placeholder="E-mail"
                      sx={{
                        backgroundColor: '#fff',
                        height: 34,
                        width: 240,
                      }}
                      size="small"
                    />
                  </FormControl>
                  {errorMessage && (
                    <div style={{ color: 'red' }}>{errorMessage}</div>
                  )}
                  <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={open}
                    onClose={() => setOpen(false)}
                    message={message}
                    autoHideDuration={2000}
                  />

                  <Button onClick={subscribeEvent} variant="Subcribe">
                    Subscribe
                  </Button>

                  <a href="/aboutus/contact" style={{ color: 'inherit' }}>
                    <Typography variant="body">Connect with us</Typography>
                  </a>
                </Stack>
                <Stack
                  display={{ xs: 'none', sm: 'block' }}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={1}
                  pt={2}
                >
                  {/* <img src={linkInImage} alt="link" width="42" height="36" />

                  <img src={youtubeImage} alt="link" width="44" height="34" />

                  <img src={twitterImage} alt="link" width="42" height="34" /> */}
                </Stack>
              </Grid>
              <Grid item xs={7} sm={3} md={2} lg={2} mb={2}>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <a
                    href="/impact"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography variant="body">Impact</Typography>
                  </a>
                  <a
                    href="/impact/impact-frames"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: isSmallScreen ? 'none' : 'inline',
                    }}
                  >
                    <Typography variant="body" pl={3}>
                      Frames
                    </Typography>
                  </a>
                  <a
                    href="/impact/impact-exponents"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: isSmallScreen ? 'none' : 'inline',
                    }}
                  >
                    <Typography variant="body" pl={3}>
                      Exponents
                    </Typography>
                  </a>
                  <a
                    href="/impact/impact-platform"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: isSmallScreen ? 'none' : 'inline',
                    }}
                  >
                    <Typography variant="body" pl={3}>
                      Platforms
                    </Typography>
                  </a>
                  <a
                    href="/ecosystem"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography variant="body">Ecosystem</Typography>
                  </a>
                  <a
                    href="/experts"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography variant="body">Knowledge</Typography>
                  </a>
                  <a
                    href="/experts"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography variant="body">Experts</Typography>
                  </a>
                </Stack>
              </Grid>
              <Grid item xs={5} sm={3} md={2} lg={2} mb={2}>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <a
                    href="/perspective"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography variant="body">Perspective</Typography>
                  </a>
                  <a
                    href="/blogs"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: isSmallScreen ? 'none' : 'inline',
                    }}
                  >
                    <Typography variant="body" pl={3}>
                      Blog
                    </Typography>
                  </a>
                  <a
                    href="/perspective/podcast"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: isSmallScreen ? 'none' : 'inline',
                    }}
                  >
                    <Typography variant="body" pl={3}>
                      Podcast
                    </Typography>
                  </a>
                  <a
                    href="https://muse.societalthinking.org/"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: isSmallScreen ? 'none' : 'inline',
                    }}
                  >
                    <Typography variant="body" pl={3}>
                      Muse
                    </Typography>
                  </a>
                  <a
                    href="/explore"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography variant="body">Events</Typography>
                  </a>
                  <a
                    href="/aboutus"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography variant="body">About us</Typography>
                  </a>
                </Stack>
              </Grid>
            </Grid>
            <Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Stack
                  display={{ xs: 'block', sm: 'none' }}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={1}
                >
                  {/* <img src={linkInImage} alt="link" width="42" height="36" />

                  <img src={youtubeImage} alt="link" width="44" height="34" />

                  <img src={twitterImage} alt="link" width="42" height="34" /> */}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} pt={1}>
                <Stack
                  direction="column"
                  justifyContent={{
                    xs: 'flex-start',
                    sm: 'flex-start',
                    md: 'flex-end',
                    lg: 'flex-end',
                    xl: 'flex-end',
                  }}
                  alignItems={{
                    xs: 'flex-start',
                    sm: 'flex-start',
                    md: 'flex-end',
                    lg: 'flex-end',
                    xl: 'flex-end',
                  }}
                  mt={{ xs: 0, sm: 0, md: -10, lg: -10, xl: -10 }}
                  pb={2}
                >
                  <Typography variant="body">Code of sharing</Typography>
                </Stack>
                <Stack
                  direction={{ xs: 'row', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2 }}
                  justifyContent={{
                    xs: 'flex-start',
                    sm: 'flex-end',
                    md: 'flex-end',
                    lg: 'flex-end',
                    xl: 'flex-end',
                  }}
                  alignItems={{
                    xs: 'flex-start',
                    sm: 'flex-start',
                    md: 'flex-end',
                    lg: 'flex-end',
                    xl: 'flex-end',
                  }}
                  mt={{sm:-5,md:0}}
                >
                  <Typography variant="body">Copyright © 2023</Typography>
                  <Typography variant="body">EkStep Foundation</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </FooterSection>
      </ImageBackGround>
    </>
  );
};

export default Footer;
