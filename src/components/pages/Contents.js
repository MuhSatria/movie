import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import '../assets/MainStyle.scss';
import Axios from 'axios';

// const Contents = (props) => {
class Contents extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movie: [],
      judul:''
    }
  }

  componentDidMount(){
    Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=35170086dc3e362495f520ef00deb27c&language=en-US&page=1`)
    .then(res => {
      this.setState({
        movie: res.data
      })
      console.log('iki data cok', res);
    });
  }
  render () {    
    // const looping = this.state.movie.map((prod, index) => {    
    // })
    return (
      <div>
          <Container>
            <Row>
                  <Col sm='6'>
                      <Card className="c-card size">
                      <CardImg className="bg-imgcard" src="http://i.imgur.com/E9WzI0Y.jpg" alt="Card image cap" />
                      <CardBody className="c-bodytext">
                        <CardTitle className="c-judul">
                          Fate Stay Night Heavnes Fell
                        </CardTitle>
                        <CardText className="c-sinopsis">
                          ini adalah filem terbaru kuy jadi di tontonya
                        </CardText>
                      </CardBody>
                      </Card>
                  </Col>
            </Row>
          </Container>
      </div>
    );
  }
};

export default Contents;