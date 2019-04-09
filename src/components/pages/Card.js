import React, { Component } from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardText, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import '../assets/MainStyle.scss';
import axios from 'axios';

const porter_uri = 'http://image.tmdb.org/t/p';

export default class AppCard extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     poster:''
  //   }
  // }

  // componentDidMount(){
  //   axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movie_id}?api_key=35170086dc3e362495f520ef00deb27c&language=en-US`)
  //   .then(res => {
  //     console.log('wasu', res.data)
  //     this.setState({
  //       poster: res.data
  //     })
  //   })
  // }

  render() {
    return (
      <Col md='6' classID="col-card">
        <Card className="c-card size">
        <CardImg className="bg-imgcard" src={`http://image.tmdb.org/t/p/original${this.props.images}`} alt="Card image cap" />
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
