import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import routes from "routes";
import TemplateFrame from "./shared-theme/TemplateFrame";

export default function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mode, setMode] = useState(() => localStorage.getItem('themeMode') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  const renderRoutes = (allRoutes) =>
    allRoutes.map(({ route, component, type, key }) => (
      <Route
        exact
        path={route}
        element={component}
        key={key}
      />
    ));

  return (
    <TemplateFrame mode={mode} toggleColorMode={toggleColorMode}>
      <CssBaseline enableColorScheme />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        {renderRoutes(routes)}
      </Routes>
    </TemplateFrame>
  );
}
