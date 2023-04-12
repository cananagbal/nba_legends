import { Col, Container, Row } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <Container className="card-container rounded-4 my-4 p-3">
      <Row className="g-3 justify-content-center">
        {data.map((player, i) => {
          return (
            <Col md={6} lg={4} xl={3} key={i}>
              <PlayerCard {...player} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardContainer;

//data yı import ettik. data. map diyerek datanın her bir elemanını döndürdük.
//map yapıp bir liste dönüyorsak dönün her bir childin uniq bir keyinin olması lazım id olabilir. name olabilir bunlar datada olmadığı için map bize index veriyor bunu kullanabiliriz.eğer data eksilme arttırma yapıyorsa silme yapıyorsa indexler değişeceği için datanın içindeki uniq değerleri kullanmak lazım
//row her bir sıra ve her bir sıra içinde col yapısı olacağı için bootstrap tan row ve col yapısını import ettik.
