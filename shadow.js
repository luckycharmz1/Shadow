var dogs = [

    {
        file: "puppy.jpg",
        caption: "Puppy",
    },

    {
        file: "carride.jpg",
        caption: "Car Ride",
    },

    {
        file: "shower1.jpg",
        caption: "Shower",
    },

    {
        file: "shower2.jpg",
        caption: "Shower",
    },

    {
        file: "trouble.jpg",
        caption: "Trouble",
    },

    {
        file: "costumes.jpg",
        caption: "Costumes",
    },

    {
        file: "Shadow.jpg",
        caption: "Shadow",
    },
];

var currentImage = 0;
var imageCache = [ ];
preloadImages();
var timer = setInterval(nextImage, 2000);

function preloadImages() {
    var image;
    for (var i=0; i<dogs.length; i++) {
        image = new Image();
        image.src = "images/" + dogs[i].file;
        image.alt = dogs[i].caption;
        image.caption = dogs[i].caption;
        imageCache.push (image);
    }
}

function nextImage() {
    currentImage = (currentImage + 1) % imageCache.length;
    showCurrentImage();
}

function showCurrentImage() {
    var dog = imageCache[currentImage];
    document.getElementById('image').src = dog.src;
    document.getElementById('image').alt = dog.alt;
    document.getElementById('caption').textContent = dog.caption;
}
