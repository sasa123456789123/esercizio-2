import Title from "../Components/Title"


function HomePage(){
    const parametro={message:'Questo è il titolo della pagina',message2:'questa è una prova'}
    return (
        <>
          <Title testo={parametro}/>
          </>
      )

}

export default HomePage