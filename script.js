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

const inputName = document.getElementById('input');
const inputSelect = document.getElementById('select')
