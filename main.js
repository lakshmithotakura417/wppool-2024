document.addEventListener("DOMContentLoaded", () => {
    const girlImages = [
        {
            "id":1,
            "image-url": "./images/slidingImage1.jpg"
        },
        {
            "id":2,
            "image-url": "./images/slidingImage2.jpg"
        },
        {
            "id":3,
            "image-url": "./images/slidingImage3.jpg"
        },
        {
            "id":4,
            "image-url": "./images/slidingImage4.jpg"
        },
        {
            "id":5,
            "image-url": "./images/slidingImage5.jpg"
        },
        {
            "id":6,
            "image-url": "./images/slidingImage6.jpg"
        },
        {
            "id":7,
            "image-url": "./images/slidingImage7.jpg"
        },
        {
            "id":8,
            "image-url": "./images/slidingImage8.jpg"
        },
        {
            "id":9,
            "image-url": "./images/slidingImage9.jpg"
        },
        {
            "id":10,
            "image-url": "./images/slidingImage10.jpg"
        },
        {
            "id":10,
            "image-url": "./images/slidingImage11.jpg"
        },
        {
            "id":12,
            "image-url": "./images/slidingImage1.jpg"
        }
    ];

    const imageContainer = document.getElementById('image-container');
    let currentIndex = 0;
    const imagesPerPage = 3;

    const displayImages = () => {
        imageContainer.innerHTML = '';
        for (let i = currentIndex; i < currentIndex + imagesPerPage; i++) {
            if (i >= girlImages.length) break;
            const image = girlImages[i];

            const imageCard = document.createElement('div');
            imageCard.classList.add('carousel-images');

            const imgElement = document.createElement('img');
            imgElement.src = image['image-url'];
            imgElement.alt = image.description;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = image.description;

            imageCard.appendChild(imgElement);
            imageCard.appendChild(descriptionElement);
            imageContainer.appendChild(imageCard);
        }
    };

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= imagesPerPage;
            displayImages();
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentIndex + imagesPerPage < girlImages.length) {
            currentIndex += imagesPerPage;
            displayImages();
        }
    });

    displayImages();
});
