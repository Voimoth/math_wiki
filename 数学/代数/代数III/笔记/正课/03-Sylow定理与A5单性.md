---
title: 代数III(群论) · 3 Sylow 定理、对称群与 A₅ 单性
created: 2026-09-01
updated: 2026-10-03
type: notes
tags: [group-theory, algebre, cours]
confidence: medium
---

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
- Paul Krée, Jacques Vauthier, Mirella Krée, *Algèbre. Cours de Mathématiques et exercices de 2$^{e}$ année*.
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
>
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
>
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

## 相关概念

- [[Sylow定理]]
- [[代数III/概念/对称群]]
- [[A5单性与60阶群]]
- [[SO3的有限子群]]
- [[代数III/概念/导群]]
- [[代数III/概念/群作用]]
