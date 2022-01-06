import GetTrips from "./GetTrips";

export default function GetIdtoTrip(trip){
    let viagens = GetTrips();
    for (let i in viagens){
        if(i.name===trip){
            return i.id;       
        }
    }
}