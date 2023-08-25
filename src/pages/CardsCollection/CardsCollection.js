import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import CardOne from "../../components/Cards/CardOne"
import "./CardsCollection.scss"

export default function CardsCollection() {
    return (
        <Container style={{ maxWidth: "350px" }}>
            <Row id="cards-collection" >
                <Col style={{ marginTop: "9rem" }} className="cards-wrapper">
                    <CardOne />
                </Col>
            </Row>
        </Container>
    )
}