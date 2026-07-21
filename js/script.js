document.addEventListener('DOMContentLoaded', function () {

  var gallery = document.getElementById('gallery');
  if (gallery && typeof CACHORROS !== 'undefined') {
    gallery.innerHTML = CACHORROS.map(function (c) {
      var detalle = c.detalle.split('\n').join('<br>');
      return '<figure>' +
        '<div class="thumb"><img src="' + c.img + '" alt="' + c.nombre + '" loading="lazy"></div>' +
        '<figcaption><h3>' + c.nombre + '</h3><p>' + detalle + '</p></figcaption>' +
        '</figure>';
    }).join('');
  }

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mainNav.classList.remove('open'); });
    });
  }


  var tabs = document.querySelectorAll('.faq-tab');
  var items = document.querySelectorAll('.faq-item');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var cat = tab.getAttribute('data-cat');
      tabs.forEach(function (t) { t.setAttribute('data-active', t === tab ? 'true' : 'false'); });
      items.forEach(function (it) {
        it.hidden = it.getAttribute('data-cat') !== cat;

        var q = it.querySelector('.faq-q');
        var a = it.querySelector('.faq-a');
        q.setAttribute('aria-expanded', 'false');
        a.style.maxHeight = null;
      });
    });
  });


  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var answer = btn.nextElementSibling;
      btn.setAttribute('aria-expanded', (!expanded).toString());
      answer.style.maxHeight = expanded ? null : answer.scrollHeight + 'px';
    });
  });

});
