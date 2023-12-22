import '../Banner/Banner.css'
import Typed from 'typed.js';

import React, { useEffect, useRef } from 'react';
import animationData from '../../../public/animation/n7BOneHh2T.json';
import Lottie from 'lottie-web';

const Banner = () => {
    const animationContainer = useRef(null);
    const anim = useRef(null);
    const el = React.useRef(null);

    useEffect(() => {
        if (animationContainer.current) {
          if (anim.current) {
            anim.current.destroy();
            anim.current = null;
          }
          anim.current = Lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
          });
        }
        return () => {
          if (anim.current) {
            anim.current.destroy();
            anim.current = null;
          }
        };
      }, []);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['WELCOME TO OUR WEBSITE','Explore For More'],
          typeSpeed: 70,
          backSpeed:50,
          loop:true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
            
          };
        }, []);

    return (
        <div>
           <section className="home lg:flex-row flex-col-reverse">
                
                <div className="home-container">
                    <h3 className="">Hello, Friends</h3>
                    
                    <h3><span ref={el}></span></h3>
                    <p>Meet other Ama users like you. Get answers <br /> & discover new ways to use Ama !</p>
                    <div className="mt-5">
                        <a id='join-us' href="/Dashboard">Let’s Explore</a>
                    </div>

                   

                </div>
                <div className='lg:w-[500px]'>
          <div ref={animationContainer} />
        </div>
                
           </section>
           
        </div>
    );
};

export default Banner;

