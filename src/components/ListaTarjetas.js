import Tarjeta from "./Tarjeta"

const destinos = [
    { 
        title: "Villa La Angostura",
        description: "Un hermoso lugar para pasar las vacaciones cuando sos politico con el dinero del contribuyente.",
        bgColor: "green"
    },
    { 
        title: "Mendoza",
        description: "2",
        bgColor: "red"
    },
    { 
        title: "El Calafate",
        description: "3",
        bgColor: "yellow"
    },
    { 
        title: "Laferrere",
        description: "4",
        bgColor: "lightblue"
    },
]

const ListaTarjetas = () => {
  return (
    <>
        <section>
            {
                destinos.map((destino, i) => <Tarjeta key={i} destino={destino} />)
            }
        </section>
    </>
  )
}

export default ListaTarjetas