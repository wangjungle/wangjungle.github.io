# 一些吐槽

## Ollama 关于显卡的神奇特性

为什么Ollama看起来你对于Nvidia显卡的支持很奇怪，从官方文档上看到如下：

<img src="/images/llm-warn.png">

而且往往在系统滚过一次之后发生，希望能快点修好，不然我就去用lamma.cpp了

## Docker 自动读取终端变量和pnpm的神奇代理

如图，我好像没有在官方文档里面看到相关内容，然后我就在修bug的过程中学会了wireshark,真神奇😂

<img src="/images/magic_behavior_of_pnpm.png">

而且有的容器会使用 `HTTPS_PROXY` 做代理变量，有的又是 `https_proxy`，还有`NO_PROXY`和`no_proxy`，稍微一个不注意就容易漏掉，然后每次重启容器又等半天

不知道是不是我的技术不到位，有某种简单的办法我没发现