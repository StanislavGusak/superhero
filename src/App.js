import React from 'react';
import HomePage from './Containers/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CharactersPage from './Containers/CharactersPage/CharactersPage';
import Root from './Containers/CharactersPage/Root/Root';
import Error from './Components/Error404/Error';
import PersonPage from './Containers/PersonPage/PersonPage';
import SearchPage from './Containers/SearchPage/SearchPage';
import FavouritePage from './Containers/FavouritePage/FavouritePage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/characters', element: <CharactersPage /> },
        { path: '/characters/:id', element: <PersonPage /> },
        { path: '/search', element: <SearchPage /> },
        { path: '/favourites', element: <FavouritePage /> },
        { path: '*', element: <Error /> },
      ]
    }
  ])
  return <RouterProvider router={router} basename='/stanislavgusak' />;
}
export default App;