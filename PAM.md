# Points d'améliorations

## 1 - Section Veille Technologique

**PB :** Le contenu est à ajouter

Choisir un rendu esthétique

## 2. Images placeholder à remplacer

**PB :** Il n'y a pas de réelles images pour l'
- https://unsplash.com (images gratuites)


Réduire la taille des images :

```
# Installer Squoosh CLI (outil Google)
npm install -g @squoosh/cli

# Convertir toutes les images en WebP
squoosh-cli --webp '{"quality":85}' assets/image/*.{jpg,png}

# Résultat : Réduction de 60-80% de la taille
```

## 3 - Ajouter un sitemap.xml

Pensez à ajouter ce fichier à la racine du projet

```
html<link rel="sitemap" type="application/xml" href="/sitemap.xml">
```

