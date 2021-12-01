import { Route, Routes } from 'react-router-dom';

import Products from './pages/Product/index';
import Home from './pages/Home/index'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
