(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();const S=[{id:"seedance-2",date:"2026-02-27",title:"应急管理部：事故调查报告须依法公开",subtitle:"安全治理从“结果披露”转向“公开透明”",news_overview:"2月27日，应急管理部发布会强调事故调查报告应依法全文公开，并将加强挂牌督办等机制。",news_detail:"2月27日，应急管理部举行新闻发布会，相关负责人表示，社会公众对生产安全事故调查结果高度关注，事故调查报告全文公开既是保障公众知情权、监督权的需要，也是警示教育与治理效能的重要手段。国家层面负责的重特大事故调查报告均全文公开，但地方负责的事故调查存在未公开或公开不及时情况。下一步，国务院安委办、应急管理部将强化挂牌督办，对重大事故、典型较大事故等进行督办，推动公开更及时、更加规范。",news_bullets:["事故调查报告应依法全文公开","重特大事故调查报告已明确需公开","国务院安委办将对典型事故挂牌督办"],quiz:{question:"发布会强调事故调查报告公开的核心目的是什么？",options:["提升企业融资","保障公众知情权并强化警示教育","减少媒体关注"],answerIndex:1,hint:"发布会强调‘知情权/监督权’和‘警示教育’"},biz_insights:["把视频生成做成‘投流素材工厂’：交付从1条视频升级为‘脚本模板库+素材批量产线+投放AB看板’","用指标驱动创意：按封面帧/前三秒钩子/卖点结构做组合实验，沉淀可复用的高转化结构","建立‘素材-投放-复盘’闭环：每轮迭代产出可解释结论（哪类镜头/节奏/口播提升CTR/ROI）"],strategies:[{label:"A 跟风炫技",description:"先生成10条‘电影感’样片去展示能力",cost:{Team:2,Budget:1,Compute:3},impact:{Growth:1,GEO:0,Ads:1,Deploy:0,Risk:1},unlock_card:"策略卡：样片展厅"},{label:"B 素材工厂",description:"搭建‘50-200条/周’投流素材流水线（脚本库+镜头库+批量生成+剪辑模板）",cost:{Team:4,Budget:3,Compute:5},impact:{Growth:2,GEO:0,Ads:4,Deploy:2,Risk:2},unlock_card:"策略卡：投流素材工厂"},{label:"C 客户闭环",description:"把生成视频接入投放与复盘系统，输出‘可解释的AB结论’作为续费抓手",cost:{Team:3,Budget:2,Compute:4},impact:{Growth:3,GEO:0,Ads:3,Deploy:3,Risk:1},unlock_card:"策略卡：AB复盘引擎"}],case_popup:{title:"闭环电商：7天起跑版投流素材工厂",scenario:"服务电商客户（护肤/日化/食品），目标：提升CTR与ROI",deliverables:["脚本模板库（卖点结构×人设口吻×场景）≥30条","镜头与转场库（开箱/对比/测评/使用场景）≥40组","生成+剪辑批量流程（统一字幕/封面/口播节奏）","投放AB复盘表（素材ID→数据→结论→下一轮改动）"],workflow:["拆品：卖点与反对点清单","设结构：前三秒钩子与转化段落","批量产：生成→剪辑模板→出片","投放复盘：按CTR/CPM/ROI迭代脚本与镜头"]},insight_fragment:"公开透明会改变行业对安全与责任的预期。"},{id:"ai-entry-war",date:"2026-02-23",title:"公安部通报：春节治安秩序总体平稳",subtitle:"社会面防控与交通保障同步加压",news_overview:"2月23日公安部通报春节期间治安形势：刑事警情同比下降，重点区域巡防加密。",news_detail:"2月23日，北京日报客户端报道公安部最新通报：春节期间全国社会大局稳定、治安秩序良好，刑事警情同比下降12.1%，5440余场大型活动安全顺利举行。公安机关日均投入警力48万人次，设置值守点2.9万个，重点加强繁华商圈、交通枢纽等人员密集场所巡逻防控。交管部门累计投入警力137.7万人次，严查酒驾醉驾等违法行为，保障交通安全形势总体平稳。",news_bullets:["刑事警情同比下降12.1%","日均投入警力48万人次、值守点2.9万个","交管警力137.7万人次保障交通"],quiz:{question:"通报中反映春节社会治安形势的核心结论是什么？",options:["警情激增","社会大局稳定、治安秩序良好","全面停办大型活动"],answerIndex:1,hint:"通报强调‘稳定’与‘良好’"},biz_insights:["焕泽应卖‘场景任务链’，不是卖‘接入模型’：把策略-内容-分发-转化串起来","用行业交付包沉淀壁垒：酒店/酒旅/美护/电商各一套标准流程+可配置模块","把入口红利转成资产：沉淀客户的素材库、词库、结构模板与复盘结论"],strategies:[{label:"A 追入口",description:"把所有热点AI入口都接一遍",cost:{Team:3,Budget:2,Compute:2},impact:{Growth:1,GEO:1,Ads:1,Deploy:0,Risk:2},unlock_card:"策略卡：全入口接入"},{label:"B 做任务链",description:"围绕客户业务做一条‘从内容到转化’的自动化任务链",cost:{Team:4,Budget:3,Compute:3},impact:{Growth:3,GEO:1,Ads:2,Deploy:3,Risk:1},unlock_card:"策略卡：任务链交付"},{label:"C 做资产化",description:"把每次交付沉淀成‘可复用资产包’（素材库/词库/结构库）",cost:{Team:3,Budget:2,Compute:2},impact:{Growth:2,GEO:2,Ads:1,Deploy:3,Risk:1},unlock_card:"策略卡：资产化SOP"}],case_popup:{title:"酒店客户：节日热点→本地素材库→扫码分发任务链",scenario:"酒店有本地素材/房型资料，不想上云，追求可控与快速产出",deliverables:["本地素材库与房型资料库（结构化字段：房型/卖点/价格/政策/库存）","节日&活动timeline内容生成器（按周自动出：主题/标题/正文/封面文案）","扫码分发落地页（不同房型/套餐二维码）+ 留资表单","转化复盘表（扫码→到店/预定→内容贡献度）"],workflow:["整理资产：素材与房型字段化","设规则：节日热点与活动节奏","生成内容：图文/短视频脚本批量产","扫码分发：按房型/渠道追踪转化"]},insight_fragment:"社会面稳定依赖密集而精细的现场调度。"},{id:"cny-mau",date:"2026-02-23",title:"返程高峰：跨区域流动量超3.6亿人次",subtitle:"春节最后一天交通保障全线加密",news_overview:"2月23日春节假期最后一天，全国跨区域人员流动量预计超3.6亿人次。",news_detail:"新闻联播报道：2月23日春节假期最后一天，全国迎来返程高峰，跨区域人员流动量预计超3.6亿人次。全国铁路预计发送旅客1850万人次，为假期最高峰值；高速公路车流量预计超6600万辆次，多地采取动态管控缓解拥堵；民航客运量预计265万人次。多地车站增派人员、加密公交出租车班次，保障旅客换乘与返程秩序。",news_bullets:["跨区域人员流动量预计超3.6亿人次","铁路发送旅客1850万人次创假期峰值","高速公路车流量预计超6600万辆次"],quiz:{question:"这条新闻描述的核心场景是什么？",options:["春节前出行","春节最后一天返程高峰","清明踏青"],answerIndex:1,hint:"关键词是‘返程高峰’"},biz_insights:["把‘方法论’产品化：做内容资产仪表盘+迭代SOP","复盘结论要可迁移：形成行业模板（美护/酒旅/电商）","让流量变留量：线索、私域、搜索占位资产要可累计"],strategies:[{label:"A 做报告",description:"只输出周报与复盘PPT",cost:{Team:2,Budget:1,Compute:0},impact:{Growth:1,GEO:0,Ads:0,Deploy:1,Risk:0},unlock_card:"策略卡：复盘周报"},{label:"B 做看板",description:"搭建内容资产看板（数据-结论-下一轮动作）",cost:{Team:3,Budget:2,Compute:1},impact:{Growth:2,GEO:1,Ads:1,Deploy:2,Risk:1},unlock_card:"策略卡：资产看板"},{label:"C 做系统",description:"把看板+SOP+模板库打包成行业交付产品",cost:{Team:4,Budget:3,Compute:2},impact:{Growth:3,GEO:1,Ads:2,Deploy:3,Risk:1},unlock_card:"策略卡：行业产品包"}],case_popup:{title:"美护客户：稳态增长系统化交付",scenario:"客户有持续投放预算，但缺少可解释的内容迭代体系",deliverables:["内容资产仪表盘（渠道/素材/卖点/数据联动）","季度迭代SOP（每周实验主题+指标目标+复盘结论）","行业模板库（敏感肌/修护/抗老三类卖点结构）","留量资产包（私域脚本+搜索占位词清单）"],workflow:["定指标：稳态目标与核心转化事件","建看板：素材与数据一一映射","周迭代：主题实验→复盘结论","资产化：模板库+私域脚本沉淀"]},insight_fragment:"高峰期的数据与秩序本身就是有效信号。"},{id:"model-penetration",date:"2026-02-22",title:"春运返程高峰：初一至初五流动量超16亿人次",subtitle:"跨区域出行连续三日创历史峰值",news_overview:"2月22日央视网报道：春运初一至初五跨区域流动量超16亿人次，连续三日创峰值。",news_detail:"央视网2月22日消息：春节假期即将结束，各地迎来返程高峰。农历正月初一至初五，全社会跨区域人员流动量预计超16亿人次，日均3.2亿人次，同比增长超11%。从正月初三开始，连续三日客流规模超过历史同期单日峰值。交通部门同时加强新能源车充电服务保障，提升春运服务能力。",news_bullets:["初一至初五跨区域流动量超16亿人次","日均3.2亿人次，同比增长超11%","连续三日客流规模超历史同期峰值"],quiz:{question:"报道中跨区域流动量最显著的特征是什么？",options:["持续低迷","连续三日创历史峰值","仅限部分省份"],answerIndex:1,hint:"关键词是‘连续三日超过历史峰值’"},biz_insights:["焕泽的差异化：平台语义+商销闭环，而非‘某个模型’","把非结构化内容变成结构化策略输入：搜研→词库→内容模板→分发","把交付变标准件：场景模块可配置、可复制"],strategies:[{label:"A 强GEO",description:"优先占位平台搜索答案与AI总结引用",cost:{Team:3,Budget:2,Compute:1},impact:{Growth:2,GEO:4,Ads:0,Deploy:1,Risk:1},unlock_card:"策略卡：GEO占位矩阵"},{label:"B 强投流",description:"以素材与投放实验驱动转化，快速拉起规模",cost:{Team:3,Budget:3,Compute:2},impact:{Growth:3,GEO:0,Ads:4,Deploy:1,Risk:2},unlock_card:"策略卡：投流实验加速"},{label:"C 强交付",description:"以行业场景模块化交付，提升可复制性",cost:{Team:4,Budget:2,Compute:2},impact:{Growth:2,GEO:1,Ads:1,Deploy:4,Risk:1},unlock_card:"策略卡：场景模块交付"}],case_popup:{title:"电商客户：内容到转化的应用渗透",scenario:"客户模型选型已完成，但缺少业务链路与可复盘效果",deliverables:["场景任务链（搜研→内容→分发→转化）","关键词与卖点词库（搜索/评论/竞品拆解）","可配置模板库（标题/首屏/卖点结构）","复盘结论库（命中率/转化因素/下一轮动作）"],workflow:["拆场景：明确转化链路","建词库：需求与痛点结构化","模板化：内容生产与分发","复盘迭代：结论库沉淀"]},insight_fragment:"高频出行暴露真实需求，也暴露体验短板。"},{id:"open-source-local",date:"2026-02-24",title:"春运前20天流动量达50.8亿人次",subtitle:"春运过半，多项数据创历史同期新高",news_overview:"2月24日中新网报道：春运前20天跨区域流动量达50.8亿人次，创历史同期新高。",news_detail:"中新网2月24日报道：2026年春运过半，前20天全社会跨区域人员流动量预计达50.8亿人次，日均2.5亿人次，创历史同期新高。春节假期作为史上“最长春节假期”(2月15日—23日)，从2月19日开始连续多日客流超过历史同期单日峰值。数据显示，2月22日跨区域流动量达3.8亿人次，为春节假期最高值。",news_bullets:["春运前20天流动量50.8亿人次","日均2.5亿人次，创历史同期新高","2月22日单日流动量达3.8亿人次"],quiz:{question:"报道中春运前20天的数据核心结论是什么？",options:["客流下降","创历史同期新高","仅局部城市增长"],answerIndex:1,hint:"关键词是‘历史同期新高’"},biz_insights:["openclaw + 本地 mac mini：给酒店做‘素材库+房型库+节日timeline+扫码分发’一体交付","强调‘软硬一体’：客户拿到就能跑，减少IT协调成本","把内容生产与分发闭环：生成不仅是文案，还要带可追踪转化链路"],strategies:[{label:"A 云端通用",description:"直接用云端通用RAG接客户资料",cost:{Team:2,Budget:2,Compute:2},impact:{Growth:1,GEO:0,Ads:1,Deploy:1,Risk:2},unlock_card:"策略卡：云端RAG"},{label:"B 本地一体",description:"mac mini 本地知识库 + openclaw 工作流 + 简易后台",cost:{Team:4,Budget:3,Compute:1},impact:{Growth:2,GEO:1,Ads:0,Deploy:4,Risk:1},unlock_card:"策略卡：本地一体交付"},{label:"C 行业套件",description:"把酒店方案做成可复制的‘行业套件’卖给更多酒旅客户",cost:{Team:4,Budget:4,Compute:2},impact:{Growth:3,GEO:1,Ads:1,Deploy:3,Risk:2},unlock_card:"策略卡：行业套件"}],case_popup:{title:"酒店本地化：软硬一体可控交付",scenario:"酒店不愿上云，要求低延迟与数据可控",deliverables:["本地 mac mini 软硬一体部署包（含开源模型与运行脚本）","本地素材库/房型库接入（字段化结构+权限）","节日timeline内容生成器（本地生成标题/正文/封面文案）","扫码分发与转化追踪（本地落地页+表单）"],workflow:["设备交付：本地环境预装与验收","资产接入：素材/房型字段化","本地生成：按节奏批量产内容","分发追踪：扫码→留资→复盘"]},insight_fragment:"大规模流动背后，是标准化服务能力的较量。"},{id:"ai-hardware",date:"2026-02-25",title:"新《环境空气质量标准》发布",subtitle:"PM2.5与PM10年均浓度标准下调",news_overview:"2月25日，两部门发布新修订《环境空气质量标准》，分阶段实施更严格限值。",news_detail:"新闻联播2月25日报道：生态环境部与国家市场监督管理总局联合发布新修订的《环境空气质量标准》。PM2.5和PM10的年均浓度达标值分别调整为25和50微克/立方米。新标准分两阶段实施：2026年3月1日至2030年12月31日为过渡阶段，2031年1月1日起全面执行。",news_bullets:["PM2.5年均浓度达标值调整为25微克/立方米","PM10年均浓度达标值调整为50微克/立方米","新标准分阶段实施，2031年全面执行"],quiz:{question:"新修订标准的实施节奏是？",options:["立即全面执行","分阶段实施，2031年全面执行","仅试点城市执行"],answerIndex:1,hint:"报道强调‘分两阶段实施’"},biz_insights:["酒旅/到店客户：把线下体验拆成可拍脚本与可搜场景词","扫码与导购融合：线下触点→内容→留资/预订","结合GEO：让‘体验关键词’进入AI总结引用"],strategies:[{label:"A 做线下展示",description:"只做门店视频与海报展示",cost:{Team:2,Budget:2,Compute:1},impact:{Growth:1,GEO:0,Ads:1,Deploy:1,Risk:1},unlock_card:"策略卡：线下展示"},{label:"B 做导购链",description:"设计端侧导购链路：看→问→扫→留资",cost:{Team:3,Budget:2,Compute:2},impact:{Growth:2,GEO:1,Ads:2,Deploy:3,Risk:1},unlock_card:"策略卡：导购链路"},{label:"C 做体验占位",description:"打造‘体验关键词’与内容矩阵，抢AI总结引用",cost:{Team:3,Budget:3,Compute:2},impact:{Growth:2,GEO:4,Ads:1,Deploy:2,Risk:1},unlock_card:"策略卡：体验占位"}],case_popup:{title:"酒旅客户：端侧入口导购方案",scenario:"酒店希望把线下体验转成可传播内容与可追踪转化",deliverables:["体验脚本包（前台/房型/餐饮/周边四类）","导购二维码矩阵（房型/套餐/到店路线）","体验关键词库（可搜场景词+高频问答）","线下触点转化表（扫码→留资→预订）"],workflow:["拆体验：现场流程拆脚本","建词库：场景关键词与问答","设触点：二维码与导购路径","复盘：转化链路与内容优化"]},insight_fragment:"公共标准更新会倒逼服务体系升级。"},{id:"embodied-ai",date:"2026-02-25",title:"全国学生总体近视率“四连降”",subtitle:"2024年降至50.3%",news_overview:"2月25日教育部通报：全国学生总体近视率连续四年下降，2024年降至50.3%。",news_detail:"新闻联播2月25日报道：教育部发布2024年全国学生体质健康抽测结果，学生体质健康总体优良率较2016年提升9.3个百分点。在近视防控方面，2021年至2024年全国学生总体近视率实现“四连降”，2024年降至50.3%，达到每年下降0.5个百分点的防控目标。",news_bullets:["2021-2024年全国学生近视率“四连降”","2024年全国学生近视率降至50.3%","近视防控达到每年下降0.5个百分点目标"],quiz:{question:"报道中全国学生近视率的最新数据是多少？",options:["60.3%","50.3%","40.3%"],answerIndex:1,hint:"注意‘2024年降至50.3%’"},biz_insights:["帮客户把‘服务流程’拍成可复制脚本：入住/导览/护理/售后","结合Seedance：把流程脚本规模化生成成素材矩阵","结合GEO：把流程场景词占位，抢AI总结引用"],strategies:[{label:"A 做故事",description:"拍一条品牌故事短片",cost:{Team:2,Budget:2,Compute:1},impact:{Growth:1,GEO:0,Ads:1,Deploy:1,Risk:1},unlock_card:"策略卡：品牌故事"},{label:"B 做流程",description:"拆服务流程，做可复制脚本矩阵",cost:{Team:3,Budget:2,Compute:2},impact:{Growth:2,GEO:2,Ads:2,Deploy:3,Risk:1},unlock_card:"策略卡：流程脚本矩阵"},{label:"C 做占位",description:"用流程场景词占位AI总结引用",cost:{Team:3,Budget:3,Compute:2},impact:{Growth:2,GEO:4,Ads:1,Deploy:2,Risk:1},unlock_card:"策略卡：流程占位"}],case_popup:{title:"到店服务：体验流程内容化",scenario:"客户希望把服务过程转化为可传播的内容资产",deliverables:["服务流程脚本（接待/体验/问题处理/售后）","流程镜头库（关键动作与转场）","场景关键词占位清单（体验词+痛点词）","素材复盘表（流程段落→数据→优化动作）"],workflow:["拆流程：分步骤与关键动作","写脚本：镜头+台词+节奏","批量产：生成与剪辑模板化","复盘：流程段落迭代"]},insight_fragment:"趋势变化背后，是长期机制而非短期动作。"},{id:"xhs-geo",date:"2026-02-20",title:"应急管理部紧急会议：严控烟花爆竹风险",subtitle:"“五个严禁、三个务必”八项硬措施",news_overview:"2月20日国务院安委办、应急管理部强调严防烟花爆竹安全风险，提出“八项硬措施”。",news_detail:"2月20日媒体报道，国务院安委办、应急管理部19日召开紧急视频调度会，要求高度重视防范烟花爆竹安全风险，严格落实烟花爆竹“五个严禁、三个务必”八项硬措施，抓实全链条安全监管，坚决避免各类事故发生。会议强调在岁末年初和节庆期间，要从生产、运输、储存、销售、燃放等环节强化监管。",news_bullets:["强调防范烟花爆竹安全风险","提出“五个严禁、三个务必”八项硬措施","要求全链条安全监管"],quiz:{question:"会议强调的核心措施是什么？",options:["简化审批","落实“八项硬措施”","延长燃放时间"],answerIndex:1,hint:"关键词是‘五个严禁、三个务必’"},biz_insights:["丝塔芙：建立‘问题词库→20席位攻坚笔记→评论区语料埋点→被引用率复盘’闭环","结构化写法：经验口吻+步骤清单+适用人群+对比结论，让AI更好抽取","把‘评论高赞’当第二正文：提前埋用户疑问与关键短语"],strategies:[{label:"A 做爆款",description:"先冲一篇爆文",cost:{Team:2,Budget:2,Compute:1},impact:{Growth:2,GEO:0,Ads:2,Deploy:0,Risk:2},unlock_card:"策略卡：爆款冲刺"},{label:"B 做席位攻坚",description:"做20席位入选笔记矩阵（问题词库驱动）",cost:{Team:3,Budget:2,Compute:2},impact:{Growth:2,GEO:4,Ads:1,Deploy:2,Risk:1},unlock_card:"策略卡：席位攻坚"},{label:"C 做语料系统",description:"评论区语料工程 + 引用率复盘",cost:{Team:4,Budget:2,Compute:2},impact:{Growth:2,GEO:3,Ads:0,Deploy:3,Risk:1},unlock_card:"策略卡：语料系统"}],case_popup:{title:"丝塔芙GEO：20席位攻坚作战包",scenario:"目标：提高AI总结引用率与品牌权威感",deliverables:["问题词库（痛点疑问/对比抉择/使用步骤/人群适配）≥80","攻坚笔记矩阵（每词2-3篇不同经验视角）≥60","评论语料脚本（高赞问答模板+关键短语埋点）","引用率复盘表（入口/关键词/引用位置/被抽取句）"],workflow:["建词库：按入口触发逻辑分类","写矩阵：经验口吻+结构化步骤","埋语料：评论区高赞问答脚本","复盘迭代：按被引用率改结构与短语"]},insight_fragment:"监管信号常常决定市场操作边界。"}],q="本周周会金句",G=["看起来稳，但别忘了留后手。","这是条快路，成本也更真。","你在赌规模，下注要有节奏。","这步像在铺路，回报会慢一点。","好点子，但得有复盘闭环才算数。","漂亮，但能否复制才是关键。"],m={INTRO:"INTRO",NEWS:"NEWS",QUIZ:"QUIZ",BIZ:"BIZ",RESULT:"RESULT"},k=["Growth","GEO","Ads","Deploy","Risk"],A=["Growth","GEO","Ads","Deploy"],y={Growth:"增长势能",GEO:"GEO占位力",Ads:"投流力",Deploy:"交付力",Risk:"风险值"},D={"GEO+Ads":"GEO占位派","GEO+Growth":"增长叙事派","GEO+Deploy":"场景交付派","Ads+Growth":"投流素材工厂派","Ads+Deploy":"投流交付派","Growth+Deploy":"增长交付派"};function M(s){const t={cards:S,index:0,stage:m.INTRO,flipped:!1,metrics:{Growth:0,GEO:0,Ads:0,Deploy:0,Risk:0},strategyCards:[],insights:[]},l=document.createElement("div");l.className="app",s.appendChild(l);const d=j();l.appendChild(d.el);const n=P();l.appendChild(n.el);function i(){l.querySelectorAll(".screen").forEach(o=>o.remove());const e=document.createElement("div");if(e.className="screen",t.stage===m.RESULT)e.appendChild(I(t));else{if(t.stage===m.INTRO){e.appendChild($()),l.insertBefore(e,d.el);return}e.appendChild(O(t)),e.appendChild(B(t))}l.insertBefore(e,d.el)}function p(){if(t.index+1>=t.cards.length){t.stage=m.RESULT,t.flipped=!1,i();return}t.index+=1,t.stage=m.NEWS,t.flipped=!1,i()}function b(e){Object.keys(e.impact).forEach(u=>{t.metrics[u]+=e.impact[u]}),t.strategyCards.push(e.unlock_card);const o=G[Math.floor(Math.random()*G.length)];n.show(o),p()}function v(){t.flipped=!0,i()}function f(e){t.stage=e,i()}function C(e){const o=t.cards[t.index];e===o.quiz.answerIndex?(n.show("答对了，获得洞察碎片"),o.insight_fragment&&t.insights.push(o.insight_fragment),t.stage=m.BIZ,i()):n.show(`答错了：${o.quiz.hint}`)}function T(){const e=t.cards[t.index];d.open(e.case_popup)}i();function O(e){const o=document.createElement("div");o.className="header";const u=document.createElement("div");u.className="progress";const h=(e.index+1)/e.cards.length*100;u.innerHTML=`
      <div class="progress-meta">第 ${e.index+1}/${e.cards.length} 张</div>
      <div class="progress-bar"><span style="width:${h}%"></span></div>
    `;const c=document.createElement("div");return c.className="metrics",c.innerHTML=k.map(r=>{const a=e.metrics[r];return`<div class="metric"><span>${y[r]}</span><strong>${a}</strong></div>`}).join(""),o.appendChild(u),o.appendChild(c),o}function B(e,o,u){const h=document.createElement("div");h.className="board";const c=e.cards[e.index],r=document.createElement("div");r.className=`card-wrap ${e.flipped?"flipped":""}`;const a=document.createElement("div");a.className="card-inner";const g=document.createElement("div");g.className="card-face card-front",g.innerHTML=`
      <div class="card-date">${c.date}</div>
      <h2>${c.title}</h2>
      <p class="subtitle">${c.subtitle}</p>
      <p class="summary">${c.news_overview||c.news_summary}</p>
      <button class="btn primary small" id="flipBtn">翻牌进入</button>
    `;const E=g.querySelector("#flipBtn");E&&(E.onclick=v);const _=document.createElement("div");return _.className="card-face card-back",_.appendChild(R(e,c)),a.appendChild(g),a.appendChild(_),r.appendChild(a),h.appendChild(r),h}function $(){const e=document.createElement("div");return e.className="intro",e.innerHTML=`
      <div class="intro-card">
        <div class="intro-badge">AI热点落地局 · 2026/2/20–2/27</div>
        <h1>从新闻到生意的卡牌推演</h1>
        <p class="intro-sub">你将扮演内容营销策略负责人，通过8张热点卡，依次完成：新闻速览 → 理解挑战 → 业务落地。每次选择都会消耗资源并影响五项指标，最终生成你的策略流派与行动海报。</p>
        <div class="intro-grid">
          <div class="intro-item">
            <h3>玩法节奏</h3>
            <p>每张卡必须三阶段通关，答对才能进入业务落地。</p>
          </div>
          <div class="intro-item">
            <h3>指标系统</h3>
            <p>增长势能 / GEO占位力 / 投流力 / 交付力 / 风险值。</p>
          </div>
          <div class="intro-item">
            <h3>结局产出</h3>
            <p>策略流派称号 + 策略卡总结 + 可分享海报。</p>
          </div>
        </div>
        <div class="intro-actions">
          <button class="btn primary" id="startGame">开始推演</button>
        </div>
      </div>
    `,setTimeout(()=>{const o=e.querySelector("#startGame");o&&(o.onclick=()=>f(m.NEWS))},0),e}function R(e,o,u,h){const c=document.createElement("div");if(c.className="card-content",e.stage===m.NEWS){c.innerHTML=`
        <div class="stage-title">① 新闻详解</div>
        <p class="summary">${o.news_detail||o.news_summary}</p>
        <ul class="bullets">
          ${o.news_bullets.map(a=>`<li>${a}</li>`).join("")}
        </ul>
        <div class="actions">
          <button class="btn primary" id="toQuiz">进入理解挑战</button>
        </div>
      `;const r=c.querySelector("#toQuiz");r&&(r.onclick=()=>f(m.QUIZ))}if(e.stage===m.QUIZ&&(c.innerHTML=`
        <div class="stage-title">② 理解挑战</div>
        <div class="quiz-question">${o.quiz.question}</div>
        <div class="quiz-options">
          ${o.quiz.options.map((r,a)=>`<button class="btn option" data-idx="${a}">${String.fromCharCode(65+a)}. ${r}</button>`).join("")}
        </div>
        <div class="hint">答错可重试</div>
      `,c.querySelectorAll(".option").forEach(r=>{r.onclick=()=>C(Number(r.dataset.idx))})),e.stage===m.BIZ){c.innerHTML=`
        <div class="stage-title">③ 业务落地</div>
        <ul class="bullets">
          ${o.biz_insights.map(a=>`<li>${a}</li>`).join("")}
        </ul>
        <div class="case-block">
          <button class="btn ghost" id="caseBtn">现实案例</button>
        </div>
        <div class="strategy-grid">
          ${o.strategies.map((a,g)=>N(a,g)).join("")}
        </div>
      `;const r=c.querySelector("#caseBtn");r&&(r.onclick=T),c.querySelectorAll(".strategy-btn").forEach(a=>{a.onclick=()=>{const g=Number(a.dataset.idx);b(o.strategies[g])}})}return c}function I(e,o){const u=document.createElement("div");u.className="result";const{title:h}=z(e.metrics),{summary:c,signals:r}=L(e.metrics,e.strategyCards);return u.innerHTML=`
      <div class="result-hero">
        <div class="hero-badge">策略流派</div>
        <h1>${h}</h1>
        <p class="result-sub">${q}：${e.insights.join(" / ")||"（尚未收集）"}</p>
      </div>
      <div class="result-grid">
        <div class="panel">
          <div class="panel-title">指标画像</div>
          ${x(e.metrics)}
        </div>
        <div class="panel">
          <div class="panel-title">策略卡列表</div>
          <details open>
            <summary>查看本局策略卡（${e.strategyCards.length}）</summary>
            <ul class="list">
              ${e.strategyCards.map(a=>`<li>${a}</li>`).join("")}
            </ul>
          </details>
        </div>
        <div class="panel">
          <div class="panel-title">本局业务总结</div>
          <div class="summary-text">${c}</div>
          <div class="panel-title mini">下一步更值得关注</div>
          <ul class="list">
            ${r.map(a=>`<li>${a}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="restart">
        <button class="btn ghost" id="restartBtn">再来一局</button>
      </div>
    `,setTimeout(()=>{const a=u.querySelector("#restartBtn");a&&(a.onclick=()=>window.location.reload())},0),u}}function N(s,t){const l=`Growth ${w(s.impact.Growth)} | GEO ${w(s.impact.GEO)} | Ads ${w(s.impact.Ads)} | Deploy ${w(s.impact.Deploy)} | Risk ${w(s.impact.Risk)}`;return`
    <div class="strategy">
      <div class="strategy-title">${s.label}</div>
      <div class="strategy-desc">${s.description}</div>
      <div class="strategy-meta">影响：${l}</div>
      <button class="btn primary strategy-btn" data-idx="${t}">
        选择策略
      </button>
    </div>
  `}function w(s){return s>0?`+${s}`:s<0?`${s}`:"0"}function x(s){return`
    <div class="bars">
      ${k.map(t=>{const l=s[t],d=Math.min(100,Math.max(0,(l+10)*5));return`
          <div class="bar">
            <span>${y[t]}</span>
            <div class="bar-track"><i style="width:${d}%"></i></div>
            <strong>${l}</strong>
          </div>
        `}).join("")}
    </div>
  `}function z(s){const t=A.map(i=>({key:i,val:s[i]})).sort((i,p)=>p.val-i.val),l=[t[0].key,t[1].key],d=[l[0],l[1]].sort().join("+");return{title:D[d]||"综合策略派",topMetrics:l}}function L(s,t){const d=A.map(v=>({key:v,val:s[v]})).sort((v,f)=>f.val-v.val).slice(0,2).map(v=>y[v.key]).join(" + "),n=s.Risk,i=n>=6?"风险偏高，建议补强合规与成本可控。":n>=3?"风险可控但需持续校验。":"风险较低，可稳步扩张。";return{summary:`本局策略重心落在「${d}」，策略卡主要集中在${t.length}条行动路径上。你的选择体现了对“可复制增长”和“业务链路”的偏好，同时避免了单点爆发的脆弱性。${i}`,signals:["行业内“入口→任务链”转化率的真实数据与案例","平台对AI内容标识/版权的最新监管与执行口径","GEO类内容被AI总结引用的结构与语料变化趋势"]}}function P(){const s=document.createElement("div");s.className="toast hidden";let t=null;function l(d){s.textContent=d,s.classList.remove("hidden"),clearTimeout(t),t=setTimeout(()=>s.classList.add("hidden"),2200)}return{el:s,show:l}}function j(){const s=document.createElement("div");s.className="modal hidden",s.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="modal-card">
      <button class="modal-close">关闭</button>
      <div class="modal-body"></div>
    </div>
  `;const t=s.querySelector(".modal-body"),l=s.querySelector(".modal-close"),d=s.querySelector(".modal-backdrop");function n(p){t.innerHTML=`
      <h3>${p.title}</h3>
      <p class="modal-scenario">${p.scenario}</p>
      <div class="modal-section">
        <strong>交付物</strong>
        <ul>${p.deliverables.map(b=>`<li>${b}</li>`).join("")}</ul>
      </div>
      <div class="modal-section">
        <strong>流程</strong>
        <ul>${p.workflow.map(b=>`<li>${b}</li>`).join("")}</ul>
      </div>
    `,s.classList.remove("hidden")}function i(){s.classList.add("hidden")}return l.onclick=i,d.onclick=i,{el:s,open:n,close:i}}const H=document.querySelector("#app");M(H);
