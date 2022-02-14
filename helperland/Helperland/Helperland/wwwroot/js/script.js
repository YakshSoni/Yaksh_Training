window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    let winPos = window.scrollY > 0;
    var logo_img = document.getElementById("logo-img");
    nav.classList.toggle("scroll-active", winPos);
    if (window.scrollY > 0) {
        logo_img.src = "/asset/logo-small.png";
    }
    else {
        logo_img.src = "/asset/logo-large.png";
    }
});



jQuery('.ok-btn').click(function (e) {
    e.preventDefault();
    var _this = jQuery(this);
    _this.closest('.footer-bottom').slideUp();

})

$(document).on('click', 'ul .nav-item', function () {
    $(this).addClass('active').siblings().removeClass('active')
});


$(document).on('click', 'ul .nav-item', function () {
    $(this).addClass('active').siblings().removeClass('active')
});

$('#password, #confirm_password').on('keyup', function () {
    if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').html('Matching').css('color', 'green');
        $('#but').prop('disabled', false);
    } else {
        $('#message').html('Not Matching').css('color', 'red');
        $('#but').prop('disabled', true);
    }
});
$(document).ready(function () {
    $("#isCheck").change(function () {
        if (this.checked) {
            $('#message2').css('display', 'none');
        } else {
            $('#message2').css('display', 'block');
        }
    });
});
$('#but').click(function () {

    var status = $('#isCheck').is(':checked');
    if (status) {
        $('#message2').css('display', 'none');
    } else {
        $('#message2').css('display', 'block');
    }

});


// -----------------------------------------book-service-js-----------------------------------------


// for progress bar
var step_2_img = document.getElementById("step_2_img");
var step_3_img = document.getElementById("step_3_img");
var step_4_img = document.getElementById("step_4_img");

var progress_step_1 = 1;
var progress_step_2 = 0;
var progress_step_3 = 0;
var progress_step_4 = 0;




$(document).on('click', '.postal_check_btn', function () {
    $(".ss_step_1").addClass('fade');
    $(".ss_step_2").removeClass('fade');
    $(".col-step-1").removeClass('active_tab');
    $(".col-step-2").addClass('active').addClass('active_tab');
    step_2_img.src = "/asset/schedule-plan.png";
    progress_step_2 = 1;
    //set date to be disable before today & set time
    var today = new Date();
    today.setHours(today.getHours() + 2);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var hr = today.getHours();
    var minit = today.getMinutes();

    var max_time = hr + ':' + minit;
    $('#service_time').val(max_time);

    var max_date = yyyy + '-' + mm + '-' + dd;
    $('#service_date').attr('min', max_date);

});
$(document).on('click', '.continue-1', function () {
    var temp = 1;
    var check_time_empty = false;
    var check_date_empty = false;
    if ($('#service_time').val().length === 0) {
        $('.validate_time').removeClass('fade');
        temp = 0;
        check_time_empty = true;
        if (!check_date_empty) {
            $('.validate_date_empty').addClass('fade');
        }
    }
    else {
        $('.validate_time').addClass('fade');
        temp = 1;
        check_time_empty = false;
    }
    if ($('#service_date').val().length === 0) {
        $('.validate_date_empty').removeClass('fade');
        temp = 0;
        check_date_empty = true;
        if (!check_time_empty) {
            $('.validate_time').addClass('fade');
        }
    }
    else {
        check_date_empty = false;
        var service_date = $("#service_date").val();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        var year = service_date.substr(0, 4);
        var month = service_date.substr(5, 2);
        var day = service_date.substr(8, 2);
        if ((parseInt(day) >= parseInt(dd)) && (parseInt(month) == parseInt(mm)) && (parseInt(year) == parseInt(yyyy))) {
            $('.validate_date').addClass('fade');
            $('.validate_date_empty').addClass('fade');
            temp = 1;

        }
        else {
            temp = 0;
            $('.validate_date').removeClass('fade');
            $('.validate_date_empty').addClass('fade');
        }
    }

    if (temp == 1) {
        $(".ss_step_2").addClass('fade');
        $(".ss_step_3").removeClass('fade');
        $(".col-step-2").removeClass('active_tab');
        $(".col-step-3").addClass('active').addClass('active_tab');
        step_3_img.src = "/asset/user-details.png";
        progress_step_3 = 1;
    }
});
$(document).on('click', '.continue-2', function () {
    $(".ss_step_3").addClass('fade');
    $(".ss_step_4").removeClass('fade');
    $(".col-step-3").removeClass('active_tab');
    $(".col-step-4").addClass('active').addClass('active_tab');
    step_4_img.src = "/asset/payment.png";
    progress_step_4 = 1;
});

// for progressbar button click
$(document).on('click', '.col-step-1', function () {
    if ((progress_step_2 == 1) && (progress_step_3 == 0) && (progress_step_4 == 0)) {
        $(".ss_step_2").addClass('fade');
        $(".ss_step_1").removeClass('fade');
        $(".col-step-1").addClass('active_tab');
        $(".col-step-2").removeClass('active_tab');
        progress_step_2 = 0;
    }
    if ((progress_step_2 == 1) && (progress_step_3 == 1) && (progress_step_4 == 0)) {
        $(".ss_step_3").addClass('fade');
        $(".ss_step_1").removeClass('fade');
        $(".col-step-1").addClass('active_tab');
        $(".col-step-3").removeClass('active_tab');
        progress_step_2 = 0;
        progress_step_3 = 0;
    }
    if ((progress_step_2 == 1) && (progress_step_3 == 1) && (progress_step_4 == 1)) {
        $(".ss_step_4").addClass('fade');
        $(".ss_step_1").removeClass('fade');
        $(".col-step-1").addClass('active_tab');
        $(".col-step-4").removeClass('active_tab');
        progress_step_2 = 0;
        progress_step_3 = 0;
        progress_step_4 = 0;
    }
});
$(document).on('click', '.col-step-2', function () {
    if ((progress_step_3 == 1) && (progress_step_4 == 0)) {
        $(".ss_step_3").addClass('fade');
        $(".ss_step_2").removeClass('fade');
        $(".col-step-2").addClass('active_tab');
        $(".col-step-3").removeClass('active_tab');
        progress_step_3 = 0;
    }
    if ((progress_step_3 == 1) && (progress_step_4 == 1)) {
        $(".ss_step_4").addClass('fade');
        $(".ss_step_2").removeClass('fade');
        $(".col-step-2").addClass('active_tab');
        $(".col-step-4").removeClass('active_tab');
        progress_step_3 = 0;
        progress_step_4 = 0;
    }

});
$(document).on('click', '.col-step-3', function () {
    if (progress_step_4 == 1) {
        $(".ss_step_4").addClass('fade');
        $(".ss_step_3").removeClass('fade');
        $(".col-step-3").addClass('active_tab');
        $(".col-step-4").removeClass('active_tab');
        progress_step_4 = 0;
    }
});

// for extra service click
var extra_img_1 = document.getElementById("extra-ser-1");
var extra_img_2 = document.getElementById("extra-ser-2");
var extra_img_3 = document.getElementById("extra-ser-3");
var extra_img_4 = document.getElementById("extra-ser-4");
var extra_img_5 = document.getElementById("extra-ser-5");

var ser_1 = document.getElementById("sr-1");
var ser_2 = document.getElementById("sr-2");
var ser_3 = document.getElementById("sr-3");
var ser_4 = document.getElementById("sr-4");
var ser_5 = document.getElementById("sr-5");

var count_ser_1 = 1;
var count_ser_2 = 1;
var count_ser_3 = 1;
var count_ser_4 = 1;
var count_ser_5 = 1;

var ps_total_time = 3;
var total_pay = 60;

$(document).on('click', '#extra-ser-1', function () {
    if (count_ser_1 == 1) {
        $('#extra-ser-1').css('border', '2px solid #1D7A8C');
        ser_1.src = "/asset/cabinets-1.png";
        count_ser_1 = 0;
        $('.ps_ser_1').removeClass('fade');
        ps_total_time = ps_total_time + 0.5;
        $('.ps_total_time').text(ps_total_time);
        total_pay = total_pay + 10;
        $('.ps_total_price').text(total_pay);
    }
    else {
        $('#extra-ser-1').css('border', '1px solid #b0c9ce');
        ser_1.src = "/asset/3.png";
        count_ser_1 = 1;
        $('.ps_ser_1').addClass('fade');
        ps_total_time = ps_total_time - 0.5;
        $('.ps_total_time').text(ps_total_time);
        total_pay = total_pay - 10;
        $('.ps_total_price').text(total_pay);
    }
});
$(document).on('click', '#extra-ser-2', function () {
    if (count_ser_2 == 1) {
        $('#extra-ser-2').css('border', '2px solid #1D7A8C');
        ser_2.src = "/asset/service-icon-02-2.png";
        count_ser_2 = 0;
        $('.ps_ser_2').removeClass('fade');
        ps_total_time = ps_total_time + 0.5;
        $('.ps_total_time').text(ps_total_time);
        total_pay = total_pay + 10;
        $('.ps_total_price').text(total_pay);
    }
    else {
        $('#extra-ser-2').css('border', '1px solid #b0c9ce');
        ser_2.src = "/asset/5.png";
        count_ser_2 = 1;
        $('.ps_ser_2').addClass('fade');
        ps_total_time = ps_total_time - 0.5;
        $('.ps_total_time').text(ps_total_time);
        total_pay = total_pay - 10;
        $('.ps_total_price').text(total_pay);
    }
});
$(document).on('click', '#extra-ser-3', function () {
    if (count_ser_3 == 1) {
        $('#extra-ser-3').css('border', '2px solid #1D7A8C');
        ser_3.src = "/asset/oven-1.png";
        count_ser_3 = 0;
        $('.ps_ser_3').removeClass('fade');
        ps_total_time = ps_total_time + 0.5;
        $('.ps_total_time').text(ps_total_time);
        total_pay = total_pay + 10;
        $('.ps_total_price').text(total_pay);
    }
    else {
        $('#extra-ser-3').css('border', '1px solid #b0c9ce');
        ser_3.src = "/asset/service-icon-03-1.png";
        count_ser_3 = 1;
        $('.ps_ser_3').addClass('fade');
        ps_total_time = ps_total_time - 0.5;
        $('.ps_total_time').text(ps_total_time);
        total_pay = total_pay - 10;
        $('.ps_total_price').text(total_pay);
    }
});
$(document).on('click', '#extra-ser-4', function () {
    if (count_ser_4 == 1) {
        $('#extra-ser-4').css('border', '2px solid #1D7A8C');
        ser_4.src = "/asset/laundry-1.png";
        count_ser_4 = 0;
        $('.ps_ser_4').removeClass('fade');
        ps_total_time = ps_total_time + 0.5;
        $('.ps_total_time').text(ps_total_time);
        total_pay = total_pay + 10;
        $('.ps_total_price').text(total_pay);
    }
    else {
        $('#extra-ser-4').css('border', '1px solid #b0c9ce');
        ser_4.src = "/asset/2.png";
        count_ser_4 = 1;
        $('.ps_ser_4').addClass('fade');
        ps_total_time = ps_total_time - 0.5;
        $('.ps_total_time').text(ps_total_time);
        total_pay = total_pay - 10;
        $('.ps_total_price').text(total_pay);
    }
});
$(document).on('click', '#extra-ser-5', function () {
    if (count_ser_5 == 1) {
        $('#extra-ser-5').css('border', '2px solid #1D7A8C');
        ser_5.src = "/asset/windows-1.png";
        count_ser_5 = 0;
        $('.ps_ser_5').removeClass('fade');
        ps_total_time = ps_total_time + 0.5;
        $('.ps_total_time').text(ps_total_time);
        total_pay = total_pay + 10;
        $('.ps_total_price').text(total_pay);
    }
    else {
        $('#extra-ser-5').css('border', '1px solid #b0c9ce');
        ser_5.src = "/asset/1.png";
        count_ser_5 = 1;
        $('.ps_ser_5').addClass('fade');
        ps_total_time = ps_total_time - 0.5;
        $('.ps_total_time').text(ps_total_time);
        total_pay = total_pay - 10;
        $('.ps_total_price').text(total_pay);
    }
});




// for address radio button click
$(document).on('click', '#add1', function () {
    $("#address_ss1").attr('checked', true);
});

// for creating new address
$(document).on('click', '.add_address_btn', function () {
    $(".ss_address_create").removeClass('fade');
    $(".add_address_btn").addClass('fade');
});
$(document).on('click', '.save_address_btn', function () {
    $(".add_address_btn").removeClass('fade');
    $(".ss_address_create").addClass('fade');
});
$(document).on('click', '.cancel_address_btn', function () {
    $(".add_address_btn").removeClass('fade');
    $(".ss_address_create").addClass('fade');
});


// for adding data in payment summary

$(document).on('change', '#service_date', function () {
    var service_date = $("#service_date").val();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    var year = service_date.substr(0, 4);
    var month = service_date.substr(5, 2);
    var day = service_date.substr(8, 2);
    if ((parseInt(day) >= parseInt(dd)) && (parseInt(month) == parseInt(mm)) && (parseInt(year) == parseInt(yyyy))) {
        var final_date = day + '/' + month + '/' + year;
        $('.ps_date').text(final_date);
        $('.validate_date').addClass('fade');
    }
    else {
        $('.validate_date').removeClass('fade');
    }
});
$(document).on('change', '#service_time', function () {
    var service_time = $('#service_time').val();
    var hour = parseInt(service_time.substr(0, 2));
    var min = parseInt(service_time.substr(3, 2));
    var hr_string = hour.toString();
    var min_string = min.toString();

    if (min < 10) {

        min_string = "0" + min_string;
    }
    if (hour <= 12) {
        var f_hr = hour;
        if (hour < 10) {

            hr_string = "0" + hr_string;
            f_hr = hr_string;
        }

    }
    if (hour > 12) {
        var f_hr = hour - 12;
    }
    var fin_time = f_hr + ':' + min_string;
    $('.ps_time').text(fin_time);
    if ((hour >= 12) && (min > 0)) {
        $('.ps_time_meredian').text('PM');

    }
    else {
        $('.ps_time_meredian').text('AM');
    }

});
$(document).on('change', '#basic_time', function () {
    var basic_time = $(this).val();
    $('.ps_basic_hr').text(basic_time);
    $('.ps_total_time').text(basic_time);
    ps_total_time = parseInt($('.ps_total_time').text());
    var hr_pay = (ps_total_time - 3) * 20;
    total_pay = total_pay + hr_pay;
    $('.ps_total_price').text(total_pay);
});


