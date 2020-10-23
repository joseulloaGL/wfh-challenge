const TOKEN = '130485-df2a1bc6-9ba4-426c-8131-b646b2f0fff1'
const API_URL = 'https://api.figma.com/v1'

/**
 * Get the default headers needed for figma, inclues
 * the authorization token header.
 * 
 * @returns base headers for figma.
 */
const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'X-Figma-Token': TOKEN
  };
};

/**
 * Get request to figma api to /files/:key
 * 
 * @param {string} key file id.
 * @returns file json response.
 */
const getFile = async key => {
  try {
    const data = await fetch(`${API_URL}/files/${key}`, {
      headers: getHeaders()
    }).then(response => response.json())
    return data
  } catch (error) {
    console.log(error)
    alert("An error occurs getting the file :(")
  }
}

/**
 * Get request to figma api to /files/:key/nodes
 * 
 * @param {*} key file id.
 * @returns file nodes json response.
 */
 const getFileNodes = async key => {
  try {
    const data = await fetch(`${API_URL}/files/${key}/nodes`, {
      headers: getHeaders()
    }).then(response => response.json())
    return data
  } catch (error) {
    console.log(error)
    alert("An error occurs getting the file nodes :(")
  }
}

/**
 * Get request to figma api to /images/:key
 * Render the file to a SVG image.
 * 
 * @param {*} key file id.
 * @returns image data json response.
 */
const getImage = async (key, ids) => {
  try {
    const data = await fetch(`${API_URL}/images/${key}?format=svg&svg_include_id=true&ids=${ids.join(',')}`, {
      headers: getHeaders()
    }).then(response => response.json())
    return data
  } catch (error) {
    console.log(error)
    alert("An error occurs getting the image :(")
  }
}

export {
  getFile,
  getFileNodes,
  getImage,
}