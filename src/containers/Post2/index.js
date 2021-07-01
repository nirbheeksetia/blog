import React from 'react';
import raw from './post2.txt';

const Post2 = (props) => {
    fetch(raw)
        .then(r => r.text())
        .then(text => {
            document.getElementById("text").innerHTML = text;
        });
    return(
        <p id="text"></p>
    );
}
export default Post2;