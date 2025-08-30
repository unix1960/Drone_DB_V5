// 统一JavaScript管理

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 添加触摸反馈效果
  addTouchFeedback();
  
  // 初始化底部导航栏
  initTabBar();
  
  // 根据当前页面设置导航栏状态
  const currentPage = getCurrentPage();
  updateTabBar(currentPage);
});

// 添加触摸反馈效果
function addTouchFeedback() {
  const touchElements = document.querySelectorAll('.touch-friendly');
  touchElements.forEach(element => {
    // 跳过有 no-scale 类的元素
    if (element.classList.contains('no-scale')) {
      element.addEventListener('touchstart', function() {
        this.style.opacity = '0.7';
      });
      
      element.addEventListener('touchend', function() {
        this.style.opacity = '1';
      });
      
      element.addEventListener('touchcancel', function() {
        this.style.opacity = '1';
      });
    } else {
      element.addEventListener('touchstart', function() {
        this.style.opacity = '0.7';
        this.style.transform = 'scale(0.98)';
      });
      
      element.addEventListener('touchend', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
      });
      
      element.addEventListener('touchcancel', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
      });
    }
  });
}

// 获取当前页面名称
function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop().replace('.html', '');
  return page || 'index';
}

// 初始化底部导航栏
function initTabBar() {
  // 为每个导航项添加点击事件
  const tabItems = document.querySelectorAll('.nav-item');
  tabItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      if (page) {
        navigateToPage(page);
      }
    });
  });
}

// 更新底部导航栏状态
function updateTabBar(activePage) {
  const tabItems = document.querySelectorAll('.nav-item');
  tabItems.forEach(item => {
    const page = item.getAttribute('data-page');
    if (page === activePage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// 页面跳转
function navigateToPage(page) {
  // 小程序中应使用 wx.navigateTo
  if (typeof wx !== 'undefined') {
    wx.navigateTo({
      url: `/${page}/${page}`
    });
  } else {
    // Web端跳转
    let url = '';
    switch(page) {
      case 'index':
        url = 'index.html';
        break;
      case 'sample-display':
        url = 'sample-display.html';
        break;
      case 'user-selection':
        url = 'user-selection.html';
        break;
      case 'user-management':
        url = 'user-management.html';
        break;
      case 'after-service':
        url = 'after-service.html';
        break;
      case 'info-display':
        url = 'info-display.html';
        break;
      default:
        url = `${page}.html`;
    }
    window.location.href = url;
  }
  
  // 记录用户行为（小程序分析）
  if (typeof wx !== 'undefined') {
    wx.reportAnalytics('page_visit', {
      page: page,
      timestamp: Date.now()
    });
  }
}

// 客服电话
function callService() {
  // 小程序中应使用 wx.makePhoneCall
  if (typeof wx !== 'undefined') {
    wx.makePhoneCall({
      phoneNumber: '400-888-6666'
    });
  } else {
    window.open('tel:400-888-6666');
  }
}

// 添加企业微信
function addWechat() {
  // 小程序中的微信联系逻辑
  if (typeof wx !== 'undefined') {
    wx.showModal({
      title: '添加企业微信',
      content: '请搜索企业微信号：DroneVideo2023 或扫描二维码添加',
      showCancel: false
    });
  } else {
    alert('请搜索企业微信号：DroneVideo2023');
  }
}

// 显示加载状态
function showLoading() {
  const loading = document.createElement('div');
  loading.id = 'global-loading';
  loading.innerHTML = '<div class="loading"></div>';
  loading.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;
  document.body.appendChild(loading);
}

// 隐藏加载状态
function hideLoading() {
  const loading = document.getElementById('global-loading');
  if (loading) {
    loading.remove();
  }
}

// 显示提示信息
function showToast(message, type = 'info') {
  // 小程序中应使用 wx.showToast
  if (typeof wx !== 'undefined') {
    wx.showToast({
      title: message,
      icon: type === 'error' ? 'none' : type,
      duration: 2000
    });
  } else {
    // Web端提示
    alert(message);
  }
}

// 确认对话框
function showConfirm(title, content, confirmCallback, cancelCallback) {
  // 小程序中应使用 wx.showModal
  if (typeof wx !== 'undefined') {
    wx.showModal({
      title: title,
      content: content,
      success: function(res) {
        if (res.confirm) {
          confirmCallback && confirmCallback();
        } else if (res.cancel) {
          cancelCallback && cancelCallback();
        }
      }
    });
  } else {
    // Web端确认
    if (confirm(content)) {
      confirmCallback && confirmCallback();
    } else {
      cancelCallback && cancelCallback();
    }
  }
}