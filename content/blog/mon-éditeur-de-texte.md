---
title: Mon éditeur de texte
hero: /img/2020-06-09-170245_1920x1080_scrot.png
date: 2020-06-09T15:02:54.464Z
tags:
  - tag: environnement
  - tag: vim
desc: J'ai longtemps cherché à améliorer mes éditeurs de texte. Les rendre plus
  rapide pour mon utilisation, les personnaliser, leur ajouter des
  fonctionnalités, et essayer de le rendre le plus agréable possible pour moi.
  Voici maintenant 4 ans que j'utilise VIM.
---
En tant que développeur, je passes la majeure partie de mon temps dans mon éditeur de texte (et sur google, mais chut :p). Il fait donc partie intégrante de mon environnement et passer du temps à le configurer me paraît être un investissement clairement rentable/nécessaire pour travailler dans des conditions agréables. Un éditeur en particulier à touché mon intérêt: ***(neo)vim***.

## (neo)Vim

Vim est un éditeur de texte *modal*. Ce qui signifie, que les touches du clavier, peuvent, selon le mode actuel, causer des actions différentes. En bref, en mode *insertion* les touches alphanumérique vont permettre d'insérer du texte comme dans n'importe quel autre éditeur, tandis qu'en mode *normal*/commande, les touches effectueront différentes actions, comme supprimer (d), avancer d'un mot (w), d'un paragraphe (p), les actions pouvant être combinées: supprimer un paragraphe (dp), supprimer l'intérieur de guillemets (di"). En très gros, les commandes se séparent principalement en trois types: action, mouvement, compte, et les commandes sont du style \[compte]\[action]\[mouvement] (par exemple supprimer 3 mots: 3dw ou d3w (l'ordre a une importance pour le undo. Le premier va répéter 3 fois l'action "supprimer un mot", tandis que le deuxième va effectuer 1 seule fois "supprimer 3 mots")). Je ne rentrerai pas dans les détails, car ce n'est pas le but de cet article, et il existe déjà pleins d'autre articles qui expliqueront bien mieux que moi les bases de VIM (voir [cet article](https://blog.flozz.fr/2019/11/18/pourquoi-jutilise-vim-et-pourquoi-vous-ne-devriez-pas-lutiliser/) et [ce livre](https://vimebook.com/fr) (gratuit)).

### (neo)Vim contre le monde

J'ai passé énormément de temps à chercher le bon éditeur de texte, à en essayer pleins, pleins, pleins...\
Je suis passé par CodeBlock, Emacs, Atom, VSCode, Gedit, Sublime Text... Dans cette liste seuls 2 éditeurs ont retenu mon attention en dehors de vim: *Emacs*, *VSCode* (même si Sublime Text me paraissait bien, je n'ai pas réussi à accrocher réellement du fait qu'il ne soit pas open source et de la gestion des plugins).\
J'ai passé énormément de temps à essayer de configurer Emacs, mais sa configuration me paraissait compliquée et le fait d'avoir à utiliser encore un autre langage pour le configurer, même pour les choses les plus simples m'a assez vite découragé. De plus je trouvais l'auto-complétion moins performante que sur ses concurrents (vim avec le plugin coc ou VSCode), et j'ai eu plusieurs problème pour mettre en place le formatage automatique de fichiers JSX par exemple, ce qui n'a pas aidé. Je l'ai quand même utilisé un certain temps avec le mode evil (fonctionnement équivalent à vim pour l'édition dans Emacs). Je trouvais l'éditeur vraiment puissant, mais je pouvais avoir l'équivalent sur vim avec une configuration bien plus claire (et oui, je n'ai pas besoin d'un psychologue dans mon éditeur de texte, désole Emacs :p).

J'ai, plus récemment, essayé VSCode, que m'a vraiment conquis. Toujours avec le plugin vim, cet éditeur est vraiment bien fait, il est très élégant, il permet l'ajout de plugins très facilement, et est soutenu par une très grande communauté. Les seuls défauts que j'ai pu lui trouver sont: quelques lenteurs avec l'utilisation du plugin vim et l'utilisation excessive de la RAM. Et comme vim présente toutes les fonctionnalités que j'utilise le plus avec VSCode, j'ai préféré revenir sur Vim.

### La force de (neo)vim

J'utilise presque exclusivement *neovim* depuis bientôt 1an. Je ne vois pas de réelle différence entre vim et neovim, les seules raisons pour lesquelles je préfère neovim sont: l'emplacement de la configuration par défaut de neovim, l'aspect plus moderne de neovim (refonte du code source).

![capture d'écran vim](/img/2020-06-09-170245_1920x1080_scrot.png "vim screenshot")

Vim est un éditeur très perfomant, il est léger et simple de configuration. Il est très facile d'ajouter différents plugins développés par la communauté, et de plus la documentation sur l'éditeur est très complète. C'est un éditeur modal, et il permet donc de ne pas avoir besoin de toucher à la souris, ce qui permet: 1. d'être plus rapide, 2. de reposer le poignet. Les différents modes permettent en plus de ça, d'éditer de façon très rapide, et avec l'habitude, cela devient très plaisant d'éditer du code à l'aide de vim. Les différentes commandes, et mouvements proposés par vim permettent de se déplacer et d'effectuer des changements sur le code très facilement et de manière très intuitive (avec de l'habitude). Il s'agit quasiment d'un nouveau langage, et il est très plaisant de l'utiliser avec de l'expérience. En plus de cela vim permet, à l'aide des plugins d’élargir les possibilités, d'actions et de mouvements, mais aussi de compléter l'environnement de développement par exemple à l'aide de l'auto-complétion (j'utilise coc.vim pour l'auto-complétion qui permet d'utiliser le même moteur qu'utilise VSCode), le lintage/formatage (j'utilise ici ALE, qui permet d'utiliser différents moteurs afin de linter/fixer pour de très nombreux langages), la recherche de fichiers/buffers/etc... (avec par exemple fzf.vim, qui permet de faire une recherche approximative sur les fichier/buffers/tags/termes/etc...), la gestion de sessions pour se souvenir des différents buffers/tab/split (avec la commande :mksession ou à l'aide du plugin Obsession pour gérer tout cela automatiquement) etc etc...

Voici pour les basiques, mais vim permet tout un tas d'actions supplémentaires, notamment avec les *macros* pour automatiser certains traitements, les *registres* qui vont de paire avec les macros, et qui permettent de sauvegarder des bouts de textes ou de commandes, les *marques* pour pouvoir retourner à certains endroits du code très facilement, les *buffers* que vim utilise pour gérer les différents fichiers que vous ouvrez et qui vous permet de switcher facilement d'un fichier à l'autre dans un même projet.