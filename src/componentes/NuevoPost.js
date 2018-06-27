import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {crearPost} from '../acciones/index';
import {connect} from 'react-redux';
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
                        <div className='form-group'>
                        <h4>Titulo</h4>
                        <input {...field.input} 
                        type="text" 
                        className="form-control is-valid" 
                        />
                            <div 
                            className="text-help"
                            >
                            <p
                            style={{color:'grey', fontSize:'15px'}}
                            >{field.meta.touched&&field.meta.error ? 
                                field.meta.error : ''}</p>
                            </div>
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
                            <div 
                            className="text-help"
                            >
                            <p
                            style={{color:'grey', fontSize:'15px'}}
                            >{field.meta.touched&&field.meta.error ? 
                                field.meta.error : ''}</p>
                            </div>
                        </div>
                    } />

                    <Field name="content" component={ field =>
                        <div className='form-group'>
                        <h5>Contenido</h5>
                        <textarea {...field.input} 
                        type="text" 
                        className="form-control"
                        />
                            <div 
                            className="text-help"
                            >
                            <p
                            style={{color:'grey', fontSize:'15px'}}
                            >{field.meta.touched&&field.meta.error ? 
                                field.meta.error : ''}</p>
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

	if(!values.title) {
		error.titulo = 'Ingresa un titulo'
	}
	if(!values.categories) {
		error.categoria = 'Ingresa una categoria'
	}
	if(!values.content) {
		error.contenido = 'Ingresa contenido'
	}

	return error;
}

export default reduxForm({
 form: 'nuevoPost', // nombre unico para esta forma 
 fields: ['title', 'categories', 'content'], // campos en ingles, documentacion
 validate // valida la entrada 
})(connect(null, { crearPost })(NuevoPost));


