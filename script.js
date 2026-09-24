//isi biodata per member
const membersData = {
    jiwoo: {
        name: "Jiwoo (지우)",
        role: "Leader, Dancer, Rapper, Vocalist, Visual",
        img: "images/jiwoo.jpg",
        bio: `
            <p>Jiwoo is a dependable and organized member with a shy yet charming personality. 
            After six years of training, she brings her bright energy and unique talents to Hearts2Hearts. 
            A former ballet student who loves strawberries, perfumes, amusement parks, and snowy days, 
            Jiwoo is also known for her love of photography and her adorable dog, Kong.</p>
        `
    },
    carmen: {
        name: "Carmen (카르멘)",
        role: "Vocalist",
        img: "images/carmen.jpg",
        bio: `
            <p>Born in Bali, Carmen shines as the “Sunshine” of Hearts2Hearts with her bright and positive energy. 
            As the first Indonesian idol to debut under SM Entertainment, she brings her unique talents and warm personality to the group. 
            She can play four instruments, loves cooking and baking, and has a soft spot for ice cream, cats, and sunny days.</p>
        `
    },
    yuha: {
        name: "Yuha (유하)",
        role: "Vocalist, Dancer",
        img: "images/yuha.jpg",
        bio: `
            <p>Known as the “All-Rounder” of Hearts2Hearts, Yuha charms fans with her beautiful voice, powerful dancing, and bright personality. After eight years of training, she brings her many talents to the group, including her skills as a pianist with perfect pitch. With her love for Disney, ribbons, flowers, and all things cute, Yuha carries a sweet and cheerful charm wherever she goes.</p>
        `
    },
    stella: {
        name: "Stella (스텔라)",
        role: "Vocalist",
        img: "images/stella.jpg",
        bio: `
            <p>With her bright eye smile and charming cat-like personality, Stella brings a playful energy to Hearts2Hearts. 
            Having grown up between Canada and Korea, she is fluent in both English and Korean and has a passion for music, playing guitar, bass, and drums. 
            A lover of desserts, cats, and all things cute, Stella’s soft yet charismatic charm makes her shine in her own way.</p>
        `
    },
    juun: {
        name: "Juun (주은)",
        role: "Main Dancer, Rapper, Vocalist",
        img: "images/juun.jpg",
        bio: `
            <p>With her husky voice and gentle personality, Juun brings a calm yet captivating charm to Hearts2Hearts. 
            Discovered through her dance videos, she trained for four to five years and developed a strong passion for choreography. 
            Known as the group’s “Super Cutie,” Juun loves dancing, lavender, ice cream, and whimsical worlds like Studio Ghibli and Harry Potter.</p>
        `
    },
    ana: {
        name: "A-na (에이나)",
        role: "Rapper, Vocalist, Visual",
        img: "images/ana.jpg",
        bio: `
            <p>Bright, bubbly, and full of energy, A-na is the “Firecracker” of Hearts2Hearts. 
            With her quirky personality and playful sense of humor, she brings endless energy to the group. 
            A movie-loving homebody who adores pastel colors, winter, ice cream, and sunflowers, A-na’s cheerful charm is impossible to miss.</p>
        `
    },
    ian: {
        name: "Ian (이안)",
        role: "Dancer, Vocalist, Visual, Center",
        img: "images/ian.jpg",
        bio: `
            <p>Ian is the mood-maker of Hearts2Hearts, known for her bright energy, playful personality, and love of making others laugh. 
            A former child model, she was discovered by SM Entertainment through Instagram and trained for three to four years before debuting. 
            She enjoys running, sports, collecting perfumes, and listening to R&B, while winter, cherries, and chocolate ice cream are among her favorite things. 
            With her cheerful spirit and endless energy, Ian brings a fun and lively atmosphere to the group.</p>
        `
    },
    yeon: {
        name: "Ye-on (예온)",
        role: "Vocalist, Maknae",
        img: "images/yeon.jpg",
        bio: `
            <p>As the maknae of Hearts2Hearts, Ye-on shines with her bright smile and gentle, thoughtful personality. 
            A talented vocalist with a love for musicals, she brings a sweet yet surprisingly mature charm to the group. 
            She enjoys listening to music, sewing, shopping, and all things cute, with cats, yellow, and sweet treats among her favorite things. Her radiant eye-smile is truly her signature.</p>
        `
    }
};

function selectMember(memberKey) {
    const data = membersData[memberKey];
    if (!data) return;

    document.getElementById('soloImg').src = data.img;
    document.getElementById('soloName').textContent = data.name;
    document.getElementById('soloRole').textContent = data.role;
    document.getElementById('soloBio').innerHTML = data.bio;

    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        if (btn.getAttribute('data-member') === memberKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.getElementById('solo-section').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {

    // 1. MENU MOBILE TOGGLE
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const memberKey = btn.getAttribute('data-member');
            selectMember(memberKey);
        });
    });

    const heroBanner = document.querySelector('.hero-banner');
    window.addEventListener('scroll', () => {
        if (heroBanner) {
            let scrollPosition = window.scrollY;
            let opacityValue = 1 - (scrollPosition / 400);
            if (opacityValue >= 0) {
                heroBanner.style.opacity = opacityValue;
            } else {
                heroBanner.style.opacity = 0;
            }
        }
    });

    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 120;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});