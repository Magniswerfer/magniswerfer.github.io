const blogCategoryList = document.querySelectorAll('.blog-category')
const blogFilterSelector = document.querySelector('.blog-filter-text')

blogFilterSelector.addEventListener('click', function () {
    let blogCategories = document.querySelector('.blog-categories')
    let filterToggle = document.querySelector('.blog-filter-toggle')
    blogCategories.classList.toggle('shown');
    filterToggle.classList.toggle('open');
});

blogCategoryList.forEach(element => {
    let category = element.dataset.category;
    element.addEventListener('click', function() {
        let blogList = document.querySelectorAll('.blog-post');
        blogList.forEach(function(currentValue){
            if(category==='all'){
                currentValue.classList.remove('hidden') 
                return;
            }
            if(!currentValue.classList.contains(category)){
                currentValue.classList.add('hidden');
            }
            else{
                currentValue.classList.remove('hidden');
            }

        });
    })
});