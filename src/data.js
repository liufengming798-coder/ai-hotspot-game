export const HOTSPOT_CARDS = [
  {
    id: "qwen35-mid",
    date: "2026-02-25",
    title: "阿里开源三款千问3.5中型模型",
    subtitle: "中型模型降本，价格低至0.2元/百万Token",
    news_overview:
      "2月25日，阿里开源Qwen3.5三款中型模型（35B-A3B、122B-A10B、27B），并在阿里云百炼上线Qwen3.5-Flash，输入低至0.2元/百万Token。",
    news_detail:
      "2月25日，阿里开源Qwen3.5系列新增三款中等规模模型：Qwen3.5-35B-A3B、Qwen3.5-122B-A10B、Qwen3.5-27B。多方讨论强调这些模型在多项评测中超过上一代更大模型，并可在消费级显卡部署，显著降低中小团队的模型使用门槛。同时，基于Qwen3.5-35B-A3B的托管模型Qwen3.5-Flash上线阿里云百炼，输入价格低至0.2元/百万Token，进一步压缩推理成本。",
    news_bullets: [
      "开源三款中型模型：35B-A3B、122B-A10B、27B",
      "可在消费级显卡部署，降低门槛",
      "Qwen3.5-Flash输入低至0.2元/百万Token"
    ],
    quiz: {
      question: "这条新闻最核心的变化是什么？",
      options: ["模型全面闭源", "中型模型开源且成本显著下降", "仅发布手机端App"],
      answerIndex: 1,
      hint: "关键词是‘开源’与‘低成本’"
    },
    biz_insights: [
      "把“模型选型”做成交付环节：输出‘成本-性能-场景匹配表’，缩短决策周期",
      "低价模型适合高频内容任务：标题/脚本/素材粗选可规模化",
      "建立“混合模型流”：高价值内容用高配模型，量产内容用中型模型降本"
    ],
    strategies: [
      {
        label: "A 先试模型",
        description: "小规模项目验证模型效果",
        cost: { Team: 2, Budget: 1, Compute: 2 },
        impact: { Growth: 1, GEO: 0, Ads: 1, Deploy: 1, Risk: 1 },
        unlock_card: "策略卡：低成本试点"
      },
      {
        label: "B 批量替代",
        description: "用中型模型替换部分人工产线",
        cost: { Team: 3, Budget: 2, Compute: 3 },
        impact: { Growth: 2, GEO: 0, Ads: 2, Deploy: 2, Risk: 1 },
        unlock_card: "策略卡：中型模型量产"
      },
      {
        label: "C 分层部署",
        description: "多模型分层流程兼顾质量与成本",
        cost: { Team: 4, Budget: 2, Compute: 3 },
        impact: { Growth: 3, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：分层推理链"
      }
    ],
    case_popup: {
      title: "中型模型降本方案：内容产线分层部署",
      scenario: "内容量大、预算有限，需要在成本与质量之间平衡",
      deliverables: [
        "模型选型表（场景/成本/效果对比）",
        "多模型流程图（高价值/量产内容分流）",
        "内容生产SOP（脚本→生成→审核）",
        "成本与效果追踪表（Token/CTR/ROI）"
      ],
      workflow: [
        "评估：场景成本与质量门槛",
        "分层：模型匹配内容类型",
        "量产：模板化批量生成",
        "复盘：成本与效果优化"
      ]
    },
    insight_fragment: "模型降本意味着内容规模化门槛被打穿。"
  },
  {
    id: "bailing-coding-plan",
    date: "2026-02-25",
    title: "阿里云百炼Coding Plan上线",
    subtitle: "四大开源模型一键切换",
    news_overview:
      "2月25日，阿里云Coding Plan订阅服务上线，集成Qwen3.5、GLM-5、MiniMax M2.5、Kimi K2.5四大模型，可在多工具间自由切换。",
    news_detail:
      "2月25日，阿里云百炼推出Coding Plan订阅服务，首批接入四大开源模型：Qwen3.5、GLM-5、MiniMax M2.5、Kimi K2.5。用户订阅后可在Qwen Code、Claude Code、Cline、OpenClaw等工具中自由切换使用，获取更稳定、Token额度更高的模型服务。该方案标志云厂商从“单模型绑定”走向“多模型编排”。",
    news_bullets: [
      "四大开源模型集成在同一平台",
      "可在多工具中自由切换使用",
      "云厂商从单模型绑定转向多模型编排"
    ],
    quiz: {
      question: "Coding Plan 的核心价值是什么？",
      options: ["单一模型绑定", "多模型自由切换", "只提供离线部署"],
      answerIndex: 1,
      hint: "关键词是‘自由切换’"
    },
    biz_insights: [
      "焕泽要卖“多模型策略”，而非单模型：不同内容链路匹配不同模型",
      "为客户搭建“模型路由层”：按成本/速度/质量自动调度",
      "把“模型切换”写进交付包：避免客户被某家模型锁死"
    ],
    strategies: [
      {
        label: "A 单模型深挖",
        description: "选一个模型深度优化",
        cost: { Team: 2, Budget: 1, Compute: 2 },
        impact: { Growth: 1, GEO: 0, Ads: 1, Deploy: 1, Risk: 2 },
        unlock_card: "策略卡：单模型深挖"
      },
      {
        label: "B 模型编排",
        description: "建立模型路由按场景切换",
        cost: { Team: 3, Budget: 2, Compute: 2 },
        impact: { Growth: 2, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：模型编排"
      },
      {
        label: "C 多模型矩阵",
        description: "面向客户交付模型组合方案",
        cost: { Team: 4, Budget: 3, Compute: 3 },
        impact: { Growth: 3, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：多模型矩阵"
      }
    ],
    case_popup: {
      title: "多模型编排：从内容到转化的模型路由",
      scenario: "客户内容量大且成本敏感，需要稳定与质量兼顾",
      deliverables: [
        "模型路由规则（成本/质量/速度阈值）",
        "统一API层（多模型接入）",
        "场景映射表（内容类型→模型）",
        "效果与成本对账表"
      ],
      workflow: [
        "建规则：场景与模型匹配",
        "接入：统一API路由",
        "运行：多模型协同",
        "复盘：成本与效果调优"
      ]
    },
    insight_fragment: "多模型编排是未来内容产能的基本盘。"
  },
  {
    id: "openclaw-local",
    date: "2026-02-26",
    title: "行业观察：OpenClaw本地化交付开始成主流",
    subtitle: "不是接入热潮，而是“场景化软硬一体”",
    news_overview:
      "2月下旬行业讨论中，OpenClaw被大量厂商接入，但更有效的落地路径被认为是“本地化+场景化”交付，而非纯接入。",
    news_detail:
      "2月下旬的行业讨论里，OpenClaw作为工作流/Agent产品被大量厂商接入。然而越来越多一线交付团队发现，单纯接入无法产生可持续业务价值，真正可落地的路径是“场景化软硬一体”：例如酒店客户，要求本地部署与数据可控，可通过OpenClaw + 本地Mac mini，将素材库与房型资料库接入，结合节日营销热点与活动timeline自动生成种草内容，再用扫码分发链路完成留资与预订转化。对客户而言，价值不在“接入”，而在“能跑起来的完整任务链”。",
    news_bullets: [
      "OpenClaw接入热度高，但单点接入难转化",
      "软硬一体本地化成为可落地路径",
      "场景任务链（内容生成→扫码分发→转化）才是价值"
    ],
    quiz: {
      question: "OpenClaw真正能落地的关键是什么？",
      options: ["快速接入API", "本地化场景任务链", "只做功能演示"],
      answerIndex: 1,
      hint: "关键词是“场景化软硬一体”"
    },
    biz_insights: [
      "酒店客户：OpenClaw+本地Mac mini+素材库/房型库，形成可控内容产线",
      "节日与活动timeline驱动批量种草内容，扫码分发形成可追踪转化",
      "交付件从“接入报告”升级为“可运行的系统包”"
    ],
    strategies: [
      {
        label: "A 只做接入",
        description: "交付OpenClaw接入与基础流程",
        cost: { Team: 2, Budget: 1, Compute: 1 },
        impact: { Growth: 1, GEO: 0, Ads: 1, Deploy: 1, Risk: 2 },
        unlock_card: "策略卡：接入交付"
      },
      {
        label: "B 本地一体",
        description: "软硬一体交付，客户拿到即用",
        cost: { Team: 4, Budget: 3, Compute: 1 },
        impact: { Growth: 2, GEO: 1, Ads: 1, Deploy: 4, Risk: 1 },
        unlock_card: "策略卡：本地化一体"
      },
      {
        label: "C 场景产品化",
        description: "把酒店方案做成可复制行业套件",
        cost: { Team: 4, Budget: 3, Compute: 2 },
        impact: { Growth: 3, GEO: 1, Ads: 1, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：行业套件"
      }
    ],
    case_popup: {
      title: "酒店本地化：OpenClaw软硬一体交付",
      scenario: "酒店不愿上云，要求低延迟与数据可控",
      deliverables: [
        "本地Mac mini部署包（含OpenClaw与运行脚本）",
        "素材库/房型库接入（字段化权限）",
        "节日timeline内容生成器",
        "扫码分发与转化追踪表"
      ],
      workflow: [
        "设备交付与验收",
        "资产接入与字段化",
        "内容批量生成",
        "扫码分发与复盘"
      ]
    },
    insight_fragment: "OpenClaw的价值不是接入，而是场景化交付。"
  },
  {
    id: "xhs-geo-trend",
    date: "2026-02-26",
    title: "行业关注：小红书GEO被引用机制升温",
    subtitle: "“引用席位”成为品牌争夺的新战场",
    news_overview:
      "2月下旬，行业开始集中讨论小红书GEO：AI总结引用席位有限，品牌竞争焦点转向“被引用率”。",
    news_detail:
      "2月下旬，小红书GEO被大量内容团队视为“新入口”。行业讨论认为，AI总结的引用席位有限，核心不在爆款，而在“被引用”。入口触发差异明显：点点更易触发，问一问展示位受限，直搜产品词触发率低但叠加痛点疑问/对比抉择更容易撕口子。对丝塔芙等品牌而言，策略重点已从“流量爆发”转为“引用席位攻坚+评论语料工程”。",
    news_bullets: [
      "引用席位有限，“被引用率”成为核心指标",
      "入口触发差异明显：点点>问一问>直搜",
      "评论语料工程决定引用稳定性"
    ],
    quiz: {
      question: "GEO的第一目标是什么？",
      options: ["更多笔记", "抢引用席位", "高颜值封面"],
      answerIndex: 1,
      hint: "关键词是“引用席位有限”"
    },
    biz_insights: [
      "丝塔芙：问题词库→20席位攻坚笔记→评论语料→引用率复盘闭环",
      "结构化写法：经验口吻+步骤清单+适用人群+对比结论",
      "评论区高赞当第二正文，提前埋关键短语"
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
        label: "B 席位攻坚",
        description: "做20席位入选矩阵",
        cost: { Team: 3, Budget: 2, Compute: 2 },
        impact: { Growth: 2, GEO: 4, Ads: 1, Deploy: 2, Risk: 1 },
        unlock_card: "策略卡：席位攻坚"
      },
      {
        label: "C 语料系统",
        description: "评论语料工程+引用复盘",
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
    insight_fragment: "GEO是引用席位争夺战，而非爆款赛。"
  },
  {
    id: "openrouter-cn",
    date: "2026-02-27",
    title: "OpenRouter：2月中国模型调用量首超美国",
    subtitle: "三周调用量大涨127%",
    news_overview:
      "2月27日，OpenRouter数据显示中国模型调用量首次超过美国，三周大涨127%，前五模型中四款来自中国厂商。",
    news_detail:
      "财联社消息显示，OpenRouter平台数据显示，9日-15日这周中国模型调用量4.12万亿Token，首次超过美国模型的2.94万亿Token；16日-22日这周中国模型调用量进一步升至5.16万亿Token，三周大涨127%，而美国同期降至2.7万亿Token。平台前五名模型中四款来自中国厂商，包括MiniMax M2.5、Kimi K2.5、GLM-5与DeepSeek V3.2。",
    news_bullets: [
      "中国模型调用量首次超过美国",
      "三周调用量大涨127%",
      "前五模型中四款来自中国厂商"
    ],
    quiz: {
      question: "这条新闻的最大信号是什么？",
      options: ["模型调用量下滑", "国产模型规模化加速", "市场需求消退"],
      answerIndex: 1,
      hint: "关键词是‘调用量超越’"
    },
    biz_insights: [
      "规模化调用证明“可用性”胜过“炫技”：要强调稳定产能",
      "GEO与投流要从“内容质量”转向“规模效率”",
      "把“调用量”转化为“客户可见的业务指标”"
    ],
    strategies: [
      {
        label: "A 追热点",
        description: "快速跟随模型热度",
        cost: { Team: 2, Budget: 1, Compute: 2 },
        impact: { Growth: 1, GEO: 1, Ads: 1, Deploy: 0, Risk: 2 },
        unlock_card: "策略卡：热点跟随"
      },
      {
        label: "B 做规模",
        description: "用规模化产能形成护城河",
        cost: { Team: 3, Budget: 3, Compute: 4 },
        impact: { Growth: 3, GEO: 1, Ads: 3, Deploy: 2, Risk: 2 },
        unlock_card: "策略卡：规模产能"
      },
      {
        label: "C 做指标",
        description: "把调用量转成可解释业务指标",
        cost: { Team: 4, Budget: 2, Compute: 3 },
        impact: { Growth: 3, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：指标转化"
      }
    ],
    case_popup: {
      title: "规模化交付：从调用量到业务指标",
      scenario: "客户关心AI服务是否真正带来业务结果",
      deliverables: [
        "调用量与业务指标映射表",
        "规模化内容产能规划",
        "效果追踪看板（CTR/ROI）",
        "季度复盘报告"
      ],
      workflow: [
        "拆指标：业务目标定义",
        "建映射：调用量→效果",
        "规模化产能",
        "复盘：指标驱动优化"
      ]
    },
    insight_fragment: "调用量规模化是商业化的直接信号。"
  },
  {
    id: "ai-entry-subsidy",
    date: "2026-02-22",
    title: "行业周报：春节前后大厂AI入口投入超45亿元",
    subtitle: "入口补贴战推高应用渗透",
    news_overview:
      "2月22日行业周报指出，春节前后字节、阿里、腾讯、百度累计投入超45亿元推动AI入口普及。",
    news_detail:
      "2月22日行业周报指出，春节前后字节跳动、阿里、腾讯、百度四家大厂累计投入超45亿元，以红包、免单、科技礼品等形式推动AI应用普及。报告同时提到2月以来多家厂商发布新一代模型，行业竞争从模型PK转向场景与生态比拼。",
    news_bullets: [
      "春节前后大厂累计投入超45亿元",
      "红包/免单/礼品推动AI应用普及",
      "竞争重心转向场景与生态"
    ],
    quiz: {
      question: "行业周报认为竞争重心从什么转向什么？",
      options: ["从场景到模型PK", "从模型PK到场景与生态", "从生态到硬件"],
      answerIndex: 1,
      hint: "关键词是‘场景与生态’"
    },
    biz_insights: [
      "入口补贴是窗口期：焕泽应趁热做“任务链交付”",
      "把流量补贴转化为可沉淀的内容资产",
      "用场景交付包绑定客户长期留存"
    ],
    strategies: [
      {
        label: "A 追补贴",
        description: "跟随入口补贴做流量冲刺",
        cost: { Team: 2, Budget: 2, Compute: 1 },
        impact: { Growth: 2, GEO: 1, Ads: 2, Deploy: 1, Risk: 2 },
        unlock_card: "策略卡：补贴冲刺"
      },
      {
        label: "B 做任务链",
        description: "把流量导向任务链交付",
        cost: { Team: 3, Budget: 2, Compute: 2 },
        impact: { Growth: 3, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：入口任务链"
      },
      {
        label: "C 做资产化",
        description: "将补贴期流量沉淀为资产",
        cost: { Team: 4, Budget: 2, Compute: 2 },
        impact: { Growth: 3, GEO: 2, Ads: 1, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：流量资产化"
      }
    ],
    case_popup: {
      title: "补贴期转化：流量沉淀为资产",
      scenario: "客户在补贴期有大量流量，但缺少沉淀",
      deliverables: [
        "流量承接落地页",
        "素材/词库沉淀表",
        "用户行为路径分析",
        "复盘报告（补贴期→常态期）"
      ],
      workflow: [
        "承接：流量入口设计",
        "沉淀：素材与词库",
        "复盘：效果与转化",
        "迁移：常态化运营"
      ]
    },
    insight_fragment: "入口补贴结束后，资产沉淀才是胜负手。"
  },
  {
    id: "seedance-2",
    date: "2026-02-27",
    title: "Seedance 2.0爆火：视频生成进入量产阶段",
    subtitle: "闭环电商投流素材工厂成新赛道",
    news_overview:
      "2月下旬，Seedance 2.0在创作者与营销圈引发热议，讨论焦点从“炫技”转向“规模化投流素材生产”。",
    news_detail:
      "2月下旬，多家媒体与行业讨论围绕Seedance 2.0展开：模型在人物/场景一致性、镜头稳定性上显著提升，使视频生成从“单条作品惊艳”转向“批量产能”。在电商投流场景中，品牌更关心是否能支撑50-200条/周的素材迭代节奏，并形成“脚本→生成→剪辑→投放→复盘”的闭环。对闭环电商客户而言，Seedance 2.0的价值不在单条爆款，而在可解释、可规模化的投流素材工厂。",
    news_bullets: [
      "视频生成稳定性提升，批量生产可行",
      "营销关注从爆款转向可跑量",
      "素材-投放-复盘闭环成为核心"
    ],
    quiz: {
      question: "Seedance 2.0带来的最大变化是什么？",
      options: ["只能做一条样片", "视频生成进入量产阶段", "禁止用于营销"],
      answerIndex: 1,
      hint: "关键词是“量产与跑量”"
    },
    biz_insights: [
      "把视频生成做成‘投流素材工厂’：交付从1条视频升级为脚本库+镜头库+投放看板",
      "用指标驱动创意：按前三秒钩子/卖点结构做组合实验",
      "建立素材-投放-复盘闭环：每轮产出可解释结论"
    ],
    strategies: [
      {
        label: "A 跟风炫技",
        description: "先做10条样片展示能力",
        cost: { Team: 2, Budget: 1, Compute: 3 },
        impact: { Growth: 1, GEO: 0, Ads: 1, Deploy: 0, Risk: 1 },
        unlock_card: "策略卡：样片展厅"
      },
      {
        label: "B 素材工厂",
        description: "搭建50-200条/周投流流水线",
        cost: { Team: 4, Budget: 3, Compute: 5 },
        impact: { Growth: 2, GEO: 0, Ads: 4, Deploy: 2, Risk: 2 },
        unlock_card: "策略卡：投流素材工厂"
      },
      {
        label: "C 客户闭环",
        description: "接入投放与复盘系统做续费抓手",
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
        "投放复盘：按CTR/CPM/ROI迭代"
      ]
    },
    insight_fragment: "规模化视频生产才是投流的护城河。"
  },
  {
    id: "xhs-geo",
    date: "机制卡",
    title: "小红书GEO：先抢20个引用席位，再谈爆款",
    subtitle: "入口差异 + 触发规律 + 评论语料，是胜负手",
    news_overview:
      "GEO机制卡：AI总结引用席位有限，首要目标是被引用，而非单条爆款。",
    news_detail:
      "小红书GEO的本质是：AI总结回答引用有限席位（可视为‘搜索答案榜’）。不同入口触发门槛不同：点点更易触发且有上下文联想；问一问引用展示位存在硬上限；直搜产品词触发率低，但叠加痛点疑问/对比抉择可撕口子。",
    news_bullets: [
      "三入口触发差异：点点更容易触发，问一问中等，直搜门槛高",
      "引用席位是硬约束：要围绕‘被引用’优化内容结构与语料",
      "直搜撕口子：产品词+痛点疑问/对比抉择更容易触发AI总结"
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
