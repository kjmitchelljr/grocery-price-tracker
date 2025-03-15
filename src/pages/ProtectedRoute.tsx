import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../utils/supabase';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser(); // Get user from supabase
      setIsAuthenticated(!!user); // Set authentication state
      setIsLoading(false); // Set loading state
    };
    checkAuth();
  }, []);

  // If loading, show loading message
  if (isLoading) return <div>Loading...</div>;

  // If authenticated, show children
  return isAuthenticated ? children : <Navigate to="/login" />;
};
