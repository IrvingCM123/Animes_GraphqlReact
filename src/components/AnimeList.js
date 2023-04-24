import React from 'react';
import Topdiez from './Anime';
import { useQuery, gql } from '@apollo/client';
import "../styles/Mostrar.css"

const FEED_QUERY = gql`
  
query {
  mangas{
    id
    titulomanga
    generomanga
    descripcionmanga
    preciomanga
    escritormanga
    volumenesmanga
    capitulosmanga
    ilustradormanga
    editorialmanga
    clasificacionedadmanga
}
}
`
  ;
const AnimeList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (

    <div>
      <span class="Mostrar_Titulo">Animes Guardados: </span>

      {data && data.mangas.map((top) => {
        return (
          <div class="card card3">
            <div class="inner">
              <h2 class="title"> <p> {top.titulomanga} </p></h2>
              <div key={top.id}>
                <div className='subtitle'> ID:
                  <span className='texto'> {top.id} </span>
                </div>

                <div className='subtitle'> Genero_Anime:
                  <span className='texto'> {top.generomanga} </span>
                </div>

                <div className='subtitle'> Descripcion_Anime:
                  <span className='texto'> {top.descripcionmanga} </span>
                </div>

                <div className='subtitle'> Total_Capitulos:
                  <span className='texto'> {top.capitulosmanga} </span>
                </div>

                <div className='subtitle'> Duracion_Capitulos:
                  <span className='texto'> {top.duracion} </span>
                </div>

                <div className='subtitle'> Escritor:
                  <span className='texto'> {top.escritormanga} </span>
                </div>

                <div className='subtitle'> Precio:
                  <span className='texto'> {top.preciomanga} </span>
                </div>
              </div>
            </div>
          </div>

        )
      })}

    </div>
  );
};

export default AnimeList;