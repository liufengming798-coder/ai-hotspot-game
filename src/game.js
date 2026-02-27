import {
  HOTSPOT_CARDS,
  INSIGHT_COMBINE_TITLE,
  STRATEGY_COMMENTARY,
  ACTION_SUGGESTIONS
} from './data.js';

const STAGES = {
  NEWS: 'NEWS',
  QUIZ: 'QUIZ',
  BIZ: 'BIZ',
  RESULT: 'RESULT'
};

const METRIC_KEYS = ['Growth', 'GEO', 'Ads', 'Deploy', 'Risk'];
const CORE_METRICS = ['Growth', 'GEO', 'Ads', 'Deploy'];

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
    stage: STAGES.NEWS,
    flipped: false,
    resources: { Team: 10, Budget: 10, Compute: 10 },
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
    const missing = getMissingResources(strategy.cost, state.resources);
    if (missing.length) {
      toast.show(`缺少${missing.join(' / ')}资源`);
      return;
    }

    Object.keys(strategy.cost).forEach((key) => {
      state.resources[key] -= strategy.cost[key];
    });

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

    const resources = document.createElement('div');
    resources.className = 'resources';
    resources.innerHTML = ['Team', 'Budget', 'Compute']
      .map(
        (key) =>
          `<div class="resource"><span>${key}</span><strong>${state.resources[key]}</strong></div>`
      )
      .join('');

    const metrics = document.createElement('div');
    metrics.className = 'metrics';
    metrics.innerHTML = METRIC_KEYS.map((key) => {
      const val = state.metrics[key];
      return `<div class="metric"><span>${key}</span><strong>${val}</strong></div>`;
    }).join('');

    header.appendChild(progress);
    header.appendChild(resources);
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

    const back = document.createElement('div');
    back.className = 'card-face card-back';

    back.appendChild(renderBackContent(state, card, modal, toast));

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    cardWrap.appendChild(cardInner);

    board.appendChild(cardWrap);

    setTimeout(() => {
      const flipBtn = document.getElementById('flipBtn');
      if (flipBtn) flipBtn.onclick = handleFlip;
    }, 0);

    return board;
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
        <div class="actions">
          <button class="btn primary" id="toQuiz">进入理解挑战</button>
        </div>
      `;
      setTimeout(() => {
        const toQuiz = document.getElementById('toQuiz');
        if (toQuiz) toQuiz.onclick = () => goStage(STAGES.QUIZ);
      }, 0);
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
      setTimeout(() => {
        content.querySelectorAll('.option').forEach((btn) => {
          btn.onclick = () => onQuizAnswer(Number(btn.dataset.idx));
        });
      }, 0);
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
            .map((s, idx) => renderStrategyCard(s, state.resources, idx))
            .join('')}
        </div>
      `;
      setTimeout(() => {
        const caseBtn = document.getElementById('caseBtn');
        if (caseBtn) caseBtn.onclick = openCasePopup;
        content.querySelectorAll('.strategy-btn').forEach((btn) => {
          btn.onclick = () => {
            const index = Number(btn.dataset.idx);
            applyStrategy(card.strategies[index]);
          };
        });
      }, 0);
    }

    return content;
  }

  function renderResult(state, toast) {
    const container = document.createElement('div');
    container.className = 'result';

    const { title, topMetrics } = getStrategyTitle(state.metrics);
    const suggestions = buildSuggestions(topMetrics);

    container.innerHTML = `
      <div class="result-header">
        <h1>你的策略流派：${title}</h1>
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
          <div class="panel-title">下周就能做</div>
          <ul class="list">
            ${suggestions.map((s) => `<li>${s}</li>`).join('')}
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
    `;

    setTimeout(() => {
      const makePoster = container.querySelector('#makePoster');
      const downloadPoster = container.querySelector('#downloadPoster');
      const canvas = container.querySelector('#posterCanvas');
      const restart = container.querySelector('#restartBtn');

      if (makePoster) {
        makePoster.onclick = () => {
          drawPoster(canvas, {
            title: 'AI热点落地局：从新闻到生意',
            badge: title,
            metrics: state.metrics,
            actions: suggestions
          });
          toast.show('海报已生成，可右键保存或下载');
          downloadPoster.href = canvas.toDataURL('image/png');
        };
      }

      if (restart) {
        restart.onclick = () => window.location.reload();
      }
    }, 0);

    return container;
  }
}

function renderStrategyCard(strategy, resources, idx) {
  const missing = getMissingResources(strategy.cost, resources);
  const disabled = missing.length ? 'disabled' : '';

  const costText = `Team ${strategy.cost.Team} / Budget ${strategy.cost.Budget} / Compute ${strategy.cost.Compute}`;
  const impactText = `Growth ${formatImpact(strategy.impact.Growth)} | GEO ${formatImpact(
    strategy.impact.GEO
  )} | Ads ${formatImpact(strategy.impact.Ads)} | Deploy ${formatImpact(
    strategy.impact.Deploy
  )} | Risk ${formatImpact(strategy.impact.Risk)}`;

  return `
    <div class="strategy ${disabled}">
      <div class="strategy-title">${strategy.label}</div>
      <div class="strategy-desc">${strategy.description}</div>
      <div class="strategy-meta">成本：${costText}</div>
      <div class="strategy-meta">影响：${impactText}</div>
      <button class="btn primary strategy-btn ${disabled}" data-idx="${idx}">
        选择策略
      </button>
      ${missing.length ? `<div class="missing">缺少${missing.join(' / ')}资源</div>` : ''}
    </div>
  `;
}

function getMissingResources(cost, resources) {
  const missing = [];
  Object.keys(cost).forEach((key) => {
    if (resources[key] < cost[key]) missing.push(key);
  });
  return missing;
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
            <span>${key}</span>
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

function buildSuggestions(topMetrics) {
  const first = ACTION_SUGGESTIONS[topMetrics[0]] || [];
  const second = ACTION_SUGGESTIONS[topMetrics[1]] || [];
  return [first[0], first[1], second[0]].filter(Boolean);
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

function drawPoster(canvas, { title, badge, metrics, actions }) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  const grd = ctx.createLinearGradient(0, 0, w, h);
  grd.addColorStop(0, '#f6f3ea');
  grd.addColorStop(1, '#e3efe6');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#1b1b1b';
  ctx.font = '28px "Noto Sans SC", sans-serif';
  ctx.fillText(title, 40, 60);

  ctx.fillStyle = '#005b4f';
  ctx.font = 'bold 36px "Noto Sans SC", sans-serif';
  ctx.fillText(badge, 40, 110);

  const barStartX = 40;
  const barStartY = 150;
  const barWidth = 360;
  const barHeight = 16;
  const gap = 36;

  METRIC_KEYS.forEach((key, idx) => {
    const y = barStartY + idx * gap;
    const val = metrics[key];
    const norm = Math.min(1, Math.max(0, (val + 10) / 20));

    ctx.fillStyle = '#cbded5';
    ctx.fillRect(barStartX, y, barWidth, barHeight);

    ctx.fillStyle = key === 'Risk' ? '#d06b5e' : '#3c7d63';
    ctx.fillRect(barStartX, y, barWidth * norm, barHeight);

    ctx.fillStyle = '#1b1b1b';
    ctx.font = '16px "Noto Sans SC", sans-serif';
    ctx.fillText(`${key} ${val}`, barStartX + barWidth + 16, y + 13);
  });

  ctx.fillStyle = '#1b1b1b';
  ctx.font = '18px "Noto Sans SC", sans-serif';
  ctx.fillText('下周行动建议', 460, 170);

  ctx.font = '16px "Noto Sans SC", sans-serif';
  let textY = 210;
  actions.forEach((line) => {
    textY = drawWrapText(ctx, `- ${line}`, 460, textY, 440, 22);
    textY += 6;
  });

  ctx.fillStyle = '#8f9b94';
  ctx.font = '12px "Noto Sans SC", sans-serif';
  ctx.fillText('AI热点落地局 · 2026/2/20–2/27', 40, h - 30);
}

function drawWrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split('');
  let line = '';
  let currentY = y;
  for (let i = 0; i < words.length; i += 1) {
    const testLine = line + words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line, x, currentY);
      line = words[i];
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
  return currentY;
}
