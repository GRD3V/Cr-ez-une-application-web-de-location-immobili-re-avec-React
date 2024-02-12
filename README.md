# Créez une application web de location immobilière avec React

# Démarrer avec le projet

```bash
yarn install
yarn start:dev
```

---

![Bannière scénario](https://user.oc-static.com/upload/2022/06/28/16564030859322_Banner_Sce%CC%81nario.png)
Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !

![Image d'une chambre d'hôtel avec le logo de Kasa.](https://user.oc-static.com/upload/2022/06/24/16560899769906_FR_811_P8_Banner-Kasa%20%281%29.png)

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

Un point est prévu avec la CTO plus tard dans la semaine, mais pour que vous puissiez vous familiariser avec les enjeux de votre mission, vous trouvez le récapitulatif suivant dans votre boîte mail :

> **Objet :** Brief refonte site Kasa
> **De :** Laura
> **À :** Vous
>
> Hello,
>
> Bienvenue pour ton premier jour !
> On est vraiment ravis de te compter parmi nous !
> Tu vas pouvoir nous aider à donner vie à un chantier sur lequel on travaille depuis plusieurs mois.
> Je préfère te mettre par écrit quelques éléments de contexte qui t'aideront à te projeter dans ta mission avant notre point de jeudi.
>
> **Ton objectif** : Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité !
>
> **Back-end / data** : Le recrutement de la personne en charge du back-end n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans [ce fichier JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json) pour que tu puisses construire le Front qui correspond.
>
> **Contraintes techniques** : Tu trouveras les [coding guidelines de Kasa ici](https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf).
> Voilà, j'espère que ce petit récapitulatif t'aura donné suffisamment de pistes pour aborder sereinement tes premiers jours chez nous.
> Très bonne journée à toi !
> **Laura**

Plus tard dans la journée, vous recevez un e-mail de Paul, le designer, qui vous donne plus d’informations sur le design et les fonctionnalités du site.

> **Objet :** Fonctionnalité et design
> **De :** Paul
> **À :** Vous
>
> Salut,
>
> Bienvenue parmi nous ! Laura m’a dit de te briefer sur le design de la nouvelle version du site, alors voici les infos clés.
> **Design**
> Voici les maquettes sur Figma pour le design d’interface. J’ai l’habitude de travailler avec la logique de composants sur Figma ; Sandra m’a dit que ça te faciliterait le travail sur React. Tu trouveras toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer sur la ressource souhaitée et de faire "Exporter" au format voulu.
>
> **Contraintes fonctionnelles**
>
> - Quelques précisions sur les fonctionnalités du site :
>   - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
>   - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
>   - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
> - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
> - Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.
> - Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
>   - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
>
> Bon courage pour le développement, j’ai hâte de voir ce que ça va donner !
> **Paul**

Ça y est, vous avez toutes les informations nécessaires, vous pouvez démarrer votre développement !

> ### Rappel
>
> Pour rappel, afin de vous aider à réaliser ce projet, vous pouvez consulter **[ce guide d’étapes à suivre](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Guide+d%27etapes+cles+-+Creez+une+application+web+de+location+immobiliere+avec+React.pdf)**, qui contient des recommandations et des ressources pour organiser votre travail.

![Bannière livrables](https://user.oc-static.com/upload/2022/06/27/16563220599551_Banner_Livrables.png)

- Un fichier au format TXT ou PDF comprenant le lien vers votre code sur GitHub contenant l’ensemble du projet, à savoir :
  - le code React de l’application ;
  - le code React Router pour les routes dans un fichier dédié.

> ### Rappel
>
> Pour faciliter votre passage devant le jury, déposez sur la plateforme, dans un dossier ZIP nommé **“Titre_du_projet_nom_prénom”**, tous les livrables du projet comme suit : **Nom_Prénom_n° du livrable_nom du livrable\_\_date de démarrage du projet**. Cela donnera :
>
> - Nom_Prénom_1_lien_repo_github_mmaaaa ;
>
> Par exemple, le premier livrable peut être nommé comme suit : Dupont_Jean_1_lien_repo_github_012022.

![Bannière soutenance](https://user.oc-static.com/upload/2022/06/22/16559012528213_Banner_Soutenance_Dev.png)

Durant la présentation orale, l’évaluateur interprétera le rôle du CTO. La soutenance est structurée de la manière suivante :

- **Présentation des livrables (15 minutes)**

  - Présentation des différentes pages, avec la navigation entre elles, et les interactions avec tous les éléments interactifs.
  - Parcours des fichiers de code avec le mentor. Mise en avant des différents composants React.

- **Discussion (10 minutes)**

  - Le mentor, qui joue le rôle du CTO, posera des questions sur la méthodologie adoptée et sur les livrables.
  - Le mentor challengera au maximum les décisions techniques que vous avez prises ; il faudra donc que vous soyez capable de les justifier, et de défendre votre travail.

- **Débriefing (5 minutes)**
  - À la fin de la soutenance, l'évaluateur arrêtera de jouer le rôle du CTO pour vous permettre de débriefer ensemble.

> ### Attention
>
> Votre présentation devra durer 15 minutes (+/- 5 minutes). Puisque le respect des durées des présentations est important en milieu professionnel, les présentations en dessous de 10 minutes ou au-dessus de 20 minutes peuvent être refusées.

#### Compétences évaluées

- Configurer la navigation entre les pages de l'application avec React Router
- Initialiser une application avec Create React App
- Développer des éléments de l'interface d'un site web grâce à des composants React
