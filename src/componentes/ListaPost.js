import React from 'react';
import {connect } from 'react-redux';
import {cargaPost} from '../acciones/index';
class ListaPost extends React.Component {
    componentWillMount() {
        this.props.fetchPost();
     }
    render() { 
        return (<div>ListaPost</div>)
    }
}

export default connect(null, {fetchPost: cargaPost})(ListaPost);