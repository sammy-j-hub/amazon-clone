import React from "react";
import Product from "../Product/Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg"
          alt=""
        />
        <div className="home__row">
          {/*Product */}
          <Product
            id="1"
            title="Redmi Note 9 (Pebble Grey, 4GB RAM 64GB Storage) - 48MP Quad Camera & Full HD+ Display"
            price={11999}
            image="https://images-na.ssl-images-amazon.com/images/I/81mtDLql%2BXL._SL1500_.jpg"
            rating={4}
          />
          {/*Product */}
          <Product
            id="2"
            title="Solimo Wi-Fi Smart Light, 9W, B22 Holder, Alexa Enabled (Yellow/Light Yellow/White)"
            price={629}
            image="https://images-na.ssl-images-amazon.com/images/I/61bw%2B7cP-0L._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          {/*Product */}
          <Product
            id="3"
            title="ZOSOE Milk Frother Electric Foam Maker "
            price={249}
            image="https://images-na.ssl-images-amazon.com/images/I/41Xek-y5a5L.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="Casa Azul Non-Stick 6 Cup Muffin Pan with Free 60pcs Muffin Liners "
            price={299}
            image="https://images-na.ssl-images-amazon.com/images/I/91WGMpVp%2BvL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="LG 215 L 4 Star Inverter Direct Cool Single Door Refrigerator (GL-B221AASY, Amber Steel)"
            price={16499}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2Bu%2Bz0uJZL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          {/*Product */}
          <Product
            id="6"
            title="Natraj Exports Wooden Five Seater Sofa Set for Living Room | 5 Seater Sofa for Office & Lounge"
            price={18000}
            image="https://image.made-in-china.com/202f0j00WaLUFqgBsurh/Corner-Group-Modern-Sofa-Set-3PCS-Sectional-Sofas-Sectionals-Living-Room-Furniture-Modern.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
