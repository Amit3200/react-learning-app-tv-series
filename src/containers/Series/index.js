import React,{Component} from 'react';


class Series extends Component{
    state = {
        series : []
      }
    
      componentDidMount(){
        // const series=["Death Note!","Classroom of Elite!"];
        // setTimeout(()=>{
        //   this.setState({series:series})
        // },5000);
        fetch('http://api.tvmaze.com/search/shows?q=graceful')
        .then((response)=>{ return response.json()})
        .then((response)=>{this.setState({series:response})})
      }
    render(){
        return (
            <div>The length of series array is : {this.state.series.length}</div>
        )
    }
}

export default Series;