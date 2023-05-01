const courses = [
  {
    title: 'Transformando Comportamentos em tempos de mudança',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 4.5,
    totalRatings: 100,
    points: 20000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/07/BANNER-EMAIL-MKT_CATALOGO-DE-FUNCIONALIDADES_1080-X-1080-1-768x768.png'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/08/DIA_26_ARTIGO_KONVIVA_AGOSTO-720x761.png'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/06/DIA_13_BLOG_JUNHO_KONVIVA_CAPA-720x761.png'
  },
  {
    title: 'Análise Comportamental',
    duration: '80h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/04/DIA_08_BLOG_AZUL_CAPA-720x761.jpg'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/08/DIA_26_ARTIGO_KONVIVA_AGOSTO-720x761.png'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/08/DIA_26_ARTIGO_KONVIVA_AGOSTO-720x761.png'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/08/DIA_26_ARTIGO_KONVIVA_AGOSTO-720x761.png'
  },
  {
    title: 'Treine sua liderança e obtenha mais do seu time',
    duration: '15h',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/06/22.03-CAPA-1-720x761.png'
  },
  {
    title: 'Panorama T&D',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3,
    totalRatings: 150,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/08/DIA_26_ARTIGO_KONVIVA_AGOSTO-720x761.png'
  },
  {
    title: 'Como utilizar a plataforma para desenvolver o pdi na sua empresa',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 800,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/05/DIA_18_MAIO_BLOG_CAPA-720x761.png'
  },
  {
    title: 'Treine Times de 500 pessoas',
    duration: '20h 30min',
    category: 'Desenvolvimento pessoal e profissional',
    rating: 3,
    totalRatings: 50,
    points: 1000,
    imageUrl: 'https://www.konviva.com.br/wp-content/uploads/2022/03/DIA_07_BLOG_CAPA-720x761.png'
  },
];

// Função para criar a estrutura HTML para cada curso
function createCourseElement(course) {
  const courseElement = document.createElement('div');
  courseElement.classList.add('card', 'd-flex', 'flex-column', 'rounded');
  courseElement.innerHTML = `
    <div class="top-card rounded-top">
      <div class="booble-course">Curso</div>
      <img class="img-fluid rounded-top img-card" src="${course.imageUrl}" alt="capa do curso">
    </div>
    <div class="bottom-card p-3 d-flex flex-column align-items-star justify-content-center">
      <p class="bottom-card-title">${course.title}</p>
      <div class="bottom-card-description d-flex d-flex align-items-star justify-content-center">
        <div class="card-description-bold">${course.duration}</div>
        <div class="text-truncate card-description">${course.category}</div>
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
            <span class="average-rating">${course.rating}</span>
            <span class="total-ratings">${course.totalRatings >= 100 ? '100+' : course.totalRatings}</span>
          </div>
        </div>
        <div class="card-description">${course.points} Pontos</div>
      </div>
      <div class="btn-final">
        <button class="btn btn-link">MAIS INFORMAÇÕES</button>
      </div>
    </div>
  `;
  return courseElement;
}

// Função para adicionar os cursos na página HTML
function renderCourses(courses) {
  const coursesContainer = document.getElementById('carousel');
  courses.forEach(course => {
    const courseElement = createCourseElement(course);
    coursesContainer.appendChild(courseElement);
  });
}

renderCourses(courses)

console.log(courses)