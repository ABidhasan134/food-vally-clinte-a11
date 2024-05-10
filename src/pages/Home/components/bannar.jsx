import React from "react";

const Bannar = () => {
  return (
    <div className="carousel w-full lg:mb-5 relative sm:-top-4 -top-3 md:top-1 lg:top-0 ">
      <div id="slide1" className="carousel-item relative w-full">
        {/* 1st slider */}
        <div
          className="hero min-h-[500px]"
          style={{
            backgroundImage:
              "url(https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Italian Cuisine</h1>
              <p className="mb-5">
                Pasta dishes: Spaghetti Carbonara, Fettuccine Alfredo, Lasagna
                Pizza varieties: Margherita, Pepperoni, Neapolitan isotto
                dishes: Risotto alla Milanese, Seafood Risotto
              </p>
              <button className="btn btn-primary">Get Started</button>
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
              "url(https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1645057933.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Indian Cuisine</h1>
              <p className="mb-5">
                Curries: Chicken Tikka Masala, Palak Paneer, Rogan Josh Biryani
                varieties: Chicken Biryani, Vegetable Biryani, Hyderabadi
                Biryani Street foods: Samosas, Chaat, Vada Pav
              </p>
              <button className="btn btn-primary">Get Started</button>
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
              "url(https://static01.nyt.com/images/2019/01/02/dining/02korai6/merlin_147967416_2c367d7a-0a38-494a-8825-19f0ac6eadcf-superJumbo.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Bangladesh cuisine</h1>
              <p className="mb-5">
                Biryani: Bangladeshi Biryani typically includes flavorful rice
                cooked with aromatic spices, meat (often chicken, beef, or
                mutton), and potatoes. Khichuri: A comfort food made with rice,
                lentils, and spices, often served during festivals or special
                occasions.
              </p>
              <button className="btn btn-primary">Get Started</button>
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
              "url(https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/en/a0000370_parts_580db8503c1ee.jpg?20201002142956&q=80&rw=686&rh=490)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Japanese Cuisine</h1>
              <p className="mb-5">
                Sushi types: Nigiri, Maki, Sashimi Ramen varieties: Shoyu, Miso,
                Tonkotsu Tempura dishes: Shrimp Tempura, Vegetable Tempura
              </p>
              <button className="btn btn-primary">Get Started</button>
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
    // <div>
    //     {/* 1st slider */}

    // </div>
  );
};

export default Bannar;
