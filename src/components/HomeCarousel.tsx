import { Carousel } from "react-bootstrap";

export function HomeCarousel() {
  return <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../../public/imgs/dish.jpg"
        alt="First slide"
        style={{ objectFit: "cover" }}
        height={960}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../../public/imgs/plating.jpg"
        alt="Second slide"
        style={{ objectFit: "cover" }}
        height={960}
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../../public/imgs/cook.jpg"
        alt="Third slide"
        style={{ objectFit: "cover" }}
        height={960}
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
}