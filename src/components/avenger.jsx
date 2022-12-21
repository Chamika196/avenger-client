import React, { Component } from "react"

class Avenger extends Component {
    
        state = {   
        };
        // isAvenger()
        // {
        //     return this.state.avengerId >0 ? "Not an Avenger" : "Yes, it's an avenger";
        // };
        // showMovies()
        // {
        //     if(this.state.movies.length == 0) return <p>No movies available</p>;
        //     else return this.state.movies.map((movie, index) => <li key={index}>{movie}</li>);
        // };
        // likeAvenger = () =>
        // {
        //     this.setState({likeCount: this.state.likeCount + 1});
        // }
    render() 
    {
        return ( // can use our code inside <React.Fragment></React.Fragment> this tag instead of <></> tag
            <React.Fragment>
                <div className="card" style={{width: "18rem"}}>
                    <img src={this.props.avenger.imgUrl} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.avenger.avengerName}</h5>
                        <p className="card-text">
                         {this.props.avenger.birthName}
                        </p>
                        {/* <ul>
                            {this.props.movies.map((movie, index) => (
                                <li key ={index} >{movie}</li>
                            )
                            )}
                        </ul> */}
                        <button className="btn btn-primary" onClick={this.props.onLike}>
                            Like - {this.props.avenger.likeCount}</button>
                            {"    "}
                        <button className="btn btn-danger" onClick={this.props.onDelete}>Delete</button>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Avenger;
//child component