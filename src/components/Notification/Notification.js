const DEFAULT_OPTIONS = {
  autoClose: 2000,
  position: "top-right",
  onClose: () => {},
  canClose: true,
  showProgress: true,
}

export default class Notification {
  #notificationElem
  #autoCloseInterval
  #progressInterval
  #removeBinded
  #timeVisible = 0
  #autoClose
  #isPaused = false
  #unpause
  #pause
  #visibilityChange
  #shouldUnPause

  constructor(options) {
    this.#notificationElem = document.createElement("div")
    this.#notificationElem.classList.add("notification")
    requestAnimationFrame(() => {
      this.#notificationElem.classList.add("show")
    })
    this.#removeBinded = this.remove.bind(this)
    this.#unpause = () => (this.#isPaused = false)
    this.#pause = () => (this.#isPaused = true)
    this.#visibilityChange = () => {
      this.#shouldUnPause = document.visibilityState === "visible"
    }
    this.update({ ...DEFAULT_OPTIONS, ...options })
  }

  set autoClose(value) {
    this.#autoClose = value
    this.#timeVisible = 0
    if (value === false) return

    let lastTime
    const func = time => {
      if (this.#shouldUnPause) {
        lastTime = null
        this.#shouldUnPause = false
      }
      if (lastTime == null) {
        lastTime = time
        this.#autoCloseInterval = requestAnimationFrame(func)
        return
      }
      if (!this.#isPaused) {
        this.#timeVisible += time - lastTime
        if (this.#timeVisible >= this.#autoClose) {
          this.remove()
          return
        }
      }

      lastTime = time
      this.#autoCloseInterval = requestAnimationFrame(func)
    }

    this.#autoCloseInterval = requestAnimationFrame(func)
  }

  set position(value) {
    const currentContainer = this.#notificationElem.parentElement
    const selector = `.notification-container[data-position="${value}"]`
    const container = document.querySelector(selector) || createContainer(value)
    container.append(this.#notificationElem)
    if (currentContainer == null || currentContainer.hasChildNodes()) return
    currentContainer.remove()
  }

  set text(value) {
    this.#notificationElem.textContent = value
  }

  set canClose(value) {
    this.#notificationElem.classList.toggle("can-close", value)
    if (value) {
      this.#notificationElem.addEventListener("click", this.#removeBinded)
    } else {
      this.#notificationElem.removeEventListener("click", this.#removeBinded)
    }
  }

  set showProgress(value) {
    this.#notificationElem.classList.toggle("progress", value)
    this.#notificationElem.style.setProperty("--progress", 1)

    if (value) {
      const func = () => {
        if (!this.#isPaused) {
          this.#notificationElem.style.setProperty(
            "--progress",
            1 - this.#timeVisible / this.#autoClose
          )
        }
        this.#progressInterval = requestAnimationFrame(func)
      }

      this.#progressInterval = requestAnimationFrame(func)
    }
  }

  set pauseOnHover(value) {
    if (value) {
      this.#notificationElem.addEventListener("mouseover", this.#pause)
      this.#notificationElem.addEventListener("mouseleave", this.#unpause)
    } else {
      this.#notificationElem.removeEventListener("mouseover", this.#pause)
      this.#notificationElem.removeEventListener("mouseleave", this.#unpause)
    }
  }

  set pauseOnFocusLoss(value) {
    if (value) {
      document.addEventListener("visibilitychange", this.#visibilityChange)
    } else {
      document.removeEventListener("visibilitychange", this.#visibilityChange)
    }
  }

  set color(value) {
    this.#notificationElem.style.backgroundColor = value
  }

  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value
    })
  }

  remove() {
    cancelAnimationFrame(this.#autoCloseInterval)
    cancelAnimationFrame(this.#progressInterval)
    const container = this.#notificationElem.parentElement
    this.#notificationElem.classList.remove("show")
    this.#notificationElem.addEventListener("transitionend", () => {
      this.#notificationElem.remove()
      if (container.hasChildNodes()) return
      container.remove()
    })
    this.onClose()
  }
}

function createContainer(position) {
  const container = document.createElement("div")
  container.classList.add("notification-container")
  container.dataset.position = position
  document.body.append(container)
  return container
}