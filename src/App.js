import React from 'react';
import HomePage from './Containers/HomePage/HomePage'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import CharactersPage from './Containers/CharactersPage/CharactersPage';
import Root from './Containers/CharactersPage/Root/Root';
import Error from './Components/Error404/Error';
import PersonPage from './Containers/PersonPage/PersonPage';
import SearchPage from './Containers/SearchPage/SearchPage';
import FavouritePage from './Containers/FavouritePage/FavouritePage';

// const App = () => {

//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Root />,
//       errorElement: <Error />,
//       children: [
//         { path: '/', element: <HomePage /> },
//         { path: '/characters', element: <CharactersPage /> },
//         { path: '/characters/:id', element: <PersonPage /> },
//         { path: '/search', element: <SearchPage /> },
//         { path: '/favourites', element: <FavouritePage /> },
//         { path: '*', element: <Error /> },
//       ]
//     }
//   ])
//   return <RouterProvider router={router} />;
// }


const App = () => {
  return (
    <>
      <Root />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="characters" element={<CharactersPage />} />
        <Route path="characters/:id" element={<PersonPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="favourites" element={<FavouritePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;