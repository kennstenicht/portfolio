import PageModel from 'portfolio/models/page';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';

export default class PagesHomeRoute extends Route {
  // Services
  @service store!: Store;


  // Hooks
  buildRouteInfoMetadata() {
    return {
      metaTags(model: PageModel) {
        return {
          title: model.metaTitle || model.metaTitleFallback,
          description: model.metaDescription || model.metaDescriptionFallback,
          type: 'article',
        };
      }
    }
  }

  async model() {
    let pages = await this.store.query('page', {
      filter: {
        slug: 'home'
      }
    });

    return pages.get('firstObject');
  }

  serialize(model: PageModel){
    return {
      page_slug: model.slug
    };
  }
}
