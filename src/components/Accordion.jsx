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

const Accordion = (props) => {

  const [items, setItems] = useState(defaultItems);
  const [accordionState, setAccordionState] = useState(false)
  const expand = (e) => {
    e.preventDefault();

    let content = document.getElementById(props.content);
    let appendClass = accordionState ? 'hidden' : 'appear';
    let oldClass = accordionState ? 'appear' : 'hidden';
    content.classList.replace(oldClass, appendClass);
    setAccordionState(!accordionState);

    let listHolder = document.getElementById(props.content + '_append_list');
    items.forEach((item, i) => {
      let li = document.createElement('li');
      let star = document.createElement('span');
      star.setAttribute('class', 'star');
      star.appendChild(document.createTextNode('★'))
      li.appendChild(star)
      li.setAttribute('class', 'accordion_list_item')
      li.appendChild(document.createTextNode(item))
      window.setTimeout(function() {
        listHolder.appendChild(li);
      }, (i * 80))
      
    })
  }

  return (
    <div className={'accordion_container'}>
      <p className={'accordion_header'}>
        <span>{props.title}</span>
        <button className={'accordion_expand'} onClick={(e) => expand(e)}>{'>>'}</button>
        </p>
      <div className={'accordion_list hidden'} id={props.content}>
        <p className={'accordion_list_header'}>This is an accordion to show/hide lists</p>
        <ul className={'accordion_list_holder'} id={props.content + '_append_list'}>
        </ul>
      </div>
    </div>
  )
}

export default Accordion;