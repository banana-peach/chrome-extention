// 监听插件图标点击事件
// chrome.browserAction.onClicked.addListener(
    // 想要点击可用, 必须加上这个, 在配置文件那里
    //"browser_action": {
    //    "default_icon": "qz.png"
    // }
//   () => {
//     chrome.tabs.executeScript({file: 'index.js',}
//   );
// });

// background给popup发送消息

// 插件的background，对于浏览器只存在一个，而对于popup，不同的 tab 就会存在一个前端，如果background需要给不同前端发送信息，就需要特殊的tab id。这里是针对background给popup传递信息。
function toPopup() {
  // 要被popup.js调用
  alert('我是被popup.js调用的函数!');
}

// backgound 有自己单独的调试页面
// 这里不可以console.log() // 最好用alert
