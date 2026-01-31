# Guide des Easter Eggs

## 🎁 Easter Eggs Disponibles

### 1. Triple-Clic sur le Titre "About"
**Comment tester :**
1. Scroll jusqu'à la section "About"
2. Triple-clique rapidement sur le titre (là où il y a ton nom)
3. La photo modal devrait s'ouvrir

**Localisation :** Section About, sur le titre principal

---

### 2. Raccourci Clavier : Ctrl+Shift+J
**Comment tester :**
1. N'importe où sur la page
2. Appuie sur `Ctrl` + `Shift` + `J` en même temps
3. La photo modal devrait s'ouvrir/fermer

**Note :** Fonctionne partout sur le site

---

### 3. Easter Egg Temporel (NOUVEAU)
**Comment tester :**

#### Méthode Rapide (pour développement) :
1. Ouvre `app/composables/useTimeTracker.ts`
2. Change `const TRIGGER_TIME = 90` en `const TRIGGER_TIME = 5` (5 secondes au lieu de 90)
3. Recharge la page
4. Attends 5 secondes
5. Une notification devrait apparaître en bas à droite

#### Méthode Normale (production) :
1. Ouvre le site
2. Reste actif sur la page pendant 90 secondes
3. Une notification élégante apparaît en bas à droite
4. Clique dessus pour voir ta photo
5. Ou attends 10 secondes, elle disparaît automatiquement

**Comportement :**
- ✅ Se déclenche après 90 secondes de navigation active
- ✅ Pause si tu changes d'onglet
- ✅ Une seule fois par session (stocké en sessionStorage)
- ✅ Auto-dismiss après 10 secondes
- ✅ Bouton de fermeture disponible

**Pour réinitialiser :**
- Ferme et rouvre l'onglet (nouvelle session)
- Ou ouvre la console et tape : `sessionStorage.removeItem('portfolio_easter_egg_triggered')`

---

## 🧪 Test Complet

```bash
# 1. Ouvre le site
http://localhost:3001/jude/

# 2. Teste le triple-clic
Scroll → Section About → Triple-clic sur le titre

# 3. Teste le raccourci clavier
Ctrl+Shift+J

# 4. Teste l'easter egg temporel (version rapide)
# Modifie TRIGGER_TIME à 5 secondes dans useTimeTracker.ts
# Recharge la page et attends 5 secondes
```

---

## 🔧 Modification du Temps de Déclenchement

**Fichier :** `app/composables/useTimeTracker.ts`

```typescript
// Ligne 9 - Change cette valeur
const TRIGGER_TIME = 90 // secondes

// Pour tester rapidement :
const TRIGGER_TIME = 5 // 5 secondes

// Pour production :
const TRIGGER_TIME = 90 // 90 secondes (recommandé)
```

**N'oublie pas de remettre à 90 avant de déployer !**
