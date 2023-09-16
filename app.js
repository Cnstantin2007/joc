document.addEventListener('DOMContentLoaded', function () {
  const learnMoreButtons = document.querySelectorAll('.read-more');
  const newArticle = document.querySelector('.new-article');
  const learnMoreButton = document.getElementById('learn-more-button');

  learnMoreButton.addEventListener('click', function () {
    if (
      newArticle.style.display === 'none' ||
      newArticle.style.display === ''
    ) {
      newArticle.style.display = 'block';
      learnMoreButton.innerText = 'Citeste mai putin';
    } else {
      newArticle.style.display = 'none';
      learnMoreButton.innerText = 'Află Mai Mult';
    }
  });

  learnMoreButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var contentDiv = this.nextElementSibling;
      if (
        contentDiv.style.display === 'none' ||
        contentDiv.style.display === ''
      ) {
        contentDiv.style.display = 'block';
        this.innerText = 'Citeste mai putin';
      } else {
        contentDiv.style.display = 'none';
        this.innerText = 'Citeste mai mult';
      }
    });
  });
});
