$(document).ready( function () {

    // Initialize a new plugin instance for all
    // e.g. $('input[type="range"]') elements.
    $('input[type="range"]').rangeslider({polyfill: false});



    // VARIABLES
    // ----------------------------------------------------------

    var amount, percent, result;
    var calculator = $('.calculator');
    // var calculatorBill = calculator.find('.calculator__bill');
    var slider1 = calculator.find('.input-1-slider');
    var calculatorResult = calculator.find('.calculator__result');
    var slider1amount = calculator.find('.input-1-amount');

    $(document).ready(function(){
        slider1amount.text(slider1.val());
    });

    slider1.on('input', function(){
        slider1amount.text(slider1.val());
    });

/*
    // INIT BILL
    // ----------------------------------------------------------

    $(window).on('DOMContentLoaded', function () {
        tipAmount.text( calculatorTip.val() + '%' );
        amount = calculatorBill.val() * 1;
        percent = calculatorTip.val() * 1;
        result = amount + amount * ( percent / 100 );
        calculatorResult.text( result.toFixed(2) + '$' );
    });


    // RANGE FUNCTION
    // ----------------------------------------------------------

    calculatorTip.on('change', function () {

        if ( calculatorBill.val() === '' || isNaN( calculatorBill.val() ) ) {
            alert('Enter bill amount, please!')
        } else {
            amount = calculatorBill.val() * 1;
        }

        tipAmount.text( calculatorTip.val() + '%' );
        percent = calculatorTip.val() * 1;
        result = amount + amount * ( percent / 100 );
        calculatorResult.text( result.toFixed(2) + '$' );
    });
*/
});