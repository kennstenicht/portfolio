import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  // Services
  @service session;


  // Hooks
  beforeModel() {
    if(this.session.isAuthenticated) {
      this.transitionTo('admin');
    }
  }
}