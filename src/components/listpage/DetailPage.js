import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardBody, CardSubtitle, CardImg } from 'reactstrap';
import '../assets/MainStyle.scss';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbars from '../pages/Navbars';

const porter_uri = 'http://image.tmdb.org/t/p';

class DetailPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      detail_movie:''
    }
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movie_id}?api_key=35170086dc3e362495f520ef00deb27c&language=en-US`)
    .then(res => {
      console.log( 'ki loo', res.data)
      this.setState({
        detail_movie : res.data
      })
    })
  }
    render() {
      // let { title, deskripsi, images } = this.props.movie
      console.log('ini props', this.props.match.params.movie_id)
        return (
            <div className="box-sizedetail">
            <Navbars/>
            <Container>
                <Col sm='12'>
                <Card className="c-detailbox">
                      <CardImg className="c-bgdetailmovie" id={this.props.id} src={`http://image.tmdb.org/t/p/original${this.state.detail_movie.poster_path}`} alt="Card image cap" />
                      <CardBody className="c-bodydetail">
                        <CardTitle className="c-juduldetail">
                          {this.state.detail_movie.original_title}
                        </CardTitle>
                        <CardText>
                          {this.state.detail_movie.overview}
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