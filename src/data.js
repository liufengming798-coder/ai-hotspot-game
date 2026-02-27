export const HOTSPOT_CARDS = [
  {
    id: "seedance-2",
    date: "2026-02-27",
    title: "Seedance 2.0：视频生成从炫技走向量产",
    subtitle: "不是做一条爆款，而是做一座‘投流素材工厂’",
    news_summary:
      "围绕 Seedance 2.0 的讨论从“逼真度”转向“可量产性”：更稳定的角色/场景一致性与镜头运动控制，让营销团队开始把视频生成当作可规模化的生产能力而非单次展示。由此引发的问题不再是“能不能做出好看视频”，而是“能否持续低成本、高效率地生成可投放素材并形成迭代机制”。这意味着内容生产链路将被重新拆分为脚本模板化、镜头组件化和投放数据回流三段。",
    news_bullets: [
      "视频生成更稳定：人物/场景一致性与镜头运动更可控",
      "营销圈关注点转移：从‘效果惊艳’到‘能否跑量’",
      "内容生产链路可能重构：脚本→生成→剪辑→投放迭代"
    ],
    sources: [
      {
        title: "新浪财经：字节视频模型Seedance 2.0发布（2026-02-27）",
        url: "https://finance.sina.com.cn/tech/roll/2026-02-27/doc-inemppyc5235090.shtml"
      },
      {
        title: "和讯：Seedance 2.0相关报道（2026-02-24）",
        url: "https://www.hexun.com/2026-02-24/217744755.html"
      }
    ],
    quiz: {
      question: "这条新闻里，营销圈关注点从什么转向什么？",
      options: [
        "从‘写长文案’转向‘做直播带货’",
        "从‘单条作品惊艳’转向‘规模化跑量迭代’",
        "从‘买达人’转向‘做线下活动’"
      ],
      answerIndex: 1,
      hint: "新闻速览里提到‘不再是单条作品质量，而是规模化生产’"
    },
    biz_insights: [
      "把视频生成做成‘投流素材工厂’：交付从1条视频升级为‘脚本模板库+素材批量产线+投放AB看板’",
      "用指标驱动创意：按封面帧/前三秒钩子/卖点结构做组合实验，沉淀可复用的高转化结构",
      "建立‘素材-投放-复盘’闭环：每轮迭代产出可解释结论（哪类镜头/节奏/口播提升CTR/ROI）"
    ],
    strategies: [
      {
        label: "A 跟风炫技",
        description: "先生成10条‘电影感’样片去展示能力",
        cost: { Team: 2, Budget: 1, Compute: 3 },
        impact: { Growth: 1, GEO: 0, Ads: 1, Deploy: 0, Risk: 1 },
        unlock_card: "策略卡：样片展厅"
      },
      {
        label: "B 素材工厂",
        description: "搭建‘50-200条/周’投流素材流水线（脚本库+镜头库+批量生成+剪辑模板）",
        cost: { Team: 4, Budget: 3, Compute: 5 },
        impact: { Growth: 2, GEO: 0, Ads: 4, Deploy: 2, Risk: 2 },
        unlock_card: "策略卡：投流素材工厂"
      },
      {
        label: "C 客户闭环",
        description: "把生成视频接入投放与复盘系统，输出‘可解释的AB结论’作为续费抓手",
        cost: { Team: 3, Budget: 2, Compute: 4 },
        impact: { Growth: 3, GEO: 0, Ads: 3, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：AB复盘引擎"
      }
    ],
    case_popup: {
      title: "闭环电商：7天起跑版投流素材工厂",
      scenario: "服务电商客户（护肤/日化/食品），目标：提升CTR与ROI",
      deliverables: [
        "脚本模板库（卖点结构×人设口吻×场景）≥30条",
        "镜头与转场库（开箱/对比/测评/使用场景）≥40组",
        "生成+剪辑批量流程（统一字幕/封面/口播节奏）",
        "投放AB复盘表（素材ID→数据→结论→下一轮改动）"
      ],
      workflow: [
        "拆品：卖点与反对点清单",
        "设结构：前三秒钩子与转化段落",
        "批量产：生成→剪辑模板→出片",
        "投放复盘：按CTR/CPM/ROI迭代脚本与镜头"
      ]
    },
    insight_fragment: "规模化视频生产才是下一个投流护城河。"
  },
  {
    id: "ai-entry-war",
    date: "2026-02-24",
    title: "春节后复盘：AI入口大战进入长期战",
    subtitle: "入口红利只是开始，关键是把AI变成‘任务链’",
    news_summary:
      "春节周期的AI产品竞争被复盘为“入口争夺战”，但讨论点正在从短期拉新转向长期留存。媒体与行业评论认为，红包、投放等拉新方式趋同后，真正拉开差距的将是“可执行的任务链”——把AI从聊天工具升级为能完成具体业务流程的系统，才有机会稳定留住用户与场景。对企业侧来说，入口只是触点，决定复购的是能否完成真实的业务任务。",
    news_bullets: [
      "拉新手段趋同：投放/红包/联动",
      "留存取决于任务完成：从问答到流程化执行",
      "场景深度更重要：把AI嵌到具体业务里"
    ],
    sources: [
      {
        title: "人民网：人工智能应用场景与任务链发展（2026-02-22）",
        url: "https://politics.people.com.cn/n1/2026/0222/c1001-40423583.html"
      },
      {
        title: "东方财富：AI应用竞争与入口讨论（2026-02-23）",
        url: "https://finance.eastmoney.com/a/202602233327605589.html"
      }
    ],
    quiz: {
      question: "新闻复盘认为长期留存更依赖什么？",
      options: ["更大的红包", "更漂亮的UI", "从聊天到可执行的任务链"],
      answerIndex: 2,
      hint: "注意‘从聊天升级为任务链’"
    },
    biz_insights: [
      "焕泽应卖‘场景任务链’，不是卖‘接入模型’：把策略-内容-分发-转化串起来",
      "用行业交付包沉淀壁垒：酒店/酒旅/美护/电商各一套标准流程+可配置模块",
      "把入口红利转成资产：沉淀客户的素材库、词库、结构模板与复盘结论"
    ],
    strategies: [
      {
        label: "A 追入口",
        description: "把所有热点AI入口都接一遍",
        cost: { Team: 3, Budget: 2, Compute: 2 },
        impact: { Growth: 1, GEO: 1, Ads: 1, Deploy: 0, Risk: 2 },
        unlock_card: "策略卡：全入口接入"
      },
      {
        label: "B 做任务链",
        description: "围绕客户业务做一条‘从内容到转化’的自动化任务链",
        cost: { Team: 4, Budget: 3, Compute: 3 },
        impact: { Growth: 3, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：任务链交付"
      },
      {
        label: "C 做资产化",
        description: "把每次交付沉淀成‘可复用资产包’（素材库/词库/结构库）",
        cost: { Team: 3, Budget: 2, Compute: 2 },
        impact: { Growth: 2, GEO: 2, Ads: 1, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：资产化SOP"
      }
    ],
    case_popup: {
      title: "酒店客户：节日热点→本地素材库→扫码分发任务链",
      scenario: "酒店有本地素材/房型资料，不想上云，追求可控与快速产出",
      deliverables: [
        "本地素材库与房型资料库（结构化字段：房型/卖点/价格/政策/库存）",
        "节日&活动timeline内容生成器（按周自动出：主题/标题/正文/封面文案）",
        "扫码分发落地页（不同房型/套餐二维码）+ 留资表单",
        "转化复盘表（扫码→到店/预定→内容贡献度）"
      ],
      workflow: [
        "整理资产：素材与房型字段化",
        "设规则：节日热点与活动节奏",
        "生成内容：图文/短视频脚本批量产",
        "扫码分发：按房型/渠道追踪转化"
      ]
    },
    insight_fragment: "入口只是钥匙，任务链才是锁芯。"
  },
  {
    id: "cny-mau",
    date: "2026-02-26",
    title: "春节AI营销战：规模化指标把客户预期拉高",
    subtitle: "客户不再要‘爆一次’，而是要‘稳态增长系统’",
    news_summary:
      "春节档的AI应用投放与用户增长数据引发行业讨论，机构观点强调：AI产品已从“尝鲜型玩法”转向“基础设施心智”，客户对效果的预期被规模化指标拉高。对于企业客户而言，更在意的是可解释的转化链路与稳定交付能力，而不是一次性的流量爆发。长期来看，营销团队需要用“持续可复盘的增长系统”替代“短期爆点投放”。",
    news_bullets: [
      "规模化投放与增长成为常态",
      "用户心智教育加速：AI被当作基础设施",
      "企业侧更看重可解释的效果与稳定交付"
    ],
    sources: [
      {
        title: "新浪财经：春节AI营销战与MAU讨论（2026-02-26）",
        url: "https://finance.sina.com.cn/tech/roll/2026-02-26/doc-inemtmyp1794910.shtml"
      }
    ],
    quiz: {
      question: "这条新闻对企业客户预期的核心变化是什么？",
      options: [
        "更爱看长报告",
        "更看重一次性爆发",
        "更看重稳态系统化增长与可解释效果"
      ],
      answerIndex: 2,
      hint: "注意‘规模化/稳态/可解释’"
    },
    biz_insights: [
      "把‘方法论’产品化：做内容资产仪表盘+迭代SOP",
      "复盘结论要可迁移：形成行业模板（美护/酒旅/电商）",
      "让流量变留量：线索、私域、搜索占位资产要可累计"
    ],
    strategies: [
      {
        label: "A 做报告",
        description: "只输出周报与复盘PPT",
        cost: { Team: 2, Budget: 1, Compute: 0 },
        impact: { Growth: 1, GEO: 0, Ads: 0, Deploy: 1, Risk: 0 },
        unlock_card: "策略卡：复盘周报"
      },
      {
        label: "B 做看板",
        description: "搭建内容资产看板（数据-结论-下一轮动作）",
        cost: { Team: 3, Budget: 2, Compute: 1 },
        impact: { Growth: 2, GEO: 1, Ads: 1, Deploy: 2, Risk: 1 },
        unlock_card: "策略卡：资产看板"
      },
      {
        label: "C 做系统",
        description: "把看板+SOP+模板库打包成行业交付产品",
        cost: { Team: 4, Budget: 3, Compute: 2 },
        impact: { Growth: 3, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：行业产品包"
      }
    ],
    case_popup: {
      title: "美护客户：稳态增长系统化交付",
      scenario: "客户有持续投放预算，但缺少可解释的内容迭代体系",
      deliverables: [
        "内容资产仪表盘（渠道/素材/卖点/数据联动）",
        "季度迭代SOP（每周实验主题+指标目标+复盘结论）",
        "行业模板库（敏感肌/修护/抗老三类卖点结构）",
        "留量资产包（私域脚本+搜索占位词清单）"
      ],
      workflow: [
        "定指标：稳态目标与核心转化事件",
        "建看板：素材与数据一一映射",
        "周迭代：主题实验→复盘结论",
        "资产化：模板库+私域脚本沉淀"
      ]
    },
    insight_fragment: "客户要的不是爆点，而是可解释的稳态增长。"
  },
  {
    id: "model-penetration",
    date: "2026-02-26",
    title: "模型能力不再稀缺：真正竞争变成应用渗透",
    subtitle: "你会用AI不值钱，你能‘用出效果’才值钱",
    news_summary:
      "多份报告与盘点显示，大模型能力的差异正在收敛，调用量与应用渗透率成为衡量竞争力的重要指标。企业更关心“AI是否真正进入业务链路”，而不是模型参数的细微差别。平台生态（内容/搜索/电商）被视为关键战场：谁能把AI嵌入可交付的业务流程，谁就更可能获得长期价值。",
    news_bullets: [
      "模型能力趋同，差异转向场景与链路",
      "企业侧更在意：可控、可交付、可复盘",
      "平台生态（内容/搜索/电商）成为关键战场"
    ],
    sources: [
      {
        title: "每日经济新闻：AI模型调用量与渗透讨论（2026-02-24）",
        url: "https://www.nbd.com.cn/articles/2026-02-24/3751000.html"
      },
      {
        title: "新浪财经：大模型应用与渗透率观察（2026-02-25）",
        url: "https://finance.sina.com.cn/tech/roll/2026-02-25/doc-inemagmm4277421.shtml"
      }
    ],
    quiz: {
      question: "当模型能力趋同时，竞争重点转向什么？",
      options: ["硬件参数", "场景链路与可交付效果", "社交媒体话题量"],
      answerIndex: 1,
      hint: "新闻强调‘场景与链路’才是关键"
    },
    biz_insights: [
      "焕泽的差异化：平台语义+商销闭环，而非‘某个模型’",
      "把非结构化内容变成结构化策略输入：搜研→词库→内容模板→分发",
      "把交付变标准件：场景模块可配置、可复制"
    ],
    strategies: [
      {
        label: "A 强GEO",
        description: "优先占位平台搜索答案与AI总结引用",
        cost: { Team: 3, Budget: 2, Compute: 1 },
        impact: { Growth: 2, GEO: 4, Ads: 0, Deploy: 1, Risk: 1 },
        unlock_card: "策略卡：GEO占位矩阵"
      },
      {
        label: "B 强投流",
        description: "以素材与投放实验驱动转化，快速拉起规模",
        cost: { Team: 3, Budget: 3, Compute: 2 },
        impact: { Growth: 3, GEO: 0, Ads: 4, Deploy: 1, Risk: 2 },
        unlock_card: "策略卡：投流实验加速"
      },
      {
        label: "C 强交付",
        description: "以行业场景模块化交付，提升可复制性",
        cost: { Team: 4, Budget: 2, Compute: 2 },
        impact: { Growth: 2, GEO: 1, Ads: 1, Deploy: 4, Risk: 1 },
        unlock_card: "策略卡：场景模块交付"
      }
    ],
    case_popup: {
      title: "电商客户：内容到转化的应用渗透",
      scenario: "客户模型选型已完成，但缺少业务链路与可复盘效果",
      deliverables: [
        "场景任务链（搜研→内容→分发→转化）",
        "关键词与卖点词库（搜索/评论/竞品拆解）",
        "可配置模板库（标题/首屏/卖点结构）",
        "复盘结论库（命中率/转化因素/下一轮动作）"
      ],
      workflow: [
        "拆场景：明确转化链路",
        "建词库：需求与痛点结构化",
        "模板化：内容生产与分发",
        "复盘迭代：结论库沉淀"
      ]
    },
    insight_fragment: "模型不稀缺，链路与效果才稀缺。"
  },
  {
    id: "open-source-local",
    date: "2026-02-26",
    title: "开源与算力适配：把‘模型热’变成‘本地交付’",
    subtitle: "别卖接入，卖‘客户资产接得进来’",
    news_summary:
      "围绕开源模型与算力适配的讨论持续，越来越多企业将关注点转向本地部署与私有化交付。核心诉求不只是“能用模型”，而是“成本可控、数据可控、资产可接入”。行业方案与交付能力成为竞争壁垒：谁能把知识库/素材库接入并形成可维护的流程，谁就更有机会拿下高客单客户。",
    news_bullets: [
      "本地部署/私有化需求上升",
      "成本与稳定性变重要：算力、延迟、可维护",
      "行业方案更吃香：知识库/素材库接入是壁垒"
    ],
    sources: [
      {
        title: "百度智能云：大模型私有化部署与场景分析",
        url: "https://cloud.baidu.com/article/2121351"
      }
    ],
    quiz: {
      question: "这波讨论让企业更看重什么样的交付？",
      options: ["纯云端接入", "本地部署与资产可控", "只提供API文档"],
      answerIndex: 1,
      hint: "关键词是‘本地/私有化/可控’"
    },
    biz_insights: [
      "openclaw + 本地 mac mini：给酒店做‘素材库+房型库+节日timeline+扫码分发’一体交付",
      "强调‘软硬一体’：客户拿到就能跑，减少IT协调成本",
      "把内容生产与分发闭环：生成不仅是文案，还要带可追踪转化链路"
    ],
    strategies: [
      {
        label: "A 云端通用",
        description: "直接用云端通用RAG接客户资料",
        cost: { Team: 2, Budget: 2, Compute: 2 },
        impact: { Growth: 1, GEO: 0, Ads: 1, Deploy: 1, Risk: 2 },
        unlock_card: "策略卡：云端RAG"
      },
      {
        label: "B 本地一体",
        description: "mac mini 本地知识库 + openclaw 工作流 + 简易后台",
        cost: { Team: 4, Budget: 3, Compute: 1 },
        impact: { Growth: 2, GEO: 1, Ads: 0, Deploy: 4, Risk: 1 },
        unlock_card: "策略卡：本地一体交付"
      },
      {
        label: "C 行业套件",
        description: "把酒店方案做成可复制的‘行业套件’卖给更多酒旅客户",
        cost: { Team: 4, Budget: 4, Compute: 2 },
        impact: { Growth: 3, GEO: 1, Ads: 1, Deploy: 3, Risk: 2 },
        unlock_card: "策略卡：行业套件"
      }
    ],
    case_popup: {
      title: "酒店本地化：软硬一体可控交付",
      scenario: "酒店不愿上云，要求低延迟与数据可控",
      deliverables: [
        "本地 mac mini 软硬一体部署包（含开源模型与运行脚本）",
        "本地素材库/房型库接入（字段化结构+权限）",
        "节日timeline内容生成器（本地生成标题/正文/封面文案）",
        "扫码分发与转化追踪（本地落地页+表单）"
      ],
      workflow: [
        "设备交付：本地环境预装与验收",
        "资产接入：素材/房型字段化",
        "本地生成：按节奏批量产内容",
        "分发追踪：扫码→留资→复盘"
      ]
    },
    insight_fragment: "本地化交付是高客单的门槛。"
  },
  {
    id: "ai-hardware",
    date: "2026-02-27",
    title: "AI硬件化：入口从App走向‘随身端侧’",
    subtitle: "内容营销会更像‘场景导购’，而不是‘单向广告’",
    news_summary:
      "千问在AI眼镜等硬件形态上的布局被解读为“端侧入口的加速”：AI能力更可能嵌入线下与随身场景，内容营销也因此从“线上广告”逐步转向“场景导购”。在端侧入口里，用户更关注即时解答、现场体验与可转化的导购路径，内容形式也更强调可拍、可讲、可追踪。",
    news_bullets: [
      "端侧入口增加：更即时、更场景化",
      "线下体验可被内容化：可拍、可讲、可转化",
      "行业顾问型内容机会：导购/攻略/体验说明"
    ],
    sources: [
      {
        title: "新浪财经：阿里布局AI眼镜与硬件入口（2026-02-25）",
        url: "https://finance.sina.com.cn/tech/roll/2026-02-25/doc-inemagmm4368257.shtml"
      }
    ],
    quiz: {
      question: "端侧入口强化意味着内容营销更像什么？",
      options: ["单向广告", "场景导购", "价格战"],
      answerIndex: 1,
      hint: "副标题提示‘场景导购’"
    },
    biz_insights: [
      "酒旅/到店客户：把线下体验拆成可拍脚本与可搜场景词",
      "扫码与导购融合：线下触点→内容→留资/预订",
      "结合GEO：让‘体验关键词’进入AI总结引用"
    ],
    strategies: [
      {
        label: "A 做线下展示",
        description: "只做门店视频与海报展示",
        cost: { Team: 2, Budget: 2, Compute: 1 },
        impact: { Growth: 1, GEO: 0, Ads: 1, Deploy: 1, Risk: 1 },
        unlock_card: "策略卡：线下展示"
      },
      {
        label: "B 做导购链",
        description: "设计端侧导购链路：看→问→扫→留资",
        cost: { Team: 3, Budget: 2, Compute: 2 },
        impact: { Growth: 2, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：导购链路"
      },
      {
        label: "C 做体验占位",
        description: "打造‘体验关键词’与内容矩阵，抢AI总结引用",
        cost: { Team: 3, Budget: 3, Compute: 2 },
        impact: { Growth: 2, GEO: 4, Ads: 1, Deploy: 2, Risk: 1 },
        unlock_card: "策略卡：体验占位"
      }
    ],
    case_popup: {
      title: "酒旅客户：端侧入口导购方案",
      scenario: "酒店希望把线下体验转成可传播内容与可追踪转化",
      deliverables: [
        "体验脚本包（前台/房型/餐饮/周边四类）",
        "导购二维码矩阵（房型/套餐/到店路线）",
        "体验关键词库（可搜场景词+高频问答）",
        "线下触点转化表（扫码→留资→预订）"
      ],
      workflow: [
        "拆体验：现场流程拆脚本",
        "建词库：场景关键词与问答",
        "设触点：二维码与导购路径",
        "复盘：转化链路与内容优化"
      ]
    },
    insight_fragment: "端侧入口让内容回到‘导购’本质。"
  },
  {
    id: "embodied-ai",
    date: "2026-02-27",
    title: "具身智能破圈：品牌叙事进入‘体验时代’",
    subtitle: "未来的爆点可能是‘AI服务过程’，不是产品参数",
    news_summary:
      "权威媒体集中讨论具身智能与人形机器人热度，强调从技术展示走向应用落地的加速。对品牌而言，最容易内容化的部分是“服务过程与体验场景”，而不是技术参数。体验过程可视化更适合短视频传播，也更容易形成可复制的叙事模板，这使“服务流程内容化”成为新的竞争点。",
    news_bullets: [
      "从屏幕AI走向物理世界服务",
      "体验过程可视化：更适合短视频传播",
      "新叙事模板出现：智慧服务、智能陪伴、自动化流程"
    ],
    sources: [
      {
        title: "人民网：具身智能与机器人应用观察（2026-02-22）",
        url: "https://politics.people.com.cn/n1/2026/0222/c1001-40423583.html"
      },
      {
        title: "新浪财经：具身智能热点讨论（2026-02-26）",
        url: "https://finance.sina.com.cn/tech/roll/2026-02-26/doc-inemtmyp1793362.shtml"
      }
    ],
    quiz: {
      question: "这条新闻提示品牌更该内容化什么？",
      options: ["产品参数", "服务过程与体验", "公司历史"],
      answerIndex: 1,
      hint: "副标题强调‘服务过程’"
    },
    biz_insights: [
      "帮客户把‘服务流程’拍成可复制脚本：入住/导览/护理/售后",
      "结合Seedance：把流程脚本规模化生成成素材矩阵",
      "结合GEO：把流程场景词占位，抢AI总结引用"
    ],
    strategies: [
      {
        label: "A 做故事",
        description: "拍一条品牌故事短片",
        cost: { Team: 2, Budget: 2, Compute: 1 },
        impact: { Growth: 1, GEO: 0, Ads: 1, Deploy: 1, Risk: 1 },
        unlock_card: "策略卡：品牌故事"
      },
      {
        label: "B 做流程",
        description: "拆服务流程，做可复制脚本矩阵",
        cost: { Team: 3, Budget: 2, Compute: 2 },
        impact: { Growth: 2, GEO: 2, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：流程脚本矩阵"
      },
      {
        label: "C 做占位",
        description: "用流程场景词占位AI总结引用",
        cost: { Team: 3, Budget: 3, Compute: 2 },
        impact: { Growth: 2, GEO: 4, Ads: 1, Deploy: 2, Risk: 1 },
        unlock_card: "策略卡：流程占位"
      }
    ],
    case_popup: {
      title: "到店服务：体验流程内容化",
      scenario: "客户希望把服务过程转化为可传播的内容资产",
      deliverables: [
        "服务流程脚本（接待/体验/问题处理/售后）",
        "流程镜头库（关键动作与转场）",
        "场景关键词占位清单（体验词+痛点词）",
        "素材复盘表（流程段落→数据→优化动作）"
      ],
      workflow: [
        "拆流程：分步骤与关键动作",
        "写脚本：镜头+台词+节奏",
        "批量产：生成与剪辑模板化",
        "复盘：流程段落迭代"
      ]
    },
    insight_fragment: "可被传播的，是服务过程而不是参数。"
  },
  {
    id: "xhs-geo",
    date: "机制卡",
    title: "小红书GEO：先抢20个引用席位，再谈爆款",
    subtitle: "入口差异 + 触发规律 + 评论语料，是胜负手",
    news_summary:
      "（行业观察口径）小红书GEO被视作“AI总结引用席位争夺”：引用位有限，意味着策略首要目标不是爆款，而是被引用。不同入口触发机制存在差异：点点更易触发上下文联想，问一问展示位受限，直搜产品词触发率低但叠加痛点疑问/对比抉择更容易撕口子。对内容营销来说，结构化写作与评论语料工程正在成为新的“占位能力”。",
    news_bullets: [
      "三入口触发差异：点点更容易触发，问一问中等，直搜门槛高",
      "引用席位是硬约束：要围绕‘被引用’优化内容结构与语料",
      "直搜撕口子：产品词+痛点疑问/对比抉择更容易触发AI总结"
    ],
    sources: [
      {
        title: "行业解读：小红书GEO优化机制",
        url: "https://www.10100.com/article/1005222",
        note: "行业解读"
      }
    ],
    quiz: {
      question: "GEO攻坚的第一目标更像什么？",
      options: ["发更多笔记", "抢有限的引用席位（答案榜）", "只做高颜值封面"],
      answerIndex: 1,
      hint: "注意‘引用席位有限’与‘答案榜’"
    },
    biz_insights: [
      "丝塔芙：建立‘问题词库→20席位攻坚笔记→评论区语料埋点→被引用率复盘’闭环",
      "结构化写法：经验口吻+步骤清单+适用人群+对比结论，让AI更好抽取",
      "把‘评论高赞’当第二正文：提前埋用户疑问与关键短语"
    ],
    strategies: [
      {
        label: "A 做爆款",
        description: "先冲一篇爆文",
        cost: { Team: 2, Budget: 2, Compute: 1 },
        impact: { Growth: 2, GEO: 0, Ads: 2, Deploy: 0, Risk: 2 },
        unlock_card: "策略卡：爆款冲刺"
      },
      {
        label: "B 做席位攻坚",
        description: "做20席位入选笔记矩阵（问题词库驱动）",
        cost: { Team: 3, Budget: 2, Compute: 2 },
        impact: { Growth: 2, GEO: 4, Ads: 1, Deploy: 2, Risk: 1 },
        unlock_card: "策略卡：席位攻坚"
      },
      {
        label: "C 做语料系统",
        description: "评论区语料工程 + 引用率复盘",
        cost: { Team: 4, Budget: 2, Compute: 2 },
        impact: { Growth: 2, GEO: 3, Ads: 0, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：语料系统"
      }
    ],
    case_popup: {
      title: "丝塔芙GEO：20席位攻坚作战包",
      scenario: "目标：提高AI总结引用率与品牌权威感",
      deliverables: [
        "问题词库（痛点疑问/对比抉择/使用步骤/人群适配）≥80",
        "攻坚笔记矩阵（每词2-3篇不同经验视角）≥60",
        "评论语料脚本（高赞问答模板+关键短语埋点）",
        "引用率复盘表（入口/关键词/引用位置/被抽取句）"
      ],
      workflow: [
        "建词库：按入口触发逻辑分类",
        "写矩阵：经验口吻+结构化步骤",
        "埋语料：评论区高赞问答脚本",
        "复盘迭代：按被引用率改结构与短语"
      ]
    },
    insight_fragment: "先抢答案榜席位，再谈爆款。"
  }
];

export const INSIGHT_COMBINE_TITLE = "本周周会金句";

export const STRATEGY_COMMENTARY = [
  "看起来稳，但别忘了留后手。",
  "这是条快路，成本也更真。",
  "你在赌规模，下注要有节奏。",
  "这步像在铺路，回报会慢一点。",
  "好点子，但得有复盘闭环才算数。",
  "漂亮，但能否复制才是关键。"
];
