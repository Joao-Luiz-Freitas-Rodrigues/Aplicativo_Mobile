import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Alert} from 'react-native';
import {
    MODIFICA_EMAIL,
    MODIFICA_PASSWORD,
    MODIFICA_NOME,
    MODIFICA_ENDERECO,
    CADASTRO_ESTABELECIMENTO_SUCESSO,
    CADASTRO_ESTABELECIMENTO_ERRO,
    MODIFICA_ID,
    EDITA_ESTABELECIMENTO,
    EDITA_SUCESSO

   
} from './types';

const baseUrl = 'http://192.168.0.25:3001/api/estabelecimentos';


export const modificaEmail = (email) => {
    return{
        type: MODIFICA_EMAIL,
        payload: email
    }
}
export const modificaPassword = (password) => {
    return{
        type: MODIFICA_PASSWORD,
        payload: password
    }
}

export const modificaNome = (nome) => {
    return{
        type: MODIFICA_NOME,
        payload: nome
    }
}
export const modificaId = (id) => {
    return dispatch => {
        dispatch({type: MODIFICA_ID,
        payload: id
    });
    axios.get(`${baseUrl}/${id}`)
        .then(res => {
            dispatch({type: MODIFICA_NOME, payload: res.data.nome});
            dispatch({type: MODIFICA_ENDERECO, payload: res.data.endereco });
            Actions.detalhe();
            console.log(res);
            
        }).catch(err => {
            console.log(err);
            
        })
    }
}
export const modificaEndereco = (endereco) =>{
    return{
        type: MODIFICA_ENDERECO,
        payload: endereco
    }
}
export const cadastraEstabelecimento = (nomeEstabelecimento, endereco, latitude, longitude) =>{
    return dispatch => {
        console.log("entrou no cadastro");
        
        axios({
            method: 'post',
            url: `${baseUrl}`,
            data: {
                nome: nomeEstabelecimento,
                endereco: endereco,
                latitude: latitude,
                longitude:longitude
            }
        }).then(res =>{
            dispatch({type: CADASTRO_ESTABELECIMENTO_SUCESSO});
            console.log(res);
            Alert.alert("Cadastro realizado com sucesso");
            Actions.pop({ refresh: {key: 'consulta'} })  

            
        }).catch(err =>{
            console.log(err);
            dispatch({type: CADASTRO_ESTABELECIMENTO_ERRO});
            Alert.alert("Ocorreu algum erro");

            
        })

    }

}

export const editaEstabelecimento = (id, nome, endereco) => {
    return dispatch => {
        dispatch({type: EDITA_ESTABELECIMENTO})
        axios({
            method: 'put',
            url: `${baseUrl}/${id}`,
            data: {
                nome: nome,
                endereco: endereco
            }
        }).then(res =>{
            console.log(res);
            Alert.alert("Estabelecimento atualizdo com sucesso");  
            dispatch({type: EDITA_SUCESSO});
            Actions.consulta();
        }).catch(err => {
            console.log(err);
            Alert.alert("Algum erro ocorreu");
            
        })
    }
}

export const removeEstabelecimento = (id) =>{
    return dispatch => {
        axios.delete(`${baseUrl}/${id}`)
            .then(res =>{

                Alert.alert("Registro deletado com sucesso!" );
                Actions.consulta();

            }).catch(err=>{
                Alert.alert("Algum erro ocorreu");
            })
    }
}
