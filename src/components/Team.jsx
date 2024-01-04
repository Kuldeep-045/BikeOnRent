import React from 'react'
import image from '../assets/pass.jpg'
import Top from './Top';
import Screen from './Screen';
import image1 from '../assets/FZ.jpg'

const Team = () => {
  return (
    <>
    <Top first={"Our Team"} image={image1} />
      <div id="team">
        <Member name={"Kuldeep"} position={"Founder & CEO"}/>
        <Member name={"Shanky"} position={"Business Owner"}/>
        <Member name={"Aman"} position={"Photographer"}/>
        <Member name={"Kabir"} position={"Bike Detailist"}/>
        <Member name={"Jonathan"} position={"Mechanic"}/>
        <Member name={"Peter"} position={"Menager"}/>
      </div>
      <Screen/>
    </>
  );
};

const Member = ({name, position}) => {
  return (
    <div>
      <article><img src={image} alt="ebvjc" /></article>
      <article>
        <h1>{name}</h1>
        <p>{position}</p>
      </article>
    </div>
  );
};


export default Team
