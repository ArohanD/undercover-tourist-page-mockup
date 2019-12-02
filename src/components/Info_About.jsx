import React from 'react';

const dummyText = `Sriracha normcore snackwave listicle meditation, williamsburg poke taxidermy tumblr chia. Ugh plaid irony, keffiyeh craft beer selvage hammock humblebrag leggings williamsburg direct trade lomo mlkshk. Disrupt bushwick next level shaman kombucha pok pok meggings art party adaptogen affogato. Typewriter helvetica umami master cleanse palo santo. +1 taxidermy shabby chic drinking vinegar kale chips tofu. Slow-carb schlitz gentrify art party cold-pressed kale chips flexitarian disrupt distillery banjo normcore skateboard four dollar toast. Cloud bread hashtag four dollar toast drinking vinegar farm-to-table chartreuse quinoa biodiesel brunch waistcoat jianbing squid butcher. `

const Info_About = () => {
  return (
    <div className={'info_about_container'}>
      <p className={'info_about_h1'}>Packing for your Orlando Trip?</p>
      <p className={'info_about_h2'}>We can help you get ready.</p>
      <p className={'info_about_text'}>{dummyText}</p>
      <button className={'info_button'}>Continue Reading</button>
    </div>
  )
}

export default Info_About;