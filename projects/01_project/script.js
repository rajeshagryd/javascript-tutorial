//Change same button  
const istatus = document.querySelector('.istatus')
const btn = document.querySelector('#add')
let check = 0
btn.addEventListener('click', function () {
    if (!check) {
        istatus.innerHTML = 'Frineds';
        istatus.style.color = 'green'
        btn.innerHTML = 'Remove Friend'
        btn.style.background='#000';
        check = 1
    } else {
        istatus.innerHTML = 'Stranger';
        istatus.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        btn.style.background='cadetblue';
        check = 0
    }
})

// Heart bubling on double click
const love = document.querySelector('i')
const img = document.querySelector('img')
img.addEventListener('dblclick', function () {
    love.style.transform = 'translate(-50%, -50%) scale(1)'
    love.style.opacity = 0.8
    setTimeout(() => {
        love.style.opacity = 0
    }, 1000);
    setTimeout(() => {
    love.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 2000);
});

// Custom cursor
const main = document.querySelector('#main')
const handCursor = document.querySelector('.cursor');
main.addEventListener('mousemove', function (mousePosition) {
    // console.log(mousePosition);
    handCursor.style.left = mousePosition.x+'px'
    handCursor.style.top = mousePosition.y+'px'
})

// Multiple image hovering Animation

let elem = document.querySelectorAll('.elem')
let elemImage = document.querySelectorAll('.elemImage')
elem.forEach(element => {
    element.addEventListener("mouseover", function(){
        element.childNodes[3].style.opacity = 1
    })
    element.addEventListener("mouseout", function(){
        element.childNodes[3].style.opacity=1
    })
    element.addEventListener("mousemove", function(dets){
        element.childNodes[3].style.left = dets.x + 'px'
        element.childNodes[3].style.top = dets.y + 'px'
    })
});

// Insta story feature
let storyArr = [
    {dp:'https://www.sagarhospitals.in/brochure/blog/wp-content/uploads/2023/12/rohit-sharma-lives-in_8f4f19efa.jpg', story:'https://i0.wp.com/m.timesofindia.com/photo/105233114/105233114.jpg?strip=all'},
    {dp:'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR1h65X6WJgJLQX__Ji0g_l7lykHKgX2h9afpJHIvey6H-7-4S_ZYWAdW9LcbZ47tVFbEBpo46kWm0huBs', story:'https://kmb.kerala.gov.in/ckeditor/samples/fonts/wp-content/uploads/2023/12/tell-me-about-virat-kohli_db94baf76.jpg'},
    {dp:'https://c.ndtvimg.com/2021-10/nn6emufo_ms-dhoni-ipl_650x400_07_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605', story:'https://www.poornima.edu.in/wp-content/uploads/2023/10/date-of-birth-of-ms-dhoni_fe22c420d.jpg'},
    {dp:'https://img-mm.manoramaonline.com/content/dam/mm/mo/news/just-in/images/2023/12/21/sanju-samson-century-2112.jpg?w=575&h=299', story:'https://www.poornima.edu.in/wp-content/uploads/2023/09/sanju-samson-ipl_a7df1fe02.jpg'},
    {dp:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWBFU4C0V16qCcXTtaf0EksSiUPgHpHrGm486PGucK3f-svguy', story:'https://i2.wp.com/w0.peakpx.com/wallpaper/324/167/HD-wallpaper-kl-rahul-ipl-kxip.jpg?strip=all'}
]

const storiya = document.querySelector('#storiya')
let clutter = ''
storyArr.forEach((element, ids) => {
    clutter+= `<div class="story"><img src="${element.dp}" id="${ids}" alt=""></div>`;
});
storiya.innerHTML = clutter;

const story = document.querySelector('.story')
storiya.addEventListener('click', function (params) {
    document.querySelector('.full-screen').style.display = 'block' 
    document.querySelector('.full-screen').style.backgroundImage = `url(${storyArr[params.target.id].story}`;
    setTimeout(() => {
        document.querySelector('.full-screen').style.display = 'none'
    }, 3000);
})
