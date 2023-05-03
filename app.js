/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
const macKeyCodes = [
  {
    key: '`',
    keyShift: '~',
    en: '`',
    ru: 'ё',
    ruShift: 'Ë',
    enShift: '~',
    keyCode: 192,
    which: 192,
    code: 'Backquote',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '1',
    keyShift: '!',
    en: '1',
    ru: '1',
    ruShift: '!',
    enShift: '!',
    keyCode: 49,
    which: 49,
    code: 'Digit1',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '2',
    keyShift: '@',
    en: '2',
    ru: '2',
    ruShift: '"',
    enShift: '@',
    keyCode: 50,
    which: 50,
    code: 'Digit2',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '3',
    keyShift: '#',
    en: '3',
    ru: '3',
    ruShift: '№',
    enShift: '#',
    keyCode: 51,
    which: 51,
    code: 'Digit3',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '4',
    keyShift: '$',
    en: '4',
    ru: '4',
    ruShift: ';',
    enShift: '$',
    keyCode: 52,
    which: 52,
    code: 'Digit4',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '5',
    keyShift: '%',
    en: '5',
    ru: '5',
    ruShift: '%',
    enShift: '%',
    keyCode: 53,
    which: 53,
    code: 'Digit5',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '6',
    keyShift: '^',
    en: '6',
    ru: '6',
    ruShift: ':',
    enShift: '^',
    keyCode: 54,
    which: 54,
    code: 'Digit6',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '7',
    keyShift: '&',
    en: '7',
    ru: '7',
    ruShift: '?',
    enShift: '&',
    keyCode: 55,
    which: 55,
    code: 'Digit7',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '8',
    keyShift: '',
    en: '8',
    ru: '8',
    ruShift: '',
    enShift: '*',
    keyCode: 56,
    which: 56,
    code: 'Digit8',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '9',
    keyShift: '(',
    en: '9',
    ru: '9',
    ruShift: '(',
    enShift: '(',
    keyCode: 57,
    which: 57,
    code: 'Digit9',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '0',
    keyShift: ')',
    en: '0',
    ru: '0',
    ruShift: ')',
    enShift: ')',
    keyCode: 48,
    which: 48,
    code: 'Digit0',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '-',
    keyShift: '',
    en: '-',
    ru: '-',
    ruShift: '',
    enShift: '_',
    keyCode: 189,
    which: 189,
    code: 'Minus',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '=',
    keyShift: '+',
    en: '=',
    ru: '=',
    ruShift: '+',
    enShift: '+',
    keyCode: 187,
    which: 187,
    code: 'Equal',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'delete',
    keyShift: 'delete',
    en: 'delete',
    ru: 'delete',
    ruShift: 'delete',
    enShift: 'delete',
    keyCode: 8,
    which: 8,
    code: 'delete',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'tab',
    keyShift: 'tab',
    en: 'tab',
    ru: 'tab',
    ruShift: 'tab',
    enShift: 'tab',
    keyCode: 9,
    which: 9,
    code: 'tab',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'q',
    keyShift: 'Q',
    en: 'q',
    ru: 'й',
    ruShift: 'Й',
    enShift: 'Q',
    keyCode: 81,
    which: 81,
    code: 'KeyQ',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'w',
    keyShift: 'W',
    en: 'w',
    ru: 'ц',
    ruShift: 'Ц',
    enShift: 'W',
    keyCode: 87,
    which: 87,
    code: 'KeyW',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'e',
    keyShift: 'E',
    en: 'e',
    ru: 'у',
    ruShift: 'У',
    enShift: 'E',
    keyCode: 69,
    which: 69,
    code: 'KeyE',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'r',
    keyShift: 'R',
    en: 'r',
    ru: 'к',
    ruShift: 'К',
    enShift: 'R',
    keyCode: 82,
    which: 82,
    code: 'KeyR',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 't',
    keyShift: 'T',
    en: 't',
    ru: 'е',
    ruShift: 'Е',
    enShift: 'T',
    keyCode: 84,
    which: 84,
    code: 'KeyT',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'y',
    keyShift: 'Y',
    en: 'y',
    ru: 'н',
    ruShift: 'Н',
    enShift: 'Y',
    keyCode: 89,
    which: 89,
    code: 'KeyY',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'u',
    keyShift: 'U',
    en: 'u',
    ru: 'г',
    ruShift: 'Г',
    enShift: 'U',
    keyCode: 85,
    which: 85,
    code: 'KeyU',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'i',
    keyShift: 'I',
    en: 'i',
    ru: 'ш',
    ruShift: 'Ш',
    enShift: 'I',
    keyCode: 73,
    which: 73,
    code: 'KeyI',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'o',
    keyShift: 'O',
    en: 'o',
    ru: 'щ',
    ruShift: 'Щ',
    enShift: 'O',
    keyCode: 79,
    which: 79,
    code: 'KeyO',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'p',
    keyShift: 'P',
    en: 'p',
    ru: 'з',
    ruShift: 'З',
    enShift: 'P',
    keyCode: 80,
    which: 80,
    code: 'KeyP',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '[',
    keyShift: '{',
    en: '[',
    ru: 'х',
    ruShift: 'Х',
    enShift: '{',
    keyCode: 219,
    which: 219,
    code: 'BracketLeft',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: ']',
    keyShift: '}',
    en: ']',
    ru: 'ъ',
    ruShift: 'Ъ',
    enShift: '}',
    keyCode: 221,
    which: 221,
    code: 'BracketRight',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '\\',
    keyShift: '|',
    en: '\\',
    ru: '/',
    ruShift: '?',
    enShift: '|',
    keyCode: 220,
    which: 220,
    code: 'Backslash',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'capslock',
    keyShift: 'capslock',
    en: 'capslock',
    ru: 'capslock',
    ruShift: 'capslock',
    enShift: 'capslock',
    keyCode: 20,
    which: 20,
    code: 'capslock',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'a',
    keyShift: 'A',
    en: 'a',
    ru: 'ф',
    ruShift: 'Ф',
    enShift: 'A',
    keyCode: 65,
    which: 65,
    code: 'KeyA',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 's',
    keyShift: 'S',
    en: 's',
    ru: 'ы',
    ruShift: 'Ы',
    enShift: 'S',
    keyCode: 83,
    which: 83,
    code: 'KeyS',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'd',
    keyShift: 'D',
    en: 'd',
    ru: 'в',
    ruShift: 'В',
    enShift: 'D',
    keyCode: 68,
    which: 68,
    code: 'KeyD',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'f',
    keyShift: 'F',
    en: 'f',
    ru: 'а',
    ruShift: 'А',
    enShift: 'F',
    keyCode: 70,
    which: 70,
    code: 'KeyF',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'g',
    keyShift: 'G',
    en: 'g',
    ru: 'п',
    ruShift: 'П',
    enShift: 'G',
    keyCode: 71,
    which: 71,
    code: 'KeyG',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'h',
    keyShift: 'H',
    en: 'h',
    ru: 'р',
    ruShift: 'Р',
    enShift: 'H',
    keyCode: 72,
    which: 72,
    code: 'KeyH',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'j',
    keyShift: 'J',
    en: 'j',
    ru: 'о',
    ruShift: 'О',
    enShift: 'J',
    keyCode: 74,
    which: 74,
    code: 'KeyJ',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'k',
    keyShift: 'K',
    en: 'k',
    ru: 'л',
    ruShift: 'Л',
    enShift: 'K',
    keyCode: 75,
    which: 75,
    code: 'KeyK',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'l',
    keyShift: 'L',
    en: 'l',
    ru: 'д',
    ruShift: 'Д',
    enShift: 'L',
    keyCode: 76,
    which: 76,
    code: 'KeyL',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: ';',
    keyShift: ':',
    en: ';',
    ru: 'ж',
    ruShift: 'Ж',
    enShift: ':',
    keyCode: 186,
    which: 186,
    code: 'Semicolon',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: "'",
    keyShift: '"',
    en: "'",
    ru: 'э',
    ruShift: 'Э',
    enShift: '"',
    keyCode: 222,
    which: 222,
    code: 'Quote',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'return',
    keyShift: 'return',
    en: 'return',
    ru: 'return',
    ruShift: 'return',
    enShift: 'return',
    keyCode: 13,
    which: 13,
    code: 'return',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'shift',
    keyShift: 'shift',
    en: 'shift',
    ru: 'shift',
    ruShift: 'shift',
    enShift: 'shift',
    keyCode: 16,
    which: 16,
    code: 'shiftLeft',
    location: 1,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'z',
    keyShift: 'Z',
    en: 'z',
    ru: 'я',
    ruShift: 'Я',
    enShift: 'Z',
    keyCode: 90,
    which: 90,
    code: 'KeyZ',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'x',
    keyShift: 'X',
    en: 'x',
    ru: 'ч',
    ruShift: 'Ч',
    enShift: 'X',
    keyCode: 88,
    which: 88,
    code: 'KeyX',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'c',
    keyShift: 'C',
    en: 'c',
    ru: 'с',
    ruShift: 'С',
    enShift: 'C',
    keyCode: 67,
    which: 67,
    code: 'KeyC',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'v',
    keyShift: 'V',
    en: 'v',
    ru: 'м',
    ruShift: 'М',
    enShift: 'V',
    keyCode: 86,
    which: 86,
    code: 'KeyV',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'b',
    keyShift: 'B',
    en: 'b',
    ru: 'и',
    ruShift: 'И',
    enShift: 'B',
    keyCode: 66,
    which: 66,
    code: 'KeyB',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'n',
    keyShift: 'N',
    en: 'n',
    ru: 'н',
    ruShift: 'Н',
    enShift: 'N',
    keyCode: 78,
    which: 78,
    code: 'KeyN',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'm',
    keyShift: 'M',
    en: 'm',
    ru: 'ь',
    ruShift: 'Ь',
    enShift: 'M',
    keyCode: 77,
    which: 77,
    code: 'KeyM',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: ',',
    keyShift: '<',
    en: ',',
    ru: 'б',
    ruShift: 'Б',
    enShift: '<',
    keyCode: 188,
    which: 188,
    code: 'Comma',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '.',
    keyShift: '>',
    en: '.',
    ru: 'ю',
    ruShift: 'Ю',
    enShift: '>',
    keyCode: 190,
    which: 190,
    code: 'Period',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: '/',
    keyShift: '?',
    en: '/',
    ru: '.',
    ruShift: ',',
    enShift: '?',
    keyCode: 191,
    which: 191,
    code: 'Slash',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: true,
    repeat: false
  },
  {
    key: 'shift',
    keyShift: 'shift',
    en: 'shift',
    ru: 'shift',
    ruShift: 'shift',
    enShift: 'shift',
    keyCode: 16,
    which: 16,
    code: 'shiftRight',
    location: 2,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    repeat: false
  },
  {
    key: 'fn',
    keyShift: 'fn',
    en: 'fn',
    ru: 'fn',
    ruShift: 'fn',
    enShift: 'fn',
    keyCode: 0,
    which: 0,
    code: 'fn',
    location: 1,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: true,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'control',
    keyShift: 'control',
    en: 'control',
    ru: 'control',
    ruShift: 'control',
    enShift: 'control',
    keyCode: 17,
    which: 17,
    code: 'controlLeft',
    location: 1,
    altKey: false,
    ctrlKey: true,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'option',
    keyShift: 'option',
    en: 'option',
    ru: 'option',
    ruShift: 'option',
    enShift: 'option',
    keyCode: 18,
    which: 18,
    code: 'optionLeft',
    location: 1,
    altKey: true,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'command',
    keyShift: 'command',
    en: 'command',
    ru: 'command',
    ruShift: 'command',
    enShift: 'command',
    keyCode: 91,
    which: 91,
    code: 'commandLeft',
    location: 1,
    altKey: false,
    ctrlKey: false,
    metaKey: true,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'space',
    keyShift: null,
    en: null,
    ru: null,
    ruShift: null,
    enShift: null,
    keyCode: 32,
    which: 32,
    code: 'space',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'command',
    keyShift: 'command',
    en: 'command',
    ru: 'command',
    ruShift: 'command',
    enShift: 'command',
    keyCode: 93,
    which: 93,
    code: 'commandRight',
    location: 2,
    altKey: false,
    ctrlKey: false,
    metaKey: true,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'option',
    keyShift: 'option',
    en: 'option',
    ru: 'option',
    ruShift: 'option',
    enShift: 'option',
    keyCode: 18,
    which: 18,
    code: 'optionRight',
    location: 2,
    altKey: true,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'arrowLeft',
    keyShift: null,
    en: null,
    ru: null,
    ruShift: null,
    enShift: null,
    keyCode: 37,
    which: 37,
    code: 'arrowLeft',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'arrowUp',
    keyShift: null,
    en: null,
    ru: null,
    ruShift: null,
    enShift: null,
    keyCode: 38,
    which: 38,
    code: 'arrowUp',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'arrowDown',
    keyShift: null,
    en: null,
    ru: null,
    ruShift: null,
    enShift: null,
    keyCode: 40,
    which: 40,
    code: 'arrowDown',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  },
  {
    key: 'arrowRight',
    keyShift: null,
    en: null,
    ru: null,
    ruShift: null,
    enShift: null,
    keyCode: 39,
    which: 39,
    code: 'arrowRight',
    location: 0,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    languageKeyNeeded: false,
    repeat: false
  }
];

const wrapper = document.createElement('section');
wrapper.classList.add('wrapper');

const h1 = document.createElement('h1');
h1.classList.add('title');
h1.textContent = 'RSS Virtual Keyboard';

const form = document.createElement('form');
form.classList.add('form');
form.action = '';
form.method = 'post';

const textarea = document.createElement('textarea');
textarea.rows = '15';
textarea.cols = '72';
form.appendChild(textarea);
const currentContent = textarea.value;

let currentLanguage = localStorage.getItem('language') || 'en';
let isControlPressed = false;

const macLetterKeys = macKeyCodes.filter((key) => {
  return typeof key.key === 'string' && key.key.length === 1;
});

const macFuncionalKey = macKeyCodes.filter((key) => {
  return typeof key.key === 'string' && key.key.length > 1;
});

function isCapsOn() {
  const capsLockEnabled = window.getComputedStyle(document.querySelector('.keyboard'))['text-transform'] === 'uppercase';
  return capsLockEnabled;
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
  localStorage.setItem('language', currentLanguage);
  // eslint-disable-next-line no-console
  console.log(currentLanguage);

  const keyboardKeys = document.querySelectorAll('.keyboard .key');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < keyboardKeys.length; i++) {
    const key = keyboardKeys[i];
    const keyCode = key.getAttribute('data-key-code');
    const keyObj = macLetterKeys.find((k) => k.keyCode === parseInt(keyCode));
    // eslint-disable-next-line no-restricted-globals
    const isShiftPressed = event.shiftKey;
    let keyName = '';
    if (keyObj) {
      if (isShiftPressed) {
        keyName = currentLanguage === 'en' ? keyObj.enShift || keyObj.keyShift : keyObj.ruShift || keyObj.keyShift;
      } else {
        keyName = currentLanguage === 'en' ? keyObj.en || keyObj.key : keyObj.ru || keyObj.key;
      }
      if (key.classList.contains('ru')) {
        if (currentLanguage === 'en') {
          key.classList.remove('ru');
        }
      } else if (currentLanguage === 'ru') {
        key.classList.add('ru');
      }
    } else {
      keyName = key.textContent;
    }
    const span = key.querySelector('span');
    if (span) {
      span.textContent = keyName;
    }
  }

  const inputFields = document.querySelectorAll('input[type="text"], textarea');
  for (let i = 0; i < inputFields.length; i++) {
    const inputField = inputFields[i];
    if (currentLanguage === 'ru' && inputField.dataset.ru) {
      inputField.value = inputField.dataset.ru;
    } else {
      inputField.value = inputField.dataset.en;
    }
  }
  textarea.value = currentContent;
}

if (localStorage.getItem('language')) {
  currentLanguage = localStorage.getItem('language');
}

function generateKeyboard(macLetterKeys) {
  const keyboardDiv = document.createElement('div');
  keyboardDiv.classList.add('keyboard');
  let currentRowDiv = null;

  document.addEventListener('keydown', (event) => {
    if (event.code === 'ControlLeft' && !event.repeat) {
      isControlPressed = true;
    } else if (event.code === 'Space' && isControlPressed) {
      toggleLanguage();
      event.preventDefault();
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.code === 'ControlLeft') {
      isControlPressed = false;
    }
  });

  for (let i = 0; i < macLetterKeys.length; i++) {
    const keyCode = macLetterKeys[i].keyCode;
    const keyName = currentLanguage === 'en' ? macLetterKeys[i].en : macLetterKeys[i].ru;
    const code = macLetterKeys[i].code;
    const shiftKeyName = currentLanguage === 'en' ? macLetterKeys[i].enShift : macLetterKeys[i].ruShift;

    if (
      i === 0
        || code === 'Backquote'
        || code === 'tab'
        || code === 'capslock'
        || code === 'shiftLeft'
        || code === 'fn'
    ) {
      currentRowDiv = document.createElement('div');
      currentRowDiv.classList.add('key-row');
      keyboardDiv.appendChild(currentRowDiv);
    }

    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    keyDiv.classList.add(code);
    keyDiv.setAttribute('data-key-code', keyCode);
    keyDiv.innerHTML = `<span>${keyName}</span>`;
    currentRowDiv.appendChild(keyDiv);

    // eslint-disable-next-line no-inner-declarations
    function insertText(text) {
      const input = document.activeElement;
      if (!input || !('selectionStart' in input)) {
        return;
      }
      const startPos = input.selectionStart;
      const endPos = input.selectionEnd;
      const currentValue = input.value;
      input.value = `${currentValue.substring(0, startPos)}${text}${currentValue.substring(endPos)}`;
      // eslint-disable-next-line no-multi-assign
      input.selectionStart = input.selectionEnd = startPos + text.length;
    }
    keyDiv.addEventListener('click', (event) => {
      const target = event.target.closest('.key');
      if (!target) {
        return;
      }
      const keyCode = target.getAttribute('data-key-code');
      // eslint-disable-next-line no-unused-vars
      const key = macLetterKeys.find((k) => k.keyCode === parseInt(keyCode));
      const symbol = isCapsOn() ? shiftKeyName : keyName;
      insertText(symbol);
    });
  }

  return keyboardDiv;
}

const p = document.createElement('p');
p.classList.add('comment');
p.innerHTML = 'Клавиатура создана в <strong>macOS</strong>. <br>Для переключения языка: Нажмите <strong>control + space</strong>, <br>после чего <strong>control</strong> должен остаться активным, после чего необходимо повторно нажать <strong>space</strong> <br> <strong>ВАЖНО!!!</strong>есть бага с разметкой клавиатуры, <br>после использования кнопки Shift, а затем попвтке смены раскладки меняеятся язык ввода, <br>но сама раскладка остается неизменной, но если нажимать каждый раз после смены раскладки Shift повторно, то раскладка меняется<br>для проверки смены языка ввода в консоль выводится актальный язык';

document.body.appendChild(wrapper);
wrapper.appendChild(h1);
wrapper.appendChild(form);
const macKeyboard = generateKeyboard(macKeyCodes);
wrapper.appendChild(macKeyboard);
wrapper.appendChild(p);
textarea.focus();
const keys = document.querySelectorAll('.key');

const filteredKeys = [...keys].filter(key => {
  const keyCodeAttr = key.getAttribute('data-key-code');
  if (keyCodeAttr) {
    const keyCode = parseInt(keyCodeAttr);
    return macLetterKeys.some(key => key.keyCode === keyCode);
  }
  return false;
});

const filteredFunctionalKeys = [...keys].filter(key => {
  const keyCodeAttr = key.getAttribute('data-key-code');
  if (keyCodeAttr) {
    const keyCode = parseInt(keyCodeAttr);
    return macFuncionalKey.some(key => key.keyCode === keyCode);
  }
  return false;
});

filteredKeys.forEach(key => {
  key.addEventListener('click', (event) => {
    event.preventDefault();
    textarea.focus();
    const keyCodeAttr = key.getAttribute('data-key-code');
    if (keyCodeAttr) {
      const keyCode = parseInt(keyCodeAttr);
      const currentKey = macLetterKeys.find(key => key.keyCode === keyCode);
      const keyChar = currentKey[currentLanguage];
      textarea.value += keyChar;
    }
  });
});

filteredFunctionalKeys.forEach(key => {
  key.addEventListener('click', (event) => {
    event.preventDefault();
    textarea.focus();
    const keyCodeAttr = key.getAttribute('data-key-code');
    if (keyCodeAttr) {
      const keyCode = parseInt(keyCodeAttr);
      const currentKey = macFuncionalKey.find(key => key.keyCode === keyCode);
      // eslint-disable-next-line no-unused-vars
      const keyChar = currentKey[currentLanguage];

      if (keyCode === 8) {
        let startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;
        if (startPos === endPos) {
          // eslint-disable-next-line no-plusplus
          startPos--;
        }
        textarea.value = textarea.value.slice(0, startPos) + textarea.value.slice(endPos);
        textarea.selectionStart = startPos;
        textarea.selectionEnd = startPos;
      }

      if (keyCode === 9) {
        event.preventDefault();
        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;
        textarea.value = textarea.value.slice(0, startPos) + '\t' + textarea.value.slice(endPos);
        textarea.selectionStart = startPos + 1;
        textarea.selectionEnd = startPos + 1;
      }

      if (keyCode === 13) {
        event.preventDefault();
        textarea.value += '\n';
      }
      if (keyCode === 32) {
        textarea.value += ' ';
      }
      if (keyCode === 37) {
        const cursorPosition = textarea.selectionStart;
        if (cursorPosition > 0) {
          textarea.selectionStart = cursorPosition - 1;
          textarea.selectionEnd = cursorPosition - 1;
        }
      }
      if (keyCode === 38) {
        const cursorPosition = textarea.selectionStart;
        const currentLine = textarea.value.substr(0, cursorPosition).split('\n').length - 1;
        const currentLineStart = textarea.value.lastIndexOf('\n', cursorPosition - 1) + 1;
        // eslint-disable-next-line no-unused-vars
        const currentLineEnd = textarea.value.indexOf('\n', cursorPosition);
        const previousLineStart = textarea.value.lastIndexOf('\n', currentLineStart - 2) + 1;
        const previousLineEnd = textarea.value.indexOf('\n', currentLineStart - 1);
        if (currentLine > 0) {
          if (previousLineEnd === -1) {
            textarea.selectionStart = previousLineStart;
            textarea.selectionEnd = previousLineStart;
          } else {
            // eslint-disable-next-line max-len
            const offset = Math.min(cursorPosition - currentLineStart, previousLineEnd - previousLineStart);
            textarea.selectionStart = previousLineStart + offset;
            textarea.selectionEnd = previousLineStart + offset;
          }
        }
      }
      if (keyCode === 39) {
        const cursorPosition = textarea.selectionStart;
        if (cursorPosition < textarea.value.length) {
          textarea.selectionStart = cursorPosition + 1;
          textarea.selectionEnd = cursorPosition + 1;
        }
      }
      if (keyCode === 40) {
        const cursorPosition = textarea.selectionStart;
        const text = textarea.value;
        // eslint-disable-next-line no-unused-vars
        const lineIndex = text.substr(0, cursorPosition).split('\n').length - 1;
        const nextLineStartPosition = text.indexOf('\n', cursorPosition) + 1;
        const nextLineEndPosition = text.indexOf('\n', nextLineStartPosition);

        if (nextLineEndPosition === -1) {
          textarea.selectionStart = text.length;
          textarea.selectionEnd = text.length;
        } else {
          // eslint-disable-next-line max-len
          const newCursorPosition = nextLineStartPosition + (cursorPosition - nextLineEndPosition - 1);
          textarea.selectionStart = newCursorPosition;
          textarea.selectionEnd = newCursorPosition;
        }
      }
    }
  });
});

const shiftKey = document.querySelector('.key[data-key-code="16"]');

shiftKey.addEventListener('mousedown', () => {
  const language = currentLanguage === 'en' ? 'enShift' : 'ruShift';
  macLetterKeys.forEach(key => {
    const element = document.querySelector(`.key[data-key-code="${key.keyCode}"]`);
    if (element) {
      element.innerHTML = key[language];
    }
  });
});

shiftKey.addEventListener('mouseup', () => {
  const language = currentLanguage === 'en' ? 'en' : 'ru';
  macLetterKeys.forEach(key => {
    const element = document.querySelector(`.key[data-key-code="${key.keyCode}"]`);
    if (element) {
      element.textContent = key[language];
    }
  });
});

document.addEventListener('keydown', (event) => {
  const keyCode = event.keyCode;

  const key = document.querySelector(`.key[data-key-code="${keyCode}"]`);
  if (key) {
    key.classList.add('active');
  }

  if (event.keyCode === 16) {
    const language = currentLanguage === 'en' ? 'enShift' : 'ruShift';
    macLetterKeys.forEach(key => {
      const element = document.querySelector(`.key[data-key-code="${key.keyCode}"]`);
      if (element) {
        element.textContent = key[language];
      }
    });
  }
});

document.addEventListener('keyup', (event) => {
  const keyCode = event.keyCode;
  const key = document.querySelector(`.key[data-key-code="${keyCode}"]`);
  if (key) {
    key.classList.remove('active');
  }

  if (event.keyCode === 16) {
    const language = currentLanguage === 'en' ? 'en' : 'ru';
    macLetterKeys.forEach(key => {
      const element = document.querySelector(`.key[data-key-code="${key.keyCode}"]`);
      if (element) {
        element.textContent = key[language];
      }
    });
  }
});
