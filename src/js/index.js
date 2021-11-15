import '../scss/modal.scss'

import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock'

let isModalOpen = false

const getScrollBarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth
}

const xdiOpenModal = (modalTarget) => {
    const modal = document.querySelector(modalTarget)
    const scrollbarWidth = getScrollBarWidth()

    if (modal) {
        if (!isModalOpen) {
            isModalOpen = true
            const closeModalButton = modal.querySelectorAll('.js-modal-close')
            if (closeModalButton) {
                closeModalButton.forEach((item) => {
                    item.addEventListener('click', () => {
                        xdiCloseModal(modal)
                    })
                })
            }

            const backdrop = modal.querySelector('.js-modal-backdrop')

            if (backdrop) {
                backdrop.addEventListener('click', () => {
                    xdiCloseModal(modal)
                })
            }
            const inner = modal.querySelector('.js-modal-inner')
            if (inner) {
                disableBodyScroll(inner)
            }
            document.body.style.paddingRight = `${scrollbarWidth}px`
            modal.style.visibility = 'visible'
            modal.classList.add('in')
        } else {
            xdiCloseModal(modal)
        }
    }
}

const xdiCloseModal = (modal) => {
    isModalOpen = false
    modal.classList.remove('in')
    modal.style.visibility = 'hidden'
    const inner = modal.querySelector('.js-modal-inner')
    if (inner) {
        enableBodyScroll(inner)
    }
    document.body.style.paddingRight = `0`
}

const modal = () => {
    const modals = document.querySelectorAll('[data-toggle="modal"]')

    if (modals) {
        modals.forEach((item) => {
            item.addEventListener('click', (event) => {

                if (item.dataset.prevent == 1 || item.dataset.prevent == true) {
                    event.preventDefault()
                }

                if (item.dataset.stop == 1 || item.dataset.stop == true) {
                    event.stopPropagation()
                }

                const modalTarget = item.dataset.target
                console.log(modalTarget)

                if (modalTarget) {
                    xdiOpenModal(modalTarget)
                }
            })
        })
    }
}

export default modal