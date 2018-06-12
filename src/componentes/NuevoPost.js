import React from 'react';
import { reduxForm } from 'redux-form';
import {crearPost} from '../acciones/index';
class NuevoPost extends React.Component {
    onSubmit(props) {
		this.props.crearPost(props)
			.then(() => {
				// blog post has been created navigate user to index
				// we navigate by calling this.context.router.push with new path
				// to navigate to
				t//his.context.router.push('/');
			});
	}
    render() { 
        const {handleSubmit} = this.props;
        const {fields: {titulo, categoria, contenido} } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
 
export default reduxForm({
 form: 'nuevoPost', // nombre unico para esta forma 
 fields: ['titulo', 'categoria', 'contenido']
}, null, {crearPost})(NuevoPost);

// import React from 'react';
// import {reduxForm} from 'redux-form';
// import {crearPost} from '../acciones/index';
// class NuevoPost extends React.Component {
//  onSubmit = (fields) =<div>{
//  this.props.crearPost(fields)
//  .then(() => {
//  browserHistory.push('/');
//  });
//  }
//  render() { 
//  const {handleSubmit} = this.props;
//  const {fields: {titulo, categoria, contenido} } = this.props;
 
//  return (
//     <form onSubmit={handleSubmit(this.onSubmit)}>
        
//         <h3>Crea un nuevo Post.</h3>
//         <div className='form-group'>
//         <label 
        
//         >titulo</label>
//         <input 
//         type='text' 
//         className='form-control'
//         {...titulo}
//         />
//         </div>
//     </form>
//     )
//  }
// }
// // 1sr - reduxForm, 2nd - mapStateToProps, 3rd - mapDispatch
// export default reduxForm({
//  form: 'Post_Forma', // nombre unico para esta forma 
//  fields: ['titulo', 'categoria', 'contenido']
// }, null, {crearPost: crearPost})(NuevoPost);