import React,{Component} from 'react';
import './App.css';
import Home from './containers/Home';
import Post1 from './containers/Post1';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Post2 from './containers/Post2.';
import addToDatabase from './components/Header/Add/index';
import PostContent from './components/PostContent';
import firebase from './firebase';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      Mypath: null,
      mycontent:null,
      component:null,
      postcontent:null
    };
    this.retrievecontent = this.retrievecontent.bind(this);
  };
  retrievecontent(){
    const dbREF = firebase.database().ref('posts');
    dbREF.on("child_added", (snap) =>{
      let mypost = snap.val();
      let mypostcontent = mypost.content;
      let mypostpath = mypost.path;
      let ThePost = <PostContent content={mypostcontent}/>
      document.getElementById("App").appendChild(<Route path={mypostpath} component={ThePost}/>)
    });
  };
  render(){
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home}/>
          <Route path="/post1" component={Post1}/>
          <Route path="/post2" component={Post2}/>
          <Route path="/add" component={addToDatabase}/>
        </div>
      </Router>
    );
  }
}

export default App;
