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
      judul:'',
      movie_id:''
    }
  }

  componentDidMount(){
    Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=35170086dc3e362495f520ef00deb27c&language=en-US&page=1`)
    .then(res => {
      this.setState({
        movie: res.data.results
      });
      // this.setState({
      //   movie_id: 
      // })
      console.log('iki data cok', this.state.movie);
      console.log('bismillah', this.state.movie_id)
    });
    Axios.get(`https://api.themoviedb.org/3/movie=${this.props.movie_id}?api_key=35170086dc3e362495f520ef00deb27c&language=en-US`)
    .then(res => {
      this.setState({
        movie_id: `${res.data.results.id}`
      })
    })
  }
  render () { 
    // console.log('Id ne cox', this.state.movie_id);
    const looping = this.state.movie.map((prod, index) => {    
        return(
         <Col md='6' key={index}>
         <AppCard
            images={prod.poster_path}
            title={prod.title}
            deskripsi={prod.overview}
            movie_id={prod.id}
         />
         </Col>
        )}
    );

    // const detailmovie = this.state.map((det, index) => {
    //   return(
    //     <DetailPage key={index}
    //       images={det.poster_path}
    //       title={det.title}
    //       deskripsi={det.overview}
    //     />
    //   )}
    // );
      
    console.log('hore', this.state.movie_id);
    console.log('pye', this.state.title);
    return(
        <div>
          {/* <Navbars/> */}
            <Container>
              <div className="headerlist">
                <h5>List Movie</h5>
              </div>
            <Row>
                {looping}
            </Row>
            </Container>
        </div>
    );
  }
};

export default MovieList;