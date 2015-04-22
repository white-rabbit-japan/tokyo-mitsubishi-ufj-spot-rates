function _extractFloat(field) {
  return parseFloat(field.match(/\d+(?:\.\d+)?/));
}

Meteor.methods({
  mufgRates: function() {
    this.unblock();
    var result = HTTP.call("GET", "http://www.bk.mufg.jp/gdocs/kinri/list_j/kinri/spot_rate.csv");

    check(result, Match.Where(function(result) {
      return result.statusCode === 200;
    }));

    //extract date time
    var re = /(\d{4}\/\d{2}\/\d{2})\s\d{2}:\d{2}/;
    var pos = result.content.search(re);
    var updatedAt = new Date(result.content.slice(pos, pos + 16));

    var res = result.content.slice(result.content.indexOf('USD') - 1);
    res = res.slice(0, res.indexOf('\n'));
    var rates = res.split(',');

    var forex = {
      base: 'JPY',
      updatedAt: updatedAt,
      currencies: [{
        currency: 'USD',
        rates: {
          'ttBuy': _extractFloat(rates[4]) * 100,
          'cashBuy': _extractFloat(rates[7]) * 100,
          'cashSell': _extractFloat(rates[3]) * 100,
          'atSight': _extractFloat(rates[5]) * 100,
          'ttSell': _extractFloat(rates[1]) * 100,
        },
      }],
    };

    return forex;
  }
});
