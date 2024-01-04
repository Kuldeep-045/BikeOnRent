import React from 'react'

import image from "../assets/Hunter.jpg"

const Top = ( {first}) => {
  return (
    <div id='top'>
        <section>

      <h1>{first}</h1>
      <p>Home / {first}</p>
        </section>
        <section>
            <img src={image} alt="Hunter" />
        </section>
    </div>
  )
}

export default Top
