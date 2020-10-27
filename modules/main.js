
import { createFigma } from './figma.js'
import { FILE_ID, TOKEN } from './secrets.js'

const figma = createFigma(TOKEN)

const loadingImage = document.getElementById('image')
const container = document.getElementById('image-container')

const loadImage = async () => {
  let img = await figma.getImageSVG(FILE_ID, '0:1')
  container.innerHTML = img
}

loadImage()