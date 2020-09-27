import React,{Component} from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';

class Series extends Component{
    state = {
        series : [],
        seriesName:'',
        isFetching: false
      }


      onSeriesInputChange = (e) => {
        // var api_address="http://api.tvmaze.com/search/shows?q="+e.target.value;
        this.setState({seriesName:e.target.value,isFetching:true});
        fetch(`http://api.tvmaze.com/search/shows?q="${e.target.value}`)
        .then((response)=>{ return response.json()})
        .then((response)=>{this.setState({series:response,isFetching:false})})
        // console.log(e,e.target.value);
      }
    
      // componentDidMount(){
        // const series=["Death Note!","Classroom of Elite!"];
        // setTimeout(()=>{
        //   this.setState({series:series})
        // },5000);
      //   fetch('http://api.tvmaze.com/search/shows?q=graceful')
      //   .then((response)=>{ return response.json()})
      //   .then((response)=>{this.setState({series:response})})
      // }
    render(){
      const {series,seriesName,isFetching}=this.state;
        return (
            <div>
                      <Intro message="Here you will find list of ongoing TV-Series" />
            <div>
              <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
            </div>
            { 
              !isFetching && series.length === 0 && seriesName.trim() === ''
              &&
              <p>Please enter the series name into the input</p>
            }
            {
              !isFetching && series.length === 0 && seriesName.trim() !== ''
              &&
              <p>No tv series with this name</p>
            }
            {
              isFetching
              &&
              <p>Loading ...</p>
            }
            {
              !isFetching
              &&
              <SeriesList list={this.state.series} /> 
            }
            </div>
        )
    }
}

export default Series;