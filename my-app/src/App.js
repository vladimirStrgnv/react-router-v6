import {Routes, Route} from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';
import Layout from './components/Layout';
import { Singlepage } from './components/SinglPage';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Homepage></Homepage>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='blog' element={<Blogpage></Blogpage>}></Route>
          <Route path='post/:id' element={<Singlepage></Singlepage>}></Route>
          <Route path='*' element={<Notfoundpage></Notfoundpage>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
