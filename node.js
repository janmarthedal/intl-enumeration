require('./proposal-intl-enumeration/polyfill/currencies.js');
require('./proposal-intl-enumeration/polyfill/timeZones.js');
require('./proposal-intl-enumeration/polyfill/units.js');
require('./locales');

function show(name, list) {
    list.sort();
    console.log("Supported " + name + " (" + list.length + "): " + list.join(', '));
}

show('currencies', Intl.getSupportedCurrencies());
show('DateTimeFormat locales', Intl.supportedLocales('DateTimeFormat'));
show('NumberFormat locales', Intl.supportedLocales('NumberFormat'));
show('timezones', Intl.getSupportedTimeZones());
show('units', Intl.getSupportedUnits());
