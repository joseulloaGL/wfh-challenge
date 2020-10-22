const TOKEN = '130485-df2a1bc6-9ba4-426c-8131-b646b2f0fff1';
const API_URL = 'https://api.figma.com/v1';

function getHeaders() {
  return {
    'Content-Type': 'application/json',
    'X-Figma-Token': TOKEN
  };
};

async function getFile(key) {
  try {
    const data = await fetch(`${API_URL}/files/${key}`, {
      headers: getHeaders()
    }).then(response => response.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function getFileNodes(key) {
  try {
    const data = await fetch(`${API_URL}/files/${key}/nodes`, {
      headers: getHeaders()
    }).then(response => response.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function getImage(key, ids) {
  try {
    const data = await fetch(`${API_URL}/images/${key}?format=svg&ids=${ids.join(',')}`, {
      headers: getHeaders()
    }).then(response => response.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getFile,
  getFileNodes,
  getImage,
};