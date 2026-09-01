---
title: 群论讲义 Cours de Groupes (Marc Rosso)
created: 2026-09-01
updated: 2026-09-01
type: entity
tags: [group-theory, algebre, cours]
sources: [Cours USTC 01-09-26.pdf]
confidence: medium
---

# Cours de Groupes — Marc Rosso (USTC, 2026-09-01)

> 手写法语讲义整理(OCR 转写)。原 PDF: `Cours USTC 01-09-26.pdf`(17 页,第 1 页空白)。
> 注意:OCR 转写可能存在少量错误,数学公式以原图为准。

Marc Rosso  
marc.rosso@imj-prg.fr

# Groupes

**Notations :** G, H groupes

## 1. Notions connues :

- **Groupe :**
  $$
  \begin{aligned}
  G \times G &\longrightarrow G \\
  (g, g') &\longmapsto gg'
  \end{aligned}
  $$
  - associative
  - neutre \(e \in G\)
  - inverse \(g^{-1}\)

**Exemples :**
- groupes cycliques \(\mathbb{Z}/n\mathbb{Z}\)
- groupes de permutations
  - \(X\) ensemble
  - \(\mathfrak{S}(X) = \{f : X \longrightarrow X, \text{ bijective}\}\)
  - \(X = \{1, \dots, n\}\)
  - \(\mathfrak{S}_n = \mathfrak{S}(\{1, \dots, n\})\) groupe symétrique
- groupe linéaire
  - \(k\) corps, \(\mathrm{GL}_n(k) = \{\text{matrices inversibles } n \times n\}\)

- **Sous-groupe**
- **Morphisme de groupe** \(f : G \longrightarrow H\)
  - \(\forall g, g' \in G \quad f(gg') = f(g)f(g')\)
  - Image de \(f = \mathrm{Im} f\)
  - Noyau \(\mathrm{Ker} f = \{g \in G ; f(g) = e\}\)
  - sous-groupe

---

**Remarques :**
- L'image d'un sous-groupe de \(G\) est un sous-groupe de \(H\)
- L'image réciproque \(f^{-1}(K)\) d'un sous-groupe \(K\) de \(H\) est un sous-groupe de \(G\).

**Classe   gauche modulo un sous-groupe :**
\(H \subset G\) sous-groupe  
Classe   gauche de \(a \in G\) : \(aH = \{ah, h \in H\}\)  
classes d'équivalence pour la relation :  
\[a \mathcal{R} b \iff a^{-1}b \in H \text{ i.e } aH = bH\]  
elles forment une partition de \(G\).

**Thm de Lagrange :** Si \(G\) groupe fini, \(H \subset G\) sous-groupe, alors \(|H|\) divise \(|G|\)

**Notation** \(G/H = \{\text{classes   gauche}\}\)
- De même : classe   droite.

**Prop :** Une intersection de sous-groupes est un sous-groupe

**Notion de sous-groupe engendré par une partie \(A\)**  
de \(G\) : c'est l'intersection de tous les sous-groupes  
de \(G\) contenant \(A\), i.e c'est le plus petit sous-  
groupe de \(G\) contenant \(A\)  
Il est noté \(\langle A \rangle \subset G\)  
\[\langle A \rangle = \{a_1^{\varepsilon_1} \cdots a_k^{\varepsilon_k}, \ k \in \mathbb{N}, \ a_i \in A, \ \varepsilon_i = \pm 1\}\]

---

**Exemple** Générateurs de \(\mathfrak{S}_n\)

**Rappel :** transposition \(\sigma \in \mathfrak{S}_n\) : \(\exists i \neq j\) tels que 
\(\sigma(i)=j, \sigma(j)=i\) et \(\forall k \notin \{i, j\}\) \(\sigma(k)=k\).
Elle est notée \((i\ j)\).

**Prop :** \(\mathfrak{S}_n\) est engendré par les transpositions.

---

**2. Sous-groupe distingué, ou normal**

**Déf :** C'est un sous-groupe \(H \subset G\) tel que :
\[
\forall g \in G, \forall h \in H,\ g h g^{-1} \in H
\]
i.e. \(g H g^{-1} = H\), i.e. \(g H = H g\).

**Ex** noyau \(\mathrm{Ker} f\) d'un morphisme de groupes.

---

**Exemples :**

1. **Centre de G** 
\[
Z(G) = \{ x \in G / \forall g \in G\ xg = gx \}
\]

**Ex** \(Z(\mathfrak{S}_n)\) \(n \geq 2\) ?

* Si \(n=2\) \(\mathfrak{S}_2 = \{ \mathrm{Id}, (12) \}\) commutatif
\[
Z(\mathfrak{S}_2) = \mathfrak{S}_2
\]

* Si \(n \geq 3\) \(Z(\mathfrak{S}_n) = \{ \mathrm{Id} \}\)

Si \(\omega \in Z(\mathfrak{S}_n)\) \(\omega (1\ i) = (1\ i) \omega\) \(\forall i \geq 2\)
$$
\left\{
\begin{array}{l}
\omega(1\ i)\omega^{-1} = (1\ i) \\
\left( \omega(1)\ \omega(i) \right)
\end{array}
\right.
$$
$$
\left\{
\begin{array}{l}
\text{d'où } \omega(i) = 1 \text{ ou } i \\
\forall i
\end{array}
\right.
$$
Ceci \(\implies \omega(1) = 1\)

---

## 2. Groupe dérivé $\mathfrak{D}(G)$

**Déf:** $\mathfrak{D}(G)$ = sous-groupe de $G$ engendré par les commutateurs, i.e. par les éléments $xyx^{-1}y^{-1}$, $x,y \in G$

notation : $[x,y] = xyx^{-1}y^{-1}$

dire que $[x,y] = e$, c'est dire $xy = yx$

$\mathfrak{D}(G) = \{e\} \iff G$ commutatif

**Prop:** $\mathfrak{D}(G)$ est un sous-groupe distingué

**Preuve:** Il suffit de voir que : $\forall g \in G$, $\forall x,y \in G$

$g[x,y]g^{-1} \in G$

$g[x,y]g^{-1} = gxyx^{-1}y^{-1}g^{-1}$

$= (gxg^{-1})(gyg^{-1})(gxg^{-1})^{-1}(gyg^{-1})^{-1}$

$= [gxg^{-1}, gyg^{-1}]$

---

## 3. Groupe quotient

**Notation:** si $H < G$ sous groupe distingué, on l'écrit $H \triangleleft G$

**Thm:** Soit $H \triangleleft G$. Alors, il existe une $G/H$ unique structure de groupe telle que l'application $\pi: G \to G/H$
$g \mapsto gH$
soit un morphisme de groupes, i.e. telle que
$(gH)(g'H) = gg'H$

---

(Il faut s'assurer que cette formule a un sens, i.e.)

si $g_1 \in gH$, $g'_1 \in g'H$, alors $g_1g'_1 \in gg'H$

Ainsi: un sous-groupe distingué est toujours le noyau d'un morphisme

$H = \ker \pi$ ; $\pi$ sur dans $G$

$eH = H$ neutre de $G/H$ .

**Thm de factorisation :**

Soit $G$ groupe, $H \trianglelefteq G$, $K$ groupe et

$f : G \to K$ morphisme

$$
\begin{array}{ccc}
G & \xrightarrow{f} & K \\
\pi \downarrow & \nearrow \overline{F} & \\
G/H & &
\end{array}
$$

Alors il existe un morphisme $\overline{F} : G/H \to K$ tel que $f = \overline{F} \circ \pi$ si et seulement si (ssi) $H \subset \ker f$

**Preuve :**

- Si $\overline{F}$ existe, alors $\forall h \in H$,
  $f(h) = \overline{F}(\pi(h)) = \overline{F}(H) = e$

$H$ neutre de $G/H$

Ainsi: $H \subset \ker f$

- Si $H \subset \ker f$ : on définit l'application $\overline{F}$ par $\overline{F}(gH) = f(g)$

On vérifie que ceci est bien défini, i.e. si $gH = g'H$ alors $f(g) = f(g')$

---

Mais \(gH = g'H \Rightarrow \exists h \in H\) tel que \(g' = gh\)

\[
f(g') = f(gh) = f(g)f(h)
\]
\[
= f(g) \qquad (H \subset \text{Ker } f)
\]

\(\bar{f}\) est bien un morphisme de groupes, i.e.

\[
\bar{f}(gH \cdot g'H) = \bar{f}(gH) \cdot \bar{f}(g'H)
\]

\[
\bar{f}(gHg'H) = \bar{f}(gg'H) = f(gg') = f(g)f(g')
\]
\[
= \bar{f}(gH) \cdot \bar{f}(g'H)
\]

**Corollaire.** On a un isomorphisme de groupes

\[
G/\text{Ker } f \longrightarrow \text{Im } f
\]

Ainsi, si \(G\) fini, \(|G| = |\text{Im } f| \cdot |\text{Ker } f|\)

\((\text{Car } |G/H| = \frac{|G|}{|H|})\)

---

**Propriété universelle du groupe dérivé**

**Thm:** Soit \(G\) groupe, \(A\) groupe commutatif et \(f : G \longrightarrow A\) morphisme. Alors \(f\) se factorise   travers \(G/\mathcal{D}(G)\).

$$
\begin{array}{ccc}
G & \xrightarrow{f} & A \\
\pi \downarrow & \nearrow \bar{f} & \\
G/\mathcal{D}(G) & &
\end{array}
$$

**Rem** \(G/\mathcal{D}(G)\) est commutatif. \(\pi([x,y]) = e\)

\[
\pi([x,y]^g) = [\pi(x), \pi(y)] = e
\]

---

Ce que dit le thm est que : \(G/\mathcal{D}(G)\) est le
plus grand quotient commutatif de \(G\), i.e. si
\(H \triangleleft G\) avec \(G/H\) commutatif, alors il
existe un morphisme surjectif \(G/\mathcal{D}(G) \longrightarrow G/H\)

en effet
\[
\begin{array}{ccc}
G & \xrightarrow{\pi_1} & G/H \\
& \searrow_{\pi} & \nearrow_{\bar{\pi}_1} \\
& & G/\mathcal{D}(G)
\end{array}
\]
\(\bar{\pi}_1\) donné par
le thm, il est
surjectif car
\(\pi_1\) est surjectif

Preuve du thm :
D'après le thm de factorisation, il faut voir
que \(\mathcal{D}(G) \subset \ker f\), i.e que
\(\forall x,y \in G \quad f([x,y]) = e\)
\([f(x), f(y)] = e\) car \(A\) commutatif.

4. Sous-groupes d'un groupe quotient

Soit \(H \triangleleft G\), \(\pi: G \longrightarrow G/H\)

Thm : Il y a une bijection entre :
1) l'ensemble des sous-groupes de \(G/H\) (respectivement sous-groupes distingués de \(G/H\))
2) l'ensemble des sous-groupes de \(G\) contenant \(H\) (respectivement sous-groupes distingués de \(G\) contenant \(H\))

---

**Preuve :**

. Soit \(K \subset G/H\) sous-groupe (resp. distingué)
Alors \(\pi^{-1}(K) \subset G\) sous-groupe (resp. distingué) de \(G\)
On a \(H \subset \pi^{-1}(K)\) car \(H = \ker \pi\)
On a : \(\pi(\pi^{-1}(K)) = K\) (si \(x \in \pi^{-1}(K)\) \(\pi(x) \in K\))

. Réciproquement : si \(L \subset G\) sous-groupe (resp. distingué)
contenant \(H\) ; alors la restriction de \(\pi\)   \(L\)
\(\pi|_L : L \longrightarrow G/H\) a pour image \(L/H\)
qui est bien un sous-groupe de \(G/H\), avec
\(\pi^{-1}(L/H) = L\)

**Application :** Sous-groupes d'un groupe cyclique \(\mathbb{Z}/n\mathbb{Z}\)
Ils sont en bijection avec les sous-groupes
de \(\mathbb{Z}\) contenant \(n\mathbb{Z}\) ; i.e. avec les \(k\mathbb{Z} \supset n\mathbb{Z}\)
\((k \in \mathbb{N}^*)\)
i.e. avec les \(k\mathbb{Z}\) tels que \(k|n\)
\(n = k \cdot d\)
Alors le sous-groupe associé   \(k\mathbb{Z}\) est :
\(\pi(k\mathbb{Z}) = \frac{k\mathbb{Z}}{n\mathbb{Z}} = \frac{k\mathbb{Z}}{dk\mathbb{Z}} \simeq \mathbb{Z}/d\mathbb{Z}\)

---

Ainsi:

**Prop:** \(\forall d \mid n\), il y a un unique sous-groupe d'ordre \(d\) de \(\mathbb{Z}/n\mathbb{Z}\), qui est de plus cyclique

**Remarque importante:**

On a vu : si \(L \subset G\) sous-groupe contenant \(H\)
alors \(\pi(L) = L/H\)
Cependant, si \(M \subset G\) sous-groupe quelconque
alors \(\pi(M) \subset G/H\) sous-groupe. Le sous-groupe de \(G\) contenant \(H\) qui correspond   \(\pi(M)\) est
\(\pi^{-1}(\pi(M))\), qui est le sous-groupe de \(G\)
engendré par \(M\) et \(H\)
\[
\pi^{-1}(\pi(M)) = MH = HM \quad (*)
\]

En effet :
\[
x \in \pi^{-1}(\pi(M)) \iff \exists m \in M, \pi(x) = \pi(m)
\]
\[
\iff \exists m \in M, \exists h \in H, x = mh \in MH
\]

**Corollaire**

Si \(M \subset G\) sous-groupe quelconque
\[
\pi(M) = MH / H
\]

---

**Théorème :** Soit \(H \trianglelefteq G\), \(M \subset G\) sous-groupe
Alors \(M \cap H \trianglelefteq M\). On a un isomorphisme
\[
\frac{M}{M \cap H} \cong \frac{MH}{H}
\]

**Preuve :** On dispose du morphisme
\[
\pi: G \to G/H
\]
On restreint \(\pi\)   \(M\) :
\[
\pi|_M = \pi_1 : M \to G/H \text{ morphisme}
\]
Son image \(\pi(M) = \frac{MH}{H}\)
Son noyau \(\mathrm{Ker}(\pi_1) = M \cap \mathrm{Ker}\,\pi = M \cap H\)
Par le thm d'isomorphisme
\[
\frac{M}{\mathrm{Ker}(\pi_1)} \cong \mathrm{Im}(\pi_1)
\]
\[
\frac{M}{M \cap H} \cong \frac{MH}{H}
\]

**MISE EN GARDE :**
Soit \(G\) groupe, \(H \trianglelefteq G\) et \(K \trianglelefteq H\)
Il n'est pas vrai en général que \(K \trianglelefteq G\)

---

Rem Soient \(M\) et \(H\) sous-groupes de \(G\)  
Alors \(MH = \{mh, m \in M, h \in H\}\) est un sousgroupe \(\iff MH = HM\)  
Ceci est le cas si \(M\) ou \(H\) est distingué

---

**Contre exemple :**  

\(G_4\) groupe des permutations de \(\{1,2,3,4\}\)  
\(A_4 \subset G_4\) groupe alterné = groupe des permutations de signature \(+1\)  
\(A_4 \lhd G_4\)  
Dans \(A_4\), on considère \(V = \{ Id, (12)(34), (13)(24), (14)(23) \}\)

Posons \(a = (12)(34), \ b = (13)(24), \ c = (14)(23)\)  
On a : \(a^2 = b^2 = c^2 = Id\)  
\(a \cdot b = c = b \cdot a\)  
\(V\) commutatif, \(V \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}\)

Isomorphisme : \(\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \to V\)  
\((\bar{0}, \bar{0}) \longmapsto Id\)  
\((\bar{0}, \bar{1}) \longmapsto b\)  
\((\bar{1}, \bar{0}) \longmapsto a\)  
\((\bar{1}, \bar{1}) \longmapsto c\)

On a : \(V \lhd A_4\) (en général, dans \(G_n\)  
\(\sigma \in G_n, \ \sigma(i \ j)\sigma^{-1} = (\sigma(i) \ \sigma(j))\)

---

```markdown
On a: \(\langle a \rangle \triangleleft V \triangleleft A_4\)
mais \(\langle a \rangle\) n'est pas distingué dans \(A_4\)

---

**Thm** : \(G\) groupe, \(H \triangleleft G\), \(K \triangleleft H\) et \(K \triangleleft G\)
Alors \(H/K \triangleleft G/K\) et on a :

\[
\frac{G/K}{H/K} \simeq G/H
\]

---

**Preuve** : \(H/K \triangleleft G/K\) : théorème sur les sous-groupes d'un quotient

On considère les morphismes de passage au quotient :

\[
G \xrightarrow{\pi_1} G/K \xrightarrow{\pi_2} \frac{G/K}{H/K}
\]

\(\varphi = \pi_2 \circ \pi_1\) surjectif

On a : \(\boxed{\text{Ker } \varphi = H}\) ; ainsi \(\quad G/H \simeq \text{Im } \varphi = \frac{G/K}{H/K}\)

Soit \(g \in \text{ker } \varphi\)

\[
\pi_2(\pi_1(g)) = \text{neutre}
\]

\[
\pi_1(g) \in \text{Ker } \pi_2 = H/K
\]

\[
gK \in H/K
\]

\(\exists h \in H\) tel que : \(\pi_1(g) = gK = \pi_1(h) = hK \subset H\)

donc \(g \in hK \subset H\), d'où \(\text{Ker } \varphi \subset H\)
```

---

Here is the transcription of the handwritten French math lecture notes:

On a aussi \(H \subset \ker \varphi\) car \(\pi_1(H) = H/K = \ker \pi_2\)

---

**Groupe simple:**

**Déf.:** Un groupe \(G\) est simple si ses seuls sous-groupes distingués sont \(\{e\}\) et \(G\)

**Intérêt:** Si \(G\) est simple et \(f : G \to K\) morphisme non trivial (i.e. \(\text{Im} f \neq \{e\}\)), alors \(f\) injective.

---

**Prop:** Soit \(H \subset G\) sous-groupe d'indice 2, i.e. \(|G/H| = 2\). Alors \(H \trianglelefteq G\).

**Preuve:** Soit \(g \in G\), \(g \notin H\), alors \(gH \neq H\)

Alors \(G/H = \{H, gH\}\), et \(G = H \sqcup gH\)

\(\sqcup\) : réunion disjointe, i.e réunion de 2 parties d'intersection \(\emptyset\)

De même, avec les classes   droite

\(G = H \sqcup Hg\), d'où \(gH = Hg\)

Ceci vrai \(\forall g \in G\), d'où \(H \trianglelefteq G\).

---

# 5. Action d'un groupe sur un ensemble

\( X \) ensemble, \( \mathcal{G}(X) = \{ f : X \to X \mid f \text{ bijection} \} \)

**Def:** On dit qu'un groupe \( G \) opère (ou agit) sur \( X \) si on a un morphisme de groupes
\[ \varphi : G \to \mathcal{G}(X) \]
notation \( \varphi(g) : \begin{aligned} X &\to X \\ x &\mapsto g \cdot x \end{aligned} \)

Autrement dit: on a une application
\[ G \times X \to X \]
\[ (g, x) \mapsto g \cdot x \]
telle que:
1) \( \forall g, g' \in G , \forall x \in X \quad g \cdot (g' \cdot x) = (gg') \cdot x \)
2) \( \forall x \in X \quad e \cdot x = x \)

**Def:** 1) On dit que l'action est fidèle si \( \varphi \) est injective.
2) On dit que l'action est transitive si:
\[ \forall x, y \in X , \exists g \in G \text{ tel que } g \cdot x = y \]

**Def:** Soit \( G \) agissant sur \( X \), et \( x \in X \)
L'orbite de \( x \)
\[ O(x) = \{ g \cdot x , g \in G \} \]
\[ = G \cdot x \]

---

**Rem** : On a sur \(X\) une relation d'équivalence
pour \(x, y \in X \quad x \mathcal{R} y \iff \exists g \in G \;/\; y = g \cdot x\)
les orbites sont les classes d'équivalence.
Ainsi : les orbites distinctes sont disjointes, et elles forment une partition de \(X\).

**Rem** une action est transitive \(\iff\) il y a une seule orbite.

**Déf** Soit \(x \in X\). le stabilisateur de \(x\)
\(\text{Stab}(x) = \{ g \in G ; g \cdot x = x \}\)
(aussi noté \(G_x\))
C'est un sous-groupe de \(G\)

### Description de l'orbite en terme du stabilisateur
**Prop:** Soit \(x \in X\). L'application
\[
\begin{aligned}
G / \text{Stab}(x) &\longrightarrow \mathcal{O}(x) \\
g \cdot \text{Stab}(x) &\longmapsto g \cdot x
\end{aligned}
\]
est bijective

**Preuve**
Application bien définie :
\(g \cdot \text{Stab}(x) = g' \cdot \text{Stab}(x) \implies g \cdot x = g' \cdot x\)
Mais \(g \cdot \text{Stab}(x) = g' \cdot \text{Stab}(x) \implies \exists h \in \text{Stab}(x) \;/\; g = g' h\)
\(g \cdot x = g' \cdot (h \cdot x) = g' \cdot x\)

---

L'application est surjective

Injective : si
$$
\begin{aligned}
g \cdot x &= g' \cdot x \\
\iff g'^{-1}(g \cdot x) &= (g'^{-1}g) \cdot x \\
\iff g'^{-1}g &\in \operatorname{Stab}(x) \\
&\qquad \qquad g \operatorname{Stab}(x) = g' \operatorname{Stab}(x)
\end{aligned}
$$

<u>Corollaire</u> Si $G$ est fini, alors le cardinal
de chaque orbite divise $\operatorname{Card}(G)$
$$|O(x)| \mid |G|$$