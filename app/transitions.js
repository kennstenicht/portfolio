export default function(){
  this.transition(
    this.fromRoute('projects.index'),
    this.toRoute('projects.show'),
    this.use('explode', {
      matchBy: 'data-slug',
      use: ['fly-to', {duration: 1000, easing: 'easeInOutQuart'}]
    },{
      pickOld: '.c-project-preview--prev',
      use: ['toLeft', {duration: 1000, easing: 'easeInOutQuart'}]
    },{
      pickOld: '.c-project-preview--next',
      use: ['toRight', {duration: 1000, easing: 'easeInOutQuart'}]
    },{
      matchBy: 'data-title',
      use: ['fly-to', {duration: 1000, easing: 'easeInOutQuart'}]
    },{
      use: ['fade', {duration: 1000 / 2}]
    }),
    this.reverse('scrollThen', 'explode', { duration: 500 }, {
      matchBy: 'data-slug',
      use: ['fly-to', {duration: 1000, easing: 'easeInOutQuart'}]
    },{
      pickNew: '.c-project-preview--prev',
      use: ['toRight', {duration: 1000, easing: 'easeInOutQuart'}]
    },{
      pickNew: '.c-project-preview--next',
      use: ['toLeft', {duration: 1000, easing: 'easeInOutQuart'}]
    }, {
      use: ['fade', {duration: 1000 / 2}]
    })
  );
}