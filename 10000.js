// const btnExc = document.querySelector('.btn-exc');
const btnGo = document.querySelector('.btn-go')
const btnShare = document.querySelector('.btn-share')
const contInp = document.querySelector('.cont-inp')
const closeBtn = document.querySelector('.close_btn')
const result = document.querySelector('.cont-result')
const modal = document.getElementById('modal')
const loading = document.querySelector('.result_loading')

const wannabeInput = document.getElementById('wannabe-input')
const timeInput = document.getElementById('time-input')
const wannabeText = document.getElementById('wannabe-text')
const timeText = document.getElementById('time-text')

const calculator = () => {
  const timeInputValue = Number(timeInput.value)

  if (wannabeInput.value === '') {
    alert('분야가 입력되지 않았습니다!')
    wannabeInput.focus()
    return
  } else if (timeInput.value === '') {
    alert('시간이 입력되지 않았습니다.')
    timeInput.focus()
    return
  } else if (timeInputValue > 24) {
    alert('시간 입력이 잘못되었습니다.')
    timeInput.focus()
    return
  }

  result.style.display = 'none'
  loading.style.display = 'flex'

  setTimeout(function () {
    wannabeText.innerText = wannabeInput.value
    timeText.innerText = Math.round(10000 / timeInputValue)
    wannabeInput.value = ''
    timeInput.value = ''

    loading.style.display = 'none'
    result.style.display = 'flex'
  }, 1800)
}

const openModal = () => {
  modal.style.display = 'flex'
}

const closeModal = () => {
  modal.style.display = 'none'
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal()
  }
})
const copyUrl = () => {
  const url = window.location.href

  navigator.clipboard.writeText(url).then(() => {
    alert('URL이 복사되었습니다')
  })
}

contInp.addEventListener('submit', (e) => {
  e.preventDefault()
  calculator()
})

btnGo.addEventListener('click', openModal)

closeBtn.addEventListener('click', closeModal)

btnShare.addEventListener('click', () => {
  copyUrl()
})
