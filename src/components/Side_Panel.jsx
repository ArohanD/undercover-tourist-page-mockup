import React from 'react';

const Side_Panel = (props) => {
  return (
    <div className={'side_panel'}>
      <img className={'avatar'} src='./Media/avatar.jpg'></img>
      <p className={'side_panel_helper'}>Mail me an itinerary</p>

      <div>
        <form action='' className={'form_container'} >
          <div className={'form_row form_row_one'}>
            <div>
              <label>First Name</label>
              <input type='text' placeholder='Leap'></input>
            </div>

            <div>
              <label>Last Name</label>
              <input type='text' placeholder='Frog'></input>
            </div>
          </div>

          <div className={'form_row form_row_two'}>
            <div>
              <label>Address</label>
              <input type='text' placeholder='301 Frog Pond Road'></input>
            </div>
          </div>

          <div className={'form_row form_row_three'}>
            <div>
              <label>City</label>
              <input type='text' placeholder='Austin'></input>
            </div>

            <div>
              <label>State</label>
              <input type='text' placeholder='TX'></input>
            </div>

            <div>
              <label>Zip</label>
              <input type='text' placeholder='34210'></input>
            </div>
          </div>

          <div className={'form_row form_row_four'}>
            <div>
              <button className={'form_button'}>SIGN ME UP</button>
            </div>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Side_Panel;