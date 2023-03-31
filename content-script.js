// document.body.style.opacity = "0.5"

// Chrome提供的大部分API是不支持在content_scripts中运行
// sendMessage onMessage 是可以使用, 发送消息后, popup.js可以接收到

// 网页加载进来的时候才会执行一次

chrome.runtime.sendMessage(
  {
    info: '我是 content.js',
  },
  (res) => {
    // alert(res)
  }
);


// get popup2content info 接收来自popup的点击事件
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.info)
  sendResponse('我收到了你的情书，popup~')
})

