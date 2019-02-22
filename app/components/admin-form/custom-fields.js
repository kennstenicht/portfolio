import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { inject as service } from '@ember-decorators/service';

export default class AdminFormCustomFieldComponent extends Component {
  // Services
  @service store;

  // Actions
  @action
  addCustomField() {
    let customField = this.store.createRecord('customField');

    this.model.customFields.pushObject(customField);
  }

  @action
  removeCustomField(customField) {
    customField.destroyRecord();
  }
}
