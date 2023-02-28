import { Container, Row } from "react-bootstrap";
import { FormContact } from "./Form";
import { Info } from "./Info";

export function ContactUs() {
    return <Container className="mt-3">
        <Row>
            <Info />
            <FormContact />
        </Row>
    </Container>
}