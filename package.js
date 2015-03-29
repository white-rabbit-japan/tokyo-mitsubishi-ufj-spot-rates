Package.describe({
  name: 'whiterabbit:tokyo-mitsubishi-ufj-spot-rates',
  version: '0.0.1',
  summary: 'Returns forex spot rates from Bank of Tokyo Mitsubishi UFJ. USD only for now.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/white-rabbit-japan/tokyo-mitsubishi-ufj-spot-rates.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.addFiles('tokyo-mitsubishi-ufj-spot-rates.js');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('whiterabbit:tokyo-mitsubishi-ufj-spot-rates');
  api.addFiles('tokyo-mitsubishi-ufj-spot-rates-tests.js');
});
