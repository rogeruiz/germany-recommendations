$(function () {

  $.get('./data.json', function (d) {
    setup(d);
  });

  function setup (d) {
    $.get('./nav.hogan', function (t) {
      var template = Hogan.compile(t);
      var rendered = template.render(d);
      $('.coffin').append(rendered);
    });
    $.get('./article.hogan', function (t) {
      var template = Hogan.compile(t);
      var rendered = template.render(d);
      $('.page').append(rendered);
    });
  }
});