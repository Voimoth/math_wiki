---
title: 群论讲义 Cours de Groupes (Marc Rosso).
created: 2026-09-01
updated: 2026-09-02
type: entity.
tags: [group-theory, algebre, cours].
sources: [Cours USTC 01-09-26.pdf].
confidence: medium.
---

# Cours de Groupes — Marc Rosso (USTC, 2026-09-01)

> 手写法语讲义整理(OCR 转写)。原 PDF: `Cours USTC 01-09-26.pdf`。
> 注意:OCR 转写可能存在少量错误,数学公式以原图为准。

Marc Rosso.
marc.rosso@imj-prg.fr.

**Notations :** G, H groupes.

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
- neutre $e \in G$
- inverse $g^{-1}$

> [!example] Exemples de groupes.
> - **groupes cycliques** $\mathbb{Z}/n\mathbb{Z}$
> - **groupes de permutations**: $X$ ensemble, $\mathfrak{S}(X) = \{f : X \longrightarrow X, \text{ bijective}\}$;si $X = \{1, \dots, n\}$,$\mathfrak{S}_n = \mathfrak{S}(\{1, \dots, n\})$ **groupe symétrique**
> - **groupe linéaire**: $k$ corps,$\mathrm{GL}_n(k) = \{\text{matrices inversibles } n \times n\}$

### 1.2 Sous-groupe

> [!info] Prop.
> Une intersection de sous-groupes est un sous-groupe.

### 1.3 Morphisme de groupe

$f : G \longrightarrow H$ tel que.
$\forall g, g' \in G \quad f(gg') = f(g)f(g')$

- Image de $f = \mathrm{Im}\, f$
- Noyau $\mathrm{Ker}\, f = \{g \in G ; f(g) = e\}$ — sous-groupe.

> [!info] Remarques.
> - L'image d'un sous-groupe de $G$ est un sous-groupe de $H$.
> - L'image réciproque $f^{-1}(K)$ d'un sous-groupe $K$ de $H$ est un sous-groupe de $G$.

### 1.4 Classe à gauche modulo un sous-groupe

$H \subset G$ sous-groupe.
Classe à gauche de $a \in G$ : $aH = \{ah, h \in H\}$ — classes d'équivalence pour la relation.
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

> [!example] Exemples.
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

**Déf :** $\mathfrak{D}(G)$ = sous-groupe de $G$ engendré par les **commutateurs**, i.e. par les éléments $xyx^{-1}y^{-1}$, $x,y \in G$.

Notation : $[x,y] = xyx^{-1}y^{-1}$.
Dire que $[x,y] = e$, c'est dire $xy = yx$. Donc.
$$\mathfrak{D}(G) = \{e\} \iff G \text{ commutatif}$$

**Prop :** $\mathfrak{D}(G)$ est un sous-groupe distingué.

**Preuve :** Il suffit de voir que $\forall g \in G$, $\forall x,y \in G$ :
$$g[x,y]g^{-1} = gxyx^{-1}y^{-1}g^{-1} = (gxg^{-1})(gyg^{-1})(gxg^{-1})^{-1}(gyg^{-1})^{-1} = [gxg^{-1}, gyg^{-1}]$$

---

## 4. Groupe quotient

**Notation :** si $H \triangleleft G$ sous-groupe distingué.

### 4.1 Construction

**Thm :** Soit $H \triangleleft G$. Alors il existe sur $G/H$ une unique structure de groupe telle que l'application $\pi: G \to G/H$, $g \mapsto gH$ soit un morphisme de groupes, i.e. telle que.
$$(gH)(g'H) = gg'H$$

(Il faut s'assurer que cette formule a un sens, i.e. : si $g_1 \in gH$, $g'_1 \in g'H$, alors $g_1g'_1 \in gg'H$.).

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
  Mais $gH = g'H \Rightarrow \exists h \in H$ tel que $g' = gh$, donc.
  $$f(g') = f(gh) = f(g)f(h) = f(g) \qquad (H \subset \ker f)$$
  $\bar{f}$ est bien un morphisme de groupes, i.e.
  $$\bar{f}(gH \cdot g'H) = \bar{f}(gHg'H) = \bar{f}(gg'H) = f(gg') = f(g)f(g') = \bar{f}(gH) \cdot \bar{f}(g'H)$$

**Corollaire.** On a un isomorphisme de groupes.
$$G/\mathrm{Ker}\, f \longrightarrow \mathrm{Im}\, f$$
Ainsi, si $G$ fini : $|G| = |\mathrm{Im}\, f| \cdot |\mathrm{Ker}\, f|$ (car $|G/H| = \frac{|G|}{|H|}$).

### 4.3 Propriété universelle du groupe dérivé

**Thm :** Soit $G$ groupe, $A$ groupe commutatif et $f : G \longrightarrow A$ un morphisme. Alors $f$ se factorise à travers $G/\mathfrak{D}(G)$ :

$$
\begin{CD}
G @>f>> A \\
@V\pi VV @| \\
G/\mathfrak{D}(G) @>\bar{f}>> A.
\end{CD}
$$

> [!info] Rem.
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

> [!info] Remarque importante.
> On a vu : si $L \subset G$ sous-groupe contenant $H$, alors $\pi(L) = L/H$.
> Cependant, si $M \subset G$ est un sous-groupe **quelconque**, $\pi(M) \subset G/H$ est un sous-groupe ; le sous-groupe de $G$ contenant $H$ qui correspond à $\pi(M)$ est $\pi^{-1}(\pi(M))$, qui est le sous-groupe de $G$ engendré par $M$ et $H$ :
> $$\pi^{-1}(\pi(M)) = MH = HM \quad (*)$$
>
> En effet :
> $$x \in \pi^{-1}(\pi(M)) \iff \exists m \in M,\ \pi(x) = \pi(m) \iff \exists m \in M,\ \exists h \in H,\ x = mh \in MH$$
>
> **Corollaire :** $\pi(M) = MH/H$.

### 4.5 Deuxième théorème d'isomorphisme

**Théorème :** Soit $H \trianglelefteq G$ et $M \subset G$ sous-groupe. Alors $M \cap H \trianglelefteq M$, et on a un isomorphisme.
$$\frac{M}{M \cap H} \cong \frac{MH}{H}$$

**Preuve :** On dispose du morphisme $\pi: G \to G/H$. On le restreint à $M$ : $\pi|_M = \pi_1 : M \to G/H$ morphisme.
- Son image : $\pi(M) = \frac{MH}{H}$
- Son noyau : $\mathrm{Ker}(\pi_1) = M \cap \mathrm{Ker}\,\pi = M \cap H$

Par le thm d'isomorphisme :
$$\frac{M}{\mathrm{Ker}(\pi_1)} \cong \mathrm{Im}(\pi_1) \quad\Longrightarrow\quad \frac{M}{M \cap H} \cong \frac{MH}{H}$$

> [!info] Rem.
> Soient $M$ et $H$ sous-groupes de $G$. Alors $MH = \{mh, m \in M, h \in H\}$ est un sous-groupe $\iff MH = HM$. Ceci est le cas si $M$ ou $H$ est distingué.

> [!warning] MISE EN GARDE.
> Soit $G$ groupe, $H \trianglelefteq G$ et $K \trianglelefteq H$.
> Il n'est **pas vrai** en général que $K \trianglelefteq G$ — la normalité n'est pas transitive!

> [!example] Contre-exemple.
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

**Preuve :** Soit $g \in G$, $g \notin H$ ; alors $gH \neq H$, donc $G/H = \{H, gH\}$ et.
$$G = H \sqcup gH$$
($\sqcup$ : réunion disjointe, i.e. réunion de 2 parties d'intersection $\emptyset$).
De même avec les classes à droite : $G = H \sqcup Hg$, d'où $gH = Hg$.
Ceci vaut $\forall g \in G$, d'où $H \trianglelefteq G$.

---

## 5. Action d'un groupe sur un ensemble

$X$ ensemble, $\mathcal{G}(X) = \{ f : X \to X \mid f \text{ bijection} \}$.

**Déf :** On dit qu'un groupe $G$ **opère** (ou **agit**) sur $X$ si on a un morphisme de groupes.
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

> [!info] Rem.
> On a sur $X$ une relation d'équivalence : pour $x, y \in X$,
> $$x \mathcal{R} y \iff \exists g \in G \;/\; y = g \cdot x$$
> les orbites sont les classes d'équivalence. Ainsi : les orbites distinctes sont disjointes, et elles forment une partition de $X$.
> Une action est transitive $\iff$ il y a une seule orbite.

**Déf :** Soit $x \in X$. Le **stabilisateur** de $x$ :
$$\mathrm{Stab}(x) = \{ g \in G ; g \cdot x = x \}$$
(aussi noté $G_x$). C'est un sous-groupe de $G$.

### 5.1 Description de l'orbite en terme du stabilisateur

**Prop :** Soit $x \in X$. L'application.
$$
\begin{aligned}
G / \mathrm{Stab}(x) &\longrightarrow \mathcal{O}(x) \\
g \cdot \mathrm{Stab}(x) &\longmapsto g \cdot x.
\end{aligned}
$$
est bijective.

**Preuve :**
- Bien définie : si $g \cdot \mathrm{Stab}(x) = g' \cdot \mathrm{Stab}(x)$, alors $\exists h \in \mathrm{Stab}(x)$ tel que $g = g' h$, donc.
  $$g \cdot x = g' \cdot (h \cdot x) = g' \cdot x$$
- Surjective : par définition de l'orbite.
- Injective : si.
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

**Exemples**

1. Action de $G$ sur lui-même par translation à gauche :
   pour $g \in G$, $\varphi(g)\colon \begin{array}{rcl} G & \longrightarrow & G \\ a & \longmapsto & ga \end{array}$

   $\varphi$ est une application $\psi\colon \begin{array}{rcl} G & \longrightarrow & \mathfrak{S}(G) \\ g & \longmapsto & \varphi(g) \end{array}$

   morphisme de groupes (associativité), injectif.

   **Corollaire :** Théorème de Cayley.
   Soit $G$ groupe fini, $|G|=n$. Alors $G$ est isomorphe à un sous-groupe du groupe symétrique $\mathfrak{S}_n$

2. Soit $H$ sous-groupe de $G$. Alors $G$ agit par translations à gauche sur $G/H$

   Soit $g \in G$, soit $\varphi(g)\colon \begin{array}{rcl} G/H & \longrightarrow & G/H \\ aH & \longmapsto & gaH \end{array}$

   **Déf :** $G$ groupe, $X, Y$ ensembles sur lesquels $G$ agit. On dit qu'une application $f\colon X \longrightarrow Y$ est $G$-équivariante si :

   $$\forall x \in X,\; \forall g \in G \quad f(g \cdot x) = g \cdot f(x)$$

   $\uparrow$ action de $G$ sur $X$  
   $\qquad\qquad\;\;$ action de $G$ sur $Y$

   i.e. « $f$ transforme l'action de $G$ sur $X$ en l'action de $G$ sur $Y$ ».

**Prop :** Soit $G$ agissant sur $X$, $x \in X$. Alors la bijection $\psi: \underset{\text{Stab}(x)}{G/} \longrightarrow O(x)$ est $G$ équivariante.

Ainsi : pour étudier l'action de $G$ sur une orbite, on se ramène à étudier l'action par translation à gauche sur $\underset{\text{Stab}(x)}{G/}$

Cas particulier : action transitive.

En effet : $\forall g \in G$, $a \in G \quad \psi(a.\text{Stab}(a)) = a.x$

$$\begin{aligned}
\psi(g.(a\text{Stab}(a))) &= \psi((ga).\text{Stab}(a)) \\
&= (ga).x = g.(a.x) \\
&= g.\psi(a.\text{Stab}(a)).
\end{aligned}$$

---

**Prop :** Si $G$ agit sur $X$ et $x \in X$. Alors $$\text{Stab}(g.x) = g.\text{Stab}(x)g^{-1}$$

En effet : $h.(g.x) = g.x \Longleftrightarrow (g^{-1}hg).x = x \Longleftrightarrow g^{-1}hg \in \text{Stab}(x)$

Cas particulier : Pour l'action de $G$ dans $G/H$

$$\text{Stab}(aH) = aHa^{-1}, \quad \text{car } \text{Stab}(H) = H$$

**Rem :** L'action par translation de $G$ sur $G/H$ n'est pas fidèle en général :
$$\operatorname{Ker}\varphi=\bigcap_{a\in G}aHa^{-1}$$

**Prop :** Soit $G$ groupe infini qui possède un sous-groupe $H$ d'indice fini $(|G/H|<+\infty)$.
Alors $G$ n'est pas un groupe simple.

**Preuve :** Considérons l'opération de $G$ sur $G/H$
$$\varphi\colon G\longrightarrow\mathfrak{S}(G/H).$$
Mais $\mathfrak{S}(G/H)$ est un groupe fini, donc $\varphi$ ne peut pas être injective. Comme $H\neq G$, $\operatorname{Ker}\varphi\neq G$.
D'où $\operatorname{Ker}\varphi\triangleleft G$ avec $\operatorname{Ker}\varphi\neq\{e\}$ et $\neq G$.

3. Action de $G$ sur lui-même par conjugaison  .
$\forall g\in G$, on pose $\Psi(g)\colon\begin{array}{rcl}G&\longrightarrow&G\\ a&\longmapsto&gag^{-1}\end{array}$  
$\Psi(g)=$ automorphisme intérieur défini par $g$

**Terminologie** Ici, $\operatorname{Stab}(a)$ est appelé le centralisateur de $a$, aussi noté $Z(a)$

# Actions de groupes et résultats de classification

## 1. Classes d'équivalence de matrices

$k$ corps $\quad M_{n,p}(k)=\begin{cases} \text{matrices } n \text{ lignes, } p \text{ colonnes} \\ \text{à coefficients dans } k \end{cases}$

Soit $G=GL_n(k)\times GL_p(k)$ produit.

$G$ agit sur $M_{n,p}(k)$
$$\begin{array}{ccc}
G\times M_{n,p}(k) & \longrightarrow & M_{n,p}(k) \\
((g_1,g_2),m) & \longmapsto & g_1mg_2^{-1}
\end{array}$$

les orbites de cette action sont les classes d'équivalence de matrices.

**Thm :** 2 matrices sont équivalentes $\Leftrightarrow$ même rang.

Pour $r \leq n,p$ représentant $I_r=\begin{pmatrix} I_r & 0 \\ 0 & 0 \end{pmatrix}$

## 2. Classes de similitude de matrices carrées

## 3. Réduction des formes quadratiques

Action du groupe $GL_n(k)$ sur l'espace des matrices symétriques $S_n(k)\subset M_n(k)$
$$\begin{array}{ccc}
GL_n(k)\times S_n(k) & \longrightarrow & S_n(k) \\
(P,Q) & \longmapsto & P\,Q\,{}^tP.
\end{array}$$

**Points Fixes pour une action de groupe**

$G$ agit sur $X$. On note $\displaystyle X^G = \{\text{points fixes}\} = \{x \in X; \forall g \in G, g\cdot x = x\}$

$$x \in X^G \Longleftrightarrow O(x) = \{x\}$$

---

**Thm :** *Equation aux classes*.

Soit $G$ agissant sur $X$. Alors.
$$X = X^G \sqcup \bigsqcup_{|O(\alpha_i)| \geq 2} O(\alpha_i)$$
réunion disjointe de $X^G$ et des orbites non réduites à un point.

---

## Application

**Déf :** Soit $k$ nombre premier  .
On appelle **$k$-groupe** un groupe dont le cardinal est une puissance de $k$
$$|G| = k^n,\ n \geq 1.$$

**Prop :** Soit $G$ un $k$-groupe agissant sur $X$ fini.  
Alors $\displaystyle |X| \equiv |X^G| \pmod{k}$

*Preuve :* équation aux classes, et le fait que $|O(\alpha_i)| \mid |G|$. Comme $|G| = k^n$, si $|O(\alpha_i)| \geq 2$

alors $|O(G)|=p^k$ avec $k\geqslant 1$, donc $p\vert|O(G)|$

si $|O(G)|\geqslant 2$ ?

$$|X|=|X^G|+\sum_{|O(G)|\geqslant 2}|O(\omega)|$$

on a $|X|\equiv |X^G| \bmod p$.

$\underline{\text{Thm}}$ Si $G$ est un $p$-groupe, alors le centre de $G$ est $\neq \{e\}$; i.e $Z(G)$ non trivial.

$\underline{\text{Preuve}}$ On considère l'action de $G$ sur lui-même par conjugaison. On a $Z(G)=\{g\in G\mid \forall x\in G,\; xgx^{-1}=g\}$

D'après la Prop., $|Z(G)|\equiv |G| \bmod p$

Mais $|G|\equiv 0 \bmod p$. Mais $|Z(G)|\geqslant 1$ car $e\in Z(G)$. Donc $p\mid |Z(G)|$, donc $|Z(G)|\geqslant k$.

---

$\underline{\text{Thm}}$: Formule de Burnside.

Soit $G$ groupe fini, agissant sur $X$ fini.

Pour $g\in G$, soit $\mathrm{Fix}(g)=\{x\in X;\; g\cdot x=x\}$

ensemble des points fixes de $g$

Alors le nombre $N$ d'orbites de $X$ est :

$$N=\frac{1}{|G|}\sum_{g\in G}|\mathrm{Fix}(g)|$$

**Preuve :**

On a : $x \in \mathrm{Fix}(g) \Leftrightarrow g \cdot x = x \Leftrightarrow g \in \mathrm{Stab}(x)$

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

**Prop :** Soit $G$ groupe fini, agissant sur $X$ fini, $|X|\geq 2$ transitivement. Alors il y a au moins un élément $g\in G$ sans point fixe.

**Preuve :** Ici $N=1$
$$\begin{aligned}
1 &= \frac{1}{|G|}\sum_{g\in G}|Fix(g)| \\
&= \frac{1}{|G|}\left(|X|+\sum_{g\neq e}|Fix(g)|\right).
\end{aligned}$$

Ici $|X|\geq 2$ et si on avait $\forall g\in G$, $|Fix(g)|\geq 1$ on aurait une contradiction.

**Application :** Sous-groupes finis du groupe des rotations de l'espace euclidien $\mathbb{R}^3$, $SO(3)$

**Thm :** Soit $G\subset SO(3)$ sous-groupe fini. Alors $G$ est isomorphe à l'un des groupes suivants :
1) groupe cyclique $\mathbb{Z}/n\mathbb{Z}$ , $n\geq 2$
2) groupe diédral $D_{2n}$ (groupe des isométries du polygone régulier à $n$ côtés).
3) $\mathcal{A}_4$
4) $\mathcal{S}_4$
5) $\mathcal{A}_5$

Preuve :

Si $r \in SO(3)$, $r \neq \text{Id}$. On dispose de l'axe de $r$, droite vectorielle des points fixes. Dans une base orthonormée convenable, $r$ a pour matrice.
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & \sin\theta \\ 0 & -\sin\theta & \cos\theta \end{pmatrix}$$

Si $g \in G$, $g \neq e$ : son axe intersecte la sphère $S^2$ de rayon 1 en 2 points $p$ et $-p$, appelés les pôles de $G$

![[球面直径与极点.svg|附件/球面直径与极点.svg]]

Soit $X =$ ensemble des pôles des éléments de $G \neq \{e\}$

Alors $G$ agit sur $X$, car il agit sur lui-même par conjugaison.

Soit $g \in G$. Soit $p \in X$, pôle de $r \in G$. Soit $g \in G$. Alors $grg^{-1} \in G$ et $g(p)$ (pour l'action habituelle de $SO(3)$ sur $\mathbb{R}^3$) est un pôle de $grg^{-1}$. Ainsi $g(p) \in X$

On a ainsi, par restriction à $X$, une action de $G$ sur $X$.

Soit $N$ le nombre d'orbites.

**Prop :** On a $N=2$ ou $N=3$

**Preuve :** Burnside $N=\frac{1}{|G|}\sum\limits_{g \in G} |\text{Fix}(g)|$

Si $g=e=\text{Id}$, $\text{Fix}(g)=X$

Si $g \neq \text{Id}$, $\text{Fix}(g)=\{\text{pôles de }g\}$, $|\text{Fix}(g)|=2$

$$N=\frac{1}{|G|}\left(|X|+2(|G|-1)\right) \quad (\star)$$

On décompose $X$ en réunion disjointe d'orbites,
on choisit un élément $x_i$ dans chaque orbite $O_i$

Soit $Gx_i = \text{Stab}(x_i)$ $\qquad |O_i| = \frac{|G|}{|Gx_i|}$

$$\begin{aligned}
N &= \frac{1}{|G|}\left(\sum_{i=1}^{m}|O_i|+2(|G|-1)\right) \\
&= \sum_{i=1}^{N}\frac{1}{|Gx_i|} + 2\left(1-\frac{1}{|G|}\right) \\
N &= \sum_{i=1}^{N}\frac{1}{|Gx_i|} \quad (\star\star) \sum_{i=1}^{N}\left(1-\frac{1}{|Gx_i|}\right) = 2\left(1-\frac{1}{|G|}\right).
\end{aligned}$$

**Rem :** $|G| \geq 2 \qquad \frac{1}{2} \leq 1-\frac{1}{|G|} < 1$

De même $Gx_i$ contient $\text{Id}$, et aussi une rotation $\neq \text{Id}$ dont l'axe est la droite $Rx_i$.
$|Gx_i| \geq 2$

$$
\begin{aligned}
&\frac{1}{2} \leq 1-\frac{1}{\left|G_{x_{i}}\right|}<1 \\
&\frac{N}{2} \leq \sum_{i=1}^{N}\left(1-\frac{1}{\left|G_{i}\right|}\right)=2\left(1-\frac{1}{|G|}\right)<2.
\end{aligned}
$$

Ainsi $N<4$

De plus, $N>1$ via $(\star)$, car si $N=1$ on aurait $|X|+|G|=2$ d'où $|G|=|X|=1$

**Conclusion** $N \in\{2,3\}$

**Remarque** : les stabilisateurs $G_{x_{i}}$ sont des *groupes cycliques* : les éléments de $G_{x_{i}}$ sont des rotations de même axe $\mathbb{R} \alpha_{i}$. Ainsi $G_{x_{i}}$ est en bijection avec un sous-groupe fini du groupe des rotations du plan $(\mathbb{R} \alpha_{i})^{\perp}$.

---

**1. Étude du cas $N=2$**

Posons $e_{i}=\left|G x_{i}\right|$

$$
(\star \star) \quad \frac{1}{e_{1}}+\frac{1}{e_{2}}=\frac{2}{|G|} \quad \text { avec } e_{1}, e_{2} \leq|G|.
$$

nécessairement $e_{1}=e_{2}=|G|$, i.e $G_{x_{1}}=G_{x_{2}}=G$

Donc $G$ cyclique $x_{2}=-x_{1}, \quad X=\left\{x_{1} ; x_{2}\right\}$

**2. Étude du cas $N=3$**

on suppose $\quad e_{1} \leq e_{2} \leq e_{3}$

$$\begin{aligned}
&2-\frac{2}{|G|}=3-\frac{1}{e_{1}}-\frac{1}{e_{2}}-\frac{1}{e_{3}} \\
&\boxed{1+\frac{2}{|G|}=\frac{1}{e_{1}}+\frac{1}{e_{2}}+\frac{1}{e_{3}}} \quad>1.
\end{aligned}$$

Nécessairement $e_{1}=2$

$$\frac{1}{2}+\frac{2}{|G|}=\frac{1}{e_{2}}+\frac{1}{e_{3}} \quad>\frac{1}{2}$$

nécessairement $e_{2}\leq 3$ (sinon $e_{3}\geq e_{2}\geq 4$

$$\frac{1}{e_{2}}+\frac{1}{e_{3}}\leq\frac{1}{2}$$

$\boxed{\text{où } e_{2}=2 \text{ ou } e_{2}=3}$

---

**a)** Cas où $e_{1}=2$ et $e_{2}=2$

$$\begin{aligned}
&\frac{2}{|G|}=\frac{1}{e_{3}} \qquad |G|=2e_{3} \quad\text{. Bosons } m=e_{3} \\
&|D_{1}|=\frac{|G|}{e_{1}}=m=|D_{2}| \\
&|D_{3}|=2.
\end{aligned}$$

Rem l'action de $G$ sur $X$ est la restruction à $X$  
d'une action linéaire $\quad g(-x)=-g(x)$

$$\forall x \quad G_{x}=G_{-x}, \text{ d'où } |\mathcal{O}(x)|=|\mathcal{O}(-x)|$$

Supposons $m\geq 3:$ Comment étudier $O_{3}$?

$x \in O_3$, $|O(x)|=|O(-x)|=2$. Comme il y a.
une seule orbite de cardinal 2 $O_3=\{x,-x\}$
$G_{\mathbb{Z}_3}$ groupe cyclique d'ordre $n$, d'axe $\mathbb{R}z_3$
Soit $y \in O_1$, $|Gy|=2$, $Gy=\{\text{Id}, r\}$ où $r$ est.
une rotation d'angle $\pi$. $Gy$ agit dans l'orbite.
$O_3=O(z_3)$. Comme $x$ et $y$ non colinéaires, $r(x_3)\neq x_3$
donne $r(x_3)=-z_3$. Donc $z_3 \perp y$ ($x=z_3$).
Considérons une base orthonormée de $\mathbb{R}^3$
$(x, y_{13})$. Dans cette base, les éléments de $G$
ont des matrices de la forme :
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & -\sin\theta \\ 0 & \sin\theta & \cos\theta \end{pmatrix} \text{ et } Gy=\left\{\text{Id}, \begin{pmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}\right\}$$
les restrictions au plan $(\mathbb{R}x)^\perp$ sont :
• Pour $G_x$ : un groupe cyclique de rotations.
planes, $\simeq \mathbb{Z}/n\mathbb{Z}$
• Pour $G_y$ : $\left\{\text{Id}, \text{symétrie orthogonale par}\right.$
$\left.\text{rapport à } \mathbb{R}xy\right\}$

De plus $G_x \cap G_y=\{\text{Id}\}$
$G_x$ est d'indice 2 dans $G$, donc il est.
distingué dans $G$. On dispose du groupe.

$$
\begin{aligned}
& G_x \cdot G_y = G_y \cdot G_x, \text{ de cardinal } |G_x||G_y| = 2n = |G| \\
& \text{Ainsi } G = G_x G_y \\
& \text{ isomorphe au groupe diédral } D_{2n} \\
& (\text{en considérant les restrictions à } (\mathbb{R}x)^\perp).
\end{aligned}
$$

$\underline{\text{Rem}}$ Si $n=2 \quad |G|=4 \quad$ A priori $G = \mathbb{Z}/4\mathbb{Z}$ ou $\underline{D_4}$

---

b) $\underline{\text{Cas } e_1=2, e_2=3}$

Nécessairement $e_3 \in \{3, 4, 5\}$

On a en effet: $\displaystyle \frac{1}{e_3} = \frac{1}{6} + \frac{2}{|G|} \Rightarrow 3 \leq e_3 < 6$

$\underline{\text{Si } e_1=2, e_2=3, e_3=3}: \quad |G|=12$

On trouve $G \simeq A_4$

$\underline{\text{Si } e_1=2, e_2=3, e_3=4} \quad |G|=24$

On trouve $G \simeq S_4$

$\underline{\text{Si } e_1=2, e_2=3, e_3=5} \quad |G|=60$

On trouve $G \simeq A_5$ Car $A_5$ est l'unique groupe simple d'ordre 60.

# Théorèmes de Sylow

**Motivation** Thm de Lagrange: si $H \subset G$ sous groupe alors $|H| \mid |G|$

**Question:** Soit $d \mid |G|$, existe-t-il un sous-groupe de $G$ de cardinal $d$?

$\underline{\text{Non!}}$

$\underline{\text{Exercice:}}$ $G = \mathbb{Z}/4\mathbb{Z}$, $|G|=12$

$G$ ne possède pas de sous-groupe d'ordre 6.

## Situation favorable

Soit $k$ nombre premier, $G$ $k$-groupe, $|G|=p^n$

**Prop :** $\forall i \in \{1,\ldots,n-1\}$ $G$ possède un sous-groupe d'ordre $p^i$

**Preuve :** Récurrence sur $m$

$n \geqslant 2$, le centre $Z(G)$ est non trivial.

Soit $g \in Z(G), g \neq e$. L'ordre de $g$ est $p^\alpha$ avec $1 \leqslant \alpha \leqslant n$. Si $\alpha = m$, $G$ cyclique OK.

Sinon $g^{p^{\alpha-1}}$ est d'ordre $p$, et le sous-groupe $H$ qu'il engendre est cyclique d'ordre $p$.

On a: $H \lhd G$ car $g \in Z(G)$

On considère $G_{1}=G/H$, $|G_{1}|=p^{m-1}$

On applique l'hypothèse de récurrence.

$$\forall \beta \in \{1,..,m-2\}, \exists K \subset G \text{ sous groupe de}$$

$$\text{cardinal } p^{\beta}$$

$$\text{Soit } \pi : G \longrightarrow G_{1}, \quad \pi^{-1}(K) \text{ sous groupe de } G$$

$$\text{contenant } H, \text{ de cardinal } |K| \cdot p = p^{\beta+1}$$

$$\left( \pi^{-1}(K)/H \simeq K \right)$$
