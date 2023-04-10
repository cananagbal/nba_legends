import { Container} from "react-bootstrap"
import {data} from '../helpers/data'
import PlayerCard from "./PlayerCard";

const CardContainer = ()=> {
    return(
        <Container className="card-container rounded-4 my-4 p-3">
         {data.map((player)=> (
        <PlayerCard player = {player}/>
         ) )}

        </Container>
    )
}

export default CardContainer;


//data yı import ettik. data. map diyerek datanın her bir elemanını döndürdük.