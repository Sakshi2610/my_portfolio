// fetch('skills.json')
//   .then(response => response.json())
//   .then(data => {
//     populateCards(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// function populateCards(data) {
//     const cardContainer = document.querySelector('.card-container');
//     cardContainer.innerHTML = '';
  
//     data.forEach(item => {
//       const card = document.createElement('div');
//       card.classList.add('card');
  
//       const skills = document.createElement('h2');
//       skills.textContent = item.skills;
  
//       const image = document.createElement('img');
//       image.src = item.image;
  
//       card.appendChild(skills);
//       card.appendChild(image);
//       cardContainer.appendChild(card);
//     });
// }

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('image-gallery');
  
    // Fetch JSON data
    fetch('skills.json')
      .then(response => response.json())
      .then(data => {
        console.log('JSON data:', data); // Log the fetched JSON data to the console for debugging
        
        // Loop through each image URL and create an <img> element
        data.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl.image;
          gallery.appendChild(img);
        });
  
        console.log('Image gallery populated successfully.'); // Log success message to the console
      })
      .catch(error => {
        console.error('Error fetching image data:', error); // Log any errors to the console
      });
  });
  