// https://github.com/squidfunk/mkdocs-material/issues/1635 //    


document.querySelectorAll('.zoom').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('image-zoom-large');
    })
});
