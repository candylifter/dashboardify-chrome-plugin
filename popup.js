document.addEventListener('DOMContentLoaded', function () {
  var selectAreaToggle = document.getElementById('select-area-toggle');

  selectAreaToggle.onclick = function () {
    this.disabled = true;
  }
});
