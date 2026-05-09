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

## Arch 上的摄像头问题

我才知道我的摄像头已经很久没有工作了

```text
华硕为了省钱，给天选系列塞进去的 Microdia（0c45:6363）摄像头固件写得非常“偷懒”。它在 Windows 下靠专门的闭源驱动能跑，但在 Linux 这种严格遵循 UVC 标准协议的环境下，它不按套路出牌（比如不响应 GET_CUR 指令），就会导致内核报错。
```

上面是来自AI的解释，但是并不是很可信，因为 syl 的也是arch系统，摄像头正常工作，我认为可能是我某次 `pacman -Syu` 之后就炸了？