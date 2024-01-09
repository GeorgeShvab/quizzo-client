import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './redux/store'
import Layout from './components/Layout/Layout'
import Index from './pages/index/Index'
import Join from './pages/join/Join'
import Session from './pages/session/Session'
import { initWebSocket } from './ws'

const ws = initWebSocket()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/join" element={<Join />} />
            <Route path="/session/:code" element={<Session />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
