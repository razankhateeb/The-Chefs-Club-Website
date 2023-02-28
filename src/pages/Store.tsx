import { Col, Container, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
export function Order() {
  return <>
    <div className="d-flex justify-content-center align-items center">

      <img
        className="d-block w-100 mb-5"
        src="../../public/imgs/dinout.jpg"
        alt="Second slide"
        style={{ objectFit: "cover", position: "relative" }}
        height={700}
      />

      <h1 style={{
        position: "absolute",
        top: "25%",
        color: "white",
        opacity: "85%",
        fontSize: "100px",
      }} >Dine Out Menu</h1>
    </div>
    <Container>


      <Row md={2} xs={1} lg={3} className="g-3 mb-5 justify-content-center">
        {storeItems.map(item => (
          <Col key={item.idMeal}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  </>

}