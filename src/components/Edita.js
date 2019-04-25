import React, { Component } from 'react';
import { Alert, View, TouchableOpacity, TextInput, Text,AsyncStorage, StyleSheet } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';


import api from '../services/api';

export default class Edita extends Component {

    state = {
        id: '',
        name: '',
        description: '',
        pricing: '',
        stock: ''
    }



    render(){
        return(
            <View style={css.view}>
                <TextInput 
                    style={css.txtInput}
                    placeholder='Digite o ID'
                    onChangeText={id => this.setState({id:id})}
                />
                <TextInput
                    style={css.txtInput} 
                    placeholder='Nome'
                    onChangeText={nome => this.setState({name:nome})}

                />
                <TextInput 
                    style={css.txtInput}
                    placeholder='Descrição'
                    onChangeText={descri => this.setState({description:descri})}

                />
                <TextInput 
                    style={css.txtInput}
                    placeholder='Preço'
                    onChangeText={preco => this.setState({pricing:preco})}

                />
                <TextInput 
                    style={css.txtInput}
                    placeholder='Estoque'
                    onChangeText={estoque => this.setState({stock:estoque})}

                />
                <TouchableOpacity
                    style={css.btn}
                    onPress={() => this.edita()}
                >
                    <Text style={css.txtbtn}>Editar</Text>
                </TouchableOpacity>
            </View>
           

        );
    }
}

const css = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn:{
        backgroundColor: '#202830',
        margin: 10,
        borderRadius: 20,
        
    },
    txtbtn: {
        textAlign: 'center',
        fontSize: 25,
        padding: 10,
        color: '#fff',
        fontWeight: 'bold'
    },
    txtInput: {
        backgroundColor: '#85d4fc',
        fontSize: 20,
        padding: 10,
        margin: 10,
        borderRadius: 20,
        alignSelf: 'stretch'

    },

})