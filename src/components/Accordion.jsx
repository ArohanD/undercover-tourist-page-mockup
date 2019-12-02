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

  const [items, setItems] = useState(defaultItems);
  const [accordionState, setAccordionState] = useState(false)
  const expand = (e) => {
    e.preventDefault();

    let content = document.getElementById('accordion_content');
    let appendClass = accordionState ? 'hidden' : 'appear';
    let oldClass = accordionState ? 'appear' : 'hidden';
    content.classList.replace(oldClass, appendClass);
    setAccordionState(!accordionState);
  }

  return (
    <div className={'accordion_container'}>
      <p className={'accordion_header'}>
        <span>Don't forget to bring..</span>
        <button onClick={(e) => expand(e)}>{'. >>'}</button>
        </p>
      <div className={'accordion_list hidden'} id='accordion_content'>
        <p className={'accordion_list_header'}>This is an accordion to show/hide lists</p>
        <ul className={'accordion_list_holder'}>
          {
            items.map(item => 
            <li className={'accordion_list_item'}>
              <span className={'star'}>{'★'}</span>
              {item}
            </li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Accordion;