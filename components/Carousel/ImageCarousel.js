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
        // console.log(this.imagesNodeList)
        // console.log(this.sliderIconNodeList)
        this.imagesNodeList[this.currentImageIndex].style.display = 'flex';
        this.imagesNodeList[this.currentImageIndex].style.opacity = '1';
        this.sliderIconNodeList[this.currentImageIndex].style.color = 'gray';
   
        this.imagesNodeListLength = this.imagesNodeList.length
        this.indexOfLastImage = this.imagesNodeListLength - 1
        // console.log(this.indexOfLastImage)    
    }

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

let imageSlider = document.querySelectorAll('.image-slider')
// console.log(imageSlider);

imageSlider.forEach(carousel => new ImageSlider(carousel))