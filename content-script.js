// document.body.style.opacity = "0.5"
//大部分api在这里不要用

// Chrome提供的大部分API是不支持在content_scripts中运行
// Chrome提供的大部分API是不支持在content_scripts中运行
// sendMessage onMessage 是可以使用

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

// react input框直接赋值不起作用，如此操作
// inputDom input输入框
// newText 新的数值
function changeReactInputValue(inputDom, newText) {
  let lastValue = inputDom.value;
  inputDom.value = newText;
  let event = new Event('input', { bubbles: true });
  event.simulated = true;
  let tracker = inputDom._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  inputDom.dispatchEvent(event);
}
