import React from 'react';
import {reduxForm} from 'redux-form';
import {crearPost} from '../acciones/index';
class NuevoPost extends React.Component {
    onSubmit = (e) => {
        //e.preventDefault();
        this.props.crearPost(e);
        // .then(() => {
        //   browserHistory.push('/');
        // });
      }
    render() { 
        const {handleSubmit} = this.props;
        const {fields: {titulo, categoria, contenido} } = this.props;
        
        return (
                <form onSubmit={handleSubmit(this.onSubmit)}>
                
                    <h3>Crea un nuevo Post.</h3>
                    <div className='form-group'>
                        <label 
                        style={{fontSize:'2rem'}}
                        >titulo</label>
                        <input 
                        type='text'  
                        className='form-control'
                        {...titulo}
                        />
                    </div>

                    <div className='form-group'>
                        <label 
                        style={{fontSize:'2rem'}}
                        >categorias</label>
                        <input 
                        type='text'  
                        className='form-control'
                        {...categoria}
                        />
                    </div>

                    <div className='form-group'>
                        <label 
                        style={{fontSize:'2rem'}}
                        >Contenido</label>
                        <textarea 
                        type='text'  
                        className='form-control'
                        {...contenido} />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-info"
                    > Info</button>
                </form>
            )
    }
}
// 1sr - reduxForm, 2nd - mapStateToProps, 3rd - mapDispatch
export default reduxForm({
    form: 'unpost', // nombre unico para esta forma 
    fields: ['titulo', 'categoria', 'contenido']
}, null, {crearPost: crearPost})(NuevoPost);