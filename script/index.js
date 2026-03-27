const hero = document.querySelector('.hero_swiper');
const newWrap = document.querySelector('.new_swiper');
const bestWrap = document.querySelector('.best_swiper');
const promotion = document.querySelector('.promotion');
const festaWrap = document.querySelector('.festa_swiper');
console.log(hero, newWrap, bestWrap, promotion, festaWrap);

const festaWrapSwiper = new Swiper(festaWrap,{
    loop:true,
    slidesPerView:3,
    spaceBetween:20,
})

const promotionSwiper = new Swiper(promotion,{
    loop:true,
    autoplay:{delay:2000,},
    navigation:{
        prevEl:'.promotion .prev',
        nextEl:'.promotion .next',
    },
})

const bestSwiper = new Swiper(bestWrap,{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
})

const newSwiper = new Swiper(newWrap,{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    navigation:{
        prevEl:'.tab_contents .prev',
        nextEl:'.tab_contents .next',
    },
})

const heroSwiper = new Swiper(hero,{
    autoplay:{delay:2000,},
    loop:true,

    pagination:{
        el:'.swiper-pagination',
        type: 'progressber',
        },
});