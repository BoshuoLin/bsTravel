AOS.init();

let greenC = document.getElementById('green-circle')
let orangeC = document.getElementById('orange-circle')
let rwdAboutBtn = document.getElementById('rwdAboutBtn')

greenC.addEventListener('click', () => {
    greenC.classList.add('circleout')
    orangeC.classList.remove('circleout')
})
orangeC.addEventListener('click', () => {
    greenC.classList.remove('circleout')
    orangeC.classList.add('circleout')
})

rwdAboutBtn.addEventListener('click', () => {
    if (orangeC.classList.contains('circleout')) {
        orangeC.classList.remove('circleout')
        greenC.classList.add('circleout')
    }
    else if (greenC.classList.contains('circleout')) {
        greenC.classList.remove('circleout')
        orangeC.classList.add('circleout')
    }

}, true)

/************************************Owl-Carousel******************************************* */

var owl = $('.owl-carousel');

$('.swith-btn-left').click(function () {
    owl.trigger('prev.owl.carousel')
})
$('.swith-btn-right').click(function () {
    owl.trigger('next.owl.carousel')
})


$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,

    center: true,
    responsive: {
        0: {
            items: 1
        },
        575: {
            margin: 10,
            items: 2,
            center: false,

        },
        992: {
            items: 3,
            margin: 10,
        },
        1400: {
            items: 5,
        }
    }
})


owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

/************************************IsoTope******************************************* */


var $grid = $('.grid').isotope({
    itemSeletor:".case-item"
})

//記憶所選的
var filters=[]

//按鈕

$(".filters").on("click", "button", function(event) {
    var $target = $(event.currentTarget)
    $target.toggleClass('is-checked')
    var isChecked = $target.hasClass('is-checked')
    var filter = $target.attr('data-filter')
    if (isChecked) {
        addFilter(filter)
    } else{
        removeFilter(filter) 
    }
    $grid.isotope({
        filter:filters.join(',')
    })

    function addFilter(filter){
        if(filters.indexOf(filter)== -1){
            filters.push(filter)
        }
    }

    function removeFilter(filter){
        if(filters.indexOf(filter)!= -1){
            filters.splice(filter.indexOf(filter) , 1)
        }
    }
})


