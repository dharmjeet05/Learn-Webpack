import _ from 'lodash';
import './style.css';
import Settings from './settings.png';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Settings;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());