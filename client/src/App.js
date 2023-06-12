import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import GenrePage from './pages/GenrePage';
import MyListPage from './pages/MyListPage';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
      children: [
        { path: '/', element: <Signin /> },
        { path: '/signup', element: <Signup /> }
      ]
    },
    { path: '/home', element: <HomePage /> },
    { path: '/genre/:genre', element: <GenrePage /> },
    { path: '/search/:searchQuery', element: <SearchPage /> },
    { path: '/myList', element: <MyListPage /> }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
