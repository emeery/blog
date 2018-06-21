import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {crearPost} from '../acciones/index';
import {connect} from 'react-redux';
class NuevoPost extends React.Component {
    state = {error: ''}
    onSubmit(values) {
        this.props.crearPost(values);
        			
    }
  
    render() { 
        
        const {fields: {
            title, categories, content} , 
            handleSubmit } = this.props;
            // meta.touched : boolean
        return (
            <form onSubmit={
                handleSubmit(this.onSubmit.bind(this))}>
                <h3>Crea un nuevo Post.</h3>
                    
                    
                    <Field name="titulo" component={ field =>
                        <div className='form-group'>
                        <h4>Titulo</h4>
                        <input {...field.input} 
                        type="text" 
                        className="form-control"
                        />
                            <div className="text-help">
                            {field.meta.touched&&field.meta.error ? field.meta.error : ''}
                            </div>
                        </div>
                    } />

                    <Field name="categoria" component={ field =>
                        <div className='form-group'>
                        <h4>Categoria</h4>
                        <input {...field.input} 
                        type="text" 
                        className="form-control"
                        />
                            <div className="text-help">
                            {field.meta.touched&&field.meta.error ? field.meta.error : ''}
                            </div>
                        </div>
                    } />

                    <Field name="contenido" component={ field =>
                        <div className='form-group'>
                        <h4>Contenido</h4>
                        <textarea {...field.input} 
                        type="text" 
                        className="form-control"
                        />
                            <div className="text-help">
                            {field.meta.touched&&field.meta.error ? field.meta.error : ''}
                            </div>
                        </div>
                    } />
                
                <button 
                type="submit" 
                className="btn btn-info"
                >Postear</button>

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
