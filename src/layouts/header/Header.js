import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Toolbar,
  Box,
  Grid,
  Button,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Drawer,
  Container,
  InputBase,
  InputAdornment,
  Collapse,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import queryString from "query-string";

import AppbarLogo from '../../assets/images/Societal-Thinking-Logo-1.png';
import { MenuBar } from './Header.style';
import data from '../../db.json';
import { Links } from '../../styles/StyledComponent';
// import SearchImg from '../../assets/homePageImages/search-icon.png';
const navItems = data.HeadingList;
const drawerWidth = 240;

const handleScrollClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Header = (props) => {
  const [isMenuHide, setIsMenuHide] = useState(false);
  const { window } = props;
  const location = useLocation();
  const searchParams = queryString.parse(location.search);
  const page = searchParams.page;
  const search = searchParams.search;
  console.log(page, "0000", search);
  const [searchText, setSearchText] = useState(
    props.inputVal ? props.inputVal : ''
  );
  useEffect(() => {
    if (search) {
      setIsMenuHide(false);
    }
  }, [location.search]);
  let currentPath;
  const navigate = useNavigate();

  if (location.pathname === '/aboutus/contact') {
    const paths = location.pathname.split('/');
    currentPath = `/${paths[1]}`;
  } else if (location.pathname === '/impact/impact-frames') {
    const paths = location.pathname.split('/');

    currentPath = `/${paths[1]}`;
  } else if (location.pathname === '/impact/impact-exponents') {
    const paths = location.pathname.split('/');
    currentPath = `/${paths[1]}`;
  } else if (location.pathname === '/impact/impact-platform') {
    const paths = location.pathname.split('/');
    currentPath = `/${paths[1]}`;
  } else if (location.pathname === '/perspective/podcast') {
    const paths = location.pathname.split('/');
    currentPath = `/${paths[1]}`;
  } else {
    currentPath = location.pathname;
  }

  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (event, link) => {
    event.stopPropagation();
    setOpen((prevOpen) => ({
      ...prevOpen,
      [link]: !prevOpen[link],
    }));
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Grid item xs={3} sm={3} md={3} lg={3} margin="5px" textAlign="end">
        <CloseIcon />
      </Grid>
      <List>
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                }}
              >
                <div
                  onClick={() => {
                    if (location.pathname === item.link) {
                      handleScrollClick();
                    }
                  }}
                >
                  <Links to={item.link} underline="none">
                    <ListItemText primary={item.name} />
                  </Links>
                </div>
                {(item.link === '/perspective' || item.link === '/impact') &&
                  item.options && (
                    <>
                      <Button
                        onClick={(event) => handleClick(event, item.link)}
                      >
                        {open[item.link] ? <ExpandLess /> : <ExpandMore />}
                      </Button>
                    </>
                  )}
              </ListItemButton>
            </ListItem>
            <Collapse in={open[item.link]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.options?.map((name) => (
                  <ListItem sx={{ pl: 4 }} key={name.name} disablePadding>
                    <Links to={name.link} underline="none">
                      <ListItemText primary={name.name} />
                    </Links>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleInputClick = () => {
    if (!search) {
      setIsMenuHide(true);
      setSearchText("");
    }
  };

  const handleCloseClick = () => {
    setIsMenuHide(false);
    setSearchText('');
  };
  const handleInputSearch = (e) => {
    if (e.key === 'Enter') {
      // console.log(e.target.value);
      setSearchText(e.target.value);
      navigate(`/search?page=1&search=${e.target.value}`);
    }
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderBottom: isMenuHide ? "1px solid #855ba1" : null,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    // padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      // padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(6)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: isMenuHide ? '40ch' : '1ch',
        // '&:focus': {
        //   width: '40ch',
        // },
      },
    },
  }));
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MenuBar>
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                mx: { xs: 0, lg: -3 },
                pl: { xs: 0, sm: 0, lg: 3 },
                pr: { xs: 0, sm: 0, lg: 2 },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <img
                  onClick={() => {
                    if (location.pathname === '/') {
                      handleScrollClick();
                    } else {
                      navigate('/');
                    }
                  }}
                  style={{
                    cursor: 'pointer',
                    height: '70px',
                    width: '200px',
                    objectFit: 'contain',
                  }}
                  src={AppbarLogo}
                  alt="img"
                />
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                classes={{ root: 'icon-btn' }}
                sx={{ mb: 3, display: { md: 'none' }, p: 0 }}
              >
                <MenuIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
              {!isMenuHide && (
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  {navItems.map((item, index) => (
                    <Links
                      key={index}
                      to={item.link}
                      underline="none"
                      onClick={() => {
                        if (location.pathname === '/search') {
                          handleScrollClick();
                        } else {
                          navigate('/search');
                        }
                      }}
                    >
                      {item.icon ? (
                        <IconButton
                          sx={{
                            display: {
                              sm: 'none',
                              xs: 'none',
                              md: 'none',
                            },
                            px: 2,
                            '&:hover': {
                              backgroundColor: '#fff',
                            },
                          }}
                        >
                          {/* <img
                          src={SearchImg}
                          alt="img"
                          style={{ height: '33px', background: 'none' }}
                        /> */}
                        </IconButton>
                      ) : item.button ? (
                        <Button
                          onClick={() => {
                            if (location.pathname === '/explore') {
                              handleScrollClick();
                            } else {
                              navigate('/explore');
                            }
                          }}
                          variant={
                            currentPath === '/explore'
                              ? 'notContained'
                              : 'contained'
                          }
                        >
                          EXPLORE
                        </Button>
                      ) : (
                        <Button
                          sx={{
                            '&:hover': {
                              backgroundColor: '#ffe22a',
                            },
                            color: '#fff',
                            mr: 1,
                          }}
                          variant={currentPath === item.link ? 'active' : ''}
                          key={index}
                          onClick={() => {
                            if (location.pathname === item.link) {
                              handleScrollClick();
                            } else {
                              navigate(item.link);
                            }
                          }}
                        >
                          {item.name}
                        </Button>
                      )}
                    </Links>
                  ))}
                </Box>
              )}

              {!isMenuHide ? (
                <IconButton
                  sx={{
                    display: {
                      sm: 'none',
                      xs: 'none',
                      md: 'inline-block',
                    },
                    px: 2,
                    '&:hover': {
                      backgroundColor: '#fff',
                    },
                  }}
                  onClick={handleInputClick}
                >
                  {/* <img
                    src={SearchImg}
                    alt="img"
                    style={{
                      height: '33px',
                      background: 'none',
                      cursor: 'pointer',
                    }}
                  /> */}
                </IconButton>
              ) : (
                <Search sx={{ display: { xs: 'none', md: 'block' } }}>
                  <SearchIconWrapper>
                    {/* <SearchIcon /> */}
                    <IconButton
                      sx={{
                        display: {
                          sm: 'none',
                          xs: 'none',
                          md: 'inline-block',
                        },
                        px: 2,
                        '&:hover': {
                          backgroundColor: '#fff',
                        },
                      }}
                    >
                      {/* <Box sx={{ cursor: 'pointer' }}> */}
                      {/* <img
                        src={SearchImg}
                        alt="img"
                        style={{
                          height: '33px',
                          background: 'none',
                          cursor: 'pointer',
                        }}
                        //  onClick={handleInputClick}
                      /> */}
                      {/* </Box> */}
                    </IconButton>
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="   Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    searchText={searchText}
                    onKeyDown={handleInputSearch}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleCloseClick} edge="end">
                          <CloseIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Search>
              )}
            </Toolbar>
          </Container>
        </MenuBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              // display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Toolbar />
    </>
  );
};

export default Header;
