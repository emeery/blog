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
            <div className="text-xs-right">
                <Link to="/posts/new" 
                className="btn btn-primary">
                    Add a Post
                </Link>
            </div>
                <h3>Posts</h3>
            <ul className="list-group">
            {this.renderPosts()}
            </ul>
        </div>
        )
    }
}
function mapStateToProps(state) {
    return { posts: state.posts.todos }
}
  
export default connect(mapStateToProps, {fetchPost: cargaPost})(ListaPost);