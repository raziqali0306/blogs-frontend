import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './components/create';
import Edit from './components/edit';
import Footer from './components/footer';
import Home from './components/home/home';
import Navbar from './components/navbar';
import Post from './components/post';
import Sign from './components/sign.jsx';
import AppWrapper from './context/core';

function App() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var reveals = document.querySelectorAll('.reveal');
      let windowHeight = window.innerHeight;
      for (let i = 0; i < reveals.length; i++) {
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 70;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
        else {
          reveals[i].classList.remove('active');
        }
      }
    })
    window.scrollTo(0, 0);
  }, [])

  return (
    <AppWrapper>
      <Navbar />
      <Box>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/posts/:id/edit' element={<Edit />} />
          <Route path='/create' element={<CreateBlog />} />
          <Route path='/sign' element={<Sign />} />
        </Routes>
      </Box>
      <Box className='reveal'>
        <Footer />
      </Box>
    </AppWrapper>
  );
}

export default App;
