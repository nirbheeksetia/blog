import React from 'react';

const PostContentX = (props) => {
    document.getElementById("content").innerHTML = props.content;
    return(
        <p id="content"></p>
    );
}
export default PostContentX;