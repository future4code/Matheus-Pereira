import { Foto, PerfilCard, Rodape, Nome, Bio } from "./styles";
import axios from 'axios';
import React, {useState, useEffect} from "react";

export default function Perfil () {

let [profile, setProfile] = useState({})



const getProfiletoChoose = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheusdias/person"

    axios
            .get(url)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => alert(err))
}

const onClickCurtida = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheusdias/choose-person"
    const id = profile.id
    const body = {
        "id": {id},
        "choice": true
    }
    const header = {
        "Content-Type": "application/json"}
    axios
    .post(url, body ,{ header })
    .then((res) => {
        //alert("Deu certo")
        //
    })
    .catch((err) => alert(err))

    getProfiletoChoose()
  }

const onClickNoCurtida = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheusdias/choose-person"
    const id = profile.id
    const body = {
        "id": {id},
        "choice": false
    }
    const header = {
        "Content-Type": "application/json"}
    axios
    .post(url, header, body)
    .then((res) => {
        //console.log("Deu certo")
    })
    .catch((err) => alert(err))

    //console.log('Não Curtiu!')
    getProfiletoChoose()
  }
        
    useEffect(() => {
        getProfiletoChoose();
    
    },[]
    )
        return <PerfilCard>
            
            <Foto src= {profile.photo}/>
            <Nome>{profile.name+", "+profile.age}</Nome>
            <Bio>{profile.bio}</Bio>
        <Rodape>
                <button onClick={onClickCurtida}> Curtiu</button>
                <button onClick={onClickNoCurtida}> NO</button>
        </Rodape>

    </PerfilCard>

}
