import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages';
import Login from './Pages/auth/login';
import Register from './Pages/auth/register';
import Books from './Pages/books';
import Contacts from './Pages/contacts';
import Teams from './Pages/teams';



function App() {
  return (
    <>
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='books' element={<Books />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path='teams' element={<Teams />} />
          <Route path="contacts" element={<Contacts />}/>
          
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
