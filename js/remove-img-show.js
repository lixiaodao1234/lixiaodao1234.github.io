document.addEventListener('DOMContentLoaded', () => {
  // 遍历所有图片，移除 title 属性
  document.querySelectorAll('img').forEach(img => {
    img.removeAttribute('title');
    // 可选：也可以移除 alt（不推荐，alt 对无障碍访问很重要）
    // img.removeAttribute('alt');
  });
});