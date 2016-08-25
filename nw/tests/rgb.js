module.exports = {
    'Test rgb': (browser) => {
        browser
            .url(`${browser.globals.host}/rgbToHex?red=255&green=255&blue=255`)
            .waitForElementVisible('body', 1000)
            .pause(2000)
            .assert.containsText('body', 'ffffff')
            .end()
    },
    after: (browser) => {
        browser.end()
    }
};
