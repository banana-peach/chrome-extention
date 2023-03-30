root
│  background.js # chrome 浏览器加载完插件后执行这个文件
│  index.js # background.js 监听点击图标事件, 然后会调用这里
│  main.css # popup.html的样式
│  main.js # popup.html的js文件
│  manifest.json # 配置文件
│  popup.html # 点击图标后弹出的页面
│  readme.md # 本配置文件

└─images
        icon128.png
        icon16.png
        icon19.png
        icon38.png
        icon48.png     

        "default_title": "stock helper",
        "default_popup": "popup.html" # 写了这个文件跟background.js会冲突          
