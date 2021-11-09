 import axios from "axios";
 import { urlAPI } from "../services/Global";

  export default function ApplytoTrip(form){
    const body = 
    {
        "name": form.name,
        "age": form.age,
        "applicationText": form.applicationText,
        "profession": form.profession,
        "country": form.country
    }

        axios
          .post(urlAPI+"/trips/"+form.id+"/apply", body )
          .then(response => {
              console.log(response)
            return true;
          })
          .catch(err => {
            console.log(err);
            return false
          });
    }