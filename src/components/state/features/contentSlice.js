import { createSlice } from '@reduxjs/toolkit'

const contentSlice = createSlice({
  name: 'content',
  initialState : 
    {
      mentions : [  
        {
        title: "Editeurs",
        text: "Le site web preventioncovid.gouv.fr sous la responsabilité éditoriale de la Direction Générale de la Santé du ministère des solidarités et de la santé, dont le siège est situé 14 avenue Duquesne 75350 Paris cedex 07."
        },
        {
        title: "Directeur de publication",
        text: "Le directeur de la publication du site est Julien AVOT - Attaché de communication du Ministère de la Santé - 14, avenue Duquesne - 75350 Paris cedex 07"
        },
        {
        title: "Objectif du site",
        text: "Le site a pour mission de fournir de l'information officiel concernant l'évolution de la pandémie, la vaccination, les vaccins validés par la HSA ainsi que les centres de vaccinations."
        },
        {
        title: "Développement",
        text: "Le développement du site web est réalisé par la société ForwarDev, sise au 22 Avenue des Accacias 67000 Strasbourg."
        },
        {
        title: "Hébergement",
        text: "L'hébergement des serveurs est assuré par XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        },
        {
        title: "Accès au service",
        text: "Le service est accessible gratuitement, 24h/24, 7 jours sur 7 et sauf cas de force majeure ou maintenance technique depuis tout équipement numérique en capacité d’afficher du contenu web (HTML/CSS/Javascript). Sachez toutefois que la Direction Générale de la Santé a demandé au sous-traitant en charge de développer le service de prendre soin de vérifier que les critères indiqués dans le référentiel général d’amélioration de l’accessibilité (RGAA) soient appliqués le plus tôt possible afin de rendre le site internet accessible au plus grand nombre et plus particulièrement aux personnes ayant un handicap."
        },
        {
        title: "Accessibilité du service",
        text: "Au moment où nous rédigeons ces mentions légales, le site ne peut être déclaré conforme au RGAA version 4. Sachez toutefois que la Direction Générale de la Santé a demandé au sous-traitant en charge de développer le service de prendre soin de vérifier que les critères indiqués dans le référentiel général d’amélioration de l’accessibilité (RGAA)soient appliqués le plus tôt possible afin de rendre le site internet accessible au plus grand nombre et plus particulièrement aux personnes ayant un handicap."
        },
        {
        title: "Réutilisation des contenus",
        text: "Sauf mention contraire indiquée dans les partie ci-dessous, tout utilisation de contenu du site web par un utilisateur est autorisé et gratuite dès lors qu’il respecte les conditions suivantes: ",
        list: [
            'Ne pas modifier ou altérer d’aucune sorte le document reproduit ;',
            'Mentionner explicitement la source en indiquant « Source : Direction Générale de la Santé – suivi du lien vers le contenu d’origine » ;',
            "Indiquer avec précision la date à laquelle le contenu a été extrait au format jj/mm/aaaa hh:mm ;",
            "Indiquer la licence sous laquelle le contenu ou la donnée a été mis à disposition sur le site d’origine ;",
            "N’utiliser les informations qu’à des fins personnelles, associatives ou professionnelles ; toute utilisation à des fins commerciales ou publicitaires étant exclue.",
        ]
        },
        {
        title: "Droit applicable",
        text: "Que ce soit le site web ou l’utilisation qui pourrait en être fait, le droit de référence est celui régis par le droit français, quel que soit le lieu de son utilisation."
        },
        {
        title: "Sources de financement",
        text: "Le portail preventioncovid.gouv.fr est financé intégralement par le ministère des solidarités et de la santé et ne reçoit de ce fait aucun subside privé qui pourrait avoir potentiellement une influence sur son contenu."
        }
    ],
      faq : [
        {
          id: '1',
          question : "Qu'est-ce que la vaccination ?",
          answer: "La vaccination est un moyen simple, sûr et efficace de vous protéger des maladies dangereuses, avant d’être en contact avec ces affections. Elle utilise les défenses naturelles de l’organisme pour créer une résistance à des infections spécifiques et renforcer le système immunitaire. Les vaccins stimulent le système immunitaire pour créer des anticorps, de la même manière que s’il était exposé à la maladie. Mais comme les vaccins ne renferment que des formes tuées ou atténuées des germes, virus ou bactéries, ils ne provoquent pas la maladie et n’exposent pas le sujet à des risques de complications. La plupart des vaccins sont administrés par injection, mais certains se prennent par voie orale ou par aérosol nasal."
        },
        {
          id: '2',
          question : "Comment agit un vaccin ?",
          answer: "Les vaccins réduisent le risque de contracter une maladie en travaillant sur les défenses naturelles de l’organisme pour établir une protection."
        },
        {
          id: '3',
          question : "Pourquoi me faire vacciner ?",
          answer: "Sans les vaccins, nous sommes exposés à de sérieux risques de maladies et d’incapacités dues à des infections comme la rougeole, la méningite, la pneumonie, le tétanos ou la poliomyélite. Nombre de ces maladies sont potentiellement mortelles. Selon les estimations de l’OMS, les vaccins réalisés dans l'enfance permettent à eux seuls de sauver plus de 4 millions de vies par an. Bien que certaines maladies soient devenues rares, leurs agents continuent de circuler dans certaines ou toutes les régions du monde. À l’heure actuelle, les maladies infectieuses peuvent facilement traverser les frontières et infecter toute personne qui n’est pas protégée. Les deux raisons essentielles pour se faire vacciner sont de se protéger soi-même et de protéger son entourage. Comme on ne peut pas vacciner certaines personnes, les très jeunes nourrissons, ceux qui sont gravement malades ou ceux qui ont certaines allergies par exemple, elles dépendent de la vaccination des autres pour être protégées des maladies à prévention vaccinale."
        },
        {
          id: '4',
          question : "Quand dois-je me faire vacciner ?",
          answer: "Les vaccins nous protègent tout au long de la vie, à partir de la naissance, dans l’enfance, l’adolescence et jusqu’à la vieillesse. Dans la plupart des pays, nous recevons une fiche ou un carnet de vaccination nous disant les vaccins que nous ou nos enfants avons eus et les dates des prochains vaccins ou rappels. Il est important de rester à jour de toutes les vaccinations."
        },
        {
          id: '5',
          question : "Quelles maladies les vaccins permettent-ils d'éviter ?",
          answer: "Les vaccins protègent contre de nombreuses maladies, notamment :",
          list: [
            "Le cancer du col de l’utérus",
            "Le choléra",
            "La Covid-19",
            "La diphtérie",
            "La maladie à virus Ebola",
            "L’hépatite B",
            "La grippe",
            "L’encéphalite japonaise",
            "La rougeole",
            "La méningite",
            "Les oreillons",
            "La coqueluche",
            "La pneumonie",
            "La poliomyélite",
            "La rage",
            "Les infections à rotavirus",
            "La rubéole",
            "Le tétanos",
            "La typhoïde",
            "La varicelle",
            "La fièvre jaune",
          ]
        },
        {
          id: '6',
          question : "Qui peut se faire vacciner ?",
          answer: "Presque tout le monde. Toutefois, à cause d’affections médicales spéciales, il ne faut pas administrer certains vaccins à certaines personnes, ou alors elles doivent attendre un peu. "
        },
        {
          id: '7',
          question : "Qu'y a-t-il dans un vaccin ?",
          answer: "Tous les composants jouent un rôle important pour garantir l’innocuité et l’efficacité du vaccin. Les composants des vaccins peuvent paraître étranges lorsqu’on les voit énumérés sur une étiquette. Pourtant, beaucoup d’entre eux sont présents naturellement dans l’organisme, dans l’environnement et dans les aliments que nous consommons. Tous, ainsi que les vaccins eux-mêmes, sont soigneusement testés et contrôlés pour garantir leur innocuité."
        },
        {
          id: '8',
          question : "Les vaccins sont-ils sûrs ?",
          answer: "Les vaccins sont sûrs et leurs effets secondaires sont en général mineurs et temporaires, comme un bras endolori ou une faible fièvre. Des effets indésirables plus sérieux sont possibles, mais extrêmement rares. Tout vaccin homologué subit une batterie de tests rigoureux tout au long des multiples phases des essais avant que son utilisation ne soit approuvée; il est ensuite réévalué régulièrement après son introduction. Les scientifiques surveillent en permanence les informations provenant de plusieurs sources pour y déceler tout signal indiquant que le vaccin peut entraîner des risques pour la santé. Rappelez-vous que vous avez une probabilité bien plus grande d’être gravement atteint par une maladie à prévention vaccinale que par un vaccin. Par exemple, le tétanos peut provoquer des douleurs extrêmes, des spasmes musculaires (trismus) et des caillots sanguins, la rougeole peut entraîner une encéphalite (infection du cerveau) et la cécité. De nombreuses maladies à prévention vaccinale peuvent même provoquer la mort. Les avantages de la vaccination dépassent donc de loin les risques et il y aurait bien plus de cas de maladie et de décès sans les vaccins."
        },
        {
          id: '9',
          question : "Les vaccins ont-ils des effets secondaires ?",
          answer: "Comme tout médicament, les vaccins peuvent avoir des effets secondaires bénins comme un peu de fièvre, une douleur ou une rougeur au point d’injection. Ces réactions disparaissent d’elles-mêmes en quelques jours. Les effets secondaires sévères et durables sont extrêmement rares. On surveille continuellement l’innocuité des vaccins pour détecter des événements indésirables rares."
        },
        {
          id: '10',
          question : "Peut-on administrer à un enfant plusieurs vaccins en même temps ?",
          answer: "Les données scientifiques montrent que l’administration simultanée de plusieurs vaccins n’a pas d’effets négatifs. Chaque jour, les enfants sont exposés à des centaines de substances étrangères déclenchant une réponse immunitaire. Le simple fait de manger entraîne l’introduction de nouveaux germes dans l’organisme et la bouche et le nez abritent de nombreuses bactéries. Lorsque l’association de vaccins est possible (par exemple pour la diphtérie, le tétanos et la coqueluche), on réduit le nombre d’injection et la gêne pour l’enfant. Cela permet aussi d’administrer à l’enfant le bon vaccin au bon moment et d’éviter qu’il ne contracte une maladie potentiellement mortelle."
        },
        {
          id: '11',
          question : "existe-t-il un lien entre les vaccins t l'autisme ?",
          answer: "Rien n’indique qu’il y ait un lien entre les vaccins et l’autisme ou les troubles autistiques. De nombreuses études, menées sur de très grandes populations, ont démontré ce point."
        },
        {
          id: '12',
          question : "Dois-je faire vacciner ma filler contre le papillomavirus humain (PVH) ?",
          answer: "Pratiquement tous les cancers du col de l’utérus commencent par une infection sexuellement transmissible à PVH. Le vaccin est le meilleur moyen de se protéger contre cette maladie s’il est administré avant l’exposition au virus. Des études menées en Allemagne, en Australie, en Belgique, aux États-Unis d’Amérique, en Nouvelle-Zélande, au Royaume-Uni et en Suède ont montré des baisses du nombre des infections allant jusqu’à 90 % chez les adolescentes et les jeunes femmes."
        },
        {
          id: '13',
          question : "Que faire si j'ai encore des question sur la vaccination?",
          answer: "Si vous avez des questions sur les vaccins, parlez-en avec un agent de santé qui pourra vous donner des conseils scientifiques sur la vaccination pour vous et votre famille, notamment sur le calendrier de vaccination recommandé dans votre pays. "
        }
      ],
      centers : [
        {
          id: '1',
          name: 'Nom du centre de vaccination',
          address: 'Adresse du centre de vaccination'
        },
        {
          id: '2',
          name: 'Nom du centre de vaccination',
          address: 'Adresse du centre de vaccination'
        },
        {
          id: '3',
          name: 'Nom du centre de vaccination',
          address: 'Adresse du centre de vaccination'
        },
        {
          id: '4',
          name: 'Nom du centre de vaccination',
          address: 'Adresse du centre de vaccination'
        },
        {
          id: '5',
          name: 'Nom du centre de vaccination',
          address: 'Adresse du centre de vaccination'
        },
        {
          id: '6',
          name: 'Nom du centre de vaccination',
          address: 'Adresse du centre de vaccination'
        },
        {
          id: '7',
          name: 'Nom du centre de vaccination',
          address: 'Adresse du centre de vaccination'
        },
        {
          id: '8',
          name: 'Nom du centre de vaccination',
          address: 'Adresse du centre de vaccination'
        },
        {
          id: '9',
          name: 'Nom du centre de vaccination',
          address: 'Adresse du centre de vaccination'
        },
        {
          id: '10',
          name: 'Nom du centre de vaccination',
          address: 'Adresse du centre de vaccination'
        },
      ],
      articles : [
        {
          id: '1',
          title: "Ouverture de nouveaux centres de vaccination partout en France",
          date: "Vendredi 14 octobre",
          abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dui risus. Donec aliquet ornare congue. Integer malesuada libero et facilisis placerat. Quisque arcu enim,vehicula ut malesuada et, eleifend vel odio. Nullam vitae eleifend nunc. Donec ut tincidunt dui. Ut molestie neque sed mi cursus, at scelerisque elit fringilla. Vestibulum eutincidunt dui."
        },
        {
          id: '2',
          title: "Titre de l'article",
          date: "Vendredi 14 octobre",
          abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dui risus. Donec aliquet ornare congue. Integer malesuada libero et facilisis placerat. Quisque arcu enim,vehicula ut malesuada et, eleifend vel odio. Nullam vitae eleifend nunc. Donec ut tincidunt dui. Ut molestie neque sed mi cursus, at scelerisque elit fringilla. Vestibulum eutincidunt dui."
        },
        {
          id: '3',
          title: "Titre de l'article",
          date: "Vendredi 14 octobre",
          abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dui risus. Donec aliquet ornare congue. Integer malesuada libero et facilisis placerat. Quisque arcu enim,vehicula ut malesuada et, eleifend vel odio. Nullam vitae eleifend nunc. Donec ut tincidunt dui. Ut molestie neque sed mi cursus, at scelerisque elit fringilla. Vestibulum eutincidunt dui."
        },
        {
          id: '4',
          title: "Titre de l'article",
          date: "Vendredi 14 octobre",
          abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dui risus. Donec aliquet ornare congue. Integer malesuada libero et facilisis placerat. Quisque arcu enim,vehicula ut malesuada et, eleifend vel odio. Nullam vitae eleifend nunc. Donec ut tincidunt dui. Ut molestie neque sed mi cursus, at scelerisque elit fringilla. Vestibulum eutincidunt dui."
        },
        {
          id: '5',
          title: "Titre de l'article",
          date: "Vendredi 14 octobre",
          abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dui risus. Donec aliquet ornare congue. Integer malesuada libero et facilisis placerat. Quisque arcu enim,vehicula ut malesuada et, eleifend vel odio. Nullam vitae eleifend nunc. Donec ut tincidunt dui. Ut molestie neque sed mi cursus, at scelerisque elit fringilla. Vestibulum eutincidunt dui."
        },
        {
          id: '6',
          title: "Titre de l'article",
          date: "Vendredi 14 octobre",
          abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dui risus. Donec aliquet ornare congue. Integer malesuada libero et facilisis placerat. Quisque arcu enim,vehicula ut malesuada et, eleifend vel odio. Nullam vitae eleifend nunc. Donec ut tincidunt dui. Ut molestie neque sed mi cursus, at scelerisque elit fringilla. Vestibulum eutincidunt dui."
        },
        {
          id: '7',
          title: "Titre de l'article",
          date: "Vendredi 14 octobre",
          abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dui risus. Donec aliquet ornare congue. Integer malesuada libero et facilisis placerat. Quisque arcu enim,vehicula ut malesuada et, eleifend vel odio. Nullam vitae eleifend nunc. Donec ut tincidunt dui. Ut molestie neque sed mi cursus, at scelerisque elit fringilla. Vestibulum eutincidunt dui."
        },
        {
          id: '8',
          title: "Titre de l'article",
          date: "Vendredi 14 octobre",
          abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dui risus. Donec aliquet ornare congue. Integer malesuada libero et facilisis placerat. Quisque arcu enim,vehicula ut malesuada et, eleifend vel odio. Nullam vitae eleifend nunc. Donec ut tincidunt dui. Ut molestie neque sed mi cursus, at scelerisque elit fringilla. Vestibulum eutincidunt dui."
        },
        {
          id: '9',
          title: "Titre de l'article",
          date: "Vendredi 14 octobre",
          abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dui risus. Donec aliquet ornare congue. Integer malesuada libero et facilisis placerat. Quisque arcu enim,vehicula ut malesuada et, eleifend vel odio. Nullam vitae eleifend nunc. Donec ut tincidunt dui. Ut molestie neque sed mi cursus, at scelerisque elit fringilla. Vestibulum eutincidunt dui."
        },
        {
          id: '10',
          title: "Titre de l'article",
          date: "Vendredi 14 octobre",
          abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a dui risus. Donec aliquet ornare congue. Integer malesuada libero et facilisis placerat. Quisque arcu enim,vehicula ut malesuada et, eleifend vel odio. Nullam vitae eleifend nunc. Donec ut tincidunt dui. Ut molestie neque sed mi cursus, at scelerisque elit fringilla. Vestibulum eutincidunt dui."
        },

      ]
    }

})

export default contentSlice.reducer