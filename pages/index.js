import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import TextTransition,{presets} from 'react-text-transition';
import {Link} from 'react-scroll';
import bg from "../public/assets/about.jpeg"
import bg4 from "../public/assets/about.jpg"
import bg2 from "../public/assets/coloriz.jpeg"
import bg3 from "../public/assets/restore.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Parallax,Background  } from 'react-parallax';





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
  const [cover,setCover] = useState('flex')
  const [navCol,setNavCol] = useState("rgba(2, 2, 2, 0.144)")
  const [navCol2,setNavCol2] = useState('')
  const [navCol3,setNavCol3] = useState('')
  const [myMenu,setMyMenu] = useState("./assets/menu2.png")



  const [index2, setIndex2] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex2(selectedIndex);
  };

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
  const doIt =()=>{
    const myInterval = setInterval(()=>{
      setCover('none');
      document.body.style.overflowY = "scroll";
    },5000)
    return ()=> clearInterval(myInterval);
  }
  useEffect(()=>{
    doIt();
  },[]);
  
  const changeValueonScroll = ()=>{
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setNavCol("rgba( 255, 255, 255, 0.35 )")
      setNavCol2('0 8px 32px 0 rgba( 31, 38, 135, 0.37 )')
      setNavCol3("blur( 4px )")
      setMyMenu("./assets/menu.png")
    }else{
      setNavCol("rgba(2, 2, 2, 0.144)")
      setMyMenu("./assets/menu2.png")

    }
  }


  useEffect(()=>{
    window.addEventListener('scroll',changeValueonScroll)
  },[])
  

  return (
    <div className="App">
<Head>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap" rel="stylesheet"/>

  <title>Discovery in color</title>
   <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
</Head>
<div style={{position:"sticky",top:0,zIndex:105}}>
<div id='nav' style={{backgroundColor:navCol,boxShadow:navCol2,backdropFilter:navCol3}} className={styles.seccions}>
          <h2 className={styles.logoText}><img className={styles.logoo} src="./assets/logo.png" alt="" /></h2>
          <div className={styles.parts}>
          <Link className={styles.pages} to="home" spy={true} smooth={true}><h7>Home</h7></Link>
          <Link className={styles.pages} to="about" spy={true} smooth={true}><h7>About</h7></Link>
          <Link className={styles.pages} to="overview" spy={true} smooth={true}><h7>C-process</h7></Link>
          <Link className={styles.pages} to="nfts" spy={true} smooth={true}><h7>Gallery</h7></Link>
          <Link className={styles.pages} to="team" spy={true} smooth={true}><h7>Team</h7></Link>
          <Link className={styles.pages} to="join" spy={true} smooth={true}><h7>Join</h7></Link>
            <img onClick={()=> toggleMenu()} className={styles.burger} src={myMenu} alt="" />
          </div>
        </div>

        <div style={{display:hide}} className={styles.listContainer}>
        <div className={styles.list}>          
        <Link className={styles.pages} to="home" spy={true} smooth={true}><h7>Home</h7></Link>
        <Link className={styles.pages} to="about" spy={true} smooth={true}><h7>About</h7></Link>
        <Link className={styles.pages} to="overview" spy={true} smooth={true}><h7>C-process</h7></Link>
            <Link className={styles.pages} to="nfts" spy={true} smooth={true}><h7>Gallery</h7></Link>
            <Link className={styles.pages} to="team" spy={true} smooth={true}><h7>Team</h7></Link>
            <Link className={styles.pages} to="join" spy={true} smooth={true}><h7>Join</h7></Link>
        </div>
        </div>
</div>
      <div className="header">
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


<div className={styles.parallaxContainer}>
<Parallax  blur={1} className={styles.parallaxImage}  bgImage={bg.src} strength={800}>
  <div id='about' className={styles.parallaxText}>
    <h1 className={styles.newH1}>About</h1>
  </div>
</Parallax>
<div style={{backgroundColor:"background-color:rgba(240, 248, 255, 0.849)"}}>
  <p>Discovery in Color is an NFT project made by a team of colorists from around the world passionate with history and addiction of clorization ,in a celebration of the 100 year anniversary of the discovery of all time . with a collection of rare colorized pictures from the discovery of the king Tutankamuns tomb 1925, taken from Harry Burton's original black and withe glass negatives . Now colorized ,thanks to colonization we can now see them exactly as they were discovered by Howard Carter and the local Egyptian people 100 years ago.</p>
</div>
<Parallax className={styles.parallaxImage} bgImage={bg3.src} strength={800}>
<div id='overview' className={styles.parallaxText}>
    <h1 className={styles.newH1}>Cprocess</h1>
  </div>
</Parallax>
<div style={{backgroundColor:"background-color:rgba(240, 248, 255, 0.849)"}}>
  <p>
  Since we discovered how to record light over a century ago, our first attempts at image manipulation was to overcome the limitations of black & white 
camera technology, so we could see the photograph in color. After all, color is the primary way we perceive the world around us. 
Back then, skilled artisans laboriously experimented with a variety of methods ( from painting to mechanical printing ) to add the color back into an 
original black white photograph manually, giving the photographs a stylised, but not realistic look. Today this craft known popularly as <span style={{color:"red"}}>colorization</span>
<h3 className={styles.newH2}>The colorization process:</h3>
The colorization process uses digital tools to restore the damage that occurs to original negatives over time, then grafts individual layers of color 
into the original black and white photograph placing the viewer directly in the scene to provide a sense of realism and a glimpse at what the original 
photographer might have seen at the moment of discovery.
  </p>
</div>
</div>



<Parallax className={styles.parallaxImage} bgImage={bg2.src} strength={800}>
<div id='nfts' className={styles.parallaxText}>
    <h1 className={styles.newH3}>Gallery</h1>
  </div>
</Parallax>


<div className={styles.nftsContainer}>
      <div className={styles.gifContainer}>


    <center>
    <div className={styles.gify}>
      <div>
      <img src="./assets/gif3.gif" alt="" />
      </div>
      <div>
      <img src="./assets/gif4.gif" alt="" />
      </div>
     </div>
    <div className={styles.bigSeccesion}>
    <div className={styles.gify2}>
      <div>
      <img src="./assets/gif6.png" alt="" />
      </div>
      <div>
      <img src="./assets/gif5.png" alt="" />
      </div>
     </div>
     <div className={styles.gify2}>
      <div>
      <img src="./assets/gif7.png" alt="" />
      </div>
      <div>
      <img src="./assets/gif8.png" alt="" />
      </div>
     </div>
    </div>
    </center>








      </div>
      <p style={{margin:"5px",fontSize:"20px",marginTop:"-15px",marginBottom:"10px"}}>{"This project is done not to replace the original but to provide a fresh perspective on the image. Often seeing these images with colour makes historical snapshots seemingly more current in their message."} <br /> {"There is no doubt that colour changes the balance and composition of the viewer's gaze, but it also opens up a wider world into the image."}</p>
      </div>












      <div style={{backgroundImage:`url(${bg4.src})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}} className={styles.teamContainer}>
<div className={styles.teamBackground}><br />
<h1 className={styles.newH3} id='team'>Team</h1><br /><br /><br /><br />
<div className={styles.profiles}>
  <div className={styles.profile}>
    <img src='./assets/image1.png' alt=""/>
    <div className={styles.name}>Creed</div>
    <div className={styles.job}>Colorist</div>
    <div className={styles.media}>
      <a href="https://instagram.com/maximus.photo_restoral.zone?igshid=MDI0Mzk1ZWY=" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
      <a href=" https://discord.gg/MAXIMUS#2958" target="_blank" rel="noreferrer"><img src='./assets/discord.png' alt="" /></a>

    </div>

  </div>
  <div className={styles.profile}>
    <img src='./assets/image2.jpeg' alt=""/>
    <div className={styles.name}>Theodore</div>
    <div className={styles.job}>Photographer</div>
    <div className={styles.media}>
      <a href="https://www.facebook.com/PhotoRestorationRescue" target="_blank" rel="noreferrer"><img src='./assets/facebook.png' alt="" /></a>
      <a href="https://www.instagram.com/photo_restoration_rescue/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
      <a href="https://www.linkedin.com/in/theodore-photo-restoration-service-melbourne-4a55a2211/" target="_blank" rel="noreferrer"><img src='./assets/linkedin.png' alt="" /></a>
    </div>
  </div>
  <div className={styles.profile}>
    <img src='./assets/image3.jpeg' alt=""/>
    <div className={styles.name}>Saira</div>
    <div className={styles.job}>Digital colorist</div>
    <div className={styles.media}>
    <a href="https://www.instagram.com/colorizacoeshistoricas1/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
      <a href="https://www.reddit.com/user/Sairinha/" target="_blank" rel="noreferrer"><img src='./assets/reddit.png' alt="" /></a>
    </div>
  </div>
  <div className={styles.profile}>
    <img src='./assets/image4.jpeg' alt=""/>
    <div className={styles.name}>Duan</div>
    <div className={styles.job}>Digital colorist</div>
    <div className={styles.media}>
    <a href="https://www.facebook.com/vintageincolor" target="_blank" rel="noreferrer"><img src='./assets/facebook.png' alt="" /></a>
      <a href="https://www.instagram.com/vint.ageincolor/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
      <a href="https://www.tiktok.com/@vint.ageincolor" target="_blank" rel="noreferrer"><img src='./assets/tiktok.png' alt="" /></a>
    </div>
  </div>
  <div className={styles.profile}>
    <img src='./assets/image5.jpeg' alt=""/>
    <div className={styles.name}>Mozart</div>
    <div className={styles.job}>Digital colorist</div>
    <div className={styles.media}>
    <a href="https://www.instagram.com/mozart.baptista/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
    </div>
  </div>
  <div className={styles.profile}>
    <img src='./assets/mohssine.jpeg' alt=""/>
    <div className={styles.name}>Mochaffaa</div>
    <div className={styles.job}>Programmer / Developer</div>
    <div className={styles.media}>
    <a href="https://www.facebook.com/mouhcine.mochaffaa" target="_blank" rel="noreferrer"><img src='./assets/facebook.png' alt="" /></a>
    <a href="https://www.instagram.com/mohssine_mochaffaa/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
      <a href="https://www.tiktok.com/@mohssine_dev" target="_blank" rel="noreferrer"><img src='./assets/tiktok.png' alt="" /></a>
    </div>
  </div>
  <div className={styles.profile}>
    <img className='rota' src='./assets/tata2.png' alt=""/>
    <div className={styles.name}>Tata</div>
    <div className={styles.job}>Co-founder</div>
    <div className={styles.media}>
    <a href="https://www.facebook.com/tahare.aboudamia96" target="_blank" rel="noreferrer"><img src='./assets/facebook.png' alt="" /></a>
    <a href="https://www.instagram.com/taharaboudamia/" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
    <a href="https://twitter.com/geekiphon" target="_blank" rel="noreferrer"><img src='./assets/twitter.png' alt="" /></a>
    </div>
  </div>
</div>
<h1 className={styles.newH3} id='join'>Join us</h1><br /><br /><br /><br />
<div className={styles.socials}>
<a href="https://web.facebook.com/Discoveryincolor" target="_blank" rel="noreferrer"><img src='./assets/facebook.png' alt="" /></a>
<a href="https://www.instagram.com/discovery_incolor" target="_blank" rel="noreferrer"><img src='./assets/instagram.png' alt="" /></a>
<a href=" https://twitter.com/ColorDiscovery" target="_blank" rel="noreferrer"><img src='./assets/twitter.png' alt="" /></a>
<a href=" https://discord.gg/BVCqajgkWt" target="_blank" rel="noreferrer"><img src='./assets/discord.png' alt="" /></a>
</div>
</div>
</div>
<div>
  <center><h2 className={styles.footer}>©2022 DISCOVERY IN COLOR LLC</h2> <img style={{width:"200px",marginTop:"-50px"}} src="./assets/footerLogo.png" alt="" /></center>
</div>




















<div style={{display:cover}} className={styles.cover}>
  <div className={styles.circle}>
    <div className={styles.circle2}>
    <div className={styles.circle3}></div>

    </div>
  </div>
</div>



    </div>
  )
}
