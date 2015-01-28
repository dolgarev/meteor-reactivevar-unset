Package.describe({
  name: 'liberation:reactive-var-unset',
  summary: 'Adds a method "unset" to ReactiveVar',
  version: '1.0.0',
  git: 'https://github.com/dolgarev/reactive-var-unset.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('reactive-var');
  api.addFiles('unset.js', 'client');
});
