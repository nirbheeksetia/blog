import React from'react';
import './style.css';
import {NavLink} from 'react-router-dom';


const Post = (props) => {
    var path = props.path;
    return(
            <NavLink to={path}><div className="post">
               <h2>{props.title}</h2>
            </div></NavLink>
    );
}
export default Post;