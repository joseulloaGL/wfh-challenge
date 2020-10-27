/**
 * Creates an instance of a group of functions to interact with Figma API.
 * 
 * @param {string} token figma API token.
 */
export const createFigma = (token) => {
  /**
   * Base API url of Figma.
   */
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
      'X-Figma-Token': token
    }
  }

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
   * @param {string} key file id.
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
   * @param {string} key file id.
   * @param {array} ids file nodes ids to get.
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

  /**
   * Renders a figma file to an image and return the SVG text.
   * 
   * @param {string} key id of the file.
   * @param {string} id  id of the file node to render.
   * @returns image SVG text.
   */
  const getImageSVG = async (key, id) => {
    const data = await getImage(key, [id])
    const url = data.images[id]

    return await fetch(url).then(response => response.text())
  }

  return {
    getFile,
    getFileNodes,
    getImage,
    getImageSVG,
  }
}