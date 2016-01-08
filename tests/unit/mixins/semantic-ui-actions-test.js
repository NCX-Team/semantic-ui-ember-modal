import Ember from 'ember';
import SemanticUiActionsMixin from '../../../mixins/semantic-ui-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | semantic ui actions');

// Replace this with your real tests.
test('it works', function(assert) {
  let SemanticUiActionsObject = Ember.Object.extend(SemanticUiActionsMixin);
  let subject = SemanticUiActionsObject.create();
  assert.ok(subject);
});
