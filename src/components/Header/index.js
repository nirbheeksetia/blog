import React,{useState} from'react';
import './style.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    const submitSearch = (e) =>{
        e.preventDefault();
        alert("Searched");
    }
    const [search,setSearch] = useState(false);
    const openSearch = () => {
        setSearch(true);
    }
    const searchClass = search ? "searchinput:active":"searchinput";
    return (
        <div className="box">
            <header className="header">
                <nav className="headerMenu">
                    <a className="menu" href="">About Me</a>
                    <NavLink to="/add"><button>Add</button></NavLink>
                </nav>
                <div>
                    <form className="search" onSubmit={submitSearch}>
                        <input className={searchClass} type="text" placeholder="Search my posts"/>
                        <img onClick={openSearch} className="searchicon" src="https://www.clker.com/cliparts/9/T/2/h/X/7/search-icon-hi.png" alt="Search"/>
                    </form>
                </div>
            </header>
            <h1 id="text">My Blog Posts</h1>
        </div>
    );
};
export default Header;