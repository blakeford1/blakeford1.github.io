let rangeOfCharacter = document.getElementById('rangeOfCharacter')
let numberOfCharacter = document.getElementById('numberOfCharacter')
let includeUppercaseElement = document.getElementById('includeUppercase')
let includeNumbersElement = document.getElementById('includeNumbers')
let includeSymbolsElement = document.getElementById('includeSymbols')
let form = document.getElementById('passwordGeneratorForm')
let passwordDisplay = document.getElementById('passwordDisplay')

var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
      arrayFromLowToHigh(58, 64)
    ).concat(
        arrayFromLowToHigh(94, 96
    ).concat(
        arrayFromLowToHigh(123, 126)
    ))

numberOfCharacter.addEventListener('input', syncCharacterAmount)
rangeOfCharacter.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    let characterAmount = numberOfCharacter.value
    let includeUppercase = includeUppercaseElement.checked   
    let includeNumbers = includeNumbersElement.checked 
    let includeSymbols = includeSymbolsElement.checked 
    let password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password 
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    
    var passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCodes = charCodes[Math.floor(Math.random() *
            charCodes.length )]
        passwordCharacters.push(String.fromCharCode(characterCodes))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    var array = []
    for (let i = low; i <= high; i++) { 
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    let value = e.target.value
    numberOfCharacter.value = value
    rangeOfCharacter.value = value
}