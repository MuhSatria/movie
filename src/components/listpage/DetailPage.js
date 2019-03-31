import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardBody, CardSubtitle, CardImg } from 'reactstrap';
import '../assets/MainStyle.scss';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';



class DetailPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      detail_movie:[]
    }
  }

  componentDidMount(){
    Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=35170086dc3e362495f520ef00deb27c&language=en-US&page=1`)
    .then(res => {
      const title = res.data.results.title;
      this.setState({
        title: res.data.results.id
      });
      this.setState({
        movie: res.data.results
      });
      console.log('bismillah', this.state.title)
    });
    Axios.get(`https://api.themoviedb.org/3/movie=${this.props.movie_id}?api_key=35170086dc3e362495f520ef00deb27c&language=en-US`)
    .then(res => {
      this.setState({
        movie_id:`${res.data.id}`
      });
      this.setState({
        images:`${res.data.results.poster_path}`
      });
      this.setState({
        title:`${res.data.results.title}`
      })
    });
  }
    render() {
        return (
            <div className="box-sizedetail">
            <Container>
                <Col sm='12'>
                <Card className="c-detailbox">
                      <CardImg className="c-bgdetailmovie" src="" alt="Card image cap" />
                      <CardBody className="c-bodydetail">
                        <CardTitle className="c-judul">
                          
                        </CardTitle>
                        <CardText className="c-sinopsisdetail">
                          
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