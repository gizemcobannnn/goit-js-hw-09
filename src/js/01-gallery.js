import '../css/styles.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

  export function createListElement(images){

    for (const image of images) {
      const { preview, original, description } = image;


    const galleryUL = document.querySelector("ul.gallery");
    const createdA = document.createElement("a");
    createdA.classList.add("gallery-link");
    createdA.setAttribute("onclick","return false");
    createdA.href = original;

    const createdImg = document.createElement("img");
    createdImg.classList.add("gallery-image");
    createdImg.src= preview;
    createdImg.dataset.source= original;
    createdImg.alt = description;

    createdA.appendChild(createdImg);

    const createdLi = document.createElement("li");
    createdLi.classList.add("gallery-item");

    createdLi.appendChild(createdA);
    galleryUL.appendChild(createdLi);
    
    }
    let lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250
    });


  }

  export function clickTheElements(){
    const imagesDom = document.querySelectorAll('.gallery a');
 let currentLightBox = null;
 let currentIndex = 0;

  imagesDom.forEach((image,index) => 
  {
      image.addEventListener('click', (event) => {
        currentIndex=index;
        if (event.target.nodeName !== "IMG") {
          return; // kullanıcı fotografların arasına tıkladı
        }
        const selectedImage = imagesDom[currentIndex];
        const selectedImageSrc = event.target.dataset.source;
        const selectedImageAlt = event.target.alt;
  // asagidaki galeriyi sadece boyutunu almak icin dom secimi yapıyorum.
        const ulElement = document.querySelector("ul.gallery");
        let ulWidth = ulElement.offsetWidth;
        let ulHeight = ulElement.offsetHeight;
  
          const modal = new SimpleLightbox(
            {
              content: `
                <div class="lightbox-content" style="width:${ulWidth}px; height:${ulHeight}px">
                  <button class="prev" id="prev" style="align-self:center">&lt;</button>
                  <img src="${selectedImageSrc}" alt="${selectedImageAlt}"/>
                  <button class="next" id="next">&gt;</button>
                </div>
              `,
            captionsData: `${selectedImageAlt}`, // Açıklama için title özniteliğini kullan
            captionDelay: 250
          });
          modal.showModal();
          currentLightBox = modal;

          const prevBtn = modal.element().querySelector('#prev');
          const nextBtn = modal.element().querySelector('#next');

          prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesDom.length - 1;
            updateModal(modal, imagesDom[currentIndex]);

            const newSrc = imagesDom[currentIndex].querySelector('img').dataset.source; // Doğru kaynak
            const newAlt = imagesDom[currentIndex].querySelector('img').alt; // Alt metni al
            modal.element().querySelector('img').src = newSrc;
            modal.element().querySelector('img').alt = newAlt;
          });
      
          nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex < imagesDom.length - 1) ? currentIndex + 1 : 0;
            updateModal(modal, imagesDom[currentIndex]);

            const newSrc = imagesDom[currentIndex].querySelector('img').dataset.source; // Doğru kaynak
            const newAlt = imagesDom[currentIndex].querySelector('img').alt; // Alt metni al
            modal.element().querySelector('img').src = newSrc;
            modal.element().querySelector('img').alt = newAlt;
          });
  
          
      const onKeyDownEsc = (event)=>{
        if((event.key === "Escape" || event.key === "Esc") && currentLightBox){
        currentLightBox.close();
        document.removeEventListener("keydown",onKeyDownEsc);
        currentLightBox = null;
      }
  
    }

    document.addEventListener("keydown",onKeyDownEsc);
    
      });
  });


  }
 // Modal içeriğini güncelleyen yardımcı fonksiyon
function updateModal(modal, element) {
  const newSrc = element.querySelector('img').dataset.source;
  const newAlt = element.querySelector('img').alt;
  modal.element().querySelector('img').src = newSrc;
  modal.element().querySelector('img').alt = newAlt;
}


createListElement(images);
clickTheElements();