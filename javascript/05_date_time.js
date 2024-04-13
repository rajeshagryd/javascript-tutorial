let newDate = new Date() // Return Long Date and Time String
let now = new Date().getTime() / 1000;

let newDateFormat = newDate.toLocaleString('default',{
    hour: 'numeric',
    minute: '2-digit',
    weekday: 'long'
})

console.log(newDateFormat)