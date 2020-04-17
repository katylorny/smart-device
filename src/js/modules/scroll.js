import $ from 'jquery'

$(`.presentation__scroll, .presentation__button`).on(`click`, function (event) {
    event.preventDefault()
    const id = $(event.target).attr(`href`)
    const top = $(id).offset().top
    $(`body, html`).animate({ scrollTop: top }, 600)
})

