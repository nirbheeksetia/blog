import React from 'react';

const PostContent = (props) => {
    document.getElementById("content").innerHTML = props.content;
    return(
        <p id="content"></p>
    );
}
export default PostContent;