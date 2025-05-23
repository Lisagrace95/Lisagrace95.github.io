async function fetchRssTitle(rssUrl) {
    try {
      const res = await fetch(rssUrl);
      if (!res.ok) throw new Error('Network response not OK');
      const xmlText = await res.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "application/xml");
      const title = xmlDoc.querySelector("channel > title").textContent;
      return title;
    } catch (err) {
      throw err;
    }
  }
  
  async function fetchTitleFromInputUrl(inputUrl) {
    let rssUrl = inputUrl.endsWith('/rss') ? inputUrl : inputUrl.replace(/\/+$/, '') + '/rss';
    return await fetchRssTitle(rssUrl);
  }
  