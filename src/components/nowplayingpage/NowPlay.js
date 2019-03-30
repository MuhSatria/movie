import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/MainStyle.scss';
import Axios from 'axios';
import AppCard from '../pages/Card'
import Navbars from '../pages/Navbars';
import '../assets/MainStyle.scss';

// const Contents = (props) => {
class NowPlay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nowplaying: []
    }
  }

  componentDidMount(){
    Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=35170086dc3e362495f520ef00deb27c&language=en-US&page=1`)
    .then(res => {
      this.setState({
        nowplaying: res.data.results
      })
      console.log('iki data cok', this.state.movie);
    });
  }
  render () {
    console.log('asssu', this.state.nowplaying)    
    const looping = this.state.nowplaying.map((prod, index) => {    
        return(
         <Col md='6' key={index}>
         <AppCard
            images={prod.poster_path}
            title={prod.title}
            deskripsi={prod.overview}
         />
         </Col>
        )}
    );

    return(
        <div>
            <Container>
              <div className="headerlist">
                <h5>Now Playing</h5>
              </div>
            <Row>
                {looping}
            </Row>
            </Container>
        </div>
    );
  }
};

export default NowPlay;