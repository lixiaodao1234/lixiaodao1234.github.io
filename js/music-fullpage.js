/* ===========================================================
   音乐页 - 确保 MetingJS 完成初始化
   （生产环境未启用 pjax 时的兜底，避免播放器不渲染）
   =========================================================== */
(function () {
  function ensureMeting() {
    var holder = document.querySelector('#music-fullpage .aplayer');
    if (!holder) return;
    if (holder.querySelector('.aplayer-list')) return; // 已渲染
    if (typeof window.loadMeting === 'function') window.loadMeting();
  }

  function init() {
    if (!document.querySelector('.type-music')) return;
    ensureMeting();
    // 资源较慢时再尝试一次
    setTimeout(ensureMeting, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.addEventListener('load', init);
  document.addEventListener('pjax:complete', init);
})();
