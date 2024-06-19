import Card from "../CardHome/CardHome";
import "./GridCardInfo.css";

const GridCards = () => {
    
  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
            <Card
              title={'Marco Antonio Frederico Alves Soares'}
              value={"20 anos , solteiro. Estudando Analise e Desenvolvimento de sistemas"}
              info={"Gamer entusiasta de FPS"}
            ></Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
