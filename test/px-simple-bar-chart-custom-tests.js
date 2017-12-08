suite('Custom Automation Tests for px-simple-bar-chart', function() {
  let normalizeRgb, getFill;

  ////////////////////////////////////////////////////////////////////////////
  /// SUITE SETUP
  ////////////////////////////////////////////////////////////////////////////

  suiteSetup(function() {
    normalizeRgb = function(rgbString) {
      return rgbString.toString().replace(/\s+/g, '');
    };

    getFill = function(rect, num) {
      var fill = getComputedStyle(rect[num]).fill;

      if (this._colorHexToRgb && (typeof this._colorHexToRgb === "function")) {
        // Attempt to convert value to RGB, if not already RGB
        if ((fill.indexOf('rgb') === -1) && (fill.indexOf('rgba' === -1))) {
          fill = this._colorHexToRgb(fill);
        };
      };

      return normalizeRgb(fill);
    };
  });

  ////////////////////////////////////////////////////////////////////////////
  /// FIXTURE 1
  ////////////////////////////////////////////////////////////////////////////

  suite('Fixture 1', function(done){
    let fixture1;

    setup(function(done){
      fixture1 = fixture("fixture1");
      flush(()=>{
        setTimeout(function() {
          done();
        }, 1000);
      });
    });

    test('Chart has been drawn and is correct size', function(done) {
      var rect = Polymer.dom(fixture1.root).querySelector('rect'),
          svg = Polymer.dom(fixture1.root).querySelector('svg');
      assert.equal(getComputedStyle(rect).visibility,"visible");
      assert.equal(getComputedStyle(svg).height,"150px");
      assert.equal(getComputedStyle(svg).width,"285px");
      assert.equal(getComputedStyle(svg).height,"150px");
      done();
    });

  });

  ////////////////////////////////////////////////////////////////////////////
  /// FIXTURE 2
  ////////////////////////////////////////////////////////////////////////////

  suite('Fixture 2', function(done) {
    let fixture2;

    setup(function(done){
      fixture2 = fixture("fixture2");
      flush(()=>{
        setTimeout(function() {
          done();
        }, 1000);
      });
    });

    test('Chart has the correct height (200px)', function(done) {
      assert.equal(getComputedStyle(Polymer.dom(fixture2.root).querySelector('svg')).height,"200px");
      done();
    });

  });

  ////////////////////////////////////////////////////////////////////////////
  /// FIXTURE 3
  ////////////////////////////////////////////////////////////////////////////

  suite('Fixture 3', function(done) {
    let fixture3;

    setup(function(done){
      fixture3 = fixture("fixture3");
      chart3 = fixture3.querySelector('#chart3');
      flush(()=>{
        setTimeout(function() {
          done();
        }, 1000);
      });
    });

    test('SVG element has assigned width', function(done) {
      assert.equal(getComputedStyle(Polymer.dom(chart3.root).querySelector('svg')).width,"299px");
      assert.equal(getComputedStyle(Polymer.dom(chart3.root).querySelector('svg')).height,"200px");
      done();
    });

    test('Chart resizes to correct height in fixed-size container', function(done) {
      document.getElementById('fixture_dimensions').style.height = '270px';
      document.getElementById('fixture_dimensions').style.width = '400px';
      window.dispatchEvent(new Event('resize'));

      // We wait 1000ms after firing the window-scope resize event to give the
      // chart time to redraw. The chart *should* fire a redrawn event that we
      // listen to and test the result of... but it doesn't for now.
      setTimeout(function(){
        assert.equal(getComputedStyle(Polymer.dom(chart3.root).querySelector('svg')).height,"270px");
        assert.equal(getComputedStyle(Polymer.dom(chart3.root).querySelector('svg')).width,"403px");
        done();
      }, 1000);
    });

  });

  ////////////////////////////////////////////////////////////////////////////
  /// FIXTURE 4
  ////////////////////////////////////////////////////////////////////////////

  suite('Fixture 4', function(done) {
    let fixture4;

    setup(function(done){
      fixture4 = fixture("fixture4");
      flush(()=>{
        setTimeout(function() {
          done();
        }, 1000);
      });
    });

    test('Number of rectangles drawn the chart is equal to the number of data items passed in', function(done) {
      var svg = Polymer.dom(fixture4.root).querySelector('svg');

      assert.equal(svg.querySelectorAll('rect').length,"40");
      done();
    });

    test('Chart colors match default data vis colors', function(done) {
      var svg = Polymer.dom(fixture4.root).querySelector('svg');
      var rect = svg.querySelectorAll('rect');
      var getFillBound = getFill.bind(fixture5);

      // Determine which colors should be set on the chart by calling `_getColor` to retrieve theme, normalize each
      var colors = [
        normalizeRgb(fixture4._getColor(0)),
        normalizeRgb(fixture4._getColor(1)),
        normalizeRgb(fixture4._getColor(2)),
        normalizeRgb(fixture4._getColor(3)),
        normalizeRgb(fixture4._getColor(4))
      ];

      assert.equal(getFillBound(rect, 5),  colors[0]);
      assert.equal(getFillBound(rect, 12), colors[1]);
      assert.equal(getFillBound(rect, 19), colors[2]);
      assert.equal(getFillBound(rect, 26), colors[3]);
      assert.equal(getFillBound(rect, 33), colors[4]);
      done();
    });

    test('Legend was drawn', function(done) {
      var svg = Polymer.dom(fixture4.root).querySelector('svg');
      var rect = svg.querySelectorAll('rect');

      assert.isTrue(rect[0].className.baseVal.indexOf('legend-box') !== -1);
      assert.isTrue(rect[1].className.baseVal.indexOf('legend-box') !== -1);
      assert.isTrue(rect[2].className.baseVal.indexOf('legend-box') !== -1);
      assert.isTrue(rect[3].className.baseVal.indexOf('legend-box') !== -1);
      assert.isTrue(rect[4].className.baseVal.indexOf('legend-box') !== -1);
      done();
    });

  });

  ////////////////////////////////////////////////////////////////////////////
  /// FIXTURE 5
  ////////////////////////////////////////////////////////////////////////////

  suite('Fixture 5', function(done) {
    let fixture5;

    setup(function(done){
      fixture5 = fixture("fixture5");
      flush(()=>{
        setTimeout(function() {
          done();
        }, 1000);
      });
    });

    test('Chart colors match applied CSS custom properties', function(done) {
      var svg = Polymer.dom(fixture5.root).querySelector('svg');
      var rect = svg.querySelectorAll('rect');
      var getFillBound = getFill.bind(fixture5);

      // Just copy and pasting the RGB values from above into strings to test that
      // the colors the user provides are actually provided, not just that the
      // the internal `_getColor` method returns what it should
      var colors = [
        normalizeRgb('rgb(1,2,3)'),
        normalizeRgb('rgb(4,5,6)'),
        normalizeRgb('rgb(7,8,9)'),
        normalizeRgb('rgb(10,11,12)'),
        normalizeRgb('rgb(255,255,0)')
      ];

      assert.equal(getFillBound(rect, 5),  colors[0]);
      assert.equal(getFillBound(rect, 12), colors[1]);
      assert.equal(getFillBound(rect, 19), colors[2]);
      assert.equal(getFillBound(rect, 26), colors[3]);
      assert.equal(getFillBound(rect, 33), colors[4]);
      done();
    });

  });

  ////////////////////////////////////////////////////////////////////////////
  /// FIXTURE 6
  ////////////////////////////////////////////////////////////////////////////

  suite('Fixture 6', function(done) {
    let fixture6;

    setup(function(done){
      fixture6 = fixture("fixture6");
      flush(()=>{
        setTimeout(function() {
          done();
        }, 1000);
      });
    });

    test('Chart colors assigned by attribute override applied CSS custom properties', function(done) {
      var svg = Polymer.dom(fixture6.root).querySelector('svg');
      var rect = svg.querySelectorAll('rect');
      var getFillBound = getFill.bind(fixture6);

      // Just copy and pasting the RGB values from above into strings to test that
      // the colors the user provides are actually provided, not just that the
      // the internal `_getColor` method returns what it should
      var colors = [
        normalizeRgb(fixture6._colorHexToRgb('#aaa')),
        normalizeRgb(fixture6._colorHexToRgb('#bbb')),
        normalizeRgb(fixture6._colorHexToRgb('#ccc')),
        normalizeRgb(fixture6._colorHexToRgb('#ddd')),
        normalizeRgb(fixture6._colorHexToRgb('#eee'))
      ];

      assert.equal(getFillBound(rect, 5),  colors[0]);
      assert.equal(getFillBound(rect, 12), colors[1]);
      assert.equal(getFillBound(rect, 19), colors[2]);
      assert.equal(getFillBound(rect, 26), colors[3]);
      assert.equal(getFillBound(rect, 33), colors[4]);
      done();
    });

  });

});
