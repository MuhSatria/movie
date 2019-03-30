import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardBody, CardSubtitle, CardImg } from 'reactstrap';
import '../assets/MainStyle.scss';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';



class DetailPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      result:[]
    }
  }

  componentDidMount(){
    Axios.get(`https://api.themoviedb.org/3/movie=${this.props.movie_id}?api_key=35170086dc3e362495f520ef00deb27c&language=en-US`)
    .then(res => {
      const poster_path = res.data.results.poster_path;
      const title = res.data.results.title;
      const overview = res.data.overview;
      this.setState({ poster_path, title, overview });
    })
    console.log('why', this.state.overview);
  }

    render() {
        return (
            <div className="box-sizedetail">
            <Container>
                <Col sm='12'>
                <Card className="c-detailbox">
                {/* {this.renderRedirect()} */}
                      <CardImg className="c-bgdetailmovie" src={this.state.poster_path} alt="Card image cap" />
                      <CardBody className="c-bodydetail">
                        <CardTitle className="c-judul">
                          {this.state.title}
                        </CardTitle>
                        <CardText className="c-sinopsisdetail">
                          {this.state.overview}
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