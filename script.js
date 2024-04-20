// let nums = [1,2,3,4,5,6,77]
// let total = nums.reduce((a,b) => a + b, 2)
// console.log(total);



// let nums = [1,2,3,4]
// let max = nums.reduce((a,b) => {
//     if (a > b) {
//         return a
//     } else {
//         return b
//     }
// })

// let min = nums.reduce((a,b) => {
//     if (a < b) {
//         return a
//     } else {
//         return b        
//     }
// })
// console.log(max,min);


// let arr = ["Vlad", "damir","akbar","samir","shoxrux","farzod"]
// let max = arr.reduce((a,b) => {
//     if (a.length > b.length) {
//         return a
//     } else {
//         return b
//     }
// })
// console.log(max);


// let max = arr.reduce((a,b) => {
//     if (a.length < b.length) {
//         return a
//     } else {
//         return b
//     }
// })

// console.log(max);




let users = [
    {
        name: "Vlad",
        age: 16,
        isMarried: false,
        country: "Uzbekistan",
    },
    {
        name: "Damir",
        age: 13,
        isMarried: false,
        country: "Uzbekistan",
    },
    {
        name: "Akbar",
        age: 12,
        isMarried: true,
        country: "Thailand",
    },
    {
        name: "Samir",
        age: 12,
        isMarried: true,
        country: "North Korea",
    },
    {
        name: "Shoxrux",
        age: 18,
        isMarried: false,
        country: "India",
    },
    {
        name: "Farzod",
        age: 20,
        isMarried: true,
        country: "UAE",
    },
]

//     let married = []
//     let notMarried = []
//     let average = 0

//     users.forEach((user) => {
//         if (user.isMarried === true) {
//             married.push(user.name)
//         } else {
//             notMarried.push(user.name)
//         }
//         average += user.age
//     })
//     average = average / users.length

//     console.log(married);
//     console.log(notMarried);
//     console.log(average);



    // let max = 0
    // let min = 0

    
    
    // let youngest = users[0].age
    
    
    // users.forEach((user) => {
        //     if(user.age < youngest){
            //         youngest = user.age
            //     }
            // })
            // console.log(youngest);
            
            
    
    // users.forEach((user) => {
        //     if (user.age === 0) {
            //         max.push(user.age)
            //     } 
            // })
            // console.log(max);


            
            /* dz */
    let max = users.reduce((a,b) => {
        if (a.age > b.age) {
            return a
        } else {
            return b
        }
    })

    let min = users.reduce((a,b) => {
        if (a.age < b.age) {
            return a
        } else {
            return b
        }
    })
    
    console.log('Самый старший', max.name , max.age)
    console.log('Самый младший', min.name , min.age)
