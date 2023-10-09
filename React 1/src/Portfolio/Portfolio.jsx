import React, { useState, useRef } from 'react';
import img1 from '../assets/cabin.png'
import img2 from '../assets/cake.png'
import img3 from '../assets/circus.png'
import img4 from '../assets/game.png'
import img5 from '../assets/safe.png'
import img6 from '../assets/submarine.png'
import Item from '../Item/Item'
import classNames from 'classnames';



export default function Portfolio() {
  const items = [
    {
      image:img1,
      title:"LOG CABIN"
    },
    {
      image:img2,
      title:"TASTY CAKE"
    },
    {
      image:img3,
      title:"CIRCUS TENT"
    },
    {
      image:img4,
      title:"CONTROLLER"
    },
    {
      image:img5,
      title:"LOCKED SAFE"
    },
    {
      image:img6,
      title:"SUBMARINE"
    }
    ];
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const lightboxRef = useRef(null);
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setLightboxIsOpen(true);
  };

  const handleLightboxClose = (event) => {
    const lightboxContent = document.querySelector('.lightbox-content');
    const isCloseButton = event.target.closest('.close-button');
    if (isCloseButton || !lightboxContent.contains(event.target)) {
      setLightboxIsOpen(false);
    }
  };

  return <>
<section className="page-section portfolio position-relative" id="portfolio">
  <div className="container">
    {/* Portfolio Section Heading*/}
    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
    {/* Icon Divider*/}
    <div className="divider-custom">
      <div className="divider-custom-line" />
      <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
      <div className="divider-custom-line" />
    </div>
    {/* Portfolio Grid Items*/}
    <div className="row justify-content-center">
    <Item items={items} handleImageClick={handleImageClick} />
      {lightboxIsOpen && (
        <div className="imageShadow row  justify-content-center align-items-center" onClick={handleLightboxClose}>
<div ref={lightboxRef} id="lightbox" className={classNames('lightbox', 'rounded-0', 'row', 'align-items-center', 'flex-column', { 'is-open': lightboxIsOpen })} onClick={(event) => event.stopPropagation()} >
      
         

          <div className="divider-custom">
    
          </div>
          <div className="lightbox-content"> 
            <img
              className='w-75 rounded-0'
              src={items[selectedImageIndex].image}
            />
         
  
          </div>
        </div>
        </div>
      )}
    </div>
  </div>
</section>



  
  
  </>

}
