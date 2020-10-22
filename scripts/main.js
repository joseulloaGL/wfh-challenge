import { getFile, getImage } from './figma.js';

const fileId = 'w02kwmteMCNzlYlvtZTLdw';
const image = document.getElementById('image');

async function init() {
  const data = await getImage(fileId, ['0:1']);
  image.src = data.images['0:1']
}

init()