// 监听来自content-scripts.js的消息
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  sendResponse('我收到了你的来信');
  console.log('接收了来自 content.js的消息', req.info);
});

// 引入background.js文件, 里面所有的数据都可以通过dot点出来
// background => popup 是通过getBackgroundPage，而popup => background是通过getViews。
const bg = chrome.extension.getBackgroundPage();
document.getElementById('rBgInfo').onclick = function () {
  bg.toPopup();

  // popup ---> content
  // 找到当前的tabs ,然后给content发(content会自动锁定当前的?)
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      let message = {
        info: '来自popup的情书💌',
      };
      chrome.tabs.sendMessage(tabs[0].id, message, (res) => {
        console.log('popup=>content');
        console.log(res);
      });
    }
  );
};
