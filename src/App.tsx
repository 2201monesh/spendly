import './App.css'
import Page from './app/dashboard/page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        {/* <Route path="/analytics" element={<AnalyticsPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
