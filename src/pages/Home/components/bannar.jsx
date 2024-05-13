import React from "react";
import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <div className="carousel w-full lg:mb-5 relative sm:-top-4 -top-3 md:top-1 lg:top-2 ">
      <div id="slide1" className="carousel-item relative w-full">
        {/* 1st slider */}
        <div
          className="hero min-h-[500px]"
          style={{
            backgroundImage:
              "url(https://c8.alamy.com/comp/2BTXCHC/different-food-and-text-donate-on-wooden-background-top-view-donation-concept-2BTXCHC.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Sharing Food and Reduction Surplus</h1>
              <p className="mb-5">
              Nourish Together is a digital platform dedicated to fostering community-driven food sharing and reducing surplus across neighborhoods. By connecting individuals, businesses, and organizations, we aim to redistribute excess food to those in need while promoting sustainability and community resilience. Join us in creating a world where no one goes hungry, and surplus food finds its way to those who need it most.
              </p>
              <button className="btn bg-green-500 hover:bg-green-800 hover:text-white"><Link to="/availablefood">Show All</Link></button>
            </div>
          </div>
        </div>
        {/* 1st slider end */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        {/* 2nd slider */}
        <div
          className="hero min-h-[500px]"
          style={{
            backgroundImage:
              "url(https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczkyLXBtLTAxNjkyXzEucG5n.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Sharing Food and Reduction Surplus</h1>
              <p className="mb-5">
                CNourish Together is a digital platform dedicated to fostering community-driven food sharing and reducing surplus across neighborhoods. By connecting individuals, businesses, and organizations, we aim to redistribute excess food to those in need while promoting sustainability and community resilience. Join us in creating a world where no one goes hungry, and surplus food finds its way to those who need it most.
              </p>
              <button className="btn bg-green-500 hover:bg-green-800 hover:text-white"><Link to="/availablefood">Show All</Link></button>
            </div>
            {/* 2nd end */}
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        {/* 3rd slider */}
        <div
          className="hero min-h-[500px]"
          style={{
            backgroundImage:
              "url(https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/04/15/Pictures/_87112c3e-21bb-11e7-89d6-c3c500e93e5a.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Sharing Food and Reduction Surplus</h1>
              <p className="mb-5">
              Nourish Together is a digital platform dedicated to fostering community-driven food sharing and reducing surplus across neighborhoods. By connecting individuals, businesses, and organizations, we aim to redistribute excess food to those in need while promoting sustainability and community resilience. Join us in creating a world where no one goes hungry, and surplus food finds its way to those who need it most.
              </p>
              <button className="btn bg-green-500 hover:bg-green-800 hover:text-white"><Link to="/availablefood">Show All</Link></button>
            </div>
            {/* 3rd slider end */}
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div
          className="hero min-h-[500px]"
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEztR36AjPCYxDCkcfFPQDNdHCXwMs1QRn713x8cSSA&s)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Sharing Food and Reduction Surplus</h1>
              <p className="mb-5">
              Nourish Together is a digital platform dedicated to fostering community-driven food sharing and reducing surplus across neighborhoods. By connecting individuals, businesses, and organizations, we aim to redistribute excess food to those in need while promoting sustainability and community resilience. Join us in creating a world where no one goes hungry, and surplus food finds its way to those who need it most.
              </p>
              <button className="btn bg-green-500 hover:bg-green-800 hover:text-white"><Link to="/availablefood">Show All</Link></button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default Bannar;
