# 自用cron收集

# 自动同步订阅配置
cron "30 6-23/3 * * *" script-path=https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/backend/dist/cron-sync-artifacts.min.js, tag=Auto-Gist

# 联通免流监控
cron "15 7-18/2 * * *" script-path=https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v3/10010.js, tag=流量监控, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/

# Boxjs
cron "0 * * * *" script-path=https://raw.githubusercontent.com/Tartarus2014/Script/master/Delete_All.js, enable=false, tag=抹掉Boxjs全局备份
cron "0 * * * *" script-path=https://raw.githubusercontent.com/Tartarus2014/Script/master/Delete_Cache.js, enable=false, tag=抹掉Boxjs订阅缓存

# By Evilbutcher GitHub：https://github.com/evilbutcher/Quantumult_X/tree/master
cron "5 6 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/nasa/nasapic.js, enable=false, tag=NASA每日一图
cron "5 6 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/idaily/idaily.js, enable=false, tag=iDaily每日环球视野
cron "30 7-22 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/appstore/AppMonitor.js, enable=false, tag=App价格监控
cron "30 0 8-22/2 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/hotsearch/hot.js, enable=false, tag=热门监控
cron "45 3 8 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/weibo/weibotalk.js, enable=false, tag=微博超话
cron "25 4 8 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/glados.js, enable=false, tag=GLaDOS签到
cron "45 4 8 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkin_env.js, enable=false, tag=机场签到
cron "0 5 8 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkincookie_env.js, enable=false, tag=机场签到Cookie版
cron "0 4 8 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/funboat/funboat.js, enable=false, tag=Funboat签到

# By zZPigle   GitHub：https://github.com/zZPiglet/Task/tree/master
cron "0 * * * *" script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/Weibo/Weibo.js, enable=false, tag=微博通知
cron "0 0 10,21 * * *" script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/Oclean/Oclean.js, enable=false, tag=欧可林
cron "3 4 * * *" script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/Oclean/Oclean_mini.js, enable=false, tag=欧可林商城
cron "0 18 * * *" script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/MovieCalendar/MovieCalendar.js, enable=false, tag=豆瓣电影日历
cron "0 22 7 * * *" script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/Alipay/Alipay.js, enable=false, tag=Alipay
cron "7 4 * * *" script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/umetrip/umetrip.js, enable=false, tag=航旅纵横

# By NobyDa    GitHub：https://github.com/NobyDa/Script/tree/master
cron "15 1 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js, enable=false, tag=京东
cron "20 1 8 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js, enable=false, tag=爱奇艺
cron "30 1 8 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js, enable=false, tag=吾爱破解
cron "40 1 8 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js, enable=false, tag=哔哩哔哩漫画
cron "0 0,1,2 8 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js, enable=false, tag=百度贴吧(客户端)
cron "4 9 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/KuaiKan-DailyBonus/KKMH.js, enable=false, tag=快看漫画

# By chavyleung      GitHub：https://github.com/chavyleung/scripts
cron "5 3 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/jd/JD_BaiTiao.js, enable=false, tag=京东白条
cron "10 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/tieba/tieba.js, enable=false, tag=百度签到(网页)
cron "50 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10000/10000.js, enable=false, tag=电信营业厅
cron "0 1 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/acfun/acfun.js, enable=false, tag=AcFun
cron "11 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/apktw/apktw.js, enable=false, tag=APK.TW
cron "12 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.js, enable=false, tag=哔哩哔哩
cron "31 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.silver2coin.js, enable=false, tag=哔哩哔哩
cron "41 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/dongqiudi/dongqiudi.js, enable=false, tag=懂球帝
cron "51 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/feng/feng.js, enable=false, tag=威锋网
cron "0 2 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/flyertea/flyertea.js, enable=false, tag=飞客茶馆
cron "10 2 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/neteasemusic/neteasemusic.js, enable=false, tag=网易云音乐
cron "30 2 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/neteasenews/neteasenews.js, enable=false, tag=网易新闻
cron "40 2 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/qunar/qunar.js, enable=false, tag=去哪儿
cron "50 2 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/rrtv/rrtv.js, enable=false, tag=人人视频
cron "0 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.js, enable=false, tag= 顺丰速运
cron "10 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/smzdm/smzdm.js, enable=false, tag=什么值得买
cron "20 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/v2ex/v2ex.js, enable=false, tag=V2EX
cron "30 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/videoqq/videoqq.js, enable=false, tag=腾讯视频
cron "40 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.js, enable=false, tag=喜马拉雅
cron "50 3 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/yanxuan/yanxuan.js, enable=false, tag=网易严选
cron "0 4 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/zimuzu/zimuzu.js, enable=false, tag=字幕组
cron "12 4 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/qqmusic/qqmusic.js, enable=false, tag=QQ音乐
cron "12 4 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/csdn/csdn.js, enable=false, tag=CSDN
cron "33 4 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/gdoil/gdoil.js, enable=false, tag=加油广东
cron "40 4 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/mgtv/mgtv.js, enable=false, tag=芒果TV
cron "50 4 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/mihoyo/mihoyo.js, enable=false, tag=米游社
cron "0 5 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.js, enable=false, tag=中国联通
cron "10 5 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/maomicd/maomicd.js, enable=false, tag=猫咪音乐
cron "20 5 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.js, enable=false, tag=中国移动
cron "30 5 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/wmmeituan/wmmeituan.js, enable=false, tag= 美团外卖
cron "40 5 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/meituan/meituan.js, enable=false, tag=美团
cron "50 5 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/everphoto/everphoto.js, enable=false, tag=时光相册
cron "0 6 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/bcz/bcz.js, enable=false, tag=百词斩
cron "10 6 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/mcdd/mcdd.js, enable=false, tag=叮咚买菜
cron "20 6 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/fenqile/fenqile.js, enable=false, tag=分期乐
cron "30 6 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/fandeng/fandeng.js, enable=false, tag=樊登读书
cron "40 6 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/qmkg/qmkg.js, enable=false, tag=全民K歌
cron "50 6 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/hycan/hycan.js, enable=false, tag=合创
cron "0 7 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/nio/nio.js, enable=false, tag=蔚来
cron "10 7 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/haidilao/hdl.js, enable=false, tag=海底捞
cron "20 7 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/wykl/wykl.js, enable=false, tag=网易考拉
cron "30 7 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/wps/wps.js, enable=false, tag=WPS
cron "40 7 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/qimao/qmnovel.js, enable=false, tag=七猫小说
cron "50 7 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/zxhc/zxhc.js, enable=false, tag=智行火车
cron "0 8 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.js, enable=false, tag=苏宁易购
cron "10 8 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/zaker/zaker.js, enable=false, tag=Zaker
cron "20 8 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/bubei/bubei.js, enable=false, tag=不背单词
cron "30 8 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/dbsj/dbsj.js, enable=false, tag=豆瓣时间
cron "40 8 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/hellobike/hellobike.js, enable=false, tag=哈啰出行
cron "50 8 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/zsfc/zsfc.js, enable=false, tag=掌上飞车
cron "0 3 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/duokan/duokan.js, enable=false, tag=多看
cron "3 3 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/noteyoudao/noteyoudao.js, enable=false, tag=有道云笔记
cron "0 12 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/box/switcher/box.switcher.js, enable=false, tag=切换会话
cron "12 3 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.fee.js, enable=false, tag=中国移动-查话费
cron "12 2 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/wanda/wanda.js, enable=false, tag=万达电影
cron "11 2 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/pagoda/pagoda.js, enable=false, tag=百果园
cron "11 2 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/ithome/ithome.js, enable=false, tag=IT之家
cron "11 2 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/nfzm/nfzm.js, enable=false, tag=南方周末

# Peng-YM  https://github.com/Peng-YM/QuanX/tree/master/Tasks
cron "0 0 8 * * *" script-path=https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/nCov.js, enable=false, tag=疫情日报
cron "8 0 * * *"  script-path=https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/zongheng.js, enable=false, tag=纵横小说
cron "8 0 * * *" script-path=https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/github.js, enable=false, tag=GitHub
cron "8 0 * * *" script-path=https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/steam.js, enable=false, tag=Steam价格监控
cron "8 0 * * *" script-path=https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/exchange.js, enable=false, tag=汇率监控
cron "0 9 1 * *" script-path=https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/psn.js, enable=false, tag=PSN会免
cron "55 23 ? * THU" script-path=https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/epic.js, enable=false, tag=EPIC
cron "30 8-22 * * *" script-path=https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/caiyun.js, enable=false, tag=彩云天气

# iepngs https://raw.githubusercontent.com/iepngs/Script/master
cron "1 8,12,17 * * *" script-path=https://raw.githubusercontent.com/iepngs/Script/master/dingdong/index.js, enable=false, tag=叮咚农场
cron "0 9 * * *" script-path=https://raw.githubusercontent.com/iepngs/Script/master/lxhealth/manual.js, enable=false, tag=lxhealth
cron "0 9 * * *" script-path=https://raw.githubusercontent.com/iepngs/Script/master/studygolang/index.js, enable=false, tag=go 语言中文网
cron "29 8 * * *" script-path=https://raw.githubusercontent.com/iepngs/Script/master/ctrip/index.js, enable=false, tag=携程旅行
cron "5,35 8-21 * * *" script-path=https://raw.githubusercontent.com/iepngs/Script/master/jrtt/index.js, enable=false, tag=今日头条极速版
cron "0 9 * * *" script-path=https://raw.githubusercontent.com/iepngs/Script/master/lxsj/index.js, enable=false, tag=旅行世界购物版

# lowking   https://github.com/lowking/Scripts
cron "0 4 0,1 * * *" script-path=https://raw.githubusercontent.com/lowking/Scripts/master/bilibili/bangumiMonitor.js, enable=false, tag=哔哩哔哩番剧监控
cron "5 5 * * *" script-path=https://raw.githubusercontent.com/lowking/Scripts/master/QQVip/qqVipCheckIn.js, enable=false, tag=qq会员成长值
cron "20 4 0 * * *" script-path=https://raw.githubusercontent.com/lowking/Scripts/master/sony/sonyClub.js, enable=false, tag=索尼俱乐部签到
cron "21 4 0,1 * * *" script-path=https://raw.githubusercontent.com/lowking/Scripts/master/douyu/yubaSign.js, enable=false, tag=斗鱼鱼吧签到
cron "22 4 0,2 * * *" script-path=https://raw.githubusercontent.com/lowking/Scripts/master/QQPet/lkQQPet.js, enable=false, tag=QQ萌宠

# toulanboy  https://github.com/toulanboy/scripts
cron "52 5 * * *" script-path=https://raw.githubusercontent.com/toulanboy/scripts/master/weibo/weibotalk.js, enable=false, tag=微博超话
cron "51 5 * * *" script-path=https://raw.githubusercontent.com/toulanboy/scripts/master/muchong/muchong.js, enable=false, tag=小木虫论坛

# dompling   https://github.com/dompling/Script
cron "51 4 * * *" script-path=https://raw.githubusercontent.com/dompling/Script/master/cuuc/cuuc.js, enable=false, tag=CU 云加速
cron "10 4 8 * * *" script-path=https://raw.githubusercontent.com/dompling/Script/master/oneSay/oneSay.js, enable=false, tag=每日一言
cron "8 4 8 * * *" script-path=https://raw.githubusercontent.com/dompling/Script/master/historyToday/index.js, enable=false, tag=历史上的今天,
cron "3 4 * * *" script-path=https://raw.githubusercontent.com/dompling/Script/master/birthdayCountDown/index.js, enable=false, tag=生日倒计时
cron "0 4 0,2 * * *" script-path=https://raw.githubusercontent.com/dompling/Script/master/xiaomiyp/xiaomiyp.js, enable=false, tag=小米有品
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/dompling/Script/master/ymatou/ymatou.js, enable=false, tag=ymatou

# songyangzz   https://github.com/songyangzz/QuantumultX
cron "0 0 8 * * *" script-path=https://raw.githubusercontent.com/songyangzz/QuantumultX/master/lol.js, enable=false, tag=英雄联盟排名
cron "0 0 * * * *" script-path=https://raw.githubusercontent.com/songyangzz/QuantumultX/master/testflight.js, enable=false, tag=TestFlight公测监控
cron "0 9 8 * * *" script-path=https://raw.githubusercontent.com/songyangzz/QuantumultX/master/elem/elemSign.js, enable=false, tag=饿了么
cron "10 9 8 * * *" script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/yubaSign.js, enable=false, tag=斗鱼鱼吧
cron "*/15 * * * *" script-path=https://raw.githubusercontent.com/songyangzz/QuantumultX/master/YOUTH_READ.js, enable=false, tag=中青看点

# barrym-chen   https://github.com/barrym-chen/Script
cron "27 9 8 * * *" script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/ctrip/ctrip.js, enable=false, tag=携程旅行
cron "24 9 8 * * *" script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/ctrip_wx/ct_sign.js, enable=false, tag=携程小程序
cron "21 9 8 * * *" https://raw.githubusercontent.com/barrym-chen/Script/master/elong/elong_draw.js, enable=false, tag=艺龙酒店
cron "10 10 8 * * *" script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/jdczf/jdczf.js, enable=false, tag= 京东成长分
cron "18 10 8 * * *" script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/icbc/icbc_sign.js, enable=false, tag=工银e生活
cron "25 10 8 * * *" script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/tongc/tongc_sign.js, enable=false, tag=微信小程序-同程艺龙
cron "22 10 8 * * *" script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/tongc/tongc_info.js, enable=false, tag=微信小程序-同程艺龙info
cron "18 10 8 * * *" script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/fcz/fcz_sign.js, enable=false, tag=飞常准

# congcong0806   https://github.com/congcong0806/surge-list/tree/master
cron "0 8 * * *" script-path=https://github.com/congcong0806/surge-list/raw/master/Script/daysmatter.js, enable=false, tag=倒数日
cron "0 7-23 * * *" script-path=https://github.com/congcong0806/surge-list/raw/master/Script/time.js, enable=false, tag=今日时间

# MeetaGit    https://github.com/MeetaGit/MeetaRules/tree/master/Surge
cron "10 0/5 13-23 * * *" script-path=https://raw.githubusercontent.com/MeetaGit/MeetaRules/m%CE%B1ster/Surge/Custom_Js/lottery_xyft.js, enable=false, tag=幸运飞艇

# yichahucha    https://github.com/yichahucha/surge/tree/master
cron "11 7 * * *" script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/yichahucha/cron_daily.js, enable=false, tag=每日一句+蚂蚁森林收能量

# iNotification
cron "40 9 8 * * *" script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/loulancheck.js, enable=false, tag=楼兰小说
cron "50 9 8 * * *" script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/cmbchina.js, enable=false, tag=招行信用卡

# qiaoborui    https://github.com/qiaoborui
cron "10 11 8 * * *" script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/360.js, enable=false, tag=360扫地机

# Dachaw
cron "0 0 8 * * *" script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/nCoVrumors.js, enable=false, tag=疫情辟谣

# makexp
cron "40 11 8 * * *" script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Task/xmly_wc.js, enable=false, tag=微信小程序-喜马拉雅

# vinewx  https://ooxx.be/js/
cron "0 9 * * *" script-path=https://ooxx.be/js/jegotrip.js, enable=false, tag=无忧行
cron "0 9 * * *" script-path=https://ooxx.be/js/umer.js, enable=false, tag=优麦医生
cron "0 18 * * *" script-path=https://ooxx.be/js/maoyan.js, enable=false, tag=猫眼

#  chouchoui  https://github.com/chouchoui/QuanX/tree/master/Scripts
cron "30 8,13,19 * * *" script-path=https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/angelalign/angelalign.task.js, enable=false, tag=时代天使
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/nga/nga.js, enable=false, tag=NGA刮墙

# id77 https://github.com/id77/QuantumultX/tree/master
cron "17 0 * * *" script-path=https://raw.githubusercontent.com/id77/QuantumultX/master/task/163GameVip.js, enable=false, tag=网易游戏
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/id77/QuantumultX/master/task/thg.js, enable=false, tag=太好购
cron "12 0 * * *" script-path=https://raw.githubusercontent.com/id77/QuantumultX/master/task/geekhub.js, enable=false, tag=geekhub
cron "0 12 * * *" script-path=https://raw.githubusercontent.com/id77/QuantumultX/master/task/jdWuLiu.js, enable=false, tag=京东物流

# XidNDD https://github.com/XidNDD/2020scripts
cron "22 11 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/yzkbSign.js, enable=false, tag=柚子快报
cron "23 14 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/jddsSign.js, enable=false, tag=京东读书
cron "24 17 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/zymkSign.js, enable=false, tag=知音漫客
cron "22 12 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/hdhycSign.js, enable=false, tag=海德汇一城
cron "22 15 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/mygmcSign.js, enable=false, tag=民盈国贸城
cron "24 16 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/wsxqSign.js, enable=false, tag=微商星球
cron "22 16 0 * * *" script-path=https://raw.githubusercontent.com/XidNDD/2020scripts/master/zscdbSign.js, enable=false, tag=追书畅读版

# mw418  https://github.com/mw418/QuantumultX
cron "5 8 * * *" script-path=https://raw.githubusercontent.com/mw418/QuantumultX/master/setu.js, enable=false, tag=每日色图

# LJJJia   https://github.com/LJJJia/script
cron "2 0 * * *" script-path=https://raw.githubusercontent.com/LJJJia/script/master/iklear/iklear_checkin.js, enable=false, tag=iklear_checkin

# photonmang  https://github.com/photonmang/quantumultX
cron "10 0 8 * * *" script-path=https://raw.githubusercontent.com/photonmang/quantumultX/master/tuhu/tuhu.js, enable=false, tag=途虎养车

# whyour
cron "5 9 * * *" script-path=https://raw.githubusercontent.com/whyour/hundun/master/quanx/daymatter.js, enable=false, tag=倒数日
