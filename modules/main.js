
import { createFigma } from './figma.js'
import { FILE_ID, TOKEN } from './secrets.js'

/**
 * Instance of the figma client using my access token.
 */
const figma = createFigma(TOKEN)

/**
 * Loading div element.
 */
var loading = document.getElementById('loading')

/**
 * Container div of the svg image to animate.
 */
var imageContainer = document.getElementById('image-container')

/**
 * Gets the image from figma and put the result inside the image container.
 */
const loadImage = async () => {
  let img = await figma.getImageSVG(FILE_ID, '0:1')

  loading.remove()
  imageContainer.innerHTML = img
}


// init
loadImage()