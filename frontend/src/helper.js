export const getMenuImageUrl = (url, size) => {
  if (!url) return "";

  if (size) {
    // Remove query params first
    const [baseUrl, query] = url.split("?");
    
    // Extract extension from base URL (jpg, png, webp, etc.)
    const extMatch = baseUrl.match(/\.([a-zA-Z0-9]+)$/);
    const ext = extMatch ? extMatch[1] : "jpg";

    // Replace extension with _SIZE.webp (since Firebase resized outputs webp)
    const resizedUrl = baseUrl.replace(/\.[a-zA-Z0-9]+$/, `_${size}.webp`);

    return query ? `${resizedUrl}?${query}` : resizedUrl;
  } else {
    // No resizing → return original
    return url;
  }
};
