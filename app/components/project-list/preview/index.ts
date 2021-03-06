import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import RouterService from '@ember/routing/router-service';
import { parallel, wait } from 'ember-animated';
// @ts-ignore
import move from 'ember-animated/motions/move';
import resize from 'ember-animated/motions/resize';
// @ts-ignore
import adjustColor from 'ember-animated/motions/adjust-color';
import TransitionContext from 'ember-animated/-private/transition-context';

export default class ProjectListPreviewComponent extends Component {
  // Services
  @service router!: RouterService;


  // Defaults
  duration = 600;


  // Functions
  backgroundTransition = function * ({ sentSprites }: TransitionContext) {
    sentSprites.forEach(sprite => {
      sprite.applyStyles({
        'z-index': '3'
      });
    });

    sentSprites.forEach(sprite => {

    });
    sentSprites.forEach(parallel(move, resize));
  }

  typoTransition = function * ({ sentSprites }: TransitionContext) {
    sentSprites.forEach(sprite => {
      sprite.applyStyles({
        'z-index': '4'
      });

      parallel(
        move(sprite),
        adjustColor('color', sprite)
      );
    });
  }
}
