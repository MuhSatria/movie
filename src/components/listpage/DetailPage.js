import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardBody, CardSubtitle, CardImg } from 'reactstrap';
import '../assets/MainStyle.scss';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import Navbars from '../pages/Navbars';



class DetailPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      detail_movie:[]
    }
  }

  componentDidMount() {
    Axios.get(`https://api.themoviedb.org/3/movie/now_playing/${this.props.id}?api_key=35170086dc3e362495f520ef00deb27c&language=en-US&page=1`)
    .then(res => {
      const title = res.data.results.title;
      const overview = res.data.results.overview;
      const poster_path = res.data.results.poster_path;
      this.setState({
        title, overview, poster_path
      });
    })
  }
    render() {
      // let { title, deskripsi, images } = this.props.movie
      console.log('ini props', this.props)
        return (
            <div className="box-sizedetail">
            <Navbars/>
            <Container>
                <Col sm='12'>
                <Card className="c-detailbox">
                      <CardImg className="c-bgdetailmovie" id={this.props.id} src={this.state.poster_path} alt="Card image cap" />
                      <CardBody className="c-bodydetail">
                        <CardTitle>
                          {this.state.title} How To Train Your Dragon
                        </CardTitle>
                        <CardText>
                          {this.state.deskripsi} djdjdjdjdj
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