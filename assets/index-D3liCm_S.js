(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();const x=[{id:"seedance-2",date:"2026-02-27",title:"Seedance 2.0：视频生成从炫技走向量产",subtitle:"不是做一条爆款，而是做一座‘投流素材工厂’",news_summary:"多家媒体集中讨论国产视频生成模型 Seedance 2.0 的逼真度与稳定性提升，引发创作者与营销圈对‘视频内容生产范式改变’的关注。重点不再是单条作品质量，而是能否支撑更低成本、更快迭代的规模化视频生产。",news_bullets:["视频生成更稳定：人物/场景一致性与镜头运动更可控","营销圈关注点转移：从‘效果惊艳’到‘能否跑量’","内容生产链路可能重构：脚本→生成→剪辑→投放迭代"],quiz:{question:"这条新闻里，营销圈关注点从什么转向什么？",options:["从‘写长文案’转向‘做直播带货’","从‘单条作品惊艳’转向‘规模化跑量迭代’","从‘买达人’转向‘做线下活动’"],answerIndex:1,hint:"新闻速览里提到‘不再是单条作品质量，而是规模化生产’"},biz_insights:["把视频生成做成‘投流素材工厂’：交付从1条视频升级为‘脚本模板库+素材批量产线+投放AB看板’","用指标驱动创意：按封面帧/前三秒钩子/卖点结构做组合实验，沉淀可复用的高转化结构","建立‘素材-投放-复盘’闭环：每轮迭代产出可解释结论（哪类镜头/节奏/口播提升CTR/ROI）"],strategies:[{label:"A 跟风炫技",description:"先生成10条‘电影感’样片去展示能力",cost:{Team:2,Budget:1,Compute:3},impact:{Growth:1,GEO:0,Ads:1,Deploy:0,Risk:1},unlock_card:"策略卡：样片展厅"},{label:"B 素材工厂",description:"搭建‘50-200条/周’投流素材流水线（脚本库+镜头库+批量生成+剪辑模板）",cost:{Team:4,Budget:3,Compute:5},impact:{Growth:2,GEO:0,Ads:4,Deploy:2,Risk:2},unlock_card:"策略卡：投流素材工厂"},{label:"C 客户闭环",description:"把生成视频接入投放与复盘系统，输出‘可解释的AB结论’作为续费抓手",cost:{Team:3,Budget:2,Compute:4},impact:{Growth:3,GEO:0,Ads:3,Deploy:3,Risk:1},unlock_card:"策略卡：AB复盘引擎"}],case_popup:{title:"闭环电商：7天起跑版投流素材工厂",scenario:"服务电商客户（护肤/日化/食品），目标：提升CTR与ROI",deliverables:["脚本模板库（卖点结构×人设口吻×场景）≥30条","镜头与转场库（开箱/对比/测评/使用场景）≥40组","生成+剪辑批量流程（统一字幕/封面/口播节奏）","投放AB复盘表（素材ID→数据→结论→下一轮改动）"],workflow:["拆品：卖点与反对点清单","设结构：前三秒钩子与转化段落","批量产：生成→剪辑模板→出片","投放复盘：按CTR/CPM/ROI迭代脚本与镜头"]},insight_fragment:"规模化视频生产才是下一个投流护城河。"},{id:"ai-entry-war",date:"2026-02-24",title:"春节后复盘：AI入口大战进入长期战",subtitle:"入口红利只是开始，关键是把AI变成‘任务链’",news_summary:"媒体复盘春节周期的AI产品竞争，焦点从短期拉新转向长期留存：谁能把AI从聊天工具升级为可执行的任务链，谁更可能稳定留住用户与场景。",news_bullets:["拉新手段趋同：投放/红包/联动","留存取决于任务完成：从问答到流程化执行","场景深度更重要：把AI嵌到具体业务里"],quiz:{question:"新闻复盘认为长期留存更依赖什么？",options:["更大的红包","更漂亮的UI","从聊天到可执行的任务链"],answerIndex:2,hint:"注意‘从聊天升级为任务链’"},biz_insights:["焕泽应卖‘场景任务链’，不是卖‘接入模型’：把策略-内容-分发-转化串起来","用行业交付包沉淀壁垒：酒店/酒旅/美护/电商各一套标准流程+可配置模块","把入口红利转成资产：沉淀客户的素材库、词库、结构模板与复盘结论"],strategies:[{label:"A 追入口",description:"把所有热点AI入口都接一遍",cost:{Team:3,Budget:2,Compute:2},impact:{Growth:1,GEO:1,Ads:1,Deploy:0,Risk:2},unlock_card:"策略卡：全入口接入"},{label:"B 做任务链",description:"围绕客户业务做一条‘从内容到转化’的自动化任务链",cost:{Team:4,Budget:3,Compute:3},impact:{Growth:3,GEO:1,Ads:2,Deploy:3,Risk:1},unlock_card:"策略卡：任务链交付"},{label:"C 做资产化",description:"把每次交付沉淀成‘可复用资产包’（素材库/词库/结构库）",cost:{Team:3,Budget:2,Compute:2},impact:{Growth:2,GEO:2,Ads:1,Deploy:3,Risk:1},unlock_card:"策略卡：资产化SOP"}],case_popup:{title:"酒店客户：节日热点→本地素材库→扫码分发任务链",scenario:"酒店有本地素材/房型资料，不想上云，追求可控与快速产出",deliverables:["本地素材库与房型资料库（结构化字段：房型/卖点/价格/政策/库存）","节日&活动timeline内容生成器（按周自动出：主题/标题/正文/封面文案）","扫码分发落地页（不同房型/套餐二维码）+ 留资表单","转化复盘表（扫码→到店/预定→内容贡献度）"],workflow:["整理资产：素材与房型字段化","设规则：节日热点与活动节奏","生成内容：图文/短视频脚本批量产","扫码分发：按房型/渠道追踪转化"]},insight_fragment:"入口只是钥匙，任务链才是锁芯。"},{id:"cny-mau",date:"2026-02-26",title:"春节AI营销战：规模化指标把客户预期拉高",subtitle:"客户不再要‘爆一次’，而是要‘稳态增长系统’",news_summary:"机构与媒体讨论春节前后AI产品的营销投入、用户增长与MAU体量变化，行业对‘规模化运营与持续迭代’的预期增强。",news_bullets:["规模化投放与增长成为常态","用户心智教育加速：AI被当作基础设施","企业侧更看重可解释的效果与稳定交付"],quiz:{question:"这条新闻对企业客户预期的核心变化是什么？",options:["更爱看长报告","更看重一次性爆发","更看重稳态系统化增长与可解释效果"],answerIndex:2,hint:"注意‘规模化/稳态/可解释’"},biz_insights:["把‘方法论’产品化：做内容资产仪表盘+迭代SOP","复盘结论要可迁移：形成行业模板（美护/酒旅/电商）","让流量变留量：线索、私域、搜索占位资产要可累计"],strategies:[{label:"A 做报告",description:"只输出周报与复盘PPT",cost:{Team:2,Budget:1,Compute:0},impact:{Growth:1,GEO:0,Ads:0,Deploy:1,Risk:0},unlock_card:"策略卡：复盘周报"},{label:"B 做看板",description:"搭建内容资产看板（数据-结论-下一轮动作）",cost:{Team:3,Budget:2,Compute:1},impact:{Growth:2,GEO:1,Ads:1,Deploy:2,Risk:1},unlock_card:"策略卡：资产看板"},{label:"C 做系统",description:"把看板+SOP+模板库打包成行业交付产品",cost:{Team:4,Budget:3,Compute:2},impact:{Growth:3,GEO:1,Ads:2,Deploy:3,Risk:1},unlock_card:"策略卡：行业产品包"}],case_popup:{title:"美护客户：稳态增长系统化交付",scenario:"客户有持续投放预算，但缺少可解释的内容迭代体系",deliverables:["内容资产仪表盘（渠道/素材/卖点/数据联动）","季度迭代SOP（每周实验主题+指标目标+复盘结论）","行业模板库（敏感肌/修护/抗老三类卖点结构）","留量资产包（私域脚本+搜索占位词清单）"],workflow:["定指标：稳态目标与核心转化事件","建看板：素材与数据一一映射","周迭代：主题实验→复盘结论","资产化：模板库+私域脚本沉淀"]},insight_fragment:"客户要的不是爆点，而是可解释的稳态增长。"},{id:"model-penetration",date:"2026-02-26",title:"模型能力不再稀缺：真正竞争变成应用渗透",subtitle:"你会用AI不值钱，你能‘用出效果’才值钱",news_summary:"媒体以数据视角讨论国内大模型的调用与应用渗透趋势，意味着AI正在成为基础设施，企业更关注落地效果与业务链路。",news_bullets:["模型能力趋同，差异转向场景与链路","企业侧更在意：可控、可交付、可复盘","平台生态（内容/搜索/电商）成为关键战场"],quiz:{question:"当模型能力趋同时，竞争重点转向什么？",options:["硬件参数","场景链路与可交付效果","社交媒体话题量"],answerIndex:1,hint:"新闻强调‘场景与链路’才是关键"},biz_insights:["焕泽的差异化：平台语义+商销闭环，而非‘某个模型’","把非结构化内容变成结构化策略输入：搜研→词库→内容模板→分发","把交付变标准件：场景模块可配置、可复制"],strategies:[{label:"A 强GEO",description:"优先占位平台搜索答案与AI总结引用",cost:{Team:3,Budget:2,Compute:1},impact:{Growth:2,GEO:4,Ads:0,Deploy:1,Risk:1},unlock_card:"策略卡：GEO占位矩阵"},{label:"B 强投流",description:"以素材与投放实验驱动转化，快速拉起规模",cost:{Team:3,Budget:3,Compute:2},impact:{Growth:3,GEO:0,Ads:4,Deploy:1,Risk:2},unlock_card:"策略卡：投流实验加速"},{label:"C 强交付",description:"以行业场景模块化交付，提升可复制性",cost:{Team:4,Budget:2,Compute:2},impact:{Growth:2,GEO:1,Ads:1,Deploy:4,Risk:1},unlock_card:"策略卡：场景模块交付"}],case_popup:{title:"电商客户：内容到转化的应用渗透",scenario:"客户模型选型已完成，但缺少业务链路与可复盘效果",deliverables:["场景任务链（搜研→内容→分发→转化）","关键词与卖点词库（搜索/评论/竞品拆解）","可配置模板库（标题/首屏/卖点结构）","复盘结论库（命中率/转化因素/下一轮动作）"],workflow:["拆场景：明确转化链路","建词库：需求与痛点结构化","模板化：内容生产与分发","复盘迭代：结论库沉淀"]},insight_fragment:"模型不稀缺，链路与效果才稀缺。"},{id:"open-source-local",date:"2026-02-26",title:"开源与算力适配：把‘模型热’变成‘本地交付’",subtitle:"别卖接入，卖‘客户资产接得进来’",news_summary:"围绕开源模型与算力适配的讨论持续，推动更多企业考虑本地部署、成本可控与数据资产安全。",news_bullets:["本地部署/私有化需求上升","成本与稳定性变重要：算力、延迟、可维护","行业方案更吃香：知识库/素材库接入是壁垒"],quiz:{question:"这波讨论让企业更看重什么样的交付？",options:["纯云端接入","本地部署与资产可控","只提供API文档"],answerIndex:1,hint:"关键词是‘本地/私有化/可控’"},biz_insights:["openclaw + 本地 mac mini：给酒店做‘素材库+房型库+节日timeline+扫码分发’一体交付","强调‘软硬一体’：客户拿到就能跑，减少IT协调成本","把内容生产与分发闭环：生成不仅是文案，还要带可追踪转化链路"],strategies:[{label:"A 云端通用",description:"直接用云端通用RAG接客户资料",cost:{Team:2,Budget:2,Compute:2},impact:{Growth:1,GEO:0,Ads:1,Deploy:1,Risk:2},unlock_card:"策略卡：云端RAG"},{label:"B 本地一体",description:"mac mini 本地知识库 + openclaw 工作流 + 简易后台",cost:{Team:4,Budget:3,Compute:1},impact:{Growth:2,GEO:1,Ads:0,Deploy:4,Risk:1},unlock_card:"策略卡：本地一体交付"},{label:"C 行业套件",description:"把酒店方案做成可复制的‘行业套件’卖给更多酒旅客户",cost:{Team:4,Budget:4,Compute:2},impact:{Growth:3,GEO:1,Ads:1,Deploy:3,Risk:2},unlock_card:"策略卡：行业套件"}],case_popup:{title:"酒店本地化：软硬一体可控交付",scenario:"酒店不愿上云，要求低延迟与数据可控",deliverables:["本地 mac mini 软硬一体部署包（含开源模型与运行脚本）","本地素材库/房型库接入（字段化结构+权限）","节日timeline内容生成器（本地生成标题/正文/封面文案）","扫码分发与转化追踪（本地落地页+表单）"],workflow:["设备交付：本地环境预装与验收","资产接入：素材/房型字段化","本地生成：按节奏批量产内容","分发追踪：扫码→留资→复盘"]},insight_fragment:"本地化交付是高客单的门槛。"},{id:"ai-hardware",date:"2026-02-27",title:"AI硬件化：入口从App走向‘随身端侧’",subtitle:"内容营销会更像‘场景导购’，而不是‘单向广告’",news_summary:"报道提到千问布局AI眼镜等硬件形态，意味着AI能力更可能嵌入线下与随身场景，端侧入口强化。",news_bullets:["端侧入口增加：更即时、更场景化","线下体验可被内容化：可拍、可讲、可转化","行业顾问型内容机会：导购/攻略/体验说明"],quiz:{question:"端侧入口强化意味着内容营销更像什么？",options:["单向广告","场景导购","价格战"],answerIndex:1,hint:"副标题提示‘场景导购’"},biz_insights:["酒旅/到店客户：把线下体验拆成可拍脚本与可搜场景词","扫码与导购融合：线下触点→内容→留资/预订","结合GEO：让‘体验关键词’进入AI总结引用"],strategies:[{label:"A 做线下展示",description:"只做门店视频与海报展示",cost:{Team:2,Budget:2,Compute:1},impact:{Growth:1,GEO:0,Ads:1,Deploy:1,Risk:1},unlock_card:"策略卡：线下展示"},{label:"B 做导购链",description:"设计端侧导购链路：看→问→扫→留资",cost:{Team:3,Budget:2,Compute:2},impact:{Growth:2,GEO:1,Ads:2,Deploy:3,Risk:1},unlock_card:"策略卡：导购链路"},{label:"C 做体验占位",description:"打造‘体验关键词’与内容矩阵，抢AI总结引用",cost:{Team:3,Budget:3,Compute:2},impact:{Growth:2,GEO:4,Ads:1,Deploy:2,Risk:1},unlock_card:"策略卡：体验占位"}],case_popup:{title:"酒旅客户：端侧入口导购方案",scenario:"酒店希望把线下体验转成可传播内容与可追踪转化",deliverables:["体验脚本包（前台/房型/餐饮/周边四类）","导购二维码矩阵（房型/套餐/到店路线）","体验关键词库（可搜场景词+高频问答）","线下触点转化表（扫码→留资→预订）"],workflow:["拆体验：现场流程拆脚本","建词库：场景关键词与问答","设触点：二维码与导购路径","复盘：转化链路与内容优化"]},insight_fragment:"端侧入口让内容回到‘导购’本质。"},{id:"embodied-ai",date:"2026-02-27",title:"具身智能破圈：品牌叙事进入‘体验时代’",subtitle:"未来的爆点可能是‘AI服务过程’，不是产品参数",news_summary:"权威媒体集中讨论具身智能与人形机器人热度，强调从技术到应用的加速。对品牌而言，可内容化的将是‘智能体验过程’。",news_bullets:["从屏幕AI走向物理世界服务","体验过程可视化：更适合短视频传播","新叙事模板出现：智慧服务、智能陪伴、自动化流程"],quiz:{question:"这条新闻提示品牌更该内容化什么？",options:["产品参数","服务过程与体验","公司历史"],answerIndex:1,hint:"副标题强调‘服务过程’"},biz_insights:["帮客户把‘服务流程’拍成可复制脚本：入住/导览/护理/售后","结合Seedance：把流程脚本规模化生成成素材矩阵","结合GEO：把流程场景词占位，抢AI总结引用"],strategies:[{label:"A 做故事",description:"拍一条品牌故事短片",cost:{Team:2,Budget:2,Compute:1},impact:{Growth:1,GEO:0,Ads:1,Deploy:1,Risk:1},unlock_card:"策略卡：品牌故事"},{label:"B 做流程",description:"拆服务流程，做可复制脚本矩阵",cost:{Team:3,Budget:2,Compute:2},impact:{Growth:2,GEO:2,Ads:2,Deploy:3,Risk:1},unlock_card:"策略卡：流程脚本矩阵"},{label:"C 做占位",description:"用流程场景词占位AI总结引用",cost:{Team:3,Budget:3,Compute:2},impact:{Growth:2,GEO:4,Ads:1,Deploy:2,Risk:1},unlock_card:"策略卡：流程占位"}],case_popup:{title:"到店服务：体验流程内容化",scenario:"客户希望把服务过程转化为可传播的内容资产",deliverables:["服务流程脚本（接待/体验/问题处理/售后）","流程镜头库（关键动作与转场）","场景关键词占位清单（体验词+痛点词）","素材复盘表（流程段落→数据→优化动作）"],workflow:["拆流程：分步骤与关键动作","写脚本：镜头+台词+节奏","批量产：生成与剪辑模板化","复盘：流程段落迭代"]},insight_fragment:"可被传播的，是服务过程而不是参数。"},{id:"xhs-geo",date:"机制卡",title:"小红书GEO：先抢20个引用席位，再谈爆款",subtitle:"入口差异 + 触发规律 + 评论语料，是胜负手",news_summary:"小红书GEO的本质是：AI总结回答引用有限席位（可视为‘搜索答案榜’）。不同入口触发门槛不同：点点更易触发且有上下文联想；问一问引用展示位存在硬上限；直搜产品词触发率低，但叠加痛点疑问/对比抉择可撕口子。",news_bullets:["三入口触发差异：点点更容易触发，问一问中等，直搜门槛高","引用席位是硬约束：要围绕‘被引用’优化内容结构与语料","直搜撕口子：产品词+痛点疑问/对比抉择更容易触发AI总结"],quiz:{question:"GEO攻坚的第一目标更像什么？",options:["发更多笔记","抢有限的引用席位（答案榜）","只做高颜值封面"],answerIndex:1,hint:"注意‘引用席位有限’与‘答案榜’"},biz_insights:["丝塔芙：建立‘问题词库→20席位攻坚笔记→评论区语料埋点→被引用率复盘’闭环","结构化写法：经验口吻+步骤清单+适用人群+对比结论，让AI更好抽取","把‘评论高赞’当第二正文：提前埋用户疑问与关键短语"],strategies:[{label:"A 做爆款",description:"先冲一篇爆文",cost:{Team:2,Budget:2,Compute:1},impact:{Growth:2,GEO:0,Ads:2,Deploy:0,Risk:2},unlock_card:"策略卡：爆款冲刺"},{label:"B 做席位攻坚",description:"做20席位入选笔记矩阵（问题词库驱动）",cost:{Team:3,Budget:2,Compute:2},impact:{Growth:2,GEO:4,Ads:1,Deploy:2,Risk:1},unlock_card:"策略卡：席位攻坚"},{label:"C 做语料系统",description:"评论区语料工程 + 引用率复盘",cost:{Team:4,Budget:2,Compute:2},impact:{Growth:2,GEO:3,Ads:0,Deploy:3,Risk:1},unlock_card:"策略卡：语料系统"}],case_popup:{title:"丝塔芙GEO：20席位攻坚作战包",scenario:"目标：提高AI总结引用率与品牌权威感",deliverables:["问题词库（痛点疑问/对比抉择/使用步骤/人群适配）≥80","攻坚笔记矩阵（每词2-3篇不同经验视角）≥60","评论语料脚本（高赞问答模板+关键短语埋点）","引用率复盘表（入口/关键词/引用位置/被抽取句）"],workflow:["建词库：按入口触发逻辑分类","写矩阵：经验口吻+结构化步骤","埋语料：评论区高赞问答脚本","复盘迭代：按被引用率改结构与短语"]},insight_fragment:"先抢答案榜席位，再谈爆款。"}],N="本周周会金句",B=["看起来稳，但别忘了留后手。","这是条快路，成本也更真。","你在赌规模，下注要有节奏。","这步像在铺路，回报会慢一点。","好点子，但得有复盘闭环才算数。","漂亮，但能否复制才是关键。"],$={Growth:["本周内产出1份《行业场景任务链蓝图》PPT（含3条客户路径）","搭建1个‘内容到转化’最小流程Demo（含数据回流字段）","完成1次客户访谈纪要与机会清单（>=8条）"],GEO:["整理1份《小红书问题词库》CSV（>=80词，标注入口类型）","输出1套《GEO结构化写法模板》文档（含示例3篇）","制作1个引用率复盘表Excel（含字段与示例数据）"],Ads:["建立1个投流素材ID管理表（含脚本/镜头/卖点字段）","产出1套‘前三秒钩子’脚本模板（>=10条）","完成1轮投放AB实验复盘（含CTR/ROI结论）"],Deploy:["输出1份行业交付清单（含交付物/周期/验收口径）","搭建1个可配置内容模板库（>=20模板）","制作1张交付流程泳道图（含职责分工）"]},g={INTRO:"INTRO",NEWS:"NEWS",QUIZ:"QUIZ",BIZ:"BIZ",RESULT:"RESULT"},O=["Growth","GEO","Ads","Deploy","Risk"],D=["Growth","GEO","Ads","Deploy"],S={Growth:"增长势能",GEO:"GEO占位力",Ads:"投流力",Deploy:"交付力",Risk:"风险值"},q={Team:"人力",Budget:"预算",Compute:"算力"},L={"GEO+Ads":"GEO占位派","GEO+Growth":"增长叙事派","GEO+Deploy":"场景交付派","Ads+Growth":"投流素材工厂派","Ads+Deploy":"投流交付派","Growth+Deploy":"增长交付派"};function M(s){const i={cards:x,index:0,stage:g.INTRO,flipped:!1,resources:{Team:10,Budget:10,Compute:10},metrics:{Growth:0,GEO:0,Ads:0,Deploy:0,Risk:0},strategyCards:[],insights:[]},o=document.createElement("div");o.className="app",s.appendChild(o);const c=Q();o.appendChild(c.el);const n=U();o.appendChild(n.el);function e(){o.querySelectorAll(".screen").forEach(a=>a.remove());const t=document.createElement("div");if(t.className="screen",i.stage===g.RESULT)t.appendChild(I(i,n));else{if(i.stage===g.INTRO){t.appendChild(T()),o.insertBefore(t,c.el);return}t.appendChild(_(i)),t.appendChild(k(i))}o.insertBefore(t,c.el)}function d(){if(i.index+1>=i.cards.length){i.stage=g.RESULT,i.flipped=!1,e();return}i.index+=1,i.stage=g.NEWS,i.flipped=!1,e()}function m(t){const a=R(t.cost,i.resources);if(a.length){n.show(`缺少${a.join(" / ")}资源`);return}Object.keys(t.cost).forEach(h=>{i.resources[h]-=t.cost[h]}),Object.keys(t.impact).forEach(h=>{i.metrics[h]+=t.impact[h]}),i.strategyCards.push(t.unlock_card);const p=B[Math.floor(Math.random()*B.length)];n.show(p),d()}function b(){i.flipped=!0,e()}function f(t){i.stage=t,e()}function E(t){const a=i.cards[i.index];t===a.quiz.answerIndex?(n.show("答对了，获得洞察碎片"),a.insight_fragment&&i.insights.push(a.insight_fragment),i.stage=g.BIZ,e()):n.show(`答错了：${a.quiz.hint}`)}function A(){const t=i.cards[i.index];c.open(t.case_popup)}e();function _(t){const a=document.createElement("div");a.className="header";const p=document.createElement("div");p.className="progress";const h=(t.index+1)/t.cards.length*100;p.innerHTML=`
      <div class="progress-meta">第 ${t.index+1}/${t.cards.length} 张</div>
      <div class="progress-bar"><span style="width:${h}%"></span></div>
    `;const u=document.createElement("div");u.className="resources",u.innerHTML=["Team","Budget","Compute"].map(r=>`<div class="resource"><span>${q[r]}</span><strong>${t.resources[r]}</strong></div>`).join("");const l=document.createElement("div");return l.className="metrics",l.innerHTML=O.map(r=>{const v=t.metrics[r];return`<div class="metric"><span>${S[r]}</span><strong>${v}</strong></div>`}).join(""),a.appendChild(p),a.appendChild(u),a.appendChild(l),a}function k(t,a,p){const h=document.createElement("div");h.className="board";const u=t.cards[t.index],l=document.createElement("div");l.className=`card-wrap ${t.flipped?"flipped":""}`;const r=document.createElement("div");r.className="card-inner";const v=document.createElement("div");v.className="card-face card-front",v.innerHTML=`
      <div class="card-date">${u.date}</div>
      <h2>${u.title}</h2>
      <p class="subtitle">${u.subtitle}</p>
      <button class="btn primary" id="flipBtn">翻牌进入</button>
    `;const G=document.createElement("div");return G.className="card-face card-back",G.appendChild(w(t,u)),r.appendChild(v),r.appendChild(G),l.appendChild(r),h.appendChild(l),setTimeout(()=>{const C=document.getElementById("flipBtn");C&&(C.onclick=b)},0),h}function T(){const t=document.createElement("div");return t.className="intro",t.innerHTML=`
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
    `,setTimeout(()=>{const a=t.querySelector("#startGame");a&&(a.onclick=()=>f(g.NEWS))},0),t}function w(t,a,p,h){const u=document.createElement("div");return u.className="card-content",t.stage===g.NEWS&&(u.innerHTML=`
        <div class="stage-title">① 新闻速览</div>
        <p class="summary">${a.news_summary}</p>
        <ul class="bullets">
          ${a.news_bullets.map(l=>`<li>${l}</li>`).join("")}
        </ul>
        <div class="actions">
          <button class="btn primary" id="toQuiz">进入理解挑战</button>
        </div>
      `,setTimeout(()=>{const l=document.getElementById("toQuiz");l&&(l.onclick=()=>f(g.QUIZ))},0)),t.stage===g.QUIZ&&(u.innerHTML=`
        <div class="stage-title">② 理解挑战</div>
        <div class="quiz-question">${a.quiz.question}</div>
        <div class="quiz-options">
          ${a.quiz.options.map((l,r)=>`<button class="btn option" data-idx="${r}">${String.fromCharCode(65+r)}. ${l}</button>`).join("")}
        </div>
        <div class="hint">答错可重试</div>
      `,setTimeout(()=>{u.querySelectorAll(".option").forEach(l=>{l.onclick=()=>E(Number(l.dataset.idx))})},0)),t.stage===g.BIZ&&(u.innerHTML=`
        <div class="stage-title">③ 业务落地</div>
        <ul class="bullets">
          ${a.biz_insights.map(l=>`<li>${l}</li>`).join("")}
        </ul>
        <div class="case-block">
          <button class="btn ghost" id="caseBtn">现实案例</button>
        </div>
        <div class="strategy-grid">
          ${a.strategies.map((l,r)=>z(l,t.resources,r)).join("")}
        </div>
      `,setTimeout(()=>{const l=document.getElementById("caseBtn");l&&(l.onclick=A),u.querySelectorAll(".strategy-btn").forEach(r=>{r.onclick=()=>{const v=Number(r.dataset.idx);m(a.strategies[v])}})},0)),u}function I(t,a){const p=document.createElement("div");p.className="result";const{title:h,topMetrics:u}=j(t.metrics),l=H(u);return p.innerHTML=`
      <div class="result-header">
        <h1>你的策略流派：${h}</h1>
        <p class="result-sub">${N}：${t.insights.join(" / ")||"（尚未收集）"}</p>
      </div>
      <div class="result-grid">
        <div class="panel">
          <div class="panel-title">指标画像</div>
          ${P(t.metrics)}
        </div>
        <div class="panel">
          <div class="panel-title">策略卡列表</div>
          <details open>
            <summary>查看本局策略卡（${t.strategyCards.length}）</summary>
            <ul class="list">
              ${t.strategyCards.map(r=>`<li>${r}</li>`).join("")}
            </ul>
          </details>
        </div>
        <div class="panel">
          <div class="panel-title">下周就能做</div>
          <ul class="list">
            ${l.map(r=>`<li>${r}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="poster-area">
        <div class="panel">
          <div class="panel-title">海报导出</div>
          <div class="poster-actions">
            <button class="btn primary" id="makePoster">生成分享海报</button>
            <a class="btn ghost" id="downloadPoster" href="#" download="ai-hotspot-poster.png">下载PNG</a>
          </div>
          <canvas id="posterCanvas" width="960" height="540"></canvas>
        </div>
      </div>
      <div class="restart">
        <button class="btn ghost" id="restartBtn">再来一局</button>
      </div>
    `,setTimeout(()=>{const r=p.querySelector("#makePoster"),v=p.querySelector("#downloadPoster"),G=p.querySelector("#posterCanvas"),C=p.querySelector("#restartBtn");r&&(r.onclick=()=>{W(G,{title:"AI热点落地局：从新闻到生意",badge:h,metrics:t.metrics,actions:l}),a.show("海报已生成，可右键保存或下载"),v.href=G.toDataURL("image/png")}),C&&(C.onclick=()=>window.location.reload())},0),p}}function z(s,i,o){const c=R(s.cost,i),n=c.length?"disabled":"",e=`Team ${s.cost.Team} / Budget ${s.cost.Budget} / Compute ${s.cost.Compute}`,d=`Growth ${y(s.impact.Growth)} | GEO ${y(s.impact.GEO)} | Ads ${y(s.impact.Ads)} | Deploy ${y(s.impact.Deploy)} | Risk ${y(s.impact.Risk)}`;return`
    <div class="strategy ${n}">
      <div class="strategy-title">${s.label}</div>
      <div class="strategy-desc">${s.description}</div>
      <div class="strategy-meta">成本：${e}</div>
      <div class="strategy-meta">影响：${d}</div>
      <button class="btn primary strategy-btn ${n}" data-idx="${o}">
        选择策略
      </button>
      ${c.length?`<div class="missing">缺少${c.join(" / ")}资源</div>`:""}
    </div>
  `}function R(s,i){const o=[];return Object.keys(s).forEach(c=>{i[c]<s[c]&&o.push(c)}),o}function y(s){return s>0?`+${s}`:s<0?`${s}`:"0"}function P(s){return`
    <div class="bars">
      ${O.map(i=>{const o=s[i],c=Math.min(100,Math.max(0,(o+10)*5));return`
          <div class="bar">
            <span>${S[i]}</span>
            <div class="bar-track"><i style="width:${c}%"></i></div>
            <strong>${o}</strong>
          </div>
        `}).join("")}
    </div>
  `}function j(s){const i=D.map(e=>({key:e,val:s[e]})).sort((e,d)=>d.val-e.val),o=[i[0].key,i[1].key],c=[o[0],o[1]].sort().join("+");return{title:L[c]||"综合策略派",topMetrics:o}}function H(s){const i=$[s[0]]||[],o=$[s[1]]||[];return[i[0],i[1],o[0]].filter(Boolean)}function U(){const s=document.createElement("div");s.className="toast hidden";let i=null;function o(c){s.textContent=c,s.classList.remove("hidden"),clearTimeout(i),i=setTimeout(()=>s.classList.add("hidden"),2200)}return{el:s,show:o}}function Q(){const s=document.createElement("div");s.className="modal hidden",s.innerHTML=`
    <div class="modal-backdrop"></div>
    <div class="modal-card">
      <button class="modal-close">关闭</button>
      <div class="modal-body"></div>
    </div>
  `;const i=s.querySelector(".modal-body"),o=s.querySelector(".modal-close"),c=s.querySelector(".modal-backdrop");function n(d){i.innerHTML=`
      <h3>${d.title}</h3>
      <p class="modal-scenario">${d.scenario}</p>
      <div class="modal-section">
        <strong>交付物</strong>
        <ul>${d.deliverables.map(m=>`<li>${m}</li>`).join("")}</ul>
      </div>
      <div class="modal-section">
        <strong>流程</strong>
        <ul>${d.workflow.map(m=>`<li>${m}</li>`).join("")}</ul>
      </div>
    `,s.classList.remove("hidden")}function e(){s.classList.add("hidden")}return o.onclick=e,c.onclick=e,{el:s,open:n,close:e}}function W(s,{title:i,badge:o,metrics:c,actions:n}){const e=s.getContext("2d"),d=s.width,m=s.height,b=e.createLinearGradient(0,0,d,m);b.addColorStop(0,"#f6f3ea"),b.addColorStop(1,"#e3efe6"),e.fillStyle=b,e.fillRect(0,0,d,m),e.fillStyle="#1b1b1b",e.font='28px "Noto Sans SC", sans-serif',e.fillText(i,40,60),e.fillStyle="#005b4f",e.font='bold 36px "Noto Sans SC", sans-serif',e.fillText(o,40,110);const f=40,E=150,A=360,_=16,k=36;O.forEach((w,I)=>{const t=E+I*k,a=c[w],p=Math.min(1,Math.max(0,(a+10)/20));e.fillStyle="#cbded5",e.fillRect(f,t,A,_),e.fillStyle=w==="Risk"?"#d06b5e":"#3c7d63",e.fillRect(f,t,A*p,_),e.fillStyle="#1b1b1b",e.font='16px "Noto Sans SC", sans-serif',e.fillText(`${S[w]} ${a}`,f+A+16,t+13)}),e.fillStyle="#1b1b1b",e.font='18px "Noto Sans SC", sans-serif',e.fillText("下周行动建议",460,170),e.font='16px "Noto Sans SC", sans-serif';let T=210;n.forEach(w=>{T=Z(e,`- ${w}`,460,T,440,22),T+=6}),e.fillStyle="#8f9b94",e.font='12px "Noto Sans SC", sans-serif',e.fillText("AI热点落地局 · 2026/2/20–2/27",40,m-30)}function Z(s,i,o,c,n,e){const d=i.split("");let m="",b=c;for(let f=0;f<d.length;f+=1){const E=m+d[f];s.measureText(E).width>n&&f>0?(s.fillText(m,o,b),m=d[f],b+=e):m=E}return s.fillText(m,o,b),b}const Y=document.querySelector("#app");M(Y);
