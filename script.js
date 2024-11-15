document.addEventListener("DOMContentLoaded", function () {
    // Giriş Yap/Üye Ol metin güncelleme
    const loginButton = document.getElementById('login-button');
    const btnPrimary = document.querySelector('.btn-primary');
    function updateLoginText() {
        if (window.innerWidth <= 990) {
            if (loginButton) loginButton.textContent = 'Giriş Yap';
        } else {
            if (loginButton) loginButton.textContent = 'Giriş Yap / Üye Ol';
        }

        if (window.innerWidth < 576) {
            if (btnPrimary) btnPrimary.textContent = 'Üye Ol';
        } else {
            if (btnPrimary) btnPrimary.textContent = 'Giriş Yap';
        }
    }

    // Başlangıç için tetikleme
    updateLoginText();
    
    // Pencere yeniden boyutlandırma olaylarını dinler
    window.addEventListener('resize', updateLoginText);

    // Navbar scroll animasyonu
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
        if (navbar) {
            if (window.scrollY > 20) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    });

    // Scroll için görüntü ölçekleme ve animasyon
    const screenImage = document.getElementById("screen-image");
    const textSection = document.getElementById("text-section");
    let isImage1 = true;
    const section = document.querySelector('.scroll-animation-section');

    window.addEventListener("scroll", () => {
        if (section && screenImage) {
            const sectionPosition = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionPosition < windowHeight && sectionPosition > -section.offsetHeight) {
                const scrollRatio = (windowHeight - sectionPosition) / windowHeight;
                const scale = 1.3 + scrollRatio * 0.3;
                screenImage.style.transform = `scale(${scale.toFixed(2)})`;
            }
        }
    });

    // Görüntüleri ve metinleri belirli bir süre sonra değiştirme
    setInterval(() => {
        if (screenImage && textSection) {
            if (isImage1) {
                screenImage.src = "/img/feature2.svg";
                textSection.innerHTML = `
                    <h3>Sadece 2 dakikada tüm teklifleri kolayca karşılaştır.</h3>
                    <p>20+ sigorta şirketinden teklifleri tek platformda karşılaştır, internete özel indirimlerle uygun fiyata sigortan anında başlasın.</p>
                `;
            } else {
                screenImage.src = "/img/feature1.svg";
                textSection.innerHTML = `
                    <h3>Hangi ürün bana en uygun diye düşünme, biz senin için en net teklifleri sıraladık bile!</h3>
                    <p>Tüm teminatları tek tek inceledik, ihtiyaçlarına en uygun olan teminatları belirledik. Sana özel kapsamlı ve fiyatı uygun ürün önerileri hazırladık.</p>
                `;
            }
            isImage1 = !isImage1;
        }
    }, 3000);
});




