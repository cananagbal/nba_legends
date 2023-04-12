import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
const CardContainer = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, i) => {
              return (
                <Col md={6} lg={4} xl={3} key={i}>
                  <PlayerCard {...player} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;

//data yı import ettik. data. map diyerek datanın her bir elemanını döndürdük.
//map yapıp bir liste dönüyorsak dönün her bir childin uniq bir keyinin olması lazım id olabilir. name olabilir bunlar datada olmadığı için map bize index veriyor bunu kullanabiliriz.eğer data eksilme arttırma yapıyorsa silme yapıyorsa indexler değişeceği için datanın içindeki uniq değerleri kullanmak lazım
//row her bir sıra ve her bir sıra içinde col yapısı olacağı için bootstrap tan row ve col yapısını import ettik.

//Form kontrole onChange veriyoruz cünkü inputları takip eden  ve içindeki value yi yakalayan event onChange.

//Serch kısmına yazdığımız verinin (datanın)altta gelmesini istiyorsak bir filter işlemi yapmamız lazım filtrelerken her bir playeri alıp playerin name ine göre filtreleme yapıyoruz. imputtan yakaladığımız searchı include edip etmediğine bakıyoruz. kullanıcının büyük küçük harf girme ihtimalini düşünerek harfleri toLowerCase yapıyoruz. useStatin başlangıç değerinin boş bir string vermemiz önemli. hiçbir şey girmediğimizde initial değer boş string olduğu için playername de boş string olduğu için başlangıçta bütün datayı ekranda gösterir searchı trimlersek boşlukları yok sayar.
