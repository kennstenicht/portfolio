import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
import BEM from 'ember-cli-bem/mixins/bem';

export default Component.extend(BEM, {
  // Services
  swiper: service(),

  // Defaults
  blockName: 'c-project-detail-header',
  classNameBindings: ['slug'],
  attributeBindings: ['data-preview-background'],

  // Computed Properties
  slug: computed('project.slug', function () {
    return this.blockName + '--' + this.project.slug;
  }),

  // Hooks
  didInsertElement() {
    this._super(...arguments);

    set(this, 'swiper.position', this.project.position);
  },
});
