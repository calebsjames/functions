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

////////////////////////


const add = (a, b, c) => {
    const addition = a + b + c
    
    return addition;
}

const added = add(1, 2, 3)
console.log(added)


/////////////////////////////////