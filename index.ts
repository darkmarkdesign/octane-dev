//IMPORTS
import { gsap } from "gsap";
    
import { CustomEase } from "gsap/CustomEase";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,TextPlugin,CustomEase);
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


//Test Animation
gsap.to('.menu_gl',{
    opacity: 0,
    ease: 'power2.out',
    duration: 7
})
