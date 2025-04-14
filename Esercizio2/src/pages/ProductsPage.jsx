import Title from "../Components/Title"
function ProductsPage(){
  const parametro={message:'Questo è il titolo della pagina dei prodotti'}
    return (
        <>
          <Title testo={parametro}/>
        </>
      )

}

export default ProductsPage;