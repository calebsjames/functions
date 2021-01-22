const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(56)
console.log(dogAge)

///////////////////////////////////

const favoriteBreed = (dogBreed) => {
    if (dogBreed === "meow") {
        const statement = `I like cats`
        return statement
    } else {
        const statement = `My favorite dog breed is a ${dogBreed}`
        return statement
    }
    
    
}

const myFav = favoriteBreed("meow")
console.log(`When it comes to pets, ${myFav}`)

///////////////////////////////////


const add = (a, b, c) => {
    const addition = a + b + c
    
    return addition;
}

const added = add(1, 2, 3)
console.log(added)


///////////////////////////////////



const car = (speed, direction) => {

    const moving = `the car is moving ${direction} at ${speed} mph.`
    if (speed > 75) {
        return `${moving} Slow Down!`
    } else {
        return moving;
    }
}

console.log(car(85, "north"))






///////////////////////////////////




const evenOrOdd = (number) => {
    if (number % 2 === 0) {
        const Number = "Even"
        return Number
    } else {
        const Number = "Odd"
        return Number
    }
    
}

const evenOrOdd = (number) => {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
    
}

const numbers = [1, 2, 3, 4, 5, 6]


for (const numb of numbers) {
    console.log(evenOrOdd(numb))

}






///////////////////////////////////


const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */

const filterK = (data) => {
    let nonK = []
    
    for (let i = 0; i < data.length; i++) {
        if (!data[i].startsWith("k")) {
            nonK.push(data[i])   
        }
    }
    const filteredForK = nonK
    return filteredForK;
}

// console.log(filterK(words))

const joinWords = (filteredData) => {
    
    const filteredWords = filteredData
    const wordsString = filteredWords.join()
    
    return wordsString;
}


/*
Invoke the filtering function and store its return value
*/
const filteredK = filterK(words)


/*
Invoke the string building function, and pass the
return value of the previous function as an argument
*/
console.log(joinWords(filteredK))
console.log(joinWords(filterK(words)))







///////////////////////////////////



const catchFish = () => {
    
    return SOMETHING;
}