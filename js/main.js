const modifiers = {
    imgThumbnailActive: 'img-showcase__thumbnail--active'
};

// Shopping-cart-modal
const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');


if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        
        elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open');
    });
}

// Image-showcase
const elImgShowcaseActivelImg = document.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = document.querySelectorAll('.js-img-showcase__thumbnail-button');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');

elsImgShowcaseThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        // remove active state from all buttons 
        elsImgThumbnail.forEach(function (elImgThumbnail) {
            elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
        });
        
        // add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgThumbnailActive);
        
        // update active Image src accordingly
        elImgShowcaseActivelImg.src = elButton.dataset.ImgShowcaseBig;
        elImgShowcaseActivelImg.srcset = `${elButton.dataset.ImgShowcaseBig} 1x, ${elButton.dataset.ImgShowcaseRetina} 2x`;
    }); 
});