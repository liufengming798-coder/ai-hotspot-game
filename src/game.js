import { HOTSPOT_CARDS, INSIGHT_COMBINE_TITLE, STRATEGY_COMMENTARY } from './data.js';

const STAGES = {
  INTRO: 'INTRO',
  NEWS: 'NEWS',
  QUIZ: 'QUIZ',
  BIZ: 'BIZ',
  RESULT: 'RESULT'
};

const METRIC_KEYS = ['Growth', 'GEO', 'Ads', 'Deploy', 'Risk'];
const CORE_METRICS = ['Growth', 'GEO', 'Ads', 'Deploy'];
const METRIC_LABELS = {
  Growth: '增长势能',
  GEO: 'GEO占位力',
  Ads: '投流力',
  Deploy: '交付力',
  Risk: '风险值'
};

const TITLE_MAP = {
  'GEO+Ads': 'GEO占位派',
  'GEO+Growth': '增长叙事派',
  'GEO+Deploy': '场景交付派',
  'Ads+Growth': '投流素材工厂派',
  'Ads+Deploy': '投流交付派',
  'Growth+Deploy': '增长交付派'
};

export function initGame(root) {
  const state = {
    cards: HOTSPOT_CARDS,
    index: 0,
    stage: STAGES.INTRO,
    flipped: false,
    metrics: { Growth: 0, GEO: 0, Ads: 0, Deploy: 0, Risk: 0 },
    strategyCards: [],
    insights: [],
    toast: null
  };

  const app = document.createElement('div');
  app.className = 'app';
  root.appendChild(app);

  const modal = createModal();
  app.appendChild(modal.el);

  const toast = createToast();
  app.appendChild(toast.el);

  function render() {
    app.querySelectorAll('.screen').forEach((n) => n.remove());

    const screen = document.createElement('div');
    screen.className = 'screen';

    if (state.stage === STAGES.RESULT) {
      screen.appendChild(renderResult(state, toast));
    } else {
      if (state.stage === STAGES.INTRO) {
        screen.appendChild(renderIntro());
        app.insertBefore(screen, modal.el);
        return;
      }
      screen.appendChild(renderHeader(state));
      screen.appendChild(renderBoard(state, modal, toast));
    }

    app.insertBefore(screen, modal.el);
  }

  function nextCard() {
    if (state.index + 1 >= state.cards.length) {
      state.stage = STAGES.RESULT;
      state.flipped = false;
      render();
      return;
    }
    state.index += 1;
    state.stage = STAGES.NEWS;
    state.flipped = false;
    render();
  }

  function applyStrategy(strategy) {
    Object.keys(strategy.impact).forEach((key) => {
      state.metrics[key] += strategy.impact[key];
    });

    state.strategyCards.push(strategy.unlock_card);
    const comment = STRATEGY_COMMENTARY[Math.floor(Math.random() * STRATEGY_COMMENTARY.length)];
    toast.show(comment);
    nextCard();
  }


  function handleFlip() {
    state.flipped = true;
    render();
  }

  function goStage(next) {
    state.stage = next;
    render();
  }

  function onQuizAnswer(idx) {
    const card = state.cards[state.index];
    if (idx === card.quiz.answerIndex) {
      toast.show('答对了，获得洞察碎片');
      if (card.insight_fragment) {
        state.insights.push(card.insight_fragment);
      }
      state.stage = STAGES.BIZ;
      render();
    } else {
      toast.show(`答错了：${card.quiz.hint}`);
    }
  }

  function openCasePopup() {
    const card = state.cards[state.index];
    modal.open(card.case_popup);
  }

  render();

  function renderHeader(state) {
    const header = document.createElement('div');
    header.className = 'header';

    const progress = document.createElement('div');
    progress.className = 'progress';
    const progressValue = ((state.index + 1) / state.cards.length) * 100;
    progress.innerHTML = `
      <div class="progress-meta">第 ${state.index + 1}/${state.cards.length} 张</div>
      <div class="progress-bar"><span style="width:${progressValue}%"></span></div>
    `;

    const metrics = document.createElement('div');
    metrics.className = 'metrics';
    metrics.innerHTML = METRIC_KEYS.map((key) => {
      const val = state.metrics[key];
      return `<div class="metric"><span>${METRIC_LABELS[key]}</span><strong>${val}</strong></div>`;
    }).join('');

    header.appendChild(progress);
    header.appendChild(metrics);
    return header;
  }

  function renderBoard(state, modal, toast) {
    const board = document.createElement('div');
    board.className = 'board';

    const card = state.cards[state.index];

    const cardWrap = document.createElement('div');
    cardWrap.className = `card-wrap ${state.flipped ? 'flipped' : ''}`;

    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';

    const front = document.createElement('div');
    front.className = 'card-face card-front';
    front.innerHTML = `
      <div class="card-date">${card.date}</div>
      <h2>${card.title}</h2>
      <p class="subtitle">${card.subtitle}</p>
      <button class="btn primary" id="flipBtn">翻牌进入</button>
    `;
    const flipBtn = front.querySelector('#flipBtn');
    if (flipBtn) flipBtn.onclick = handleFlip;

    const back = document.createElement('div');
    back.className = 'card-face card-back';

    back.appendChild(renderBackContent(state, card, modal, toast));

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    cardWrap.appendChild(cardInner);

    board.appendChild(cardWrap);

    return board;
  }

  function renderIntro() {
    const intro = document.createElement('div');
    intro.className = 'intro';

    intro.innerHTML = `
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
    `;

    setTimeout(() => {
      const startBtn = intro.querySelector('#startGame');
      if (startBtn) startBtn.onclick = () => goStage(STAGES.NEWS);
    }, 0);

    return intro;
  }

  function renderBackContent(state, card, modal, toast) {
    const content = document.createElement('div');
    content.className = 'card-content';

    if (state.stage === STAGES.NEWS) {
      content.innerHTML = `
        <div class="stage-title">① 新闻速览</div>
        <p class="summary">${card.news_summary}</p>
        <ul class="bullets">
          ${card.news_bullets.map((b) => `<li>${b}</li>`).join('')}
        </ul>
        ${
          card.sources && card.sources.length
            ? `<div class="sources">
                <div class="sources-title">信源链接</div>
                <ul>
                  ${card.sources
                    .map(
                      (s) =>
                        `<li><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a>${
                          s.note ? `<span class="source-note">${s.note}</span>` : ''
                        }</li>`
                    )
                    .join('')}
                </ul>
              </div>`
            : ''
        }
        <div class="actions">
          <button class="btn primary" id="toQuiz">进入理解挑战</button>
        </div>
      `;
      const toQuiz = content.querySelector('#toQuiz');
      if (toQuiz) toQuiz.onclick = () => goStage(STAGES.QUIZ);
    }

    if (state.stage === STAGES.QUIZ) {
      content.innerHTML = `
        <div class="stage-title">② 理解挑战</div>
        <div class="quiz-question">${card.quiz.question}</div>
        <div class="quiz-options">
          ${card.quiz.options
            .map(
              (opt, idx) =>
                `<button class="btn option" data-idx="${idx}">${String.fromCharCode(
                  65 + idx
                )}. ${opt}</button>`
            )
            .join('')}
        </div>
        <div class="hint">答错可重试</div>
      `;
      content.querySelectorAll('.option').forEach((btn) => {
        btn.onclick = () => onQuizAnswer(Number(btn.dataset.idx));
      });
    }

    if (state.stage === STAGES.BIZ) {
      content.innerHTML = `
        <div class="stage-title">③ 业务落地</div>
        <ul class="bullets">
          ${card.biz_insights.map((b) => `<li>${b}</li>`).join('')}
        </ul>
        <div class="case-block">
          <button class="btn ghost" id="caseBtn">现实案例</button>
        </div>
        <div class="strategy-grid">
          ${card.strategies
            .map((s, idx) => renderStrategyCard(s, idx))
            .join('')}
        </div>
      `;
      const caseBtn = content.querySelector('#caseBtn');
      if (caseBtn) caseBtn.onclick = openCasePopup;
      content.querySelectorAll('.strategy-btn').forEach((btn) => {
        btn.onclick = () => {
          const index = Number(btn.dataset.idx);
          applyStrategy(card.strategies[index]);
        };
      });
    }

    return content;
  }

  function renderResult(state, toast) {
    const container = document.createElement('div');
    container.className = 'result';

    const { title, topMetrics } = getStrategyTitle(state.metrics);
    const { summary, signals } = buildOutcomeSummary(state.metrics, state.strategyCards);

    container.innerHTML = `
      <div class="result-hero">
        <div class="hero-badge">策略流派</div>
        <h1>${title}</h1>
        <p class="result-sub">${INSIGHT_COMBINE_TITLE}：${state.insights.join(' / ') || '（尚未收集）'}</p>
      </div>
      <div class="result-grid">
        <div class="panel">
          <div class="panel-title">指标画像</div>
          ${renderMetricBars(state.metrics)}
        </div>
        <div class="panel">
          <div class="panel-title">策略卡列表</div>
          <details open>
            <summary>查看本局策略卡（${state.strategyCards.length}）</summary>
            <ul class="list">
              ${state.strategyCards.map((c) => `<li>${c}</li>`).join('')}
            </ul>
          </details>
        </div>
        <div class="panel">
          <div class="panel-title">本局业务总结</div>
          <div class="summary-text">${summary}</div>
          <div class="panel-title mini">下一步更值得关注</div>
          <ul class="list">
            ${signals.map((s) => `<li>${s}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="restart">
        <button class="btn ghost" id="restartBtn">再来一局</button>
      </div>
    `;

    setTimeout(() => {
      const restart = container.querySelector('#restartBtn');

      if (restart) {
        restart.onclick = () => window.location.reload();
      }
    }, 0);

    return container;
  }
}

function renderStrategyCard(strategy, idx) {
  const impactText = `Growth ${formatImpact(strategy.impact.Growth)} | GEO ${formatImpact(
    strategy.impact.GEO
  )} | Ads ${formatImpact(strategy.impact.Ads)} | Deploy ${formatImpact(
    strategy.impact.Deploy
  )} | Risk ${formatImpact(strategy.impact.Risk)}`;

  return `
    <div class="strategy">
      <div class="strategy-title">${strategy.label}</div>
      <div class="strategy-desc">${strategy.description}</div>
      <div class="strategy-meta">影响：${impactText}</div>
      <button class="btn primary strategy-btn" data-idx="${idx}">
        选择策略
      </button>
    </div>
  `;
}

function formatImpact(value) {
  if (value > 0) return `+${value}`;
  if (value < 0) return `${value}`;
  return '0';
}

function renderMetricBars(metrics) {
  return `
    <div class="bars">
      ${METRIC_KEYS.map((key) => {
        const val = metrics[key];
        const width = Math.min(100, Math.max(0, (val + 10) * 5));
        return `
          <div class="bar">
            <span>${METRIC_LABELS[key]}</span>
            <div class="bar-track"><i style="width:${width}%"></i></div>
            <strong>${val}</strong>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function getStrategyTitle(metrics) {
  const sorted = CORE_METRICS
    .map((key) => ({ key, val: metrics[key] }))
    .sort((a, b) => b.val - a.val);

  const topMetrics = [sorted[0].key, sorted[1].key];
  const pair = [topMetrics[0], topMetrics[1]].sort().join('+');
  const title = TITLE_MAP[pair] || '综合策略派';

  return { title, topMetrics };
}

function buildOutcomeSummary(metrics, strategyCards) {
  const sorted = CORE_METRICS.map((key) => ({ key, val: metrics[key] })).sort(
    (a, b) => b.val - a.val
  );
  const focus = sorted.slice(0, 2).map((s) => METRIC_LABELS[s.key]).join(' + ');
  const risk = metrics.Risk;
  const riskTone = risk >= 6 ? '风险偏高，建议补强合规与成本可控。' : risk >= 3 ? '风险可控但需持续校验。' : '风险较低，可稳步扩张。';

  const summary = `本局策略重心落在「${focus}」，策略卡主要集中在${strategyCards.length}条行动路径上。你的选择体现了对“可复制增长”和“业务链路”的偏好，同时避免了单点爆发的脆弱性。${riskTone}`;

  const signals = [
    '行业内“入口→任务链”转化率的真实数据与案例',
    '平台对AI内容标识/版权的最新监管与执行口径',
    'GEO类内容被AI总结引用的结构与语料变化趋势'
  ];

  return { summary, signals };
}

function createToast() {
  const el = document.createElement('div');
  el.className = 'toast hidden';

  let timer = null;

  function show(message) {
    el.textContent = message;
    el.classList.remove('hidden');
    clearTimeout(timer);
    timer = setTimeout(() => el.classList.add('hidden'), 2200);
  }

  return { el, show };
}

function createModal() {
  const el = document.createElement('div');
  el.className = 'modal hidden';
  el.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-card">
      <button class="modal-close">关闭</button>
      <div class="modal-body"></div>
    </div>
  `;

  const body = el.querySelector('.modal-body');
  const closeBtn = el.querySelector('.modal-close');
  const backdrop = el.querySelector('.modal-backdrop');

  function open(data) {
    body.innerHTML = `
      <h3>${data.title}</h3>
      <p class="modal-scenario">${data.scenario}</p>
      <div class="modal-section">
        <strong>交付物</strong>
        <ul>${data.deliverables.map((d) => `<li>${d}</li>`).join('')}</ul>
      </div>
      <div class="modal-section">
        <strong>流程</strong>
        <ul>${data.workflow.map((w) => `<li>${w}</li>`).join('')}</ul>
      </div>
    `;
    el.classList.remove('hidden');
  }

  function close() {
    el.classList.add('hidden');
  }

  closeBtn.onclick = close;
  backdrop.onclick = close;

  return { el, open, close };
}
