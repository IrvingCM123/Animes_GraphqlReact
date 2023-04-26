import React from 'react';
import CreateAnimes from './CreateAnime';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import AnimeList from './AnimeList';
import {Informacion, Imagen, Alumno} from './Inicio';


const App = () => {
  return (
    <div >
      <Header />
      <Imagen />
      <Informacion/> 
        <Routes>
          <Route path="/" element = { <Alumno />}/>
          <Route path="/List" element={<AnimeList/>} />
          <Route path="/create" element={<CreateAnimes/>}
          />
        </Routes>
      </div>
  );
};
export default App;