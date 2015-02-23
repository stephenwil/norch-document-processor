var cheerio = require('cheerio');

exports.parse = function (file, html, callback) {
  var $ = cheerio.load(html);
  var products = [],page={};
  $('.product').each(function(i,e) {
    var product={};
    product['name'] = $(e).find('.name').text().replace(/\s+/g, ' ');
    product['description'] = $(e).find('.description').text().replace(/\s+/g, ' ');
    products.push(product);
  });
  page['products'] = products;

  $('.subheader').each(function(i,e) {
    page['page-title'] = $(e).find('.subheader').text().replace(/\s+/g, ' ');
  });

  $('.product-info').each(function(i,e) {
    page['product-info'] = $(e).find('.product-info').text().replace(/\s+/g, ' ');
  });
  
  var batch = {};
  batch[file] = page;
  callback(batch);
}
