function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return 'HELLO'.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
  return string.toUpperCase()
}

function logWhisper(string) {
  console.log('hello')
  return 'HELLO'.toLowerCase()
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) return "I can't hear you!"
}
