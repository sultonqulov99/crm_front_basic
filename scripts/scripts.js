window.addEventListener('load', function () {
    const elMyAccordionBtn = this.document.querySelectorAll('.accor-btn');

    elMyAccordionBtn.forEach(btn => {
        btn.addEventListener('click', function (ev) {
            ev.preventDefault();
            elMyAccordionBtn.forEach(btn => {
                btn.classList.remove('active');
                if (btn.nextElementSibling != null) {
                    btn.nextElementSibling.classList.remove('show');
                }
            })
            btn.classList.add('active');
            if (btn.nextElementSibling != null) {
                btn.nextElementSibling.classList.toggle('show');
            }
        })
    })
})