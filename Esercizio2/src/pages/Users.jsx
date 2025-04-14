import { useState } from "react";
import Title from "../Components/Title";
import axios from 'axios';
function Users(){
    const [UserData, setUserData] =useState([])
    const LoadUsers=()=>{
        function fetchData() {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // I dati ricevuti dall'API in base alla chiamata che andiamo a fare
                setUserData(response.data)
            })
            .catch((error) => {
                // Gestione dell'errore
                console.error('Errore durante la richiesta:', error);
            });
            }
            fetchData();
    }
    console.log(UserData)

    const parametro={message:'Questo è il titolo della pagina degli utenti'}
    return (
        <>
           <Title testo={parametro}/>
           <button onClick={LoadUsers}>Carica utenti</button>
           <ol>
            {UserData.map((user)=>(
                <li key={user.id}> nome={user.name}, cognome={user.surname}, sitoweb={user.website}</li>

            ))}
           </ol>
           
        </>
      )

}

export default Users