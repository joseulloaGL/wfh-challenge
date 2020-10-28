
import { createFigma } from './figma.js'
import { FILE_ID, TOKEN } from './secrets.js'

const figma = createFigma(TOKEN)

var loading = document.getElementById('loading')
var container = document.getElementById('image-container')

const loadImage = async () => {
  let img = await figma.getImageSVG(FILE_ID, '0:1')

  loading.remove()
  container.innerHTML = img
}

loadImage()