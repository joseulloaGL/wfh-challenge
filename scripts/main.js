import { getFile, getImage } from './figma.js'

const fileId = 'w02kwmteMCNzlYlvtZTLdw'
const loadingImage = document.getElementById('image')
const container = document.getElementById('image-container')

 const loadImage = async () => {
  const data = await getImage(fileId, ['0:1'])
  const url = data.images['0:1']

  //image.src = data.images['0:1']
  const img = await fetch(url).then(response => response.text())
  container.innerHTML = img
}

loadImage()