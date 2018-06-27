import React, {PropTypes} from 'react';
import { reduxForm, Field } from 'redux-form';
import {crearPost} from '../acciones/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class NuevoPost extends React.Component {
    
    onSubmit(values) {
        this.props.crearPost(values);
        this.props.history.push('/');        
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
                    
                
                    <Field name="title" component={ field =>
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

                    <Field name="categories" component={ field =>
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

                    <Field name="content" component={ field =>
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

	if(!values.title) {
		error.title = 'Ingresa un titulo'
	}
	if(!values.categories) {
		error.categories = 'Ingresa una categoria'
	}
	if(!values.content) {
		error.content = 'Ingresa contenido'
	}

	return error;
}

export default reduxForm({
 form: 'nuevoPost', // nombre unico para esta forma 
 fields: ['title', 'categories', 'content'], // campos redux-form
 validate // valida la entrada 
})(connect(null, { crearPost })(NuevoPost));


