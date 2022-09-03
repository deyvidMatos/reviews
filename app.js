// reviews quantidade 5
const reviews = [
    {
        id: 1,
        name: "Steve Rogers",
        job: "Ex-Militar",
        img: "https://pbs.twimg.com/media/E344UiGXIAIFHCf.jpg",
        text: "Steve Rogers, o primeiro Vingador, é o líder da equipe. Ele é um militar que participou do projeto Super-Soldado do Exército dos Estados Unidos durante a Segunda Guerra Mundial. Possui extrema força, resistência, velocidade e reflexos rápidos. Nick Fury o convida para fazer parte da equipe após o super-herói passar décadas preso no gelo.",
    },
    {
        id: 2,
        name: "Tony Stark",
        job: "Play boy e CIO das industrias Stark",
        img: "./images/perfil-tony.png",
        text: " Tony Stark (Homem de Ferro) é um gênio e bilionário que usa suas habilidades e inteligência para desenvolver armas de alta tecnologia. Confiante, costuma transmitir um ar de arrogância, mas conquista a todos com seu humor particular e bom coração.",
    },
    {
        id: 3,
        name: "Bruce Banner",
        job: "cientista e hulk",
        img: "https://i.pinimg.com/originals/cf/8d/cd/cf8dcd889b100552713dcf17452f35ec.png",
        text: " O incrível Hulk surge após o cientista Bruce Banner ter sido exposto acidentalmente a uma alta concentração de raios gama. Bruce é apresentado como alguém tranquilo e de boas maneiras que, quando provocado, se transforma em uma criatura de força e raiva incontroláveis.",
    },
    {
        id: 4,
        name: "Natasha Romanoff",
        job: "espiã da S.H.I.E.L.D",
        img: "https://i.pinimg.com/474x/55/74/3a/55743adc1dadbd2832d6aaf9f90ebce4.jpg",
        text: "Treinada desde jovem para se tornar uma assassina perspicaz, Natasha Romanoff deixou seus mestres para trás e decidiu juntar-se aos mocinhos a partir do momento que entra para Os Vingadores. Apesar de não ter poderes sobre-humanos, ela tem habilidades em artes marciais e tem grande destreza, força e agilidade.",
    },
    {
        id: 5,
        name: "Clint Barton",
        job: "agente da S.H.I.E.L.D",
        img: "https://ovicio.com.br/wp-content/uploads/2021/11/20211122-hawkeye-ovicio-555x555.jpg",
        text: "Exímio atirador e lutador, Clint Barton já fazia parte da S.H.I.E.L.D quando Nick Fury decidiu convidá-lo para se juntar aos Vingadores. Grande amigo de Natasha Romanoff, foi ele quem a convidou para integrar o grupo de super-heróis.",
    },
    {
        id: 6,
        name: "Thor Odin'Son",
        job: "Deus do trovão",
        img: "https://i.pinimg.com/originals/55/dc/74/55dc747815cfe56ee9d2fde6d1a6efea.png",
        text: "Filho de Odin, o Deus do Trovão usa suas habilidades para controlar as forças da natureza e proteger Asgard (seu planeta natal), a Terra e todos os Nove Reinos. Para isso, ele tem a força de seu Mjolnir, um poderoso martelo que seu pai, o Rei de Asgard, lhe deu. Com grande força e resistência, é leal aos seus princípios e aos seus companheiros.",
    }
];

// seleção de itens 
const avatar = document.getElementById("avatar");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");

// valor inicial
let currentItem = 0;

// carregar o valor inicial
window.addEventListener("DOMContentLoaded", function(){
    showPerson()
});

// mostrar review 

function showPerson(){
    const item = reviews[currentItem];
    avatar.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// mostrar proximo

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson();
});

//  mostrar antes

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    showPerson();
});

// mostrar aleatório

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});