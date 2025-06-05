function show(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(sec => {
    sec.style.display = 'none';
  });
  const secao = document.getElementById(id);
  if (secao) {
    secao.style.display = 'block';
    secao.scrollIntoView({behavior: 'smooth'});
  }
}
