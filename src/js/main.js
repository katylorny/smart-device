// import focusTrap from "focus-trap"

(function () {

    // маска формы телефона
    $(`input[type="tel"]`).mask(`+7(999)999-99-99`)


    // плавная прокрутка ссылок-якорей
    $(document).ready(function () {
        $(`.presentation__scroll`).on(`click`, function (event) {
            event.preventDefault()
            // eslint-disable-next-line no-invalid-this
            const id = $(this).attr(`href`)
            const top = $(id).offset().top
            $(`body, html`).animate({ scrollTop: top }, 600)
        })
    })

    $(document).ready(function () {
        $(`.presentation__button`).on(`click`, function (event) {
            event.preventDefault()
            // eslint-disable-next-line no-invalid-this
            const id = $(this).attr(`href`)
            const top = $(id).offset().top
            $(`body, html`).animate({ scrollTop: top }, 600)
        })
    })


    // аккордеон
    const accordionButton = Array.from(document.querySelectorAll(`.accordion-button`))

    const closeAccordion = () => {
        accordionButton.forEach((el) => {
            el.classList.add(`closed`)
        })
    }

    accordionButton.forEach((el) => {
        el.addEventListener(`click`, () => {
            if (el.classList.contains(`closed`)) {
                closeAccordion()
                el.classList.remove(`closed`)
            } else {
                el.classList.add(`closed`)
            }
        })
    })


    // попап

    const popup = document.querySelector(`.popup`)
    const popupCloseButton = popup.querySelector(`.popup__close-button`)
    const popupOpenButton = document.querySelector(`.header__button`)
    const overlay = document.querySelector(`.overlay`)
    const nameInput = popup.querySelector(`input[type="text"`)
    // const modalFocusTrap = createFocusTrap(`.popup`)

    const closePopup = () => {
        popup.classList.add(`popup-closed`)
        overlay.classList.add(`overlay--hidden`)
        // modalFocusTrap.deactivate()

        if (existVerticalScroll()) {
            body.classList.remove(`body-lock`)
            window.scrollTo(0, body.dataset.scrollY)
        }
    }

    const openPopup = () => {
        popup.classList.remove(`popup-closed`)
        overlay.classList.remove(`overlay--hidden`)
        nameInput.focus()
        // modalFocusTrap.activate()

        if (existVerticalScroll()) {
            body.classList.add(`body-lock`)
            body.style.top = `-${body.dataset.scrollY}px`
        }
    }

    document.addEventListener(`keydown`, (evt) => {
        if (evt.keyCode === 27) {
            closePopup()
        }
    })

    // блокировка скролла

    const body = document.querySelector(`body`)


    function existVerticalScroll() {
        return document.body.offsetHeight > window.innerHeight
    }

    function getBodyScrollTop() {
        return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop)
    }

    popupOpenButton.addEventListener(`click`, (e) => {
        e.preventDefault()

        body.dataset.scrollY = getBodyScrollTop() // сохраним значение скролла


        openPopup()
        overlay.addEventListener(`click`, () => {
            closePopup()
        }, { once: true })

    })

    popupCloseButton.addEventListener(`click`, (e) => {
        e.preventDefault()

        closePopup()
    })

})()
