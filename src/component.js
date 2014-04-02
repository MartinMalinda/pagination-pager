var PaginationPagerComponent = Ember.Component.extend({
  tagName: 'ul',
  classNameBindings: ['pager:pager:pagination', 'paginationSizeClass'],
  pager: false,
  pagerNext: 'Next',
  pagerPrevious: 'Previous',
  paginationPrevious: '«',
  paginationNext: '»',
  firstPage: 1,
  current: 1,
  lastPage: Ember.computed.alias('count'),

  currentPage: function () {
    return Number(this.get('current'));
  }.property('current'),
  
  paginationSizeClass: function () {
    var size = this.get('size'),
        pager = this.get('pager');
    
    return !pager && size && (size === 'lg' || size === 'sm') ? 'pagination-' + size : '';
  }.property('paginationSize'),
  
  isFirst: function () {
    return this.get('current') == this.get('firstPage');
  }.property('firstPage', 'current'),
  
  isLast: function () {
    return this.get('current') == this.get('lastPage');
  }.property('lastPage', 'current'),
                                                  
  pages: function () {
    var count = this.get('count'),
      result = [],
      i = 1;
    
    for (; i <= count; i++) {
      result.push(i);
    }
                                                   
    return result; 
  }.property('count'),

  click: function (event) {
    // stop `#` from jumping to top of page
    event.preventDefault();
  },
  
  actions: {
    next: function () {
      if (!this.get('isLast')) {
        var current = this.get('current');
        this.set('current', parseInt(current, 10) + 1);
      }
    },
      
    previous: function () {
      if (!this.get('isFirst')) {
        var current = this.get('current');
        this.set('current', parseInt(current, 10) - 1);
      }
    }
  }
});
