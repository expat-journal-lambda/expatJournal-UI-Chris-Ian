class ImageSlider {
    constructor(element){
        this.element = element
        this.leftButton = this.element.querySelector('.left-button')
        this.rightButton = this.element.querySelector('.right-button')
        // console.log(this.leftButton)
        // console.log(this.rightButton)

        this.leftButton.addEventListener('click', () => this.clickLeftButton())
        this.rightButton.addEventListener('click', () => this.clickRightButton())
    
        this.currentImageIndex = 0;

        this.imagesNodeList = this.element.getElementsByTagName('img')
        this.sliderIconNodeList = this.element.querySelectorAll('.slider-icon')
        console.log(this.imagesNodeList)
        console.log(this.sliderIconNodeList)
    }

    clickLeftButton(){
        console.log('left clicked')
    }

    clickRightButton(){
        console.log('right clicked')
    }
}









let imageSlider = document.querySelectorAll('.image-slider')
// console.log(imageSlider);

imageSlider.forEach(carousel => new ImageSlider(carousel))