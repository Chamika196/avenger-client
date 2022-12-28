import React,{Component} from "react";
import axios from "axios";
import Avenger from "./avenger";
// import { all } from "q";

class Avengers extends Component {
    state = {
        allAvengers:[],
    };
    render(){
        console.log("Rendering ...")
        return(
            <div className="container">
                <div className="row">
                    {this.state.allAvengers.map((avenger) => (
                        <div key={avenger.id} className="col">
                            <Avenger key = {avenger.id} 
                                avenger={avenger}
                                onDelete={() => this.deleteAvenger(avenger.id)}
                                onLike = {() => this.likeAvenger(avenger)}
                                />
                                
                        </div>
                    ))}
                </div>
            </div>
        );
    }
        async deleteAvenger(avengerId){
            let updatedAvengerArray = this.state.allAvengers.filter(
                avenger => avenger.id !== avengerId
                );
                
            await axios.delete(`http://localhost:5000/api/avengers/${avengerId}`,{
                headers:{
                    "x-jwt-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTMwNjk0ZTM3ZGI4ZDk3ZTE2YzUxYyIsInVzZXJuYW1lIjoiY2hhbWlrYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjE2MTcyNiwiZXhwIjoxNjcyMTk3NzI2fQ.oPoNj9FZyhJP2EgaKUz8yli3nzaU2aniyCHy3hsIjwE"
                }
            });
            this.setState({allAvengers: updatedAvengerArray});
        }
        async likeAvenger(avenger){
            try{
                  await axios.put(`http://localhost:5000/api/avengers/${avenger.id}`,
                    {
                        likeCount : avenger.likeCount + 1
                    });

                    //updated UI
                    let allAvengers = [...this.state.allAvengers];
                    let index = allAvengers.indexOf(avenger);
                    allAvengers[index] = {...avenger};
                    allAvengers[index].likeCount++;
                    this.setState({ allAvengers: allAvengers});

            }
            catch(err){
                console.log(err);
            }
            

        }

        async componentDidMount (){
            console.log("Rendering finished...Component is fully mounted");
            let {data} =await axios.get("http://localhost:5000/api/avengers",{
                headers:{
                    "x-jwt-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTMwNjk0ZTM3ZGI4ZDk3ZTE2YzUxYyIsInVzZXJuYW1lIjoiY2hhbWlrYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjIyODgwMCwiZXhwIjoxNjcyMjY0ODAwfQ.5VfoyI5RJdNs4ast5rOf7jooP5VhQi7H24uysMWKB0M"
                }
            });
            console.log(data);
            let avengers = data.map(avenger => {
                return{
                    
                    id: avenger._id,
                    imgUrl : avenger.imgUrl,
                    birthName: avenger.birthName,
                    likeCount: avenger.likeCount,
                    avengerName: avenger.name,
                    
                };
        });
        this.setState({allAvengers: avengers});
    }

    

}

export default Avengers
