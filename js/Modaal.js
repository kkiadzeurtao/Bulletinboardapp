//5. iframeのモーダル
$(".iframe-open").modaal({
  type: "iframe",
  width: 800, //iframe横幅
  height: 400, //iframe高さ
  overlay_close: true, //モーダル背景クリック時に閉じるか
  before_open: function () {
    // モーダルが開く前に行う動作
    $("html").css("overflow-y", "hidden"); /*縦スクロールバーを出さない*/
  },
  after_close: function () {
    // モーダルが閉じた後に行う動作
    $("html").css("overflow-y", "scroll"); /*縦スクロールバーを出す*/
  }
});
