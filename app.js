const macKeyCodes = [
  { keyCode: 0x32, keyName: '`' },
  { keyCode: 0x12, keyName: '1' },
  { keyCode: 0x21, keyName: '2' },
  { keyCode: 0x22, keyName: '3' },
  { keyCode: 0x23, keyName: '4' },
  { keyCode: 0x14, keyName: '5' },
  { keyCode: 0x15, keyName: '6' },
  { keyCode: 0x17, keyName: '7' },
  { keyCode: 0x16, keyName: '8' },
  { keyCode: 0x1A, keyName: '9' },
  { keyCode: 0x19, keyName: '0' },
  { keyCode: 0x1B, keyName: '-' },
  { keyCode: 0x18, keyName: '=' },
  { keyCode: 0x33, keyName: 'delete' },

  { keyCode: 0x09, keyName: 'tab' },
  { keyCode: 0x0C, keyName: 'Q' },
  { keyCode: 0x0D, keyName: 'W' },
  { keyCode: 0x0E, keyName: 'E' },
  { keyCode: 0x0F, keyName: 'R' },
  { keyCode: 0x11, keyName: 'T' },
  { keyCode: 0x10, keyName: 'Y' },
  { keyCode: 0x20, keyName: 'U' },
  { keyCode: 0x22, keyName: 'I' },
  { keyCode: 0x1F, keyName: 'O' },
  { keyCode: 0x23, keyName: 'P' },
  { keyCode: 0x21, keyName: '[' },
  { keyCode: 0x1E, keyName: ']' },
  { keyCode: 0x3B, keyName: '\'' },

  { keyCode: 0x42, keyName: 'capslock' },
  { keyCode: 0x20, keyName: 'A' },
  { keyCode: 0x18, keyName: 'S' },
  { keyCode: 0x19, keyName: 'D' },
  { keyCode: 0x21, keyName: 'F' },
  { keyCode: 0x23, keyName: 'G' },
  { keyCode: 0x22, keyName: 'H' },
  { keyCode: 0x26, keyName: 'J' },
  { keyCode: 0x28, keyName: 'K' },
  { keyCode: 0x25, keyName: 'L' },
  { keyCode: 0x29, keyName: ';' },
  { keyCode: 0x27, keyName: '\'' },
  { keyCode: 0x0D, keyName: 'return' },

  { keyCode: 0x43, keyName: 'shift' },
  { keyCode: 0x06, keyName: 'Z' },
  { keyCode: 0x07, keyName: 'X' },
  { keyCode: 0x08, keyName: 'C' },
  { keyCode: 0x56, keyName: 'V' },
  { keyCode: 0x0B, keyName: 'B' },
  { keyCode: 0x06, keyName: 'N' },
  { keyCode: 0x0E, keyName: 'M' },
  { keyCode: 0x2F, keyName: ',' },
  { keyCode: 0x2C, keyName: '.' },
  { keyCode: 0x3D, keyName: '/' },
  { keyCode: 0x38, keyName: 'shift' },

  { keyCode: 0x7D, keyName: 'fn' },
  { keyCode: 0x39, keyName: 'control' },
  { keyCode: 0x3B, keyName: 'option' },
  { keyCode: 0x37, keyName: 'command' },
  { keyCode: 0x39, keyName: 'space' },
  { keyCode: 0x37, keyName: 'command' },
  { keyCode: 0x3B, keyName: 'option' },
  { keyCode: 0x7B, keyName: 'arrowleft' },
  { keyCode: 0x7E, keyName: 'arrowup' },
  { keyCode: 0x7D2, keyName: 'arrowdown' },
  { keyCode: 0x7C, keyName: 'arrowright' }
]

const macLetterKeys = macKeyCodes.filter(key => {
  return typeof key.keyName === 'string' && key.keyName.length === 1
})
function generateKeyboard (macLetterKeys) {
  const keyboardDiv = document.createElement('div')
  keyboardDiv.classList.add('keyboard')
  let currentRowDiv = null

  for (let i = 0; i < macLetterKeys.length; i++) {
    const keyCode = macLetterKeys[i].keyCode
    const keyName = macLetterKeys[i].keyName

    if (i === 0 || keyCode === 0x32 || keyCode === 0x09 || keyCode === 0x42 || keyCode === 0x43 || keyCode === 0x7D) {
      currentRowDiv = document.createElement('div')
      currentRowDiv.classList.add('key-row')
      keyboardDiv.appendChild(currentRowDiv)
    }

    const keyDiv = document.createElement('div')
    keyDiv.classList.add('key')
    keyDiv.classList.add(keyName)
    keyDiv.setAttribute('data-key-code', keyCode)
    keyDiv.innerHTML = `<span>${keyName}</span>`
    currentRowDiv.appendChild(keyDiv)
  }

  return keyboardDiv
}

const macKeyboard = generateKeyboard(macKeyCodes)
document.body.appendChild(macKeyboard)
