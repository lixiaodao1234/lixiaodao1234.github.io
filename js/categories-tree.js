/* ===========================================================
   分类页 - 折叠交互
   点击分类标题行展开/收起该分类下的文章列表
   =========================================================== */
(function () {
  function init() {
    var tree = document.querySelector('.type-categories .cat-tree');
    if (!tree || tree.dataset.treeInited === '1') return;
    tree.dataset.treeInited = '1';

    tree.querySelectorAll('.cat-item').forEach(function (item) {
      var row = item.querySelector(':scope > .cat-row');
      var posts = item.querySelector(':scope > .cat-posts');
      if (!row) return;

      if (posts && posts.children.length) {
        item.classList.add('has-posts', 'collapsed');
        row.addEventListener('click', function (e) {
          e.preventDefault();
          item.classList.toggle('collapsed');
        });
      } else {
        item.classList.add('empty');
        // 没有文章时点击分类名直接跳转到分类归档页
        var name = item.querySelector('.cat-name');
        if (name && name.getAttribute('href')) {
          row.addEventListener('click', function (e) {
            if (e.target.tagName.toLowerCase() === 'a') return;
            window.location.href = name.getAttribute('href');
          });
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  document.addEventListener('pjax:complete', init);
})();
