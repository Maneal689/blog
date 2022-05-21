---
title: Styled Components et NextJS
hero: https://res.cloudinary.com/practicaldev/image/fetch/s--YxkSW5Ln--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://thepracticaldev.s3.amazonaws.com/i/bc0h3lav5bvg04pn5mxv.png
date: 2022-05-21T13:12:43.210Z
tags:
  - tag: NextJS
  - tag: React
  - tag: Front-end
desc: Utiliser StyledComponent avec NextJS
---
Pour pouvoir utiliser Styled-component avec NextJS sans avoir d'erreur du style \`prop className did not match\`\
Une option est disponible avec NextJS.\
Il faut ajouter dans votre fichier \`next.config.js\` les lignes suivantes:

```
compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
 
```

![test](/img/arch-hero.jpg "Test")

Et voilà, c'est tout ! \
Bonne jouréne :D