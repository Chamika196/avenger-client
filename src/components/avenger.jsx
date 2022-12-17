import React, { Component } from "react"

class Avenger extends Component {
    
        state = {
            avengerId: 189,
            avengerName: "Hulk",
            movies:["Movie 1","Movie 2","Movie 3","Movie 4"],
            likeCount: 0,
        };
        isAvenger()
        {
            return this.state.avengerId >0 ? "Not an Avenger" : "Yes, it's an avenger";
        };
        showMovies()
        {
            if(this.state.movies.length == 0) return <p>No movies available</p>;
            else return this.state.movies.map((movie, index) => <li key={index}>{movie}</li>);
        };
        likeAvenger = () =>
        {
            this.setState({likeCount: this.state.likeCount + 1});
        }
    render() 
    {
        return ( // can use our code inside <React.Fragment></React.Fragment> this tag instead of <></> tag
            <React.Fragment>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://i.pinimg.com/550x/4c/f5/50/4cf550217f643578a83cd6f9b6db29c6.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Avenger Name</h5>
                        <p className="card-text">Avenger Description
                        <ul>
                            {this.showMovies()}
                        </ul>
                        </p>
                        <button className="btn btn-primary" onClick={this.likeAvenger}>Like - {this.state.likeCount}</button>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Avenger;