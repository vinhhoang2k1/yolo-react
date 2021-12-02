import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/index'
import Products from './pages/Product/index';
import Detail from './pages/detail/index'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Detail' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
