const modules = [
  {
    title: 'Transformando Comportamentos em tempos de mudança',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 4.5,
    totalRatings: 100,
    points: 20000,
    imageUrl: 'https://www.gov.br/inep/pt-br/assuntos/noticias/imagens/I_professora_no_pc.png/@@images/image'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3.2,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2019/04/news-konviva.png'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3.5,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2019/04/news-ilog.png'
  },
  {
    title: 'Análise Comportamental',
    duration: '80h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3.1,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2018/08/04.jpg'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 2.5,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2020/03/Informal-Learning-Blog.png'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3.8,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://elearningindustry.com/wp-content/uploads/2017/07/e66145fc679f0268ead15bbebea8be45-800x525-1-e1500903141602.png'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3.9,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/55eb4adbe4b097dd68b32ba4/1571557450473-5R3ZBMMOTXJCJ0VIZRT1/image2.jpg?format=1000w'
  },
  {
    title: 'Treine sua liderança',
    duration: '15h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3.5,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/12/iStock-1320918242-720x480.jpg'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3.5,
    totalRatings: 150,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2023/02/iStock-1366793164-720x326.jpg'
  },
  {
    title: 'Como utilizar a plataforma PID',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 5.2,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2023/03/iStock-1358748397-720x405.jpg'
  },
  {
    title: 'Treine Times de 500 pessoas',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 5.3,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2023/03/iStock-1386241232-720x480.jpg'
  },
  {
    title: 'Treine Times de 500 pessoas',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 5.3,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2023/03/iStock-1386241232-720x480.jpg'
  },
];

// Função para criar a estrutura HTML para cada curso
function createmodulesElement(modules) {
  const modulesElement = document.createElement('div');
  modulesElement.classList.add('card', 'd-flex', 'flex-column', 'rounded');
  modulesElement.innerHTML = `
    <div class="top-card rounded-top">
      <div class="d-flex booble-course">Trilha</div>
      <img class="img-fluid rounded-top img-card" src="${modules.imageUrl || "https://play-lh.googleusercontent.com/jgqE3RuyTNA0HXNtqZZUzW_jlM4u6x82D1IhjwZ7d0oBdiRdO2mzSZVetYbNYcl75yQ"}" alt="capa do curso">
    </div>
    <div class="bottom-card p-3 d-flex flex-column align-items-star justify-content-center">
      <p class="bottom-card-title">${modules.title || "Nome do Curso"}</p>
      <div class="bottom-card-description d-flex d-flex align-items-star justify-content-center">
        <div class="card-description-bold">${modules.duration || "20hrs"}</div>
        <div class="text-truncate card-description">${modules.category || "Categoria do curso"}</div>
      </div>
      <div class="box-center-card d-flex justify-content-between">
        <div class="d-flex box-center-star align-items-star">
          <div class="stars-container d-flex">
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
          </div>
          <div class="ml-2">
            <span class="average-rating">${modules.rating}</span>
            <span class="total-ratings">${modules.totalRatings >= 100 ? '100+' : modules.totalRatings}</span>
          </div>
        </div>
        <div class="card-description">${modules.points} Pontos</div>
      </div>
      <div class="btn-final">
        <button class="btn btn-link">MAIS INFORMAÇÕES</button>
      </div>
    </div>
  `;
  return modulesElement;
}

// Função para adicionar os cursos na página HTML
function rendermodules(modules) {
  const modulesContainer = document.getElementById('modules');
  modules.forEach(modules => {
    const modulesElement = createmodulesElement(modules);
    modulesContainer.appendChild(modulesElement);
  });
}
rendermodules(modules)