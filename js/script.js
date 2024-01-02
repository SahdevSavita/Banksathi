$(document).ready(function () {

    $('.toggle-btn').click(function () {
        $('.menu-content').toggleClass('open-list')
    });

    $('.select-box>ul>li>a').click(function () {
        // $('.select-box ul li').removeClass('open-option');
        $(this).parent().toggleClass('open-option')
    });


    $(".popup-btn").click(function () {
        $('body').addClass('open-modal')

    });
    $('.close-btn, .main-modal').click(function () {
        $('body').removeClass('open-modal')
    });
    $('.content-form').on('click', function (event) {
        event.stopPropagation();
    });

    $(".counter").each(function () {
        var $this = $(this),
            countTo = $this.attr("data-countto");
        countDuration = parseInt($this.attr("data-duration"));
        $({ counter: $this.text() }).animate(
            {
                counter: countTo
            },
            {
                duration: countDuration,
                easing: "linear",
                step: function () {
                    $this.text(Math.floor(this.counter));
                },
                complete: function () {
                    $this.text(this.counter);
                }
            }
        );
    });

});