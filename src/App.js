import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './components/create';
import Home from './components/home/home';
import Navbar from './components/navbar';
import Post from './components/post';

function App() {
  return (
    <>
      <Navbar />
      <Box>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/create' element={<CreateBlog />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
