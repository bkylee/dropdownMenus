//visible item is the default/placeholder
//hiddenItems is an array of the items that are going to be dropped down 

const hItems = document.querySelectorAll('.h');
const vItems = document.querySelector('#v');
const wrapper = document.getElementById('dropDown');

function createDDMenu(visibleItem, hItems, wrapper){
    visibleItem.setAttribute('class','visible');

    const hiddenItems = Array.from(hItems);
    hiddenItems.forEach((element)=>{
        element.setAttribute('class','hidden');
    });

    visibleItem.addEventListener('click',()=>{
        hiddenItems.forEach((element)=>{
            element.setAttribute('class','visible');
        });
    });
    wrapper.addEventListener('mouseleave', ()=>{
        hiddenItems.forEach((element)=>{
        element.setAttribute('class','hidden');
    });
});
};

createDDMenu(vItems, hItems, wrapper);