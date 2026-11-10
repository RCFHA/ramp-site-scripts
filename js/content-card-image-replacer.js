document.addEventListener('DOMContentLoaded', function () {
  const assocSportBackgroundPattern =
    /url\(["']?https:\/\/cloud3\.rampinteractive\.com\/(?:[^"'()]*\/)?_global\/ballhockey\/images\/assoc-bg-sport-\d+\.jpg(?:[?#][^"'()]*)?["']?\)/i;

  function hasAssocSportBackground(card) {
    return [card, ...card.querySelectorAll('*')].some((element) =>
      assocSportBackgroundPattern.test(getComputedStyle(element).backgroundImage),
    );
  }

  // --- NEWS ARTICLES ---
  const newsLinks = Array.from(document.querySelectorAll('a')).filter((a) =>
    a.textContent.includes('Read Article'),
  );

  newsLinks.forEach((link) => {
    const card = link.closest('.content-card');
    if (!card || !hasAssocSportBackground(card)) return;

    const img = card.querySelector('.content-card-img');
    if (!img) return;

    img.style.backgroundImage =
      "url('https://cloud3.rampinteractive.com/richmondcosomfha/images/site/ui/bg-rcfha-news.jpg')";
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = 'center';
    img.style.backgroundRepeat = 'no-repeat';
  });

  // --- EVENT DETAILS ---
  const eventLinks = Array.from(document.querySelectorAll('a')).filter((a) =>
    a.textContent.includes('Event Details'),
  );

  eventLinks.forEach((link) => {
    const card = link.closest('.content-card');

    if (!card || !hasAssocSportBackground(card)) return;

    const img = card.querySelector('.content-card-img');
    if (!img) return;

    img.style.backgroundImage =
      "url('https://cloud3.rampinteractive.com/richmondcosomfha/images/site/ui/bg-rcfha-events.jpg')";
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = 'center';
    img.style.backgroundRepeat = 'no-repeat';
  });
});
