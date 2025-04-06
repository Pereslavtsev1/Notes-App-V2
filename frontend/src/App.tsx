import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
