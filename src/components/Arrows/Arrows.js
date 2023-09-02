import { Col, Row, Container } from "react-bootstrap"

import "./Arrows.scss";
import Left from "@iconscout/react-unicons/icons/uil-arrow-left";
import Right from "@iconscout/react-unicons/icons/uil-arrow-right";

export default function Arrows({ swiperRef }) {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="arrows-wrapper">
                        <div className="left-arrow" onClick={() => swiperRef.current.swiper.slidePrev()}>
                            <Left size='3rem' />
                        </div>
                        <div className="right-arrow" onClick={() => swiperRef.current.swiper.slideNext()}>
                            <Right size='3rem' />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
