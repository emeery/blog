import React from 'react';
import {connect } from 'react-redux';
import {cargaPost} from '../acciones/index';
import {Link} from 'react-router-dom';
class ListaPost extends React.Component {
    componentWillMount() {
        this.props.fetchPost();
     }
    render() { 
        return (
            <div>
                <p className="text-right">
                    <Link
                    to="/posts/new" 
                    >
                    <button 
                    type="button" 
                    className="btn btn-info">
                    Nuevo Post
                    </button>
                    
                    </Link>
                </p>
                Lista de post
            </div>
        )
    }
}

export default connect(null, {fetchPost: cargaPost})(ListaPost);