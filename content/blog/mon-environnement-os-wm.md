---
title: Mon environnement (os/wm)
hero: /img/arch_linux_light.png
date: 2020-05-15T23:51:09.258Z
tags:
  - tag: environnement
  - tag: wm
  - tag: bureau
desc: Après plusieurs dizaines de tests de distributions, de gestionnaires de
  bureaux, j'ai enfin réussi à trouver l'environnement qui me correspond!
---
J'ai passé beaucoup de temps à essayer différentes distributions *Linux*, mais je n'ai jamais réussi à rester très longtemps sur l'une d'elles.

## Distribution

Cela fait 3 ans que je n'ai pas changé/réinstallé de distribution, même si avant cela je changeais régulièrement, et suis passé par les plus connues d'entre elles: Manjaro, Ubuntu, Kubuntu, Antergos, Debian, Fedora, Deepin...

J'ai vite été lassé de ne pas réussir à trouver une distribution qui soit *légère*, *ultra personnalisable*, qui possède un gestionnaire de paquets *rapide* et "bien fourni" (sans avoir sans arrêt à rajouter des sources externes), et surtout, une distribution en *rolling release* qui ne m'oblige pas à réinstaller le système à chaque nouvelles versions.

Il ne restait plus trop de choix, pour pouvoir choisir tout ce qui composerait mon nouvel environnement, avoir un OS en rolling release, et un gestionnaire de paquet bien fourni, le meilleur candidat était *Arch-linux* qui me rebutait pourtant tellement dû aux mauvaises rumeurs sur son instabilité, et la complexité de son installation.\
Mais pourtant, voilà, il répondait à tous mes critères alors pourquoi pas le tester ?

Très bon choix! Après installation périlleuse (qui n'est finalement pas si difficile) Arch-linux a su répondre à toutes mes attentes. Malgré les mauvaises rumeurs, avec le noyau stable de arch-linux, je n'ai toujours pas eu de gros problèmes m'obligeant à réinstaller l'OS. Le gestionnaire de paquets *pacman* (et *trizen*) fait des merveilles et me donne l'accès à toutes les dernière versions de mes logiciels favoris sans avoir à ajouter manuellement telle ou telle source externe. J'ai pu réellement choisir les paquets installés sur ma machine, ce système prend donc très peu de place sur ma machine par rapport aux autres distributions/OS. Il est également plus rapide, et surtout, je sais exactement ce qu'il s'y passe (oui bon, peut-être pas exactement, mais l'idée est là :p).

Seulement, voilà, au départ, ce qui nous attend, c'est une invite de commande, c'est tout.

## Gestionnaire de bureau

J'ai d'abord choisi d'installer *Gnome*, qui ne m'avait pas déplu dans mes anciennes installations de *Debian*. Il aura su me ravir durant de longs mois, avant que je ne tombe sur un article parlant des *tiling window manager* et en particulier de *i3*. Le concept m'a vraiment paru intéressant: plusieurs bureaux, on peut switcher via de simples raccourcis; aucune fenêtre ne se chevauche, on voit tout, tout le temps, et surtout, plus besoin de la souris! Un vrai gain de temps, et surtout, un vrai confort!

J'ai alors commencé ma longue quête en vue de la meilleure configuration. Je n'ai pas su rester sur i3, à cause de son fichier de configuration que je trouvais trop fouillis. Je suis ensuite passé sur *Awesome* qui cette fois m'a paru un peu trop lourd ? Ou peut-être que c'était à cause de sa configuration également que je trouvais trop lourde, trop peu compréhensible. J'ai fini par trouver celui qui me correspondait: *bspwm*. Il est simple, rapide, et léger. Sa configuration se fait dans un seul fichier, et la gestion des raccourcis se fait à l'aide d'un autre programme: *sxhkd*, qui permet de récupérer les saisies clavier et d'effectuer n'importe quelle action en conséquence. La division des tâches me paraît sensée, et je trouve la configuration plus aérée et compréhensible que dans n'importe quel autre **TWM** que j'ai pu tester.

## Le terminal

Voilà, le plus important pour tout développeur: le *terminal*. Je code essentiellement avec *neovim*, je passe donc le plus clair de mon temps, dans un terminal. Après l'installation d'un **TWM**, j'étais bien parti pour optimiser mon terminal. Je ne voulais pas utiliser de gros émulateur de terminal, comme terminator, que j'avais déjà pu tester. Je voulais vraiment trouver une solution légère et fonctionnelle.

Après quelques recherches je suis tombé sur *tmux*, un vrai bonheur! Il peut se lancer via n'importe quel terminal, il permet d'avoir plusieurs sessions. Chaque session peut être composée de plusieurs fenêtres (window). et chaque fenêtre peut être composée de plusieurs terminaux (pane) séparés verticalement ou horizontalement, à volonté. Autant vous dire que vous ne serez pas en reste! De plus il se couple réellement bien avec *vim* car ils peuvent utiliser (à l'aide d'un plugin) une navigation par pane similaire. C'est à dire qu'avec le même raccourcis, vous pouvez naviguer entre les splits de vim et les pane de tmux comme si c'était la même chose.

## Finalement

Voici donc mon installation actuelle. Je penses avoir expliqué l'essentiel du pourquoi chacun de ces outils. Je referai sûrement un/des post(s) plus précis sur bspwm, sxhkd ou tmux pour donner plus de conseils sur comment les utiliser/configurer. Même si ces premiers posts sont très narratifs, plus on avancera plus j'ajouterai de sujets concrets sur des points bien plus spécifiques au développement en général et aux outils que j'utilise chaque jours.