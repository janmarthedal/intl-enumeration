Intl.supportedDateTimeLocales = function () {
    var locales = Intl.LOCALES;
    var options = { localeMatcher: 'lookup' };
    var matches = [];
    var i;
    for (i = 0; i < locales.length; i++) {
        try {
            if (Intl.DateTimeFormat.supportedLocalesOf(locales[i], options).length === 1) {
                matches.push(locales[i]);
            }
        } catch (e) { }
    }
    return matches;
}