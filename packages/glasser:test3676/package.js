Package.describe({
  name: 'glasser:test3676',
  version: '0.0.2',
  // Brief, one-line summary of the packagem.
  summary: 'xxx',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('glasser:test3676.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('glasser:test3676');
  api.addFiles('glasser:test3676-tests.js');
});
