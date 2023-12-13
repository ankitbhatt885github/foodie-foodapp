import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import ProtectedRoute from './components/ProtectedRoute'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* if cart has items then go to success page else not  */}
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />

        <Route path="/*" element={<Error />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
