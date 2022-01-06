 
 import axios from "axios";
 import { urlAPI } from "../services/Global";

 let viagens ;

 export default function GetTrips(){

        axios
          .get(urlAPI+"/trips")
          .then(response => {
            viagens = response.data.trips;
            
          })
          .catch(err => {
            console.log(err);
          });

    return viagens
    }