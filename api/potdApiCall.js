export default class pictureOTD {
  static async getPicture() {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.MARS_API_KEY}`);
      
      if (!response.ok) {
        const errorMessage = `${response.status}: ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch(error) {
      throw new Error(error.message);
    }
  }
}
