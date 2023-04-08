import { Container, Row } from "react-bootstrap"
import {data}from '../helpers/data'

const CardContainer = ()=> {
    return(
        <Container>
         {data.map((player)=>console.log(player))}

        </Container>
    )
}

export default CardContainer;


//cardlarımız flex yapısı içinde responsive bir yapıda olması için row 