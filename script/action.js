$('.search_box input').keyup(function () {
    let inputVal = $(this).val().length

    if (inputVal > 0) {
        $('.search_box button').css({ color: 'green' })
    } else {
        $('.search_box button').css({ color: '' })
    }

    console.log(inputVal)
})


let defaultFont = parseInt($('html').css('fontSize'))
$('.title_box h2').click(function () {
    defaultFont++
    $('html').css({ fontSize: defaultFont })


})
$('.title_box p').click(function () {
    defaultFont--
    $('html').css({ fontSize: defaultFont })

})


//오늘날짜 찍기

const currentDate = new Date();

let year = currentDate.getFullYear()
let month = currentDate.getMonth() + 1
let date = currentDate.getDate()

if (month < 10) { month = '0' + month }
$('#section5 h2 span').text(year + '년' + month + '월' + date + '일')

let suin = 0
// BEST 그래프
$('.graph li').each(function () {
    let gra = parseInt($(this).attr('data-graphVal'))
    if (gra > suin) {
        suin = gra
    }
})

let sec5 = $('#section5').offset().top  //2448
let yujung = 1
$(window).scroll(function () {
    let scrT = $(window).scrollTop();
    if (scrT >= sec5 && yujung == 1) {
        graph()
        yujung = 0
    }
})

function graph() {
    $('.graph li').each(function () {
        let gra = parseInt($(this).attr('data-graphVal'))
        let graVal = gra / suin * 100

        // let liText = $(this).text().substring(0,10)
        // $(this).find('span').text(liText)

        $(this).animate({ height: graVal + '%' }, 1000)
    })
}


$('.graph li').mouseover(function () {
    let praText = $(this).text()
    $(this).attr('title', praText)
})

