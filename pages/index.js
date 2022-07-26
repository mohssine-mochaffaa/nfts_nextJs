import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import TextTransition,{presets} from 'react-text-transition';
import {Link} from 'react-scroll';



export default function Home() {
  const texts = [
    "Celebrating 100-year anniversary of the discovery of Tutankhamun's tomb",
    "Exclusive and rare colorized pictures reveal incredible Detail",
    "Documenting the discovery of king tut's tomb 100 years ago",
    "Comming soon..."
  ];
  
  const [index,setIndex] = useState(0);
  const [toggle,setToggle] = useState(false)
  const [hide,setHide] = useState("none")
  useEffect(()=>{
    const intervalId = setInterval(()=>
      setIndex(index + 1),3500);
    return ()=> clearInterval(intervalId)
  },[index]);
  
  const toggleMenu =()=>{
    setToggle(!toggle)
  }

  useEffect(()=>{
    if (toggle) {
      setHide('flex')
    }else{
      setHide('none')
    }
  },[toggle]);
  return (
    <div className="App">

      <div className="header">
        <div className={styles.seccions}>
          <h2 className={styles.logoText}>TOMBS</h2>
          <div className={styles.parts}>
          <Link className={styles.pages} to="home" spy={true} smooth={true}><h3>Home</h3></Link>
          <Link className={styles.pages} to="about" spy={true} smooth={true}><h3>About</h3></Link>
            <Link className={styles.pages} to="nfts" spy={true} smooth={true}><h3>Featured</h3></Link>
            <Link className={styles.pages} to="team" spy={true} smooth={true}><h3>Team</h3></Link>
            <Link className={styles.pages} to="join" spy={true} smooth={true}><h3>Join</h3></Link>
            <img onClick={()=> toggleMenu()} className={styles.burger} src='./assets/menu.png' alt="" />
          </div>
        </div>
        <div className={styles.listContainer}>
        <div style={{display:hide}} className={styles.list}>          
        <Link className={styles.pages} to="home" spy={true} smooth={true}><h3>Home</h3></Link>
        <Link className={styles.pages} to="about" spy={true} smooth={true}><h3>About</h3></Link>
            <Link className={styles.pages} to="nfts" spy={true} smooth={true}><h3>Featured</h3></Link>
            <Link className={styles.pages} to="team" spy={true} smooth={true}><h3>Team</h3></Link>
            <Link className={styles.pages} to="join" spy={true} smooth={true}><h3>Join</h3></Link>
        </div>
        </div>
        <center id="home" className={styles.intro}>
        <div className={styles.intro}>
          <TextTransition className={styles.introText} springConfig={presets.stiff}>
            {texts[index % texts.length]}
          </TextTransition>
        </div>
        <button className='buy'>Buy on opencea</button>
        </center>
      <img className={styles.gif} src='./assets/myGif.gif' alt=""/>
      </div>
      <div className={styles.aboutContainer}>

<h1 className={styles.newH1} id='about'>ABOUT:</h1>
       <p>{"Discovery in Color is an NFT project made by a team of colorists from around the world pationated with history and addiction of clorization ,in a celebration of the 100 year anniversary of the discovery of all time . with a collection of rare colorized pictures from the discovery of the king Tutankamuns tomb 1925, taken from Harry Burton's original black and withe glass negatives . Now colorized ,thanks to colonization we can now see them exactly as they were discovered by Howard Carter and the local Egyptian people 100 years ago."}</p>
<h1 className={styles.newH1}>The colorization process:</h1>
<p>The colorization process uses digital tools to restore the damage that occurs to original negatives over time, then grafts individual layers of color into the original black and white photograph placing the viewer directly in the scene to provide a sense of realism and a glimpse at what the original photographer might have seen at the moment of discovery.</p>


<h1 className={styles.newH1} id='nfts'>Featured collection:</h1>
      <div className={styles.nftsContainer}>
      <div className={styles.gifContainer}>
      <img className={styles.gif1} src='./assets/gif1.gif' alt="" /><br />
      <img className={styles.gif1} src='./assets/gif2.gif' alt="" /><br />
      <img className={styles.gif1} src='./assets/gif3.gif' alt="" /><br />
      <img className={styles.gif1} src='./assets/gif4.gif' alt="" />
      </div>
      <p style={{margin:"5px",fontSize:"20px",marginTop:"-15px",marginBottom:"10px"}}>{"This project is done not to replace the original but to provide afresh perspective on the image. Often seeing these images with colour makes historical snapshots seemingly more current in their message."} <br /> {"There is no doubt that colour changes the balance and composition of the viewer's gaze, but it also opens up a wider world into the image."}</p>
      </div>


 
</div>



      <div className={styles.aboutContainer}>
<h1 className={styles.newH1} id='team'>TEAM:</h1>
<div className={styles.profiles}>
  <div className={styles.profile}>
    <img src='./assets/image1.png' alt=""/>
    <div className='name'>Creed</div>
    <div className='job'>Colorist</div>
    <div className={styles.media}>
      <a href="https://instagram.com/maximus.photo_restoral.zone?igshid=MDI0Mzk1ZWY=" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
      <a href=" https://discord.gg/MAXIMUS#2958" target="_blank" rel="noreferrer"><img src='./assets/discord.png' alt="" /></a>

    </div>

  </div>
  <div className={styles.profile}>
    <img src='./assets/image2.jpeg' alt=""/>
    <div className='name'>Theodore</div>
    <div className='job'>Photographer</div>
    <div className={styles.media}>
      <a href="https://www.facebook.com/PhotoRestorationRescue" target="_blank" rel="noreferrer"><img src='./assets/facebook.png' alt="" /></a>
      <a href="https://www.instagram.com/photo_restoration_rescue/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
      <a href="https://www.linkedin.com/in/theodore-photo-restoration-service-melbourne-4a55a2211/" target="_blank" rel="noreferrer"><img src='./assets/linkedin.png' alt="" /></a>
    </div>
  </div>
  <div className={styles.profile}>
    <img src='./assets/image3.jpeg' alt=""/>
    <div className='name'>Saira</div>
    <div className='job'>Digital colorist</div>
    <div className={styles.media}>
    <a href="https://www.instagram.com/colorizacoeshistoricas1/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
      <a href="https://www.reddit.com/user/Sairinha/" target="_blank" rel="noreferrer"><img src='./assets/reddit.png' alt="" /></a>
    </div>
  </div>
  <div className={styles.profile}>
    <img src='./assets/image4.jpeg' alt=""/>
    <div className='name'>Duan</div>
    <div className='job'>Digital colorist</div>
    <div className={styles.media}>
    <a href="https://www.facebook.com/vintageincolor" target="_blank" rel="noreferrer"><img src='./assets/facebook.png' alt="" /></a>
      <a href="https://www.instagram.com/vint.ageincolor/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
      <a href="https://www.tiktok.com/@vint.ageincolor" target="_blank" rel="noreferrer"><img src='./assets/tiktok.png' alt="" /></a>
    </div>
  </div>
  <div className={styles.profile}>
    <img src='./assets/image5.jpeg' alt=""/>
    <div className='name'>Mozart</div>
    <div className='job'>Digital colorist</div>
    <div className={styles.media}>
    <a href="https://www.instagram.com/mozart.baptista/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
    </div>
  </div>
  <div className={styles.profile}>
    <img src='./assets/mohssine.jpeg' alt=""/>
    <div className='name'>Mochaffaa</div>
    <div className='job'>Programmer / Developer</div>
    <div className={styles.media}>
    <a href="https://www.facebook.com/mohssine_mochaffaa" target="_blank" rel="noreferrer"><img src='./assets/facebook.png' alt="" /></a>
    <a href="https://www.instagram.com/mohssine_mochaffaa/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
      <a href="https://www.tiktok.com/@mohssine_dev" target="_blank" rel="noreferrer"><img src='./assets/tiktok.png' alt="" /></a>
    </div>
  </div>
  <div className={styles.profile}>
    <img className='rot' src='./assets/image6.jpeg' alt=""/>
    <div className='name'>Tata</div>
    <div className='job'>Co-founder</div>
    <div className={styles.media}>
    <a href="https://www.facebook.com/tahare.aboudamia96" target="_blank" rel="noreferrer"><img src='./assets/facebook.png' alt="" /></a>
    <a href="https://www.instagram.com/taharaboudamia/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
    <a href="https://twitter.com/geekiphon" target="_blank" rel="noreferrer"><img src='./assets/twitter.png' alt="" /></a>
    </div>
  </div>
</div>
<h1 className={styles.newH1} id='join'>Join:</h1>
<div className="socials">
<a href="https://web.facebook.com/Discoveryincolor" target="_blank" rel="noreferrer"><img src='./assets/facebook.png' alt="" /></a>
<a href="https://www.instagram.com/discovery_incolor" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
<a href=" https://twitter.com/ColorDiscovery" target="_blank" rel="noreferrer"><img src='./assets/twitter.png' alt="" /></a>
<a href=" https://discord.gg/BVCqajgkWt" target="_blank" rel="noreferrer"><img src='./assets/discord.png' alt="" /></a>
</div>
<h3 className={styles.footer}>©2022 by THE BOY KING LEGACY LLC </h3>

</div> 
    </div>
  )
}
