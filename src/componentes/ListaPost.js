import React from 'react';
import {connect } from 'react-redux';
import {cargaPost} from '../acciones/index';
import {Link} from 'react-router-dom';
class ListaPost extends React.Component {
    componentWillMount() {
        this.props.fetchPost();
     }
     renderPosts() {
        return this.props.posts.map((post) => {
          return (
            <li className="list-group-item" key={post.id}>
              <Link to={"posts/" + post.id}>
                <span className="float-right">{post.categories}</span>
                <strong>{post.title}</strong>
              </Link>
            </li>
          );
        });
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
                {this.renderPosts()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {posts: state.posts.todos }
}
export default connect(mapStateToProps, {fetchPost: cargaPost})(ListaPost);