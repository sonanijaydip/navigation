import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <nav>
    <div className="main-logo container">
      <img src={require(`./img/1.png`)}></img>
    </div>
    <ul className=" main-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">COURSES</a>
        <ul className="sub-menu">
              <li><a href="#">designing courses</a></li>
              <li><a href="#">developing courses</a></li>
              <li><a href="#">programming it</a></li>
              <li><a href="#">Business developing</a></li>
              <li><a href="#">Short Term courses</a></li>
              
          </ul>
        </li>
        <li><a href="#">COLLEGE COURSES</a></li>
        <li><a href="#">ACTIVITIES</a>
        <ul className="sub-menu">
              <li><a href="#">Gallary</a></li>
              <li><a href="#">Event</a></li>
              
          </ul>
        </li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#">KNOW US</a>
        <ul className="sub-menu">
              <li><a href="#">About us</a></li>
              <li><a href="#">Studentlog in</a></li>
              <li><a href="#">Show casa</a></li>
              
          </ul>
        </li>
        <li><a href="#">GET IN TOUCH</a></li>
        <li><a href="#">STUDENT ZONE</a>
        <ul className="sub-menu">
              <li><a href="#">designing courses</a></li>
              <li><a href="#">developing courses</a></li>
              
          </ul>
        
        </li>
        
    </ul>
    </nav>
    
    </>
  );
}

export default App;
