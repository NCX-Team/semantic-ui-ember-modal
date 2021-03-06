import Ember from 'ember';
import UiModal from 'semantic-ui-ember/components/ui-modal';
import SemanticUiActionsMixin from 'semantic-ui-ember-modal/mixins/semantic-ui-actions';
import SemanticUiDefaultsMixin from 'semantic-ui-ember-modal/mixins/semantic-ui-defaults';
import ComponentMixin from 'semantic-ui-ember-modal/mixins/component';
import SpreadMixin from 'ember-spread';

export function initialize(/* application */) {
  UiModal.reopen(SemanticUiDefaultsMixin, SemanticUiActionsMixin, SpreadMixin);
  Ember.Component.reopen(ComponentMixin);
  Ember.Controller.reopen(ComponentMixin);
}

export default {
  name: 'modal',
  initialize
};
