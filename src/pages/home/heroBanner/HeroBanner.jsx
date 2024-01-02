import React, { useState , useEffect } from 'react';
import { easeInOut, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { HiOutlineSearch } from "react-icons/hi";

import "./HeroBannerStyle.scss";
import Img from "../../../components/lazyLoaderImage/img.jsx";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import useFetch from '../../../hooks/useFetch';

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query , setQuery] = useState("");
    const navigate = useNavigate();
    const {url} = useSelector((state) => state.home);
    const {data , loading} = useFetch("/movie/upcoming")
    const [mousePosition , setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const[cursorVariant , setCursorVariant] = useState("default");

    // console.log(mousePosition);
    useEffect(() =>{
        const mouseMove = Event => {
            setMousePosition({
                x:Event.clientX,
                y:Event.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove);


        return ()=>{
            window.removeEventListener("mousemove" ,mouseMove);
        }

    } ,[]);

    const variants ={
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
            transition: easeInOut
        },
        text:{
            height:100,
            width:100,
            x: mousePosition.x -75,
            y: mousePosition.y -75,
            backgroundSize: 'cover',
            mixBlendMode: 'screen'
            
        }
    }

    const textEnter =() =>{
        setCursorVariant("text");
    }
    const textLeave =() =>{
        setCursorVariant("default");
    }
    

    useEffect(() =>{
        const updateBackground = () => {

            const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
            setBackground(bg);
        };
        updateBackground();
        const intervalId = setInterval(updateBackground, 10000);
        return () => clearInterval(intervalId);
    }, [data])

    const searchQueryHandler = (Event) => {

        if(Event.key === "Enter" && query.length > 0){
              navigate(`/search/${query}`);
        }
    }

    
  return (
   <div className='heroBanner'>
    {
        !loading &&  <div className="backdrop-img">
        <Img src={background} />
    </div>
    }
    <div className="opacity-layer"></div>
   <ContentWrapper>
    
        <div className='heroBannerContent'>
            <span className='title'>
                {/* <img src={logo} alt="" /> */}
                <h1>Theatre</h1>
            </span>
            <span onMouseEnter={textEnter} onMouseLeave={textLeave} className='subTitle'>
            Discover, Watch, Enjoy!
            </span>
            <motion.div
            className='light'
            variants={variants}
            animate={cursorVariant}
            />
            <div className='searchInput'>
                <input
                 type='text'
                 placeholder='Search Binge watch'
                 onKeyUp={searchQueryHandler}
                 onChange={(Event)=>{
                    setQuery(Event.target.value)
                 }}
                 />
                <button>
                    <span>
                        <HiOutlineSearch />
                    </span>
                    {/* <img src={searchIcon} alt="" /> */}
                </button>
            </div>
        </div>
   </ContentWrapper>
   </div>
  );
}

export default HeroBanner;