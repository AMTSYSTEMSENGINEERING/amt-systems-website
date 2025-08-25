import React, { useState } from "react";
import "./avis.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion'; 


function AvisSlider() {
    const [seeAll, setSeeAll] = useState(false);

    const user = [
        {
            media: <a href="#"><img  src="/twitter.png" alt="media" className="avis-media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Chowdeck is the best Cameroonian mobile app I have ever used.Yes quote me.", 

        },
        {
            media: <a href="#"><img  src="/twitter.png" alt="media"className="avis-media" /></a>,
            name: "Teffy Billion Dollars",
            pseudo: "@Jegc_tola",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "My smart home prototype whith real-time navigation just landed from AMT Lab and wowww!This is by far the most exciting tech drop I've had all week!", 

        },
        {
            media: <a href="#"><img  src="/face.png" alt="media" className="avis-media"/></a>,
            name: "##",
            pseudo: "@TheFisola",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Mobile App delivered in 2 days.They said :'pardon my lateness'", 

        },
        {
            media: <a href="#"><img  src="/insta.png" alt="media" className="avis-media"/></a>,
            name: "THEE AWAZI",
            pseudo: "@THEAWAZY",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "tech!!! super thrilled that I can now get custom devices from @AMT_Cameroun right here in Douala. Go team AMT", 

        },
        {
            media: <a href="#"><img src="/insta.png" alt="media" className="avis-media"/></a>,
            name: "Temz",
            pseudo: "@TheRealTemz",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Tech dey move! I wan test my smart device from AMT but I no fit stand-prototype don land before I blink! These AMT engineers be like ninjas whit soldering irons. Efficiency?Next level", 

        },
        {
            media: <a href="#"><img  src="/twitter.png" alt="media" className="avis-media"/></a>,
            name: "Wine",
            pseudo: "@RedWinee",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "I genuinely love @amt_service A top app whith thier web service ", 

        },
        {
            media: <a href="#"><img  src="/twitter.png" alt="media" className="avis-media"/></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        {
            media: <a href="#"><img src="/face.png" alt="media" className="avis-media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        {
            media: <a href="#"><img src="/twitter.png" alt="media" className="avis-media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        {
            media: <a href="#"><img  src="/insta.png" alt="media"className="avis-media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        {
            media: <a href="#"><img  src="/insta.png" alt="media" className="avis-media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        {
            media: <a href="#"><img  src="/twitter.png" alt="media" className="avis-media"/></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4, // Par défaut (écran large)
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1280, // < 1280px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024, // < 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640, // < 640px (mobile)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


  return (
    <div className="avis-slider">
      <h2 className="avis-title">What our clients are saying?</h2>
      <p className="avis-subtitle">
        We understand that if you are making money you will re-invest in your company
      </p>

      <div className="avis-container">
        {!seeAll ? (
          <Slider {...settings} className="avis-slider-track">
            {user.map((u, index) => (
              <motion.div 
               key={index} 
               className="avis-card"
               initial={{scale:0.7,opacity:1}}
               animate={{scale:1 , opacity:2}}
               transition={{duration:1 , ease:"easeOut"}}
               whileHover={{scale:1.2 }}
              >
                <div className="avis-card-header">
                  <img src={u.avatar} alt={u.name} className="avis-avatar" />
                  <div className="avis-user-info">
                    <h3 className="avis-name">{u.name}</h3>
                    <p className="avis-pseudo">{u.pseudo}</p>
                  </div>
                  <div className="avis-media">{u.media}</div>
                </div>
                <p className="avis-text">{u.text}</p>
              </motion.div>
            ))}
          </Slider>
        ) : (
          <div className="avis-all">
            {user.map((u, index) => (
              <motion.div 
               key={index} 
               className="avis-card"
               initial={{scale:0.7,opacity:1}}
               animate={{scale:1 , opacity:2}}
               transition={{duration:1 , ease:"easeOut"}}
               whileHover={{scale:1.2 }}
               >
                <div className="avis-card-header">
                  <img src={u.avatar} alt={u.name} className="avis-avatar" />
                  <div className="avis-user-info">
                    <h3 className="avis-name">{u.name}</h3>
                    <p className="avis-pseudo">{u.pseudo}</p>
                  </div>
                  <div className="avis-media">{u.media}</div>
                </div>
                <p className="avis-text">{u.text}</p>
              </motion.div>
            ))}
          </div>
        )}

        <div className="avis-button-wrapper">
          <button
            className="avis-button"
            onClick={() => setSeeAll(!seeAll)}
          >
            {seeAll ? "Close" : "See all reviews"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvisSlider;


