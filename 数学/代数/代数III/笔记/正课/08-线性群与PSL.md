---
title: 代数III(群论) · 8 线性群与 PSLₙ
created: 2026-09-01
updated: 2026-10-03
type: notes
tags: [group-theory, algebre, cours]
confidence: medium
---

# Groupe linéaire et groupe spécial linéaire

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

# Complément sur le groupe linéaire

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

## 相关概念

- [[经典群]]
- [[代数III/概念/群]]
- [[代数III/概念/商群]]
- [[代数III/概念/导群]]
- [[代数III/概念/群作用]]
- [[代数III/概念/对称群]]
