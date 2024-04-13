const axios = require('axios')
const getUser = async (id) => {
    try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return res
    } catch (error) {
        console.log(error.message);
    }
}

const ids = [1,2,3,4,5,6,7,8,9]

Array.prototype.realforEach = async function(callback) {
    for(let i = 0; i < this.length; i++){
        await callback(this[i], i, this)
    }
}

ids.realforEach(async (id) => {
    const user = await getUser(id)
    console.log(user.data)
})





// const promises = ids.map((i) => getUser(i))
// const users = async () =>{
//     const results = await Promise.allSettled(promises)
//     const data = results.reduce((acc,curr) => {
//         if(curr.status === 'fulfilled'){
//         acc.push(curr.value.data)  
//         }
//         return acc;
//     },[])

//     console.log(data)
// }

// users();