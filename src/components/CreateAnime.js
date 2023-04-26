import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import "../styles/GuardarInfo.css"

const CREATE_MANGAS_MUTATION = gql`
mutation PostMutation(
  $titulomanga: String!
  $generomanga: String!
  $descripcionmanga: String!
  $preciomanga: Int!
  $escritormanga: String!1
  $volumenesmanga: Int!
  $capitulosmanga: Int!
  $ilustradormanga: String!
  $editorialmanga: String!
  $clasificacionedadmanga: Int!
  ) {
    createManga(titulomanga: $titulomanga, generomanga: $generomanga, descripcionmanga: $descripcionmanga, preciomanga: $preciomanga, escritormanga: $escritormanga, volumenesmanga: $volumenesmanga, capitulosmanga: $capitulosmanga, ilustradormanga: $ilustradormanga, editorialmanga: $editorialmanga, clasificacionedadmanga: $clasificacionedadmanga) {
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
`;


const CreateMangas = () => {
  const [formState, setFormState] = useState({
    id: '',
    titulomanga: '',
    generomanga: '',
    descripcionmanga: '',
    preciomanga: 0,
    escritormanga: '',
    volumenesmanga: 0,
    capitulosmanga: 0,
    ilustradormanga: '',
    editorialmanga: '',
    clasificacionedadmanga: 0,
  });

  const [CreateManga] = useMutation(CREATE_MANGAS_MUTATION, {
    variables: {
      titulomanga: formState.titulomanga,
      generomanga: formState.generomanga,
      descripcionmanga: formState.descripcionmanga,
      preciomanga: formState.preciomanga,
      escritormanga: formState.escritormanga,
      volumenesmanga: formState.volumenesmanga,
      capitulosmanga: formState.capitulosmanga,
      ilustradormanga: formState.ilustradormanga,
      editorialmanga: formState.editorialmanga,
      clasificacionedadmanga: formState.clasificacionedadmanga,
    }
  });

  return (
    <div class="About-us sombra" id="Caja">

      <section class="About-us-Titulo H1 Espacio" id="Titulo">
        Por favor llena los siguientes recuadros
      </section>

      <div id="Formulario-Info">
        <p class="Espacio Espacio2" >Titulo: </p>
        <p class="Espacio Espacio2">Genero: </p>
        <p class="Espacio Espacio2">Descripcion: </p>
        <p class="Espacio Espacio2">preciomanga: </p>
        <p class="Espacio Espacio2" >Escritor: </p>
        <p class="Espacio Espacio2">Volumenes: </p>
        <p class="Espacio Espacio2">Capitulos: </p>
        <p class="Espacio Espacio2">Ilustrador: </p>
        <p class="Espacio Espacio2">Editorial: </p>
        <p class="Espacio Espacio2">Clasificacion de edad: </p>
      </div>

      <div id="Formulario-Rellenar" >

        <form onSubmit={(e) => { e.preventDefault(); CreateManga(); }} >

          <div className="Espacio" >
            <input className="Respuesta" value={formState.titulomanga} onChange={(e) =>
              setFormState({ ...formState, titulomanga: e.target.value })}
              type="text" placeholder="Titulo del manga" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.generomanga} onChange={(e) =>
              setFormState({ ...formState, generomanga: e.target.value })}
              type="text" placeholder="Genero del manga" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.descripcionmangaiption} onChange={(e) =>
              setFormState({ ...formState, descripcionmangaiption: e.target.value })}
              type="text" placeholder="Descripcion del manga" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.preciomanga} onChange={(e) =>
              setFormState({ ...formState, preciomanga: e.target.value })}
              type="text" placeholder="preciomanga del Manga" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.escritormanga} onChange={(e) =>
              setFormState({ ...formState, escritormanga: e.target.value })}
              type="text" placeholder="Escritor del manga" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.volumenesmanga} onChange={(e) =>
              setFormState({ ...formState, volumenesmanga: e.target.value })}
              type="number" placeholder="Volumenes disponibles del manga" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.capitulosmanga} onChange={(e) =>
              setFormState({ ...formState, capitulosmanga: e.target.value })}
              type="number" placeholder="Capitulos totales del manga" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.ilustradormanga} onChange={(e) =>
              setFormState({ ...formState, ilustradormanga: e.target.value })}
              type="text" placeholder="Ilustrador del manga" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.editorialmanga} onChange={(e) =>
              setFormState({ ...formState, editorialmanga: e.target.value })}
              type="text" placeholder="Editorial del manga" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.clasificacionedadmanga} onChange={(e) =>
              setFormState({ ...formState, clasificacionedadmanga: e.target.value })}
              type="number" placeholder="Clasificacion de edad recomendada para lectura del manga" />
          </div>

          <div id="Formulario-Boton">
              <input type="submit" name="Mensaje" value="Enviar" class="Boton"></input>
          </div>
        </form>
      </div>

      <div class="Informacion">
        <h1 class="H1">Contactar Alumno: </h1>
        <ul>
          <li>Número Telefonico: <br></br> <p>+52 272 259 4250</p></li>
          <li>Correo Electronico: <br></br> <p> zS20006735@estudiantes.uv.mx</p></li>
          <li>Matricula <br></br> <p>zS20006735 </p> </li>
          <img src='./img/waifu1.png'></img>
        </ul>
      </div>
    </div>
  );
};

export default CreateMangas;