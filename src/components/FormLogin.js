import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';



import api from '../services/api';

import {modificaEmail, modificaPassword} from '../actions/AutenticacaoAction';

class FormLogin extends Component {
    state = {
        loggedinUser: null,
        errorMessage: null,
    };

    
    

    render() {
        return (
            <View style={css.viewPrincipal}>
                <View style={css.viewLogo} >
                    <Icon name="find" size={80} color="#000"/>
                </View>

                <View style={css.viewLogin}>
                    <TextInput
                        style={css.txtInput}
                        placeholder="Email"
                        value={this.props.email}
                        onChangeText={email => this.props.modificaEmail(email)}
                    />
                    <TextInput
                        style={css.txtInput}
                        placeholder="Senha"
                        secureTextEntry
                        value={this.props.password}
                        onChangeText={password => this.props.modificaPassword(password)}
                        onSubmitEditing={()=>Actions.consulta()}
                    />

                    <TouchableOpacity
                        onPress={() => Actions.formCadastro()}
                        style={css.btnCadastro}
                    >
                        <Text style={css.txtBtnCadastrar} >Ainda não tem cadastro? Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

                <View style={css.viewBtn} >
                    <TouchableOpacity
                        onPress={() => Actions.consulta()}
                        style={css.btnLogin}
                    >
                        <Text style={css.txtBtnLogin} >Entrar</Text>
                    </TouchableOpacity>
                   
                </View>

            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        
        email: state.AutenticacaoReducer.email,
        password: state.AutenticacaoReducer.password,
       
    }
);

export default connect(mapStateToProps, {
    
    modificaEmail,
    modificaPassword,
   
})(FormLogin);

const css = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        backgroundColor: '#fbfcfc'


    },
    viewLogo: {
        flex: 2,
        
        justifyContent: 'center',
        alignItems: 'center'

    },
    txtLogo: {
        textAlign: 'center',
        fontFamily: 'Iowan Old Style',
        fontSize: 30,
        color: '#202830'
    },
    viewLogin: {
        paddingTop: 50,
        flex: 2,
        
        paddingTop: 100
    },
    txtInput: {
        fontSize: 15,
        backgroundColor:"#ccebff",
        padding: 10,
        margin: 10,
        borderRadius: 20
    },
    txtBtnCadastar: {
        fontFamily: 'Iowan Old Style',
    },
    viewBtn: {
        flex: 2,
       
        padding: 50
    },
    btnLogin: {
        backgroundColor: '#202830',
        margin: 10,
        borderRadius: 20
    },
    txtBtnLogin: {
        textAlign: 'center',
        fontSize: 15,
        padding: 10,
        color: '#fff',
        fontWeight: 'bold'
    },
    btnCadastro: {
        alignItems: 'center'
    }

});