import EmberRouter from '@ember/routing/router';
import config from 'portfolio/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  // Admin and Login
  this.route('admin', function() {
    this.route('projects', function() {
      this.route('project', { path: ':project_id' });
      this.route('new');
    });
    this.route('pages', function() {
      this.route('page', { path: ':page_id' });
      this.route('new');
    });
  });
  this.route('login');

  // Pages
  this.route('pages', { path: '/' }, function() {
    this.route('show', { path: ':page_slug' });
    this.route('home', { path: '/' });
  });

  // Projects
  this.route('projects', function() {
    this.route('show', { path: ':project_slug' });
  });

  // Error
  this.route('error', { path: '/*path' });
});
