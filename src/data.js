export const HOTSPOT_CARDS = [
  {
    id: "qwen35-mid",
    date: "2026-02-25",
    title: "阿里开源三款千问3.5中型模型",
    subtitle: "中型模型降本，价格低至0.2元/百万Token",
    news_overview:
      "2月25日，阿里开源Qwen3.5三款中型模型（35B-A3B、122B-A10B、27B），并在阿里云百炼上线Qwen3.5-Flash，输入低至0.2元/百万Token。",
    news_detail:
      "2月25日，阿里开源Qwen3.5系列新增三款中等规模模型：Qwen3.5-35B-A3B、Qwen3.5-122B-A10B、Qwen3.5-27B。报道强调这些模型在多项评测中超过上一代更大模型，并可在消费级显卡部署，显著降低中小团队的模型使用门槛。同时，基于Qwen3.5-35B-A3B的托管模型Qwen3.5-Flash上线阿里云百炼，输入价格低至0.2元/百万Token，进一步压缩推理成本。",
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
    id: "baidu-ai-cloud",
    date: "2026-02-26",
    title: "百度财报：AI算力订阅收入同比增143%",
    subtitle: "AI云成为核心增长引擎",
    news_overview:
      "2月26日，百度发布财报，Q4营收327.4亿元，AI高性能计算订阅收入同比增长143%。",
    news_detail:
      "2月26日，百度发布2025年第四季度财报：营收327.4亿元，略高于市场预期。智能云基础设施业务季度收入达58亿元，其中AI高性能计算设施订阅收入同比增长143%。全年来看，智能云基础设施收入约200亿元，同比增长34%，显示AI算力需求持续释放。",
    news_bullets: [
      "Q4营收327.4亿元",
      "AI高性能计算订阅收入同比+143%",
      "智能云基础设施全年收入约200亿元"
    ],
    quiz: {
      question: "百度AI云增长的关键驱动是什么？",
      options: ["广告收入", "算力订阅收入爆发", "硬件零售"],
      answerIndex: 1,
      hint: "财报强调‘算力订阅’"
    },
    biz_insights: [
      "客户愿意为稳定算力付费：交付中必须把“算力保障”写进方案",
      "内容营销也要“算力化”：把生产节奏与推理成本绑定",
      "用成本与ROI对账表建立客户续费理由"
    ],
    strategies: [
      {
        label: "A 堆资源",
        description: "高配算力保障产出速度",
        cost: { Team: 2, Budget: 3, Compute: 4 },
        impact: { Growth: 2, GEO: 0, Ads: 2, Deploy: 1, Risk: 2 },
        unlock_card: "策略卡：算力保障"
      },
      {
        label: "B 成本管控",
        description: "算力+内容产能做成本闭环",
        cost: { Team: 3, Budget: 2, Compute: 3 },
        impact: { Growth: 2, GEO: 0, Ads: 2, Deploy: 2, Risk: 1 },
        unlock_card: "策略卡：算力成本闭环"
      },
      {
        label: "C 订阅化",
        description: "服务做成算力订阅包",
        cost: { Team: 4, Budget: 3, Compute: 3 },
        impact: { Growth: 3, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：算力订阅包"
      }
    ],
    case_popup: {
      title: "企业客户：算力订阅式交付",
      scenario: "客户追求稳定产能与成本可控",
      deliverables: [
        "算力订阅方案（档位/费用/产能）",
        "内容产能周报（产出与成本）",
        "ROI复盘表（投放效果与算力成本）",
        "续费模型（预算与产能预测）"
      ],
      workflow: [
        "评估：算力需求与预算",
        "订阅：分层配置",
        "交付：产能与效果联动",
        "复盘：续费与升级"
      ]
    },
    insight_fragment: "算力订阅正在变成AI交付的核心商业模型。"
  },
  {
    id: "baidu-ai-share",
    date: "2026-02-26",
    title: "百度首次披露AI业务收入占比",
    subtitle: "AI业务营收达400亿元，占一般性业务43%",
    news_overview:
      "2月26日，百度披露AI业务收入占比：2025年AI业务营收400亿元，占一般性业务收入43%。",
    news_detail:
      "2月26日，百度发布财报并首次披露AI业务收入占比。数据显示，2025年百度总营收1291亿元，AI业务营收达400亿元；四季度AI业务收入占百度一般性业务收入的43%。这意味着百度的价值锚点从广告逐步转向AI云、应用和自动驾驶等业务。",
    news_bullets: [
      "2025年AI业务营收400亿元",
      "四季度AI业务收入占比43%",
      "百度估值逻辑向AI业务迁移"
    ],
    quiz: {
      question: "这条新闻最重要的信号是什么？",
      options: ["AI收入占比下降", "AI业务成为核心价值锚点", "百度退出AI"],
      answerIndex: 1,
      hint: "关键词是‘首次披露AI业务占比’"
    },
    biz_insights: [
      "客户开始看“AI业务占比”：要用“业务贡献率”讲故事",
      "内容营销交付需与收入挂钩：从曝光到转化形成闭环",
      "把“AI业务占比”转成客户汇报模板"
    ],
    strategies: [
      {
        label: "A 强叙事",
        description: "强调AI价值叙事",
        cost: { Team: 2, Budget: 1, Compute: 1 },
        impact: { Growth: 2, GEO: 1, Ads: 1, Deploy: 1, Risk: 1 },
        unlock_card: "策略卡：AI叙事"
      },
      {
        label: "B 强指标",
        description: "用收入贡献率做背书",
        cost: { Team: 3, Budget: 2, Compute: 2 },
        impact: { Growth: 3, GEO: 1, Ads: 2, Deploy: 2, Risk: 1 },
        unlock_card: "策略卡：指标背书"
      },
      {
        label: "C 强交付",
        description: "交付驱动AI业务占比提升",
        cost: { Team: 4, Budget: 2, Compute: 2 },
        impact: { Growth: 3, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：交付占比"
      }
    ],
    case_popup: {
      title: "AI业务占比：客户汇报模板",
      scenario: "客户希望看到AI对业务收入的贡献度",
      deliverables: [
        "AI收入贡献率看板",
        "业务指标拆解表（线索/转化）",
        "季度复盘报告",
        "AI业务叙事PPT"
      ],
      workflow: [
        "定口径：收入贡献率",
        "建看板：指标映射",
        "复盘：贡献解释",
        "迭代：交付优化"
      ]
    },
    insight_fragment: "AI业务占比是投资与客户都在关注的指标。"
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
    id: "agibot-eu",
    date: "2026-02-25",
    title: "智元机器人进入德国市场",
    subtitle: "发布通用具身机器人矩阵",
    news_overview:
      "2月25日，智元（AGIBOT）在德国慕尼黑发布会宣布进入德国市场，并与敏实集团签署合作协议。",
    news_detail:
      "IT之家报道，智元（AGIBOT）2月24日在慕尼黑举办发布会，正式宣布进入德国市场，发布面向德国市场的通用具身机器人产品矩阵及行业解决方案，并与汽车外饰与结构件制造商敏实集团签署专项战略合作协议。双方将依托欧洲市场资源加速本地化落地与规模化部署。",
    news_bullets: [
      "在慕尼黑发布会宣布进入德国市场",
      "发布通用具身机器人产品矩阵",
      "与敏实集团签署欧洲合作协议"
    ],
    quiz: {
      question: "智元此次发布会的关键结果是什么？",
      options: ["退出欧洲市场", "进入德国并签署合作", "停止研发具身机器人"],
      answerIndex: 1,
      hint: "关键词是‘进入德国市场’"
    },
    biz_insights: [
      "具身智能出海强调“场景交付”：营销内容要可落地",
      "把“体验过程”做成内容素材矩阵",
      "结合GEO与搜索占位提升品牌可信度"
    ],
    strategies: [
      {
        label: "A 做展厅",
        description: "以展示内容为主",
        cost: { Team: 2, Budget: 2, Compute: 1 },
        impact: { Growth: 1, GEO: 0, Ads: 1, Deploy: 1, Risk: 1 },
        unlock_card: "策略卡：出海展厅"
      },
      {
        label: "B 做场景",
        description: "用场景脚本塑造可交付能力",
        cost: { Team: 3, Budget: 2, Compute: 2 },
        impact: { Growth: 2, GEO: 1, Ads: 2, Deploy: 3, Risk: 1 },
        unlock_card: "策略卡：场景脚本"
      },
      {
        label: "C 做占位",
        description: "抢占海外GEO与搜索口碑",
        cost: { Team: 3, Budget: 3, Compute: 2 },
        impact: { Growth: 2, GEO: 4, Ads: 1, Deploy: 2, Risk: 1 },
        unlock_card: "策略卡：海外占位"
      }
    ],
    case_popup: {
      title: "出海场景：具身智能内容化方案",
      scenario: "客户希望在海外市场建立具身智能品牌认知",
      deliverables: [
        "场景脚本库（演示/交付/售后）",
        "多语种内容包",
        "海外搜索与GEO词库",
        "市场反馈复盘表"
      ],
      workflow: [
        "拆场景：海外市场需求",
        "内容化：体验过程脚本",
        "分发：多渠道铺量",
        "复盘：认知与转化"
      ]
    },
    insight_fragment: "具身智能的竞争点正在从技术转向场景交付。"
  },
  {
    id: "ai-entry-subsidy",
    date: "2026-02-22",
    title: "行业周报：春节前后大厂AI入口投入超45亿元",
    subtitle: "入口补贴战推高应用渗透",
    news_overview:
      "2月22日行业周报指出，春节前后字节、阿里、腾讯、百度累计投入超45亿元推动AI入口普及。",
    news_detail:
      "2月22日东方证券行业周报指出，春节前后字节跳动、阿里、腾讯、百度四家大厂累计投入超45亿元，以红包、免单、科技礼品等形式推动AI应用普及。报告同时提到2月以来多家厂商发布新一代模型，OpenRouter统计显示中国模型Tokens消耗在全球前三，行业从模型PK走向场景与生态比拼。",
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
