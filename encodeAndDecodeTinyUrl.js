/*
Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
*/
var data = {
  hash: 0,
};

var encode = function(longUrl) {
  data[data.hash] = longUrl;
  let shortUrl = 'http://tinyurl.com/' + data.hash;
  data.hash += 1;
  return shortUrl;
};

/**
* Decodes a shortened URL to its original URL.
*
* @param {string} shortUrl
* @return {string}
*/
var decode = function(shortUrl) {
  let ref = shortUrl.slice(19);
  return data[ref];
};

/**
* Your functions will be called as such:
* decode(encode(url));
*/
console.log(encode('https://leetcode.com/problems/design-tinyurl'));
console.log(decode(encode('https://leetcode.com/problems/design-tinyurl')));