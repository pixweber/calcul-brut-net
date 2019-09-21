var global_data = {
    monthly_wage : 1521.22,
    hourly_wage: 10.03,
    legal_monthly_hours: 151.67,
    working_hours: 100,
    working_months: $('#mois-prime option:selected').val(),
    salary_rate: $('input:radio[name="taux-salaire"]:checked').val()
};

/**
 *
 * @param gross_monthly
 */
function calculate_and_bind_fields(gross_monthly) {

    console.log('Monthly', gross_monthly);

    var gross_monthly = gross_monthly;
    var gross_annual = gross_monthly * global_data.working_months;
    var gross_daily = gross_monthly / 20;
    var gross_hourly = gross_monthly / (global_data.legal_monthly_hours) * (100 / global_data.working_hours);
    var net_monthly = gross_monthly * (1 - global_data.salary_rate);
    var net_annual = net_monthly * global_data.working_months;
    var net_daily = net_monthly / 20;
    var net_hourly = net_monthly / global_data.legal_monthly_hours * ( 100 / global_data.working_hours);

    console.log(gross_monthly, gross_annual, gross_hourly);
    console.log(net_monthly, net_annual, net_hourly );

    $('#brut-horaire').val( Math.round(gross_hourly * 100) / 100 );
    $('#brut-mensuel').val( Math.round( gross_monthly ) );
    $('#brut-annuel').val( Math.round( gross_annual ) );
    $('#net-horaire').val( Math.round(net_hourly * 100) / 100 );
    $('#net-mensuel').val( Math.round( net_monthly) );
    $('#net-annuel').val( Math.round( net_annual ) );

}

console.log('Test');

$('#calculator-form input.input-data, #calculator-form select').bind("change paste keyup", function() {

    if ($(this).val()) {

        console.log( $(this).attr('id'), $(this).val() );

        let gross_monthly = 0;

        switch ($(this).attr('id')) {
            case "brut-horaire":
                gross_monthly = $(this).val() * (global_data.legal_monthly_hours) * (global_data.working_hours / 100);
                break;

            case "brut-mensuel":
                gross_monthly = $(this).val();
                break;

            case "brut-annuel":
                gross_monthly = $(this).val() / global_data.working_months;
                break;

            case "net-horaire":
                gross_monthly = ( $(this).val() * (global_data.legal_monthly_hours) ) / (1 - global_data.salary_rate) * (global_data.working_hours / 100);
                break;

            case "net-mensuel":
                gross_monthly = $(this).val() / (1 - global_data.salary_rate);
                break;

            case "net-annuel":
                gross_monthly = $(this).val() / ((1 - global_data.salary_rate) * global_data.working_months);
                break;

            case "mois-prime":
                global_data.working_months = $(this).val();
                gross_monthly = $('#brut-mensuel').val();
                break;

            case "temps-travail":
                global_data.working_hours = $(this).val();
                gross_monthly = $('#brut-mensuel').val();
                break;

            default:
                console.log("No option selected");
        }

        calculate_and_bind_fields(gross_monthly);
    }
});

$("input[name='taux-salaire']").change(function(){
    global_data.salary_rate = $("input[name='taux-salaire']:checked").val();
    calculate_and_bind_fields($('#brut-mensuel').val());
});

$("#temps-travail").change(function(){
    /*global_data.working_hours = ( $(this).val() / 35) * 100;
    calculate_and_bind_fields($('#brut-mensuel').val());*/
    var selected_working_hours = $(this).val();

    if ( selected_working_hours == '0') {
        calculate_and_bind_fields(0);
        return;
    }

    var old_working_hours = global_data.working_hours;
    global_data.working_hours = $(this).val();
    var mensuelbrut = $('#brut-mensuel').val();

    calculate_and_bind_fields(mensuelbrut * (global_data.working_hours / old_working_hours))
});

$("#metiers-populaires").change(function(){
    calculate_and_bind_fields($(this).val());
});
