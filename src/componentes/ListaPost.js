import React from 'react';
import {connect } from 'react-redux';
import {cargaPost} from '../acciones/index';
import {Link} from 'react-router-dom';
class ListaPost extends React.Component {
    componentWillMount() {
        this.props.cargaPost();
     }
    renderPost() {
        
    }
    render() { 
        return (
            <div>
            <h2>Blog Posts</h2>
            
          </div>
        
        )
    }
}
function mapStateToProps(state) {
    return { posts: state.posts.todos }
  }
export default connect(mapStateToProps, {cargaPost})(ListaPost);

// <ul className="list-group">
//           {this.renderPosts()}
//         </ul>