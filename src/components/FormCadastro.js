import React, { Component } from 'react';
import { Alert, View, TouchableOpacity, TextInput, Text,AsyncStorage, StyleSheet } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';


import api from '../services/api';

import {
   
    modificaEmail,
    modificaPassword,
  
} from '../actions/AutenticacaoAction';

class FormCadastro extends Component {

   
    render() {
        return (
            <View style={css.viewPrincipal}>

                <View style={css.viewCampos} >
                   
                    <TextInput
                        style={css.txtInput}
                        placeholder="Email"
                        value={this.props.email}
                        onChangeText={email => this.props.modificaEmail(email)}


                    />
                    <TextInput
                        style={css.txtInput}
                        placeholder="Password"
                        value={this.props.password}
                        onChangeText={password => this.props.modificaPassword(password)}
                        secureTextEntry

                    />
                   
                </View>

                <View style={css.viewBtn} >
                    <TouchableOpacity 
                        style={css.btnCadastrar} 
                        onPress={() => Actions.consulta()}
                    >
                        <Text style={css.txtBtn} >Cadastrar</Text>
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
  
})(FormCadastro);

const css = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        
        backgroundColor: '#fbfcfc'

    },
    viewCampos: {
        flex: 3,
        justifyContent: 'center'
       
    },
    txtInput: {
        fontSize: 15,
        backgroundColor:"#ccebff",

        padding: 10,
        margin: 10,
        borderRadius: 20

    },
    viewBtn: {
        flex: 1,
        
    },
    btnCadastrar: {
        backgroundColor: '#202830',
        margin: 10,
        borderRadius: 20

    },
    txtBtn: {
        textAlign: 'center',
        fontSize: 15,
        padding: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Iowan Old Style'
    }

});