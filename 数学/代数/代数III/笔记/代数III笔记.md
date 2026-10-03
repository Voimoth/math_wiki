---
title: 群论讲义 Cours de Groupes (Marc Rosso)
created: 2026-09-01
updated: 2026-10-03
type: entity
tags: [group-theory, algebre, cours]
sources: [Cours USTC 01-09-26.pdf, 代数III.pdf, 扫描全能王 2026-09-11 12.04.pdf, 扫描全能王 2026-10-03 09.27.pdf]
confidence: medium
---

# Cours de Groupes — Marc Rosso (USTC, 2026-09-01)

> 手写法语讲义整理(OCR 转写)。原 PDF: `Cours USTC 01-09-26.pdf`。
> 注意:OCR 转写可能存在少量错误,数学公式以原图为准。

Marc Rosso
marc.rosso@imj-prg.fr

> [!info] Notations
> G, H groupes.

---

## 1. Notions connues

### 1.1 Groupe

$$
\begin{aligned}
G \times G &\longrightarrow G \\
(g, g') &\longmapsto gg'
\end{aligned}
$$

- associative.
- neutre $e \in G$.
- inverse $g^{-1}$.

> [!example] Exemples de groupes
> - **groupes cycliques** $\mathbb{Z}/n\mathbb{Z}$
> - **groupes de permutations :** $X$ ensemble, $\mathfrak{S}(X) = \{f : X \longrightarrow X, \text{ bijective}\}$ ; si $X = \{1, \dots, n\}$, $\mathfrak{S}_n = \mathfrak{S}(\{1, \dots, n\})$ **groupe symétrique**
> - **groupe linéaire :** $k$ corps, $\mathrm{GL}_n(k) = \{\text{matrices inversibles } n \times n\}$

### 1.2 Sous-groupe

> [!info] Prop
> Une intersection de sous-groupes est un sous-groupe.

### 1.3 Morphisme de groupe

$f : G \longrightarrow H$ tel que :
$\forall g, g' \in G \quad f(gg') = f(g)f(g')$

- Image de $f = \mathrm{Im}\, f$.
- Noyau $\mathrm{Ker}\, f = \{g \in G ; f(g) = e\}$ — sous-groupe.

> [!info] Remarques
> - L'image d'un sous-groupe de $G$ est un sous-groupe de $H$.
> - L'image réciproque $f^{-1}(K)$ d'un sous-groupe $K$ de $H$ est un sous-groupe de $G$.

### 1.4 Classe à gauche modulo un sous-groupe

$H \subset G$ sous-groupe.
Classe à gauche de $a \in G$ : $aH = \{ah, h \in H\}$ — classes d'équivalence pour la relation :
$$a \mathcal{R} b \iff a^{-1}b \in H \quad\text{i.e.}\quad aH = bH$$
elles forment une partition de $G$.

> [!info] Notation
> $G/H = \{\text{classes à gauche}\}$ ; de même : classe à droite.

> [!note] Thm de Lagrange
> Si $G$ groupe fini, $H \subset G$ sous-groupe, alors $|H|$ divise $|G|$.

### 1.5 Sous-groupe engendré par une partie $A$

C'est l'intersection de tous les sous-groupes de $G$ contenant $A$, i.e. le **plus petit** sous-groupe de $G$ contenant $A$.
Il est noté $\langle A \rangle \subset G$ :
$$\langle A \rangle = \{a_1^{\varepsilon_1} \cdots a_k^{\varepsilon_k}, \ k \in \mathbb{N}, \ a_i \in A, \ \varepsilon_i = \pm 1\}$$

> [!example] Générateurs de $\mathfrak{S}_n$
> **Rappel :** transposition $\sigma \in \mathfrak{S}_n$ : $\exists i \neq j$ tels que $\sigma(i)=j$, $\sigma(j)=i$ et $\forall k \notin \{i, j\}$, $\sigma(k)=k$. Elle est notée $(i\ j)$.
>
> **Prop :** $\mathfrak{S}_n$ est engendré par les transpositions.

---

## 2. Sous-groupe distingué, ou normal

> [!note] Déf
> C'est un sous-groupe $H \subset G$ tel que :
> $$\forall g \in G, \forall h \in H, \quad g h g^{-1} \in H$$
> i.e. $g H g^{-1} = H$, i.e. $g H = H g$.

> [!example] Exemples
> 1. Le noyau $\mathrm{Ker}\, f$ d'un morphisme de groupes.
> 2. **Centre de $G$** :
> $$Z(G) = \{ x \in G \;/\; \forall g \in G,\ xg = gx \}$$

> [!example] Calcul de $Z(\mathfrak{S}_n)$, $n \geq 2$
> - Si $n=2$ : $\mathfrak{S}_2 = \{ \mathrm{Id}, (12) \}$ commutatif, donc $Z(\mathfrak{S}_2) = \mathfrak{S}_2$.
> - Si $n \geq 3$ : $Z(\mathfrak{S}_n) = \{ \mathrm{Id} \}$.
>
> En effet, si $\omega \in Z(\mathfrak{S}_n)$ alors $\omega (1\ i) = (1\ i) \omega$ pour tout $i \geq 2$ :
> $$
> \begin{aligned}
> \omega(1\ i)\omega^{-1} &= (1\ i) \\
> \left( \omega(1)\ \ \omega(i) \right) &= (1\ i).
> \end{aligned}
> $$
> d'où $\omega(i) = 1$ ou $i$ pour tout $i$, donc $\omega(1) = 1$.

---

## 3. Groupe dérivé $\mathfrak{D}(G)$

> [!note] Déf
> $\mathfrak{D}(G)$ = sous-groupe de $G$ engendré par les **commutateurs**, i.e. par les éléments $xyx^{-1}y^{-1}$, $x,y \in G$.

Notation : $[x,y] = xyx^{-1}y^{-1}$.
Dire que $[x,y] = e$, c'est dire $xy = yx$. Donc :
$$\mathfrak{D}(G) = \{e\} \iff G \text{ commutatif}$$

> [!info] Prop
> $\mathfrak{D}(G)$ est un sous-groupe distingué.

**Preuve :** Il suffit de voir que $\forall g \in G$, $\forall x,y \in G$ :
$$g[x,y]g^{-1} = gxyx^{-1}y^{-1}g^{-1} = (gxg^{-1})(gyg^{-1})(gxg^{-1})^{-1}(gyg^{-1})^{-1} = [gxg^{-1}, gyg^{-1}]$$

---

## 4. Groupe quotient

> [!info] Notation
> si $H < G$ sous-groupe distingué, on l'écrit $H \triangleleft G$.

### 4.1 Construction

> [!note] Thm
> Soit $H \triangleleft G$. Alors il existe sur $G/H$ une unique structure de groupe telle que l'application $\pi: G \to G/H$, $g \mapsto gH$ soit un morphisme de groupes, i.e. telle que :
> $$(gH)(g'H) = gg'H$$

(Il faut s'assurer que cette formule a un sens, i.e. : si $g_1 \in gH$, $g'_1 \in g'H$, alors $g_1g'_1 \in gg'H$.)

Ainsi : un sous-groupe distingué est toujours le noyau d'un morphisme : $H = \ker \pi$, $\pi$ surjectif, et $eH = H$ est le neutre de $G/H$.

### 4.2 Théorème de factorisation

Soit $G$ groupe, $H \trianglelefteq G$, $K$ groupe et $f : G \to K$ un morphisme :

$$
\begin{CD}
G @>f>> K \\
@V\pi VV @| \\
G/H @>\overline{F}>> K.
\end{CD}
$$

Alors il existe un morphisme $\overline{F} : G/H \to K$ tel que $f = \overline{F} \circ \pi$ **si et seulement si** $H \subset \ker f$.

**Preuve :**

- Si $\overline{F}$ existe, alors $\forall h \in H$ :
  $$f(h) = \overline{F}(\pi(h)) = \overline{F}(H) = e$$
  ($H$ neutre de $G/H$). Ainsi $H \subset \ker f$.
- Si $H \subset \ker f$ : on définit $\overline{F}$ par $\overline{F}(gH) = f(g)$. Vérifions que ceci est bien défini, i.e. si $gH = g'H$ alors $f(g) = f(g')$.
  Mais $gH = g'H \Rightarrow \exists h \in H$ tel que $g' = gh$, donc
  $$f(g') = f(gh) = f(g)f(h) = f(g) \qquad (H \subset \ker f)$$
  $\bar{f}$ est bien un morphisme de groupes, i.e.
  $$\bar{f}(gH \cdot g'H) = \bar{f}(gHg'H) = \bar{f}(gg'H) = f(gg') = f(g)f(g') = \bar{f}(gH) \cdot \bar{f}(g'H)$$

> [!note] Corollaire
> On a un isomorphisme de groupes.
> $$G/\mathrm{Ker}\, f \longrightarrow \mathrm{Im}\, f$$
> Ainsi, si $G$ fini : $|G| = |\mathrm{Im}\, f| \cdot |\mathrm{Ker}\, f|$ (car $|G/H| = \frac{|G|}{|H|}$).

### 4.3 Propriété universelle du groupe dérivé

> [!note] Thm
> Soit $G$ groupe, $A$ groupe commutatif et $f : G \longrightarrow A$ un morphisme. Alors $f$ se factorise à travers $G/\mathfrak{D}(G)$ :

$$
\begin{CD}
G @>f>> A \\
@V\pi VV @| \\
G/\mathfrak{D}(G) @>\bar{f}>> A.
\end{CD}
$$

> [!info] Rem
> $G/\mathfrak{D}(G)$ est commutatif : $\pi([x,y]) = e$, et.
> $$\pi([x,y]^g) = [\pi(x), \pi(y)] = e$$

Ce que dit le thm : $G/\mathfrak{D}(G)$ est le **plus grand quotient commutatif** de $G$, i.e. si $H \triangleleft G$ avec $G/H$ commutatif, alors il existe un morphisme **surjectif** $G/\mathfrak{D}(G) \longrightarrow G/H$.

En effet :
$$
\begin{CD}
G @>\pi_1>> G/H \\
@V\pi VV @AA\bar{\pi}_1A \\
G/\mathfrak{D}(G) @= G/\mathfrak{D}(G).
\end{CD}
$$
$\bar{\pi}_1$ est donné par le thm ; il est surjectif car $\pi_1$ est surjectif.

**Preuve du thm :** D'après le thm de factorisation, il faut voir que $\mathfrak{D}(G) \subset \ker f$, i.e. que $\forall x,y \in G$, $f([x,y]) = e$. Or $[f(x), f(y)] = e$ car $A$ est commutatif.

### 4.4 Sous-groupes d'un groupe quotient

Soit $H \triangleleft G$, $\pi: G \longrightarrow G/H$.

> [!note] Thm
> Il y a une bijection entre :
> 1. l'ensemble des sous-groupes de $G/H$ (respectivement sous-groupes distingués de $G/H$) ;
> 2. l'ensemble des sous-groupes de $G$ contenant $H$ (respectivement sous-groupes distingués de $G$ contenant $H$).

**Preuve :**

- Soit $K \subset G/H$ sous-groupe (resp. distingué). Alors $\pi^{-1}(K) \subset G$ est un sous-groupe (resp. distingué) de $G$. On a $H \subset \pi^{-1}(K)$ car $H = \ker \pi$, et $\pi(\pi^{-1}(K)) = K$ (si $x \in \pi^{-1}(K)$ alors $\pi(x) \in K$).
- Réciproquement : si $L \subset G$ sous-groupe (resp. distingué) contenant $H$, alors la restriction $\pi|_L : L \longrightarrow G/H$ a pour image $L/H$, qui est un sous-groupe de $G/H$, avec $\pi^{-1}(L/H) = L$.

> [!example] Application : sous-groupes d'un groupe cyclique $\mathbb{Z}/n\mathbb{Z}$
> Ils sont en bijection avec les sous-groupes de $\mathbb{Z}$ contenant $n\mathbb{Z}$, i.e. avec les $k\mathbb{Z} \supset n\mathbb{Z}$ $(k \in \mathbb{N}^*)$, i.e. avec les $k\mathbb{Z}$ tels que $k \mid n$. Écrivons $n = k \cdot d$. Alors le sous-groupe associé à $k\mathbb{Z}$ est :
> $$\pi(k\mathbb{Z}) = \frac{k\mathbb{Z}}{n\mathbb{Z}} = \frac{k\mathbb{Z}}{dk\mathbb{Z}} \simeq \mathbb{Z}/d\mathbb{Z}$$
>
> **Prop :** $\forall d \mid n$, il y a un unique sous-groupe d'ordre $d$ de $\mathbb{Z}/n\mathbb{Z}$, qui est de plus cyclique.

> [!info] Remarque importante
> On a vu : si $L \subset G$ sous-groupe contenant $H$, alors $\pi(L) = L/H$.
> Cependant, si $M \subset G$ est un sous-groupe **quelconque**, $\pi(M) \subset G/H$ est un sous-groupe ; le sous-groupe de $G$ contenant $H$ qui correspond à $\pi(M)$ est $\pi^{-1}(\pi(M))$, qui est le sous-groupe de $G$ engendré par $M$ et $H$ :
> $$\pi^{-1}(\pi(M)) = MH = HM \quad (*)$$
>
> En effet :
> $$x \in \pi^{-1}(\pi(M)) \iff \exists m \in M,\ \pi(x) = \pi(m) \iff \exists m \in M,\ \exists h \in H,\ x = mh \in MH$$
>
> **Corollaire :** $\pi(M) = MH/H$.

### 4.5 Deuxième théorème d'isomorphisme

> [!note] Théorème
> Soit $H \trianglelefteq G$ et $M \subset G$ sous-groupe. Alors $M \cap H \trianglelefteq M$, et on a un isomorphisme :
> $$\frac{M}{M \cap H} \cong \frac{MH}{H}$$

**Preuve :** On dispose du morphisme $\pi: G \to G/H$. On le restreint à $M$ : $\pi|_M = \pi_1 : M \to G/H$ morphisme.
- Son image : $\pi(M) = \frac{MH}{H}$
- Son noyau : $\mathrm{Ker}(\pi_1) = M \cap \mathrm{Ker}\,\pi = M \cap H$

Par le thm d'isomorphisme :
$$\frac{M}{\mathrm{Ker}(\pi_1)} \cong \mathrm{Im}(\pi_1) \quad\Longrightarrow\quad \frac{M}{M \cap H} \cong \frac{MH}{H}$$

> [!info] Rem
> Soient $M$ et $H$ sous-groupes de $G$. Alors $MH = \{mh, m \in M, h \in H\}$ est un sous-groupe $\iff MH = HM$. Ceci est le cas si $M$ ou $H$ est distingué.

> [!warning] Mise en garde
> Soit $G$ groupe, $H \trianglelefteq G$ et $K \trianglelefteq H$.
> Il n'est **pas vrai** en général que $K \trianglelefteq G$ — la normalité n'est pas transitive !

> [!example] Contre-exemple
> $\mathfrak{S}_4$ = groupe des permutations de $\{1,2,3,4\}$ ; $A_4 \subset \mathfrak{S}_4$ groupe alterné (permutations de signature $+1$), et $A_4 \lhd \mathfrak{S}_4$.
> Dans $A_4$, considérons $V = \{ \mathrm{Id}, (12)(34), (13)(24), (14)(23) \}$.
>
> Posons $a = (12)(34)$, $b = (13)(24)$, $c = (14)(23)$. On a $a^2 = b^2 = c^2 = \mathrm{Id}$ et $a \cdot b = c = b \cdot a$. Donc $V$ est commutatif :
> $$V \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$$
> Isomorphisme : $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \to V$ :
> $$(\bar{0}, \bar{0}) \mapsto \mathrm{Id}, \quad (\bar{0}, \bar{1}) \mapsto b, \quad (\bar{1}, \bar{0}) \mapsto a, \quad (\bar{1}, \bar{1}) \mapsto c$$
>
> On a $V \lhd A_4$ (en général, dans $G_n$ : $\sigma \in G_n,\ \sigma(i\ j)\sigma^{-1} = (\sigma(i)\ \ \sigma(j))$).
>
> Mais : $\langle a \rangle \triangleleft V \triangleleft A_4$, tandis que $\langle a \rangle$ n'est **pas** distingué dans $A_4$.

### 4.6 Troisième théorème d'isomorphisme

> [!note] Thm
> $G$ groupe, $H \triangleleft G$, $K \triangleleft H$ et $K \triangleleft G$. Alors $H/K \triangleleft G/K$, et :
> $$\frac{G/K}{H/K} \simeq G/H$$

**Preuve :** $H/K \triangleleft G/K$ : théorème sur les sous-groupes d'un quotient.
On considère les morphismes de passage au quotient :
$$G \xrightarrow{\pi_1} G/K \xrightarrow{\pi_2} \frac{G/K}{H/K}$$
$\varphi = \pi_2 \circ \pi_1$ est surjectif. On a $\mathrm{Ker}\, \varphi = H$ ; ainsi $G/H \simeq \mathrm{Im}\, \varphi = \frac{G/K}{H/K}$.

Vérifions $\mathrm{Ker}\, \varphi = H$. Soit $g \in \ker \varphi$ :
$$\pi_2(\pi_1(g)) = \text{neutre} \implies \pi_1(g) \in \mathrm{Ker}\, \pi_2 = H/K \implies gK \in H/K$$
$\exists h \in H$ tel que $\pi_1(g) = gK = \pi_1(h) = hK$, donc $g \in hK \subset H$, d'où $\mathrm{Ker}\, \varphi \subset H$.
On a aussi $H \subset \ker \varphi$ car $\pi_1(H) = H/K = \ker \pi_2$.

### 4.7 Groupe simple

> [!note] Déf
> Un groupe $G$ est **simple** si ses seuls sous-groupes distingués sont $\{e\}$ et $G$.

> [!info] Intérêt
> Si $G$ est simple et $f : G \to K$ un morphisme non trivial (i.e. $\mathrm{Im}\, f \neq \{e\}$), alors $f$ est injective.

> [!info] Prop
> Soit $H \subset G$ sous-groupe d'indice 2, i.e. $|G/H| = 2$. Alors $H \trianglelefteq G$.

**Preuve :** Soit $g \in G$, $g \notin H$ ; alors $gH \neq H$, donc $G/H = \{H, gH\}$ et
$$G = H \sqcup gH$$
($\sqcup$ : réunion disjointe, i.e. réunion de 2 parties d'intersection $\emptyset$).
De même avec les classes à droite : $G = H \sqcup Hg$, d'où $gH = Hg$.
Ceci vaut $\forall g \in G$, d'où $H \trianglelefteq G$.

---

## 5. Action d'un groupe sur un ensemble

$X$ ensemble, $\mathfrak{S}(X) = \{ f : X \to X \mid f \text{ bijection} \}$.

> [!note] Déf
> On dit qu'un groupe $G$ **opère** (ou **agit**) sur $X$ si on a un morphisme de groupes.
> $$\varphi : G \to \mathfrak{S}(X)$$
> notation : $\varphi(g) : x \mapsto g \cdot x$.
> Autrement dit : on a une application $G \times X \to X$, $(g, x) \mapsto g \cdot x$, telle que :
> 1. $\forall g, g' \in G, \forall x \in X \quad g \cdot (g' \cdot x) = (gg') \cdot x$
> 2. $\forall x \in X \quad e \cdot x = x$

> [!note] Déf
> 1. L'action est **fidèle** si $\varphi$ est injective.
> 2. L'action est **transitive** si : $\forall x, y \in X, \exists g \in G$ tel que $g \cdot x = y$.

> [!note] Déf
> Soit $G$ agissant sur $X$ et $x \in X$. L'**orbite** de $x$ :
> $$O(x) = \{ g \cdot x ,\ g \in G \} = G \cdot x$$

> [!info] Rem
> On a sur $X$ une relation d'équivalence : pour $x, y \in X$,
> $$x \mathcal{R} y \iff \exists g \in G \;/\; y = g \cdot x$$
> les orbites sont les classes d'équivalence. Ainsi : les orbites distinctes sont disjointes, et elles forment une partition de $X$.
> Une action est transitive $\iff$ il y a une seule orbite.

> [!note] Déf
> Soit $x \in X$. Le **stabilisateur** de $x$ :
> $$\mathrm{Stab}(x) = \{ g \in G ; g \cdot x = x \}$$
> (aussi noté $G_x$). C'est un sous-groupe de $G$.

### 5.1 Description de l'orbite en termes du stabilisateur

> [!info] Prop
> Soit $x \in X$. L'application
> $$
> \begin{aligned}
> G / \mathrm{Stab}(x) &\longrightarrow \mathcal{O}(x) \\
> g \cdot \mathrm{Stab}(x) &\longmapsto g \cdot x.
> \end{aligned}
> $$
> est bijective.

**Preuve :**
- Bien définie : si $g \cdot \mathrm{Stab}(x) = g' \cdot \mathrm{Stab}(x)$, alors $\exists h \in \mathrm{Stab}(x)$ tel que $g = g' h$, donc
  $$g \cdot x = g' \cdot (h \cdot x) = g' \cdot x$$
- Surjective : par définition de l'orbite.
- Injective : si
  $$
  \begin{aligned}
  g \cdot x &= g' \cdot x \\
  \iff g'^{-1}(g \cdot x) &= (g'^{-1}g) \cdot x \\
  \iff g'^{-1}g &\in \operatorname{Stab}(x) \\
  &\qquad\qquad g \operatorname{Stab}(x) = g' \operatorname{Stab}(x).
  \end{aligned}
  $$

<u>Corollaire</u> : Si $G$ est fini, le cardinal de chaque orbite divise $\operatorname{Card}(G)$ :
$$|O(x)| \mid |G|$$

---

### Exemples

1. Action de $G$ sur lui-même par translation à gauche :
   pour $g \in G$, $\varphi(g)\colon \begin{array}{rcl} G & \longrightarrow & G \\ a & \longmapsto & ga \end{array}$.

   $\varphi$ est une application $\psi\colon \begin{array}{rcl} G & \longrightarrow & \mathfrak{S}(G) \\ g & \longmapsto & \varphi(g) \end{array}$.

   morphisme de groupes (associativité), injectif.

   **Corollaire :** Théorème de Cayley.
   Soit $G$ groupe fini, $|G|=n$. Alors $G$ est isomorphe à un sous-groupe du groupe symétrique $\mathfrak{S}_n$.

2. Soit $H$ sous-groupe de $G$. Alors $G$ agit par translations à gauche sur $G/H$.

   Soit $g \in G$, soit $\varphi(g)\colon \begin{array}{rcl} G/H & \longrightarrow & G/H \\ aH & \longmapsto & gaH \end{array}$.

   **Déf :** $G$ groupe, $X, Y$ ensembles sur lesquels $G$ agit. On dit qu'une application $f\colon X \longrightarrow Y$ est $G$-équivariante si :

   $$\forall x \in X,\; \forall g \in G \quad f(g \cdot x) = g \cdot f(x)$$

   i.e. « $f$ transforme l'action de $G$ sur $X$ en l'action de $G$ sur $Y$ ».

> [!info] Prop
> Soit $G$ agissant sur $X$, $x \in X$. Alors la bijection $\psi: G/\operatorname{Stab}(x) \longrightarrow O(x)$ est $G$-équivariante.

Ainsi : pour étudier l'action de $G$ sur une orbite, on se ramène à étudier l'action par translation à gauche sur $G/\operatorname{Stab}(x)$.

Cas particulier : action transitive.

En effet : $\forall g \in G$, $a \in G \quad \psi(a\cdot\text{Stab}(x)) = a\cdot x$.

$$\begin{aligned}
\psi(g\cdot(a\text{Stab}(x))) &= \psi((ga)\cdot\text{Stab}(x)) \\
&= (ga)\cdot x = g\cdot(a\cdot x) \\
&= g\cdot\psi(a\cdot\text{Stab}(x)).
\end{aligned}$$

---

> [!info] Prop
> Si $G$ agit sur $X$ et $x \in X$, alors $$\text{Stab}(g\cdot x) = g\,\text{Stab}(x)\,g^{-1}.$$

En effet : $h\cdot(g\cdot x) = g\cdot x \Longleftrightarrow (g^{-1}hg)\cdot x = x \Longleftrightarrow g^{-1}hg \in \text{Stab}(x)$.

Cas particulier : pour l'action de $G$ dans $G/H$

$$\text{Stab}(aH) = aHa^{-1}, \quad \text{car } \text{Stab}(H) = H$$

> [!info] Rem : action sur $G/H$ non fidèle
> L'action par translation de $G$ sur $G/H$ n'est pas fidèle en général :
> $$\operatorname{Ker}\varphi=\bigcap_{a\in G}aHa^{-1}$$

> [!note] Prop : groupe infini non simple
> Soit $G$ groupe infini qui possède un sous-groupe $H$ d'indice fini $(|G/H|<+\infty)$.
> Alors $G$ n'est pas un groupe simple.

**Preuve :** Considérons l'opération de $G$ sur $G/H$.
$$\varphi\colon G\longrightarrow\mathfrak{S}(G/H).$$
Mais $\mathfrak{S}(G/H)$ est un groupe fini, donc $\varphi$ ne peut pas être injective. Comme $H\neq G$, $\operatorname{Ker}\varphi\neq G$.
D'où $\operatorname{Ker}\varphi\triangleleft G$ avec $\operatorname{Ker}\varphi\neq\{e\}$ et $\neq G$.

### 3. Action de $G$ sur lui-même par conjugaison
$\forall g\in G$, on pose $\Psi(g)\colon\begin{array}{rcl}G&\longrightarrow&G\\ a&\longmapsto&gag^{-1}\end{array}$.
$\Psi(g)=$ automorphisme intérieur défini par $g$.

**Terminologie** Ici, $\operatorname{Stab}(a)$ est appelé le centralisateur de $a$, aussi noté $Z(a)$.

# Actions de groupes et résultats de classification

## 1. Classes d'équivalence de matrices

$k$ corps $\quad M_{n,p}(k)=\begin{cases} \text{matrices } n \text{ lignes, } p \text{ colonnes} \\ \text{à coefficients dans } k \end{cases}$.

Soit $G=GL_n(k)\times GL_p(k)$ produit.

$G$ agit sur $M_{n,p}(k)$.
$$\begin{array}{ccc}
G\times M_{n,p}(k) & \longrightarrow & M_{n,p}(k) \\
((g_1,g_2),m) & \longmapsto & g_1mg_2^{-1}
\end{array}$$

les orbites de cette action sont les classes d'équivalence de matrices.

> [!note] Thm
> 2 matrices sont équivalentes $\Leftrightarrow$ même rang.

Pour $r \leq n,p$ représentant $I_r=\begin{pmatrix} I_r & 0 \\ 0 & 0 \end{pmatrix}$.

## 2. Classes de similitude de matrices carrées

## 3. Réduction des formes quadratiques

Action du groupe $GL_n(k)$ sur l'espace des matrices symétriques $S_n(k)\subset M_n(k)$.
$$\begin{array}{ccc}
GL_n(k)\times S_n(k) & \longrightarrow & S_n(k) \\
(P,Q) & \longmapsto & P\,Q\,{}^{t}P.
\end{array}$$

### Points fixes pour une action de groupe

$G$ agit sur $X$. On note $\displaystyle X^G = \{\text{points fixes}\} = \{x \in X; \forall g \in G, g\cdot x = x\}$.

$$x \in X^G \Longleftrightarrow O(x) = \{x\}$$

---

> [!note] Thm : Equation aux classes
> Soit $G$ agissant sur $X$. Alors
> $$X = X^G \sqcup \bigsqcup_{|O(\alpha_i)| \geq 2} O(\alpha_i)$$
> réunion disjointe de $X^G$ et des orbites non réduites à un point.

---

## Application

> [!note] Déf
> Soit $k$ nombre premier.
> On appelle **$k$-groupe** un groupe dont le cardinal est une puissance de $k$.
> $$|G| = k^n,\ n \geq 1.$$

> [!info] Prop
> Soit $G$ un $k$-groupe agissant sur $X$ fini.  
> Alors $\displaystyle |X| \equiv |X^G| \pmod{k}$.

*Preuve :* équation aux classes, et le fait que $|O(\alpha_i)| \mid |G|$. Comme $|G| = k^n$, si $|O(\alpha_i)| \geq 2$,

alors $|O(\alpha_i)|=k^r$ avec $r\geqslant 1$, donc $k\mid |O(\alpha_i)|$.

si $|O(\alpha_i)|\geqslant 2$ ?

$$|X|=|X^G|+\sum_{|O(\alpha_i)|\geqslant 2}|O(\alpha_i)|$$

on a $|X|\equiv |X^G| \bmod k$.

> [!note] Thm
> Si $G$ est un $p$-groupe, alors le centre de $G$ est $\neq \{e\}$, i.e. $Z(G)$ non trivial.

**Preuve :** On considère l'action de $G$ sur lui-même par conjugaison. On a $Z(G)=\{g\in G\mid \forall x\in G,\; xgx^{-1}=g\}$.

D'après la Prop., $|Z(G)|\equiv |G| \bmod p$.

Mais $|G|\equiv 0 \bmod p$. Mais $|Z(G)|\geqslant 1$ car $e\in Z(G)$. Donc $p\mid |Z(G)|$, donc $|Z(G)|\geqslant p$.

---

> [!note] Thm : Formule de Burnside
> Soit $G$ groupe fini, agissant sur $X$ fini.
> Pour $g\in G$, soit $\mathrm{Fix}(g)=\{x\in X;\; g\cdot x=x\}$, l'ensemble des points fixes de $g$.
> Alors le nombre $N$ d'orbites de $X$ est :
> $$N=\frac{1}{|G|}\sum_{g\in G}|\mathrm{Fix}(g)|$$

**Preuve :**

On a : $x \in \mathrm{Fix}(g) \Leftrightarrow g \cdot x = x \Leftrightarrow g \in \mathrm{Stab}(x)$.

$$\begin{aligned}
&\text{Soit } E = \{(g,x) \in G \times X ; g \cdot x = x\} \\
&\qquad = \bigsqcup_{g \in G} \{g\} \times \mathrm{Fix}(g) = \bigsqcup_{x \in X} \mathrm{Stab}(x) \times \{x\} \\
&|E| = \sum_{g \in G} |\mathrm{Fix}(g)| = \sum_{x \in X} |\mathrm{Stab}(x)|.
\end{aligned}$$

Alors $\mathcal{O}_1, \mathcal{O}_2, \ldots, \mathcal{O}_N$ les orbites distinctes.

$$X = \bigsqcup_{i=1}^{N} \mathcal{O}_i$$

$$\begin{aligned}
\sum_{x \in X} |\mathrm{Stab}(x)| &= \sum_{i=1}^{N} \left( \sum_{x \in \mathcal{O}_i} |\mathrm{Stab}(x)| \right) \\
&|\mathrm{Stab}(x)| = \frac{|G|}{|\mathcal{O}(x)|} \\
\sum_{x \in X} |\mathrm{Stab}(x)| &= \sum_{i=1}^{N} \sum_{x \in \mathcal{O}_i} \frac{|G|}{|\mathcal{O}_i|} \\
&= |G| \sum_{i=1}^{N} \underbrace{\sum_{x \in \mathcal{O}_i} \frac{1}{|\mathcal{O}_i|}}_{\frac{1}{|\mathcal{O}_i|} \cdot |\mathcal{O}_i| = 1} \\
&= |G| \cdot N.
\end{aligned}$$

> [!info] Prop
> Soit $G$ groupe fini, agissant sur $X$ fini, $|X|\geq 2$ transitivement. Alors il y a au moins un élément $g\in G$ sans point fixe.

**Preuve :** Ici $N=1$.
$$\begin{aligned}
1 &= \frac{1}{|G|}\sum_{g\in G}|\mathrm{Fix}(g)| \\
&= \frac{1}{|G|}\left(|X|+\sum_{g\neq e}|\mathrm{Fix}(g)|\right).
\end{aligned}$$

Ici $|X|\geq 2$ et si on avait $\forall g\in G$, $|\mathrm{Fix}(g)|\geq 1$ on aurait une contradiction.

> [!example] Application
> Sous-groupes finis du groupe des rotations de l'espace euclidien $\mathbb{R}^3$, $SO(3)$.

> [!note] Thm : sous-groupes finis de $SO(3)$
> Soit $G\subset SO(3)$ sous-groupe fini. Alors $G$ est isomorphe à l'un des groupes suivants :
> 1. groupe cyclique $\mathbb{Z}/n\mathbb{Z}$, $n\geq 2$ ;
> 2. groupe diédral $D_{2n}$ (groupe des isométries du polygone régulier à $n$ côtés) ;
> 3. $\mathcal{A}_4$ ;
> 4. $\mathcal{S}_4$ ;
> 5. $\mathcal{A}_5$.

**Preuve :**

Si $r \in SO(3)$, $r \neq \text{Id}$, on dispose de l'axe de $r$, droite vectorielle des points fixes ; dans une base orthonormée convenable, $r$ a pour matrice :
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & \sin\theta \\ 0 & -\sin\theta & \cos\theta \end{pmatrix}$$

Si $g \in G$, $g \neq e$ : son axe intersecte la sphère $S^2$ de rayon 1 en 2 points $p$ et $-p$, appelés les pôles de $G$.

![[附件/球面直径与极点.svg]]

Soit $X$ l'ensemble des pôles des éléments de $G \setminus \{e\}$.

Alors $G$ agit sur $X$, car il agit sur lui-même par conjugaison.

Soit $g \in G$ et soit $p \in X$ un pôle de $r \in G$. Alors $grg^{-1} \in G$, et $g(p)$ (pour l'action habituelle de $SO(3)$ sur $\mathbb{R}^3$) est un pôle de $grg^{-1}$. Ainsi $g(p) \in X$.

On a ainsi, par restriction à $X$, une action de $G$ sur $X$.

Soit $N$ le nombre d'orbites.

> [!info] Prop
> On a $N=2$ ou $N=3$.

**Preuve :** Burnside $N=\frac{1}{|G|}\sum\limits_{g \in G} |\text{Fix}(g)|$.

Si $g=e=\text{Id}$, $\text{Fix}(g)=X$.

Si $g \neq \text{Id}$, $\text{Fix}(g)=\{\text{pôles de }g\}$, $|\text{Fix}(g)|=2$.

$$N=\frac{1}{|G|}\left(|X|+2(|G|-1)\right) \quad (\star)$$

On décompose $X$ en réunion disjointe d'orbites,
on choisit un élément $x_i$ dans chaque orbite $O_i$.

Soit $G_{x_i} = \operatorname{Stab}(x_i)$ ; alors $|O_i| = \frac{|G|}{|G_{x_i}|}$.

$$\begin{aligned}
N &= \frac{1}{|G|}\left(\sum_{i=1}^{N}|O_i|+2(|G|-1)\right) \\
&= \sum_{i=1}^{N}\frac{1}{|G_{x_i}|} + 2\Bigl(1-\frac{1}{|G|}\Bigr) \quad (\star\star) \\
\sum_{i=1}^{N}\left(1-\frac{1}{|G_{x_i}|}\right) &= 2\left(1-\frac{1}{|G|}\right).
\end{aligned}$$

> [!info] Rem
> $|G| \geq 2 \qquad \frac{1}{2} \leq 1-\frac{1}{|G|} < 1$.

De même $G_{x_i}$ contient $\text{Id}$, et aussi une rotation $\neq \text{Id}$ dont l'axe est la droite $\mathbb{R}x_i$, d'où $|G_{x_i}| \geq 2$.

$$
\begin{aligned}
&\frac{1}{2} \leq 1-\frac{1}{\left|G_{x_{i}}\right|}<1 \\
&\frac{N}{2} \leq \sum_{i=1}^{N}\left(1-\frac{1}{\left|G_{x_i}\right|}\right)=2\left(1-\frac{1}{|G|}\right)<2.
\end{aligned}
$$

Ainsi $N<4$.

De plus, $N>1$ via $(\star)$, car si $N=1$ on aurait $|X|+|G|=2$ d'où $|G|=|X|=1$.

**Conclusion :** $N \in\{2,3\}$.

> [!info] Remarque
> les stabilisateurs $G_{x_{i}}$ sont des *groupes cycliques* : les éléments de $G_{x_{i}}$ sont des rotations de même axe $\mathbb{R} \alpha_{i}$. Ainsi $G_{x_{i}}$ est en bijection avec un sous-groupe fini du groupe des rotations du plan $(\mathbb{R} \alpha_{i})^{\perp}$.

---

### 1. Étude du cas $N=2$

Posons $e_{i}=\left|G_{x_{i}}\right|$.

$$
(\star \star) \quad \frac{1}{e_{1}}+\frac{1}{e_{2}}=\frac{2}{|G|} \quad \text { avec } e_{1}, e_{2} \leq|G|.
$$

Nécessairement $e_{1}=e_{2}=|G|$, i.e. $G_{x_{1}}=G_{x_{2}}=G$.

Donc $G$ est cyclique, $x_2 = -x_1$ et $X = \{x_1, x_2\}$.

### 2. Étude du cas $N=3$

On suppose $e_1 \leq e_2 \leq e_3$.

$$\begin{aligned}
&2-\frac{2}{|G|}=3-\frac{1}{e_{1}}-\frac{1}{e_{2}}-\frac{1}{e_{3}} \\
&\boxed{1+\frac{2}{|G|}=\frac{1}{e_{1}}+\frac{1}{e_{2}}+\frac{1}{e_{3}}} \quad>1.
\end{aligned}$$

Nécessairement $e_{1}=2$.

$$\frac{1}{2}+\frac{2}{|G|}=\frac{1}{e_{2}}+\frac{1}{e_{3}} \quad>\frac{1}{2}$$

Nécessairement $e_2 \leq 3$ (sinon $e_3 \geq e_2 \geq 4$).

$$\frac{1}{e_{2}}+\frac{1}{e_{3}}\leq\frac{1}{2}$$

$\boxed{e_2 = 2 \text{ ou } e_2 = 3}$.

---

#### a) Cas où $e_{1}=2$ et $e_{2}=2$

$$\begin{aligned}
&\frac{2}{|G|}=\frac{1}{e_{3}}, \qquad |G|=2e_{3}, \quad m=e_{3} \\
&|O_1| = \frac{|G|}{e_1} = m = |O_2| \\
&|O_3| = 2.
\end{aligned}$$

> [!info] Rem
> l'action de $G$ sur $X$ est la restriction à $X$ d'une action linéaire $g(-x)=-g(x)$.

$$\forall x \quad G_{x}=G_{-x}, \text{ d'où } |\mathcal{O}(x)|=|\mathcal{O}(-x)|$$

Supposons $m \geq 3$ : comment étudier $O_3$ ?

$x \in O_3$, $|O(x)|=|O(-x)|=2$. Comme il y a une seule orbite de cardinal 2, $O_3=\{x,-x\}$.

$G_{x_3}$ est un groupe cyclique d'ordre $n$, d'axe $\mathbb{R}x_3$.

Soit $y \in O_1$, $|G_y|=2$, $G_y=\{\text{Id}, r\}$, où $r$ est une rotation d'angle $\pi$. $G_y$ agit dans l'orbite $O_3=O(x_3)$. Comme $x$ et $y$ non colinéaires, $r(x_3)\neq x_3$, donc $r(x_3)=-x_3$, d'où $x_3 \perp y$ ($x=x_3$).

Considérons une base orthonormée $(x, y, z)$ de $\mathbb{R}^3$. Dans cette base, les éléments de $G$ ont des matrices de la forme :
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & -\sin\theta \\ 0 & \sin\theta & \cos\theta \end{pmatrix} \text{ et } G_y=\left\{\text{Id}, \begin{pmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}\right\}$$
Les restrictions au plan $(\mathbb{R}x)^\perp$ sont :
• Pour $G_x$ : un groupe cyclique de rotations planes, $\simeq \mathbb{Z}/n\mathbb{Z}$ ;
• Pour $G_y$ : $\{\mathrm{Id}, r\}$, où $r$ est la symétrie orthogonale par rapport à la droite $\mathbb{R}y$.

De plus $G_x \cap G_y = \{\mathrm{Id}\}$, et $G_x$ est d'indice 2 dans $G$, donc il est distingué dans $G$.

On dispose du groupe $G_x G_y = G_y G_x$, de cardinal $|G_x|\,|G_y| = 2n = |G|$ ; ainsi $G = G_x G_y$ est isomorphe au groupe diédral $D_{2n}$, en considérant les restrictions à $(\mathbb{R}x)^\perp$.

> [!info] Rem
> Si $n=2$, $|G|=4$. A priori $G = \mathbb{Z}/4\mathbb{Z}$ ou $D_4$.

---

#### b) Cas où $e_1=2$, $e_2=3$

Nécessairement $e_3 \in \{3, 4, 5\}$.

On a en effet : $\displaystyle \frac{1}{e_3} = \frac{1}{6} + \frac{2}{|G|}$, d'où $3 \leq e_3 < 6$.

**Si $e_1=2$, $e_2=3$, $e_3=3$ :** $|G|=12$.

On trouve $G \simeq A_4$.

**Si $e_1=2$, $e_2=3$, $e_3=4$ :** $|G|=24$.

On trouve $G \simeq S_4$.

**Si $e_1=2$, $e_2=3$, $e_3=5$ :** $|G|=60$.

On trouve $G \simeq A_5$, car $A_5$ est l'unique groupe simple d'ordre 60.

# Théorèmes de Sylow

> [!question] Motivation et question
> **Motivation :** Thm de Lagrange : si $H \subset G$ sous groupe alors $|H| \mid |G|$.
> Soit $d \mid |G|$, existe-t-il un sous-groupe de $G$ de cardinal $d$ ?
> **Non !**
> **Exercice :** $G = A_4$, $|G|=12$. $G$ ne possède pas de sous-groupe d'ordre 6.

## Situation favorable

Soit $p$ nombre premier, $G$ un $p$-groupe, $|G|=p^n$.

> [!note] Prop : sous-groupes d'ordre $p^i$
> $\forall i \in \{1,\ldots,n-1\}$, $G$ possède un sous-groupe d'ordre $p^i$.

**Preuve :** Récurrence sur $n$.

Si $n \geqslant 2$, le centre $Z(G)$ est non trivial.

Soit $g \in Z(G)$, $g \neq e$. L'ordre de $g$ est $p^\alpha$ avec $1 \leqslant \alpha \leqslant n$. Si $\alpha = n$, alors $G$ est cyclique.

Sinon $g^{p^{\alpha-1}}$ est d'ordre $p$, et le sous-groupe $H$ qu'il engendre est cyclique d'ordre $p$.

On a : $H \lhd G$ car $g \in Z(G)$.

On considère $G_1 = G/H$, $|G_1| = p^{n-1}$.

On applique l'hypothèse de récurrence :
$$\forall \beta \in \{1,\ldots,n-2\}, \ \exists K \subset G_1 \text{ sous-groupe de cardinal } p^\beta.$$

Soit $\pi : G \longrightarrow G_1$. Alors $\pi^{-1}(K)$ est un sous-groupe de $G$ contenant $H$, de cardinal $|K| \cdot p = p^{\beta+1}$, et

$$\pi^{-1}(K)/H \simeq K$$

---

## Références

- Daniel Perrin, *Cours d'algèbre*.
- Paul Krée, Jacques Vauthier, Mirella Krée, *Algèbre. Cours de Mathématiques et exercices de 2\textsuperscript{e} année*.
- En anglais : Mike Artin, *Algebra* ; Nathan Jacobson, *Basic Algebra 1*.

## Sous-groupes de Sylow

> [!note] Définition
> Soit $p$ un nombre premier divisant $|G|$. On écrit $|G| = p^\alpha m$ avec $p \nmid m$ et $\alpha \geqslant 1$.
> On appelle **$p$-sous-groupe de Sylow** de $G$ (ou **$p$-Sylow** de $G$) tout sous-groupe de $G$ de cardinal $p^\alpha$.

> [!example] Exemple
> $p$ premier, $\mathbb{F}_p = \mathbb{Z}/p\mathbb{Z}$, $G = \mathrm{GL}_n(\mathbb{F}_p)$ — groupe fini.

> [!info] Prop
> $$|\mathrm{GL}_n(\mathbb{F}_p)| = (p^n - 1)(p^n - p)\cdots(p^n - p^{n-1}) = p^{\frac{n(n-1)}{2}}(p^n - 1)(p^{n-1} - 1)\cdots(p - 1)$$

**Preuve :** $g \in G \iff$ ses vecteurs colonnes forment une base de $(\mathbb{F}_p)^n$.

Tout revient à déterminer le nombre de bases $(e_1, \ldots, e_n)$ de l'espace vectoriel $(\mathbb{F}_p)^n$.

- $1^{\text{er}}$ vecteur $e_1$ : $e_1 \neq 0$, d'où $|(\mathbb{F}_p)^n| - 1 = p^n - 1$ possibilités ;
- $2^{\text{e}}$ vecteur $e_2$ : $e_2 \notin \operatorname{Vect}(e_1)$, i.e. $e_2 \in (\mathbb{F}_p)^n - \mathbb{F}_p\cdot e_1$, d'où $p^n - p$ possibilités.

On poursuit. Si on a déjà $e_1, \ldots, e_{k-1}$ ($k \geqslant 2$), alors on doit prendre $e_k \notin \operatorname{Vect}(e_1, \ldots, e_{k-1})$, qui est un $\mathbb{F}_p$-espace vectoriel de dimension $k-1$, donc de cardinal $p^{k-1}$ : d'où $p^n - p^{k-1}$ possibilités pour $e_k$.

$$|\mathrm{GL}_n(\mathbb{F}_p)| = (p^n - 1)(p^n - p)\cdots(p^n - p^{n-1}) = p^{\alpha}(p^n - 1)\cdots(p - 1), \qquad \alpha = \frac{n(n-1)}{2}$$

Cherchons un sous-groupe de Sylow de $G = \mathrm{GL}_n(\mathbb{F}_p)$. Le sous-groupe des matrices triangulaires supérieures unipotentes,

$$S = \left\{ \begin{pmatrix} 1 & * & \cdots \\ & 1 & \ddots \\ 0 & & 1 \end{pmatrix} \right\}$$

possède $\frac{n(n-1)}{2}$ termes strictement au-dessus de la diagonale, d'où $|S| = p^{\alpha}$ : c'est un $p$-Sylow de $G$.

### Théorème de Sylow

> [!note] Thm (Sylow)
> Si $p$ premier divise $|G|$, alors $G$ possède au moins un $p$-Sylow.

> [!note] Corollaire
> Si $p \mid |G|$, avec $|G| = p^\alpha m$, alors $\forall \beta \leqslant \alpha$, $G$ possède un sous-groupe d'ordre $p^\beta$.

> [!note] Lemme
> Soit $G$ un groupe, $|G| = p^\alpha m$ avec $p \nmid m$, $\alpha \geqslant 1$. On suppose que $S$ est un $p$-Sylow de $G$. Soit $H < G$ un sous-groupe. Alors il existe $a \in G$ tel que $aSa^{-1} \cap H$ soit un $p$-Sylow de $H$.

> [!info] Rem
> $\forall a \in G$, $aSa^{-1}$ est un $p$-Sylow de $G$.

**Preuve :** On considère l'action de $G$ sur $G/S$ par translation. Pour tout $a \in G$, $\operatorname{Stab}(aS) = aSa^{-1}$.

On restreint cette action à $H$ :

$$\operatorname{Stab}_H(aS) = H \cap aSa^{-1}$$

Pour tout $a \in G$, $aSa^{-1} \cap H$ est un $p$-groupe. On cherche $a \in G$ tel que $|H / (H \cap aSa^{-1})|$ soit premier avec $p$.

$$[H : H \cap aSa^{-1}] = \text{cardinal de l'orbite de } aS \text{ sous l'action de } H.$$

Or $G/S$ est réunion disjointe de ces orbites sous l'action de $H$. Si $p$ divisait les cardinaux de toutes ces orbites, $p$ diviserait $|G/S|$ : impossible.

**Conclusion :** il existe $a \in G$ tel que $p \nmid [H : H \cap aSa^{-1}]$, et $H \cap aSa^{-1}$ est un $p$-Sylow de $H$.

### Preuve des théorèmes de Sylow

Soit $G$ un groupe fini, $|G| = p^\alpha m$ avec $p \nmid m$, $\alpha \geqslant 1$.

- **Théorème de Cayley :** $G$ s'injecte dans $\mathfrak{S}_{|G|}$ (comme sous-groupe de $\mathfrak{S}_n$ avec $n = |G|$).
- Pour tout corps $K$, le groupe $\mathfrak{S}_n$ est isomorphe à un sous-groupe de $\mathrm{GL}_n(K)$, via les matrices de permutation : $\mathfrak{S}_n \hookrightarrow \mathrm{GL}_n(K)$, $\sigma \mapsto P_\sigma$.

**Conclusion :** tout groupe $G$ est isomorphe à un sous-groupe de $\mathrm{GL}_n(K)$ avec $n = |G|$. En prenant $K = \mathbb{F}_p$, on a $G \hookrightarrow \mathrm{GL}_n(\mathbb{F}_p)$, et d'après le lemme, $G$ possède au moins un $p$-Sylow.

> [!note] Thm (Sylow)
> Soit $G$ un groupe, $|G| = p^\alpha m$ avec $p \nmid m$, $\alpha \geqslant 1$.
>
> 1. Si $H \subset G$ est un $p$-groupe, alors il existe un $p$-Sylow de $G$ contenant $H$.
> 2. Tous les $p$-Sylow de $G$ sont conjugués, et leur nombre $k$ divise $|G|$. En particulier : $G$ possède un unique $p$-Sylow $\iff$ $G$ possède un $p$-Sylow qui est un sous-groupe distingué.
> 3. Le nombre $k$ de $p$-Sylow de $G$ vérifie $k \equiv 1 \pmod p$ (donc $k \mid m$).

**Preuve de 1) et 2) :**

Soit $H \subset G$ un $p$-groupe. Fixons $S$ un $p$-Sylow de $G$. D'après le lemme, il existe $a \in G$ tel que $aSa^{-1} \cap H$ soit un $p$-Sylow de $H$. Mais $H$ est son propre $p$-Sylow, donc

$$\exists a \in G, \quad aSa^{-1} \cap H = H \qquad \text{i.e.} \qquad H \subset \underset{\text{p-Sylow de } G}{aSa^{-1}}.$$

Si $S' \subset G$ est un autre $p$-Sylow de $G$, alors $\exists a \in G$ tel que $S' \subset aSa^{-1}$ (d'après 1). Comme $|S'| = |aSa^{-1}|$, on a $S' = aSa^{-1}$. Ainsi, en considérant l'action de $G$ sur l'ensemble des $p$-Sylow par conjugaison, il y a une seule orbite, et son cardinal divise $|G|$.

**Preuve de 3) :** Soit $X = \{\text{p-Sylow de } G\}$, $|X| = k$, et considérons l'action de $G$ sur $X$ par conjugaison. Soit $S \subset G$ un $p$-Sylow de $G$ : $S$ agit sur $X$ par conjugaison, et c'est un $p$-groupe.

Équation aux classes : si $X^S = \{\text{points fixes}\}$, alors $|X| \equiv |X^S| \bmod p$.

Montrons $|X^S| = 1$, i.e. $X^S = \{S\}$. Soit $T \in X^S$ : $\forall s \in S$, $sTs^{-1} = T$. Soit $H$ le sous-groupe de $G$ engendré par $S$ et $T$. On a $T \triangleleft H$. Mais $S$ et $T$ sont des $p$-Sylow de $G$, donc aussi des $p$-Sylow de $H$. Comme $T \triangleleft H$, $T$ est l'unique $p$-Sylow de $H$, d'où $T = S$.

### Application : étude de la simplicité d'un groupe selon son cardinal

> [!example] Exemple 1
> Soit $G$ un groupe d'ordre 63. Alors $G$ n'est pas simple.
>
> $|G| = 63 = 3^2 \times 7$. Considérons les 7-Sylow de $G$. Leur nombre $k \equiv 1 \bmod 7$ et $k \mid 9$, d'où $k = 1$ : il y a un unique 7-Sylow, qui est distingué.

> [!example] Exemple 2
> Soit $G$ un groupe d'ordre 48. Alors $G$ n'est pas simple.
>
> Idée : $G$ agit sur les $p$-Sylow ; si $k$ est leur nombre, on obtient un morphisme $\varphi : G \rightarrow \mathfrak{S}_k$ non trivial (car l'action est transitive). Si $|G|$ ne divise pas $k! = |\mathfrak{S}_k|$, alors $\varphi$ ne peut être surjectif, d'où $\ker \varphi \triangleleft G$ avec $\ker \varphi \neq \{e\}$ et $\ker \varphi \neq G$.
>
> Ici $|G| = 48 = 2^4 \times 3$. On prend $p = 2$ : $k$ est impair et $k \mid 3$, d'où $k \in \{1, 3\}$.
>
> - $k = 1$ : le 2-Sylow est unique, donc distingué.
> - $k = 3$ : le morphisme $G \rightarrow \mathfrak{S}_3$ ne peut pas être surjectif.

## Groupes symétriques

> [!info] Notation
> $n \geqslant 1$, $\mathfrak{S}_n$ groupe symétrique, $\mathfrak{A}_n$ groupe alterné.
> $$\varepsilon : \mathfrak{S}_n \longrightarrow \{\pm 1\}, \qquad \mathfrak{A}_n = \ker \varepsilon$$
> $$\varepsilon(\sigma) = \prod_{i < j} \frac{\sigma(i) - \sigma(j)}{i - j}$$

### Générateurs

> [!note] Définition
> Pour $i \neq j$ dans $\{1, \ldots, n\}$, on note $(ij)$ la permutation $\sigma$ telle que $\sigma(i) = j$, $\sigma(j) = i$ et $\sigma(k) = k$ pour $k \notin \{i, j\}$. C'est une **transposition**.

> [!info] Prop
> $\mathfrak{S}_n$ est engendré par les transpositions.

> [!info] Prop
> $\mathfrak{S}_n$ est engendré par
>
> 1. les transpositions $(12), (13), \ldots, (1n)$ ;
> 2. ou les transpositions $(12), (23), \ldots, (n-1 \ n)$.

**Preuve :** Pour 1), soient $i < j$ ; alors $(1i)(1j)(1i) = (ij)$. Pour 2), il suffit de voir que chaque $(1i)$ est produit des $(12)(23)\cdots(n-1 \ n)$ :

$$(23)(12)(23) = (13)$$
$$(34)(13)(34) = (14)$$
$$\vdots$$
$$(k \ k+1)(1 \ k)(k \ k+1) = (1 \ k+1)$$

> [!note] Définition
> Soit $k \leqslant n$. On appelle **$k$-cycle** (ou cycle de longueur $k$) toute permutation pour laquelle il existe des éléments $i_1, i_2, \ldots, i_k$ distincts dans $\{1, \ldots, n\}$ tels que
> $$\sigma(i_1) = i_2, \quad \sigma(i_2) = i_3, \quad \ldots, \quad \sigma(i_{k-1}) = i_k, \quad \sigma(i_k) = i_1$$
> et si $j \notin \{i_1, \ldots, i_k\}$, $\sigma(j) = j$.

> [!info] Notation
> $(i_1 \ i_2 \ \ldots \ i_k)$.

> [!info] Rem
> $(i_1 \ i_2 \ \ldots \ i_k) = (i_2 \ i_3 \ \ldots \ i_k \ i_1)$.

> [!note] Définition
> Le **support** de $(i_1 \ i_2 \ \ldots \ i_k)$ est l'ensemble $\{i_1, i_2, \ldots, i_k\}$.

> [!info] Prop
> Dans $\mathfrak{S}_n$, pour tout $k \leqslant n$, les $k$-cycles sont conjugués, i.e. si $\sigma, \sigma'$ sont des $k$-cycles, $\exists \tau \in \mathfrak{S}_n$ tel que $\sigma' = \tau\sigma\tau^{-1}$.

**Preuve :** $\forall \tau \in \mathfrak{S}_n$,

$$\tau(i_1 \ \ldots \ i_k)\tau^{-1} = (\tau(i_1) \ \tau(i_2) \ \ldots \ \tau(i_k))$$

On utilise que l'action de $\mathfrak{S}_n$ sur $\{1, \ldots, n\}$ est $k$-fois transitive pour tout $k \leqslant n$, i.e. : si $i_1, \ldots, i_k$ sont distincts et $j_1, \ldots, j_k$ sont distincts, $\exists \sigma \in \mathfrak{S}_n$ tel que $\sigma(i_1) = j_1, \ldots, \sigma(i_k) = j_k$.

> [!note] Thm
> Pour $n \geqslant 3$, $\mathfrak{A}_n$ est engendré par les 3-cycles.

**Preuve :** $\mathfrak{S}_n$ est engendré par les transpositions et $\varepsilon(\text{transposition}) = -1$. Ainsi $\mathfrak{A}_n$ est engendré par les produits de 2 transpositions. Or $(ij)(jk) = (ijk)$. Si $i, j, k, l$ sont distincts,

$$(ij)(kl) = (ij)(jk)(jk)(kl) = (ijk)(jkl)$$

> [!info] Prop
> Si $n \geqslant 5$, les 3-cycles sont conjugués dans $\mathfrak{A}_n$.

**Preuve :** On sait que dans $\mathfrak{S}_n$ les 3-cycles sont conjugués : si $\tau(abc)\tau^{-1} = (a'b'c')$ et $\varepsilon(\tau) = 1$, c'est terminé. Si $\varepsilon(\tau) = -1$ : comme $n \geqslant 5$, il existe $d', e' \in \{1, \ldots, n\}$ avec $d' \neq e'$ et $d', e' \notin \{a', b', c'\}$. Alors $(e'd')(a'b'c')(e'd') = (a'b'c')$. Posons $\widetilde{\tau} = (e'd')\tau \in \mathfrak{A}_n$ ; alors $\widetilde{\tau}(abc)\widetilde{\tau}^{-1} = (a'b'c')$.

> [!info] Interprétation
> Si un sous-groupe distingué de $\mathfrak{A}_n$ ($n \geqslant 5$) contient un 3-cycle, alors il les contient tous, et donc il est égal à $\mathfrak{A}_n$.

> [!info] Prop
> Il existe un unique morphisme de groupes non trivial $\mathfrak{S}_n \longrightarrow (\mathbb{C}^*, \cdot)$ : c'est la signature $\varepsilon$.

**Preuve :** Soit $\varphi : \mathfrak{S}_n \longrightarrow (\mathbb{C}^*, \cdot)$ un tel morphisme, et soit $\tau$ une transposition. On a $\tau^2 = \mathrm{id}$, donc $\varphi(\tau) = \varphi(\tau)^2$, d'où $\varphi(\tau)^2 = 1$ et $\varphi(\tau) \in \{\pm 1\}$ : on voit $\varphi$ à valeurs dans $\{\pm 1\}$.

Si $\varphi$ est non trivial, il existe une transposition $\tau$ telle que $\varphi(\tau) = -1$. Or toutes les transpositions sont conjuguées et $(\mathbb{C}^*, \cdot)$ est commutatif, donc pour toute transposition $\tau'$, $\varphi(\tau') = -1$, d'où $\varphi = \varepsilon$.

### Décomposition en produit de cycles à supports disjoints

> [!note] Thm
> Soit $\sigma \in \mathfrak{S}_n$. Alors il existe des cycles $c_1, \ldots, c_r$ à supports 2 à 2 disjoints tels que
> $$\sigma = c_1 c_2 \cdots c_r$$
> De plus, cette décomposition est unique à l'ordre près des facteurs.
>
> (Rem. : comme les supports sont disjoints, $\forall i, j$, $c_i\sigma = \sigma c_i$.)

**Preuve :** Soit $\sigma \in \mathfrak{S}_n$. On considère le sous-groupe $\langle \sigma \rangle$ de $\mathfrak{S}_n$ engendré par $\sigma$, et l'action de ce sous-groupe sur $\{1, \ldots, n\}$. On considère les orbites $F_1, \ldots, F_r$ (y compris les orbites à 1 élément). Soit $k \in F_i$, et soit $s$ le plus petit entier tel que $\sigma^s(k) = k$. Alors $k, \sigma(k), \ldots, \sigma^{s-1}(k)$ sont distincts et $F_i = \{k, \sigma(k), \ldots, \sigma^{s-1}(k)\}$. Dans $F_i$, $\sigma$ agit comme le cycle $(k \ \sigma(k) \ \ldots \ \sigma^{s-1}(k))$. Chaque orbite donne un cycle dont le support est cette orbite.

### Description des classes de conjugaison dans $\mathfrak{S}_n$

> [!info] Prop
> Deux permutations $\sigma$ et $\sigma'$ sont conjuguées dans $\mathfrak{S}_n$ si et seulement si, $\forall k \in \{1, \ldots, n\}$, elles ont le même nombre de $k$-cycles dans leur décomposition en produit de cycles à supports disjoints.

**Preuve :** Si $\sigma = c_1 \cdots c_r$ et $\tau \in \mathfrak{S}_n$,

$$\tau\sigma\tau^{-1} = (\tau c_1 \tau^{-1})\cdots(\tau c_r \tau^{-1})$$

Chaque $\tau c_i \tau^{-1}$ est un cycle, de même longueur que $c_i$, et de support l'image par $\tau$ du support de $c_i$.

Réciproquement : si $\sigma = c_1 \cdots c_r$ et $\sigma' = c_1' \cdots c_r'$ avec $\operatorname{longueur}(c_i) = \operatorname{longueur}(c_i')$ pour tout $i$, on construit $\tau$ en envoyant $\operatorname{support}(c_i)$ sur $\operatorname{support}(c_i')$ en préservant l'ordre.

> [!note] Conséquence
> 1. L'ordre d'une permutation est le plus petit commun multiple (p.p.c.m.) des longueurs des cycles de sa décomposition.
> 2. Centre : pour $n \geqslant 3$, $Z(\mathfrak{S}_n) = \{\mathrm{Id}\}$.
> 3. Questions de simplicité :
>    - **Thm. :** Pour $n \neq 4$, $\mathfrak{A}_n$ est simple.
>    - **Rem. :** Pour $n = 4$, $\mathfrak{A}_4$ n'est pas simple, car il contient le sous-groupe distingué $V = \{\mathrm{Id}, (12)(34), (13)(24), (14)(23)\}$ ($\simeq \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$).
>    - Pour $n = 3$, $\mathfrak{A}_3 \simeq \mathbb{Z}/3\mathbb{Z}$.

---

## Preuve de la simplicité de $\mathfrak{A}_5$

**Preuve :**

### 1) $\mathfrak{A}_5$ est simple

Soit $H \triangleleft \mathfrak{A}_5$, $H \neq \{\mathrm{Id}\}$. Montrons que $H = \mathfrak{A}_5$.

**Rappel.** Si $h \in H$, $\forall g \in \mathfrak{A}_5$, $ghg^{-1} \in H$. $|\mathfrak{A}_5| = 60 = 2^2 \times 3 \times 5$.

> [!info] Rem
> On considère les orbites des éléments.

**1° Ordre 2 :** Ce sont les produits de 2 transpositions à support disjoint $(ab)(cd)(e)$. Combien ? $5$ choix pour $e$, $\binom{4}{2}$ pour $(ab)$, mais compté $2$ fois, donc
$$\frac{5 \cdot \binom{4}{2}}{2} = 15$$
Ces éléments sont conjugués dans $\mathfrak{A}_5$ : la conjugaison est vraie dans $\mathfrak{S}_5$, et comme on dispose de $5$ éléments, on peut choisir un conjugant de signature $+1$.

**2° Ordre 3 :** les 3-cycles. Combien ? le support donne $\binom{5}{3} = 10$ possibilités, et par un support donné on a $(abc)$ et $(acb)$, d'où $20$ éléments d'ordre 3.

On a vu qu'ils sont conjugués dans $\mathfrak{A}_5$.

**3° Ordre 5 :** cycles de longueur 5. Combien ? il y en a $4! = 24$.

Rappel de la forme : $(1\ i_1\ i_2\ i_3\ i_4)$.

> [!info] Rem
> En général, dans $\mathfrak{S}_n$, il y a $(n-1)!$ cycles de longueur $n$.

Ces 5-cycles ne sont pas tous conjugués dans $\mathfrak{A}_5$ : les 24 éléments d'ordre 5 se répartissent en **deux** classes de conjugaison de 12 éléments chacune. En effet chaque 5-cycle $\sigma$ a pour centralisateur dans $\mathfrak{A}_5$ le sous-groupe d'ordre 5 engendré par $\sigma$, d'où $|\mathrm{Cl}(\sigma)| = 60/5 = 12$; les 24 éléments d'ordre 5 se scindent donc en deux classes de 12 (ce qu'on voit aussi par $24 \nmid 60$).

> [!note] Lemme
> Soit $H \triangleleft \mathfrak{A}_5$. Si $H$ contient un 5-cycle, alors il les contient tous.

**Preuve :** Soit $\sigma$ un 5-cycle, $\sigma \in H$. Alors le sous-groupe cyclique $\langle \sigma \rangle$ engendré par $\sigma$ est contenu dans $H$, et $\langle \sigma \rangle$ contient tous les éléments d'ordre 5 engendrés par $\sigma$. En fait, tous les éléments d'ordre 5 engendrent un 5-cycle. Or les 5-cycles sont conjugués dans $\mathfrak{A}_5$. Donc $H$ contient tous les 5-cycles, et donc tous les éléments d'ordre 5.

On a maintenant obtenu tous les éléments de $\mathfrak{A}_5$ car
$$1 + 15 + 20 + 24 = 60$$

Montrons que $H = \mathfrak{A}_5$, avec $H \neq \{\mathrm{Id}\}$.

- Si $H$ contient un élément d'ordre 3, alors il les contient tous, d'où $|H| \geqslant 1 + 24 = 25$; on a $|H| \in \{30, 60\}$, donc $|H| = 60$.
- Si $H$ contient un élément d'ordre 2, alors il contient tous les éléments d'ordre 2, d'où $|H| \geqslant 1 + 15 = 16$. Mais $|H| \mid 60$, donc $|H| \in \{20, 30, 60\}$. Or $H$ contient aussi un élément d'ordre 3 ou 5, et alors $|H| = 60$. Si $H$ contient un élément d'ordre 5, alors $|H| \geqslant 1 + 24 = 25$, d'où $|H| \in \{30, 60\}$, et comme $|H| \mid 60$ avec $|H|$ contenant un élément d'ordre 3 ou 5, on a $|H| = 60$.

### 2) Cas général : $n \geqslant 6$

On se ramène au cas $n = 5$.

Soit $F \subset \{1, \dots, n\}$ une partie à 5 éléments, et $A_F$ le sous-groupe de $A_n$ des permutations qui valent $\mathrm{Id}$ sur le complémentaire de $F$ :
$$\sigma \in A_F \iff \operatorname{supp}(\sigma) \subset F$$
On a $A_F \simeq A_5$, qui est simple.

Soit $H \triangleleft A_n$, $H \neq \{e\}$. Alors $H \cap A_F \triangleleft A_F$, donc soit $H \cap A_F = \{\mathrm{Id}\}$, soit $H \cap A_F = A_5$, i.e. $A_F \subset H$. Dans ce dernier cas, comme $A_5$ contient des 3-cycles, $H$ aussi, et il les contient tous car ils sont conjugués, d'où $H = A_n$ (génération par les 3-cycles).

Il suffit donc de trouver une partie $F$ à 5 éléments telle que $H \cap A_F \neq \{\mathrm{Id}\}$ : il faut trouver dans $H$ un élément $\neq \mathrm{Id}$ qui a au moins $n - 5$ points fixes.

Soit $\sigma \in H$, $\sigma \neq \mathrm{Id}$. On a $\forall \tau \in A_n$, $\tau \sigma \tau^{-1} \in H$, d'où
$$\tau \sigma \tau^{-1} \sigma^{-1} \in H$$
On va choisir $\tau$ convenablement pour que $\tau \sigma \tau^{-1} \sigma^{-1}$ ait au moins $n - 5$ points fixes. Prenons $\tau$ un 3-cycle : $\tau = (a\ b\ c)$, $\tau^{-1} = (a\ c\ b)$. Alors
$$\sigma \tau \sigma^{-1} = (\sigma(a)\ \sigma(b)\ \sigma(c))$$
Comme $\sigma \neq \mathrm{Id}$, il existe $a$ tel que $\sigma(a) \neq a$. On prend $b = \sigma(a)$, ce qui donne
$$\sigma' = \tau \sigma \tau^{-1} \sigma^{-1} = (a\ b\ c)\,(\sigma(a)\ \sigma(b)\ \sigma(c))$$
Choisissons $c$ pour que $\sigma' \neq \mathrm{Id}$ : on prend $c \notin \{a, b, \sigma(b)\}$. Alors $\sigma'(b) \neq b$ : en effet
$$\sigma'(b) = \tau\sigma\tau^{-1}\sigma^{-1}(b) = \tau\sigma\tau^{-1}(a) = \tau\sigma(b)$$
et $\tau \sigma(b) = b \iff \sigma(b) = \tau^{-1}(b) = c$, mais $c \neq \sigma(b)$, donc $\sigma'(b) \neq b$.

## Complément : groupe simple d'ordre 60

> [!note] Thm
> Soit $G$ un groupe simple d'ordre 60. Alors $G \simeq \mathfrak{A}_5$.

**Preuve :** On essaie de faire agir $G$ non trivialement sur un ensemble à 5 éléments. On a alors un morphisme
$$\varphi : G \to \mathfrak{S}_5$$
avec $\ker \varphi \neq G$. Comme $G$ est simple, $\ker(\varphi) = \{\mathrm{Id}\}$, i.e. $\varphi$ injectif. Donc $G$ est isomorphe à un sous-groupe de $\mathfrak{S}_5$ de cardinal 60, i.e. à un sous-groupe d'indice 2 de $\mathfrak{S}_5$, donc à $\mathfrak{A}_5$.

On cherche donc à faire agir $G$ sur un ensemble $G/H$ de cardinal 5, par translation à gauche : il faut montrer que $G$ possède un sous-groupe d'indice 5.

> [!info] Rem
> $G$ ne possède pas de sous-groupe d'indice $\leqslant 4$.
>
> En effet, si $K \subset G$ est d'indice $\leqslant 4$, on considère l'action par translation à gauche sur $G/K$, donc
> $$\Psi : G \to \mathfrak{S}(G/K), \qquad \text{ordre } 60 \to \text{ordre } \leqslant 4!$$
> C'est impossible : $\Psi$ serait non trivial, donc injectif (car $G$ simple), mais $|G| = 60 > 4!$.

On fait une preuve par l'absurde : on suppose que l'indice de tout sous-groupe propre de $G$ est $\geqslant 6$.

$|G| = 60 = 2^2 \times 3 \times 5$.

**Les 5-Sylow.** Leur nombre $k$ vérifie
$$k \equiv 1 \bmod 5 \quad \text{et} \quad k \mid 12$$
d'où $k = 6$, car $k = 1$ est impossible ($G$ simple, un unique 5-Sylow serait distingué). Ceci donne $6 \times 4 = 24$ éléments d'ordre 5.

**Les 2-Sylow.** Leur nombre $k$ vérifie
$$k \text{ impair} \quad \text{et} \quad k \mid 15$$
d'où $k \in \{1, 3, 5, 15\}$. Or tous les 2-Sylow sont conjugués, donc $k$ est le cardinal d'une orbite, i.e. l'indice d'un stabilisateur, donc $k \geqslant 6$; d'où $k = 15$.

> [!note] Propriété
> Si $S_1$ et $S_2$ sont des 2-Sylow, alors $S_1 \cap S_2 = \{e\}$.

**Preuve :** Sinon $|S_1 \cap S_2| = 2$, écrivons $S_1 \cap S_2 = \{e, u\}$ avec $u^2 = e$. On considère le commutant de $u$ :
$$C(u) = \{g \in G,\ gu = ug\}$$
Comme $S_1$ et $S_2$ sont commutatifs, on a $S_1 \subset C(u)$ et $S_1 \cap S_2 \subset C(u)$ (et aussi $S_2 \subset C(u)$), d'où
$$4 \mid |C(u)| \quad \text{et} \quad 6 \leqslant |C(u)| \quad \Longrightarrow \quad |C(u)| = 8$$
De plus, on a $[G : C(u)] = 6$, d'où $|C(u)| \leqslant \frac{60}{6} = 10$. Ceci contredit $8 \mid |C(u)|$ et $|C(u)| \neq G$. Donc $S_1 \cap S_2 = \{e\}$.

**Conclusion.** On a $3 \times 15 = 45$ éléments dans $G$ d'ordre 2 ou 4 (chaque 2-Sylow d'ordre 4 fournit 3 éléments non neutres, et les 2-Sylow se coupent deux à deux trivialement). On aurait alors
$$1 + 24 + 45 > 60$$
éléments dans $G$, contradiction.

> [!info] Rem
> On a vu que nécessairement $C(u) = G$. Alors $u \in Z(G) \triangleleft G$; comme $G$ est simple, $Z(G) = \{e\}$, impossible.

Donc $G$ possède un sous-groupe d'indice 5, et $G \simeq \mathfrak{A}_5$.

## Application : sous-groupes finis de $SO(3)$

> [!note] Prop
> $SO(3)$ possède un sous-groupe fini isomorphe à $A_5$.

**Preuve :** Soit $G$ un sous-groupe fini de $SO(3)$. Il agit sur $X = \{\text{pôles}\}$, et le nombre d'orbites $N$ vaut $2$ ou $3$.

**Cas $N = 3$ avec $e_1 = 2$, $e_2 = 3$, $e_3 = 5$ :** $|G| = 60$. Montrons que dans cette situation $G \simeq A_5$; pour cela, montrons que $G$ est simple.

Les orbites ont pour cardinal
$$|O_1| = 30, \quad |O_2| = 20, \quad |O_3| = 12$$
Comme les orbites sont de cardinaux distincts, pour tout $x \in X$, $x$ et $-x$ sont dans la même orbite. Ainsi $\mathbb{R}x$ est l'axe de la rotation dont $x$ est un pôle, et pour chaque orbite on obtient des axes de rotations.

- $O_1$ : 15 axes de rotations, qui stabilisent un des points de l'orbite. Comme les stabilisateurs des points d'une même orbite sont conjugués, ces rotations sont dans des groupes cycliques d'ordre 2. On a ainsi 15 axes de rotations d'angle $\pi$.
- $O_2$ : 10 axes de rotations, les stabilisateurs sont des sous-groupes cycliques d'ordre 3 (2 à 2 conjugués).
- $O_3$ : 6 axes de rotations, les stabilisateurs sont des sous-groupes cycliques d'ordre 5 (2 à 2 conjugués).

Comptons les éléments :
$$1 \text{ élément d'ordre } 1 : \mathrm{Id}, \qquad 15 \text{ d'ordre } 2 \text{ via } O_1, \qquad 20 \text{ d'ordre } 3 \text{ via } O_2, \qquad 24 \text{ d'ordre } 5 \text{ via } O_3$$
on a tous les éléments de $G$.

Soit $H \triangleleft G$, $H \neq \{e\}$.
- Si $H$ contient un élément d'ordre 5, il contient le sous-groupe cyclique qu'il engendre, qui est un stabilisateur. Il contient tous ses conjugués donc tous les éléments d'ordre 5. Ainsi $|H| \geqslant 24 + 1 = 25$, et comme $|H| \mid 60$, on a $|H| \in \{30, 60\}$. Si $|H| = 30$, $H$ contient un élément d'ordre 3 (car $3 \mid 30$), donc tous les éléments d'ordre 3, d'où $|H| \geqslant 1 + 24 + 20 = 45 > 30$ : contradiction. Donc $|H| = 60$.
- Si $H$ contient un élément d'ordre 3, de même il les contient tous, d'où $|H| \geqslant 1 + 20 = 21$, et $|H| \in \{30, 60\}$. Si $|H| = 30$, il contient un élément d'ordre 5 (car $5 \mid 30$), donc tous, d'où $|H| \geqslant 45 > 30$ : contradiction. Donc $H = G$.
- Si $H$ ne contient que des éléments d'ordre 2, il les contient tous, d'où $|H| \geqslant 1 + 15 = 16$, et $|H| \in \{20, 30, 60\}$. Si $|H| = 20$ (resp. $30$), il contient un élément d'ordre 5 (resp. 3), contradiction. Donc $H = G$.

Donc $G$ est simple et $|G| = 60$, d'où $G \simeq \mathfrak{A}_5$ (voir [[A5单性与60阶群]]).

## Sous-groupes distingués de $\mathfrak{S}_n$

> [!note] Thm
> Pour $n \geqslant 5$, les seuls sous-groupes distingués de $\mathfrak{S}_n$ sont $\{\mathrm{Id}\}$, $\mathfrak{A}_n$ et $\mathfrak{S}_n$.

**Preuve :** Soit $H \triangleleft \mathfrak{S}_n$, $H \neq \{\mathrm{Id}\}$. On a $H \cap \mathfrak{A}_n \triangleleft \mathfrak{A}_n$, donc $H \cap \mathfrak{A}_n = \{\mathrm{Id}\}$ ou $H \cap \mathfrak{A}_n = \mathfrak{A}_n$, i.e. $\mathfrak{A}_n \subset H \subset \mathfrak{S}_n$. Comme $\mathfrak{A}_n$ est d'indice 2, $H = \mathfrak{A}_n$ ou $H = \mathfrak{S}_n$.

Reste le cas $H \cap \mathfrak{A}_n = \{\mathrm{Id}\}$. Considérons
$$\varepsilon_{|H} : H \to \{\pm 1\}, \qquad \operatorname{Ker}(\varepsilon_{|H}) = H \cap \mathfrak{A}_n = \{\mathrm{Id}\}$$
donc $\varepsilon_{|H}$ est injective, d'où $|H| = 1$, i.e. $H = \{\mathrm{Id}\}$, cas écarté. Sinon $H = \{\mathrm{Id}, u\}$ avec $u^2 = \mathrm{Id}$ : comme $H \triangleleft G$, on a $\forall g \in G$, $gug^{-1} = u$, i.e. $u \in Z(\mathfrak{S}_n) = \{\mathrm{Id}\}$, impossible.

## Sous-groupes d'indice $n$ de $\mathfrak{S}_n$

> [!note] Prop
> Soit $H \subset \mathfrak{S}_n$ un sous-groupe d'indice $n$. Alors $H \simeq \mathfrak{S}_{n-1}$.

**Preuve :** $|\mathfrak{S}_n / H| = n$. $\mathfrak{S}_n$ agit sur $\mathfrak{S}_n/H$ par translations à gauche, d'où un morphisme
$$\varphi : \mathfrak{S}_n \to \mathfrak{S}(\mathfrak{S}_n/H)$$
$\varphi$ est non trivial, donc $\operatorname{Ker} \varphi \neq \mathfrak{S}_n$; et $\operatorname{Ker} \varphi \triangleleft \mathfrak{S}_n$.

Supposons $n \geqslant 5$. D'après le théorème précédent, $\operatorname{Ker} \varphi = \{\mathrm{Id}\}$ ou $\mathfrak{A}_n$. Mais
$$\operatorname{Ker} \varphi = \bigcap_{g \in \mathfrak{S}_n} gHg^{-1} \subset H$$
donc si $\operatorname{Ker} \varphi = \mathfrak{A}_n$, on aurait $|\operatorname{Ker} \varphi| = \frac{n!}{2} > (n-1)! = |H|$, impossible. Donc $\operatorname{Ker} \varphi = \{\mathrm{Id}\}$ : $\varphi$ est injectif, donc bijectif (cardinalité).

Ainsi $\varphi$ réalise un isomorphisme entre $\mathfrak{S}_n$ et le groupe des permutations de l'ensemble $\mathfrak{S}_n/H$, de cardinal $n$. De plus $\varphi(H)$ est le stabilisateur de l'élément $H$ de $\mathfrak{S}_n/H$ : si $|X| = n$ et $\mathfrak{S}_n \simeq \mathfrak{S}(X)$, alors pour $x \in X$,
$$\operatorname{Stab}(x) \simeq \mathfrak{S}_{n-1} \quad \text{car} \quad \mathfrak{S}(X - \{x\}) \simeq \mathfrak{S}_{n-1}$$

## Groupe dérivé de $\mathfrak{S}_n$ et de $\mathfrak{A}_n$

> [!info] Rappel
> $G$ groupe, $\mathfrak{D}(G) = \langle [x,y] = xyx^{-1}y^{-1},\ x, y \in G \rangle$, et $G/\mathfrak{D}(G)$ est le « plus gros quotient abélien de $G$ ».

> [!note] Thm
> 1. $\mathfrak{D}(\mathfrak{S}_n) = \mathfrak{A}_n$.
> 2. Pour $n \geqslant 5$, $\mathfrak{D}(\mathfrak{A}_n) = \mathfrak{A}_n$.

**Preuve :** $\varepsilon(xyx^{-1}y^{-1}) = 1$, d'où $\mathfrak{D}(\mathfrak{S}_n) \subset \mathfrak{A}_n$, et comme les 3-cycles sont dans $\mathfrak{A}_n$, $\mathfrak{D}(\mathfrak{A}_n) \subset \mathfrak{D}(\mathfrak{S}_n) \subset \mathfrak{A}_n$.

Pour montrer $\mathfrak{A}_n \subset \mathfrak{D}(\mathfrak{S}_n)$ (ou $\mathfrak{A}_n \subset \mathfrak{D}(\mathfrak{A}_n)$ si $n \geqslant 5$), montrons que les 3-cycles sont dans les groupes dérivés. Soit $\tau = (abc)$; alors $\tau^2 = (acb)$. Les 3-cycles sont conjugués dans $\mathfrak{S}_n$, et aussi dans $\mathfrak{A}_n$ si $n \geqslant 3$ : il existe $\sigma \in \mathfrak{S}_n$ (et même $\sigma \in \mathfrak{A}_n$ si $n \geqslant 3$) tel que
$$\sigma \tau \sigma^{-1} = \tau^2$$
d'où
$$\tau^2 = \sigma \tau \sigma^{-1} = \tau \cdot [\tau^{-1}, \sigma^{-1}] \ \ \text{ou bien} \ \ \tau^2 \tau^{-1} = \tau = [\sigma, \tau]$$
Ainsi $\tau = \sigma\tau\sigma^{-1}\tau^{-1} = [\sigma, \tau] \in \mathfrak{D}(\mathfrak{S}_n)$ : chaque 3-cycle est un commutateur, donc $\mathfrak{A}_n \subset \mathfrak{D}(\mathfrak{S}_n)$ (resp. $\mathfrak{D}(\mathfrak{A}_n)$).

## Complément : retour sur le cas $N = 3$, $e_1 = 2$, $e_2 = 3$, $e_3 = 4$

des sous-groupes finis de $SO(3)$.

> [!note] Prop
> $G \simeq \mathfrak{S}_4$.

**Preuve :** On a vu $|G| = 24$. On fait agir $G$ sur un ensemble à 4 éléments, de façon fidèle. Les orbites ont pour cardinal
$$|O_1| = 12, \quad |O_2| = 8, \quad |O_3| = 6$$
Comme elles sont de cardinal impair, si $x \in O_i$ alors $-x \in O_i$, d'où l'axe $\mathbb{R}x$ de la rotation associée à $x$; cette rotation est dans $\operatorname{Stab}(x)$.

On considère $O_2$ : ses éléments donnent $4$ axes de rotations. $G$ agit sur cet ensemble de 4 droites, d'où un morphisme
$$\varphi : G \to \mathfrak{S}_4$$

Si $g \in \ker \varphi$, $g$ stabilise chacune des droites; $g$ agit par $\pm \mathrm{Id}$ sur chacune d'elles, car ce sont des droites propres et les valeurs propres de $g$ sont $\pm 1$. Alors $g^2$ agit par $\mathrm{Id}$ sur ces 4 droites, et donc $g^2 = \mathrm{Id}$ car c'est une rotation ayant $1$ pour valeur propre de multiplicité $\geqslant 2$. Donc $g$ est une rotation d'angle $\pi$, et $g$ agit par $-\mathrm{Id}$ sur chacune des 4 droites (sinon $g$ est dans le stabilisateur des pôles de ces droites, et ce stabilisateur est de cardinal 3). Finalement, l'axe de $g$ est orthogonale à ces droites.

Comme $\ker \varphi \triangleleft G$, pour tout $h \in G$, $hgh^{-1}$ est encore une rotation d'angle $\pi$, qui vaut $-\mathrm{Id}$ sur les droites, donc de même axe que $g$ : les pôles de $g$ sont stables par $h$, et ainsi par tous les éléments de $G$.

Il y aurait donc une orbite à 3 éléments : impossible.

D'où $\ker \varphi = \{\mathrm{Id}\}$, et $\varphi$ est un isomorphisme.

---

## Produit semi-direct et suites exactes

**Produit semi-direct**

Rappel Produit direct de 2 groupes. $N_1, N_2$ groupes. Alors on munit $G = N_1 \times N_2$ d'une structure de groupe
$$(N_1 \times N_2) \times (N_1 \times N_2) \longrightarrow N_1 \times N_2, \qquad (n_1, n_2) \times (n'_1, n'_2) \longmapsto (n_1 n'_1, n_2 n'_2)$$

Ceci munit $G$ d'une loi de groupe, de neutre $(e_1, e_2)$, inverse $(n_1, n_2)^{-1} = (n_1^{-1}, n_2^{-1})$

> [!info] Rem.
> $G_1 = N_1 \times \{e_2\}$, $G_2 = \{e_1\} \times N_2$ sont des sous-groupes distingués de $G$ qui commutent, $G_1 \cap G_2 = \{(e_1, e_2)\}$ ; projections $G \longrightarrow N_1$, $G \longrightarrow N_2$ morphismes surjectifs
> $$(n_1, n_2) \mapsto n_1, \qquad (n_1, n_2) \mapsto n_2$$
> de noyaux respectifs $N_2$ et $N_1$.

**Notion de suite exacte de groupes (courte)**

C'est la donnée de groupes $N, G, Q$ et de $2$ morphismes
$$N \xrightarrow{i} G \xrightarrow{p} Q \quad \text{avec } Im(i) = Ker(p)$$
avec $i$ injective, $p$ surjective.

**Exemple** : $N \triangleleft G$
$$N \xrightarrow{i} G \xrightarrow{\pi} G/N.$$

> [!info] Rem.
> Soit $\{1\}$ le groupe à 1 élément. Dire $i$ injective, c'est dire $\{1\} \xrightarrow{} N \xrightarrow{i} G$ exacte en $G$. Dire $p$ est surjective, c'est dire $G \xrightarrow{p} Q \to \{1\}$ exacte en $Q$.

Suite exacte courte
$$\{1\} \to N \xrightarrow{i} G \xrightarrow{p} Q \to \{1\}$$
à chaque groupe, image du morphisme qui arrive = noyau du morphisme qui part.

Ex. produit
$$\{1\} \to G_1 \xrightarrow{i} G \xrightarrow{p} N_2 \to \{1\}$$
$$N_1 \times N_2$$

> [!note] Déf
> **Suite exacte scindée.** C'est une suite exacte (courte) $\{1\} \to N \xrightarrow{i} G \xrightarrow{p} Q \to \{1\}$ $(*)$ telle que $\exists s : Q \to G$ morphisme de groupes tq. $p \circ s = id_Q$. Une telle $s$ est appelée une section.

> [!note] Prop
> Une suite exacte $(*)$ est scindée ssi il existe un sous-groupe $Q_1 \subset G$ tel que la restriction $p|_{Q_1} : Q_1 \to Q$ isomorphisme.

En effet. si on dispose d'une section $s$, on prend $Q_1 = s(Q)$ ; inversement, si on dispose de $Q_1$, on prend $s = (p|_{Q_1})^{-1}$.

> [!info] Rem.
> Si $(*)$ est scindée, on dispose dans $G$ de 2 sous-groupes $Q_1$ et $N_1 = i(N)$ avec
> 1) $N_1 \triangleleft G$ (car $N_1 = \text{Ker } p$)
> 2) $N_1 \cap Q_1 = \{e\}$
> 3) $N_1 Q_1 = Q_1 N_1 = G$.
> (en effet, si $g \in G$, $p(g) \in Q$, $s \circ p(g) \in Q_1$, on a alors $p(g) = p(g_1)$, donc $g_1^{-1} g \in \text{Ker } p = N_1$, $g = g_1 n_1$.)

2) et 3) disent que l'application
$$N_1 \times Q_1 \xrightarrow{\varphi} G, \qquad (n_1, q_1) \longmapsto n_1 q_1$$
est bijective.

injectivité : $n_1 q_1 = n_2 q_2$, $n_2^{-1} n_1 = q_2 q_1^{-1} = e$ via 2), avec $\underbrace{n_2^{-1} n_1}_{\in N_1}$ et $\underbrace{q_2 q_1^{-1}}_{\in Q_1}$.

On transporte par $\varphi$ la structure de groupe de $G$ à l'ensemble $N_1 \times Q_1$
$$\begin{array}{ccc}
(N_1 \times Q_1) \times (N_1 \times Q_1) & \xrightarrow{\varphi \times \varphi} & G \times G \\
\downarrow & & \downarrow \text{loi de } G \\
N_1 \times Q_1 & \xleftarrow{\varphi^{-1}} & G
\end{array}$$

$$(n_1, q_1) \times (n_2, q_2) \longmapsto (n_1 q_1, n_2 q_2)$$
$$\downarrow$$
$$(n_1 q_1 n_2 q_1^{-1}, q_1 q_2) \longleftarrow n_1 q_1 n_2 q_2 = \underbrace{n_1}_{\in N_1} \underbrace{q_1 n_2 q_1^{-1}}_{\in N_1} \underbrace{q_1 q_2}_{\in Q_1}$$

> [!note] Prop
> $(N_1 \times Q_1) \times (N_1 \times Q_1) \longrightarrow (N_1 \times Q_1)$ définie par $(n_1, q_1) \times (n_2, q_2) \longmapsto (n_1 q_1 n_2 q_1^{-1}, q_1 q_2)$ munit $N_1 \times Q_1$ d'une loi de groupe.

On voit apparaître l'action de $Q_1$ par automorphisme intérieur sur $N_1$
$$f : Q_1 \longrightarrow Aut(N_1), \qquad q \longmapsto (n \mapsto q n q^{-1}), \qquad f \text{ morphisme}$$

**Produit semi-direct**

> [!note] Déf
> Soit $N$ et $Q$ groupes. $f : Q \rightarrow Aut(N)$ morphisme de groupes. Alors on munit l'ensemble $N \times Q$ d'une loi de groupe par
> $$(N \times Q) \times (N \times Q) \longrightarrow N \times Q, \qquad (n, q) \cdot (n', q') \longmapsto (n f(q)(n'), q q')$$
> de neutre $(e_N, e_Q)$. On appelle produit semi-direct de $N$ par $Q$ via le morphisme $f$.

On le note $N \rtimes_f Q$.

> [!info] Rem.
> Si $f$ est le morphisme trivial, i.e. $\forall q \in Q, f_q = Id_N$, alors on retrouve le groupe produit direct.

**Preuve :** Associativité :
$$((n_1, q_1) \cdot (n_2, q_2)) \cdot (n_3, q_3) \overset{?}{=} (n_1, q_1) \cdot ((n_2, q_2) \cdot (n_3, q_3))$$
$$(n_1 f_{q_1}(n_2), q_1 q_2) \cdot (n_3, q_3) = (n_1, q_1) \cdot (n_2 f_{q_2}(n_3), q_2 q_3)$$
$$= (n_1 f_{q_1}(n_2) f_{q_1 q_2}(n_3), q_1 q_2 q_3) = (n_1 \cdot f_{q_1}(n_2 f_{q_2}(n_3)), q_1 q_2 q_3) = (n_1, q_1) \cdot ((n_2, q_2) \cdot (n_3, q_3)).$$

Remarques :
1) On dispose dans $G$ de sous-groupes $N = N \times \{e_Q\}$, $Q = \{e_N\} \times Q$, respectivement isomorphes à $N$ et $Q$.
2) $N \triangleleft G$
3) $G = NQ = QN$ : $(n, e_Q) \cdot (e_N, q) = (n, q)$, $(e_N, q)^{-1} = (e_N, q^{-1})$.

Par 2). D'après 3). $G$ engendré par $N$ et $Q$. Pour voir $N \triangleleft G$, il faut vérifier
$$\forall n \in N, \forall q \in Q, \quad (e_N, q) (n, e_Q) (e_N, q^{-1}) \in N$$
$$(f_q(n), q) \cdot (e_N, q^{-1}) = (f_q(n), e) \in N.$$

> [!info] Rem.
> Dans le produit semi-direct, « l'automorphisme $f_q \in Aut(N)$ » devient l'automorphisme intérieur par $(e, q)$.

4) $N \cap Q = \{e\}$.

**Avertissement**

Soit $G$ groupe. $N, Q \subset G$ sous-groupes tels que
1) $N \triangleleft G$
2) $N \cap Q = \{e\}$
3) $G = NQ = QN$

Alors $G$ est isomorphe au produit semi-direct $N \rtimes Q$ où
$$f: Q \to Aut(N), \qquad q \mapsto (n \mapsto qnq^{-1})$$

En effet, il résulte de 2) et 3) que $G$ est bijective en $N \times Q \to G$
$$(nq) \mapsto nq$$
et la loi de $G$ donne : $nq \cdot n'q' = n(qn'q^{-1})qq' = n f(q)(n') qq'$.

Exemples
1) Groupes symétriques $\mathfrak{S}_n$
$$\{1\} \to \mathfrak{A}_n \to \mathfrak{S}_n \xrightarrow{\varepsilon} \{+1\} \to \{1\} \quad \text{suite exacte}$$
Soit $s: \{+1\} \to \mathfrak{S}_n$ section
$$1 \mapsto Id, \qquad -1 \mapsto (12)$$
Ainsi $\mathfrak{S}_n \simeq \mathfrak{A}_n \rtimes \mathbb{Z}/2\mathbb{Z}$
$$f(-1) = \phi: \mathfrak{A}_n \to \mathfrak{A}_n, \qquad \sigma \mapsto (12)\sigma(12)$$

2) Le Groupe linéaire
$$\{1\} \to SL_n(k) \to GL_n(k) \xrightarrow{det} k^* \to \{1\} \quad \text{exacte}$$
$$\begin{pmatrix} \lambda & 0 \\ 0 & I_{n-1} \end{pmatrix} \leftarrow \lambda \quad \text{section}$$
d'où produit semi-direct $GL_n(k) = SL_n(k) \rtimes k^*$
$$f: (k^*, \cdot) \to Aut(SL_n(k))$$
$$\lambda \mapsto (M \mapsto \begin{pmatrix} \lambda & & \\ & \ddots & \\ & & \lambda \end{pmatrix} M \begin{pmatrix} \lambda^{-1} & & \\ & \ddots & \\ & & \lambda^{-1} \end{pmatrix})$$

3) Groupe diédral $D_{2n}$
$$D_{2n} = \text{Groupe des isométries du plan qui préservent le polygone}$$
$$\text{régulier } P_n \text{ à } n \text{ côtés}.$$
$$P_n : \text{sommets } \{ e^{2i\frac{k\pi}{n}} , \ 0 \leq k \leq n-1 \}$$
$$\{1\} \longrightarrow \{\text{Rotations}\} \longrightarrow D_{2n} \xrightarrow{\text{det}} \{\pm 1\} \longrightarrow \{1\}$$
$$\quad \quad \quad \mathbb{Z}/n\mathbb{Z} \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad s \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad$$
$$D_{2n} \simeq \mathbb{Z}/n\mathbb{Z} \rtimes_f \mathbb{Z}/2\mathbb{Z}.$$

> [!info] Rem.
> Un produit semi direct dépend à priori du choix du morphisme $f : Q \longrightarrow \text{Aut}(N)$. Il se peut que deux $f$ distincts conduisent à des produits semi directs isomorphes. Deux situations conduisent à un isomorphisme :
> 1) Via un automorphisme de $Q$.

$$f : Q \longrightarrow \text{Aut}(N) \text{ morphisme}, \qquad g : Q \longrightarrow \text{Aut}(N)$$
$$\begin{array}{ccc} Q & \xrightarrow{g} & \text{Aut}(N) \\ a \uparrow & \nearrow f & \\ Q & & \end{array}$$
On suppose $\exists a \in \text{Aut}(Q)$ t.q. $f = g \circ a$.

Alors les 2 produits semi-directs sont isomorphes
$$N \rtimes_f Q \xrightarrow{\varphi} N \rtimes_g Q, \qquad (n, q) \longmapsto (n, a(q))$$

Prop: $\varphi$ isomorphisme de groupes.

**Preuve :** $\varphi((n,q) \cdot (n',q')) = \varphi(n f(q)(n') , qq') = (n f(q)(n') , a(qq')) = (n g(a(q))(n') , a(q) a(q')) = (n, a(q)) \cdot (n', a(q'))$.

2) Via conjugaison par un élément de $Aut(G)$

Soit $h \in Aut(G)$, alors on peut considérer la conjugaison par $h$ dans $Aut(N)$
$$Aut(N) \to Aut(N), \qquad g \mapsto h g h^{-1}$$
Si $f : Q \to Aut(N)$, on lui associe $g : Q \to Aut(N)$
$$q \mapsto h f(q) h^{-1}$$

Prop. L'application $\Psi : N \rtimes_f Q \to N \rtimes_g Q$, $(n, q) \mapsto (h(n), q)$, est un isomorphisme de groupes.

**Preuve :** $\Psi((n, q)(n', q')) = \Psi(n f(q)(n'), qq') = (h(n f(q)(n')), qq') = (h(n) g(q)(h(n')), qq') = (h(n), q) (h(n'), q')$.

## Automorphismes de $\mathbb{Z}/n\mathbb{Z}$

Un automorphisme doit envoyer un générateur sur un générateur.

Générateurs de $(\mathbb{Z}/n\mathbb{Z}, +)$ : ce sont les classes mod $n$ d'entiers $r$, $r \wedge n = 1$. Il y en a $\varphi(n)$, $\varphi$ fonction d'Euler. Ce sont exactement les éléments inversibles de l'anneau $(\mathbb{Z}/n\mathbb{Z}, +, \cdot)$.

> [!note] Prop
> Soit $u \in Aut(\mathbb{Z}/n\mathbb{Z})$, alors $u$ est complètement déterminé par l'image $u(\bar{1})$ et l'application $Aut(\mathbb{Z}/n\mathbb{Z}) \to (\mathbb{Z}/n\mathbb{Z})^*$, $u \mapsto u(\bar{1})$, est un isomorphisme de groupes.

En effet, $u \circ v(\bar{1}) = u(v(\bar{1})) = u(\bar{1}) v(\bar{1})$.

## Le groupe multiplicatif $(\mathbb{Z}/n\mathbb{Z})^*$

**Lemme des restes chinois.** Si $n_1 \wedge n_2 = 1$, on a un isomorphisme d'anneaux
$$\mathbb{Z}/n_1 n_2 \mathbb{Z} \simeq \mathbb{Z}/n_1 \mathbb{Z} \times \mathbb{Z}/n_2 \mathbb{Z}$$
d'où $(\mathbb{Z}/n_1 n_2 \mathbb{Z})^* \simeq (\mathbb{Z}/n_1 \mathbb{Z})^* \times (\mathbb{Z}/n_2 \mathbb{Z})^*$.

Ainsi, si $n = p_1^{\alpha_1} \dots p_r^{\alpha_r}$, $p_i$ premiers $2$ à $2$,
$$(\mathbb{Z}/n\mathbb{Z})^* \simeq \prod (\mathbb{Z}/p_i^{\alpha_i} \mathbb{Z})^*$$

$1^{er}$ cas. $p \geq 3$
$$|(\mathbb{Z}/p^\alpha \mathbb{Z})^*| = \varphi(p^\alpha) = p^\alpha - p^{\alpha-1} = p^{\alpha-1}(p-1)$$

> [!note] Thm.
> $p \geq 3$. $(\mathbb{Z}/p^\alpha \mathbb{Z})^* \simeq \mathbb{Z}/p^{\alpha-1}(p-1)\mathbb{Z}$, groupe cyclique.

**Preuve.** Pour $\alpha = 1$, groupe multiplicatif du corps fini $\mathbb{Z}/p\mathbb{Z} = \mathbb{F}_p$. Plus général, le cardinal d'un corps fini est de la forme $q = p^n$ et pour un cardinal $q$, il est unique à isomorphisme près, noté $\mathbb{F}_q$. On a $(\mathbb{F}_q)^* \simeq \mathbb{Z}/(q-1)\mathbb{Z}$. En effet on sait $|(\mathbb{F}_q)^*| = q-1$. Il faut trouver un élément d'ordre $q-1$.

De façon générale, si $d \mid q-1$, on s'intéresse aux éléments d'ordre $d$ de $\mathbb{F}_q^*$.

Supposons $\exists x$ d'ordre $d$, $x^d = 1$. $x$ est racine du polynôme $X^d - 1 \in \mathbb{F}_q[X]$. Ce polynôme a au plus $d$ racines. Par ailleurs, le groupe cyclique $<x>$ possède $d$ éléments, dont l'ordre divise $d$ et qui sont donc racines de ce polynôme.

S'il existe un élément d'ordre $d$, tout autre élément d'ordre $d$, qui doit être racine de ce polynôme, est nécessairement dans le groupe cyclique engendré par $x$.

Appelons $N(d)$ le nombre d'éléments d'ordre $d$ dans $\mathbb{F}_q^*$. On a : si $N(d) \neq 0$, alors $N(d) = \varphi(d)$.
$$\text{Dans } \mathbb{F}_q^* , \ q-1 = \sum_{d \mid q-1} N(d)$$
$$\text{Dans } \mathbb{Z}/(q-1)\mathbb{Z} , \ q-1 = \sum_{d \mid q-1} \varphi(d)$$
$$\left. \begin{array}{l} \forall d \mid q-1 \ , \ N(d) = \varphi(d) \\ \text{en particulier } N(q-1) = \varphi(q-1) \neq 0 \end{array} \right\}$$

Pour $\alpha$ quelconque $\geq 2$. Il suffit de trouver un élément $x$ d'ordre $p^{\alpha-1}$ et un élément $y$ d'ordre $p-1$, car alors, comme $p^{\alpha-1} \wedge (p-1) = 1$, $xy$ sera d'ordre $p^{\alpha-1}(p-1)$.

> [!note] Lemme
> Dans un groupe, si $a$ d'ordre $r$, $b$ d'ordre $s$, $r \wedge s = 1$, $ab = ba$, alors $ab$ d'ordre $rs$.

Soit $t$ ordre de $ab$ : $(ab)^t = a^t b^t = e$, $a^t = b^{-t} \in \langle a \rangle \cap \langle b \rangle$, d'où $a^t = e$, $b^t = e \Rightarrow r \mid t \ , \ s \mid t \Rightarrow rs \mid t$.

Pour $p^{\alpha-1}$ : On a $(1+p)^{p^k} = 1 + \lambda p^{k+1}$, $\lambda \equiv 1 \bmod p$.

Preuve: $k=1$. $(1+p)^p = 1 + \sum_{r=1}^{p-1} \binom{p}{r} p^r + p^p$. On a : si $1 \leq r \leq p-1$, $p \mid \binom{p}{r}$. $(1+p)^p = 1 + p^2 + u p^3 = 1 + (1+up)p^2$.

Récurrence. Si vrai pour $k$. $(1+p)^{p^{k+1}} = (1+p)^{p^k \cdot p} = \left[ (1+p)^{p^k} \right]^p = (1 + \lambda p^{k+1})^p = 1 + \sum_{r=1}^{p-1} \binom{p}{r} \lambda^r p^{r(k+1)} + \lambda^p p^{p(k+1)} = 1 + \lambda p^{k+2} + \cdots = 1 + p^{k+2} (\lambda + \mu p)$.

Conclusion : $1+p$ est d'ordre $p^{\alpha-1}$
$$(1+p)^{p^{\alpha-1}} = 1 + \lambda p^\alpha \equiv 1$$
$$(1+p)^{p^{\alpha-2}} = 1 + \lambda p^{\alpha-1} \not\equiv 1 \text{ dans } \mathbb{Z}/p^\alpha\mathbb{Z}$$

Pour $p-1$ :
$$\begin{array}{ccc}
\mathbb{Z} & \longrightarrow & \mathbb{Z}/p\mathbb{Z} \\
\downarrow & & \downarrow \\
\mathbb{Z}/p^2\mathbb{Z} & \xrightarrow{\pi} & \mathbb{Z}/p\mathbb{Z}
\end{array}$$
$\pi$ factorisation $\cong$ morphisme d'anneau ; $\pi$ surjectif.

Soit $(\mathbb{Z}/p^2\mathbb{Z})^* \xrightarrow{\Psi} (\mathbb{Z}/p\mathbb{Z})^* = \mathbb{Z}/(p-1)\mathbb{Z}$, donc $y \in (\mathbb{Z}/p^2\mathbb{Z})^*$ tq $\Psi(y)$ générateur. Alors $(p-1) \mid \text{ordre de } y \text{ dans } (\mathbb{Z}/p^2\mathbb{Z})^*$, donc dans le groupe cyclique $<y>$, il y a un élément $y'$ d'ordre $(p-1)$.

Cas $p=2$

> [!note] Thm.
> $(\mathbb{Z}/2^\alpha\mathbb{Z})^* \simeq \mathbb{Z}/2^{\alpha-2}\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \quad (\alpha \geq 3)$
> $(\mathbb{Z}/2\mathbb{Z})^* = \{1\} \quad , \quad (\mathbb{Z}/4\mathbb{Z})^* \simeq \mathbb{Z}/2\mathbb{Z}$

**Preuve :** On cherche un élément d'ordre $2^{\alpha-2}$.
Lemme : $5^{2^k} = 1 + \lambda 2^{k+2} \quad , \quad \lambda \neq 0 \text{ impair} \quad (k \geq 1)$.
En effet, $k=1$ : $5^2 = 1 + 3 \cdot 2^3$. Ensuite, récurrence sur $k$
$$5^{2^{k+1}} = 5^{2^k \cdot 2} = (5^{2^k})^2 = (1 + \lambda 2^{k+2})^2 = 1 + \lambda \cdot 2^{k+3} + \lambda^2 2^{2k+4} = 1 + (\lambda + \lambda^2 2^{k+1}) 2^{k+3}$$

Conclusion : $5$ est d'ordre $2^{\alpha-2}$
$$5^{2^{\alpha-2}} = 1 + \lambda \cdot 2^\alpha \equiv 1 \quad [2^\alpha]$$

Pour le facteur $\mathbb{Z}/2\mathbb{Z}$ :

On considère le morphisme $(\mathbb{Z}/2^\alpha\mathbb{Z})^* \xrightarrow{\psi} (\mathbb{Z}/4\mathbb{Z})^* \simeq \mathbb{Z}/2\mathbb{Z}$ ; $\psi$ est surjectif.

$N = \ker \psi$, $\{1\} \to N \to (\mathbb{Z}/2^\alpha\mathbb{Z})^* \xrightarrow{\psi} \mathbb{Z}/2\mathbb{Z} \to \{1\}$. $|N| = 2^{\alpha-2}$.

De plus $\psi(5) \equiv 1 \pmod 4 \Rightarrow 5 \in \ker \psi$. $5$ est d'ordre $2^{\alpha-2}$. Donc $N$ cyclique $\simeq \mathbb{Z}/2^{\alpha-2}\mathbb{Z}$.

Cette suite exacte est scindée
$$-1 \in (\mathbb{Z}/2^\alpha\mathbb{Z})^* \longmapsto -1 \in (\mathbb{Z}/4\mathbb{Z})^*$$
engendre un sous-groupe d'ordre 2, générateur.

Ainsi $(\mathbb{Z}/2^\alpha\mathbb{Z})^*$ est un produit semi-direct $N \rtimes \mathbb{Z}/2\mathbb{Z}$. Comme $(\mathbb{Z}/2^\alpha\mathbb{Z})^*$ commutatif, ce produit semi-direct est un produit direct.

**Application: Classes d'isomorphisme des groupes d'ordre $pq$ avec $p, q$ premiers ($p < q$)**

> [!note] Thm.
> Pour un tel groupe $G$ :
> 1) Si $p \nmid (q-1)$, alors $G$ cyclique, $G \simeq \mathbb{Z}/pq\mathbb{Z}$.
> 2) Si $p \mid (q-1)$, alors soit $G$ cyclique, soit $G \simeq$ produit semi-direct $\mathbb{Z}/q\mathbb{Z} \rtimes \mathbb{Z}/p\mathbb{Z}$ non trivial (unique à isomorphisme près).

**Preuve :** Sylow : $\exists$ des $q$-Sylow dans $G$. Leur nombre $k \equiv 1 \pmod q$, $k \mid p \Rightarrow k \in \{1, p\}$, et comme $p < q$, $k = 1$.
$$\{1\} \to \mathbb{Z}/q\mathbb{Z} \to G \to \mathbb{Z}/p\mathbb{Z} \to \{1\}$$
Soit $P$ un $p$-Sylow dans $G$. $P \simeq \mathbb{Z}/p\mathbb{Z}$. $P \cap \mathbb{Z}/q\mathbb{Z} = \{1\}$. Ceci donne une section, suite scindée.

Si le produit est direct, $\times$, $G \simeq \mathbb{Z}/p\mathbb{Z}$.

Sinon, il y a un morphisme non trivial
$$f: \mathbb{Z}/p\mathbb{Z} \to \text{Aut}(\mathbb{Z}/q\mathbb{Z}) \simeq \mathbb{Z}/(q-1)\mathbb{Z}$$
Alors $f$ injectif, $\text{Ker} f = \{0\}$, donc $f(\mathbb{Z}/p\mathbb{Z})$ sous-groupe de card $p$ de $\mathbb{Z}/(q-1)\mathbb{Z}$, donc $p \mid (q-1)$.

Ora: deux morphismes $f$ et $g: \mathbb{Z}/p\mathbb{Z} \to \text{Aut}(\mathbb{Z}/q\mathbb{Z})$ donnant des produits semi-directs isomorphes. Ceci résulte du 1er cas d'isomorphisme entre produits semi-directs. $f(\mathbb{Z}/p\mathbb{Z})$ et $g(\mathbb{Z}/p\mathbb{Z})$ sous-groupes d'ordre $p$ de $\mathbb{Z}/(q-1)\mathbb{Z}$, donc
$$f(\mathbb{Z}/p\mathbb{Z}) = g(\mathbb{Z}/p\mathbb{Z}) = H.$$
$H$ engendré par $f(\bar{1})$. $\exists a \in \mathbb{Z}$ tq $f(\bar{1}) = g(\bar{a})$, $< \bar{a} > = \mathbb{Z}/p\mathbb{Z}$ alors $\forall x \in \mathbb{Z}, f(\bar{x}) = x f(\bar{1}) = x g(\bar{a}) = g(\bar{x} \cdot \bar{a})$. Soit $\alpha: \mathbb{Z}/p\mathbb{Z} \to \mathbb{Z}/p\mathbb{Z}$, $\bar{x} \mapsto \bar{a} \cdot \bar{x}$ : c'est un automorphisme du groupe $(\mathbb{Z}/p\mathbb{Z}, +)$, et $f = g \circ \alpha$.

Ex. Groupes d'ordre $6 = 2 \times 3$. Il y a $\mathbb{Z}/6\mathbb{Z}$, $\mathbb{Z}/3\mathbb{Z} \rtimes_f \mathbb{Z}/2\mathbb{Z} \simeq \mathfrak{S}_3$
$$15 \quad 15$$
$$<(123)> \quad <(12)>$$

## Structure des groupes abéliens finis

> [!note] Thm.
> Soit $A$ groupe abélien fini. Alors il existe des entiers $d_1, d_2, \dots, d_r \geq 2$ avec $d_1 | d_2 | d_3 | \dots | d_r$ tels que $A \simeq \mathbb{Z}/d_1\mathbb{Z} \times \mathbb{Z}/d_2\mathbb{Z} \times \dots \times \mathbb{Z}/d_r\mathbb{Z}$. De plus cette suite finie $d_1 | d_2 | \dots | d_r$ est caractéristique de la classe d'isomorphisme de $A$.

Remarque : on a alors $\forall x \in A, x^{d_r} = 1$, $|A| = d_1 \dots d_r$.

> [!note] Déf
> Soit $G$ groupe fini. On appelle exposant de $G$ le pgcd des ordres des éléments de $G$.

ex. pour $A$ ci-dessus, l'exposant est $d_r$.

> [!note] Prop
> Soit $A$ groupe abélien fini. Alors $\exists x \in A$ dont l'ordre est l'exposant de $A$, ainsi pour $A$ abélien, l'exposant est aussi le maximum des ordres des éléments de $A$.

**Preuve :** Soit $e$ = exposant de $A$.
(1) $e = p_1^{\alpha_1} p_2^{\alpha_2} \dots p_r^{\alpha_r}$, $p_i$ premiers $2 \leq 2 \leq t$, $\alpha_i \geq 1$.
$\forall i, \exists x_i \in A$ dont l'ordre est de la forme $p_i^{\alpha_i} m_i$ avec $p_i \nmid m_i$ ; ainsi dans (1), chaque $p_i^{\alpha_i}$ doit diviser l'ordre d'un certain élément $x_i$. Alors $y_i := x_i^{m_i}$ est d'ordre $p_i^{\alpha_i}$ et alors comme les $p_i$ sont $\neq$, $y_1 y_2 \dots y_r$ est d'ordre $p_1^{\alpha_1} \dots p_r^{\alpha_r}$.

> [!note] Déf
> Soit $A$ groupe abélien fini. Un caractère de $A$ est un morphisme $\chi : A \to \mathbb{C}^*$.

> [!info] Rem.
> Comme $A$ fini, $\forall x \in A$, $\chi(x)$ est une racine de 1, ainsi si $e$ = exposant de $A$, $\chi$ est à valeurs dans le sous-groupe des racines $e$-ièmes de 1, $U_e$.

Notation : $\hat{A} = \{$ caractères de $A \}$.

On dispose toujours du caractère trivial : $\forall x \in A, \chi_{triv}(x) = 1$.

> [!note] Prop
> $\hat{A}$ est un groupe pour la loi
> $$\chi_1, \chi_2 \in \hat{A}, \ (\chi_1 \cdot \chi_2)(x) = \chi_1(x) \cdot \chi_2(x)$$
> (on a bien $\forall \chi_1, \chi_2 \in \hat{A}$).

> [!note] Prop
> Si $A$ est cyclique d'ordre $n$, de générateur $a$, alors l'application $\begin{array}{rcl} \hat{A} & \to & \mathbb{U}_n \\ \chi & \mapsto & \chi(a) \end{array}$ est un isomorphisme de groupes.

En effet : $\chi \in \hat{A}$ est complètement déterminé par sa valeur sur un générateur et elle doit être dans $\mathbb{U}_n$.

$\boxtimes$ Pb. comment construire des caractères ? Si $x \in A$, alors $<x>$ sous-groupe cyclique pour lequel on dispose des caractères.

> [!note] Thm. de prolongement des caractères
> Soit $A$ groupe abélien fini, $B \subset A$ sous-groupe. Soit $\chi \in \hat{B}$. Alors il existe $\tilde{\chi} \in \hat{A}$ tel que $\tilde{\chi}_{|B} = \chi$.

Ainsi l'application de restriction
$$\begin{array}{rcl} \hat{A} & \to & \hat{B} \\ \tilde{\chi} & \mapsto & \tilde{\chi}_{|B} \end{array} \text{ est surjective}$$

**Preuve :** Preuve par récurrence sur l'indice $[A:B]$.
$\cdot \ [A:B] = 1 \quad \checkmark$.
$\cdot$ Si $B \neq A$, soit $x \in A \setminus B$. Soit $B'$ le sous-groupe de $A$ engendré par $B$ et $x$. On va construire un prolongement de $\chi$ à $B'$ ; ensuite comme $[A:B'] < [A:B]$, on pourra appliquer récurrence.

Il faut définir $\tilde{\chi}(x)$. Contrainte : $\exists k \in \mathbb{N}$ tq $x^k \in B$ et alors il faut que $\tilde{\chi}(x)^k = \chi(x^k)$.

On considère le groupe quotient $A/B$, et soit $x$ l'ordre de l'image de $x$ dans $A/B$ : $x^r \in B$ et si $s$ est tel que $x^s \in B$ alors $r | s$.

On dispose de $\chi(x^r)$. Soit $a \in \mathbb{C}^*$ tel que $a^r = \chi(x^r)$. On pose $\tilde{\chi}(x) = a$ et pour $y \in B$, qui s'écrit $y = b x^t$, $b \in B$, on pose $\tilde{\chi}(y) = \chi(b) a^t$.

Ceci est bien défini : ie. si $y$ s'écrit aussi $y = b' x^{t'}$, alors $\chi(b) a^t = \chi(b') a^{t'}$. Si $b' x^{t'} = b x^t$, alors $b^{-1} b = x^{t' - t} \in B$, alors $r | t' - t$ i.e. $\exists u \in \mathbb{N}$ tq $t' = t + ru$ ; $\chi(b) a^{t'} = \chi(b') a^t \cdot a^{ru} = \chi(b') \chi(x^r)^u a^t = \chi(b' \cdot x^{ru}) a^t = \chi(b) a^t$.

Ainsi l'application $\tilde{\chi} : B' \to \mathbb{C}^*$ est bien définie. $\tilde{\chi}$ est un morphisme de groupes, i.e. $\forall y, y' \in B'$, $\tilde{\chi}(yy') = \tilde{\chi}(y) \tilde{\chi}(y')$. On écrit $y = b x^t$, $y' = b' x^{t'}$ :
$$\tilde{\chi}(yy') = \tilde{\chi}(b b' x^{t + t'}) = \chi(b b') a^{t + t'} = (\chi(b) a^t) (\chi(b') a^{t'}) = \tilde{\chi}(y) \tilde{\chi}(y').$$

Rem: c'est aussi vrai si $A$ infini, car Lemme de Zorn.

> [!note] Corollaire
> Soit $A$ groupe abélien fini, $x \in A$, $x \neq 0$. Alors $\exists \chi \in \hat{A}$ tel que $\chi(x) \neq 1$.

**Preuve.** Soit $B = <x> \subset A$. $B$ est cyclique. $\exists \chi_0 \in \hat{B}$ tel que $\chi_0(x) \neq 1$. On peut prolonger $\chi_0$ à $A$.

## Preuve du théorème de structure

On relit $A \simeq \mathbb{Z}/d_1\mathbb{Z} \times \cdots \times \mathbb{Z}/d_r\mathbb{Z}$. On a observé que nécessairement $d_r$ est l'exposant de $A$. On a vu : $\exists x \in A$ d'ordre $n$. On considère $<x> \simeq \mathbb{Z}/n\mathbb{Z}$ et on cherche un groupe $N$ tq $A \simeq N \times <x>$. On peut ensuite faire une récurrence.

On considère le caractère de $<x>$ donné par
$$\chi : <x> \longrightarrow \mathbb{U}_n, \qquad x \longmapsto \xi \text{ racine primitive } n\text{-ième de } 1.$$

> [!info] Rem.
> $\chi$ est ici un isomorphisme de groupe.

Soit $\tilde{\chi}$ un prolongement de $\chi$ à $A$, $\tilde{\chi} : A \to \mathbb{C}^*$ ; on fait $\tilde{\chi} : A \to \mathbb{U}_n$ car $n$ exposant de $A$.

Soit $N = \ker \tilde{\chi}$. On a $N \cap <x> = \{e\}$ car $\chi$ isomorphisme. De plus, $A = N \cdot <x> = <x> \cdot N$. En effet, soit $y \in A$. $\tilde{\chi}(y) \in \mathbb{U}_n$. Donc $\exists z \in <x>$ t.q. $\chi(z) = \tilde{\chi}(z) = \tilde{\chi}(y)$. D'où $(z^{-1}y) \in N = \ker \tilde{\chi}$, $y \in N <x>$.

On a ainsi un isomorphisme $N \times <x> \longrightarrow A$, $(n, z) \longmapsto nz$. Ainsi $A \simeq N \times \mathbb{Z}/n\mathbb{Z}$.

Par hyp de récurrence, $\exists d_1 | d_2 | \cdots | d_{r-1}$ tels que $N \simeq \mathbb{Z}/d_1\mathbb{Z} \times \cdots \times \mathbb{Z}/d_{r-1}\mathbb{Z}$. De plus, on a $d_{r-1} | n$.

## Quelques propriétés des caractères

$G$ groupe abélien fini.

> [!note] Prop
> 1) $G$ cyclique, $\hat{G} \simeq G$ $(\mathbb{Z}/n\mathbb{Z} \simeq \mathbb{U}_n)$
> 2) $\widehat{G_1 \times G_2} \simeq \hat{G}_1 \times \hat{G}_2$

En effet : si $\chi \in \widehat{G_1 \times G_2}$. Posons pour $g_1 \in G_1$, $\chi_1(g_1) = \chi(g_1, e)$ et on retrouve $\chi$ à partir de $\chi_1$ et $\chi_2$ : $\chi(g_1, g_2) = \chi((g_1, e)(e, g_2)) = \chi_1(g_1) \chi_2(g_2)$.

> [!note] Prop
> 3) Pour tout groupe abélien fini $G$, $\hat{G} \simeq G$.

(par 2) et thm de structure)

4) Bidual $\hat{\hat{G}}$

> [!note] Prop
> On a un isomorphisme canonique de groupes
> $$\begin{aligned} \varphi : G &\longrightarrow \hat{\hat{G}} \\ x &\longmapsto [\chi \mapsto \chi(x)] = \hat{x} \quad \text{évaluation sur } x. \end{aligned}$$

En effet, $\hat{x}$ est bien dans $\hat{\hat{G}}$, i.e. $\hat{x}(\chi_1 \chi_2) = \hat{x}(\chi_1) \hat{x}(\chi_2)$ : $\chi_1 \chi_2(x) = \chi_1(x) \chi_2(x)$.

$\varphi$ est bien un morphisme : $\varphi(xy)(\chi) = \chi(xy) = \chi(x)\chi(y) = \varphi(x)(\chi) \varphi(y)(\chi) = (\varphi(x)\varphi(y))(\chi)$.

$\varphi$ bijectif :
- Injectif : si $\varphi(x) =$ caractère de $G$ trivial, $\forall \chi \in \hat{G}, \varphi(x)(\chi) = 1 \text{ i.e. } \chi(x) = 1$. Mais on a vu : si $x \neq e, \exists \chi \in \hat{G} / \chi(x) \neq 1$. D'où $x = e$ et $\varphi$ injective.
Comme $|G| = |\hat{G}| = |\hat{\hat{G}}|$, on a $\varphi$ bijective.

5) Relations d'orthogonalité

> [!note] Thm.
> Soit $\chi_1, \chi_2 \in \hat{G}$.
> $$\frac{1}{|G|} \sum_{x \in G} \overline{\chi_1(x)} \chi_2(x) = \begin{cases} 0 & \text{si } \chi_1 \neq \chi_2 \\ 1 & \text{si } \chi_1 = \chi_2 \end{cases}$$

En fait, si on considère le $\mathbb{C}$ espace vectoriel $E$ des applications de $G \to \mathbb{C}$, $\dim E = |G|$. L'application $E \times E \to \mathbb{C}$, $(\varphi, \psi) \mapsto \frac{1}{|G|} \sum_{x \in G} \overline{\varphi(x)} \psi(x)$, est un produit hermitien.

> [!info] Rem.
> $\overline{\chi_1(x)} \in \mathbb{C}^*$ ; $\overline{\chi_1(x)} = \chi_1(x)^{-1}$ car $|\chi_1(x)| = 1$ (racine de 1) $= \chi_1^{-1}(x)$ pour la loi de $\hat{G}$.
> $$\frac{1}{|G|} \sum_{x \in G} \overline{\chi_1(x)} \chi_2(x) = \frac{1}{|G|} \sum_{x \in G} (\chi_1^{-1} \chi_2)(x)$$ : valeur moyenne du caractère $\chi_1^{-1} \chi_2$.

> [!note] Déf
> Pour $\chi \in \hat{G}$, soit $S_\chi = \sum_{x \in G} \chi(x)$.

> [!note] Prop
> Si $\chi \neq \text{trivial}$, $S_\chi = 0$ ; $\chi \text{ trivial}$, $S_\chi = |G|$.

**Preuve :** On a : $G \to G$, $x \mapsto xy$, bijective ($\forall y$).
$$\sum_{x \in G} \chi(x) = \sum_{x \in G} \chi(xy) = \chi(y) \sum_{x \in G} \chi(x)$$
$\implies \chi(y) = 1 \ (\forall y) \text{ ou } \sum_{x \in G} \chi(x) = 0$.
- Si $\chi$ non trivial, $\exists y \in G / \chi(y) \neq 1$ et alors $S_\chi = 0$.
- Si $\chi$ trivial, $\sum_{x \in G} \chi(x) = 1 \ \forall G$, $S_\chi = |G|$.

## Classification à isomorphisme près des groupes de cardinal $\leq 15$

Ex 1) $p$ premier. $\mathbb{Z}/p\mathbb{Z}$ — $p=2, 3, 5, 7, 11, 13$.
2) $|G|=p\cdot q$, $p<q$ premiers — $6, 10, 14, 15$
3) Ordre 4 : $\mathbb{Z}/4\mathbb{Z}$, $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$ ou $\mathbb{Z}/4\mathbb{Z}$.

Il reste $8, 9, 12$.

$n=9=3^2$

> [!note] Lemme
> Un groupe d'ordre $p^2$, $p$ premier, est abélien.

d'où, thm de structure : $G \simeq \mathbb{Z}/9\mathbb{Z}$ ou $G \simeq \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}$.

Cas $n=8=2^3$.
- Si $G$ abélien : $\mathbb{Z}/8\mathbb{Z}$, $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/4\mathbb{Z}$, $(\mathbb{Z}/2\mathbb{Z})^3$.
- Si $G$ pas abélien : l'ordre d'un élément de $G \in \{1, 2, 4\}$ car pas cyclique. Si l'ordre est toujours 1 et 2, alors $G$ abélien. Nécessairement, $\exists x \in G$, $x$ d'ordre 4. Soit $H=<x>$. $[G:H]=2$, donc $H \triangleleft G$.
$$\{1\} \to H \to G \to G/H \to \{1\} \quad (*)$$
$$\downarrow^{\simeq} \mathbb{Z}/2\mathbb{Z}$$

2 cas :
1) La suite $(*)$ scindée, $\exists f : G/H \to Aut(H)$, $G \simeq H \rtimes (\mathbb{Z}/2\mathbb{Z})$. $Aut(H) \simeq (\mathbb{Z}/4\mathbb{Z})^* \simeq \mathbb{Z}/2\mathbb{Z}$. Ainsi, $f$ est un morphisme $\mathbb{Z}/2\mathbb{Z} \to \mathbb{Z}/2\mathbb{Z}$. Soit $f$ trivial, et on a alors un groupe produit abélien ; soit $f \neq \mathrm{Id}$, on a $\mathbb{Z}/4\mathbb{Z} \rtimes_f \mathbb{Z}/2\mathbb{Z} \simeq D_8$.

l'application $f(\bar{1}) \in \text{aut}(\mathbb{Z}/4\mathbb{Z})$ envoit $\bar{1}$ sur $-\bar{1}$.

2) la suite n'est pas scindée. Ceci signifie qu'il n'y a pas d'élément d'ordre 2 dans $G\setminus H$. Sinon, un tel élément y engendre un sous-groupe $P = \{e, y\}$, $P \cap H = \{e\}$ et $\pi_P : P \to \mathbb{Z}/2\mathbb{Z}$ isomorphisme.

Dans $H \simeq \mathbb{Z}/4\mathbb{Z}$, il y a unique élément d'ordre 2 : $\bar{2}$. Donc dans $G$ il y a un unique élément d'ordre 2, on l'appelle $\alpha$. $\underline{\alpha \in Z(G)}$ :
$$\forall g \in G, (g \alpha g^{-1})^2 = \alpha g \alpha g^{-1} = e \Rightarrow g \alpha g^{-1} = \alpha.$$

Soit $x \in H$ générateur. On note maintenant multiplicativement $H = \{e, x, \alpha, \alpha x\}$. Soit $y \in G/H$. Alors $y$ est d'ordre 4. Alors $y^2 = \alpha$, et $<y> = \{e, y, \alpha, \alpha y\}$. Soit $z = xy \in G$, $z \notin H$, $z \notin <y>$. $G = \{e, x, y, \alpha, \alpha x, \alpha y, xy, \alpha xy\}$. La structure du groupe $G$, i.e. la loi multiplicative est donné par $\alpha \in Z(G)$, $x^2 = y^2 = \alpha$. $z = xy$, $xz = \alpha y$, $zy = \alpha x$, $yz = x$, $xz = \alpha x$, $zx = y$, $yx = \alpha xy$. C'est le groupe des quaternions $H_8$.

## Rappel Quaternions

$$\mathbb{H} = \left\{ \begin{pmatrix} a & b \\ -\overline{b} & \overline{a} \end{pmatrix} \in \mathcal{M}_2(\mathbb{C}) , a,b \in \mathbb{C} \right\}$$
C'est un $\mathbb{R}$-espace vectoriel de dim 4.
$$\det \begin{pmatrix} a & b \\ -\overline{b} & \overline{a} \end{pmatrix} = |a|^2 + |b|^2$$
Donc $\forall x \in \mathbb{H} \setminus \{0\}$ inversible et on a $x^{-1} \in \mathbb{H}$. C'est un corps non commutatif.

On considère les éléments de $\mathbb{H}^*$, groupe multiplicatif
$$Id = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} , \quad I = \begin{pmatrix} i & 0 \\ 0 & -i \end{pmatrix} , \quad J = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} , \quad K = \begin{pmatrix} 0 & i \\ i & 0 \end{pmatrix}$$
$a = x + iy$, $b = u + iv$
$$\begin{pmatrix} a & b \\ -\overline{b} & \overline{a} \end{pmatrix} = x Id + y I + u J + v K .$$
On a $I^2 = J^2 = K^2 = -Id .$
$$IJ = K , \quad JK = I , \quad KI = J .$$
$$\mathbb{H}_8 = <I,J> = \{ \pm Id, \pm I, \pm J, \pm K \} .$$

Exercice : $\mathbb{H}_8$ n'est pas isomorphe à un produit semi-direct.

## Groupes d'ordre $n=12 = 2^2 \times 3$

a) Groupes abéliens
Thm de structure $\Rightarrow \mathbb{Z}/12\mathbb{Z} , \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/6\mathbb{Z} .$

b) Groupes non abéliens
On a toujours les sous-groupes de Sylow.
- Nombre de 3-Sylow : leur nombre $k \equiv 1 \pmod 3 , \quad k|4$. $k \in \{1,4\}$.
Si $k=4$, on a 4 groupes cycliques d'ordre 3, d'intersections 2 à 2 réduites à $\{e\}$. Ainsi, on a 8 éléments d'ordre 3 dans $G$.

Par ailleurs, il y a au moins un 2-Sylow, d'ordre 4, dont les éléments sont d'ordre $\{1,2,4\}$. Donc il y a un unique 2-Sylow, qui est donc distingué. Soit $H$ ce 2-Sylow, $|H|=4$ donc $H \simeq \mathbb{Z}/4\mathbb{Z}$ ou $H \simeq \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$.

On a une suite exacte
$$\{1\} \to H \to G \to \mathbb{Z}/3\mathbb{Z} \to \{1\}$$
Elle est scindée car il y a dans $G$ un 3-Sylow qui donne une section. Donc $G \simeq H \rtimes \mathbb{Z}/3\mathbb{Z}$, pour $f: \mathbb{Z}/3\mathbb{Z} \to \text{Aut}(H)$ morphisme.

i) Si $H \simeq \mathbb{Z}/4\mathbb{Z}$. $\text{Aut}(H) \simeq \mathbb{Z}/2\mathbb{Z}$ et $f$ est trivial
$$G \simeq \mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \simeq \mathbb{Z}/12\mathbb{Z}.$$
ii) Si $H \simeq \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$
$$\text{Aut}(\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z})$$

> [!info] Rem.
> $\mathbb{Z}/2\mathbb{Z}$ est un corps et le groupe additif $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$ est un $\mathbb{Z}/2\mathbb{Z}$-espace vectoriel de dimension 2.
> $$\text{Aut}(\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}) = \text{GL}((\mathbb{Z}/2\mathbb{Z})^2) = \text{GL}_2(\mathbb{Z}/2\mathbb{Z})$$
> $$|\text{GL}_2(\mathbb{Z}/2\mathbb{Z})| = (2^2-1)(2^2-2) = 6.$$
> Donc $\text{GL}_2(\mathbb{Z}/2\mathbb{Z}) \simeq \mathfrak{S}_3$ car il est non abélien.

Ainsi, on cherche les morphismes $f: \mathbb{Z}/3\mathbb{Z} \to \mathfrak{S}_3$. Si $f$ non trivial, $f(\bar{1})$ d'ordre 3, i.e. 3-cycle $(123)$ ou $(132)=(123)^2$
$$f_1(\bar{1}) = (123), \qquad f_2(\bar{1}) = (132) = f_1(\bar{2})$$
$f_2 = f_1 \circ \varphi$ où $\varphi$ est l'automorphisme de $\mathbb{Z}/3\mathbb{Z}$, $\varphi(\bar{1}) = \bar{2}$. Donc les produits semi-directs $H \rtimes_{f_1} \mathbb{Z}/3\mathbb{Z}$ et $H \rtimes_{f_2} \mathbb{Z}/3\mathbb{Z}$ sont isomorphes, d'où une unique classe d'isomorphismes.

Cas où il y a un unique 3-Sylow $N$.

On a $N \triangleleft G$. Soit $H \subset G$ un 2-Sylow. $H \cap N = \{e\}$, $HN = NH = G$, et on a un produit semi-direct $N \rtimes H$.

Il y a 2 cas : $H \simeq \mathbb{Z}/4\mathbb{Z}$ et $H \simeq \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$.

1) Si $H \simeq \mathbb{Z}/4\mathbb{Z}$. $f : \mathbb{Z}/4\mathbb{Z} \to \text{Aut}(\mathbb{Z}/3\mathbb{Z}) = \mathbb{Z}/2\mathbb{Z}$. Soit $f$ est trivial, $f(\overline{1}) = \overline{0}$ $\Rightarrow$ groupe abélien $\mathbb{Z}/12\mathbb{Z}$. Soit $f(\overline{1}) = \overline{1}$ $\Rightarrow \mathbb{Z}/3\mathbb{Z} \rtimes \mathbb{Z}/4\mathbb{Z}$.

2) Si $H \simeq \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$. On cherche les morphismes $f : \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \to \mathbb{Z}/2\mathbb{Z}$ de groupe additif. Ce sont automatiquement des morphismes de $\mathbb{Z}/2\mathbb{Z}$-e.v., i.e. ce sont des formes linéaires sur le $\mathbb{Z}/2\mathbb{Z}$ espace vectoriel $(\mathbb{Z}/2\mathbb{Z})^2$. Il y en a 3 : $e_1 = (\overline{1}, \overline{0})$, $e_2 = (\overline{0}, \overline{1})$, $e_3 = (\overline{1}, \overline{1})$. Toutes les formes linéaires se correspondent par un automorphisme linéaire de $(\mathbb{Z}/2\mathbb{Z})^2$ (transitivité de l'action de $Gl_2(\mathbb{Z}/2\mathbb{Z})$). Finalement, une unique classe de produit semi-direct
$$\mathbb{Z}/3\mathbb{Z} \rtimes (\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}) .$$

## Groupe linéaire et groupe spécial linéaire

$k$ corps commutatif
$$Gl_n(k) = \{ M \in \mathcal{M}_n(k), \text{ inversible} \}$$

> [!info] Rem.
> Si $E$ est un $k$-e.v de dim $E=n$, $Gl_n(E) = \{ f \in \mathcal{L}(E) \text{ inversible} \} \simeq Gl_n(k)$.

On dispose de $\det : Gl_n(k) \to k^*$.

> [!note] Déf
> $Sl_n(k) = \ker(\det)$

On a une suite exacte scindée
$$\{1\} \to Sl_n(k) \to Gl_n(k) \to k^* \to \{1\}$$
$$\begin{pmatrix} \lambda & 0 \\ 0 & I_{n-1} \end{pmatrix} \mapsfrom \lambda$$

1. Centre.

> [!note] Prop
> $Z(Gl_n(k)) = k^* Id$.
> $Z(Sl_n(k)) = Z(Gl_n(k)) \cap Sl_n(k) = \mu_n(k) Id$
> où $\mu_n(k) = \{ \text{racine } n\text{-ième de } 1 \text{ dans } k \} = \{ a \in k^*, a^n = 1 \}$.

Plusieurs preuves. Une des preuves utilise

> [!note] Lemme
> Soit $E$ e.v de dim finie, $u \in End(E)$ tel que $\forall v \in E, u(v)$ colinéaire à $v$ (i.e. $(v, u(v))$ liée). Alors $\exists \lambda \in k, u = \lambda Id$.

On remarque ensuite : ($k \neq \mathbb{Z}/2\mathbb{Z}$). Si $u \in Z(Gl(E))$, $v \in E \setminus \{0\}$ et $H$ un supplémentaire de $kv$. Soit $\alpha \neq 0, 1$. Soit $f \in \mathcal{L}(E), f(v) = \alpha v, f_{|H} = 1$. Si $uf = fu$, $u$ stabilise les sous espaces propres de $f$. D'où $\exists \lambda \in k / u(v) = \lambda v \Rightarrow u = k Id$.

Autre façon (matricielle)

Notation $E_{ij} = \begin{pmatrix} & & & & \\ & & & & \\ & & 1 & & \\ & & & & \\ & & & & \end{pmatrix}$ ; $(E_{ij})$ base de $\mathcal{M}_{n,k}$

Pour $\lambda \in k^*$ soit $E_{ij}(\lambda) = Id + \lambda E_{ij} \ , i \neq j$.

$E_{ij}(k) \in SL_n(k)$

Soit $M \in Z(SL_n(k)) \ , \ M E_{ij}(\lambda) = E_{ij}(\lambda) M \Rightarrow M E_{ij} = E_{ij} M \quad i \neq j$.

$M E_{ii} = M E_{ij} E_{ji} = E_{ij} M E_{ji} = E_{ij} E_{ji} M = E_{ii} M$

Donc $\forall N \in \mathcal{M}_n(k) \ , \ MN = NM$ ; en regardant les coefficients, on obtient $M = \lambda Id$, et si $M \in Z(SL_n(k)) \ , \ \lambda^n = 1$.

> [!note] Déf
> Les matrices $E_{ij}(\lambda) \ i \neq j \ , \ \lambda \in k^*$ sont appelées matrices de transvection élémentaires.

> [!note] Déf
> Pour $i \in \{1, \dots, n\} \ , \ a \in k^*$ soit $D_i(a) = diag(1, \dots, 1, a, 1, \dots, 1)$, matrice de dilatation élémentaire.

Rappel. Opérations élémentaires sur les lignes et colonnes d'une matrice. Algorithme du pivot de Gauss.

> [!note] Thm.
> Soit $g \in Gl_n(k)$. Alors il existe des matrices de transvection élémentaires $L_1, \dots, L_p$ telles que $g = L_1 \cdots L_p \begin{pmatrix} I_r & 0 \\ 0 & diag \end{pmatrix}$

On fait des opérations sur les lignes de la matrice $g$.

> [!note] Corollaire
> 1) $\mathcal{GL}_n(k)$ est engendré par les matrices de transvection élémentaires.
> 2) $\mathcal{SL}_n(k)$ est engendré par les matrices de transvection et de dilatation élémentaires.

IV) Classes de conjugaison des matrices de transvection

On introduit les matrices de permutation. Pour $w \in \mathfrak{S}_n$, soit $P_w \in \mathcal{GL}_n(k)$ défini par $P_w(e_i) = e_{w(i)}$.

> [!note] Prop
> 1) $\forall i \neq j, \lambda \in k^*, \forall w \in \mathfrak{S}_n, P_w E_{ij}(\lambda) P_w^{-1} = E_{w(i)w(j)}(\lambda)$
> 2) $\forall i \neq j, \lambda \in k^*, \mu \in k^*$ : $D_i(\lambda) E_{ij}(\mu) D_i(\lambda)^{-1} = E_{ij}(\lambda\mu)$

> [!note] Prop
> Les $E_{ij}(\lambda)$ sont conjuguées dans $\mathcal{GL}_n(k)$ et, si $n \geq 3$, elles sont conjuguées dans $\mathcal{SL}_n(k)$.

**Preuve.** Soient $i \neq j, l \neq m, \lambda, \mu \in k^*$ ; on veut $g \in \mathcal{GL}_n(k)$ ou $\mathcal{SL}_n(k)$ tq $g E_{ij}(\lambda) g^{-1} = E_{lm}(\mu)$. Comme $\mathfrak{S}_n$ agit 2 fois transitivement sur $\{1, \dots, n\}$
$$\exists w \in \mathfrak{S}_n, w(i) = l, \ w(j) = m$$
D'où le résultat pour $\mathcal{GL}_n(k)$ : $P_w E_{ij}(\lambda) P_w^{-1} = E_{lm}(\lambda)$, $D_l(\frac{\mu}{\lambda}) E_{lm}(\lambda) D_l(\frac{\mu}{\lambda})^{-1} = E_{lm}(\mu)$.

Pour $\mathcal{SL}_n(k)$ avec $n \geq 3$ : si $\det P_w = 1 \ \checkmark$. Sinon, comme $n \geq 3, \exists s \in \{1, \dots, n\}$ tq $l \neq s \neq m$ : $D_s(-1) P_w \in \mathcal{SL}_n(k)$, $D_s(-1) E_{lm}(\lambda) D_s(-1)^{-1} = E_{lm}(\lambda)$.

Ensuite pour passer $E_{1,n}(\lambda)$ à $E_{1,n}(\mu)$ on utilise $diag(1, \dots, 1, \frac{\mu}{\lambda}, 1, \dots, 1, \frac{\lambda}{\mu}, 1, \dots, 1)$ au lieu de $D_1(\frac{\mu}{\lambda})$
$$\uparrow \ \uparrow$$
$$i \quad j$$

Pour $n=2$ ?

> [!note] Prop
> 1) Dans $GL_2(k)$, les matrices $\begin{pmatrix} 0 & \lambda \\ 1 & 0 \end{pmatrix}$ et $\begin{pmatrix} 1 & 0 \\ 0 & \lambda \end{pmatrix}$ sont conjuguées
> 2) Les matrices $\begin{pmatrix} 0 & \lambda \\ 1 & 0 \end{pmatrix}$ et $\begin{pmatrix} 0 & \mu \\ 1 & 0 \end{pmatrix}$ sont conjuguées dans $GL_2(k)$ $\iff \frac{\lambda}{\mu}$ est un carré dans $k^*$.

**Preuve :** 1) utiliser $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
2) Chercher $g = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ avec $ad-bc \neq 0$ tq $g \begin{pmatrix} 0 & \lambda \\ 1 & 0 \end{pmatrix} g^{-1} = \begin{pmatrix} 0 & \mu \\ 1 & 0 \end{pmatrix} g$

Propriétés supplémentaires des transvections

> [!note] Prop (Sous-groupes à 1 paramètre)
> $i \neq j, \lambda \in k^*$, $E_{ij}(\lambda) = Id + \lambda E_{ij}$ et $E_{ij}(0) = Id$. L'application $\begin{array}{rcl} (k,+) & \longrightarrow & GL_n(k) \\ \lambda & \longmapsto & E_{ij}(\lambda) \end{array}$ est un morphisme de groupe.

L'image de ce morphisme est appelé sous-groupe à un paramètre.

> [!info] Rem.
> Dans $GL_n(k)$, ces sous-groupes sont toujours conjugués. Fixons $i \neq j$ et $k \neq l$ : les ss-groupes $\{E_{ij}(\lambda), \lambda \in k\}$ et $\{E_{kl}(\mu), \mu \in k\}$ sont conjugués.

> [!note] Prop
> Si $n \geq 3$, si $i \neq j \neq k \neq i$, dans $\{1, 2, \dots, n\}$ : $[E_{ij}(\lambda), E_{jk}(\mu)] = E_{ik}(\lambda \mu)$

**Preuve.** Calcul en utilisant $E_{ij}E_{kl} = \delta_{jk}E_{il} , E_{ij}(\lambda)^{-1} = I - \lambda E_{ij}$.

**Groupes dérivés**

> [!note] Thm.
> Si $n \geq 3$, ou si $n=2$ et $|k|>3$ :
> $$\mathcal{D}(\mathcal{GL}_n(k)) = \mathcal{D}(\mathcal{SL}_n(k)) = \mathcal{SL}_n(k) .$$

**Preuve :** $\mathcal{GL}_n(k) \xrightarrow{det} (k^* , .)$ abélien. Donc $\mathcal{D}(\mathcal{GL}_n(k)) \subset \ker(det) = \mathcal{SL}_n(k)$. De plus, $\mathcal{D}(\mathcal{SL}_n(k)) \subset \mathcal{D}(\mathcal{GL}_n(k))$. Il suffit de voir $\mathcal{D}(\mathcal{SL}_n(k)) = \mathcal{SL}_n(k)$.

1) Si $n \geq 3$. $\forall i \neq j , \forall \lambda \in k^* : E_{ij}(\lambda) = [E_{ik}(\lambda), E_{kj}(1)] \in \mathcal{D}(\mathcal{SL}_n(k))$. Comme $\mathcal{SL}_n(k)$ engendré par les $E_{ij}(\lambda)$, $\mathcal{SL}_n(k) \subset \mathcal{D}(\mathcal{SL}_n(k))$ d'où l'égalité.

2) Pour $n=2$ et $|k|>3$ (i.e. $k \neq \mathbb{F}_2, k \neq \mathbb{F}_3$). On dispose dans $\mathcal{SL}_2(k)$ des éléments $\begin{pmatrix} \beta & 0 \\ 0 & \beta^{-1} \end{pmatrix} , \beta \in k^*$. Pour $\lambda \in k^*$,
$$\left[ \begin{pmatrix} \beta & 0 \\ 0 & \beta^{-1} \end{pmatrix} , \begin{pmatrix} 1 & \lambda \\ 0 & 1 \end{pmatrix} \right] = \begin{pmatrix} 1 & \beta^2\lambda \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & -\lambda \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & \lambda(\beta^2-1) \\ 0 & 1 \end{pmatrix}$$
Montrons que $\forall \mu \in k^* , \begin{pmatrix} 1 & \mu \\ 0 & 1 \end{pmatrix} \in \mathcal{D}(\mathcal{SL}_2(k))$. En effet : $|k|>3 , \exists \beta \in k^* , \beta \neq \pm 1 , \text{i.e. } \beta^2 \neq 1$. $\mu \in k^*$ étant donné, on pose $\lambda = \frac{\mu}{\beta^2-1}$, alors $\begin{pmatrix} 1 & \mu \\ 0 & 1 \end{pmatrix} = \left[ \begin{pmatrix} \beta & 0 \\ 0 & \beta^{-1} \end{pmatrix} , \begin{pmatrix} 1 & \lambda \\ 0 & 1 \end{pmatrix} \right] .$

De même pour les $\begin{pmatrix} 1 & 0 \\ \mu & 1 \end{pmatrix}$

Autre cas exclus du thm :
1) $n=2, \ k=\mathbb{Z}/2\mathbb{Z}$. $\text{GL}_2(\mathbb{Z}/2\mathbb{Z}) = \text{SL}_2(\mathbb{Z}/2\mathbb{Z})$ de cardinal $(2^2-1)(2^2-2)=6$, $\simeq \mathfrak{S}_3$ (non abélien). Or on a vu $\mathcal{D}(\mathfrak{S}_3) = \mathfrak{A}_3 \neq \mathfrak{S}_3$.

2) $n=2, \ k=\mathbb{Z}/3\mathbb{Z}$.

> [!note] Prop
> $\mathcal{D}(\text{GL}_2(\mathbb{Z}/3\mathbb{Z})) \simeq \mathcal{D}\text{SL}_2(\mathbb{Z}/3\mathbb{Z}) \quad(*)$

mais $\mathcal{D}(\text{SL}_2(\mathbb{Z}/3\mathbb{Z})) \simeq \mathbb{H}_8$ (groupe des quaternions)

Preuve de $(*)$ : Est-ce que toute transvection élémentaire est dans $\mathcal{D}(\text{GL}_2(\mathbb{Z}/3\mathbb{Z}))$ ?
$$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}, \ A^3 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$
On a vu que $A$ et $A^3$ sont conjugués dans $\text{GL}_2(\mathbb{Z}/3\mathbb{Z})$ : si $g = \begin{pmatrix} a & b \\ c & d \end{pmatrix}, \ gAg^{-1}=A^3$. $\Rightarrow [g,A]=A \in \mathcal{D}(\text{GL}_2(\mathbb{Z}/3\mathbb{Z}))$.

Questions de simplicité :
$Z(\text{SL}_n(k)) \triangleleft \text{SL}_n(k)$. Il est naturel de considérer, au lieu de $\text{SL}_n(k)$, le quotient $\text{SL}_n(k)/Z(\text{SL}_n(k))$.

> [!note] Déf
> Groupe projectif linéaire : $\text{PGL}_n(k) = \text{GL}_n(k)/k^*\text{Id}$
> Groupe projectif spécial linéaire : $\text{PSL}_n(k) = \text{SL}_n(k)/Z(\text{SL}_n(k)) = \text{SL}_n(k)/\mu_n(k)\text{Id}$.

Ces groupes apparaissent naturellement quand on considère l'action de $\text{GL}_n(k)$ ou de $\text{SL}_n(k)$ sur l'ensemble $\mathbb{P}(k^n)$ des droites de l'espace vectoriel $k^n$.

> [!note] Déf
> $\mathbb{P}(k^n) = \{ \text{droites de } k^n \}$ espace projectif $= k^n \setminus \{0\} / k^*$ ; choix d'un vecteur $\neq 0$. 2 vecteurs $\neq 0$ définissent la même droite si ils sont colinéaires.

$Gl_n(k)$ et $Sl_n(k)$ agissent transitivement sur $\mathbb{P}(k^n)$.

D'où des morphismes $Gl_n(k) \longrightarrow \mathcal{G}(\mathbb{P}(k^n))$, $Sl_n(k)$.

noyau : $g \in Gl_n(k)$ ou $Sl_n(k)$ tq $\forall v \neq 0$, $g(v)$ et $v$ sont colinéaires, i.e. $g = \lambda Id$ pour un $\lambda \in k^*$.

On a ainsi des morphismes injectifs
$$PGl_n(k) \longrightarrow \mathcal{G}(\mathbb{P}(k^n)), \qquad PSl_n(k)$$
i.e. on a des actions fidèles et transitives.

> [!note] Déf
> Soit $G$ un groupe agissant sur un ensemble $X$. On dit que l'action est 2-transitive si $\forall x \neq y, \forall x' \neq y'$ dans $X$, $\exists g \in G / g(x) = x'$ et $g(y) = y'$.

> [!note] Prop
> L'action de $PSL_n(k)$ sur $\mathbb{P}(k^n)$ est 2-transitive.

**Preuve :** Théorème de la base incomplète. $D_1 \neq D_2$ et $D'_1 \neq D'_2$ droites. On veut $g \in Sl_n(k)$ tq $g(D_1) = D'_1$. Soient $e_1, e_2, e'_1, e'_2$ des vecteurs $\neq 0$ sur $D_1, D_2, D'_1, D'_2$. Alors $(e_1, e_2)$ famille libre, qu'on complète en une base ; idem avec $(e'_1, e'_2)$ ; ensuite : $\exists g \in Gl_n(k)$, qui transforme la $1^{ere}$ base en la $2^e$ : $g(e_i) = e'_i$. Si on veut $g \in SL_n(k)$ on prend $\tilde{g}$ avec $\tilde{g}(e_i) = e'_i , i \geq 2$,
$$\tilde{g}(e_1) = \frac{1}{det g} e'_1 .$$

> [!note] Thm.
> Sauf pour $n=2$ et $k=\mathbb{F}_2$ ou $\mathbb{F}_3$, $PSL_n(k)$ est un groupe simple.

> [!info] Rem.
> les situations exclues sont les mêmes que pour le thm sur les groupes dérivés.

> [!note] Déf
> Soit $G$ un groupe. Un sous-groupe $H$ de $G$ est dit maximal si $\forall K \subset G$ sous-groupe, si $H \subset K \subset G$ alors $K=H$ ou $K=G$.

> [!note] Prop
> Soit $G$ groupe qui agit 2-transitivement sur un ensemble $X$. Alors $\forall x \in X$, le stabilisateur $G_x = Stab(x)$ de $x$ est un sous-groupe maximal.

**Preuve.** L'action sur $X$ est transitive. On sait alors que $\forall x \in X$, l'orbite de $x = X$ et on a une bijection équivalente : l'action par translation à gauche $G/G_x \xrightarrow{\sim} X$ qui transforme l'action sur $G/G_x$ en l'action sur $X$. On se ramène ainsi à $X=G/G_x$.

Soit $K$ sous-groupe $G_x \subset K \subset G$. Par l'absurde, $G_x \neq K$, $K \neq G$. $\exists k \in K \setminus G_x$ et $\exists g \in G \setminus K$. On considère les classes $kG_x$ et $gG_x \in G/G_x$, et aussi la classe $eG_x = G_x \in G/G_x$.
$$\exists u \in G \text{ tq } u(G_x) = G_x, \quad u(kG_x) = gG_x \quad (2\text{-transitif})$$
i.e. $uG_x = G_x \Rightarrow u \in G_x$, $ukG_x = gG_x \Rightarrow g^{-1}uk \in G_x \subset K$. mais $k \in K$, $u \in G_x \subset K \Rightarrow g^{-1} \in K$ contradiction.

Conclusion: $G_x$ maximal.

**Preuve du thm.**
$$PSL_n(k) = SL_n(k) / Z(SL_n(k))$$
Soit $N \triangleleft PSL_n(k)$. Montrons $N = \{e\}$ ou $N = PSL_n(k)$. Via la correspondance bijective entre sous-groupes (resp. distingués) de $PSL_n(k)$ et sous-groupes (resp. distingués) de $SL_n(k)$ contenant $Z(SL_n(k))$, on va montrer : si $N \triangleleft SL_n(k)$ avec $Z(SL_n(k)) \subset N$, alors $N = Z(SL_n(k))$ ou $N = SL_n(k)$.

2 situations :
1) $\exists$ une droite $D \subset k^n$ stabilisée par $N$, i.e. $\forall g \in N, g(D) = D$. Alors $N$ stabilise toutes les droites de $k^n$, et donc $N \supset Z(SL_n(k))$. En effet, $SL_n(k)$ agit transitivement sur $\mathbb{P}(k^n)$. Si $D' \in \mathbb{P}(k^n), \exists g \in SL_n(k), g(D) = D'$. Or soit $Stab(D') = g Stab(D) g^{-1}$. Or on a supposé $N \subset Stab(D)$. $\implies gNg^{-1} \subset g Stab(D) g^{-1} = Stab(D')$. D'où $N$ stabilise $D', \forall D'$.

2) $N$ ne stabilise aucune droite. Soit $(e_1, ..., e_n)$ la base canonique de $k^n$
$$P = Stab(ke_1) = \left\{ \begin{pmatrix} * & \cdots \\ 0 & \end{pmatrix} \in SL_n(k) \right\}$$
On sait que $P$ est un sous-groupe maximal de $SL_n(k)$ car action 2-transitive. De plus $N \not\subset P$. Donc le groupe $NP = PN \supsetneq P$. $P$ maximal $\implies NP = PN = SL_n(k)$. ie. $SL_n(k) \twoheadrightarrow SL_n(k)/N$, $\pi(P) = PN/N = SL_n(k)/N$, $\pi|_P$ est surjective.

On veut montrer $N = SL_n(k)$.

Les hypothèses sur $n$ et $k$ ne sont celles qui assurent que
$$\mathcal{D}(SL_n(k)) = SL_n(k)$$
On va montrer que $N = \mathcal{D}(SL_n(k))$ et par cela on va montrer que $SL_n(k)/N$ est abélien.

On considère le sous-groupe $K$ de $P$
$$K = \left\{ \begin{pmatrix} 1 & & * \\ & \ddots & \\ 0 & & 1 \end{pmatrix} \right\} \text{ abélien}$$
C'est le sous-groupe engendré par les sous-groupes à 1 paramètre $E_{ij}(\lambda) , \forall \lambda \in k, j=2,\dots,n$.

On a $K \triangleleft P$
$$\begin{pmatrix} 1 & & L \\ & \ddots & \\ 0 & & 1 \end{pmatrix} \begin{pmatrix} 0 & & L \\ & \ddots & \\ 0 & & A \end{pmatrix} \text{ calculé par blocs.}$$

$\pi(K) \subset SL_n(k)/N \quad , \quad \pi(K) \text{ sous-groupe abélien.}$ $\pi(K) = KN/N$. Comme $K \triangleleft P , \pi(K) \triangleleft \pi(P) = SL_n(k)/N$.

$\pi^{-1}(\pi(K)) = KN$ est donc un sous-groupe distingué de $SL_n(k)$ contenant $K$.

Ainsi $KN$ contient chaque sous-groupe à un paramètre $E_{ij}(\lambda) , j=2,\dots,n$.

Mais on sait que tous les sous-groupes à un paramètre $E_{ij}(\lambda)$ sont conjugués. Donc $KN$ les contient tous, et donc $KN = SL_n(k)$.

D'où $\pi(K) = SL_n(k)/N$, $\pi|_K$ surjective, $SL_n(k)/N$ abélien.

$\mathcal{D}(SL_n(k)) = SL_n(k) \subset N$.

Cas où $n=2$, $k=\mathbb{Z}/2\mathbb{Z}$

On a vu $GL_2(\mathbb{Z}/2\mathbb{Z}) = SL_2(\mathbb{Z}/2\mathbb{Z}) = PSL_2(\mathbb{Z}/2\mathbb{Z}) \simeq \mathfrak{S}_3$ pas simple.

Cas où $n=2$, $k=\mathbb{Z}/3\mathbb{Z}$

On étudie plus en détail l'action de $PSL_n(k)$ sur $\mathbb{P}(k^n)$, $k$ fini. Plus généralement, prenons $k=\mathbb{Z}/p\mathbb{Z}$.

Action de $PGL_2(\mathbb{Z}/p\mathbb{Z})$ sur $\mathbb{P}((\mathbb{Z}/p\mathbb{Z})^2)$

> [!note] Prop
> $|\mathbb{P}((\mathbb{Z}/p\mathbb{Z})^2)| = p+1$.

**Preuve :** $\mathbb{P}((\mathbb{Z}/p\mathbb{Z})^2) = \{ (\mathbb{Z}/p\mathbb{Z})^2 - \{0\} \} / (\mathbb{Z}/p\mathbb{Z})^*$
$$|\mathbb{P}((\mathbb{Z}/p\mathbb{Z})^2)| = \frac{p^2-1}{p-1} = p+1$$

Autre façon : $GL_2(\mathbb{Z}/p\mathbb{Z})$ agit transitivement sur $\mathbb{P}((\mathbb{Z}/p\mathbb{Z})^2)$, 1 seule orbite, il faut trouver son cardinal.
$$= |GL_2(\mathbb{Z}/p\mathbb{Z})| / |Stab(D_1)| , \quad D_1 = \mathbb{Z}/p\mathbb{Z} \cdot e.$$
$$= \frac{(p^2-1)(p^2-p)}{(p-1)^2 p} = p+1 , \quad Stab(D_1) = \left\{ \begin{pmatrix} * & * \\ 0 & * \end{pmatrix} \right\}$$

L'action de $PGL_2(\mathbb{Z}/p\mathbb{Z})$ est fidèle : on a un morphisme injectif $PGL_2(\mathbb{Z}/p\mathbb{Z}) \hookrightarrow \mathfrak{S}_{p+1}$.
$$|PGL_2(\mathbb{Z}/p\mathbb{Z})| = \frac{(p^2-1)(p^2-p)}{p-1} = (p-1)p(p+1)$$

Pour $p=3$ : $|PGL_2(\mathbb{Z}/3\mathbb{Z})| = 24 = 4! = |\mathfrak{S}_4|$. Ainsi $PGL_2(\mathbb{Z}/3\mathbb{Z}) \simeq \mathfrak{S}_4$.

De plus $PSL_2(\mathbb{Z}/3\mathbb{Z})$ est d'indice 2 dans $PGL_2(\mathbb{Z}/3\mathbb{Z})$. Or $\mathfrak{A}_4$ est le seul sous-groupe d'indice 2 de $\mathfrak{S}_4$.

D'où $PSL_2(\mathbb{Z}/3\mathbb{Z}) \simeq \mathfrak{A}_4$ pas simple.

Retour sur les groupes dérivés

> [!note] Thm.
> $\mathfrak{D}(SL_2(\mathbb{Z}/3\mathbb{Z})) \simeq \mathbb{H}_8$.

**Preuve :** Pour trouver des informations sur le groupe dérivé, on peut considérer des morphismes vers des groupes abéliens ou des morphismes vers des groupes dont on connaît le groupe dérivé.
$$SL_2(\mathbb{Z}/3\mathbb{Z}) \to PSL_2(\mathbb{Z}/3\mathbb{Z}) \to \{1\}$$
d'où $\mathfrak{D}(SL_2(\mathbb{Z}/3\mathbb{Z})) \to \mathfrak{D}(PSL_2(\mathbb{Z}/3\mathbb{Z})) \to \{1\}$. Or $PSL_2(\mathbb{Z}/3\mathbb{Z}) \simeq \mathfrak{A}_4$.

$V = \{ Id, (12)(34), (13)(24), (14)(23) \} \triangleleft \mathfrak{A}_4$.

$V \triangleleft \mathfrak{A}_4$, $\mathfrak{A}_4/V \simeq \mathbb{Z}/3\mathbb{Z}$ abélien $\Rightarrow \mathfrak{D}(\mathfrak{A}_4) \subset V$. Mais $\mathfrak{D}(\mathfrak{A}_4) \triangleleft \mathfrak{A}_4$, $V$ ne contient pas de sous-groupe distingué de $\mathfrak{A}_4$ autre que $\{Id\}$ ou lui même. D'où $\mathfrak{D}(\mathfrak{A}_4) = V$.

Conclusion : On a un morphisme surjectif $\mathfrak{D}(SL_2(\mathbb{Z}/3\mathbb{Z})) \to \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$. D'où $4 \mid |\mathfrak{D}(SL_2(\mathbb{Z}/3\mathbb{Z}))|$.

On a aussi $SL_2(\mathbb{Z}/3\mathbb{Z}) \to PSL_2(\mathbb{Z}/3\mathbb{Z})$ : $\{1\} \to V \to \mathfrak{A}_4 \to \mathbb{Z}/3\mathbb{Z} \to \{1\}$.

$\Rightarrow$ donne un morphisme surjectif $SL_2(\mathbb{Z}/3\mathbb{Z}) \twoheadrightarrow \mathbb{Z}/3\mathbb{Z}$ abélien. Soit $N = \text{Ker} \varphi$. On a $\mathfrak{D}(SL_2(\mathbb{Z}/3\mathbb{Z})) \subset N$. Or $|N| = 8$, $|\mathfrak{D}(SL_2(\mathbb{Z}/3\mathbb{Z}))| \mid 8$.

Conclusion : $|\mathfrak{D}(SL_2(\mathbb{Z}/3\mathbb{Z}))| \in \{4, 8\}$.

Or $|D(SL_2(\mathbb{Z}/3\mathbb{Z}))| = 4$, on avait $|SL_2(\mathbb{Z}/3\mathbb{Z})| = 4 \times 3 = 12$, il avait 3 éléments d'ordre 3. Impossible car dans $SL_2(\mathbb{Z}/3\mathbb{Z})$ il y a un unique élément d'ordre 2. En effet soit $A \in SL_2(\mathbb{Z}/3\mathbb{Z})$ d'ordre 2, $A \neq Id , A^2 = Id$ ; le polynôme $X^2 - 1 = (X-1)(X+1)$ est un polynôme annulateur scindé, racines simples donc $A$ diagonalisable, $Sp(A) \subset \{ \pm 1 \}$. Donc $A = -Id$. Ainsi $|D(SL_2(\mathbb{Z}/3\mathbb{Z}))| = 8$ et il y a un unique élément d'ordre 2.

$D(SL_2(\mathbb{Z}/3\mathbb{Z})) = \mathbb{Z}/8\mathbb{Z}$ pas possible car abélien, car on a un morphisme surjectif $D(SL_2(\mathbb{Z}/3\mathbb{Z})) \to \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$ ; comme tout quotient d'un groupe cyclique est cyclique, $D(SL_2(\mathbb{Z}/3\mathbb{Z})) \simeq \mathbb{Z}/8\mathbb{Z}$ impossible. Ainsi $D(SL_2(\mathbb{Z}/3\mathbb{Z}))$ non abélien, unique élément d'ordre 2, donc $D(SL_2(\mathbb{Z}/3\mathbb{Z})) \simeq \mathbb{H}_8$.

Interprétation géométrique des translations et dilatations

On appelle transvection (resp. dilatations) toute matrice conjuguée d'une matrice de transvection élémentaire (resp. dilatation élémentaire).

## Complément sur le groupe linéaire

On a introduit les matrices de transvection élémentaires
$$E_{ij}(\lambda) = Id + \lambda E_{ij} \ , \ (i \neq j) \ \lambda \in \mathbb{K}^*$$
et les matrices dilatation élémentaires
$$D_i(\lambda) = Id + (\lambda - 1)E_{ii} \ , \ \lambda \in \mathbb{K}^* \ , \ \lambda \neq 1$$

On appelle matrice de transvection, toute matrice conjuguée à une matrice de transvection élémentaire. On appelle matrice de dilatation, toute matrice conjuguée d'une matrice de dilatation élémentaire.

En terme d'endomorphisme de $k^n$, il s'agit d'endomorphismes dont la matrice dans une bonne base est soit une matrice de transvection, soit une matrice de dilatation élémentaire.

Vision géométrique : Soit $E$ un $k$-espace vectoriel de dim $n$.
Cadre: On considère $u \in GL(E)$, $u \neq Id$, qui laisse un hyperplan $H$ :
$$\forall x \in H \ , \ u(x) = x \ .$$
Il y a alors 2 cas possibles.

> [!note] Prop
> Sous ces hypothèses, les conditions suivantes sont équivalentes
> 1) $det u = \lambda \neq 1$
> 2) $u$ est diagonalisable
> 3) $Im(u - Id) \cap H = \{0\}$.
> 4) Dans une base convenable $Mat(u) = \begin{pmatrix} 1 & & & \\ & \ddots & & \\ & & 1 & \\ & & & \lambda \end{pmatrix}$ ie c'est une dilatation

> [!note] Prop
> Dans les hypothèses ci-dessus, les conditions suivantes sont équivalentes
> 1) det $u = 1$
> 2) $u$ non diagonalisable
> 3) $\text{Im}(u - \text{Id}) \subset H$
> 4) Dans une base convenable $\text{Mat}(u) = \begin{pmatrix} 1 & & 0 \\ & \ddots & \\ 0 & & 1 \end{pmatrix}$ i.e. c'est une transvection

$H$ hyperplan. Soit $v \in E - H$. Si $(e_1, \dots, e_{n-1})$ base de $H$, $(e_1, \dots, e_{n-1}, v)$ base de $E$ et la matrice de $u$ dans cette base est de la forme $\begin{pmatrix} 1 & & 0 \\ & \ddots & \\ 0 & & 1 \end{pmatrix}$.

Alors $\text{Sp}(u) = \{1, \lambda\}$. Si $\lambda \neq 1$, $u$ diagonalisable ; si $\lambda = 1$, si $u$ était diagonalisable on aurait $u = \text{Id}$, exclu.

Exercice : terminer la preuve.

## Réduction de Jordan

$k$ corps. $E$ $k$-espace vectoriel de dim finie, $u \in L(E)$ dont le polynôme caractéristique est scindé sur $k$, i.e. $u$ est trigonalisable.

> [!note] Déf (Bloc de Jordan)
> Pour $\lambda \in k$, $r \in \mathbb{N}^*$, on pose $J_{\lambda,r} = \begin{pmatrix} \lambda & 1 & 0 \\ & \ddots & \ddots \\ 0 & & \lambda \end{pmatrix} \in M_r(k)$.

> [!note] Thm.
> $u \in L(E)$, dont le polynôme caractéristique est scindé. Alors il existe une base de $E$ dans laquelle la matrice de $u$ est diagonale par blocs avec des blocs qui sont des blocs de Jordan. De plus l'ensemble des couples $(\lambda, r)$ qui apparaissent, comptés avec leurs multiplicités, ne dépend que de $u$ et pas de la base. Cet ensemble avec multiplicités caractérise la classe de similitude de $u$.

Rappels :
Outils : 1) Thm de Cayley-Hamilton. Soit $\chi(X) \in k[X]$ le polynôme caractéristique de $u$ : $\chi(X) = \det(X \cdot Id - u)$. Alors $\chi(u) = 0$.

2) Soit $\chi(X) = P_1(X)^{\alpha_1} \dots P_r(X)^{\alpha_r}$, $\alpha_1, \dots, \alpha_r \in \mathbb{N}^*$, $P_i$ polynômes irréductibles 2 à 2 (i.e. $P_i(X) = X - \lambda_i$). Lemme des noyaux :
$$E = \ker(\chi(u)) = \bigoplus_{i=1}^r \ker P_i^{\alpha_i}(u) = \bigoplus_{i=1}^r \ker (u - \lambda_i Id)^{\alpha_i} \qquad \text{sous-espace caractéristique}$$

3) Dans chaque sous-espace caractéristique $u_j = \lambda_j Id + n_j$ avec $n_j = 0$ (i.e. $n_j$ nilpotent). Ainsi, en se restreignant à un sous-espace caractéristique, on se ramène à démontrer le thm dans le cas d'un endomorphisme nilpotent.

On suppose $u$ nilpotent. Soit $s$ l'indice de nilpotence, $u^s = 0$, $u^{s-1} \neq 0$. On va montrer qu'il existe une base dans laquelle la matrice de $u$ est diagonale par blocs, avec des blocs de la forme $\begin{pmatrix} 0 & 1 & 0 \\ & \ddots & \ddots \\ & & \ddots & 1 \\ & & & 0 \end{pmatrix}$ et que $\forall i$, le nombre de blocs de Jordan de taille $i$ ne dépend pas de la base (on va le calculer en fonction de $u$).

On procède par récurrence sur $\dim E$. $\dim E = 1$ claire, $\dim E = 2$ aussi.

On va construire un sous-espace stable dans lequel la restriction de $u$ a une matrice bloc de Jordan de taille $s$, et qui possède un supplémentaire stable. On a $u^s = 0$, $u^{s-1} \neq 0$, $\exists x \in E$ tq. $u^{s-1}(x) \neq 0$. Soit $F = \text{Vect}(x, u(x), \dots, u^{s-1}(x))$ stable par $u$. $\dim F = s$, $x, u(x), \dots, u^{s-1}(x)$ sont linéairement indépendants. Si on avait $a_0 x + a_1 u(x) + \dots + a_{s-1} u^{s-1}(x) = 0$ on applique $u^{s-1} \Rightarrow a_0 u^{s-1}(x) = 0 \Rightarrow a_0 = 0$, puis on applique $u^{s-2} \Rightarrow a_1 = 0$, etc.

Étalons la base $(u^{s-1}(x), \dots, u(x), x)$ ; la matrice de $u$ dans cette base est $\begin{pmatrix} 0 & & \\ & \ddots & \\ & & 0 \end{pmatrix}$. Si,

Pour trouver un supplémentaire stable on utilise la dualité $E^*$ dont la base et les relations d'orthogonalité entre sous-espaces de $E$ et $E^*$.

Soit $F$ s.e.v de $E$ : $F^\circ = \{\varphi \in E^* \mid \forall x \in F, \langle \varphi, x \rangle = 0\}$ s.e.v de $E^*$ de dim $= n - \dim F$.

Soit $G$ s.e.v de $E^*$ : $G^\circ = \{x \in E \mid \forall \varphi \in G, \langle \varphi, x \rangle = 0\}$ s.e.v de $E$ de dim $= n - \dim G$.

Soit $u \in \mathcal{L}(E)$ donc $u^* : E^* \to E^*$, $f \mapsto f \circ u$.

On a $(u^*)^0 = 0$ et $(u^*)^n \neq 0$. Soit $x \in E$, $u^{*n}(x) \neq 0$.

$\exists \varphi \in E^*$ tq $\varphi(u^{*n}(x)) \neq 0$. $\implies \langle \varphi, u^{*n}(x) \rangle \neq 0$. $( (u^*)^n(\varphi) )(x) \neq 0$.

On peut donc $E^*$, avec $u^*$ et $\varphi$, faire ce qu'on a fait dans $E$ avec $u$ et $x$.

Soit $G = \{\varphi, u^*(\varphi), \dots, u^{*n-1}(\varphi)\}$, $\dim G = n$. Soit $F = G^\circ$. Alors $\dim F = n - n = 0$.

Comme $G$ stable par $u^*$, $G^\circ$ est stable par $u$ : si $y \in F$, on a $u(y) \in F$ car $\forall \varphi \in G, \langle \varphi, u(y) \rangle = \langle u^*(\varphi), y \rangle = 0$.

Si on montre $F \cap F' = \{0\}$. Alors $E = F \oplus F'$ avec $F'$ stable, et on pourra faire la récurrence.

Mais si $y \in F \cap F'$, $y = a_0 x + a_1 u(x) + \dots + a_n u^{*n}(x)$ et $\forall j=0, 1, \dots, n$, $u^{*j}(\varphi)(y) = 0$ i.e. $\varphi(u^{*j}(y)) = 0$.

Soit $i$ le plus petit indice tq $a_i \neq 0$. On constate $(u^*)^{n-i}(\varphi)(y) = \varphi(u^{*n-i}(y)) = \varphi(a_i u^{*n}(x)) = a_i \varphi(u^{*n}(x)) \neq 0$ $\implies a_i = 0$, contradiction.

Ainsi $F \cap F' = \{0\}$. D'où l'existence des blocs de Jordan.

Unicité de blocs de Jordan de taille donnée :

Soit $b_i$ le nombre de blocs $J_r$ de Jordan de taille $i$. Les $b_i$ s'expriment en fonction des dimensions des noyaux des puissances de $u$.

Rappels. Soit $u \in \mathcal{L}(E)$, alors la suite des noyaux itérés est croissante et stationnaire
$$\{0\} \subset \ker u \subset \ker u^2 \subset \dots \subset \ker u^k \subset \dots$$
et si $\ker u^p = \ker u^{p+1}$, alors $\forall q \ge p, \ker u^q = \ker u^p$.

De plus, la suite des sauts de dimension $\delta_k = \dim \ker u^k - \dim \ker u^{k-1}, k \ge 1$ est décroissante. En effet : $\delta_k = \dim (\ker u^k / \ker u^{k-1})$. On considère l'application linéaire induite par $u$
$$\begin{array}{ccc} \ker u^{k+1} & \longrightarrow & \ker u^k \\ x & \longmapsto & u(x) \end{array}$$
$$\begin{array}{ccc} \quad & \searrow & \downarrow \\ \quad & & \ker u^k / \ker u^{k-1} \end{array}$$
$x \in \ker \tilde{u} \iff u(x) \in \ker u^{k-1} \iff x \in \ker u^k$.
$$\Rightarrow \ker \tilde{u}^{k+1} /_{u^k} \longleftarrow \ker u^k / \ker u^{k-1}$$
passage au quotient : une application injective. d'où $\delta_{k+1} \le \delta_k$.

> [!note] Prop
> Le nombre de blocs de Jordan de taille $i$ est $b_i = \delta_i - \delta_{i+1}$.

**Preuve :** La taille maximale d'un bloc de Jordan est $s$ indice de $u$. Pour un bloc de Jordan de taille $r$,
$$(J_{0,r})^k = \begin{pmatrix} & & & \\ & \ddots & & \\ & & \ddots & \\ & & & \end{pmatrix} \text{, et si } k \ge r \ (J_{0,r})^k = 0.$$
$$\dim \ker (J_{0,r})^k = \begin{cases} k & \text{si } k \leq r \\ r & \text{si } k \geq r \end{cases}$$
$$\dim \ker u^k = k \sum_{i=k}^s b_i + \sum_{i=1}^{k-1} i\, b_i$$
$$\dim \ker u^k - \dim \ker u^{k-1} = k \sum_{i=k}^s b_i - (k-1) \sum_{i=k-1}^s b_i + (k-1)b_{k-1} = \sum_{i=k}^s b_i$$
$$S_k = \sum_{i=k}^s b_i \Rightarrow S_k - S_{k+1} = b_k$$

Application :

> [!note] Thm.
> Soit $\lambda \neq 0$ dans le corps $k$, $\lambda$ pas une racine de l'unité. Alors si $M \in M_n(k)$, $M$ et $\lambda M$ sont semblables $\Leftrightarrow$ $M$ nilpotente.

**Preuve :** Soit $\lambda$ pas une racine de l'unité et $M \in M_n(k)$ avec $M$ semblable à $\lambda M$. Alors dans une clôture algébrique $\bar{k}$ de $k$, elles ont les mêmes valeurs propres. Si $a$ est valeur propre de $M \Rightarrow \lambda a$ valeur propre de $\lambda M$, donc aussi de $M$ ; et donc, en poursuivant, $\forall r \in \mathbb{N}$, $\lambda^r a$ valeur propre, mais les $\lambda^r$ sont tous distincts. Comme $M$ n'a qu'un nombre fini de valeurs propres, ceci $\Rightarrow a = 0$ $\Rightarrow Sp(M) = \{0\}$ et $M$ nilpotente.

Réciproque. On suppose $M$ nilpotente et on veut $M$ semblable à $\lambda M$. On a $\lambda M$ nilpotente. D'après le thm de Jordan, $M$ et $\lambda M$ sont semblables $\Leftrightarrow$ $\forall i$, elles ont le même nombre de blocs de Jordan de taille $i$. Mais $b_k = S_k - S_{k+1}$, $S_k = \dim \ker M^k - \dim \ker M^{k-1}$. Mais comme $\lambda \neq 0$, $\dim \ker M^k = \dim \ker (\lambda M)^k \forall k$. donc elles ont les mêmes $S_k$.

> [!note] Thm.
> $K=\mathbb{R}$ ou $\mathbb{C}$. Toute matrice de $M_n(K)$ est semblable à sa transposée.

**Preuve :** 1) $K=\mathbb{C}$. Soit $M \in M_n(\mathbb{C})$. $M$ est trigonalisable, on dispose du théorème de Jordan.
$$M = P \begin{pmatrix} \lambda_1 & & * \\ & \ddots & \\ & & \lambda_n \end{pmatrix} P^{-1} \implies {}^tM = {}^tP^{-1} \begin{pmatrix} \lambda_1 & & 0 \\ & \ddots & \\ * & & \lambda_n \end{pmatrix} {}^tP$$
si on a le thm pour chaque bloc de Jordan
$$P_i^{-1} J_{\lambda_i, r_i} P_i = {}^tJ_{\lambda_i, r_i} \text{, alors } \begin{pmatrix} P_1 & & \\ & \ddots & \\ & & P_m \end{pmatrix}^{-1} {}^tP^{-1} {}^tM {}^tP \begin{pmatrix} P_1 & & \\ & \ddots & \\ & & P_m \end{pmatrix} = M.$$
Il suffit de le faire pour un bloc de Jordan.
$$\begin{pmatrix} \lambda & 1 & & \\ & \ddots & \ddots & \\ & & \ddots & 1 \\ & & & \lambda \end{pmatrix} \text{ semblable à } \begin{pmatrix} \lambda & & 0 \\ 1 & \ddots & \\ & \ddots & \ddots & \\ 0 & & 1 & \lambda \end{pmatrix}$$
changement de base $(e_1, \ldots, e_n) \to (e_n, \ldots, e_1)$, i.e. on prend $P = \begin{pmatrix} 0 & & 1 \\ & \ddots & \\ 1 & & 0 \end{pmatrix}$.

2) $K=\mathbb{R}$. On a $M_n(\mathbb{R}) \subset M_n(\mathbb{C})$. Soit $M \in M_n(\mathbb{R})$. On applique le 1) : $\exists R \in GL_n(\mathbb{C})$ tq $RMR^{-1} = {}^tM$. On veut $S \in GL_n(\mathbb{R})$ tq $SMS^{-1} = {}^tM$.

> [!note] Prop
> Soient $A, B \in M_n(\mathbb{R})$ semblables dans $M_n(\mathbb{C})$. Alors elles sont semblables dans $M_n(\mathbb{R})$.

**Preuve :** $\exists R \in M_n(\mathbb{C})$ tq $RAR^{-1}=B$. Soit $R=P+iQ$ avec $P, Q \in M_n(\mathbb{R})$. $RA=BR$
$$\implies \begin{cases} PA=BP \\ QA=BQ \end{cases} \text{ si } P, Q \in GL(\mathbb{R}) \text{ ok.}$$
Mais $\forall t \in \mathbb{R}$, $(P+tQ)A = B(P+tQ)$. Il suffit de trouver $t \in \mathbb{R}$ tq $P+tQ \in GL_n(\mathbb{R})$, i.e. dét($P+tQ$) $\neq 0$.

Soient $P, Q$ fixés. le polynôme $\varphi(X) = \det(P + XQ) \in \mathbb{R}[X]$. $\varphi$ n'est pas le polynôme nul, car $\varphi(i) = \det R \neq 0$. donc $\varphi$ n'a qu'un nombre fini de racines $\Rightarrow \exists t \in \mathbb{R}, \varphi(t) \neq 0$.

> [!note] Thm
> Toute matrice $M \in M_n(\mathbb{C})$ est semblable à une matrice symétrique.

Ceci est faux sur $\mathbb{R}$, car sur $\mathbb{R}$ les matrices symétriques sont diagonalisables mais sur $\mathbb{C}$, il y a des matrices symétriques non diagonalisables.

**Preuve.** Soit $M \in M_n(\mathbb{C})$. On cherche $R \in GL_n(\mathbb{C})$ tq $RMR^{-1}$ symétrique, i.e $R^{-1} M R = RMR^{-1}$, $t_M = t_{RR} M (t_{RR})^{-1}$.

$M$ est semblable à une matrice diagonale par blocs de Jordan et il suffit de le faire pour un bloc de Jordan. i.e. Soit $J$ bloc de Jordan. On veut $R \in GL_n(\mathbb{C})$ tq $t_J = (t_{RR}) J (t_{RR})^{-1}$. On a vu que pour $J$ bloc de Jordan, $t_J = P J P^{-1}$ avec $P = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. Il suffit de trouver $R \in GL_n(\mathbb{C})$ tq $t_{RR} = P$.

On va utiliser la classification des formes quadratiques sur $\mathbb{C}$. On a si $Q_1, Q_2$ formes quadratiques sur $\mathbb{C}$, de matrices $P_1$ et $P_2$, elles sont équivalentes, i.e. $\exists S \in GL_n(\mathbb{C})$ tq $P_1 = t_{SP_2S}$ $\iff \mathrm{rg}(P_1) = \mathrm{rg}(P_2)$.

$P \in M_n(\mathbb{C})$ est symétrique, $\mathrm{rg}(P) = n$. C'est la matrice d'une forme quadratique qui est équivalente à la forme quadratique de matrice $Id$. Donc $\exists R \in GL_n(\mathbb{C})$ tq $t_{RIdR} = t_{RR} = P$.

## Réduction de Frobenius

Soit $k$ corps quelconque. $M \in M_n(k)$, $E$ $k$-ev de dim $n$, $u \in L(E)$. On va décomposer $E$ en $\oplus$ de $n$ espaces stables et dans lesquels $u$ aura une matrice compagnon
$$\begin{pmatrix} 0 & & & * \\ 1 & \ddots & & \\ & \ddots & \ddots & \\ & & 1 & * \end{pmatrix}$$

### 1. Espaces cycliques

> [!note] Déf (Vecteur cyclique)
> $x \in E$ est dit cyclique, si $Vect(u^k(x), k \in \mathbb{N}) = E$. (cela n'est pas toujours)

2) endomorphisme cyclique : $u \in L(E)$ tel que il existe un vecteur cyclique.
3) sous-espace cyclique : c'est un sev $F \subset E$ stable par $u$ et tel que la restriction de $u$ à $F$ est cyclique.

> [!note] Déf (Polynôme minimal relatif à un vecteur $x \in E$)
> Soit $I_x = \{ P \in k[X] \text{ tq. } P(u)(x) = 0 \}$. C'est un idéal $\neq \{0\}$ de $k[X]$. Comme $k[X]$ anneau principal, il existe un unique polynôme unitaire $\mu_x$, ou $\mu_x$ lorsque pas d'ambiguité sur $u$, tel que $I_x = (\mu_x)$.

Ainsi, si $P \in k[X]$ est tq $P(u)(x) = 0$, alors $\mu_x \mid P$. Et $\mu =$ polynôme minimal de $u$, on a $\mu_x \mid \mu$.

De plus, si $r = \deg(\mu_x)$, alors $x, u(x), \dots, u^{r-1}(x)$ sont linéairement indépendants, $Vect(x, u(x), \dots, u^{r-1}(x)) = Vect(u^k(x), k \in \mathbb{N})$ est de dim $r$. Cet espace est le sous-espace cyclique engendré par $x$.

Soit $\mu_\alpha(X) = a_0 + a_1 X + \dots + a_{n-1} X^{n-1} + X^n$. Dans la base du sous-espace cyclique $(e, u(e), \dots, u^{n-1}(e))$, la matrice de la restriction de $u$ est
$$\begin{pmatrix}
0 & & & -a_0 \\
1 & 0 & & -a_1 \\
& 1 & \ddots & \vdots \\
& & \ddots & 0 \\
& & & 1 & -a_{n-1}
\end{pmatrix} = C_{\mu_\alpha}$$

De façon générale, si $P(X) = X^n + a_{n-1} X^{n-1} + \dots + a_1 X + a_0$, la matrice compagnon de $P$
$$C_P = \begin{pmatrix}
0 & & & -a_0 \\
1 & \ddots & & \vdots \\
& \ddots & \ddots & \vdots \\
& & 1 & -a_{n-1}
\end{pmatrix} \in M_n(k)$$

Interprétation de la matrice compagnon de $P \in k[X]$.

On considère l'espace vectoriel $k[X]/(P) = F$, $\dim F = d^\circ P$ ; il a pour base les classes $(1, \bar{X}, \dots, \bar{X}^{n-1})$.

L'endomorphisme de $k[X]$ donné par la multiplication par $X$
$$\begin{array}{rcl} k[X] & \to & k[X] \\ Q(X) & \mapsto & X Q(X) \end{array}$$
envoie l'idéal $(P)$ dans lui-même, et donc passe au quotient et détermine une application linéaire $M : F \to F$ « multiplication par $X$ ».

La matrice de $M$ dans $(1, \bar{X}, \dots, \bar{X}^{n-1})$ est la matrice compagnon $C_P$.

Propriétés des matrices compagnon $C_P$.

> [!note] Prop
> Le polynôme caractéristique de $C_P$ = polynôme minimal de $C_P$ = $P$.

**Preuve :** On peut calculer (par récurrence sur $n = d^\circ P$) $\chi_{C_P}$ le polynôme.

Dans calcul explicite. Soit $(e_1, \dots, e_r)$ base canonique de $k^r$.

On a $e_2 = C_p(e_1)$, $e_3 = C_p^2(e_1)$, ..., $e_r = C_p^{r-1}(e_1)$. Ainsi $e_1$ est un vecteur cyclique pour $C_p$ ; donc le polynôme minimal de $e_1$ est de degré $r$. Mais on a $\mu_{e_1} \mid \mu_{C_p} \mid \chi_{C_p}$, unitaires et $d^\circ \chi_{C_p} = r$. d'où $\mu_{e_1} = \mu_{C_p} = \chi_{C_p}$.

Or $C_p^r(e_1) = -a_0 e_1 - a_1 C_p(e_1) - \dots - a_{r-1} C_p^{r-1}(e_1)$, i.e. $P(C_p)(e_1) = 0$, donc $P \in I_{e_1}$, $P$ est un multiple de $\mu_{e_1}$, mais $d^\circ P = r = d^\circ \mu_{e_1} \Rightarrow P = \mu_{e_1}$.

> [!note] Thm.
> Soit $u \in L(E)$. Alors $\exists x \in E$ tel que $\mu_x = \mu_u$.

**Preuve :** On sait $\forall x \in E$, $\mu_x \mid \mu_u$. Posons $\mu_u = \prod_{i=1}^s P_i(X)^{\alpha_i}$ avec $P_i$ irréductible, $P_i \neq P_j$ si $i \neq j$. Comme $\mu_u(u) = 0$, lemme des noyaux $E = \bigoplus_{i=1}^s \ker(P_i(u)^{\alpha_i})$.

Chaque $F_i = \ker(P_i(u)^{\alpha_i})$ est stable par $u$, et le polynôme minimal de la restriction de $u$ à ce sous-espace est $P_i(X)^{\alpha_i}$. En effet, sur $F_i$ on a $P_i(u)^{\alpha_i} = 0$, donc le polynôme minimal de la restriction divise $P_i(X)^{\alpha_i}$. Comme $P_i$ irréductible, un diviseur est de la forme $P_i(X)^{\beta_i}$ avec $\beta_i \leq \alpha_i$.

Si $\beta_i < \alpha_i$ : Alors le polynôme $Q(X) = \prod_{j \neq i} P_j(X)^{\alpha_j} \cdot P_i(X)^{\beta_i}$ satisferait $Q(u) = 0$. $Q(X)$ s'annule sur chacun des sous-espaces $\ker P_j(u)^{\alpha_j}$ et aussi sur $\ker P_i(u)^{\alpha_i}$. On a $\deg Q < \deg \mu$ impossible.

Sur $F_i$ on a $P_i(u)^{a_i} = 0$, $P_i(u)^{a_i-1} \neq 0$, donc $\exists x \in F_i$, $P_i(u)^{a_i-1}(x) \neq 0$ ; soit le polynôme minimal de $x$ : $\mu_x = P_i(X)^{a_i}$ (on a $\mu_x \mid P_i(X)^{a_i}$, donc $\mu_x$ puissance de $P_i(X)$). Soit $x = x_1 + \cdots + x_s$. Alors $\mu_x = \mu_{x_1} \mu_{x_2} \cdots \mu_{x_s} = \mu$. Et $P(u)(x) = 0 \Rightarrow \sum P(u)(x_i) = 0$, et les $F_i$ en $\oplus$ ; $\forall i, P(u)(x_i) = 0 \Rightarrow \forall i, \mu_{x_i} \mid P$ et les $\mu_{x_i}$ sont premiers entre eux.

> [!note] Corollaire
> Caractérisation des endomorphismes cycliques : $u \in L(E)$ cyclique $\Leftrightarrow \mu_u = \chi_u$.

**Preuve :** On a déjà vu « $\Rightarrow$ ». Pour « $\Leftarrow$ » : $\exists x \in E$ tq. $\mu_x = \mu_u = \chi_u$, d'où $\mu_x \cdot n = \dim E$. Mais d° $\mu_x$ = dimension du sous-espace cyclique engendré par $x$. Donc $x$ est un vecteur cyclique.

> [!note] Thm de Frobenius
> Soit $u \in L(E)$. Alors il existe une suite $(P_1, \ldots, P_r)$ de polynômes unitaires, et une suite $(F_1, \ldots, F_r)$ de sous-espaces stables tels que :
> 1) $E = F_1 \oplus \cdots \oplus F_r$
> 2) $\forall i = 1, \ldots, r$, la restriction de $u$ à $F_i$, $u_{|F_i}$, est cyclique, de polynôme minimal $P_i$.
> 3) $P_r \mid P_{r-1} \mid \cdots \mid P_2 \mid P_1$
> De plus, la suite de polynômes $(P_1, \ldots, P_r)$ est unique et elle caractérise la classe de similitude de $u$.

On appelle $P_1, \ldots, P_r$ les invariants de similitude de $u$.

Ainsi, il existe une base de $E$ dans laquelle la matrice de $u$ est de la forme
$$\begin{pmatrix} C_{P_1} & & & 0 \\ & C_{P_2} & & \\ & & \ddots & \\ 0 & & & C_{P_r} \end{pmatrix} \quad \text{avec } P_r | P_{r-1} | \dots | P_1 .$$

> [!info] Rem.
> 1) Le polynôme minimal $\mu_u = P_1$ car $\mu_u(C_{P_1}) = 0 \Rightarrow P_1 | \mu_u$
> 2) $\chi_u = P_1 P_2 \dots P_r$
> 3) On n'a fait aucune hypothèse sur le fait que $\chi_u$ soit scindé ou non.

**Preuve :**
1) Existence : par récurrence sur $\dim E$. Posons $P_1 := \mu_u$. On a vu qu'il existe $x \in E$ tq. $\mu_x = \mu = P_1$. Soit $d := \deg(P_1)$. $F := \text{Vect}(x, u(x), \dots, u^{d-1}(x))$ sous-espace cyclique engendré par $x$. $u|_F$ cyclique, de polynôme minimal $P_1$. On va montrer que $F_1$ possède un supplémentaire stable par $u$, soit $F'$, et on pourra appliquer l'hypothèse de récurrence à $F'$.

Idée : utiliser $E^*$. On complète la famille libre $e_1 = x, e_2 = u(x), \dots, e_d = u^{d-1}(x)$, en une base $(e_1, \dots, e_d, e_{d+1}, \dots, e_n)$ de $E$. On considère la base duale $(e_1^*, \dots, e_d^*, \dots, e_n^*)$. Posons $\varphi = e_d^*$. On a $\varphi(e_1) = \dots = \varphi(e_{d-1}) = 0, \varphi(e_d) = 1$.

> [!note] Lemme
> La famille $(\varphi, {}^t u(\varphi), \dots, {}^t u^{d-1}(\varphi))$ est libre.

Preuve : Supposons qu'il existe $a_0, \dots, a_{d-1} \in \mathbb{K}$ tq $a_0 \varphi + a_1 {}^t u(\varphi) + \dots + a_{d-1} {}^t u^{d-1}(\varphi) = 0$. On applique à $e_1 = x$ : $\sum_{i=0}^{d-1} a_i \varphi(u^i(e_1)) = a_{d-1} \varphi(e_d) = 0$ $\Rightarrow a_{d-1} = 0$. On applique ensuite à $e_2 = x \Rightarrow a_{d-2} = 0$ etc. sur $e_d$ on obtient $a_0 = 0$.

Soit $G = \text{Vect}(x, u(x), \dots, u^{d-1}(x))$, donc $\dim G = d$, et $G$ est stable par $u$ car $\mu_u \cdot \mu_u$ de degré $d$.

Soit $F' = G^\circ$ (avec $G^\circ \subset E$), donc $\dim F' = n-d$. Comme $G$ stable pour $u$, $F' = G^\circ$ est stable par $u$.

Vérifions que $F'$ est un supplémentaire de $F_1$, i.e. $F' \cap F_1 = \{0\}$. Soit $y \in F' \cap F_1$. $y = \sum_{i=0}^{d-1} a_i u^i(x)$ et $\forall k=0, \dots, d-1$, $(u^k \circ \varphi)(y) = 0$, i.e. $\varphi(u^k(y)) = 0$. Pour $k=0$, $\varphi(y) = 0$ or $\varphi(u^i(x)) = 0$ si $i=0, \dots, d-2$ ; il reste $a_{d-1} \varphi(u^{d-1}(x)) = 0 \Rightarrow a_{d-1} = 0$. $k=1 \Rightarrow a_{d-2} = 0$ et ainsi la suite. D'où $\forall i, a_i = 0$ et $F' \cap F_1 = \{0\}$.

$\dim F' < \dim E$ on peut appliquer l'hypothèse de récurrence : $\exists F_2, \dots, F_r$ sev de $F'$ stables non nuls par $u$, $P_2, \dots, P_r \in K[X]$, $P_r | P_{r-1} | \dots | P_2$, $F_i$ cyclique de polynôme minimal $P_i$. d'où $E = F_1 \oplus F_2 \oplus \dots \oplus F_r$ et il reste à vérifier que $P_2 | P_1$. C'est vrai car $P_1$ polynôme minimal de $u$.

2) Unicité de la suite $(P_1, \dots, P_r)$ sous les conditions du thm. Supposons qu'on ait $(F_1, \dots, F_r)$ et $(P_1, \dots, P_r)$ comme dans le théorème et aussi $(G_1, \dots, G_s)$ des sev stables et $(Q_1, \dots, Q_s)$ polynômes qui satisfont aussi aux conditions du thm. Montrons que $r=s$ et $\forall i=1, \dots, r$, $P_i = Q_i$. On a nécessairement $P_1 = Q_1$ car c'est le polynôme minimal.

Alors $\dim F_i = \dim G_i = d^0(\mu)$ et il y a un isomorphisme $\varphi : F_i \longrightarrow G_i$ tp $\forall x \in F_i \quad \varphi(u(x)) = u(\varphi(x))$.

$u|_{F_i}$ et $u|_{G_i}$ ont même matrice dans des bases bien choisies de $F_i$ et $G_i$.

Soit $i$ le plus petit indice tel que $P_i \neq Q_i$ ; $P_1 = Q_1, \ldots, P_{i-1} = Q_{i-1}$. $E = F_1 \oplus \cdots \oplus F_r = G_1 \oplus \cdots \oplus G_s$. Comme pour $j \geq i$, $P_j | P_i$, $P_i(u)|_{F_j} = 0$.
$$P_i(u)(E) = P_i(u)(F_1) \oplus \cdots \oplus P_i(u)(F_{i-1}) = P_i(u)(G_1) \oplus \cdots \oplus P_i(u)(G_s)$$
(On a $P_i(u)(F_k) \subset F_k$, $P_i(u)(G_k) \subset G_k$.)

Comme pour $k \leq i-1$, $P_k = Q_k$ : $F_k$ et $G_k$ sont des sous-espaces cycliques isomorphes car de même polynôme minimal, donc $u|_{F_k}$ et $u|_{G_k}$ sont semblables : $\varphi_k : F_k \to G_k$, $u|_{G_k} = \varphi_k \circ u|_{F_k} \circ \varphi_k^{-1}$. Donc $P(u|_{F_k})$ et $P(u|_{G_k})$ sont semblables. en particulier $\dim(P(u)(F_k)) = \dim(P(u)(G_k)) \cdot \forall k \leq i-1$.

en prenant les dim sur les 2 expressions de $\dim P_i(u)(E)$ on obtient $\sum_{k=i}^s \dim P_i(u)(G_k) = 0 \cdot$ i.e. $\forall k \geq i \cdot P_i(u)(G_k) = 0$. En particulier, pour $k=i \cdot P_i(u)(G_i) = 0$. mais $Q_i$ polynôme minimal de $u|_{G_i} \cdot$ donc $Q_i | P_i$. et en échangeant les rôles des 2 suites on a aussi $P_i | Q_i$ d'où $P_i = Q_i$ contradiction. d'où $r=s$ et $\forall i, P_i = Q_i$.

> [!note] Corollaire
> $u \in L(E)$ est cyclique $\iff$ il y a un unique invariant de similitudes.

Applications

1. Prop. Soit $u \in L(E)$ endomorphisme cyclique. Alors $u$ et $^t u$ sont semblables, i.e. une matrice compagnon est semblable à sa transposée.

**Preuve :** $u$ cyclique $\Rightarrow \mu_u = \chi_u$ ; $\mu_{^t u} = \mu_u = \chi_u = \chi_{^t u}$, $^t u$ est aussi cyclique et son unique invariant de similitudes est le même que celui de $u$.

> [!note] Thm.
> Soit $M \in M_n(K)$. Alors $M$ et $^t M$ sont semblables.

**Preuve :** $M$ et $^t M$ sont semblables à des matrices diagonales par blocs avec blocs matrices compagnons dont les polynômes se divisent et ceci résulte alors de la prop.

2. Prop. Soient $k \subset K$ corps, $A, B \in M_n(k)$ qui sont semblables dans $M_n(K)$. Alors elles sont semblables dans $M_n(k)$.

**Preuve :** $A, B \in M_n(k)$, elles possèdent des invariants de similitudes dans $k[X]$ et elles sont semblables ssi ils sont égaux. Or les voit dans $M_n(K)$, par unicité des invariants de similitudes leurs invariants de similitudes sont les mêmes que dans $M_n(k)$
$$\begin{pmatrix} C_{P_1} & & \\ & \ddots & \\ & & C_{P_r} \end{pmatrix} \qquad \text{avec } P_1 | P_2 | \dots | P_r$$
Donc $A$ et $B$ ont mêmes invariants dans $M_n(k)$ et sont donc semblables.

\* les invariants de similitudes d'une matrice sont des polynômes à coeff dans le plus petit corps où sont les coefficients de cette matrice.

## Exemples et commutant

**Exemples**

1. Soient $P, Q \in k[X]$ unitaires, $P \land Q = 1$. Soit $M = \begin{pmatrix} C_P & 0 \\ 0 & C_Q \end{pmatrix}$. Invariants de similitude de $M$ ? Il y a un seul : c'est $PQ$.

$M$ représente un endomorphisme cyclique. $\chi_M = \chi_{C_P} \cdot \chi_{C_Q} = PQ$.
$$\left. \begin{array}{l} \mu_M = \text{ppcm}(\mu_{C_P}, \mu_{C_Q}) = P \vee Q = PQ \end{array} \right\} \Rightarrow M \text{ cyclique}$$

Plus généralement.

> [!note] Prop
> Soient $P, Q \in k[X]$ unitaires. Les invariants de similitude de $\begin{pmatrix} C_P & 0 \\ 0 & C_Q \end{pmatrix}$ sont $(P \vee Q, P \land Q)$.

**Preuve :** On utilise l'interprétation de $C_P$ comme matrice de la multiplication par $X$ dans $k[X]/(P)$. On décompose $P$ et $Q$ en produit d'irréductibles
$$P = \prod_{i=1}^r P_i^{\alpha_i}, \quad Q = \prod_{i=1}^r P_i^{\beta_i}, \quad \alpha_i, \beta_i \geq 0.$$
$$P \land Q = \prod_{i=1}^r P_i^{\min(\alpha_i, \beta_i)}, \quad P \vee Q = \prod_{i=1}^r P_i^{\max(\alpha_i, \beta_i)}$$
On dispose du lemme des restes chinois $k[X]/(P) \simeq k[X]/P_1^{\alpha_1} \times \cdots \times k[X]/P_r^{\alpha_r}$ et on remarque que l'isomorphisme transforme la multiplication par $X$ dans le membre de gauche en la multiplication par $X$ dans le membre de droite.

$M$ est la matrice de la multiplication par $X$ dans $k[X]/(P) \times k[X]/(Q)$
$$k[X]/(P) \times k[X]/(Q) = \prod_{i=1}^r k[X]/P_i^{\alpha_i} \times \prod_{i=1}^r k[X]/P_i^{\beta_i}$$
$$= \prod_{i=1}^r k[X]/P_i^{\min(\alpha_i, \beta_i)} \times \prod_{i=1}^r k[X]/P_i^{\max(\alpha_i, \beta_i)} = k[X]/(P \land Q) \times k[X]/(P \vee Q)$$

Ces isomorphismes représentent la multiplication par $X$. Ainsi $M$ est semblable à la matrice $\begin{pmatrix} C_{P \vee Q} & 0 \\ 0 & C_{P \land Q} \end{pmatrix}$, ici $P \land Q \mid P \vee Q$. Donc $(P \land Q , P \vee Q)$ sont les invariants de similitude.

**Autres caractérisations des endomorphismes cycliques**

1. Commutant.

> [!note] Déf
> Soit $u \in L(E)$. Le commutant de $u$ est $\operatorname{Com}(u) = \{ v \in L(E), u \circ v = v \circ u \}$.

On a toujours $k[u] \subset \operatorname{Com}(u)$.

> [!note] Prop
> $u$ cyclique $\iff k[u] = \operatorname{Com}(u)$.
