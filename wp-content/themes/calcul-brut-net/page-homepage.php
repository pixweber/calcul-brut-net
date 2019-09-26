<?php get_header(); ?>

    <!--Calculator section-->
    <div id="calculator-section">
        <div id="calculator-section-inner" class="container pt-5 pb-5">
            <h1 class="text-white mb-3 pl-3">Calcul du salaire brut en net</h1>
            <div class="rounded bg-light-grey p-3 p-sm-4">
                <form id="calculator-form">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="gross-hourly">Horaire brut</label>
                                <input type="text" class="input-data form-control" name="gross-hourly" id="gross-hourly" value="0">
                            </div>

                            <div class="form-group">
                                <label for="gross-monthly">Mensuel brut</label>
                                <input type="text" class="input-data form-control" name="gross-monthly" id="gross-monthly" placeholder="" value="0">
                            </div>

                            <div class="form-group">
                                <label for="gross-annual">Annuel brut</label>
                                <input type="text" class="input-data form-control" name="gross-annual" id="gross-annual" placeholder="" value="0">
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="net-hourly">Horaire net</label>
                                <input type="text" class="input-data form-control" name="net-hourly" id="net-hourly" value="0">
                            </div>

                            <div class="form-group">
                                <label for="net-monthly">Mensuel net</label>
                                <input type="text" class="input-data form-control" name="net-monthly" id="net-monthly" placeholder="" value="0">
                            </div>

                            <div class="form-group">
                                <label for="net-annual">Annuel net</label>
                                <input type="text" class="input-data form-control" name="net-annual" id="net-annual" placeholder="" value="0">
                            </div>
                        </div>

                        <div class="col-sm-5">
                            <div class="form-group">
                                <label for="mois-prime">Nombre de mois de prime conventionnelle</label>
                                <select class="form-control" name="mois-prime" id="mois-prime">
                                    <option value="12" selected>12 mois</option>
                                    <option value="13">13 mois</option>
                                    <option value="14">14 mois</option>
                                    <option value="15">15 mois</option>
                                    <option value="16">16 mois</option>
                                </select>
                            </div>
                            <div id="temps-travail-form-group" class="form-group">
                                <label for="temps-travail">Temps de travail : <span id="temps-travail-number">35</span>h/semaine</label>
                                <input type="range" class="custom-range" min="3" max="35" step="1" id="temps-travail" value="35">
                            </div>

                            <div class="row">
                                <div class="col-3">
                                    <label>Statut</label>
                                </div>
                                <div class="col text-right font-size-08rem text-warning-salaire-brut pt-1">
                                    Retenu sur votre salaire brut :<br/><b>- 20%</b>
                                </div>
                            </div>
                            <div id="travail-statut" class="shadow-sm border p-2">
                                <div class="row">
                                    <!--<div class="col-2 text-center">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input mouse-hand" id="statut-smic" name="salary-rate" required value="0.22">
                                            <label class="custom-control-label" for="statut-smic"></label>
                                        </div>
                                        <label for="statut-smic" class="mouse-hand font-size-07rem">
                                            SMIC
                                        </label>
                                    </div>-->
                                    <div class="col-1">
                                    </div>
                                    <div class="col-2 text-center pl-0 pr-0">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input mouse-hand" id="statut-salarie-non-cadre" name="salary-rate" required value="0.22" checked>
                                            <label class="custom-control-label" for="statut-salarie-non-cadre"></label>
                                        </div>
                                        <label for="statut-salarie-non-cadre" class="mouse-hand font-size-07rem">
                                            Salarié
                                            non-cadre
                                        </label>
                                    </div>
                                    <div class="col-2 text-center pl-0 pr-0">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input mouse-hand" id="statut-salarie-cadre" name="salary-rate" required value="0.25">
                                            <label class="custom-control-label" for="statut-salarie-cadre"></label>
                                        </div>
                                        <label for="statut-salarie-cadre" class="mouse-hand font-size-07rem">
                                            Salarié
                                            cadre
                                        </label>
                                    </div>
                                    <div class="col-2 text-center pl-0 pr-0">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input mouse-hand" id="statut-fonction-publique" name="salary-rate" required value="0.15">
                                            <label class="custom-control-label" for="statut-fonction-publique"></label>
                                        </div>
                                        <label for="statut-fonction-publique" class="mouse-hand font-size-07rem">
                                            Fonction
                                            publique
                                        </label>
                                    </div>
                                    <div class="col-2 text-center pl-0 pr-0">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input mouse-hand" id="statut-fonction-liberal" name="salary-rate" required value="0.45">
                                            <label class="custom-control-label" for="statut-fonction-liberal"></label>
                                        </div>
                                        <label for="statut-fonction-liberal" class="mouse-hand font-size-07rem">
                                            Fonction
                                            liberale
                                        </label>
                                    </div>
                                    <div class="col-2 text-center pl-0 pr-0">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input mouse-hand" id="statut-portage-salarial" name="salary-rate" required value="0.51">
                                            <label class="custom-control-label" for="statut-portage-salarial"></label>
                                        </div>
                                        <label for="statut-portage-salarial" class="mouse-hand font-size-07rem">
                                            Portage
                                            salarial
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="form-group">
                            <label for="metiers-populaires">Ou selectionner un metier,</label>
                            <select class="form-control" name="metiers-populaires" id="metiers-populaires">
                                <option value="0">pour connaitre rapidement son revenu moyen en France (ex. Informaticien, Caissier, Infirmier)</option>
                                <option value="70000">Informaticien</option>
                                <option value="2500">Vendeur</option>
                                <option value="2400">Livreur</option>
                            </select>
                        </div>
                    </div>

                    <div id="result-panel" class="mt-4 p-2">
                        <div class="row">
                            <div class="col-sm-4 pt-1">
                                <div class="row">
                                    <div class="col-2 pr-0 text-center font-size-2rem">
                                        <img src="<?php echo TEMPLATE_URI; ?>/img/calculator.png" width="100"/>
                                        <!--<i class="fas fa-calculator"></i>-->
                                    </div>
                                    <div class="col-10 pt-1">
                                        <div class="form-group">
                                            <label for="source-rate">Avec taux de prélèvement<br/>à la source : <span id="source-rate-percent">0</span>%</label>
                                            <input type="range" class="custom-range" min="0" max="100" step="1" id="source-rate" value="0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm">
                                <div class="form-group">
                                    <label for="result-monthly-net">Mensuel net</label><br/><label>après impôts</label>
                                    <input type="text" name="result-monthly-net" id="result-monthly-net" class="form-control" disabled value="0">
                                </div>
                            </div>
                            <div class="col-12 col-sm">
                                <div class="form-group">
                                    <label for="result-annual-net">Annuel net</label><br/><label>après impôts </label>
                                    <input type="text" name="result-annual-net" id="result-annual-net" class="form-control" disabled value="0">
                                </div>
                            </div>
                            <div class="col-12 col-sm pl-5 pt-5 pr-5">
                                <button type="button" id="calculator-form-reset" class="btn btn-warning btn-block btn-md">Réinitialiser</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
    <!--End calculator section-->

    <!--Content section-->
    <div id="site-content-section" class="p-5">
        <div id="site-content-section-inner">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Calculer son salaire net</h4>
                        <hr />
                        <p>Aliquam scelerisque ex vitae arcu feugiat condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor id nunc eget consequat. Proin egestas fringilla vulputate. Phasellus eu augue ut dolor porta finibus. Nunc egestas malesuada maximus.</p>
                        <p>Donec vitae lacus at turpis tempor auctor in pellentesque eros. Donec sit amet nunc risus. Proin rutrum, lectus at pharetra cursus, nulla lorem lacinia augue, vel maximus enim ipsum non massa. Quisque sit amet elit luctus, vestibulum ligula et, rhoncus urna. Vestibulum ut pellentesque magna. Maecenas lacinia placerat rutrum. Nunc consectetur viverra maximus.</p>
                    </div>
                </div>

                <div class="card mt-4">
                    <div class="card-body">
                        <h4 class="card-title">Pourquoi calculer votre salaire brut net ?</h4>
                        <hr />
                        <p>Aliquam scelerisque ex vitae arcu feugiat condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor id nunc eget consequat. Proin egestas fringilla vulputate. Phasellus eu augue ut dolor porta finibus. Nunc egestas malesuada maximus.</p>
                        <p>Donec vitae lacus at turpis tempor auctor in pellentesque eros. Donec sit amet nunc risus. Proin rutrum, lectus at pharetra cursus, nulla lorem lacinia augue, vel maximus enim ipsum non massa. Quisque sit amet elit luctus, vestibulum ligula et, rhoncus urna. Vestibulum ut pellentesque magna. Maecenas lacinia placerat rutrum. Nunc consectetur viverra maximus.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End Content section-->

<?php get_footer(); ?>