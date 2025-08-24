import React, { useState } from "react";
import "./avis.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AvisSlider() {
    const [seeAll, setSeeAll] = useState(false);

    const user = [
        {
            media: <a href="#"><img className="rounded-md"style={{borderRadius:'50px',}} src="/twitter.png" alt="media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Chowdeck is the best Cameroonian mobile app I have ever used.Yes quote me.", 

        },
        {
            media: <a href="#"><img className="rounded-md" src="/twitter.png" alt="media" /></a>,
            name: "Teffy Billion Dollars",
            pseudo: "@Jegc_tola",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "My smart home prototype whith real-time navigation just landed from AMT Lab and wowww!This is by far the most exciting tech drop I've had all week!", 

        },
        {
            media: <a href="#"><img className="rounded-md " src="/twitter.png" alt="media" /></a>,
            name: "##",
            pseudo: "@TheFisola",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Mobile App delivered in 2 days.They said :'pardon my lateness'", 

        },
        {
            media: <a href="#"><img className="rounded-md" src="/twitter.png" alt="media" /></a>,
            name: "THEE AWAZI",
            pseudo: "@THEAWAZY",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "tech!!! super thrilled that I can now get custom devices from @AMT_Cameroun right here in Douala. Go team AMT", 

        },
        {
            media: <a href="#"><img className="rounded-md" src="/twitter.png" alt="media" /></a>,
            name: "Temz",
            pseudo: "@TheRealTemz",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Tech dey move! I wan test my smart device from AMT but I no fit stand-prototype don land before I blink! These AMT engineers be like ninjas whit soldering irons. Efficiency?Next level", 

        },
        {
            media: <a href="#"><img className="rounded-md" src="/twitter.png" alt="media" /></a>,
            name: "Wine",
            pseudo: "@RedWinee",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "I genuinely love @amt_service A top app whith thier web service ", 

        },
        {
            media: <a href="#"><img className="rounded-md" src="/twitter.png" alt="media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        {
            media: <a href="#"><img className="rounded-md" src="/twitter.png" alt="media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        {
            media: <a href="#"><img className="rounded-md" src="/twitter.png" alt="media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        {
            media: <a href="#"><img className="rounded-md" src="/twitter.png" alt="media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        {
            media: <a href="#"><img className="rounded-md" src="/twitter.png" alt="media" /></a>,
            name: "Fa",
            pseudo: "@victofetanmi",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "Excellent service, très !", 

        },
        {
            media: <a href="#"><img className="rounded-md" src="/twitter.png" alt="media" /></a>,
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
        
        <div className="bg-blue-800 p-7 avis_slider">
            <h2 className="flex flex-col items-center justify-center text-white text-2xl font-bold mt-2.5 mb-5.5">
                What our client are saying?
            </h2>
            <p className="flex flex-col items-center justify-center text-white mb-3.5">
                We understand that if you are making money you will re-invest in your company
            </p>
            <div className="w-3/4 m-auto">
                {!seeAll ? (
                    <Slider {...settings} className="display-flex">
                        {user.map((u, index) => (
                            <div key={index} className="bg-white p-4 m-2 rounded-lg shadow-lg  w-auto max-w-sm break-words block">
                                <div className="flex items-center gap-3 mb-2 div2">
                                    <img src={u.avatar} alt={u.name} className="rounded-full w-10  avatar" />
                                    <div className="w-full max-w-sm break-words">
                                        <h3 className="font-semibold w-full max-w-full  breack-words text-sm,text-xs   ">{u.name}</h3>
                                        <p className="avis-pseudo text-sm text-gray-500  breack-words text-sm,text-xs " >{u.pseudo}</p>
                                    </div>
                                    <div className="w-10  ">{u.media}</div>
                                </div>
                                <p className="avis-text">{u.text}</p>
                            </div>
                        ))}
                    </Slider>
                ) : ( 
                    <div className="flex flex-wrap justify-center gap-4 w-4/4">
                        {user.map((u, index) => (
                            <div key={index} className="bg-white p-4 m-2 rounded-lg shadow-lg avis-card w-60 display-flex ">
                                <div className="flex items-center gap-3 mb-2 ">
                                    <img src={u.avatar} alt={u.name} className="rounded-full w-10" />
                                    
                                    <div >
                                        <h3 className="font-semibold">{u.name}</h3>
                                        <p className="avis-pseudo text-sm text-gray-500">{u.pseudo}</p>
                                    </div>
                                    <div className=" ml-6 w-3xl  ">{u.media}</div>
                                </div>
                                <p className="avis-text">{u.text}</p>
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-white text-blue-800 px-4 py-2 rounded font-bold shadow hover:bg-blue-100 transition"
                        onClick={() => setSeeAll(!seeAll)}
                    >
                        {seeAll ? "close" : "See all reviews"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AvisSlider;


