---
title: 群论讲义 Cours de Groupes (Marc Rosso)
created: 2026-09-01
updated: 2026-09-02
type: entity
tags: [group-theory, algebre, cours]
sources: [Cours USTC 01-09-26.pdf]
confidence: medium
---

# Cours de Groupes — Marc Rosso (USTC, 2026-09-01)

> 手写法语讲义整理(OCR 转写)。原 PDF: `Cours USTC 01-09-26.pdf`。
> 注意:OCR 转写可能存在少量错误,数学公式以原图为准。

Marc Rosso
marc.rosso@imj-prg.fr

**Notations :** G, H groupes

---

## 1. Notions connues

### 1.1 Groupe

$$
\begin{aligned}
G \times G &\longrightarrow G \\
(g, g') &\longmapsto gg'
\end{aligned}
$$

- associative
- neutre $e \in G$
- inverse $g^{-1}$

> [!example] Exemples de groupes
> - **groupes cycliques** $\mathbb{Z}/n\mathbb{Z}$
> - **groupes de permutations**: $X$ ensemble, $\mathfrak{S}(X) = \{f : X \longrightarrow X, \text{ bijective}\}$;si $X = \{1, \dots, n\}$,$\mathfrak{S}_n = \mathfrak{S}(\{1, \dots, n\})$ **groupe symétrique**
> - **groupe linéaire**: $k$ corps,$\mathrm{GL}_n(k) = \{\text{matrices inversibles } n \times n\}$

### 1.2 Sous-groupe

> [!info] Prop
> Une intersection de sous-groupes est un sous-groupe.

### 1.3 Morphisme de groupe

$f : G \longrightarrow H$ tel que
$\forall g, g' \in G \quad f(gg') = f(g)f(g')$

- Image de $f = \mathrm{Im}\, f$
- Noyau $\mathrm{Ker}\, f = \{g \in G ; f(g) = e\}$ — sous-groupe

> [!info] Remarques
> - L'image d'un sous-groupe de $G$ est un sous-groupe de $H$.
> - L'image réciproque $f^{-1}(K)$ d'un sous-groupe $K$ de $H$ est un sous-groupe de $G$.

### 1.4 Classe à gauche modulo un sous-groupe

$H \subset G$ sous-groupe.
Classe à gauche de $a \in G$ : $aH = \{ah, h \in H\}$ — classes d'équivalence pour la relation
$$a \mathcal{R} b \iff a^{-1}b \in H \quad\text{i.e.}\quad aH = bH$$
elles forment une partition de $G$.

**Notation** $G/H = \{\text{classes à gauche}\}$;de même : classe à droite.

**Thm de Lagrange :** Si $G$ groupe fini, $H \subset G$ sous-groupe, alors $|H|$ divise $|G|$.

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

**Déf :** C'est un sous-groupe $H \subset G$ tel que :
$$\forall g \in G, \forall h \in H, \quad g h g^{-1} \in H$$
i.e. $g H g^{-1} = H$, i.e. $g H = H g$.

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
> \left( \omega(1)\ \ \omega(i) \right) &= (1\ i)
> \end{aligned}
> $$
> d'où $\omega(i) = 1$ ou $i$ pour tout $i$, donc $\omega(1) = 1$.

---

## 3. Groupe dérivé $\mathfrak{D}(G)$

**Déf :** $\mathfrak{D}(G)$ = sous-groupe de $G$ engendré par les **commutateurs**, i.e. par les éléments $xyx^{-1}y^{-1}$, $x,y \in G$.

Notation : $[x,y] = xyx^{-1}y^{-1}$.
Dire que $[x,y] = e$, c'est dire $xy = yx$. Donc
$$\mathfrak{D}(G) = \{e\} \iff G \text{ commutatif}$$

**Prop :** $\mathfrak{D}(G)$ est un sous-groupe distingué.

**Preuve :** Il suffit de voir que $\forall g \in G$, $\forall x,y \in G$ :
$$g[x,y]g^{-1} = gxyx^{-1}y^{-1}g^{-1} = (gxg^{-1})(gyg^{-1})(gxg^{-1})^{-1}(gyg^{-1})^{-1} = [gxg^{-1}, gyg^{-1}]$$

---

## 4. Groupe quotient

**Notation :** si $H \triangleleft G$ sous-groupe distingué.

### 4.1 Construction

**Thm :** Soit $H \triangleleft G$. Alors il existe sur $G/H$ une unique structure de groupe telle que l'application $\pi: G \to G/H$, $g \mapsto gH$ soit un morphisme de groupes, i.e. telle que
$$(gH)(g'H) = gg'H$$

(Il faut s'assurer que cette formule a un sens, i.e. : si $g_1 \in gH$, $g'_1 \in g'H$, alors $g_1g'_1 \in gg'H$.)

Ainsi : un sous-groupe distingué est toujours le noyau d'un morphisme : $H = \ker \pi$, $\pi$ surjectif, et $eH = H$ est le neutre de $G/H$.

### 4.2 Théorème de factorisation

Soit $G$ groupe, $H \trianglelefteq G$, $K$ groupe et $f : G \to K$ un morphisme :

$$
\begin{CD}
G @>f>> K \\
@V\pi VV @| \\
G/H @>\overline{F}>> K
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

**Corollaire.** On a un isomorphisme de groupes
$$G/\mathrm{Ker}\, f \longrightarrow \mathrm{Im}\, f$$
Ainsi, si $G$ fini : $|G| = |\mathrm{Im}\, f| \cdot |\mathrm{Ker}\, f|$ (car $|G/H| = \frac{|G|}{|H|}$).

### 4.3 Propriété universelle du groupe dérivé

**Thm :** Soit $G$ groupe, $A$ groupe commutatif et $f : G \longrightarrow A$ un morphisme. Alors $f$ se factorise à travers $G/\mathfrak{D}(G)$ :

$$
\begin{CD}
G @>f>> A \\
@V\pi VV @| \\
G/\mathfrak{D}(G) @>\bar{f}>> A
\end{CD}
$$

> [!info] Rem
> $G/\mathfrak{D}(G)$ est commutatif : $\pi([x,y]) = e$, et
> $$\pi([x,y]^g) = [\pi(x), \pi(y)] = e$$

Ce que dit le thm : $G/\mathfrak{D}(G)$ est le **plus grand quotient commutatif** de $G$, i.e. si $H \triangleleft G$ avec $G/H$ commutatif, alors il existe un morphisme **surjectif** $G/\mathfrak{D}(G) \longrightarrow G/H$.

En effet :
$$
\begin{CD}
G @>\pi_1>> G/H \\
@V\pi VV @AA\bar{\pi}_1A \\
G/\mathfrak{D}(G) @= G/\mathfrak{D}(G)
\end{CD}
$$
$\bar{\pi}_1$ est donné par le thm ; il est surjectif car $\pi_1$ est surjectif.

**Preuve du thm :** D'après le thm de factorisation, il faut voir que $\mathfrak{D}(G) \subset \ker f$, i.e. que $\forall x,y \in G$, $f([x,y]) = e$. Or $[f(x), f(y)] = e$ car $A$ est commutatif.

### 4.4 Sous-groupes d'un groupe quotient

Soit $H \triangleleft G$, $\pi: G \longrightarrow G/H$.

**Thm :** Il y a une bijection entre :
1. l'ensemble des sous-groupes de $G/H$ (respectivement sous-groupes distingués de $G/H$) ;
2. l'ensemble des sous-groupes de $G$ contenant $H$ (respectivement sous-groupes distingués de $G$ contenant $H$).

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
> **Corollaire** : $\pi(M) = MH/H$.

### 4.5 Deuxième théorème d'isomorphisme

**Théorème :** Soit $H \trianglelefteq G$ et $M \subset G$ sous-groupe. Alors $M \cap H \trianglelefteq M$, et on a un isomorphisme
$$\frac{M}{M \cap H} \cong \frac{MH}{H}$$

**Preuve :** On dispose du morphisme $\pi: G \to G/H$. On le restreint à $M$ : $\pi|_M = \pi_1 : M \to G/H$ morphisme.
- Son image : $\pi(M) = \frac{MH}{H}$
- Son noyau : $\mathrm{Ker}(\pi_1) = M \cap \mathrm{Ker}\,\pi = M \cap H$

Par le thm d'isomorphisme :
$$\frac{M}{\mathrm{Ker}(\pi_1)} \cong \mathrm{Im}(\pi_1) \quad\Longrightarrow\quad \frac{M}{M \cap H} \cong \frac{MH}{H}$$

> [!info] Rem
> Soient $M$ et $H$ sous-groupes de $G$. Alors $MH = \{mh, m \in M, h \in H\}$ est un sous-groupe $\iff MH = HM$. Ceci est le cas si $M$ ou $H$ est distingué.

> [!warning] MISE EN GARDE
> Soit $G$ groupe, $H \trianglelefteq G$ et $K \trianglelefteq H$.
> Il n'est **pas vrai** en général que $K \trianglelefteq G$ — la normalité n'est pas transitive!

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

**Thm :** $G$ groupe, $H \triangleleft G$, $K \triangleleft H$ et $K \triangleleft G$. Alors $H/K \triangleleft G/K$, et :
$$\frac{G/K}{H/K} \simeq G/H$$

**Preuve :** $H/K \triangleleft G/K$ : théorème sur les sous-groupes d'un quotient.
On considère les morphismes de passage au quotient :
$$G \xrightarrow{\pi_1} G/K \xrightarrow{\pi_2} \frac{G/K}{H/K}$$
$\varphi = \pi_2 \circ \pi_1$ est surjectif. On a $\mathrm{Ker}\, \varphi = H$ ; ainsi $G/H \simeq \mathrm{Im}\, \varphi = \frac{G/K}{H/K}$.

Vérifions $\mathrm{Ker}\, \varphi = H$. Soit $g \in \ker \varphi$ :
$$\pi_2(\pi_1(g)) = \text{neutre} \implies \pi_1(g) \in \mathrm{Ker}\, \pi_2 = H/K \implies gK \in H/K$$
$\exists h \in H$ tel que $\pi_1(g) = gK = \pi_1(h) = hK$, donc $g \in hK \subset H$, d'où $\mathrm{Ker}\, \varphi \subset H$.
On a aussi $H \subset \ker \varphi$ car $\pi_1(H) = H/K = \ker \pi_2$.

### 4.7 Groupe simple

**Déf :** Un groupe $G$ est **simple** si ses seuls sous-groupes distingués sont $\{e\}$ et $G$.

**Intérêt :** Si $G$ est simple et $f : G \to K$ un morphisme non trivial (i.e. $\mathrm{Im}\, f \neq \{e\}$), alors $f$ est injective.

**Prop :** Soit $H \subset G$ sous-groupe d'indice 2, i.e. $|G/H| = 2$. Alors $H \trianglelefteq G$.

**Preuve :** Soit $g \in G$, $g \notin H$ ; alors $gH \neq H$, donc $G/H = \{H, gH\}$ et
$$G = H \sqcup gH$$
($\sqcup$ : réunion disjointe, i.e. réunion de 2 parties d'intersection $\emptyset$).
De même avec les classes à droite : $G = H \sqcup Hg$, d'où $gH = Hg$.
Ceci vaut $\forall g \in G$, d'où $H \trianglelefteq G$.

---

## 5. Action d'un groupe sur un ensemble

$X$ ensemble, $\mathcal{G}(X) = \{ f : X \to X \mid f \text{ bijection} \}$.

**Déf :** On dit qu'un groupe $G$ **opère** (ou **agit**) sur $X$ si on a un morphisme de groupes
$$\varphi : G \to \mathcal{G}(X)$$
notation : $\varphi(g) : x \mapsto g \cdot x$.
Autrement dit : on a une application $G \times X \to X$, $(g, x) \mapsto g \cdot x$, telle que :
1. $\forall g, g' \in G, \forall x \in X \quad g \cdot (g' \cdot x) = (gg') \cdot x$
2. $\forall x \in X \quad e \cdot x = x$

**Déf :**
1. L'action est **fidèle** si $\varphi$ est injective.
2. L'action est **transitive** si : $\forall x, y \in X, \exists g \in G$ tel que $g \cdot x = y$.

**Déf :** Soit $G$ agissant sur $X$ et $x \in X$. L'**orbite** de $x$ :
$$O(x) = \{ g \cdot x ,\ g \in G \} = G \cdot x$$

> [!info] Rem
> On a sur $X$ une relation d'équivalence : pour $x, y \in X$,
> $$x \mathcal{R} y \iff \exists g \in G \;/\; y = g \cdot x$$
> les orbites sont les classes d'équivalence. Ainsi : les orbites distinctes sont disjointes, et elles forment une partition de $X$.
> Une action est transitive $\iff$ il y a une seule orbite.

**Déf :** Soit $x \in X$. Le **stabilisateur** de $x$ :
$$\mathrm{Stab}(x) = \{ g \in G ; g \cdot x = x \}$$
(aussi noté $G_x$). C'est un sous-groupe de $G$.

### 5.1 Description de l'orbite en terme du stabilisateur

**Prop :** Soit $x \in X$. L'application
$$
\begin{aligned}
G / \mathrm{Stab}(x) &\longrightarrow \mathcal{O}(x) \\
g \cdot \mathrm{Stab}(x) &\longmapsto g \cdot x
\end{aligned}
$$
est bijective.

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
  &\qquad\qquad g \operatorname{Stab}(x) = g' \operatorname{Stab}(x)
  \end{aligned}
  $$

<u>Corollaire</u> : Si $G$ est fini, le cardinal de chaque orbite divise $\operatorname{Card}(G)$ :
$$|O(x)| \mid |G|$$
