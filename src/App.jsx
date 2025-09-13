import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import ActionComponent from './components/ActionComponent/ActionComponent'
import CallBack from './components/CallBack/CallBack'
import Context from './components/Context/Context'
import Defferred from './components/Defferred/Deffered'
import Ref from './components/Ref/Ref'
import Memo from './components/Memo/Memo'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello World!</h1>} />
        <Route path="/action" element={<ActionComponent />} />
        <Route path="/callback" element={<CallBack />} />
        <Route path="/context" element={<Context />} />
        <Route path="/deffered" element={<Defferred />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </Router>
  )
}

export default App
