import React from 'react';
import imgs from '../assets/a.svg';




export default function Home() {
  return <> <header className="masthead position-relative bg-primary text-white text-center d-flex align-items-center justify-content-center vh-100">
  <div className="container d-flex align-items-center justify-content-center flex-column">
    <img className="masthead-avatar mb-5" src={imgs} alt />
    <h1 className="masthead-heading text-uppercase mb-0">Start React</h1>
    <div className="divider-custom divider-light">
      <div className="divider-custom-line" />
      <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
      <div className="divider-custom-line" />
    </div>
    <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
  </div>
</header>

    </>
  
}
