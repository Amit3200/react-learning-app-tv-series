import React,{Component} from 'react';


class SingleSeries extends Component{
    state={
        show:null
    }
    
    componentDidMount(){
        const {id}=this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response=>response.json())
            .then(json=>this.setState({show:json}));
      }
    
    
      render(){
        const {show}=this.state;
        return (
            <div>
                {/* <p>Single Series : The series id will be {this.id}</p> */}
                {show===null && <p>Loading...</p>}
                {show!==null && <div><pre>
                    <p>Name:{show.name}</p>
                    <p>Premiered:{show.premiered}</p>
                    <p>Episodes:{show._embedded.episodes.length}</p>
                    <p>Rating:{show.rating.average}</p>
                    <p>
                        <img alt="picture-show" src={show.image.medium} />
                    </p>
                    </pre></div>}
            </div>
        );
    }
}

export default SingleSeries;