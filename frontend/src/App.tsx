import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ContextMenuProvider } from "./components/sidebar/ContextMenuContext";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ContextMenuProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </ContextMenuProvider>
    </ThemeProvider>
  );
};

export default App;
