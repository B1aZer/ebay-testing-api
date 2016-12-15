
var str: string = 'hello world!';

var url = 'https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=Homec8d44-9096-4507-92f8-b640655c1ca&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=iPhone&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US&siteid=0';

var app = new Vue({
  el: '#results',
  data: {
    items: []
  },
  mounted: function() {
    this.fetchApi();
  },
  methods: {
    fetchApi: function() {
      var self = this;
      jQuery.getJSON(url+"&callback=?", (root) => {
        var items = root && root.findItemsByKeywordsResponse && root.findItemsByKeywordsResponse[0] && root.findItemsByKeywordsResponse[0].searchResult && root.findItemsByKeywordsResponse[0].searchResult[0] && root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
        self.items = items;
      });
    }
  }
})
/*
jQuery.getJSON(url+"&callback=?", function(root) {
  console.info('what');
    var items = root && root.findItemsByKeywordsResponse && root.findItemsByKeywordsResponse[0] && root.findItemsByKeywordsResponse[0].searchResult && root.findItemsByKeywordsResponse[0].searchResult[0] && root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
    var html = [];
    html.push('\
    <div class="table-responsive">\
      <table class="table table-striped">\
        <tbody>'); for (var i = 0; i < items.length; ++i) { var item = items[i]; var shippingInfo = item.shippingInfo && item.shippingInfo[0] || {}; var sellingStatus = item.sellingStatus && item.sellingStatus[0] || {}; var listingInfo = item.listingInfo && item.listingInfo[0] || {}; var title = item.title; var subtitle = item.subtitle || ''; var pic = item.galleryURL; var viewitem = item.viewItemURL; var currentPrice = sellingStatus.currentPrice && sellingStatus.currentPrice[0] || {}; var displayPrice = currentPrice['@currencyId'] + ' ' + currentPrice['__value__']; var buyItNowAvailable = listingInfo.buyItNowAvailable && listingInfo.buyItNowAvailable[0] === 'true'; var freeShipping = shippingInfo.shippingType && shippingInfo.shippingType[0] === 'Free'; if (null !== title && null !== viewitem) { html.push('\
          <tr>\
            <td class="image-container">\
              <img src="' + pic + '"border = "0">\
            </td>'); html.push('\
            <td class="data-container">\
              <a class="item-link" href="' + viewitem + '"target="_blank">'); html.push('\
                <p class="title">' + title + '</p>'); html.push('\
                <p class="subtitle">' + subtitle + '</p>'); html.push('\
                <p class="price">' + displayPrice + '</p>'); if (buyItNowAvailable) { html.push('\
                <p class="bin">Buy It Now</p>'); } if (freeShipping) { html.push('\
                <p class="fs">Free shipping</p>'); } html.push('\
              </a>\
            </td>\
          </tr>'); } } html.push("\
        </tbody>\
      </table>\
    </div>");
    document.getElementById("results").innerHTML = html.join("");
});
*/
