import './../scss/app.scss';

(function iffe() {
  const mainContent = Array.from(document.querySelectorAll('.main-section'));
  const navLinks = Array.from(document.querySelectorAll('#navbar > ul > li > a'));
  const mainDoc = document.getElementById('main-doc');

  const sectionIdnavLinkMap = {};
  mainContent.forEach((section) => {
    sectionIdnavLinkMap[section.id] = document.querySelector(`#navbar a[href="#${section.id}"]`);
  });

  function highlightNav() {
    const position = mainDoc.scrollTop + 200;
    mainContent.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (position >= sectionTop) {
        const { id } = section;
        const navLink = sectionIdnavLinkMap[id];
        if (!navLink.classList.contains('active')) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
          });
          navLink.classList.add('active');
        }
        return false;
      }
      return false;
    });
  }

  document.getElementById('main-doc').addEventListener('scroll', () => {
    highlightNav();
  });

  window.addEventListener('load', () => {
    highlightNav();
  });
}());
