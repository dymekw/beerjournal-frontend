/**
 * Created by wojciech_dymek on 10.05.17.
 */
export default function ($http) {

    var countries;
    init();

    this.getCountries = function() {
        countries.then(function(val) {
            if (!val) {
                init();
            }
        })
        return countries;
    };

    this.getCountryFlag = function(countryName) {
        return this.getCountryCode(countryName).then(function(countryCode) {
            return 'http://www.geognos.com/api/en/countries/flag/' + countryCode + '.png';
        }, function() {
            return 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png';
        });
    }

    this.getCountryCode = function(countryName) {
        return $http.get('/api/categories/country').then(function(res) {
            var result;
            angular.forEach(res.data.values, function(country) {
                if (country.name == countryName) {
                    result = country.code;
                }
            });
            return result;
        });
    }

    function init() {
        countries = $http.get('/api/categories/country/')
                            .then(function (res) {
                                return sortCountries(res.data.values);
                            },
                            function() {
                                return undefined;
                            });

    }

    function sortCountries(countries) {
        var FIRST = 'PL';

        countries.sort(function(a, b){
            if(a.code == FIRST) return -1;
            if(b.code == FIRST) return 1;
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        })

        var result = [];
        angular.forEach(countries, function(country) {
            result.push(country.name);
        });
        return result;
    };
}