function title(props){
    const { message, message2 } = props.testo;
    // console.log(message)
    return(
        <>
            <h1 className="titolo">{message}</h1>
            {message2 && <p className="sottotitolo">{message2}</p>}
        </>
    )
}
export default title;