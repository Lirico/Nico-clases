import Boton from "./Boton";

const Tarjeta = ({destino}) => {
  return (
    <>
      <div>
        <h3>{destino.title}</h3>
        <p>{destino.description}</p>
        <Boton bgColor={destino.bgColor}/>
      </div>

      <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px;
                border: 2px solid black;
                width: 200px;
            }
        `}</style>
    </>
  );
};

export default Tarjeta;


