import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginScreen, ProductsScreen } from './screens'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginScreen />} />
        <Route exact path='/home' element={<ProductsScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App