import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';

export default class AdminPagesNewRoute extends Route {
  // Services
  @service store!: Store;


  // Hooks
  model() {
    return this.store.createRecord('page');
  }
}
