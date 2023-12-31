import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SignUp } from "./pages/SignUp"
import { ConfigProvider } from "antd"
import { OnBoarding } from "./pages/OnBoarding"
import { Login } from "./pages/Login"
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#105a0e",
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="on-boarding" element={<OnBoarding />} />
        </Routes>
      </Router>
    </ConfigProvider>
  )
}

export default App
