const gnb = document.querySelectorAll('header .gnb > li');
const lnb = document.querySelectorAll('header .lnb');
const subLnb = document.querySelectorAll('header .sub_lnb');
const menuBack = document.querySelector('.menu_back');
console.log(gnb, lnb, subLnb, menuBack);


for(let i of gnb){
    console.log(i.children[0]);
    i.addEventListener('mouseover', function(){
        if (i.children[1]) {
            i.children[1].style.display = 'flex';
            menuBack.style.display = 'flex';
        }
    });
    i.addEventListener('mouseout', function(){
        if (i.children[1]) {
            i.children[1].style.display = 'none';
            menuBack.style.display = 'none';
        }
    });
}
