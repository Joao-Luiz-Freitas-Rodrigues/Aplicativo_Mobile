import React, { Component } from 'react';
import { Alert, View, TouchableOpacity, TextInput, Text,AsyncStorage, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Estabelecimentos from './Estabelecimentos';

import api from '../services/api';
import axios from 'axios';
const baseUrl = 'http://192.168.0.25:3001/api/estabelecimentos';

export default class Consulta extends Component {

    constructor(props){
        super(props);

        this.state = { listaEstabelecimentos: []}
    }

    consulta = async () => {
        console.log('entrou na funcao consulta');

        try{


            const tk = await AsyncStorage.getItem('@CodeApi:token');

            const token = JSON.parse(tk);
            console.log(token.token);
            

            const config = {
                headers:{
                    'Authorization': "bearer " + token.token
                }
            };
            const body = {
               
            }

           
            
            const response = await api.get('/wathers',body, config);
            console.log(response.data.data);
            
            this.setState({lista: response.data.data})
        }catch(response){
            console.log(response);
            
            Alert.alert('Erro na consulta!');
        }
        
    }

    componentWillMount(){
    //requisição
    axios.get(`${baseUrl}`)
        .then(res => {
            console.log(res);
            this.setState({listaEstabelecimentos: res.data});
            
        }).catch(err => {
            console.log(err);
            
        })

    }

    
  
// tava sem tempo, essa parte ta meio feia
    render(){
        return(
            <ScrollView style={css.ScrollView}>
                <View style={css.viewAdd}>

                    <Icon name="plus"size={25} color="blue" />

                    <TouchableOpacity onPress={() => Actions.cadastro()} style={{marginRight: 60}}>
                        <Text style={css.txtCadastro}>Adcionar Estabelecimento</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => Actions.formLogin()}>
                        <Icon name="logout"size={25} color="blue" />

                    </TouchableOpacity>

                    
                </View>
            
              {this.state.listaEstabelecimentos.map(estabelecimento=>(
                   <Estabelecimentos key={estabelecimento._id} estabelecimento={estabelecimento}/>
                    
                
              ))}
           

            </ScrollView>

            
        );
    }
}

const css = StyleSheet.create({
    
ScrollView:{
    backgroundColor: '#FFF'
},
txtCadastro: {
    color: 'blue',
    fontSize: 20,
    paddingLeft: 10

},
viewAdd:{
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
}
})