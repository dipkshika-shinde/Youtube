var video=[
{
        src:"image-5.webp",
        title:"Ek Din Aap Yun [ Slowed + Reverb ] | 90's songs",
        views:"Udit Narayan, Alka Yagnik, Shilpa Rao, and more",
        profile:"icon-7.jpg",
        menu:"ri-more-2-line",
},
{
    src:"hq720 (1).webp",
    title:"Complete Full Stack Web Development Preparation ",
    views:"Apna College 2.9M views ",
    profile:"icon-10.jpg",
    menu:"ri-more-2-line",
},
{
    src:"image-10.webp",
    title:"Chala Hawa Yeu Dya | Marathi Comedy Video ",
    views:"10.8M subscribers",
    profile:"icon-2.jpg",
    menu:"ri-more-2-line",
},
{
    src:"image-3.webp",
    title:"Lists, Dictionaries, & Tuples in Python |Python Programming",
    views:"Accessing Elements of a List in Pytho 430K views  6 months ago ",
    profile:"icon-9.jpg",
    menu:"ri-more-2-line",
},
{
    src:"image-8.webp",
    title:"ANIMALS and NATURE 8K ULTRA HD with Names and Sounds8K VIDEOS HDR",
    views:"3.3M views 1 year ago",
    profile:"icon-5.jpg",
    menu:"ri-more-2-line",
},
{
    src:"hq720.webp",
    title:"Short Meditation For Beginners",
    views:"Santosh Kotkar  11M views  4 years ago ",
    profile:"icon-11.jpg",
    menu:"ri-more-2-line",
},
{
    src:"image-1.webp",
    title:"Taarak Mehta Ka Ooltah Chashmah |",
    views:"Sony SAB    5.1M views  8 months ago " ,
    profile:"icon-3.jpg",
    menu:"ri-more-2-line",
},

{
    src:"image-4.webp",
    title:"Sana Makbul is The WINNER Of Bigg Boss OTT3",
    views:"JioCinema 6.8M ",
    profile:"icon-8.jpg",
    menu:"ri-more-2-line",
},

{
    src:"image-7.webp",
    title:"Animals of Amazon 4K - Animals That Call The Jungle Home | ",
    views:"Sandeep, B Praak Bhushan 87M views 6 months ago",
    profile:"icon-4.jpg",
    menu:"ri-more-2-line",
},

{
    src:"image-11.webp",
    title:"Shree Ganeshaay Dheemahi| श्री गणेशाय धीमहि शब्दरचना s",
    views:"13M views 4 years ago ",
    profile:"icon-1.jpg",
    menu:"ri-more-2-line",
},

{
    src:"image-9.webp",
    title:"Superstar Singer S3 | Aaja Sham Hone Aayi' पर हुआ एक Cute Performance ",
    views:"2.2M views ",
    profile:"icon-3.jpg",
    menu:"ri-more-2-line",
},

{
    src:"image-6.webp",
    title:"Unnati Tomar Journey | MTV Splitsvilla X5",
    views:"Fully Faltoo 4.6M subscribers",
    profile:"icon-6.jpg",
    menu:"ri-more-2-line",
},


]



video.forEach( serv => {

var containerImages=document.createElement("div");
containerImages.className="container_images";

var upperImage=document.createElement("div");
upperImage.className="upper_image";

var img=document.createElement("img");
img.src=serv.src;

upperImage.appendChild(img);

containerImages.appendChild(upperImage);

var lowerText=document.createElement("div");
lowerText.className="lower_text";

containerImages.appendChild(lowerText);

var left=document.createElement("div");
left.className="lower_text_left";

var img1=document.createElement("img");
img1.src=serv.profile;

left.appendChild(img1);

lowerText.appendChild(left);

var mid=document.createElement("div");
mid.className="lower_text_middle";

lowerText.appendChild(mid);



var h5Element=document.createElement("h5");
h5Element.textContent=serv.title;
h5Element.className="title";
mid.appendChild(h5Element);



var pElement=document.createElement("p");
pElement.textContent=serv.views;

mid.appendChild(pElement);


var icon=document.createElement("i");
icon.className="ri-verified-badge-fill";
pElement.appendChild(icon);


var right=document.createElement("div");
right.className="lower_text_right";
lowerText.appendChild(right);


var icon1=document.createElement("i");
icon1.className="ri-more-2-line";
right.appendChild(icon1);

var container=document.getElementById("playlist");

container.appendChild(containerImages);

}
)




