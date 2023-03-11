import './App.css';
import img1 from './imgs/img-1.jpg'
import img2 from './imgs/img-2.jpg'
import img3 from './imgs/img-3.jpg'
import img4 from './imgs/img-4.jpg'
import img5 from './imgs/img-9.jpg'
import img6 from './imgs/img-6.jpg'
import img7 from './imgs/img-5.jpg'
import img8 from './imgs/img-8.jpg'
import img9 from './imgs/img-7.jpg'
import facebook from './imgs/facebook.wix_mp'
import ttt from './imgs/ttt.png'
import twitter from './imgs//twitter.png'
import ppp from './imgs/ppp.png'

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1><a href="#">Олег Марков</a></h1>
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">Обо мне</a></li>
          <li><a href="#">Связаться</a></li>
        </ul>
      </header>

      <div className="container">
        <div className="imgContainer">
          <img src={img1} alt="" className="img" />
        </div>
        <div className="imgContainer">
          <img src={img2} alt="" className="img" />
        </div>
        <div className="imgContainer">
          <img src={img3} alt="" className="img" />
        </div>
        <div className="imgContainer four">
          <img src={img4} alt="" className="img" />
        </div>
        <div className="imgContainer">
          <img src={img5} alt="" className="img" />
        </div>
        <div className="imgContainer four">
          <img src={img6} alt="" className="img" />
        </div>
        <div className="imgContainer seven">
          <img src={img7} alt="" className="img" />
        </div>
        <div className="imgContainer eight">
          <img src={img9} alt="" className="img" />
        </div>
        <div className="imgContainer nine">
          <img src={img8} alt="" className="img" />
        </div>
      </div>

      <div className="footer">
        <p>© 2035 Олег Марков. Сайт создан на <a href="#">Wix.com</a></p>
        <div className="icons">
          <div className="icon">
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={ttt} alt="" /></a>
            <a href="#"><img src={twitter} alt="" /></a>
            <a href="#"><img src={ppp} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
