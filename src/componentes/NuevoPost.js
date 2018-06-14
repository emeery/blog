import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {crearPost} from '../acciones/index';
import {connect} from 'react-redux';
class NuevoPost extends React.Component {
    onSubmit(values) {
        this.props.crearPost(values)			
	}
    render() { 
        
        const {fields: {
            title, categories, content} , 
            handleSubmit } = this.props;
        return (
            <form onSubmit={
                handleSubmit(this.onSubmit.bind(this))}>
                <h3>Crea un nuevo Post.</h3>
                <div className='form-group'>
                    <label 
                    >titulo</label>
                    <Field
                    type='text' 
                    className='form-control'
                    component={'input'}
                    name="title"
                    />
                </div>

                <div className='form-group'>
                    <label 
                    >Categoria</label>
                    <Field
                    type='text' 
                    className='form-control'
                    component={'input'}
                    name="categories"
                    />
                </div>

                <div className='form-group'>
                    <label 
                    >Contenido</label>
                    <Field 
                    name="content" 
                    component="textarea" 
                    />
                </div>
                <button 
                type="submit" 
                className="btn btn-info"
                >Postear</button>

            </form>
        )
    }
}

function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = 'Enter a title'
	}

	if(!values.categories) {
		errors.categories = 'Enter Categories'
	}

	if(!values.content) {
		errors.content = 'Enter Content'
	}

	return errors;
}

export default reduxForm({
 form: 'nuevoPost', // nombre unico para esta forma 
 fields: ['title', 'categories', 'content'],
 validate
})(connect(null, { crearPost })(NuevoPost));
