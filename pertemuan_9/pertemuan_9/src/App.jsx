import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./assets/layouts/MainLayout";
import HomePage from "./assets/pages/HomePage";
import LoginPage from "./assets/pages/LoginPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage />
            }
          />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;