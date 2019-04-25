import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import Principal from './components/Principal';
import Remove from './components/Remove';
import Cadastro from './components/Cadastro';
import Consulta from './components/Consulta';
import Edita from './components/Edita';
import Detalhe from './components/Detalhe';

export default class Route extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='formLogin' component={FormLogin} hideNavBar={true} />
                    <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
                    <Scene key='principal' component={Principal} hideNavBar={true}/>

                    <Scene key='remove' component={Remove} />
                    <Scene key='cadastro' component={Cadastro} title='Cadastro'  />
                    <Scene key='consulta' component={Consulta} title='Consulta' hideNavBar={true}/>
                    <Scene key='edita' component={Edita} title='Edição' />
                    <Scene key='detalhe' component={Detalhe} />
                   
                </Scene>
            </Router>
        );
    }
}