import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    return get(this, 'store').query('project', {
      orderBy: 'position',
    }).then(function(data) {
      return data.filterBy('visible', true);
    });
  }
});
