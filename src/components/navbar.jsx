import CreateIcon from '@mui/icons-material/Create';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {
  AppBar, Button, styled,
  Toolbar,
  Typography
} from "@mui/material";
import { Box, Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/core';
import { StyledBox } from './customComponents/styledComponents';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

function Navbar() {

  const navigate = useNavigate();
  const appContext = useAppContext();

  return (
    <>
      <AppBar sx={(theme) => ({backgroundColor: theme.palette.primary.extraLight, px: "100px"})} position="sticky">
        <StyledToolBar>
          <StyledBox onClick={() => {
            navigate('/')
          }}>
            <Typography variant="h5" fontWeight={600}>Custom</Typography>
            <Typography variant="body1" sx={(theme) => ({color: theme.palette.secondary.main, pt:0.7})}>.Blog</Typography>
          </StyledBox>
          <StyledBox gap={5} sx={(theme) => ({color: theme.palette.text.main})}>
            <Typography>Home</Typography>
            <Typography>Category</Typography>
            <Typography>Blogs</Typography>
            <Typography>About Me</Typography>
            {
              appContext.username !== '' ? 
                <>
                  <Button
                    color="secondary"
                    size="small"
                    variant="contained"
                    endIcon={<CreateIcon fontSize="small" />}
                    onClick={() => {
                      navigate('/create');
                    }}
                  >Create</Button>
                  <Box
                    sx={{
                      postition: "relative",
                    }}
                    onClick={() => {
                      const menu = document.querySelector('.navbar-toggle-menu')
                      menu.style.visibility = (menu.style.visibility === 'hidden' || menu.style.visibility === '') ? 'visible' : 'hidden'
                    }}
                  >
                    <KeyboardArrowDownIcon
                      color="secondary"
                      sx={{
                        height: "1.725rem",
                        width: "1.725rem",
                      }}
                    />
                    <PersonOutlineIcon
                      color="secondary"
                      sx={{
                        height: "1.825rem",
                        width: "1.825rem",
                      }}
                    />
                    <Stack
                      className="navbar-toggle-menu"
                      sx={(theme) => ({
                        position: "absolute",
                        top: "101%",
                        px: 2.5,
                        py: 1.2,
                        right: "2%",
                        backgroundColor: theme.palette.primary.extraLight,
                        boxShadow: `4px 4px 12px ${theme.palette.primary.main}`,
                        borderRadius: "8px",
                        visibility: "hidden"
                      })}
                    >
                      <Typography
                        variant='body2'
                        onClick={() => appContext.clearLoginDetails()}
                      >Logout</Typography>
                    </Stack>
                  </Box>
                </>
                :
                <LoginIcon
                  color="secondary"
                  sx={{
                    height: "1.825rem",
                    width: "1.825rem",
                  }}
                  onClick={() => {
                    navigate('/sign');
                  }}
                />
            }
          </StyledBox>
        </StyledToolBar>
      </AppBar>
    </>
  );
}

export default Navbar;
