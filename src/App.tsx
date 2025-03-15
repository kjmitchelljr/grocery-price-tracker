import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage, ProtectedRoute, DashboardPage, SignupPage } from './pages';

function App() {
  return (
    // Router
    <Router>
      <Routes>
        // Login Page
        <Route path="/login" element={<LoginPage />} />
        // Signup Page
        <Route path="/signup" element={<SignupPage />} />
        // Protected Route
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
