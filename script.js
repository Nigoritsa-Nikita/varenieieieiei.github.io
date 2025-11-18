function scrollGallery(galleryId, scrollAmount) {
    // Находим конкретный элемент по его уникальному ID
    const wrapper = document.getElementById(galleryId);
    
    // Проверяем, был ли элемент найден
    if (wrapper) {
        // Прокручиваем только найденный элемент
        wrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth' 
        });
    } else {
        console.error(`Элемент с ID ${galleryId} не найден.`);
    }
}