$(document).ready( function () {

    // Initialize a new plugin instance for all
    // e.g. $('input[type="range"]') elements.
    $('input[type="range"]').rangeslider({polyfill: false});



    // VARIABLES
    // ----------------------------------------------------------

    var calculator = $('.calculator');
    var slider1 = calculator.find('.input-1-slider');
    var slider2 = calculator.find('.input-2-slider');
    var slider1amount = calculator.find('.input-1-amount');
    var slider2amount = calculator.find('.input-2-amount');
    var quotationInput1 = calculator.find('.input-1-quote');
    var quotationInput2 = calculator.find('.input-2-quote');
    var totalQuote = calculator.find('.total-quote');

    // INITIALIZE PAGE - POPULATE DATA RESPECTIVELY
    // ----------------------------------------------------------
    $(document).ready(function(){
        // Initialize to display value of Input 1
        slider1amount.text(slider1.val());
        // Initialize to display value of Input 1
        slider2amount.text(slider2.val());

        // Input 1 quotation - 5 is fixed price 5 ringgit
        quotationInput1.text(5 * slider1.val());

        // Input 2 quotation - 7.50 is fixed price 7.50 ringgit
        quotationInput2.text(7.5 * slider2.val());
        
        // Caluclate value of total quote
        totalQuotation();
    });

    // SLIDER CHANGE
    // ----------------------------------------------------------
    slider1.on('input', function(){
        // Initialize to display value of Input 1
        slider1amount.text(slider1.val());

        // Input 1 quotation - 5 is fixed price 5 ringgit
        quotationInput1.text(5 * slider1.val());

        // Calculate value of total quote
        totalQuotation();
    });

    slider2.on('input', function(){
        // Initialize to display value of Input 1
        slider2amount.text(slider2.val());

        // Input 1 quotation - 5 is fixed price 5 ringgit
        quotationInput2.text(7.5 * slider2.val());

        // Calculate value of total quote
        totalQuotation();
    })

    // CALCULATE TOTAL QUOTATION
    // ----------------------------------------------------------
    function totalQuotation(){
        let calculatedQuote = 
            (slider1.val() * 5) + 
            (slider2.val() * 7.5);
        
        totalQuote.text(calculatedQuote);
    }

})