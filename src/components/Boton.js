

const Boton = ({bgColor}) => {
  return (
    <>
        <button>Comprar</button>

        <style jsx>{`
            button {
                background-color: ${bgColor};
                color: white;
                border: none;
                border-radius: 0.5rem;
                padding: 10px 20px;
                text-transform: uppercase;
                box-shadow: 0px 2px 0px 0.5px black;
            }
            button:hover {
                box-shadow: 0px 2px 0px 0.5px transparent;
                transform: translateY(2px)
            }
        `}</style>
    </>
  )
}

export default Boton