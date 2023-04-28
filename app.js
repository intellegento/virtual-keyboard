const macKeyCodes = [
  { keyCode: 53, keyName: 'esc' },
  { keyCode: 122, keyName: 'F1' },
  { keyCode: 120, keyName: 'F2' },
  { keyCode: 99, keyName: 'F3' },
  { keyCode: 118, keyName: 'F4' },
  { keyCode: 96, keyName: 'F5' },
  { keyCode: 97, keyName: 'F6' },
  { keyCode: 98, keyName: 'F7' },
  { keyCode: 100, keyName: 'F8' },
  { keyCode: 101, keyName: 'F9' },
  { keyCode: 109, keyName: 'F10' },
  { keyCode: 103, keyName: 'F11' },
  { keyCode: 111, keyName: 'F12' },
  { keyCode: 105, keyName: 'F13' },
  { keyCode: 107, keyName: 'F14' },
  { keyCode: 113, keyName: 'F15' },
  { keyCode: 106, keyName: 'F16' },
  { keyCode: 64, keyName: '@' },
  { keyCode: 35, keyName: '#' },
  { keyCode: 36, keyName: '$' },
  { keyCode: 37, keyName: '%' },
  { keyCode: 94, keyName: '^' },
  { keyCode: 38, keyName: '&' },
  { keyCode: 42, keyName: '*' },
  { keyCode: 40, keyName: '(' },
  { keyCode: 41, keyName: ')' },
  { keyCode: 95, keyName: '_' },
  { keyCode: 43, keyName: '+' },
  { keyCode: 121, keyName: 'volume-up' },
  { keyCode: 122, keyName: 'volume-down' },
  { keyCode: 120, keyName: 'mute' },
  { keyCode: 144, keyName: 'num-lock' },
  { keyCode: 145, keyName: 'scroll-lock' },
  { keyCode: 91, keyName: 'command' },
  { keyCode: 93, keyName: 'command' },
  { keyCode: 224, keyName: 'command' },
  { keyCode: 16, keyName: 'shift' },
  { keyCode: 56, keyName: '*' },
  { keyCode: 48, keyName: ')' },
  { keyCode: 49, keyName: '!' },
  { keyCode: 50, keyName: '@' },
  { keyCode: 51, keyName: '#' },
  { keyCode: 52, keyName: '$' },
  { keyCode: 53, keyName: '%' },
  { keyCode: 54, keyName: '^' },
  { keyCode: 55, keyName: '&' },
  { keyCode: 57, keyName: '(' },
  { keyCode: 45, keyName: '_' },
  { keyCode: 61, keyName: '+' },
  { keyCode: 8, keyName: 'delete' },
  { keyCode: 9, keyName: 'tab' },
  { keyCode: 113, keyName: 'rewind' },
  { keyCode: 114, keyName: 'play-pause' },
  { keyCode: 115, keyName: 'fast-forward' },
  { keyCode: 119, keyName: 'eject' },
  { keyCode: 120, keyName: 'illumination-up' },
  { keyCode: 121, keyName: 'illumination-down' },
  { keyCode: 122, keyName: 'brightness-up' },
  { keyCode: 123, keyName: 'brightness-down' },
  { keyCode: 124, keyName: 'rewind' },
  { keyCode: 125, keyName: 'play' },
  { keyCode: 126, keyName: 'fast-forward' },
  { keyCode: 127, keyName: 'mute' },
  { keyCode: 128, keyName: 'unmute' },
  { keyCode: 129, keyName: 'repeat' },
  { keyCode: 130, keyName: 'shuffle' },
  { keyCode: 131, keyName: 'play-pause' },
  { keyCode: 132, keyName: 'previous' },
  { keyCode: 133, keyName: 'next' },
  { keyCode: 134, keyName: 'home' },
  { keyCode: 135, keyName: 'end' },
  { keyCode: 136, keyName: 'page-up' },
  { keyCode: 137, keyName: 'page-down' },
  { keyCode: 138, keyName: 'select' },
  { keyCode: 139, keyName: 'print' },
  { keyCode: 140, keyName: 'execute' },
  { keyCode: 141, keyName: 'snapshot' },
  { keyCode: 142, keyName: 'insert' },
  { keyCode: 143, keyName: 'delete' },
  { keyCode: 144, keyName: 'help' },
  { keyCode: 145, keyName: 'num-lock' },
  { keyCode: 186, keyName: ';' },
  { keyCode: 187, keyName: '=' },
  { keyCode: 188, keyName: ',' },
  { keyCode: 189, keyName: '-' },
  { keyCode: 190, keyName: '.' },
  { keyCode: 191, keyName: '/' },
  { keyCode: 192, keyName: '`' },
  { keyCode: 219, keyName: '[' },
  // { keyCode: 220, keyName: '\' },
  { keyCode: 221, keyName: ']' },
  { keyCode: 222, keyName: "'" },
  { keyCode: 32, keyName: 'space' }
]

// document.onkeypress = function (event) {
//     console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }
function generateKeyboard (macKeyCodes) {
  const keyboardDiv = document.createElement('div')
  keyboardDiv.classList.add('keyboard')
  let currentRowDiv = null

  for (let i = 0; i < macKeyCodes.length; i++) {
    const keyCode = macKeyCodes[i].keyCode
    const keyName = macKeyCodes[i].keyName

    if (i === 0 || keyCode === 53 || keyCode === 16) {
      currentRowDiv = document.createElement('div')
      currentRowDiv.classList.add('key-row')
      keyboardDiv.appendChild(currentRowDiv)
    }

    const keyDiv = document.createElement('div')
    keyDiv.classList.add('key')
    keyDiv.classList.add(keyName)
    keyDiv.setAttribute('data-key-code', keyCode)
    keyDiv.innerHTML = `${keyName}`
    currentRowDiv.appendChild(keyDiv)
  }

  return keyboardDiv
}

const macKeyboard = generateKeyboard(macKeyCodes)
document.body.appendChild(macKeyboard)
