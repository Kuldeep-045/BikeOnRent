import React from 'react'
import image from '../assets/pass.jpg'
import Top from './Top';
import Screen from './Screen';

const Team = () => {
  return (
    <>
    <Top first={"Our Team"} />
      <div id="team">
        <Member name={"Kuldeep"} position={"Founder & CEO"}/>
        <Member name={"Kuldeep"} position={"Founder & CEO"}/>
        <Member name={"Kuldeep"} position={"Founder & CEO"}/>
        <Member name={"Kuldeep"} position={"Founder & CEO"}/>
        <Member name={"Kuldeep"} position={"Founder & CEO"}/>
        <Member name={"Kuldeep"} position={"Founder & CEO"}/>
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
