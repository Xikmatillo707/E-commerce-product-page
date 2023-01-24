const modifiers = {
    siteHeaderCartModalOpen: 'site-header__cart-modal--open',
    imgThumbnailActive: 'img-showcase__thumbnail--active',
    lightboxOpen: 'lightbox--open'
};

// Shopping-cart-modal
const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');


if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        
        elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen);
    });
}

// Image-showcase
const elProductPageGallery = document.querySelector('.product-page__gallery');
const elImgShowcaseActivelImg = elProductPageGallery.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = elProductPageGallery.querySelectorAll('.js-img-showcase__thumbnail-button');
const elsImgThumbnail = elProductPageGallery.querySelectorAll('.img-showcase__thumbnail');

elsImgShowcaseThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        // remove active state from all buttons 
        elsImgThumbnail.forEach(function (elImgThumbnail) {
            elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
        });
        
        // add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgThumbnailActive);
        
        // update active Image src accordingly
        elImgShowcaseActivelImg.src = elButton.dataset.imgShowcaseBig;
        elImgShowcaseActivelImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    }); 
});

// LIGHTBOX
const elLightbox = document.querySelector('.lightbox');
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightboxClose = document.querySelector('.js-lightbox-close');

if (elLightboxToggler) {
    elLightboxToggler.addEventListener('click', function () {
        elLightbox.classList.add(modifiers.lightboxOpen);
    });
}

if (elLightboxClose) {
    elLightboxClose.addEventListener('click', function () {
        elLightbox.classList.remove(modifiers.lightboxOpen)
    });
}

//lightbox thumbnail click
const elImgLightboxActivelImg = elLightbox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll('.js-img-lightbox__thumbnail-button');
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');

elsImgLightboxThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        // remove active state from all buttons 
        elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
            elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
        });
        
        // add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgThumbnailActive);
        
        // update active Image src accordingly
        elImgLightboxActivelImg.src = elButton.dataset.imgShowcaseBig;
        elImgLightboxActivelImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    }); 
});


// Lightbox control
const elLightboxControlPrev = elLightbox.querySelector('.js-lightbox-control-prev');
const elLightboxControlNext = elLightbox.querySelector('.js-lightbox-control-next');

if (elLightboxControlNext) {
    elLightboxControlNext.addEventListener('click', function (){
        // find active li element
        const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');
        // remove active li element's styles
        elActiveItem.classList.remove(modifiers.imgThumbnailActive)
        
        let elNextActiveItem;
        
        
        if (elActiveItem.nextElementSibling === null){
            elNextActiveItem = elsLightboxImgThumbnail[0];
        } else {
            elNextActiveItem = elActiveItem.nextElementSibling;
        }
        
        elNextActiveItem.classList.add(modifiers.imgThumbnailActive)
        
        // update active Image src accordingly
        elImgLightboxActivelImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
        elImgLightboxActivelImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseBig} 2x`;
    });
}

if (elLightboxControlPrev) {
    elLightboxControlPrev.addEventListener('click', function (){
        // find active li element
        const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');
        // remove active li element's styles
        elActiveItem.classList.remove(modifiers.imgThumbnailActive)
        
        let elNextActiveItem;
        
        
        if (elActiveItem.previousElementSibling === null){
            elNextActiveItem = elsLightboxImgThumbnail[elsLightboxImgThumbnail.length -1];
        } else {
            elNextActiveItem = elActiveItem.previousElementSibling;
        }
        
        elNextActiveItem.classList.add(modifiers.imgThumbnailActive)
        
        // update active Image src accordingly
        elImgLightboxActivelImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
        elImgLightboxActivelImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseBig} 2x`;
    });
}

const elProductQtyIncrementButton = document.querySelector('.js-product-quantity-increment-button');
const elProductQtyDecrementButton = document.querySelector('.js-product-quantity-decrement-button');
const elProductQty = document.querySelector('.product-info__quantity');

if (elProductQtyIncrementButton) {
    elProductQtyIncrementButton.addEventListener('click', function () {
        elProductQty.textContent = parseInt(elProductQty.textContent, 10) + 1;
    });
}

if (elProductQtyDecrementButton) {
    elProductQtyDecrementButton.addEventListener('click', function () {
        const qty = parseInt(elProductQty.textContent, 10);
        if (qty > 0) {
            elProductQty.textContent = qty -1;
        }
    });
}
