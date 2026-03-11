const imgObserver = new IntersectionObserver((item,observer) => {
    item.forEach(el => {
        if(el.isIntersecting){
            const src = el.target.dataset.src
            el.target.src = src
            observer.unobserve(el.target)
        }
    })
},{})






const imgRef = document.querySelectorAll('img') // ось тут наші картинки
imgRef.forEach(elem => imgObserver.observe(elem)) // тут ми їх перебираєм та додаєм до обсервера