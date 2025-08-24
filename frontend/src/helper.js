export const getMenuImageUrl = (url, size = 'thumbnail') => {
  if (!url) return "";
	
  if (size === "thumbnail") {
    // Insert _200x200 before the extension
    return url.replace(/(\.[a-z]+)(\?|$)/, "_200x200$1$2")
  } else {
    // full-size: just use original
    return url;
  }
};
