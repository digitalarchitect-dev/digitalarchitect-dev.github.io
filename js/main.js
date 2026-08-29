(function () {
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    var burger = document.getElementById('burger');
    var menu = document.querySelector('.menu');
    if (burger && menu) {
        burger.addEventListener('click', function () {
            menu.classList.toggle('open');
            burger.classList.toggle('open');
        });
        menu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                menu.classList.remove('open');
            });
        });
    }

    var links = document.querySelectorAll('.menu-link');
    var sections = [];
    links.forEach(function (l) {
        var hash = l.getAttribute('href');
        if (hash && hash.startsWith('#')) sections.push(document.querySelector(hash));
    });

    function onScroll() {
        var pos = window.scrollY + 120;
        var current = null;
        sections.forEach(function (sec) {
            if (sec && sec.offsetTop <= pos) current = sec.id;
        });
        links.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    var copyBtn = document.getElementById('copy-btn');
    var mailText = document.getElementById('copy-mail');
    if (copyBtn && mailText) {
        copyBtn.addEventListener('click', function () {
            var email = 'stepaandgd@gmail.com';
            var done = function () {
                copyBtn.textContent = '✓';
                copyBtn.classList.add('copied');
                setTimeout(function () {
                    copyBtn.textContent = '⧉';
                    copyBtn.classList.remove('copied');
                }, 1600);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(done);
            } else {
                var ta = document.createElement('textarea');
                ta.value = email;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                try { document.execCommand('copy'); done(); } catch (e) {}
                document.body.removeChild(ta);
            }
        });
    }
})();
