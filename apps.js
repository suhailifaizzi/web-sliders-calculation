$(document).ready( function () {

    /**
     * VARIABLES
     */
    var calculatedAmount;                                   // Declare variables to use in js
    var calculator = $('.calculator');                      // Link to calculator form
    var input1Slider = calculator.find('input-1-slider');   // Link to 1st slider
    var input1Amount = calculator.find('input-1-amount');    // Link to span for slider 1 amount
    var totalAmount = calculator.find('total-amount');      // Link to total amount

    /**
     * INIT PAGE (FILLS UP DEFAULT SPAN VALUE)
     */
    $(window).on('DOMContentLoaded', function(){

    });

    $(window).on('DOMContentLoaded', function () {
        tipAmount.text( calculatorTip.val() + '%' );
        amount = calculatorBill.val() * 1;
        percent = calculatorTip.val() * 1;
        result = amount + amount * ( percent / 100 );
        calculatorResult.text( result.toFixed(2) + '$' );
    });


    /**
     * SLIDER FUNCTION;
     */
    input1Slider.on('change', function(){
        input1Amount.text(input1Slider.val());
        calculatedAmount = input1Slider.val() * 5;
        totalAmount.text('RM ' + calculatedAmount.toFixed(2));
    });
/*
    // VARIABLES
    // ----------------------------------------------------------

    var amount, percent, result;
    var calculator = $('.calculator');
    var calculatorBill = calculator.find('.calculator__bill');
    var calculatorTip = calculator.find('.calculator__tip');
    var calculatorResult = calculator.find('.calculator__result');
    var tipAmount = calculator.find('.tip-amount');


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