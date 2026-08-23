let users = [
    { id: 1, name: "สมชาย", ageGroup: "18-25", score: 85 },
    { id: 2, name: "สมศรี", ageGroup: "ต่ำกว่า 18", score: 40 },
    { id: 3, name: "สมปอง", ageGroup: "26 ขึ้นไป", score: 60 }
];

// let ppScore = users.checkScore();
// function checkScore() {
//     Object.fromEntries(Object.entries(data).filter(([key, value]) => value > 50))
// }

// let ppScore = Object.fromEntries(Object.entries(users).filter(([key, value]) => value > 50))
// console.log(ppScore);

const filteredUsers = users.filter((users) => {
    return users.score > 50;
})
console.log(filteredUsers)

const updatedUsers = users.map((users) => {
    return {
        name : users.name,
        ageGroup : users.ageGroup,
        score : users.score + 50
    }        
})

console.log(updatedUsers)
function randomDiscount() {
    const randomNum = Math.floor(Math.random()*41) + 10;
    console.log(randomNum);
}

randomDiscount();

// const getFName = document.getElementById('inputFName');
// getFName.addEventListener('input', function(event) {
//     const FName = event.target.value;
//     console.log('Your First Name : ' + FName);

// })

// const getLName = document.getElementById('inputLName');
// getLName.addEventListener('input', function(event) {
//     const LName = event.target.value;
//     console.log('Your Last Name : ' + LName);

// })

const labelform = document.getElementById('labelfrom')
labelform.addEventListener('submit', function(event) {
    event.preventDefault();

    const FName = document.getElementById('inputFName').value;
    const LName = document.getElementById('inputLName').value;

    console.log('Your First Name : ' + FName);
    console.log('Your Last Name : ' + LName);
})
