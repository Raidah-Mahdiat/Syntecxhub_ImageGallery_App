const photos = [
  { seed: "hallstatt",  src: "https://picsum.photos/seed/hallstatt/700/875",  place: "Hallstatt",       meta: "Austria — Lake district" },
  { seed: "kyoto",      src: "https://picsum.photos/seed/kyoto/700/875",      place: "Arashiyama",      meta: "Kyoto, Japan" },
  { seed: "faroe",      src: "https://picsum.photos/seed/faroe/700/875",      place: "Faroe Islands",   meta: "North Atlantic" },
  { seed: "marrakech",  src: "https://picsum.photos/seed/marrakech/700/875",  place: "Medina",          meta: "Marrakech, Morocco" },
  { seed: "patagonia",  src: "https://picsum.photos/seed/patagonia/700/875",  place: "Torres del Paine", meta: "Patagonia, Chile" },
  { seed: "lofoten",    src: "https://picsum.photos/seed/lofoten/700/875",    place: "Lofoten",         meta: "Norway" },
  { seed: "hoian",      src: "https://picsum.photos/seed/hoian/700/875",      place: "Old Town",        meta: "Hội An, Vietnam" },
  { seed: "santorini",  src: "https://picsum.photos/seed/santorini/700/875",  place: "Oia",             meta: "Santorini, Greece" },
  { seed: "banff",      src: "https://picsum.photos/seed/banff/700/875",      place: "Moraine Lake",    meta: "Alberta, Canada" },
  { seed: "cappadocia", src: "https://picsum.photos/seed/cappadocia/700/875", place: "Göreme",          meta: "Cappadocia, Türkiye" },
  { seed: "iceland",    src: "https://picsum.photos/seed/icelandroad/700/875",place: "Vatnajökull",     meta: "Iceland" },
  { seed: "dolomites",  src: "https://picsum.photos/seed/dolomites/700/875",  place: "Seceda Ridge",    meta: "Dolomites, Italy" }
];

const gallery = document.getElementById("gallery");
const countLabel = document.getElementById("photo-count");

photos.forEach((photo, i) => {
  const figure = document.createElement("figure");
  figure.innerHTML = `
    <img src="${photo.src}" alt="${photo.place}, ${photo.meta}" loading="lazy">
    <figcaption>
      <span class="place">${photo.place}</span>
      <span class="meta">${photo.meta}</span>
    </figcaption>
    <a class="frame-link" href="${photo.src.replace('/700/875','/1400/1750')}" target="_blank" rel="noopener" aria-label="Open full size photo of ${photo.place}"></a>
  `;
  gallery.appendChild(figure);
});

countLabel.textContent = photos.length + " photographs";
