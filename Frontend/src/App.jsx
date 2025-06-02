import { Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration';
import Home from './pages/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <Registration />
      </div> */}
      
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
