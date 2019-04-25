
import {

    MODIFICA_EMAIL,
    MODIFICA_PASSWORD,
    MODIFICA_NOME,
    MODIFICA_ENDERECO,
    CADASTRO_ESTABELECIMENTO_ERRO,
    CADASTRO_ESTABELECIMENTO_SUCESSO,
    CADASTRO_PROCESSANDO,
    MODIFICA_ID,
    EDITA_ESTABELECIMENTO,
    EDITA_SUCESSO
} from '../actions/types';

const INITIAL_STATE = {
  
    id: null,
    email: '',
    password: '',
    
    nome : '',
    endereco: '',
    loading_cadastro: false,
   
}

export default (state = INITIAL_STATE, action) => {

    console.log(action);
    
    switch (action.type) {
       
        case MODIFICA_EMAIL:
            return {...state, email:action.payload}
        case MODIFICA_PASSWORD:
            return {...state, password:action.payload}
        case MODIFICA_ID:
            return {...state, id:action.payload}
        case MODIFICA_NOME:
            return {...state, nome:action.payload}
        case MODIFICA_ENDERECO:
            return {...state, endereco:action.payload}
        case CADASTRO_ESTABELECIMENTO_SUCESSO:
            return{...state, status: action.payload, nome: '', endereco: ''}
        case CADASTRO_ESTABELECIMENTO_ERRO:
            return{...state, status: action.payload,}
        case CADASTRO_PROCESSANDO:
            return{...state, loading_cadastro: true}
        case EDITA_ESTABELECIMENTO:
            return{...state}
        case EDITA_SUCESSO:
            return{...state, nome: '', endereco:''}

            
        default: 
            return state;  
    }
}