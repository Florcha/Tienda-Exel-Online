const Saludo = (props) => {
    
    // props.action ===> miFuncion()
    return (
        <>
            <h1>Mi primer componente</h1>
            <div>Saludos {props.name}</div>
            <div>Tienes {props.age} años</div>
            <div>Soy de {props.nationality}</div>
        </>
    )
}

export default Saludo

