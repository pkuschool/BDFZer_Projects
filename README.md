# BDFZer 们的开源作品大全
如果你想要加点什么，直接Pull Request就行了。毕竟是 WTFPL License 嘛！
极小项目也可以直接丢进来。

## shan-mx

- [shan-mx/MovieDownloader_Py](https://github.com/shan-mx/MovieDownloader_Py)

## steven12138

- [steven12138/Wegram](https://github.com/steven12138/Wegram)

## Cassius Chen

<!-- 内容基于收到的相关线索邮件 -->

- [cassiuschen/bdfzer-writing](https://github.com/cassiuschen/bdfzer-writing)，一套在线 blog 系统，曾以创媒为核心发布过一部分文章，已于 14 年关闭  

### 银杏时报

- [新版官网: cassiuschen/yxtimes](https://github.com/cassiuschen/yxtimes) 代码更新到了 16 年，后迁移到[iloveivyxuan/YXTimes](https://github.com/iloveivyxuan/YXTimes)，最终于 17 年三月完成当时版本的构建并上线
- 旧版银杏时报代码，希悦构建，他们删除之前保留了一份[存档](https://github.com/cassiuschen/yxtimes_old)
- [北大附中校友日信息反馈系统: cassiuschen/bdfz-alumniday](https://github.com/cassiuschen/bdfz-alumniday)，14 年校友日时构建，收集了几百位校友的信息，并提交给了校办。后校友会改制，项目关停。

### 北大附中学生手册
- [新版: cassiuschen/bdfz-guidebook](https://github.com/cassiuschen/bdfz-guidebook)：这个是 2014 年的新版，更好看的 UI、更好的移动端体验，以及可后台直接编辑内容，而非静态呈现。【[校内Fork](https://github.com/pkuschool/bdfz-guidebook)】
- [老版: cassiuschen/bdfz-sbook](https://github.com/cassiuschen/bdfz-sbook)【[校内Fork](https://github.com/pkuschool/bdfz-sbook)】

### 北大附中统一认证系统（SSO）

这是个历史遗留问题。13-14 年那会学校内部系统，比如选课平台、比如后来陆续构建的 peer、mooc 等统一使用了由希悦构建的基于 CAS 的单点登录系统，当时为了可以让学生直接通过这一套系统访问所有上述产品且共享登录、用户信息，构建了一个认证终端，学生通过 cas 登录学校内网后其余应用通过 Oauth2 协议授权使用学生信息

- [平台认证中心: cassiuschen/bdfzer-sso](https://github.com/cassiuschen/bdfzer-sso)
- 其余应用通过 omniauth 提供 oauth 客户端功能，[omniauth 配置包: cassiuschen/omniauth-bdfzer](https://github.com/cassiuschen/omniauth-bdfzer)
- [SSO Client 测试项目: cassiuschen/bdfzer-sso-client](https://github.com/cassiuschen/bdfzer-sso-client) ，拥有一套用户系统，并只能通过上述北附人 SSO 系统登录
-	[校内科学上网配置生成器: cassiuschen/bdfzer-proxy](https://github.com/cassiuschen/bdfzer-proxy)，没啥卵用，不建议 fork，以免发生不必要的麻烦。
-	[Peer: cassiuschen/peer](https://github.com/cassiuschen/peer)，附中那会公民素养还是什么素养课程提交学生想法并互相评分的系统，希悦构建，我这里只是存档

