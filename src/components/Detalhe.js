import React, { Component } from 'react';
import {View, TextInput,TouchableOpacity, StyleSheet, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import {modificaId, removeEstabelecimento,editaEstabelecimento,modificaNome,modificaEndereco} from '../actions/AutenticacaoAction';
import geolib from 'geolib'


export  class Detalhe extends Component {

    state = {
        latitude: null,
        longitude: null
    }

    
  findCoordinates = () => {
    console.log("entrou na funcao");
    
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        console.log(latitude, longitude);
        
        this.setState({ latitude, longitude });
   
        Alert.alert('voce esta a ' + geolib.getDistance(
            {latitude: this.state.latitude, longitude: this.state.longitude},
            {latitude: -3.77849813, longitude:-38.4852242}
        ) + ' metros desse estabelecimento');
      },
      // error.message
      error => Alert.alert("Ative sua localização para seu ponto poder ser registrado!"),
      { enableHighAccuracy: true, timeout: 20000 , maximumAge: 0}
    );
  };


    render(){
        return(
            <View style={css.view}>
                <View style={css.inputView}>
                    <TextInput
                    placeholder="Estabelecimento"
                    style={css.txtInput}
                    value={this.props.nome}
                    onChangeText={nome => this.props.modificaNome(nome)}

                    />
                    <TextInput 
                    placeholder="Endereço"
                    style={css.txtInput}
                    value={this.props.endereco}
                    onChangeText={endereco => this.props.modificaEndereco(endereco)}

                />
                </View>

                <TouchableOpacity style={css.btnAtualizar} onPress={() => this.props.editaEstabelecimento(this.props.id, this.props.nome, this.props.endereco) }>
                    <Text style={css.txtBtn}>Atualizar</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => this.findCoordinates() }>
                    <Text>localizar</Text>
                </TouchableOpacity> */}
{/* 
                <Text>{ this.props.nome} </Text>
                <Text>{ this.props.endereco} </Text> */}
            </View>
            

        );
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
    editaEstabelecimento,
    modificaNome,
    modificaEndereco
    
   
})(Detalhe);

const css = StyleSheet.create({
    view:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    txtInput:{
        backgroundColor:"#ccebff",
        margin: 10,
        padding: 10

    },
    btnAtualizar:{
        marginTop: 40,
        backgroundColor: '#202830',
        height: 40,
        justifyContent: 'center',
        margin: 30,
        borderRadius: 30

    },
    txtBtn:{
        textAlign: 'center',
        fontSize: 20,
        color: '#FFF'

    }
})