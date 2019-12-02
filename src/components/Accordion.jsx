import React, {useState} from 'react';

const defaultItems = [
  'Sriracha normcore snackwave',
  'listicle meditation',
  'williamsburg poke taxidermy',
  'tumblr chia',
  'Ugh plaid irony',
  'keffiyeh craft beer',
  'selvage hammock humblebrag',
  'leggings williamsburg',
  'direct trade lomo mlkshk',
  'Disrupt bushwick'
]

const Accordion = () => {

  const [items, setItems] = useState(defaultItems)

  return (
    <div className={'accordion_container'}>
      <p className={'accordion_header'}>Don't forget to bring...</p>
      <div className={'accordion_list'}>
        <p className={'accordion_list_header'}>This is an accordion to show/hide lists</p>
        <ul className={'accordion_list_holder'}>
          {
            defaultItems.map(item => <li className={'accordion_list_item'}>{item}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Accordion;