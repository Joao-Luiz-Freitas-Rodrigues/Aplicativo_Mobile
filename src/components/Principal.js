import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';


export default class Principal extends Component {

 

    render() {
        return (
            <View style={css.viewPrincipal}>
                <TouchableOpacity 
                    style={css.btn} 
                    onPress={() => Actions.consulta()}

                >
                    <Text style={css.txtBtn}>Consultar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={css.btn}  
                    onPress={() => Actions.cadastro()}
                >
                    <Text style={css.txtBtn}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={css.btn} 
                    onPress={() => Actions.edita()}
                >
                    <Text style={css.txtBtn}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={css.btn} 
                    onPress={() => Actions.remove()}
                >
                    <Text style={css.txtBtn}>Remover</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={css.btnSair} 
                    onPress={() => Actions.formLogin()}
                >
                    <Text style={css.txtBtn}>Sair</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const css = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: '#fbfcfc'

    },
    btn:{
        margin: 10,
        padding: 10,
        backgroundColor: '#202830',
        borderRadius: 20
    },
    txtBtn:{
        textAlign: 'center',
        fontSize: 20,
        color: "#FFF"
    },
    btnSair:{
        margin: 80,
        padding: 10,
        backgroundColor: '#34BEC0',
        borderRadius: 20
    },
});