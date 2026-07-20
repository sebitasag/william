(function(){
  var bubble = document.getElementById('wa-widget-bubble');
  var popup = document.getElementById('wa-widget-popup');
  var closeBtn = document.getElementById('wa-widget-close');
  var badge = document.getElementById('wa-widget-badge');
  var tooltip = document.getElementById('wa-widget-tooltip');
  function togglePopup(){
    var isOpen = popup.classList.contains('wa-open');
    if (isOpen) {
      popup.classList.remove('wa-open');
      popup.setAttribute('aria-hidden', 'true');
    } else {
      popup.classList.add('wa-open');
      popup.setAttribute('aria-hidden', 'false');
      if (badge) badge.style.display = 'none';
      if (tooltip) tooltip.style.display = 'none';
    }
  }
  bubble.addEventListener('click', togglePopup);
  bubble.addEventListener('keydown', function(e){
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); togglePopup(); }
  });
  closeBtn.addEventListener('click', function(e){
    e.stopPropagation();
    popup.classList.remove('wa-open');
    popup.setAttribute('aria-hidden', 'true');
  });
})();
