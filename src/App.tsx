
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home'

function App() {
  return (
    <>
      {/*Route private */}
      <Routes>
          <Route element={<Layout />}>
              <Route path='/' element={<Home />}></Route>
          </Route>
      </Routes>
    </>
  )
}

export default App
