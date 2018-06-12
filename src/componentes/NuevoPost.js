import React from 'react';
import { reduxForm } from 'redux-form';
import {crearPost} from '../acciones/index';
import {connect} from 'react-redux';
class NuevoPost extends React.Component {
    onSubmit(props) {
		this.props.crearPost(props)
			.then(() => {
				// blog post has been created navigate user to index
				// we navigate by calling this.context.router.push with new path
				// to navigate to
				//t//his.context.router.push('/');
			});
	}
    render() { 
        const {handleSubmit} = this.props;
        const {fields: {titulo, categoria, contenido} } = this.props;
        return (
            <form onSubmit={
                handleSubmit(this.onSubmit.bind(this))}>
                <h3>Crea un nuevo Post.</h3>
                <div className='form-group'>
                    <label 
                    >titulo</label>
                    <input 
                    type='text' 
                    className='form-control'
                    {...titulo}
                    />
                </div>

                <div className='form-group'>
                    <label 
                    >Categoria</label>
                    <input 
                    type='text' 
                    className='form-control'
                    {...categoria}
                    />
                </div>

                <div className='form-group'>
                    <label 
                    >Contenido</label>
                    <textarea 
                    type='text' 
                    className='form-control'
                    {...contenido}
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

	if(!values.titulo) {
		errors.titulo = 'Enter a title'
	}

	if(!values.categoria) {
		errors.categoria = 'Enter Categories'
	}

	if(!values.contenido) {
		errors.contenido = 'Enter Content'
	}

	return errors;
}

export default reduxForm({
 form: 'nuevoPost', // nombre unico para esta forma 
 fields: ['titulo', 'categoria', 'contenido'],
 validate
})(connect(null, { crearPost })(NuevoPost));
