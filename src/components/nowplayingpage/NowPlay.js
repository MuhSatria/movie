import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/MainStyle.scss';
import axios from 'axios';
import AppCard from '../pages/Card'
import Navbars from '../pages/Navbars';
import '../assets/MainStyle.scss';
import DetailPage from '../listpage/DetailPage';
import '../assets/MainStyle.scss';

const porter_uri = 'http://image.tmdb.org/t/p';

// const Contents = (props) => {
class NowPlay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nowplaying: [],
      getdata: '',
      test: []
    }
  }

  componentDidMount(){
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=35170086dc3e362495f520ef00deb27c&language=en-US&page=1`)
    .then(res => {
      // const test = res.data.results.map( obj => obj.data);
      this.setState({
        nowplaying: res.data.results
      });
      console.log('data api', this.state.nowplaying);
      console.log('iki data', this.state.getdata);
      console.log('testing', this.state.test);
    });
    axios.get(`https://api.themoviedb.org/3/movie=${this.props.movie_id}${this.props.title}?api_key=35170086dc3e362495f520ef00deb27c&language=en-US`)
    .then(res => {
      const test = res.map(obj => obj.data);
      this.setState({
        movie_id: `${res.data.results.id}`,
        name: `${res.data.results.title}`,
        test
      });
      console.log('new', this.state.name);
    });
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match}?api_key=35170086dc3e362495f520ef00deb27c&language=en-US`)
    .then(res => {
      console.log('uye', res.data)
      this.setState({
        getdata: res.data
      })
    })
  }
  render () {
    console.log('data', this.state.getdata)
    console.log('bismillah', this.props)
    const looping = this.state.nowplaying.map((prod, index) => {    
        return(
         <AppCard key={index}
            images={prod.poster_path}
            title={prod.title}
            deskripsi={prod.overview}
            movie_id={prod.id}
            name={prod.title}
         />
        )}
    );
    {

      this.state.nowplaying.map((prod, index) => {
        return(
          <DetailPage
            key={index}
            title={prod.original_title}
            poster_path={prod.poster_path}
            overview={prod.overview}
            />
        )}
      );
    }

    return(
        <div className="body-Nowplaying">
            <Container className="container-nowplaying">
                <h5>Now Playing</h5>
                <Row>
                    {looping}
                </Row>
            </Container>
        </div>
    );
  }
};

export default NowPlay;