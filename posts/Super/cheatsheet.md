---
title: 实用
description: 实用笔记与命令备忘。
draft: false
---

## SSH 端口转发

```bash
ssh -L 本地端口:localhost:6185 用户@VPS_IP -N
```

使用示例（假设本地端口也用6185）：

```bash
ssh -L 6185:localhost:6185 root@1.2.3.4 -N
```

参数说明：

· -L：本地转发
· -N：不执行远程命令（纯转发）

执行后保持终端运行，Ctrl+C 可停止。

## Git

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

## WireGuard

配置文件放在`/etc/wireguard`

```bash
➜  ~ sudo resolvconf -u  # 配置dns
➜  ~ sudo wg-quick up wg1 # 启动
➜  ~ sudo wg-quick down wg1 # 关闭
```

## SSL 证书

```bash
sudo certbot certonly --manual --preferred-challenges=dns --agree-tos -d "*.learn-languages.digital" -d "learn-languages.digital"
```

## Wget

这是一个最小化的 wget 命令，用于递归下载网页及其内容：

```bash
wget -r -p -k -np URL
```

### 参数说明
- **-r** : 递归下载
- **-p** : 下载所有必要文件（图片、CSS、JS等）
- **-k** : 转换链接，使页面能在本地离线浏览
- **-np** : 不追溯至父目录

### 示例
```bash
wget -r -p -k -np https://example.com/page
```

### 更完整的控制
```bash
wget -r -p -k -np --convert-links --level=3 --wait=1 URL
```
- `--convert-links` : 更好地转换链接
- `--level=3` : 限制递归深度为3层
- `--wait=1` : 每次请求等待1秒，避免对服务器造成过大压力

### 注意
- 下载的内容会保存在当前目录下的以域名命名的文件夹中
- 请确保你有权下载目标内容并遵守 robots.txt
- 对于现代网站可能需要处理动态内容，可能需要添加 `--user-agent` 参数

## Snapcast

### 创建 FIFO

```bash
mkfifo /tmp/snapfifo
chmod 666 /tmp/snapfifo
```

### 加载 PulseAudio pipe sink

```bash
pactl load-module module-pipe-sink file=/tmp/snapfifo format=s16le rate=48000 channels=2 sink_name=system2fifo
```

### 切换系统默认输出

```bash
pactl set-default-sink system2fifo
```
---

### 卸载模块

如果你需要恢复：

查 module：

```bash
pactl list short modules | grep pipe-sink
```

卸载：

```bash
pactl unload-module <module_id>
```
