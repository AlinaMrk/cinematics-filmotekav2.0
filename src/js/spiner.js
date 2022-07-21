document.body.onload = function () {
  setTimeout(function () {
    if (document.getElementById('page-preloader')) {
      const preloader = document.getElementById('page-preloader');
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }
  }, 500);
};
