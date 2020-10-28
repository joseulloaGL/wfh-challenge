
import { createFigma } from './figma.js'
import { FILE_ID, TOKEN } from './secrets.js'

const figma = createFigma(TOKEN)

var loadingImage = document.getElementById('image')
var container = document.getElementById('image-container')

const loadImage = async () => {
  let img = await figma.getImageSVG(FILE_ID, '0:1')
  container.innerHTML = img
}

loadImage()