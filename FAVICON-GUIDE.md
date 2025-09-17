# Génération des Icônes Qizuna

## 🎨 Icônes Nécessaires

Pour un rendu optimal sur tous les appareils, vous devez créer les icônes suivantes à partir de votre logo Qizuna :

### 📱 Favicons Standard
- `favicon.ico` (16x16, 32x32) - Icône dans l'onglet navigateur
- `favicon-16x16.png` (16x16) - Petite icône navigateur
- `favicon-32x32.png` (32x32) - Icône navigateur standard

### 🍎 iOS/Apple
- `apple-touch-icon.png` (180x180) - Icône sur écran d'accueil iOS

### 🤖 Android/Google
- `android-chrome-192x192.png` (192x192) - Icône Android standard
- `android-chrome-512x512.png` (512x512) - Icône Android haute résolution

### 🪟 Windows
- `mstile-150x150.png` (150x150) - Tuile Windows

## 🛠️ Comment Générer

### Option 1: Outils en ligne (Recommandé)
1. **RealFaviconGenerator** : https://realfavicongenerator.net/
2. **Favicon.io** : https://favicon.io/favicon-converter/
3. **Favicons Generator** : https://www.favicongenerator.com/

### Option 2: Photoshop/GIMP
1. Ouvrir votre logo Qizuna
2. Redimensionner aux tailles requises
3. Exporter en PNG/ICO selon le format

### Option 3: ImageMagick (CLI)
```bash
# Depuis votre logo.webp
magick logo.webp -resize 16x16 favicon-16x16.png
magick logo.webp -resize 32x32 favicon-32x32.png
magick logo.webp -resize 180x180 apple-touch-icon.png
magick logo.webp -resize 192x192 android-chrome-192x192.png
magick logo.webp -resize 512x512 android-chrome-512x512.png
magick logo.webp -resize 150x150 mstile-150x150.png
```

## 📂 Placement des Fichiers

Tous les fichiers d'icônes doivent être placés dans le dossier `public/` :

```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── mstile-150x150.png
├── site.webmanifest
└── browserconfig.xml
```

## ✅ Vérification

Après génération, vérifiez que :
1. Le favicon s'affiche dans l'onglet du navigateur
2. L'icône apparaît lors de l'ajout aux favoris
3. L'écran d'accueil mobile affiche la bonne icône

## 🎯 Recommandations Design

- **Simplicité** : Le logo doit rester lisible en 16x16 pixels
- **Contraste** : Bonne visibilité sur fond clair et sombre
- **Cohérence** : Même identité visuelle sur toutes les tailles
- **Format** : Privilégier les contours nets pour les petites tailles

---

**Note** : En attendant la génération de toutes ces icônes, votre logo WebP actuel fonctionne déjà comme favicon de base.