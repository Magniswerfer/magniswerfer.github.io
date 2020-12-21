blogCategories = document.querySelectorAll('.blog-category')


blogCategories.forEach(element => {
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