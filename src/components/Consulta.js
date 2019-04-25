import React, { Component } from 'react';
import { View, TouchableOpacity, Text,AsyncStorage, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Actions } from 'react-native-router-flux';
import Estabelecimentos from './Estabelecimentos';

import axios from 'axios';
const baseUrl = 'http://192.168.0.25:3001/api/estabelecimentos';

export default class Consulta extends Component {

    constructor(props){
        super(props);

        this.state = { listaEstabelecimentos: []}
    }

    //------------ INICIEI AQUI UMA AUTENTICAÇÃO POR TOKEN JWT PORÉM NÃO TIVE TEMPO SUFICIENTE ----
   
   
    // consulta = async () => {
    //     console.log('entrou na funcao consulta');

    //     try{


    //         const tk = await AsyncStorage.getItem('@CodeApi:token');

    //         const token = JSON.parse(tk);
    //         console.log(token.token);
            

    //         const config = {
    //             headers:{
    //                 'Authorization': "bearer " + token.token
    //             }
    //         };
    //         const body = {
               
    //         }

           
            
    //         const response = await api.get('/wathers',body, config);
    //         console.log(response.data.data);
            
    //         this.setState({lista: response.data.data})
    //     }catch(response){
    //         console.log(response);
            
    //         Alert.alert('Erro na consulta!');
    //     }
        
    // }

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
            <View style={{flex:1}}>
                <View style={css.viewAdd}>

                    <Icon name="plus"size={25} color="blue" />

                    <TouchableOpacity onPress={() => Actions.cadastro()} style={{marginRight: 50}}>
                        <Text style={css.txtCadastro}>Adicionar Estabelecimento</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.formLogin()}>
                        <Icon name="logout"size={25} color="blue" />

                    </TouchableOpacity>


                </View>
                <View style={css.ScrollView}>
                    <ScrollView style={{flex:1}}>
                        
                    
                        {this.state.listaEstabelecimentos.map(estabelecimento=>(
                        <Estabelecimentos key={estabelecimento._id} estabelecimento={estabelecimento}/>
                            
                        
                            ))}
            

                    </ScrollView>
                </View>
                
                
                
                <View style={css.viewInfo}>
                    <Icon name="infocirlceo" size={15} color="grey" style={css.iconInfo}/>
                    <Text style={css.txtInfo}>
                         Distâncias em verde estão a menos de 5km.
                    </Text>
                       
                </View>
            </View>
            

            
        );
    }
}

const css = StyleSheet.create({
    
ScrollView:{
    backgroundColor: '#FFF',
    flex: 9
},
txtCadastro: {
    color: 'blue',
    fontSize: 20,
    paddingLeft: 10

},
viewAdd:{
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor:"#ccebff",

},
viewInfo:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:"#ccebff",

},
txtInfo:{
    color: 'grey',
    paddingLeft: 10,
    fontWeight: 'bold',

},
iconInfo:{
    paddingLeft: 10
}


})