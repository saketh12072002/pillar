import logo from './profileimg.jpeg';
import verified from './verified.png';
import love from './icons8-heart-48.png';
import upload from './icons8-upload-48.png'
import card1 from './card-1.png';
import card2 from './card2.png';
import card3 from './card3.png';
import card4 from './card4.png';
import nft1 from './nft1.png';
import nft2 from './nft2.png';
import nft3 from './nft3.jpeg';
import './App.css';
import background from './background.svg';
import msg from './chat.png'

function App() {
  return (
    <div className="App">
      <div className='background' style={{ 
       backgroundImage: `url(${background})`
    }}>
      <div className="fixedbut">
        <a className='fixchey'><button className='upload'><img className='uploadimg' src={upload} alt='love'></img></button></a>
        <a className='fixchey'><button className='Subscribe'><img className='love' src={love} alt='love'></img><span className='long'>Subscribe</span></button></a>
      </div>
      <div className="top-page">
        <img className='logo' src={logo} alt="profile-img"></img>
      <h1>J Johnson Jr <img className='verified' src={verified} alt="verified"></img></h1>
      <p>Created by different elements ⚛️ Athlete & CEO</p>
      <div><span><i class="bi bi-geo-alt"></i> Raleigh, NC</span></div>
      </div>
    <div className="icons"><ul>
      <li><a><i class="bi bi-envelope"></i></a></li>
      <li><a><i class="bi bi-instagram"></i></a></li>
      <li><a><i class="bi bi-twitch"></i></a></li>
      <li><a><i class="bi bi-twitter"></i></a></li>
      <li><a><i class="bi bi-youtube"></i></a></li>
      <li><a><i class="bi bi-discord"></i></a></li>
      <li><a><i class="bi bi-tiktok"></i></a></li>
      <li><a><i class="bi bi-linkedin"></i></a></li>
      <li><a><i class="bi bi-spotify"></i></a></li>
      <li><a><i class="bi bi-apple"></i></a></li>
      </ul>
    </div>

    <div className="content">
      <h3>Exclusive Content</h3>
    </div> 
      <div className="real-content">
        <h3>Get access to all the following content⬇️</h3>
      </div>
    <div className="cards">
      <div className="card-1">
        <img src={card1} alt="card-1"></img>
        <div className='text1'><h4>Weekly Training</h4>
        <p>Get the inside view of what I did for training every week! FULL BREAKDOWN</p>
        
        <button><i class="bi bi-heart-fill"></i><span className='longg'>Subscribe to Unlock</span><span className="shot">Subscribe</span></button></div>
      </div>

      <div className="card-1">
        <img src={card2} alt="card-1"></img>
        <div className='text1'><h4>Weekly Meals</h4>
        <p>Each week I will document what I eat in an organised fashion</p>
        
        <button><i class="bi bi-heart-fill"></i><span className='longg'>Subscribe to Unlock</span><span className="shot">Subscribe</span></button></div>
      </div>

      <div className="card-1">
        <img src={card3} alt="card-1"></img>
        <div className='text1'><h4>Daily Quote</h4>
        <p>A quote that will empower you to achieve your dreams!</p>
        
        <button><i class="bi bi-heart-fill"></i><span className='longg'>Subscribe to Unlock</span><span className="shot">Subscribe</span></button></div>
      </div><br></br><br></br>

      <div className="card-4">
        <img src={card4} alt="card-4"></img>
        <div className='text2'>
        <button><span>Buy for $4.99</span></button></div>
        </div>

        <div className="card-5">
        <a href='https://youtube.com/playlist?list=PLM2ccN457sxRuVSqTHINmtkkwiJq1txwW'><i style={{paddingTop: '25px'}} id="youtube" class="bi bi-youtube"></i><div className='crd5'><h3>Speed Training Playlist</h3>
        <p>Get faster for any sport with these speed tips</p></div></a>
        </div>

        <div className="card-5">
        <a href='https://youtu.be/fJGDnvoLKFA'><i id="youtube" class="bi bi-youtube"></i><div className='crd5'><h2>Workout Vlog With Batman!</h2></div>
        <i id="low" class="bi bi-chevron-down"></i></a>
        </div>

        <div className="card-5">
        <div className='crd'><h3>Join the squad</h3>
        <p>Know when I drop merch & speed vlogs</p>
        <div className="input">
        <input placeholder='Email'></input><br></br>
        <input placeholder='Phone #'></input>
        </div>
        </div>
        <div className="raddio">
          <input type="radio" id="one" name="fav_language" value="one"></input>
          <label for="one">I'm a Fan</label>
          <input type="radio" id="two" name="fav_language" value="two"></input>
          <label for="two">I'm a Brand</label>
          <input type="radio" id="three" name="fav_language" value="three"></input>
          <label for="three">I'm a Creator</label><br></br><br></br>
          <button id='but'>Submit</button>
        </div>
        </div>

        <div className="card-5">
        <a href='https://youtu.be/RGj5K54dd58'><i id="youtube" class="bi bi-youtube"></i><div className='crd5'><h2 id='crrd'>Racing people for $$$</h2></div>
        <i id="low" class="bi bi-chevron-down"></i></a>
        </div>
        <div className="business">
        <h3 id='buzi'>Business</h3>

        <div className="card-5">
        <div className='crd'>
          <h4>Speed Socks ⚡️</h4>
        <p>Socks created for speed by speed</p>
        </div>
        </div>

        <div className="card-5">
        <div className='crd'>
        <div style={{position: 'relative',transform:'translateY(-1em)'}}><i id="youtube" class="bi bi-ear"></i></div>
        <div style={{position: 'relative',float:'right', transform:'translateY(-1em)'}}><i id="youtube" class="bi bi-suit-diamond-fill"></i></div>
          <h4>High Frequency Highway</h4>
        <p>My app with a library of positive frequencies</p>
        </div>
        </div>

        <div className="card-5">
        <div className='crd'>
        <div style={{position: 'relative',float:'right', transform:'translateY(-1em)'}}><i id="youtube" class="bi bi-lightning-fill"></i></div>
          <h4>Purium Super Food</h4>
        <p>Organic whole food so you can perform at your best</p>
        </div>
        </div>

        <div id='key' className="card-5">
        <div className='crd'>
        <div style={{position: 'relative',float:'left' }}><i id="youtube" class="bi bi-key-fill"></i></div>
          <h4>Make your own page like this for free using Pillar</h4>
        </div>
        </div>

        <div id='transition' className="card-5">
        <div className='crd'>
        <div style={{position: 'relative',float:'left',transform:'translateY(-1.4em)' }}><i id="youtube" class="bi bi-star-fill"></i></div>
          <h4>Famous Birthdays</h4>
        </div>
        </div>

        <h3 id='bui'>Music</h3>
        <div id='buii'className="card-5">
        <a href='#'><i id="youtube" class="bi bi-spotify"></i><div className='crd5'><h2 id='crrd'>Wishing-King Han</h2></div>
        <i id="low" class="bi bi-chevron-down"></i></a>
        </div>

        <div className="card-5">
        <i id="youtube" class="bi bi-music-note-beamed"></i><div className='crd5'><h2 style={{transform:'translateX(10px)'}}>Stream my song!</h2><p style={{transform:'translateX(-20px)'}}>Availble everywhere</p></div>
        </div>

        <div className="card-5">
        <a href='#'><i id="youtube" class="bi bi-youtube"></i><div className='crd5'><h2 id='crrd'>Wishing Music Video</h2></div>
        <i id="low" class="bi bi-chevron-down"></i></a>
        </div>

        <h3 id='buiii'>NFT's</h3>
        <div id='buii' className="card-1">
        <img src={nft1} alt="card-1"></img>
        <div className='text1'><h4>J Johnson Jr on the moon</h4>
        <p>Buy a collectible 1 of 1 NFT designed by me!</p>
        
        <button><span id='span'>Buy for $777 </span><i class="bi bi-box-arrow-up-right"></i></button></div>
      </div>

      <div className="card-1">
        <img src={nft2} alt="card-1"></img>
        <div className='text1'><h4>J Johnson Jr's Dream</h4>
        <p>Buy a collectible 1 of 1 NFT designed by me!</p>
        
        <button><span id='span'>Buy for $777 </span><i class="bi bi-box-arrow-up-right"></i></button></div>
      </div>

      <div className="card-1">
        <img src={nft3} alt="card-1"></img>
        <div className='text1'><h4>J Nike ZoomX Invincible Run Flyknit</h4>
        <p>New Nike running Shoes 💨</p>
        
        <button><span id='span'>Buy for $180 </span><i class="bi bi-box-arrow-up-right"></i></button></div>
      </div>

      <div id='last' className="card-1">
        <img src={msg} alt="card-1"></img>
        <div className='text1'><h4>Critique your running form 🏃</h4>
        <p>$10</p>
        </div>
        <button id='spana'><span >Request Me</span></button><br></br>
      </div>

      <div className="card-5">
        <a href='#'><i id="youtube" class="bi bi-youtube"></i><div className='crd5'><h2 id='crrd'>Workout Vlog #2</h2></div>
        <i id="low" class="bi bi-chevron-down"></i></a>
        </div>

        <div className="card-5">
        <a href='#'><i id="youtube" class="bi bi-youtube"></i><div className='crd5'><h2 id='crrd'>Youtube</h2></div>
        <i id="low" class="bi bi-chevron-down"></i></a>
        </div>

        <div id='last' className="card-1">
        <img src={msg} alt="card-1"></img>
        <div id='padding' className='text1'><h4>Link On Pillar</h4>
        <p id='ped'>Have your link on my Pillar page. I have 15k+ visits<br></br>$500</p>
        </div>
        <button id='spana'><span >Request Me</span></button><br></br>
      </div>

      <div id='last' className="card-1">
        <img src={msg} alt="card-1"></img>
        <div className='text1'><h4>Follow back</h4>
        <p>I’ll follow you back on ig<br></br>$222</p>
        </div>
        <button id='spana'><span >Request Me</span></button><br></br>
      </div>
      <div className="margin">
        
      </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
