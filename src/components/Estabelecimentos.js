import React, { Component } from 'react';
import { Alert, View, TouchableOpacity, TextInput, Text,AsyncStorage, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
import {modificaId, removeEstabelecimento} from '../actions/AutenticacaoAction';


export class Estabelecimentos extends Component {


    state={
        local: 0
    }
  
    findCoordinates = () => {
        console.log("entrou na funcao");
        
        navigator.geolocation.getCurrentPosition(
          position => {
            const latitude = JSON.stringify(position.coords.latitude);
            const longitude = JSON.stringify(position.coords.longitude);
            console.log(latitude, longitude);
            
            this.setState({ latitude, longitude });
       
            const local = geolib.getDistance(
                {latitude: this.state.latitude, longitude: this.state.longitude},
                {latitude: this.props.estabelecimento.latitude, longitude:this.props.estabelecimento.longitude}
            ) ;
            console.log(local);
            
            this.setState({local})
          },
          // error.message
          error => console.log("Ative sua localização!"),
          { enableHighAccuracy: true, timeout: 20000 , maximumAge: 0}
        );
      };
    
    componentWillMount(){
        // Alert.alert("Não esqueça de ativar sua localização!");
        this.findCoordinates();
    }

    render(){
        return(
            <View style={css.view}>
                <View style={css.info}>
                    <Text style={css.txtNome}>{this.props.estabelecimento.nome}</Text>
                    <Text style={css.txtEndereco}>{this.props.estabelecimento.endereco}</Text> 
                    <Text style={(this.state.local > 5000) ? css.txtDistancia1 : css.txtDistancia2}>Distância atual: {(this.state.local/1000).toFixed(1)} km</Text>
                </View>

                <View style={css.btn}>
                <View style={css.viewEdit}>
                    <TouchableOpacity onPress={() => this.props.modificaId(this.props.estabelecimento._id)}>
                        <Icon name="edit" size={19} color="blue" />
                    </TouchableOpacity>
                </View>
                <View style={css.viewRemove}>
                    <TouchableOpacity onPress={() => this.props.removeEstabelecimento(this.props.estabelecimento._id)}>
                        
                        <Icon name="close" size={19} color="red" />

                    </TouchableOpacity>
                </View>
                    
                    
                </View>
                    
                
            </View>
            

        )
    }
    
}

const mapStateToProps = state => (
    {
        id: state.AutenticacaoReducer.id,
        nome: state.AutenticacaoReducer.nome,
        endereco: state.AutenticacaoReducer.endereco
    }
);
export default connect(mapStateToProps, {
    removeEstabelecimento,
    modificaId,
    
   
})(Estabelecimentos);

const css = StyleSheet.create({

    view:{
        borderWidth: 0.5,
        borderColor: '#999',
        padding: 10,
        margin: 10,
        backgroundColor: '#f0f0f5',
        flexDirection: 'row',
        height: 90
    },
    info:{
        flex: 4
    },
    btn:{
        flex: 1,
        
    },
    txtNome:{
        fontSize: 20
    },
    txtEndereco:{
        fontSize: 15
    },
    txtDistancia1:{
       color: 'red'
    },  
    txtDistancia2:{
        color: 'green'
     }, 
    viewEdit:{
        alignItems: 'center',
        flex:1,
       
        margin: 5
    },
    viewRemove:{
        flex:1,
       
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 5
    }
})