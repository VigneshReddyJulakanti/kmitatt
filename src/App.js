import logo from './logo.svg';
import './App.css';
import { Route ,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Attendance from './Components/Attendance';
import Section from './Components/Section.js';

function App() {
  return (
    <>

<Routes>

  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/attendance' element={<Attendance></Attendance>}></Route>
  <Route path='/section' element={<Section></Section>}></Route>
  </Routes>
    
    
    </>
  );
}

export default App;
