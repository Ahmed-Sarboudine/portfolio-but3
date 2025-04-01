import MakeTheCub from '../assets/projectImg/MakeTheCub.png';
import backPackHero from '../assets/projectImg/backpackHero.webp';
import banklink from '../assets/projectImg/BANKLINK.png';
import battleball from '../assets/projectImg/battleball.png';
import codec from '../assets/projectImg/codec.jpg';
import hedelma from '../assets/projectImg/hedelma.png';
import semantic from '../assets/projectImg/Semantic.png';
import tgv from '../assets/projectImg/tgv.jpg';


export const projectsData = [
    {
        id: 1,
        projectName: 'Make The Cub',
        projectDesc: 'Site de réservation de conteneurs aménagés avec un système de pré-visualisation 3d pour la ville de Noisy-le-grand',
        tags: ['Django', 'Python' ,'React', 'Javascript'],
        code: 'https://github.com/MatisVivier/sae_but',
        image: MakeTheCub
    },
    {
        id: 2,
        projectName: 'Semantic Analogy Explorer',
        projectDesc: 'Il s\'agit d\'un jeu où l\'utilisateur doit créer une chaîne de mots avec des similarités fortes',
        tags: ['PHP', 'JAVA','C'],
        code: 'https://github.com/abdelrkb/SAE_SEMANTIC',
        image: semantic
    },
    {
        id: 3,
        projectName: 'BackPackHero Clone',
        projectDesc: 'L\'objectif était de recréer le jeu BackPackHero disponible sur Steam en JAVA',
        tags: ['JAVA'],
        code: 'https://github.com/Thiiiv/BackPackHero',
        image: backPackHero
    },
    {
        id: 4,
        projectName: 'Battle Ball',
        projectDesc: 'Jeu réaliser en python avec une bibliothèque universitaire ayant pour but de peindre une zone avec sa couleur',
        tags: ['Python',],
        code: 'https://github.com/cedric-mc/Banklink',
        image: battleball
    },
    {
        id: 5,
        projectName: 'BanLink',
        projectDesc: 'Projet réaliser afin de similuler les activités d\'une banque et voir les montants des différents type de clients et voir des graphiques',
        tags: ['PHP', 'PostgreSQL'],
        code: 'https://github.com/cedric-mc/Banklink',
        image: banklink
    },
    {
        id: 6,
        projectName: 'Codec',
        projectDesc: 'Projet en C permettant de compresser/décompresser un fichier image en utilisant un algorithme pseudo Huffman',
        tags: ['C', ''],
        code: 'https://github.com/cedric-mc/CoDec',
        image: codec
    },
    {
        id: 7,
        projectName: 'Hedelma',
        projectDesc: 'Site web permettant de commander des fruits et légumes en ligne',
        tags: ['PHP', 'PostgreSQL',],
        code: 'https://github.com/cedric-mc/Hedelma',
        image: hedelma
    },
    {
        id: 8,
        projectName: 'tgv',
        projectDesc: 'Site web permettant de reserver des billet de train',
        tags: ['React', 'Bootstrap','MongoDB'],
        code: 'https://github.com/guguscrtl/projet-voyage-en-TGV',
        image: tgv
    },

]


/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/