import React from 'react';
import raw from './post1.txt';
import './style.css';

const Post1 = (props) => {
    fetch(raw)
        .then(r => r.text())
        .then(text => {
            document.getElementById("paragraphId").innerHTML = text;
        });
    return(
        <p id="paragraphId"></p>
    );
}
export default Post1;