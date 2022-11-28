import CreateIcon from '@mui/icons-material/Create';
import {
  AppBar, Button,
  styled,
  Toolbar,
  Typography
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { StyledBox } from './customComponents/styledComponents';


const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

function Navbar() {

  const navigate = useNavigate();

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
            <Button
              color="secondary"
              size="small"
              variant="contained"
              endIcon={<CreateIcon fontSize="small" />}
              onClick={() => {
                navigate('/create');
              }}
            >New</Button>
          </StyledBox>
        </StyledToolBar>
      </AppBar>
    </>
  );
}

export default Navbar;
