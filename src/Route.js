import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

import Cadastro from './components/Cadastro';
import Consulta from './components/Consulta';

import Detalhe from './components/Detalhe';

export default class Route extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='formLogin' component={FormLogin} hideNavBar={true} />
                    <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
                    <Scene key='cadastro' component={Cadastro} title='Cadastrar Estabelecimento'  />
                    <Scene key='consulta' component={Consulta} title='Consulta' hideNavBar={true}/>
                    <Scene key='detalhe' component={Detalhe} />
                   
                </Scene>
            </Router>
        );
    }
}