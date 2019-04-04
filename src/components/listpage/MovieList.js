import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/MainStyle.scss';
import Axios from 'axios';
import AppCard from '../pages/Card'
import Navbars from '../pages/Navbars';
import '../assets/MainStyle.scss';
import DetailPage from './DetailPage';

// const Contents = (props) => {
class MovieList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movie: [],
      detaillist:[]
    }
  }

  componentDidMount(){
    Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=35170086dc3e362495f520ef00deb27c&language=en-US&page=1`)
    .then(res => {
      this.setState({
        movie: res.data.results
      });
      console.log('movie', this.state.movie)
    });
    Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=35170086dc3e362495f520ef00deb27c&language=en-US&page=1`)
    .then(res => {
      this.setState({
        detaillist: res.data.results
      })
    });
    Axios.get(`https://api.themoviedb.org/3/movie=${this.props.movie_id}${this.props.title}?api_key=35170086dc3e362495f520ef00deb27c&language=en-US`)
    .then(res => {
      this.setState({
        movie_id: `${res.data.results.id}`,
        name: `${res.data.results.title}`
      });
    });
  }
  render () { 
    const looping = this.state.movie.map((prod, index) => {    
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
    this.state.detaillist.map((prod, index) => {
      return(
        <DetailPage key={index}
          images={prod.poster_path}
          title={prod.title}
          deskripsi={prod.overview}
          movie_id={prod.id}
          />
      )}
    );
    return(
        <div className="body-Nowplaying">
            <Container className="container-nowplaying">
                <h5>List Movie</h5>
                <Row>
                    {looping}
                </Row>
            </Container>
        </div>
    );
  }
};

export default MovieList;