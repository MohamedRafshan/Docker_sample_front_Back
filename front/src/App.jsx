
import SignInRegister from './SingIN'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Regster from './Register'
import Page from './page'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInRegister />} />
      <Route path="/register" element={<Regster />} />
      <Route path="/page" element={<Page/>} />
    </Routes>

    </BrowserRouter>
  
    
  )
}

export default App
