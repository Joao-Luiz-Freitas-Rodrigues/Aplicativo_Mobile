import React, { Component } from 'react';
import { Alert, View, TouchableOpacity, TextInput, Text,AsyncStorage, StyleSheet } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';


import api from '../services/api';

export default class Remove extends Component {

    state = {
        id: ''
    }

    render(){
        return(
            <View style={css.viewPrinciapl}>
                <TextInput 
                    style={css.txtInput}
                    placeholder='Digite o ID'
                    keyboardType='numeric'
                    value={this.state.id}
                    onChangeText={id => this.setState({id: id})}
                />

                <TouchableOpacity 
                    style={css.btn}
                    onPress={() => this.remove()}

                >
                    <Text style={css.txtbtn}>
                        Remover
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const css = StyleSheet.create({

    viewPrinciapl: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtInput: {
        fontSize: 20,
        backgroundColor: '#85d4fc',
        padding: 10,
        margin: 10,
        alignSelf: 'stretch',
         borderRadius: 20
        },
    btn:{
        backgroundColor: '#202830',
        margin: 10,
        borderRadius: 20
    },
    txtbtn:{
        textAlign: 'center',
        fontSize: 25,
        padding: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Iowan Old Style'
    }

})