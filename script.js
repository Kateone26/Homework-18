let data = [
    {
        id: 1,
        imageurl: 'https://mediaim.expedia.com/destination/1/8c02eeeebeabfcd831dc70209f39584a.jpg',
        title: 'Vadstena',
        url: 'https://google.com'
    },
    {
        id: 2,
        imageurl: 'https://img.marinas.com/v2/b73352d0f4020c710e47085a5b2c3daa9be68bc2fd0d7370e9dc06c1a2c236ce.jpg',
        title: 'Gripsholm',
        url: 'https://google.com'
    },
    {
        id: 3,
        imageurl: 'https://images.squarespace-cdn.com/content/v1/5db2c1c870cf53160ba6a917/1617737982552-HAJQYRHG4IPX79RY2NGT/kalmar+castle+sweden',
        title: 'Kalmar ',
        url: 'https://google.com'
    },
    {
        id: 4,
        imageurl: 'https://www.sales.vikingline.com/globalassets/images/destinations/sweden/regions/lacko-castle-lake-visit-sweden-812x501.jpg',
        title: 'Lӓckӧ',
        url: 'https://google.com'
    }
]



let arrowleft = document.getElementById('arrow-left');
let arrowright = document.getElementById('arrow-right');
let slidercontent = document.getElementById('slider-content');
let dotslist = document.getElementsByClassName('dot');


let sliderindex = 0;

function createatag(item){
    let atag = document.createElement('a');
    atag.setAttribute('href', item.url );
    atag.classList.add('slide');

    return atag;

}


function createimgtag(item){
    slidercontent.style.backgroundImage = 'url('+ item.imageurl +')';
    slidercontent.style.backgroundRepeat = "no-repeat";
    slidercontent.style.backgroundSize = "cover";
}



function createh2tag(item){
    let tagtitle = document.createElement('h2');
    tagtitle.classList.add('slider-title');
    tagtitle.append(item.title);

    return tagtitle;
}


function createdots(item){
    let dots = document.createElement('div');
    dots.classList.add('dots');
    
    data.forEach((element)=>{
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id-1 );

        dot.onclick = function(event){
            let id = event.target.getAttribute('data-id');
            sliderindex = id;
            setslide();
        }
        dots.appendChild(dot);
    })
    return dots;
}



function setslide(){
    slidercontent.innerHTML = ' ';

    createimgtag(data[sliderindex]);
    
    let slideitem = createatag(data[sliderindex]);
    let h2tag = createh2tag(data[sliderindex]);
    let dots = createdots();

    slideitem.appendChild(h2tag);

    slidercontent.appendChild(slideitem);
    slidercontent.appendChild(dots);


    currentdotactive()

}


function currentdotactive(){
    dotslist[sliderindex].classList.add('active')
}



function arrowleftclick(){
    if (sliderindex<= 0){
        sliderindex = data.length - 1;
        setslide();
        return;
    }
    sliderindex --;
    setslide();
}

function arrowrightclick(){
    if(sliderindex >= data.length-1){
        sliderindex = 0;
        setslide();
        return;
    }
    sliderindex++;
    setslide();
}

arrowleft.addEventListener('click', arrowleftclick );
arrowright.addEventListener('click', arrowrightclick );

setInterval( () =>{
    arrowrightclick();
}, 4000)


setslide()