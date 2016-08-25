var expect    = require('chai').expect;
var converter = require('./converter');

describe('Color Code Converter', () => {
  describe('RGB to Hex conversion', () => {
    it('converts the basic colors', () => {
      var redHex   = converter.rgbToHex(255, 0, 0);
      var greenHex = converter.rgbToHex(0, 255, 0);
      var blueHex  = converter.rgbToHex(0, 0, 255);

      expect(redHex).to.equal('ff0000');
      expect(greenHex).to.equal('00ff00');
      expect(blueHex).to.equal('0000ff');
    });
  });

  describe('Hex to RGB conversion', () => {
    it('converts the basic colors', () => {
      const red   = converter.hexToRgb('ff0000');
      const green = converter.hexToRgb('00ff00');
      const blue  = converter.hexToRgb('0000ff');

      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);
    });
  });
});
