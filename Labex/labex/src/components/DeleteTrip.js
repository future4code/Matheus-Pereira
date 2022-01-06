import axios from "axios"
import { urlAPI } from "../services/Global"

export default function DeleteTrip(form,token){
    const header = {
        "auth": token
    }
    const body = 
        {
            "name": form.name,
            "planet": form.planet,
            "date": form.date,
            "description": form.description,
            "durationInDays": form.durationInDays
        }

        axios
        .post(urlAPI+"/trips", header, body)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
          console.log(err);
        })
}