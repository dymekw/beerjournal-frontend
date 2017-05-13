/**
 * Created by wojciech_dymek on 10.05.17.
 */
import angular from "angular";
import _countriesProvider from '../countries/countries.provider';

export default angular.module("countriesProvider", [])
    .service('countriesProvider', _countriesProvider)
    .name;