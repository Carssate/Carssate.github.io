

    window.onload = (event) => {
        const t1 = document.getElementById('t1'),
            t2 = document.getElementById('t2'),
            t3 = document.getElementById('t3'),
            t4 = document.getElementById('t4'),
            t33 = document.getElementById('t33'),
            t44 = document.getElementById('t44'),
            t5 = document.getElementById('t5');
        const animationClass = 'move';
        // 创建监听
        const intersectionObserver = new IntersectionObserver((entries) => {
            for (entry of entries) {
                if (entry.intersectionRatio > 0) {
                    addAnimationClass(entry.target, animationClass);
                } else {
                    console.log(animationClass);
                    removeAnimationClass(entry.target, animationClass);
                }
            }
        });
        // 添加动画class的操作
        function addAnimationClass(elem, animationClass) {
            elem.className.includes(animationClass) ? 1 : elem.className = elem.className + ' ' + animationClass;
        }
        // 移除动画class的操作
        function removeAnimationClass(elem, animationClass) {
            elem.className.includes(animationClass) ? elem.className = elem.className.replace(animationClass, '') : 1;
            console.log(elem.className);
        }
        // 开启监听
        intersectionObserver.observe(t1);
        intersectionObserver.observe(t2);
        intersectionObserver.observe(t3);
        intersectionObserver.observe(t4);
        intersectionObserver.observe(t33);
        intersectionObserver.observe(t44);
        intersectionObserver.observe(t5);
    }