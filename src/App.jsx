// HomePage.js
import React, { Component } from "react";
import Slider from "react-slick"; // Import Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <div className='homepage'>
        <header className='header'>
          <div className='logo'>K-Store</div>
          <nav className='nav'>
            <a href='/'>Home</a>
            <a href='/products'>Products</a>
            <a href='/cart'>Cart</a>
            <a href='/login'>Login</a>
          </nav>
        </header>

        <div className='banner'>
          <h1>Welcome to K-Store</h1>
          <p>Explore our collection of K-Pop merchandise with the best deals around!</p>
        </div>

        <div className='product-discount'>
        <h2>Limited Time Offers</h2>
        <Slider {...settings}>
          {/* Carousel Item 1 */}
          <div className='carousel-item'>
            <img src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT05-rmlDCdtz5qFa-OMyeUGd7ejKwCmELeiEgnQnx2R95d9d3XdRpvGwGNToVnDg4A0gS4LGOD24CJ36AyZN1m8TL0jyKmb-SmUNfG--w&usqp=CAE' alt='Discounted Product 1' />
            <h4>Photocard ATEEZ X POTT R1</h4>
            <h5>Jongho</h5>
            <h3>20% DISCOUNT</h3>
          </div>

          {/* Carousel Item 2 */}
          <div className='carousel-item'>
            <img src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7eu7Wdjv67f6MQYh1J-7e-a3cFlGdkb5vsVCRhmyukjEBECQZlcZej5XyiP6dAlsMLKMtlOL1uWpcYv2m3fYnOTq8ZKp1nzT1uxAbHS4K&usqp=CAE' alt='Discounted Product 2' />
            <h4>(SEALED) Album BOYNEXTDOOR 2ND EP 'HOW'</h4>
            <h5>Sticker Ver.</h5>
            <h3>20% DISCOUNT</h3>
          </div>

          {/* Carousel Item 3 */}
          <div className='carousel-item'>
            <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8ori-BdVSuSFdNfzu1INDUdBU-ErcyIQ--DlvRYRaz8YB70rw_vGqKM2wbVV7O8BAVhblhz84riyqPveAdFXZxH-8PGv_Dr0Ej7RPxQTg&usqp=CAE' alt='Discounted Product 2' />
            <h4>Photocard NMIXX LD EVERLINE POB NAMIL</h4>
            <h5>Kyujin</h5>
            <h3>20% DISCOUNT</h3>
          </div>
        </Slider>
        </div>

        <div className="products">
          <h2>Available Products</h2>

          <div className='product-list'>
            <div className="hero">
              {/* Product 1 */}
              <div className='product-card'>
                <img src='https://kavesquare.com/cdn/shop/products/newjeans-2nd-ep-get-up-bunny-beach-bag-ver-523637.jpg?v=1688093714&width=360' alt='Product 1' />
                <div className='product-info'>
                  <h3>(SEALED) Album NewJeans 2ND EP 'GET UP'</h3>
                  <h4>Bunny Beach Bag Ver.</h4>
                  <p>$29.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
            
            <div className="hero">
                {/* Product 2 */}
                <div className='product-card'>
                <img src='https://www.musicplaza.com/cdn/shop/products/atezew_700x700.jpg?v=1579657378' alt='Product 2' />
                <div className='product-info'>
                  <h3>(PO) Lightstick ATEEZ 'LIGHTINY'</h3>
                  <h4>Ver. 1</h4>
                  <p>$39.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="hero">
              {/* Product 3 */}
              <div className='product-card'>
                <img src='https://m.en.sixkshop.com/web/product/big/202111/106098228e7cce0a6498461268cb3e6b.jpg' alt='Product 3' />
                <div className='product-info'>
                  <h3>(UNSEALED) 2022 Season's Greetings</h3>
                  <h4>ATEEZ</h4>
                  <p>$19.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="hero"> 
            {/* Product 4 */}
            <div className='product-card'>
                <img src='https://down-my.img.susercontent.com/file/my-11134207-7rasm-m0yn8aungfln8e_tn.webp' alt='Product 1' />
                <div className='product-info'>
                  <h3>(SEALED) Album BOYNEXTDOOR 3RD EP '19.99'</h3>
                  <h4>Clink Ver.</h4>
                  <p>$29.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="hero">
            {/* Product 5 */}
            <div className='product-card'>
                <img src='https://down-id.img.susercontent.com/file/fb33f305514e0cbc4d0505d2b342c984@resize_w900_nl.webp' alt='Product 1' />
                <div className='product-info'>
                  <h3>(SEALED) Album IU 5TH ALBUM 'LILAC'</h3>
                  <h4>HILAC Ver, BYLAC Ver.</h4>
                  <p>$29.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="hero">
            {/* Product 6 */}
            <div className='product-card'>
                <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTvIcmJ7Hmtfl2qn2QsAfxy5COSfUzSiTRzXpU_j5S58nscE_cnipj66veCnS3V5ajnZ2hgbONkrlLz_Hpr3gDIsU8s6ZmbBZA8Oq9SRhMdYIuUQxX6HifY&usqp=CAE' alt='Product 1' />
                <div className='product-info'>
                  <h3>(SEALED) Album ZEROBASEONE 'YOUTH IN THE SHADE'</h3>
                  <p>$29.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="hero">
              {/* Product 7 */}
              <div className='product-card'>
                <img src='https://down-id.img.susercontent.com/file/id-11134207-7r98q-lu91z4uilqawab' alt='Product 2' />
                <div className='product-info'>
                  <h3>(PO) Lightstick XIKERS 'Tricky Bong'</h3>
                  <h4>Ver. 1</h4>
                  <p>$39.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="hero">
              {/* Product 8 */}
              <div className='product-card'>
                <img src='https://cokodive.com/cdn/shop/files/SKZ_cdb271a2-f5a4-4df7-80ee-6cea00739058_1600x.png?v=1686896190' alt='Product 2' />
                <div className='product-info'>
                  <h3>(PO) Lightstick STRAYKIDS 'Nachimbong'</h3>
                  <h4>Ver. 2</h4>
                  <p>$39.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="hero">
              {/* Product 9 */}
              <div className='product-card'>
                <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSwQAYQ2ulzY30bU62Fq9ZjvWXaSpN_okxPXvw5PbEncCSWkKhGGL2H-ihfBrYQXXdCyglYXcG2CXad3kdY57il0wujLh1imRDukZ7ZnDlc5LVocelVF6jL&usqp=CAE' alt='Product 3' />
                <div className='product-info'>
                  <h3>Photocard IVE 2ND FANCLUB KIT FANKIT</h3>
                  <h4>Yujin, Gaeul</h4>
                  <p>$19.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="hero">
              {/* Product 10 */}
              <div className='product-card'>
                <img src='https://down-id.img.susercontent.com/file/id-11134207-7r991-lxdodcoa8wgrfe' alt='Product 3' />
                <div className='product-info'>
                  <h3>Photocard SEVENTEEN 95L [detail on desc]</h3>
                  <h4>Jeonghan</h4>
                  <p>$19.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="hero">
              {/* Product 11 */}
              <div className='product-card last-list'>
                <img src='https://media.karousell.com/media/photos/products/2024/2/25/enhypen_fate_in_seoul_zone_pho_1708842840_33629b09_progressive.jpg' alt='Product 3' />
                <div className='product-info'>
                  <h3>Photocard ENHYPEN 'FATE IN SEOUL'</h3>
                  <h4>All Member</h4>
                  <p>$19.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="hero">                
              {/* Product 12 */}
              <div className='product-card last-list'>
                <img src='https://cdn.myshoptet.com/usr/www.kpopstore.cz/user/shop/big/1780-5_le-sserafim-easy--3rd-mini-album-makestar-pre-order-benefit-.jpg?65dcbb8e ' alt='Product 3' />
                <div className='product-info'>
                  <h3>Photocard LE SSERAFIM Makestar 'EASY' PO Benefit</h3>
                  <h4>All Member</h4>
                  <p>$19.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

          </div>

        </div>

        
        <footer className='footer'>
          <p>Copyright &copy;2024 K-Store. All rights reserved.</p>
          <div className='social-media'>
            <a href='#'>Facebook</a>
            <a href='#'>Twitter</a>
            <a href='#'>Instagram</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;


