
import React, { useState, useEffect } from 'react';
import style from "./Header.module.css";

function RestaurantStatus() {
  const [isOpen, setIsOpen] = useState(false);

  const [isCloseSoon, setIsCloseSoon] = useState(false);
  const [isOpenSoon, setIsOpenSoon] = useState(false);

  useEffect(() => {
    const checkRestaurantStatus = () => {
     

      const currentHour = new Date().getHours();
      const currentMinute = new Date().getMinutes();

      // Check if the current time is within the opening hours
      if (currentHour === 12 || (currentHour === 13 && currentMinute < 50) ) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }

      if (currentHour === 11 && currentMinute >= 50 && currentMinute < 60) {
        setIsOpenSoon(true);
      } else {
        setIsOpenSoon(false);
      }

      if (currentHour === 14 && currentMinute >= 50 && currentMinute < 60 ) {
        setIsCloseSoon(true);
      } else {
        setIsCloseSoon(false);
      }

    };

    // Check the restaurant status when the component mounts
    checkRestaurantStatus();

    // Check the restaurant status every minute
  
      const interval = setInterval(() => {
        checkRestaurantStatus();
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
   
    

    
    // Clean up the interval when the component unmounts
    
  }, []);

  
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();




  return (
    <div>
      { currentHour === 11 && currentMinute >= 50 && currentMinute < 60 && isOpenSoon ? (
          <section id={style.hour}>
          <ul>
              <li  id = {style.openSoon}>Abre  pronto</li>
          </ul>
      </section>
      ):
        
     ( currentHour >= 12 || currentHour === 13) && currentMinute < 50 && isOpen ? (
          <section id={style.hour}>
          <ul>
              <li  id = {style.open}>Abierto</li>
          </ul>
      </section>
      ) : currentHour === 14 && currentMinute >= 50 && currentMinute < 60 && isCloseSoon ? (
        <section id={style.hour}>
        <ul>
            <li id = {style.closeSoon}>Cierra pronto</li>
        </ul>
        </section>
      
      ) : (
        <section id={style.hour}>
        <ul>
            <li id = {style.close}>Cerrado</li>
        </ul>
    </section>
      )}
    </div>
  );
}

export default RestaurantStatus;
