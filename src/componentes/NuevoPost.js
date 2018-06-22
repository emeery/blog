import React, {PropTypes} from 'react';
import { reduxForm, Field } from 'redux-form';
import {crearPost} from '../acciones/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class NuevoPost extends React.Component {
    
    onSubmit(values) {
        this.props.crearPost(values);
        this.props.history.push('/posts');        
    }
  
    render() { 
        
        const {fields: {
            title, categories, content} , 
            handleSubmit } = this.props;
            // meta.touched : boolean
        return (
            
            <form className="container"  
                onSubmit={
                handleSubmit(this.onSubmit.bind(this))}>
                <h3>Crea un nuevo Post.</h3>
                    
                
                    <Field name="titulo" component={ field =>
                        <div className='form-group has-danger '>
                        <h4>Titulo</h4>
                        <input {...field.input} 
                        type="text" 
                        className="form-control is-valid" 
                        />
                        <small className="form-text text-muted">{field.meta.touched&&field.meta.error ? 
                            field.meta.error : ''}</small>
                        </div>
                    } />

                    <Field name="categoria" component={ field =>
                        <div className='form-group'
                        
                        >
                        <h5>Categoria</h5>
                        <input {...field.input} 
                        type="text" 
                        className="form-control"
                        />
                        <small className="form-text text-muted">{field.meta.touched&&field.meta.error ? 
                            field.meta.error : ''} </small>
                        </div>
                    } />

                    <Field name="contenido" component={ field =>
                        <div className='form-group'>
                        <h5>Contenido</h5>
                        <textarea {...field.input} 
                        type="text" 
                        className="form-control"
                        />
                        <small className="form-text text-muted">{field.meta.touched&&field.meta.error ? 
                            field.meta.error : ''}</small>
                        </div>
                    } />
                
                
                    <button 
                type="submit" 
                className="btn btn-info"
                >Postear</button>               
                <Link 
                style={{backgroundColor:'salmon', marginLeft:'5px'}}
                to="/posts" type="button" className="btn btn-danger">
                Cancelar</Link>
                
            </form>
            
        )
    }
}

function validate(values) {
	const error = {};

	if(!values.titulo) {
		error.titulo = 'Ingresa un titulo'
	}
	if(!values.categoria) {
		error.categoria = 'Ingresa una categoria'
	}
	if(!values.contenido) {
		error.contenido = 'Ingresa contenido'
	}

	return error;
}

export default reduxForm({
 form: 'nuevoPost', // nombre unico para esta forma 
 fields: ['titulo', 'categoria', 'contenido'], // campos redux-form
 validate // valida la entrada 
})(connect(null, { crearPost })(NuevoPost));


