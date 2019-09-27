jQuery(document).ready(function($){
    var global_data = {
        monthly_wage : 1521.22,
        hourly_wage: 10.03,
        legal_monthly_hours: 151.67,
        working_hours: 100,
        working_months: parseFloat($('#mois-prime option:selected').val()),
        salary_rate: parseFloat($('input:radio[name="salary-rate"]:checked').val()),
        source_rate: parseFloat($('#source-rate').val())
    };

    /**
     *
     * @param gross_monthly
     */
    function calculate_and_bind_fields(gross_monthly) {

        console.log('Monthly', gross_monthly);

        var gross_monthly = gross_monthly;
        var gross_annual = gross_monthly * global_data.working_months;
        var gross_hourly = gross_monthly / (global_data.legal_monthly_hours) * (100 / global_data.working_hours);

        var net_monthly = gross_monthly * (1 - global_data.salary_rate);
        var net_annual = net_monthly * global_data.working_months;
        var net_hourly = net_monthly / global_data.legal_monthly_hours * ( 100 / global_data.working_hours);

        var mensuelNetSource = (gross_monthly * (1 - global_data.salary_rate)) - (gross_monthly * (1 - global_data.salary_rate) * (global_data.source_rate / 100));
        var annuelNetSource = mensuelNetSource * global_data.working_months;

        console.log('gross_monthly', gross_monthly);
        console.log('global_data.salary_rate', global_data.salary_rate);
        console.log('global_data.source_rate', global_data.source_rate);
        console.log('mensuelNetSource', mensuelNetSource);

        if (gross_monthly == '0'){
            $('#gross-hourly').val('0.00');
        } else {
            $('#gross-hourly').val( Math.round(gross_hourly * 100) / 100 );
        }
        $('#gross-monthly').val( Math.round( gross_monthly ) );
        $('#gross-annual').val( Math.round( gross_annual ) );
        $('#net-hourly').val( Math.round(net_hourly * 100) / 100 );
        $('#net-monthly').val( Math.round( net_monthly) );
        $('#net-annual').val( Math.round( net_annual ) );

        $('#result-monthly-net').val(Math.round(mensuelNetSource));
        $('#result-annual-net').val(Math.round(annuelNetSource))

    }

    console.log('Test');

    $("#metiers-populaires").change(function() {
        $('html, body').animate({
            scrollTop: $('#before-calculator-section').offset().top - 50
        }, 1200);
    });

    $('#calculator-form input.input-data, #calculator-form select').bind("change paste keyup", function() {

        if ($(this).val()) {

            console.log( $(this).attr('id'), $(this).val() );

            let gross_monthly = 0;

            switch ($(this).attr('id')) {
                case "gross-hourly":
                    gross_monthly = $(this).val() * (global_data.legal_monthly_hours) * (global_data.working_hours / 100);
                    break;

                case "gross-monthly":
                    gross_monthly = $(this).val();
                    break;

                case "gross-annual":
                    gross_monthly = $(this).val() / global_data.working_months;
                    break;

                case "net-hourly":
                    gross_monthly = ( $(this).val() * (global_data.legal_monthly_hours) ) / (1 - global_data.salary_rate) * (global_data.working_hours / 100);
                    break;

                case "net-monthly":
                    gross_monthly = $(this).val() / (1 - global_data.salary_rate);
                    break;

                case "net-annual":
                    gross_monthly = $(this).val() / ((1 - global_data.salary_rate) * global_data.working_months);
                    break;

                case "mois-prime":
                    global_data.working_months = $(this).val();
                    gross_monthly = $('#gross-monthly').val();
                    break;

                case "temps-travail":
                    global_data.working_hours = $(this).val();
                    gross_monthly = $('#gross-monthly').val();
                    break;

                default:
                    console.log("No option selected");
            }

            calculate_and_bind_fields(gross_monthly);
        }
    });

    $("input[name='salary-rate']").change(function(){
        global_data.salary_rate = $("input[name='salary-rate']:checked").val();
        calculate_and_bind_fields($('#gross-monthly').val());
    });

    $("#source-rate").change(function(){
        global_data.source_rate = parseFloat($(this).val());

        console.log(global_data.source_rate);

        calculate_and_bind_fields( $('#gross-monthly').val() );
    });

    $("#temps-travail").change(function(){
        /*global_data.working_hours = ( $(this).val() / 35) * 100;
        calculate_and_bind_fields($('#gross-monthly').val());*/
        var selected_working_hours = $(this).val();

        if ( selected_working_hours == '0') {
            calculate_and_bind_fields(0);
            return;
        }

        var old_working_hours = global_data.working_hours;
        global_data.working_hours = $(this).val();
        var monthlygross = $('#gross-monthly').val();

        calculate_and_bind_fields(monthlygross * (global_data.working_hours / old_working_hours))
    });

    $("#metiers-populaires").change(function(){
        calculate_and_bind_fields( $(this).val() );
    });

    $('#source-rate').change(function(){
        var source_rate_percent = $(this).val();
        $('#source-rate-percent').text(source_rate_percent);
    });


    $('#temps-travail').change(function(){
        var temps_travail_number = $(this).val();
        $('#temps-travail-number').text(temps_travail_number);
    });


    function fillgrossmonthly1(){
        calculate_and_bind_fields(5);
    }
    
    function fillgrossmonthly2(){
        calculate_and_bind_fields(50);
    }
    
    function fillgrossmonthly3(){
        calculate_and_bind_fields(500);
    }
    
    function fillgrossmonthly4(){
        calculate_and_bind_fields(5000);
    }
    
    function fillgrossmonthly5(){
        calculate_and_bind_fields(0);
    }
    
    setTimeout(fillgrossmonthly1, 1000);
    setTimeout(fillgrossmonthly2, 2000);
    setTimeout(fillgrossmonthly3, 3000);
    setTimeout(fillgrossmonthly4, 4000);
    setTimeout(fillgrossmonthly5, 5000);


});


