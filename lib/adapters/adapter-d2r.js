var cheerio = require('cheerio');

exports.parse = function (file, html, callback) {
  var $ = cheerio.load(html);
  var page=[],product;

  $('.product').each(function(i,e) {
    product={};
    product.file = file;
    product['name'] = $(e).find('.name').text().replace(/\s+/g, ' ');
    product['description'] = $(e).find('.description').text().replace(/\s+/g, ' ');
    page.push(product);
  });

  $('.subheader').each(function(i,e) {
    product={};
    product.file = file;
    product['page-title'] = $(e).find('.subheader').text().replace(/\s+/g, ' ');
    page.push(product);
  });

  $('.product-info').each(function(i,e) {
    product={};
    product.file = file;
    product['product-info'] = $(e).find('.product-info').text().replace(/\s+/g, ' ');
    page.push(product);
  });

  callback(page);
}
