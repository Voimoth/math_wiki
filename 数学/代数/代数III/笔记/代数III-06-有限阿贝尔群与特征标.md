---
title: 代数III(群论) · 6 有限阿贝尔群结构与特征标
created: 2026-09-01
updated: 2026-10-03
type: notes
tags: [group-theory, algebre, cours]
confidence: medium
---

# Structure des groupes abéliens finis

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

# Preuve du théorème de structure

On relit $A \simeq \mathbb{Z}/d_1\mathbb{Z} \times \cdots \times \mathbb{Z}/d_r\mathbb{Z}$. On a observé que nécessairement $d_r$ est l'exposant de $A$. On a vu : $\exists x \in A$ d'ordre $n$. On considère $<x> \simeq \mathbb{Z}/n\mathbb{Z}$ et on cherche un groupe $N$ tq $A \simeq N \times <x>$. On peut ensuite faire une récurrence.

On considère le caractère de $<x>$ donné par
$$\chi : <x> \longrightarrow \mathbb{U}_n, \qquad x \longmapsto \xi \text{ racine primitive } n\text{-ième de } 1.$$

> [!info] Rem.
> $\chi$ est ici un isomorphisme de groupe.

Soit $\tilde{\chi}$ un prolongement de $\chi$ à $A$, $\tilde{\chi} : A \to \mathbb{C}^*$ ; on fait $\tilde{\chi} : A \to \mathbb{U}_n$ car $n$ exposant de $A$.

Soit $N = \ker \tilde{\chi}$. On a $N \cap <x> = \{e\}$ car $\chi$ isomorphisme. De plus, $A = N \cdot <x> = <x> \cdot N$. En effet, soit $y \in A$. $\tilde{\chi}(y) \in \mathbb{U}_n$. Donc $\exists z \in <x>$ t.q. $\chi(z) = \tilde{\chi}(z) = \tilde{\chi}(y)$. D'où $(z^{-1}y) \in N = \ker \tilde{\chi}$, $y \in N <x>$.

On a ainsi un isomorphisme $N \times <x> \longrightarrow A$, $(n, z) \longmapsto nz$. Ainsi $A \simeq N \times \mathbb{Z}/n\mathbb{Z}$.

Par hyp de récurrence, $\exists d_1 | d_2 | \cdots | d_{r-1}$ tels que $N \simeq \mathbb{Z}/d_1\mathbb{Z} \times \cdots \times \mathbb{Z}/d_{r-1}\mathbb{Z}$. De plus, on a $d_{r-1} | n$.

# Quelques propriétés des caractères

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
