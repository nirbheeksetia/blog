import React,{Component} from 'react';
import './style.css';
import Header from '../../components/Header/index';
import Post from '../../components/Post/index';
import firebase from '../../firebase';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            mypath:null,
            mytitle:null,
            posts:null
        };
        this.retrieve = this.retrieve.bind(this);
    }
    retrieve(){
        const dbRef = firebase.database().ref('posts');
        dbRef.on("child_added", (snap) =>{
            let post = snap.val();
            let mypostPath = post.path;
            let mypostTitle = post.title;
            this.setState({
                posts:{mypath:mypostPath,
                    mytitle:mypostTitle,
                    component:<Post path={this.state.mypath} title={this.state.mytitle}/>}
            });
            document.getElementById("maindiv").appendChild(this.state.posts.component);
        });
    };
    render(){
        return (
            <div id="maindiv">
                <Header/>
                <Post path="/post1" title="My first Post"/>
                <Post path="/post2" title="TestPost2"/>
            </div>
        );
    }
};
export default Home;