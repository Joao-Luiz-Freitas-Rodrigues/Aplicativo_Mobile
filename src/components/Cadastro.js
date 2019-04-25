import React, { Component } from 'react';
import { Alert, View, TouchableOpacity, TextInput, Text, AsyncStorage, StyleSheet } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';



import api from '../services/api';

import {modificaNome, modificaEndereco,cadastraEstabelecimento} from '../actions/AutenticacaoAction';

export  class Cadastra extends Component {

    state={
        latitude: null,
        longitude: null
    }

    render() {
        return (
            <View style={css.view}>

                <TextInput 
                    style={css.txtInput}
                    placeholder='Digite o nome do estabelecimento'
                    value={this.props.nome}
                    onChangeText={nome => this.props.modificaNome(nome)}
                />
                <TextInput 
                    style={css.txtInput}
                    value={this.props.endereco}

                    placeholder='Digite o endereço do estabelecimento'
                    onChangeText={endereco => this.props.modificaEndereco(endereco)}

                />
                 <TextInput 
                    style={css.txtInput}
                    value={this.state.latitude}

                    placeholder='Digite a latitude do estabelecimento'
                    onChangeText={latitude => this.setState({latitude})}

                />
                 <TextInput 
                    style={css.txtInput}
                    value={this.state.longitude}

                    placeholder='Digite a longitude do estabelecimento'
                    onChangeText={longitude => this.setState({longitude})}

                />
               

                <TouchableOpacity
                    onPress={() => this.props.cadastraEstabelecimento(
                                        this.props.nome, 
                                        this.props.endereco,
                                        this.state.latitude,
                                        this.state.longitude)}
                    style={css.btn}
                >
                    <Text style={css.txtbtn}>Cadastrar</Text>
                </TouchableOpacity>

            </View>


        );
    }
}


const mapStateToProps = state => (
    {

        nome: state.AutenticacaoReducer.nome,
        endereco: state.AutenticacaoReducer.endereco
    }
);
export default connect(mapStateToProps, {
   
    modificaNome,
    modificaEndereco,
    cadastraEstabelecimento
})(Cadastra);


const css = StyleSheet.create({

    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    btn:{
        backgroundColor: '#202830',
        margin: 10,
        borderRadius: 20,
        alignSelf: 'stretch',
        margin: 40
        
    },
    txtbtn: {
        textAlign: 'center',
        fontSize: 15,
        padding: 10,
        color: '#fff',
        fontWeight: 'bold'
    },
    txtInput: {
        backgroundColor:"#ccebff",
        fontSize: 15,
        padding: 10,
        margin: 10,
        borderRadius: 20,
        alignSelf: 'stretch'

    },
})