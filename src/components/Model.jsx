import React, { useState, useEffect } from "react";
import { data } from "../data";
import image from "../assets/home.png";

const Model = () => {

    // "model":"Hunter",
    // "company":"Royal Enfield",
    // "year":"2019",
    // "price":"$2000",
    // "type":"sport",
    // "imgSrc":image1
  const [img, setImg] = useState(image);
  const [model, setModel] = useState("Hunter10");
  const [company, setCompany] = useState("Royal Enfield");
  const [year, setYear] = useState("2019");
  const [price, setPrice] = useState("2000");
  const [type, setType] = useState("sport");
  const [fuel, setFuel] = useState("petrol");
  const [gear, setGear] = useState("4");
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const changeImage = (newImagePath, data, index) => {
    setModel(data.model);
    setImg(data.imgSrc);
    setPrice(data.price);
    setCompany(data.company);
    setYear(data.year);
    setType(data.type);
    // setGear(data.gear);
    // setFuel(data.)
    setSelectedCardIndex(index);

  };

  useEffect(() => {
    console.log(model,img,price,company,year,type,gear);
  }, [model,img,price,company,year,type,fuel,gear]);

  return (
    <div id="model">
      <div className="modelTop">
        <h3>Vehicle Models</h3>
        <h1>Our rental fleet</h1>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next{" "}
          <br /> adventure or business trip
        </p>
      </div>

      <div className="modelDescription">
        <div className="bikeButton">
          {data.map((val, index) => (
            <Card
            key={val.model}
            name={val.model}
            image={val.imgSrc}
            data={val}
            changeImage={changeImage}
            additionalField={index === selectedCardIndex ? "selectBtn" : ""}
            index={index}
            />
          ))}
        </div>

        <img src={img} alt="Model" className="bikeImage" />

        <div className="bikeDetail">
          <CardDetail 
            model={model}
            company={company}
            year={year}
            price={price}
            type={type}
            fuel={fuel}
            gear={gear}
          />
        </div>
      </div>
    </div>
  );
};

const CardDetail = ({model,company,year,price,type,fuel,gear}) => {
  return (
    <div className="bikeDetail1">
      <div>
        <button>Rs {price}/ rent per day</button>
      </div>
      <div className="thirdDetail">
        <span>
          <p>Model</p>
          <p>{model}</p>
        </span>
        <span>
          <p>Company</p>
          <p>{company}</p>
        </span>
        <span>
          <p>Year</p>
          <p>{year}</p>
        </span>
        <span>
          <p>Type</p>
          <p>{type}</p>
        </span>
        <span>
          <p>Gear</p>
          <p>{gear}</p>
        </span>
        <span>
          <p>Fuel</p>
          <p>{fuel}</p>
        </span>
      </div>
      <div>
        <button>Reserve Now</button>
      </div>
    </div>
  );
};

const Card = ({ name, image, data, changeImage, additionalField, index }) => {
    return (
      <button
        className={additionalField}
        onClick={() => changeImage(image, data, index)}
      >
        {name}
      </button>
    );
  };
  
export default Model;





// import React, {  useState } from "react";


// import {data} from "../data";
// import image from "../assets/home.png"



// const Model = () => {

//     const [img,setImg] = useState(image)
//     const [model,setModel] = useState("Hunter10")

//     const changeImage = (newImagePath,data) => {
//         // console.log(data);
//         setModel(data.model)
//         setImg(newImagePath);
//         console.log(model);
//     };


//     return (
//         <div id="model">
//             <div className="modelTop">
//                 <h3>Vehicle Models</h3>
//                 <h1>Our rental fleet</h1>
//                 <p>
//                     Choose from a variety of our amazing vehicles to rent for
//                     your next <br /> adventure or business trip
//                 </p>
//             </div>

//             <div className="modelDescription">
//                 <div className="bikeButton">
//                     {data.map((val,index) => (
//                         <Card
//                             key={val.model}
//                             name={val.model}
//                             image={val.imgSrc}
//                             data={val}
//                             changeImage={changeImage}
//                             additionalField={index === 0 ? "selectBtn" : ""}
//                         />
//                     ))}
//                 </div>

//                 <img src={img} alt="Model" className="bikeImage" />

//                 <div className="bikeDetail">
//                         <CardDetail/>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const CardDetail=()=>{
//     return <div className="bikeDetail1">
//         <div>
//             <button>Rs price/ rent per day</button>
//         </div>
//         <div className="thirdDetail">
//             <span><p>Model</p><p>Audi</p></span>
//             <span><p>Company</p><p>Audi</p></span>
//             <span><p>Year</p><p>Audi</p></span>
//             <span><p>Type</p><p>Audi</p></span>
//             <span><p>Gear</p><p>Audi</p></span>
//             <span><p>Gear</p><p>Audi</p></span>
//         </div>
//         <div>
//         <button>Researve Now</button>
//         </div>
//     </div>
// }

// const Card = ({ name, image,data, changeImage, additionalField }) => {
//     return (
//         <button className={additionalField} onClick={() => changeImage(image,data)}>
//             {name}
//         </button>
//     );
// };

// export default Model;
