document.addEventListener('DOMContentLoaded', function () {
  // --- NEWS ARTICLES ---
  const newsLinks = Array.from(document.querySelectorAll('a')).filter((a) =>
    a.textContent.includes('Read Article'),
  );

  newsLinks.forEach((link) => {
    const card = link.closest('.content-card');
    if (!card) return;

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
    if (!card) return;

    const img = card.querySelector('.content-card-img');
    if (!img) return;

    img.style.backgroundImage =
      "url('https://cloud3.rampinteractive.com/richmondcosomfha/images/site/ui/bg-rcfha-events.jpg')";
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = 'center';
    img.style.backgroundRepeat = 'no-repeat';
  });
});
