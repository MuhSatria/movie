import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardBody, CardSubtitle, CardImg } from 'reactstrap';
import '../assets/MainStyle.scss';



class DetailPage extends Component {
    render() {
        return (
            <div className="box-sizedetail">
            <Container>
                <Col sm='12'>
                <Card className="c-detailbox">
                      <CardImg className="c-bgdetailmovie" src="http://i.imgur.com/E9WzI0Y.jpg" alt="Card image cap" />
                      <CardBody className="c-bodydetail">
                        <CardTitle className="c-judul">
                          Fate Stay Night Heavnes Fell
                        </CardTitle>
                        <CardText className="c-sinopsisdetail">
                          ini adalah filem terbaru kuy jadi di tontonya
                        </CardText>
                      </CardBody>
                </Card>
                </Col>
            </Container>
            </div>
        );
    }
}

export default DetailPage;