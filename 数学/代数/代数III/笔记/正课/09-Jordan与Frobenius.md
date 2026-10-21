---
title: 代数III(群论) · 9 Jordan 与 Frobenius 标准型
created: 2026-09-01
updated: 2026-10-03
type: notes
tags: [group-theory, algebre, cours]
confidence: medium
---

# Réduction de Jordan

$k$ corps. $E$ $k$-espace vectoriel de dim finie, $u \in L(E)$ dont le polynôme caractéristique est scindé sur $k$, c'est-à-dire $u$ est trigonalisable.

> [!note] Définition (Bloc de Jordan)
> Pour $\lambda \in k$, $r \in \mathbb{N}^*$, on pose $J_{\lambda,r} = \begin{pmatrix} \lambda & 1 & 0 \\ & \ddots & \ddots \\ 0 & & \lambda \end{pmatrix} \in M_r(k)$.

> [!note] Théorème
> $u \in L(E)$, dont le polynôme caractéristique est scindé. Alors il existe une base de $E$ dans laquelle la matrice de $u$ est diagonale par blocs avec des blocs qui sont des blocs de Jordan. De plus l'ensemble des couples $(\lambda, r)$ qui apparaissent, comptés avec leurs multiplicités, ne dépend que de $u$ et pas de la base. Cet ensemble avec multiplicités caractérise la classe de similitude de $u$.

Rappels :
Outils : 1) Théorème de Cayley-Hamilton. Soit $\chi(X) \in k[X]$ le polynôme caractéristique de $u$ : $\chi(X) = \det(X \cdot \mathrm{Id} - u)$. Alors $\chi(u) = 0$.

2) Soit $\chi(X) = P_1(X)^{\alpha_1} \dots P_r(X)^{\alpha_r}$, $\alpha_1, \dots, \alpha_r \in \mathbb{N}^*$, $P_i$ polynômes irréductibles 2 à 2 (c'est-à-dire $P_i(X) = X - \lambda_i$). Lemme des noyaux :
$$E = \ker(\chi(u)) = \bigoplus_{i=1}^r \ker P_i^{\alpha_i}(u) = \bigoplus_{i=1}^r \ker (u - \lambda_i \mathrm{Id})^{\alpha_i} \qquad \text{sous-espace caractéristique}$$

3) Dans chaque sous-espace caractéristique $u_j = \lambda_j \mathrm{Id} + n_j$ avec $n_j = 0$ (c'est-à-dire $n_j$ nilpotent). Ainsi, en se restreignant à un sous-espace caractéristique, on se ramène à démontrer le théorème dans le cas d'un endomorphisme nilpotent.

On suppose $u$ nilpotent. Soit $s$ l'indice de nilpotence, $u^s = 0$, $u^{s-1} \neq 0$. On va montrer qu'il existe une base dans laquelle la matrice de $u$ est diagonale par blocs, avec des blocs de la forme $\begin{pmatrix} 0 & 1 & 0 \\ & \ddots & \ddots \\ & & \ddots & 1 \\ & & & 0 \end{pmatrix}$ et que $\forall i$, le nombre de blocs de Jordan de taille $i$ ne dépend pas de la base (on va le calculer en fonction de $u$).

On procède par récurrence sur $\dim E$. $\dim E = 1$ claire, $\dim E = 2$ aussi.

On va construire un sous-espace stable dans lequel la restriction de $u$ a une matrice bloc de Jordan de taille $s$, et qui possède un supplémentaire stable. On a $u^s = 0$, $u^{s-1} \neq 0$, $\exists x \in E$ tel que $u^{s-1}(x) \neq 0$. Soit $F = \operatorname{Vect}(x, u(x), \dots, u^{s-1}(x))$ stable par $u$. $\dim F = s$, $x, u(x), \dots, u^{s-1}(x)$ sont linéairement indépendants. Si on avait $a_0 x + a_1 u(x) + \dots + a_{s-1} u^{s-1}(x) = 0$ on applique $u^{s-1} \Rightarrow a_0 u^{s-1}(x) = 0 \Rightarrow a_0 = 0$, puis on applique $u^{s-2} \Rightarrow a_1 = 0$, etc.

Étalons la base $(u^{s-1}(x), \dots, u(x), x)$ ; la matrice de $u$ dans cette base est $\begin{pmatrix} 0 & & \\ & \ddots & \\ & & 0 \end{pmatrix}$. Si,

Pour trouver un supplémentaire stable on utilise la dualité $E^*$ dont la base et les relations d'orthogonalité entre sous-espaces de $E$ et $E^*$.

Soit $F$ sous-espace vectoriel de $E$ : $F^\circ = \{\varphi \in E^* \mid \forall x \in F, \langle \varphi, x \rangle = 0\}$ sous-espace vectoriel de $E^*$ de dim $= n - \dim F$.

Soit $G$ sous-espace vectoriel de $E^*$ : $G^\circ = \{x \in E \mid \forall \varphi \in G, \langle \varphi, x \rangle = 0\}$ sous-espace vectoriel de $E$ de dim $= n - \dim G$.

Soit $u \in \mathcal{L}(E)$ donc $u^* : E^* \to E^*$, $f \mapsto f \circ u$.

On a $(u^*)^0 = 0$ et $(u^*)^n \neq 0$. Soit $x \in E$, $u^{*n}(x) \neq 0$.

$\exists \varphi \in E^*$ tel que $\varphi(u^{*n}(x)) \neq 0$. $\implies \langle \varphi, u^{*n}(x) \rangle \neq 0$. $( (u^*)^n(\varphi) )(x) \neq 0$.

On peut donc $E^*$, avec $u^*$ et $\varphi$, faire ce qu'on a fait dans $E$ avec $u$ et $x$.

Soit $G = \{\varphi, u^*(\varphi), \dots, u^{*n-1}(\varphi)\}$, $\dim G = n$. Soit $F = G^\circ$. Alors $\dim F = n - n = 0$.

Comme $G$ stable par $u^*$, $G^\circ$ est stable par $u$ : si $y \in F$, on a $u(y) \in F$ car $\forall \varphi \in G, \langle \varphi, u(y) \rangle = \langle u^*(\varphi), y \rangle = 0$.

Si on montre $F \cap F' = \{0\}$. Alors $E = F \oplus F'$ avec $F'$ stable, et on pourra faire la récurrence.

Mais si $y \in F \cap F'$, $y = a_0 x + a_1 u(x) + \dots + a_n u^{*n}(x)$ et $\forall j=0, 1, \dots, n$, $u^{*j}(\varphi)(y) = 0$ c'est-à-dire $\varphi(u^{*j}(y)) = 0$.

Soit $i$ le plus petit indice tel que $a_i \neq 0$. On constate $(u^*)^{n-i}(\varphi)(y) = \varphi(u^{*n-i}(y)) = \varphi(a_i u^{*n}(x)) = a_i \varphi(u^{*n}(x)) \neq 0$ $\implies a_i = 0$, contradiction.

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

> [!note] Proposition
> Le nombre de blocs de Jordan de taille $i$ est $b_i = \delta_i - \delta_{i+1}$.

**Preuve :** La taille maximale d'un bloc de Jordan est $s$ indice de $u$. Pour un bloc de Jordan de taille $r$,
$$(J_{0,r})^k = \begin{pmatrix} & & & \\ & \ddots & & \\ & & \ddots & \\ & & & \end{pmatrix} \text{, et si } k \ge r \ (J_{0,r})^k = 0.$$
$$\dim \ker (J_{0,r})^k = \begin{cases} k & \text{si } k \leq r \\ r & \text{si } k \geq r \end{cases}$$
$$\dim \ker u^k = k \sum_{i=k}^s b_i + \sum_{i=1}^{k-1} i\, b_i$$
$$\dim \ker u^k - \dim \ker u^{k-1} = k \sum_{i=k}^s b_i - (k-1) \sum_{i=k-1}^s b_i + (k-1)b_{k-1} = \sum_{i=k}^s b_i$$
$$S_k = \sum_{i=k}^s b_i \Rightarrow S_k - S_{k+1} = b_k$$

Application :

> [!note] Théorème
> Soit $\lambda \neq 0$ dans le corps $k$, $\lambda$ pas une racine de l'unité. Alors si $M \in M_n(k)$, $M$ et $\lambda M$ sont semblables $\Leftrightarrow$ $M$ nilpotente.

**Preuve :** Soit $\lambda$ pas une racine de l'unité et $M \in M_n(k)$ avec $M$ semblable à $\lambda M$. Alors dans une clôture algébrique $\bar{k}$ de $k$, elles ont les mêmes valeurs propres. Si $a$ est valeur propre de $M \Rightarrow \lambda a$ valeur propre de $\lambda M$, donc aussi de $M$ ; et donc, en poursuivant, $\forall r \in \mathbb{N}$, $\lambda^r a$ valeur propre, mais les $\lambda^r$ sont tous distincts. Comme $M$ n'a qu'un nombre fini de valeurs propres, ceci $\Rightarrow a = 0$ $\Rightarrow Sp(M) = \{0\}$ et $M$ nilpotente.

Réciproque. On suppose $M$ nilpotente et on veut $M$ semblable à $\lambda M$. On a $\lambda M$ nilpotente. D'après le théorème de Jordan, $M$ et $\lambda M$ sont semblables $\Leftrightarrow$ $\forall i$, elles ont le même nombre de blocs de Jordan de taille $i$. Mais $b_k = S_k - S_{k+1}$, $S_k = \dim \ker M^k - \dim \ker M^{k-1}$. Mais comme $\lambda \neq 0$, $\dim \ker M^k = \dim \ker (\lambda M)^k \forall k$. donc elles ont les mêmes $S_k$.

> [!note] Théorème
> $K=\mathbb{R}$ ou $\mathbb{C}$. Toute matrice de $M_n(K)$ est semblable à sa transposée.

**Preuve :** 1) $K=\mathbb{C}$. Soit $M \in M_n(\mathbb{C})$. $M$ est trigonalisable, on dispose du théorème de Jordan.
$$M = P \begin{pmatrix} \lambda_1 & & * \\ & \ddots & \\ & & \lambda_n \end{pmatrix} P^{-1} \implies {}^tM = {}^tP^{-1} \begin{pmatrix} \lambda_1 & & 0 \\ & \ddots & \\ * & & \lambda_n \end{pmatrix} {}^tP$$
si on a le théorème pour chaque bloc de Jordan
$$P_i^{-1} J_{\lambda_i, r_i} P_i = {}^tJ_{\lambda_i, r_i} \text{, alors } \begin{pmatrix} P_1 & & \\ & \ddots & \\ & & P_m \end{pmatrix}^{-1} {}^tP^{-1} {}^tM {}^tP \begin{pmatrix} P_1 & & \\ & \ddots & \\ & & P_m \end{pmatrix} = M.$$
Il suffit de le faire pour un bloc de Jordan.
$$\begin{pmatrix} \lambda & 1 & & \\ & \ddots & \ddots & \\ & & \ddots & 1 \\ & & & \lambda \end{pmatrix} \text{ semblable à } \begin{pmatrix} \lambda & & 0 \\ 1 & \ddots & \\ & \ddots & \ddots & \\ 0 & & 1 & \lambda \end{pmatrix}$$
changement de base $(e_1, \ldots, e_n) \to (e_n, \ldots, e_1)$, c'est-à-dire on prend $P = \begin{pmatrix} 0 & & 1 \\ & \ddots & \\ 1 & & 0 \end{pmatrix}$.

2) $K=\mathbb{R}$. On a $M_n(\mathbb{R}) \subset M_n(\mathbb{C})$. Soit $M \in M_n(\mathbb{R})$. On applique le 1) : $\exists R \in \mathrm{GL}_n(\mathbb{C})$ tel que $RMR^{-1} = {}^tM$. On veut $S \in \mathrm{GL}_n(\mathbb{R})$ tel que $SMS^{-1} = {}^tM$.

> [!note] Proposition
> Soient $A, B \in M_n(\mathbb{R})$ semblables dans $M_n(\mathbb{C})$. Alors elles sont semblables dans $M_n(\mathbb{R})$.

**Preuve :** $\exists R \in M_n(\mathbb{C})$ tel que $RAR^{-1}=B$. Soit $R=P+iQ$ avec $P, Q \in M_n(\mathbb{R})$. $RA=BR$
$$\implies \begin{cases} PA=BP \\ QA=BQ \end{cases} \text{ si } P, Q \in \mathrm{GL}(\mathbb{R}) \text{ ok.}$$
Mais $\forall t \in \mathbb{R}$, $(P+tQ)A = B(P+tQ)$. Il suffit de trouver $t \in \mathbb{R}$ tel que $P+tQ \in \mathrm{GL}_n(\mathbb{R})$, c'est-à-dire dét($P+tQ$) $\neq 0$.

Soient $P, Q$ fixés. le polynôme $\varphi(X) = \det(P + XQ) \in \mathbb{R}[X]$. $\varphi$ n'est pas le polynôme nul, car $\varphi(i) = \det R \neq 0$. donc $\varphi$ n'a qu'un nombre fini de racines $\Rightarrow \exists t \in \mathbb{R}, \varphi(t) \neq 0$.

> [!note] Théorème
> Toute matrice $M \in M_n(\mathbb{C})$ est semblable à une matrice symétrique.

Ceci est faux sur $\mathbb{R}$, car sur $\mathbb{R}$ les matrices symétriques sont diagonalisables mais sur $\mathbb{C}$, il y a des matrices symétriques non diagonalisables.

**Preuve.** Soit $M \in M_n(\mathbb{C})$. On cherche $R \in \mathrm{GL}_n(\mathbb{C})$ tel que $RMR^{-1}$ symétrique, c'est-à-dire $R^{-1} M R = RMR^{-1}$, $t_M = t_{RR} M (t_{RR})^{-1}$.

$M$ est semblable à une matrice diagonale par blocs de Jordan et il suffit de le faire pour un bloc de Jordan. C'est-à-dire. Soit $J$ bloc de Jordan. On veut $R \in \mathrm{GL}_n(\mathbb{C})$ tel que $t_J = (t_{RR}) J (t_{RR})^{-1}$. On a vu que pour $J$ bloc de Jordan, $t_J = P J P^{-1}$ avec $P = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. Il suffit de trouver $R \in \mathrm{GL}_n(\mathbb{C})$ tel que $t_{RR} = P$.

On va utiliser la classification des formes quadratiques sur $\mathbb{C}$. On a si $Q_1, Q_2$ formes quadratiques sur $\mathbb{C}$, de matrices $P_1$ et $P_2$, elles sont équivalentes, c'est-à-dire $\exists S \in \mathrm{GL}_n(\mathbb{C})$ tel que $P_1 = t_{SP_2S}$ $\iff \mathrm{rg}(P_1) = \mathrm{rg}(P_2)$.

$P \in M_n(\mathbb{C})$ est symétrique, $\mathrm{rg}(P) = n$. C'est la matrice d'une forme quadratique qui est équivalente à la forme quadratique de matrice $\mathrm{Id}$. Donc $\exists R \in \mathrm{GL}_n(\mathbb{C})$ tel que $t_{RIdR} = t_{RR} = P$.

# Réduction de Frobenius

Soit $k$ corps quelconque. $M \in M_n(k)$, $E$ $k$-ev de dim $n$, $u \in L(E)$. On va décomposer $E$ en $\oplus$ de $n$ espaces stables et dans lesquels $u$ aura une matrice compagnon
$$\begin{pmatrix} 0 & & & * \\ 1 & \ddots & & \\ & \ddots & \ddots & \\ & & 1 & * \end{pmatrix}$$

## 1. Espaces cycliques

> [!note] Définition (Vecteur cyclique)
> $x \in E$ est dit cyclique, si $\operatorname{Vect}(u^k(x), k \in \mathbb{N}) = E$. (cela n'est pas toujours)

2) endomorphisme cyclique : $u \in L(E)$ tel que il existe un vecteur cyclique.
3) sous-espace cyclique : c'est un sous-espace vectoriel $F \subset E$ stable par $u$ et tel que la restriction de $u$ à $F$ est cyclique.

> [!note] Définition (Polynôme minimal relatif à un vecteur $x \in E$)
> Soit $I_x = \{ P \in k[X] \text{ tel que } P(u)(x) = 0 \}$. C'est un idéal $\neq \{0\}$ de $k[X]$. Comme $k[X]$ anneau principal, il existe un unique polynôme unitaire $\mu_x$, ou $\mu_x$ lorsque pas d'ambiguité sur $u$, tel que $I_x = (\mu_x)$.

Ainsi, si $P \in k[X]$ est tel que $P(u)(x) = 0$, alors $\mu_x \mid P$. Et $\mu =$ polynôme minimal de $u$, on a $\mu_x \mid \mu$.

De plus, si $r = \deg(\mu_x)$, alors $x, u(x), \dots, u^{r-1}(x)$ sont linéairement indépendants, $\operatorname{Vect}(x, u(x), \dots, u^{r-1}(x)) = \operatorname{Vect}(u^k(x), k \in \mathbb{N})$ est de dim $r$. Cet espace est le sous-espace cyclique engendré par $x$.

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

> [!note] Proposition
> Le polynôme caractéristique de $C_P$ = polynôme minimal de $C_P$ = $P$.

**Preuve :** On peut calculer (par récurrence sur $n = d^\circ P$) $\chi_{C_P}$ le polynôme.

Dans calcul explicite. Soit $(e_1, \dots, e_r)$ base canonique de $k^r$.

On a $e_2 = C_p(e_1)$, $e_3 = C_p^2(e_1)$, ..., $e_r = C_p^{r-1}(e_1)$. Ainsi $e_1$ est un vecteur cyclique pour $C_p$ ; donc le polynôme minimal de $e_1$ est de degré $r$. Mais on a $\mu_{e_1} \mid \mu_{C_p} \mid \chi_{C_p}$, unitaires et $d^\circ \chi_{C_p} = r$. d'où $\mu_{e_1} = \mu_{C_p} = \chi_{C_p}$.

Or $C_p^r(e_1) = -a_0 e_1 - a_1 C_p(e_1) - \dots - a_{r-1} C_p^{r-1}(e_1)$, c'est-à-dire $P(C_p)(e_1) = 0$, donc $P \in I_{e_1}$, $P$ est un multiple de $\mu_{e_1}$, mais $d^\circ P = r = d^\circ \mu_{e_1} \Rightarrow P = \mu_{e_1}$.

> [!note] Théorème
> Soit $u \in L(E)$. Alors $\exists x \in E$ tel que $\mu_x = \mu_u$.

**Preuve :** On sait $\forall x \in E$, $\mu_x \mid \mu_u$. Posons $\mu_u = \prod_{i=1}^s P_i(X)^{\alpha_i}$ avec $P_i$ irréductible, $P_i \neq P_j$ si $i \neq j$. Comme $\mu_u(u) = 0$, lemme des noyaux $E = \bigoplus_{i=1}^s \ker(P_i(u)^{\alpha_i})$.

Chaque $F_i = \ker(P_i(u)^{\alpha_i})$ est stable par $u$, et le polynôme minimal de la restriction de $u$ à ce sous-espace est $P_i(X)^{\alpha_i}$. En effet, sur $F_i$ on a $P_i(u)^{\alpha_i} = 0$, donc le polynôme minimal de la restriction divise $P_i(X)^{\alpha_i}$. Comme $P_i$ irréductible, un diviseur est de la forme $P_i(X)^{\beta_i}$ avec $\beta_i \leq \alpha_i$.

Si $\beta_i < \alpha_i$ : Alors le polynôme $Q(X) = \prod_{j \neq i} P_j(X)^{\alpha_j} \cdot P_i(X)^{\beta_i}$ satisferait $Q(u) = 0$. $Q(X)$ s'annule sur chacun des sous-espaces $\ker P_j(u)^{\alpha_j}$ et aussi sur $\ker P_i(u)^{\alpha_i}$. On a $\deg Q < \deg \mu$ impossible.

Sur $F_i$ on a $P_i(u)^{a_i} = 0$, $P_i(u)^{a_i-1} \neq 0$, donc $\exists x \in F_i$, $P_i(u)^{a_i-1}(x) \neq 0$ ; soit le polynôme minimal de $x$ : $\mu_x = P_i(X)^{a_i}$ (on a $\mu_x \mid P_i(X)^{a_i}$, donc $\mu_x$ puissance de $P_i(X)$). Soit $x = x_1 + \cdots + x_s$. Alors $\mu_x = \mu_{x_1} \mu_{x_2} \cdots \mu_{x_s} = \mu$. Et $P(u)(x) = 0 \Rightarrow \sum P(u)(x_i) = 0$, et les $F_i$ en $\oplus$ ; $\forall i, P(u)(x_i) = 0 \Rightarrow \forall i, \mu_{x_i} \mid P$ et les $\mu_{x_i}$ sont premiers entre eux.

> [!note] Corollaire
> Caractérisation des endomorphismes cycliques : $u \in L(E)$ cyclique $\Leftrightarrow \mu_u = \chi_u$.

**Preuve :** On a déjà vu « $\Rightarrow$ ». Pour « $\Leftarrow$ » : $\exists x \in E$ tel que $\mu_x = \mu_u = \chi_u$, d'où $\mu_x \cdot n = \dim E$. Mais d° $\mu_x$ = dimension du sous-espace cyclique engendré par $x$. Donc $x$ est un vecteur cyclique.

> [!note] Théorème de Frobenius
> Soit $u \in L(E)$. Alors il existe une suite $(P_1, \ldots, P_r)$ de polynômes unitaires, et une suite $(F_1, \ldots, F_r)$ de sous-espaces stables tels que :
> 1) $E = F_1 \oplus \cdots \oplus F_r$
> 2) $\forall i = 1, \ldots, r$, la restriction de $u$ à $F_i$, $u_{|F_i}$, est cyclique, de polynôme minimal $P_i$.
> 3) $P_r \mid P_{r-1} \mid \cdots \mid P_2 \mid P_1$
> De plus, la suite de polynômes $(P_1, \ldots, P_r)$ est unique et elle caractérise la classe de similitude de $u$.

On appelle $P_1, \ldots, P_r$ les invariants de similitude de $u$.

Ainsi, il existe une base de $E$ dans laquelle la matrice de $u$ est de la forme
$$\begin{pmatrix} C_{P_1} & & & 0 \\ & C_{P_2} & & \\ & & \ddots & \\ 0 & & & C_{P_r} \end{pmatrix} \quad \text{avec } P_r | P_{r-1} | \dots | P_1 .$$

> [!info] Remarque
> 1) Le polynôme minimal $\mu_u = P_1$ car $\mu_u(C_{P_1}) = 0 \Rightarrow P_1 | \mu_u$
> 2) $\chi_u = P_1 P_2 \dots P_r$
> 3) On n'a fait aucune hypothèse sur le fait que $\chi_u$ soit scindé ou non.

**Preuve :**
1) Existence : par récurrence sur $\dim E$. Posons $P_1 := \mu_u$. On a vu qu'il existe $x \in E$ tel que $\mu_x = \mu = P_1$. Soit $d := \deg(P_1)$. $F := \operatorname{Vect}(x, u(x), \dots, u^{d-1}(x))$ sous-espace cyclique engendré par $x$. $u|_F$ cyclique, de polynôme minimal $P_1$. On va montrer que $F_1$ possède un supplémentaire stable par $u$, soit $F'$, et on pourra appliquer l'hypothèse de récurrence à $F'$.

Idée : utiliser $E^*$. On complète la famille libre $e_1 = x, e_2 = u(x), \dots, e_d = u^{d-1}(x)$, en une base $(e_1, \dots, e_d, e_{d+1}, \dots, e_n)$ de $E$. On considère la base duale $(e_1^*, \dots, e_d^*, \dots, e_n^*)$. Posons $\varphi = e_d^*$. On a $\varphi(e_1) = \dots = \varphi(e_{d-1}) = 0, \varphi(e_d) = 1$.

> [!note] Lemme
> La famille $(\varphi, {}^t u(\varphi), \dots, {}^t u^{d-1}(\varphi))$ est libre.

Preuve : Supposons qu'il existe $a_0, \dots, a_{d-1} \in \mathbb{K}$ tel que $a_0 \varphi + a_1 {}^t u(\varphi) + \dots + a_{d-1} {}^t u^{d-1}(\varphi) = 0$. On applique à $e_1 = x$ : $\sum_{i=0}^{d-1} a_i \varphi(u^i(e_1)) = a_{d-1} \varphi(e_d) = 0$ $\Rightarrow a_{d-1} = 0$. On applique ensuite à $e_2 = x \Rightarrow a_{d-2} = 0$ etc. sur $e_d$ on obtient $a_0 = 0$.

Soit $G = \operatorname{Vect}(x, u(x), \dots, u^{d-1}(x))$, donc $\dim G = d$, et $G$ est stable par $u$ car $\mu_u \cdot \mu_u$ de degré $d$.

Soit $F' = G^\circ$ (avec $G^\circ \subset E$), donc $\dim F' = n-d$. Comme $G$ stable pour $u$, $F' = G^\circ$ est stable par $u$.

Vérifions que $F'$ est un supplémentaire de $F_1$, c'est-à-dire $F' \cap F_1 = \{0\}$. Soit $y \in F' \cap F_1$. $y = \sum_{i=0}^{d-1} a_i u^i(x)$ et $\forall k=0, \dots, d-1$, $(u^k \circ \varphi)(y) = 0$, c'est-à-dire $\varphi(u^k(y)) = 0$. Pour $k=0$, $\varphi(y) = 0$ or $\varphi(u^i(x)) = 0$ si $i=0, \dots, d-2$ ; il reste $a_{d-1} \varphi(u^{d-1}(x)) = 0 \Rightarrow a_{d-1} = 0$. $k=1 \Rightarrow a_{d-2} = 0$ et ainsi la suite. D'où $\forall i, a_i = 0$ et $F' \cap F_1 = \{0\}$.

$\dim F' < \dim E$ on peut appliquer l'hypothèse de récurrence : $\exists F_2, \dots, F_r$ sous-espace vectoriel de $F'$ stables non nuls par $u$, $P_2, \dots, P_r \in K[X]$, $P_r | P_{r-1} | \dots | P_2$, $F_i$ cyclique de polynôme minimal $P_i$. d'où $E = F_1 \oplus F_2 \oplus \dots \oplus F_r$ et il reste à vérifier que $P_2 | P_1$. C'est vrai car $P_1$ polynôme minimal de $u$.

2) Unicité de la suite $(P_1, \dots, P_r)$ sous les conditions du théorème. Supposons qu'on ait $(F_1, \dots, F_r)$ et $(P_1, \dots, P_r)$ comme dans le théorème et aussi $(G_1, \dots, G_s)$ des sous-espaces vectoriels stables et $(Q_1, \dots, Q_s)$ polynômes qui satisfont aussi aux conditions du théorème. Montrons que $r=s$ et $\forall i=1, \dots, r$, $P_i = Q_i$. On a nécessairement $P_1 = Q_1$ car c'est le polynôme minimal.

Alors $\dim F_i = \dim G_i = d^0(\mu)$ et il y a un isomorphisme $\varphi : F_i \longrightarrow G_i$ tp $\forall x \in F_i \quad \varphi(u(x)) = u(\varphi(x))$.

$u|_{F_i}$ et $u|_{G_i}$ ont même matrice dans des bases bien choisies de $F_i$ et $G_i$.

Soit $i$ le plus petit indice tel que $P_i \neq Q_i$ ; $P_1 = Q_1, \ldots, P_{i-1} = Q_{i-1}$. $E = F_1 \oplus \cdots \oplus F_r = G_1 \oplus \cdots \oplus G_s$. Comme pour $j \geq i$, $P_j | P_i$, $P_i(u)|_{F_j} = 0$.
$$P_i(u)(E) = P_i(u)(F_1) \oplus \cdots \oplus P_i(u)(F_{i-1}) = P_i(u)(G_1) \oplus \cdots \oplus P_i(u)(G_s)$$
(On a $P_i(u)(F_k) \subset F_k$, $P_i(u)(G_k) \subset G_k$.)

Comme pour $k \leq i-1$, $P_k = Q_k$ : $F_k$ et $G_k$ sont des sous-espaces cycliques isomorphes car de même polynôme minimal, donc $u|_{F_k}$ et $u|_{G_k}$ sont semblables : $\varphi_k : F_k \to G_k$, $u|_{G_k} = \varphi_k \circ u|_{F_k} \circ \varphi_k^{-1}$. Donc $P(u|_{F_k})$ et $P(u|_{G_k})$ sont semblables. en particulier $\dim(P(u)(F_k)) = \dim(P(u)(G_k)) \cdot \forall k \leq i-1$.

en prenant les dim sur les 2 expressions de $\dim P_i(u)(E)$ on obtient $\sum_{k=i}^s \dim P_i(u)(G_k) = 0 \cdot$ c'est-à-dire $\forall k \geq i \cdot P_i(u)(G_k) = 0$. En particulier, pour $k=i \cdot P_i(u)(G_i) = 0$. mais $Q_i$ polynôme minimal de $u|_{G_i} \cdot$ donc $Q_i | P_i$. et en échangeant les rôles des 2 suites on a aussi $P_i | Q_i$ d'où $P_i = Q_i$ contradiction. d'où $r=s$ et $\forall i, P_i = Q_i$.

> [!note] Corollaire
> $u \in L(E)$ est cyclique $\iff$ il y a un unique invariant de similitudes.

Applications

1. Proposition. Soit $u \in L(E)$ endomorphisme cyclique. Alors $u$ et $^t u$ sont semblables, c'est-à-dire une matrice compagnon est semblable à sa transposée.

**Preuve :** $u$ cyclique $\Rightarrow \mu_u = \chi_u$ ; $\mu_{^t u} = \mu_u = \chi_u = \chi_{^t u}$, $^t u$ est aussi cyclique et son unique invariant de similitudes est le même que celui de $u$.

> [!note] Théorème
> Soit $M \in M_n(K)$. Alors $M$ et $^t M$ sont semblables.

**Preuve :** $M$ et $^t M$ sont semblables à des matrices diagonales par blocs avec blocs matrices compagnons dont les polynômes se divisent et ceci résulte alors de la prop.

2. Proposition. Soient $k \subset K$ corps, $A, B \in M_n(k)$ qui sont semblables dans $M_n(K)$. Alors elles sont semblables dans $M_n(k)$.

**Preuve :** $A, B \in M_n(k)$, elles possèdent des invariants de similitudes dans $k[X]$ et elles sont semblables si et seulement si ils sont égaux. Or les voit dans $M_n(K)$, par unicité des invariants de similitudes leurs invariants de similitudes sont les mêmes que dans $M_n(k)$
$$\begin{pmatrix} C_{P_1} & & \\ & \ddots & \\ & & C_{P_r} \end{pmatrix} \qquad \text{avec } P_1 | P_2 | \dots | P_r$$
Donc $A$ et $B$ ont mêmes invariants dans $M_n(k)$ et sont donc semblables.

\* les invariants de similitudes d'une matrice sont des polynômes à coefficients dans le plus petit corps où sont les coefficients de cette matrice.

# Exemples et commutant

**Exemples**

1. Soient $P, Q \in k[X]$ unitaires, $P \land Q = 1$. Soit $M = \begin{pmatrix} C_P & 0 \\ 0 & C_Q \end{pmatrix}$. Invariants de similitude de $M$ ? Il y a un seul : c'est $PQ$.

$M$ représente un endomorphisme cyclique. $\chi_M = \chi_{C_P} \cdot \chi_{C_Q} = PQ$.
$$\left. \begin{array}{l} \mu_M = \text{ppcm}(\mu_{C_P}, \mu_{C_Q}) = P \vee Q = PQ \end{array} \right\} \Rightarrow M \text{ cyclique}$$

Plus généralement.

> [!note] Proposition
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

> [!note] Définition
> Soit $u \in L(E)$. Le commutant de $u$ est $\operatorname{Com}(u) = \{ v \in L(E), u \circ v = v \circ u \}$.

On a toujours $k[u] \subset \operatorname{Com}(u)$.

> [!note] Proposition
> $u$ cyclique $\iff k[u] = \operatorname{Com}(u)$.

## 相关概念

- [[代数III/概念/模]]
- [[域上代数]]
- [[经典群]]
