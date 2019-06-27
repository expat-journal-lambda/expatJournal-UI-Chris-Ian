class ImageSlider {
    constructor(element){
        // assign this.element to the element DOM reference
        this.element = element

        // assign the left and right slider buttons
        this.leftButton = this.element.querySelector('.left-button')
        this.rightButton = this.element.querySelector('.right-button')
        
        // add 'click' event listeners to slider buttons 
        this.leftButton.addEventListener('click', () => this.clickLeftButton())
        this.rightButton.addEventListener('click', () => this.clickRightButton())
    
        // set default index for current image in slider
        this.currentImageIndex = 0;

        // create NodeList for images in slider
        this.imagesNodeList = this.element.getElementsByTagName('img')

        // create NodeList for slider icons between buttons that represent each image in slider
        this.sliderIconNodeList = this.element.querySelectorAll('.slider-icon')

        // set css properties of current index of NodeList of images to 'flex' and '1' to display default image 
        this.imagesNodeList[this.currentImageIndex].style.display = 'flex';
        this.imagesNodeList[this.currentImageIndex].style.opacity = '1';

        // set css property of current index of NodeList of icons to 'gray' to show which image is 'active/displayed'
        this.sliderIconNodeList[this.currentImageIndex].style.color = 'gray';
   
        // define the length of of the images NodeList
        this.imagesNodeListLength = this.imagesNodeList.length

        // define the index of the last image in NodeList of images
        this.indexOfLastImage = this.imagesNodeListLength - 1  
    }

    // method for left button click to remove custom css properties of active image & icon, 
    // then decrease the index of current image by 1,
    // and add cutom css properties to image & icon of new current index
    // if at start of nodelist of Images, set current index to that of last image in NodeList
    // added GreenSock animations to slide image in from left, while increasing its opacity from 0 to 1

    clickLeftButton(){
        if (this.currentImageIndex === 0) {
            this.imagesNodeList[this.currentImageIndex].style.display = 'none'
            this.imagesNodeList[this.currentImageIndex].style.opacity = '0';
            this.sliderIconNodeList[this.currentImageIndex].style.color = 'lightgray'

            this.currentImageIndex = this.indexOfLastImage

            this.imagesNodeList[this.currentImageIndex].style.display = 'flex'
            TweenMax.from(this.imagesNodeList[this.currentImageIndex], 1, {x: 50})
            TweenMax.to(this.imagesNodeList[this.currentImageIndex], 1, {ease: Power1.easeIn, opacity: 1})
            this.sliderIconNodeList[this.currentImageIndex].style.color = 'gray'
        } else {
            this.imagesNodeList[this.currentImageIndex].style.display = 'none'
            this.imagesNodeList[this.currentImageIndex].style.opacity = '0';
            this.sliderIconNodeList[this.currentImageIndex].style.color = 'lightgray'

            this.currentImageIndex = this.currentImageIndex - 1

            this.imagesNodeList[this.currentImageIndex].style.display = 'flex'
            TweenMax.from(this.imagesNodeList[this.currentImageIndex], 1, {x: 50})
            TweenMax.to(this.imagesNodeList[this.currentImageIndex], 1, {ease: Power1.easeIn, opacity: 1})
            this.sliderIconNodeList[this.currentImageIndex].style.color = 'gray'
        }
    }


    // method for right button click to remove custom css properties of active image & icon, 
    // then increase the index of current image by 1,
    // and add custom css properties to image & icon of new current index
    // if at end of nodelist of Images, set current index to that of first image in NodeList
    // added GreenSock animations to slide image in from left, while increasing its opacity from 0 to 1

    clickRightButton(){
        if (this.currentImageIndex === this.indexOfLastImage) {
            this.imagesNodeList[this.currentImageIndex].style.display = 'none'
            this.imagesNodeList[this.currentImageIndex].style.opacity = '0';
            this.sliderIconNodeList[this.currentImageIndex].style.color = 'lightgray'

            this.currentImageIndex = 0

            this.imagesNodeList[this.currentImageIndex].style.display = 'flex'
            TweenMax.from(this.imagesNodeList[this.currentImageIndex], 1, {x: -50})
            TweenMax.to(this.imagesNodeList[this.currentImageIndex], 1, {ease: Power1.easeIn, opacity: 1})
            this.sliderIconNodeList[this.currentImageIndex].style.color = 'gray'
        } else {
            this.imagesNodeList[this.currentImageIndex].style.display = 'none'
            this.imagesNodeList[this.currentImageIndex].style.opacity = '0';
            this.sliderIconNodeList[this.currentImageIndex].style.color = 'lightgray'

            this.currentImageIndex = this.currentImageIndex + 1

            this.imagesNodeList[this.currentImageIndex].style.display = 'flex'
            TweenMax.from(this.imagesNodeList[this.currentImageIndex], 1, {x: -50})
            TweenMax.to(this.imagesNodeList[this.currentImageIndex], 1, {ease: Power1.easeIn, opacity: 1})
            this.sliderIconNodeList[this.currentImageIndex].style.color = 'gray'
        }
    }
}

// grab reference to image slider
let imageSlider = document.querySelectorAll('.image-slider')

// return a new instance of ImageSlider for each imageSlider
imageSlider.forEach(carousel => new ImageSlider(carousel))