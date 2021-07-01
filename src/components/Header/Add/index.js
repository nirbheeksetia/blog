import React,{Component} from'react';
import './style.css';
import firebase from '../../../firebase';

class addToDatabase extends Component{
    constructor(props){
        super(props);
        this.state = {
            increment:0
        };
        this.add = this.add.bind(this);
    }
    file = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)
          console.log(text)
          document.getElementById("contentfile").innerText = text;
        };
        reader.readAsText(e.target.files[0])
      }
    add(){
        let text = document.getElementById("contentfile").innerText;
        document.getElementById("contentfile").innerText = text;
        const dbref = firebase.database().ref('posts');
        let posttitle = document.getElementById("textinput").value;
        let postpath = '/post' + this.state.increment.toString();
        const post = {
          path: postpath,
          title:posttitle,
          content:text
        }
        dbref.push(post);
        let i = this.state.increment;
        i++;  
    }
    render(){
        return (
            <div>
                <h2>Select content file</h2>
                <input id="fileinput" type="file" accept='text/txt' onChange={this.file}></input>
                <p id="contentfile"></p>
                <h2>Add title</h2>
                <input id="textinput" type="text" placeholder="Post title"></input>
                <button onClick={this.add}>Submit</button>
            </div>
        );
    }
};
export default addToDatabase;