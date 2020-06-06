import $ from 'jquery'

$(`.accordion-button`).click((event) => {
    // $(`.accordion-button`).addClass(`closed`)
    $(event.target).toggleClass(`closed`)
})
