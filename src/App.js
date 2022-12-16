import { Box } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './components/create';
import Edit from './components/edit';
import Footer from './components/footer';
import Home from './components/home/home';
import Navbar from './components/navbar';
import Post from './components/post';
import Sign from './components/sign.jsx';
import MyBlogsSkeleton from './components/skeletons/my_blogs_skeleton';
import AppWrapper from './context/core';

const MyBlogs = lazy(() => import('./components/my_blogs'));

function App() {
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
          <Route path='/my-blogs' element={
            <Suspense fallback={<MyBlogsSkeleton />}>
              <MyBlogs />
            </Suspense>
          } />
        </Routes>
      </Box>
      <Box>
        <Footer />
      </Box>
    </AppWrapper>
  );
}

export default App;
