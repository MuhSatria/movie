import React, { Component } from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardText, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import '../assets/MainStyle.scss';

export default class AppCard extends Component {

  render() {
    return (
      <Col md='6' classID="col-card">
        <Card className="c-card size">
        <CardImg className="bg-imgcard" src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/4tS0iyKQBDFqVpVcH21MSJwXZdq.jpg' alt="Card image cap" />
        <CardBody className="c-bodytext">
          <CardTitle className="c-judul">
          <Link to={{ pathname: `/detailpage/${this.props.movie_id}/${this.props.title}` }}>
            {this.props.title}
          </Link>
          </CardTitle>
          <CardText className="c-sinopsis">
            {this.props.deskripsi}
          </CardText>
        </CardBody>
        </Card>
      </Col>
    )
  }
}
