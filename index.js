

$(document).ready(function () {

    const redBall = $('#redBall');
    const redFlag = $('#redFlag');
    const redFlagContainer = $('#redFlagContainer');
    const redPage = $('#redPage');
    const redConnect = $('#redConnect');

    const yellowBall = $('#yellowBall');
    const yellowFlag = $('#yellowFlag');
    const yellowFlagContainer = $('#yellowFlagContainer');
    const yellowPage = $('#yellowPage');
    const yellowConnect = $('#yellowConnect');

    const blueBall = $('#blueBall');
    const blueFlag = $('#blueFlag');
    const blueFlagContainer = $('#blueFlagContainer');
    const bluePage = $('#bluePage');
    const blueConnect = $('#blueConnect');

    //Red actions
    redBall.hover(function () {
        if (redPage.css('display') == 'none') {
            redFlag.css('display', 'block');
            redFlagContainer.css('display', 'flex');
        }
    }, function () {
        redFlag.css('display', 'none');
        redFlagContainer.css('display', 'none');
    });
    redBall.on('click', function () {
        redPage.fadeIn(500);
        redConnect.fadeIn(400);
        $('html, body').animate({
            scrollTop: $(redPage).offset().top - 100
        }, 500);
        yellowPage.css('display', 'none');
        yellowConnect.css('display', 'none');
        bluePage.css('display', 'none');
        blueConnect.css('display', 'none');
    })


    //Yellow actions
    yellowBall.hover(function () {
        if (yellowPage.css('display') == 'none') {
            yellowFlag.css('display', 'block');
            yellowFlagContainer.css('display', 'flex');
        }
    }, function () {
        yellowFlag.css('display', 'none');
        yellowFlagContainer.css('display', 'none');
    });
    yellowBall.on('click', function () {
        yellowPage.fadeIn(500);
        yellowConnect.fadeIn(400);
        $('html, body').animate({
            scrollTop: $(yellowPage).offset().top
        }, 500);
        redPage.css('display', 'none');
        redConnect.css('display', 'none');
        bluePage.css('display', 'none');
        blueConnect.css('display', 'none');
    })


    //Blue actions
    blueBall.hover(function () {
        if (bluePage.css('display') == 'none') {
            blueFlag.css('display', 'block');
            blueFlagContainer.css('display', 'flex');
        }
    }, function () {
        blueFlag.css('display', 'none');
        blueFlagContainer.css('display', 'none');
    });
    blueBall.on('click', function () {
        bluePage.fadeIn(500);
        blueConnect.fadeIn(400);
        $('html, body').animate({
            scrollTop: $(bluePage).offset().top - 100
        }, 500);
        redPage.css('display', 'none');
        redConnect.css('display', 'none');
        yellowPage.css('display', 'none');
        yellowConnect.css('display', 'none');
    })
})