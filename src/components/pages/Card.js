import React, { Component } from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardText } from 'reactstrap';
import '../assets/MainStyle.scss';

export default class AppCard extends Component {
  render() {
    return (
        <Card className="c-card size">
        <CardImg className="bg-imgcard" src={this.props.images} alt="Card image cap" />
        <CardBody className="c-bodytext">
          <CardTitle className="c-judul">
            {this.props.title}
          </CardTitle>
          <CardText className="c-sinopsis">
            {this.props.deskripsi}
          </CardText>
        </CardBody>
        </Card>
    )
  }
}
