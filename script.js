// 导航栏响应式功能
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// 平滑滚动
const navbarItems = document.querySelectorAll('.navbar-item');

navbarItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        // 关闭移动端菜单
        if (navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        }
    });
});

// 作品集详情模态框
const portfolioCards = document.querySelectorAll('.portfolio-card');
const modal = document.getElementById('portfolio-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDetails = document.getElementById('modal-details');
const modalClose = document.querySelector('.modal-close');

portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h4').textContent;
        const details = card.getAttribute('data-details');
        
        modalTitle.textContent = title;
        modalDetails.textContent = details;
        
        // 根据卡片标题显示对应的文件
        if (title === '深度人物专访') {
            modalImage.innerHTML = '<img src="敢为人物.jpg" alt="敢为人物系列专访" style="max-width: 100%; height: auto; border-radius: 8px;">';
        } else if (title === '新闻通稿/会议纪要') {
            modalImage.innerHTML = '<img src="通稿&纪要.jpg" alt="新闻通稿/会议纪要" style="max-width: 100%; height: auto; border-radius: 8px;">';
        } else if (title === '海报/长图') {
            modalImage.innerHTML = '<img src="海报&长图.jpg" alt="海报/长图" style="max-width: 100%; height: auto; border-radius: 8px;">';
        } else if (title === 'PPT/汇报材料') {
            modalImage.innerHTML = '<img src="PPT.jpg" alt="PPT/汇报材料" style="max-width: 100%; height: auto; border-radius: 8px;">';
        } else if (title === '项目回顾') {
            modalImage.innerHTML = '<video controls style="max-width: 100%; height: auto; border-radius: 8px;"><source src="结营快闪.mp4" type="video/mp4">您的浏览器不支持视频播放。</video>';
        } else if (title === '活动快闪') {
            modalImage.innerHTML = '<video controls style="max-width: 100%; height: auto; border-radius: 8px;"><source src="周年庆快闪.mp4" type="video/mp4">您的浏览器不支持视频播放。</video>';
        } else if (title === '专项内容') {
            modalImage.innerHTML = '<video controls style="max-width: 100%; height: auto; border-radius: 8px;"><source src="全员上一线微视频.mp4" type="video/mp4">您的浏览器不支持视频播放。</video>';
        } else if (title === '年会') {
            modalImage.innerHTML = '<img src="年会.jpg" alt="年会" style="max-width: 100%; height: auto; border-radius: 8px;">';
        } else if (title === '员工入职周年庆') {
            modalImage.innerHTML = '<img src="入职周年庆.jpg" alt="员工入职周年庆" style="max-width: 100%; height: auto; border-radius: 8px;">';
        } else if (title === '子文化建设') {
            modalImage.innerHTML = '<img src="子文化建设.jpg" alt="子文化建设" style="max-width: 100%; height: auto; border-radius: 8px;">';
        } else {
            modalImage.innerHTML = '';
        }
        
        modal.style.display = 'block';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});