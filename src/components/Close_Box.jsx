import React from 'react';

const Close_Box = () => {

  const closeBox = () => {
    let closeElement = document.getElementById('close_box');
    closeElement.classList.add('hidden');
  }

  return (
    <div className={'close_box_container'} id='close_box'>
      <p className={'close_box_title'}>Let's close this.</p>
      <p className={'close_box_text'}>(using the x in the corner)</p>
      <div className={'close_box_button'} onClick={closeBox}>
        <img src='Media/close-button.png' />
      </div>
    </div>
  )
}

export default Close_Box;