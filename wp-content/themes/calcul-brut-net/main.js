$('input:radio[name=statut]').is(':checked');
$('input:radio[name=nombreMois]').is(':checked');
var calculate = {
    smicmensuel: 1521.22,
    smichoraire: 10.03,
    smicpublication: 2019,
    hparm: 151.67,
    tax: $('input:radio[name=statut]:checked').val(),
    nbmois: $('input:radio[name=nombreMois]:checked').val(),
    tmptravail: 100,
    txsource: 100,
    init: function() {
        this.icheck();
        this.resultnet()
    },
    replaced: function(cinput) {
        cinput = cinput.replace(' ', '');
        cinput = cinput.replace(',', '.');
        cinput = parseFloat(cinput);
        if (isNaN(cinput)) {
            cinput = 0
        }
        return cinput
    },
    tx: function() {
        $('input:radio[name=statut]').bind('click', function() {
            calculate.tax = this.value;
            if (calculate.tax == 0.51) {
                var statut = 'Port -51%'
            } else if (calculate.tax == 0.15) {
                var statut = 'Public -15%'
            } else if (calculate.tax == 0.25) {
                var statut = 'Cadre -25%'
            } else if (calculate.tax == 0.45) {
                var statut = 'Indé -45%'
            } else {
                var statut = 'Non-cadre -22%'
            }
            $('li #statut').html(statut);
            var mensuelbrut = $('input#brut-mensuel').val();
            calculate.mnet(mensuelbrut)
        })
    },
    nbms: function() {
        $('input:radio[name=nombreMois]').bind('click', function() {
            calculate.nbmois = this.value;
            var mensuelbrut = $('input#brut-mensuel').val();
            calculate.mnet(mensuelbrut)
        })
    },
    tmptl: function() {
        var worktimeKeypressSlider = document.getElementById('worktimeKeypress');
        worktimeKeypressSlider.noUiSlider.on('update', function(values, handle) {
            var oldmensuelbrut = calculate.tmptravail;
            calculate.tmptravail = parseFloat(values[handle]);
            var mensuelbrut = $('input#brut-mensuel').val();
            calculate.mnet(mensuelbrut * (calculate.tmptravail / oldmensuelbrut))
        })
    },
    txsrc: function() {
        var sourceKeypressSlider = document.getElementById('sourceKeypress');
        sourceKeypressSlider.noUiSlider.on('update', function(values, handle) {
            calculate.txsource = parseFloat(values[handle]);
            var mensuelbrut = $('input#brut-mensuel').val();
            calculate.mnetsrc(mensuelbrut, calculate.txsource)
        })
    },
    mnet: function(val) {
        var _this = calculate;
        var mensuelbrut = val;
        var annuelBrut = mensuelbrut * _this.nbmois;
        var jourBrut = mensuelbrut / 20;
        var horaireBrut = mensuelbrut / (_this.hparm) * (100 / _this.tmptravail);
        var mensuelNet = mensuelbrut * (1 - _this.tax);
        var annuelNet = mensuelNet * _this.nbmois;
        var jourNet = mensuelNet / 20;
        var horaireNet = mensuelNet / (_this.hparm) * (100 / _this.tmptravail);
        $('#brut-horaire').val(Math.round(horaireBrut * 100) / 100);
        $('#brut-mensuel').val(Math.round(mensuelbrut));
        $('#brut-annuel').val(Math.round(annuelBrut));
        $('#net-horaire').val(Math.round(horaireNet * 100) / 100);
        $('#net-mensuel').val(Math.round(mensuelNet));
        $('#net-annuel').val(Math.round(annuelNet));
        set_txsource(Math.round(mensuelNet))
    },
    mnetsrc: function(val, txsource) {
        var _this = calculate;
        var mensuelbrut = val;
        var annuelBrut = mensuelbrut * _this.nbmois;
        var jourBrut = mensuelbrut / 20;
        var horaireBrut = mensuelbrut / (_this.hparm) * (100 / _this.tmptravail);
        var mensuelNetSource = (mensuelbrut * (1 - _this.tax)) - (mensuelbrut * (1 - _this.tax) * (txsource / 100));
        var annuelNetSource = mensuelNetSource * _this.nbmois;
        var jourNetSource = mensuelNetSource / 20;
        var horaireNetSource = mensuelNetSource / (_this.hparm) * (100 / _this.tmptravail);
        $('#net-mensuel-source').val(Math.round(mensuelNetSource));
        $('#net-annuel-source').val(Math.round(annuelNetSource))
    },
    resultnet: function() {
        var _this = calculate;
        $('#calculator input.input').keypress(function(event) {
            if (event.which == 8 || event.which == 0) {
                return !0
            }
            if (event.which < 44 || event.which == 45 || event.which == 47 || event.which > 57) {
                return !1
            }
            if (event.which == 44 && $(this).val().indexOf(',') != -1) {
                return !1
            }
            if (event.which == 46 && $(this).val().indexOf('.') != -1) {
                return !1
            }
            $('.filterme').keyup(function(eve) {
                if ($(this).val().indexOf('.') == 0) {
                    $(this).val($(this).val().substring(1))
                }
            })
        });
        $('#calculator input.input').bind("change paste keyup", function() {
            if (this.value && (this.value.substr(-1, 1) != ",") && (this.value.substr(-1, 1) != ".")) {
                switch ($(this).attr('id')) {
                    case "brut-horaire":
                        var horaireBrut = _this.replaced(this.value);
                        var mensuelbrut = horaireBrut * (_this.hparm) * (_this.tmptravail / 100);
                        break;
                    case "brut-mensuel":
                        var mensuelbrut = _this.replaced(this.value);
                        break;
                    case "brut-annuel":
                        var annuelBrut = _this.replaced(this.value);
                        var mensuelbrut = annuelBrut / _this.nbmois;
                        break;
                    case "net-horaire":
                        var horaireNet = _this.replaced(this.value);
                        var mensuelbrut = (horaireNet * (_this.hparm)) / (1 - _this.tax) * (_this.tmptravail / 100);
                        break;
                    case "net-mensuel":
                        var mensuelNet = _this.replaced(this.value);
                        var mensuelbrut = mensuelNet / (1 - _this.tax);
                        break;
                    case "net-annuel":
                        var annuelNet = _this.replaced(this.value);
                        var mensuelbrut = annuelNet / ((1 - _this.tax) * _this.nbmois);
                        break;
                    default:
                        console.log("error no case to switch")
                }
                calculate.mnet(mensuelbrut)
            }
        })
    },
    icheck: function() {
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-red',
            radioClass: 'iradio_square-red',
            increaseArea: '20%'
        })
    }
}
$(document).ready(function() {
    $(".calculator_option").hide()
});
$("#reset").click(function() {
    $("#salary input[name='brut']").val('');
    $("#salary input[name='net']").val('');
    $("#parameters .prelsource input").val('')
});
$(document).ready(function() {
    var worktimeKeypressSlider = document.getElementById('worktimeKeypress');
    var input = document.getElementById('input-with-worktime-keypress');
    noUiSlider.create(worktimeKeypressSlider, {
        start: 100,
        step: 10,
        range: {
            'min': 10,
            'max': 100
        },
        format: wNumb({
            decimals: 0,
            postfix: ' %',
        })
    });
    worktimeKeypressSlider.noUiSlider.on('update', function(values, handle) {
        input.innerHTML = values[handle]
    });
    input.addEventListener('change', function() {
        worktimeKeypressSlider.noUiSlider.set([null, this.value])
    });
    input.addEventListener('keydown', function(e) {
        var value = Number(worktimeKeypressSlider.noUiSlider.get());
        var sliderStep = worktimeKeypressSlider.noUiSlider.steps();
        sliderStep = sliderStep[0];
        switch (e.which) {
            case 13:
                worktimeKeypressSlider.noUiSlider.set(this.value);
                break;
            case 38:
                worktimeKeypressSlider.noUiSlider.set(value + sliderStep[1]);
                break;
            case 40:
                worktimeKeypressSlider.noUiSlider.set(value - sliderStep[0]);
                break
        }
    })
});

$(document).ready(function() {
    var sourceKeypressSlider = document.getElementById('sourceKeypress');
    var input = document.getElementById('input-with-source-keypress');
    noUiSlider.create(sourceKeypressSlider, {
        start: 0,
        step: 0.5,
        range: {
            'min': 0,
            'max': 43
        },
        format: wNumb({
            decimals: 1,
            postfix: ' %',
        })
    });
    sourceKeypressSlider.noUiSlider.on('update', function(values, handle) {
        input.innerHTML = values[handle]
    });
    input.addEventListener('change', function() {
        sourceKeypressSlider.noUiSlider.set([null, this.value])
    });
    input.addEventListener('keydown', function(e) {
        var value = Number(sourceKeypressSlider.noUiSlider.get());
        var sliderStep = sourceKeypressSlider.noUiSlider.steps();
        sliderStep = sliderStep[0];
        switch (e.which) {
            case 13:
                sourceKeypressSlider.noUiSlider.set(this.value);
                break;
            case 38:
                sourceKeypressSlider.noUiSlider.set(value + sliderStep[1]);
                break;
            case 40:
                sourceKeypressSlider.noUiSlider.set(value - sliderStep[0]);
                break
        }
    })
});

function set_txsource(val) {
    var sourceKeypressSlider = document.getElementById('sourceKeypress');
    var taux_neutre_calcul = get_tx_neutre_source(val);
    sourceKeypressSlider.noUiSlider.set(taux_neutre_calcul)
}

function get_tmptravail() {
    var format = wNumb({
        decimals: 0,
        postfix: ' %',
    });
    var slider = document.getElementById('worktimeKeypress');
    var value = slider.noUiSlider.get();
    return format.from(value)
}

function get_txsource() {
    var format = wNumb({
        decimals: 1,
        postfix: ' %',
    });
    var slider = document.getElementById('sourceKeypress');
    var value = slider.noUiSlider.get();
    return format.from(value)
}

function get_tx_neutre_source(val) {
    var revenus_net = [1404, 1457, 1551, 1656, 1769, 1864, 1988, 2578, 2797, 3067, 3452, 4029, 4830, 6043, 7780, 10562, 14795, 22620, 47717];
    var taux_neutre = [0, 0.5, 1.5, 2.5, 3.5, 4.5, 6, 7.5, 9, 10.5, 12, 14, 16, 18, 20, 24, 28, 33, 38, 43];
    var taux_calcul = 0;
    jQuery.each(revenus_net, function(key, montant_revenus_net) {
        if (val < montant_revenus_net) {
            taux_calcul = taux_neutre[key];
            return !1
        } else {
            if ((revenus_net.length - 1) == key) {
                taux_calcul = taux_neutre[key + 1];
                return !1
            } else {
                return !0
            }
        }
    });
    return taux_calcul
}
$(document).ready(function() {
    calculate.init();
    calculate.tx();
    calculate.nbms();
    calculate.tmptl();
    calculate.txsrc()
})