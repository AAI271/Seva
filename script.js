const moreBtns = document.querySelectorAll('.more-btn');
const closeBtns = document.querySelectorAll('.open-card__icon');
// Add a click event listener to each "more-btn" element
moreBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Find the closest parent element with class "open-card"
        var openCard = this.closest('.open-card');

        // Add the "full-height" class to the parent element
        openCard.classList.add('open-card_active');
    });
});
closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Find the closest parent element with class "open-card"
        console.log(this)
        var openCard = this.closest('.open-card');

        // Add the "full-height" class to the parent element
        openCard.classList.remove('open-card_active');
    });
});


const varianceItems = document.querySelectorAll('.variance-type__item')
const variance__link = document.querySelectorAll('.variance__link')

variance__link.forEach(function (select,index){
    select.addEventListener('click',function (event){
        event.preventDefault()
        if(this.closest('.variance-type').classList.contains('active-border')) {
                event.stopPropagation()
            variance__link.forEach((link)=>{
                link.style.color="#393649"
                link.style.borderColor="#393649"
            })
            select.style.color='#D00E46'
            select.style.borderColor='#D00E46'
                varianceItems.forEach(function (element, itemIndex) {
                    if (!(index === itemIndex)) {
                        console.log(index, itemIndex)
                        varianceItems[itemIndex].classList.remove('variance-type__item_active')
                    }
                })
                varianceItems[index].classList.add('variance-type__item_active')
            }
        })
    })


const varianceType = document.querySelectorAll('.variance-type')

varianceType.forEach(function (select,index){
    select.addEventListener('click',function (){
        varianceType.forEach(function (element){
            if(!(element===select)){
                element.classList.remove('active-border')
            }
        })
        varianceItems.forEach(()=>{
            varianceItems.forEach((el,ind)=>{
                el.classList.remove('variance-type__item_active')
                variance__link[ind].style.color='#393649'
                variance__link[ind].style.borderColor='#393649'
            })
            if(index===0){
                varianceItems[0].classList.add('variance-type__item_active')
                variance__link[0].style.color='#D00E46'
                variance__link[0].style.borderColor='#D00E46'
            }
            else{
                varianceItems[3].classList.add('variance-type__item_active')
                variance__link[3].style.color='#D00E46'
                variance__link[3].style.borderColor='#D00E46'
            }
        })
        select.classList.add('active-border')
    })
})

const closeIcons = document.querySelectorAll('.close-icon')
const modals = document.querySelectorAll('.modal')

closeIcons.forEach((el)=>{
    el.addEventListener('click',()=>{
        modals.forEach((modal)=>{
            modal.classList.remove('show')
        })
    })
})

const clasterModal = document.querySelector('.claster-modal')


const openClasterModal = ()=>{
    clasterModal.classList.add('show')
}
