themeConfig.$inject = ['$mdThemingProvider'];

export default function themeConfig($mdThemingProvider) {

    $mdThemingProvider
        .definePalette('bjLightAmber', {
            '50': '#f8e287',
            '100': '#f7dc6f',
            '200': '#f5d657',
            '300': '#f4d03f',
            '400': '#f2ca27',
            '500': '#f1c40f',
            '600': '#dab10d',
            '700': '#c29d0b',
            '800': '#aa8a0a',
            '900': '#917608',
            'A100': '#f9e8a0',
            'A200': '#fbedb8',
            'A400': '#fcf3d0',
            'A700': '#796307',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100', 'A200', 'A400']
        });

    $mdThemingProvider
        .definePalette('bjAmber', {
            '50': '#ffcb6d',
            '100': '#ffc254',
            '200': '#ffb93a',
            '300': '#ffaf21',
            '400': '#ffa607',
            '500': '#ed9800',
            '600': '#d38800',
            '700': '#ba7700',
            '800': '#a06700',
            '900': '#875700',
            'A100': '#ffd487',
            'A200': '#ffdda0',
            'A400': '#ffe6ba',
            'A700': '#6d4600',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50', '100', '200', 'A100', 'A200', 'A400']
        });

    $mdThemingProvider
        .definePalette('bjDarkGray', {
                '50': '#737373',
                '100': '#666666',
                '200': '#595959',
                '300': '#4d4d4d',
                '400': '#404040',
                '500': '#333',
                '600': '#262626',
                '700': '#1a1a1a',
                '800': '#0d0d0d',
                '900': '#000000',
                'A100': '#808080',
                'A200': '#8c8c8c',
                'A400': '#999999',
                'A700': '#000000',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['A100', 'A200', 'A400', 'A700']
            });

    $mdThemingProvider.setDefaultTheme('bjBeerTheme');

    $mdThemingProvider.theme('bjBeerTheme')
        .primaryPalette('bjDarkGray', {
            'default': '500',
            'hue-1': '200',
            'hue-2': '800',
            'hue-3': 'A700'
        })
        .accentPalette('bjAmber', {
            'default': '500',
            'hue-1': '100',
            'hue-2': '700',
            'hue-3': 'A400'
        });
}