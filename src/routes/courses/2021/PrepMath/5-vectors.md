---
title: Vettori
---

<script>
	import Definition from "$lib/envs/Definition.svelte";
	import Math from "$lib/envs/Math.svelte";
	import Img from "$lib/objs/Img.svelte";
</script>

> Un vettore è un oggetto che ruota come un vettore
>
> -- R.B.

La citazione sopra è di un mio professore, e per quanto apparentemente banale
è piuttosto profonda.

Non è connessa al punto di vista tipico sui vettori, ma coglie il concetto
principale che la fisica vuole codificare in questi oggetti.

## Cosa è un vettore?

Delle risposte possibili alla domanda "cosa è un vettore?" possono essere:

1. è una freccia
2. è un oggetto con modulo, direzione e punto di applicazione
3. è un oggetto con delle componenti
4. è un oggetto che si somma (e si può riscalare)

Tutte queste definizioni sono in qualche modo interessanti, e in qualche misura
corrette.

La **prima**, per quanto naïve, in realtà è simile alla citazione: descrive un
"vettore" per analogia con un oggetto più vicino alla realtà fisica, per quanto
astratto. E' un po' insoddisfacente perché a livello formale non esplicita quali
siano effettivamente le proprietà.

La **seconda** è una tipica definizione da libro di testo, vera e con una
caratteristica importante in più rispetto alle altre (il punto di applicazione).

La **terza** è una definizione pratica, definisce il vettore come una collezione di
numeri: i numeri hanno delle proprietà note, per cui a questo punto si può
sviluppare con un linguaggio formale delle proprietà per i vettori, basandosi su
quelle dei numeri.

La **quarta** è la definizione che si incontra ad algebra lineare, e definisce in
modo molto generale e preciso le proprietà formali dei vettori, da cui tutta la
teoria (l'algebra lineare appunto) viene derivata. E' la struttura di base dello
spazio (l'insieme dei vettori) ha in più rispetto a un generico insieme (e
infatti viene detto "spazio vettoriale").

Tutte queste definizioni non colgono però quello che era il punto della
citazione (a meno della prima, che però sfrutta un'analogia e sposta il problema
nel definire "cos'è una freccia?").

Un'altra definizione può essere:

5. un vettore è un oggetto che trasforma in un modo specifico sotto le
   trasformazioni dello spazio fisico

Questa definizione (volutamente vaga) non dice cos'è un vettore descrivendo la
sua struttura, ma piuttosto come si comporta in un certo contesto.

Quest'idea si applica molto bene a diverse grandezze fisiche. In particolare:

- una grandezza **scalare** è una grandezza che non muta la sua rappresentazione
  quando ruotate il vostro riferimento (come ad esempio la temperatura)
- una grandezza **vettoriale** invece ha ottiene componenti differenti a seguito
  di una rotazione (come la velocità)

<Img alt="vectors and scalars quantities" src="/2021-prepmath/vectors-scalars.png"/>

In realtà adesso facciamo un passo indietro, e ci fermiamo agli oggetti che si
sommano (cioè i vettori dell'algebra lineare), che sono gli elementi di partenza
per definire gli oggetti che trasformano.

*Per il futuro: lo studio delle proprietà dei vettori sotto (un **gruppo** di)
trasformazioni prende il nome di **teoria delle rappresentazioni**, ed è fondata
sull'algebra lineare (invece la nota a proposito del punto di applicazione ha
a che fare con il concetto di **varietà differenziale** e **fibrato tangente**).
Sono tutti concetti avanzati che non riguardano i corsi di fisica e matematica
del primo anno, ma riguardano le idee che stanno dietro, anche a partire dalla
meccanica classica.*

### Rappresentazione grafica

Come detto sopra, tutte le definizioni sono in qualche modo utili, e soprattutto
avere una rappresentazione grafica attraverso cui visualizzare i concetti è uno
strumento utile e tanto più potente quanto più i concetti sono astratti.

<Img alt="arrow" src="/2021-prepmath/vectors-arrow.png"/>

E' utile quindi considerare un vettore come una freccia in uno spazio (per il
momento nel piano) con le seguenti proprietà:

- **modulo**: un numero positivo (o nullo) che rappresenta la lunghezza della
  freccia, cioè un elemento di $\reals^+_0$
- **direzione**: una direzione nello spazio, per cui una semiretta o un punto
  sulla [sfera unitaria $S^d$](https://en.wikipedia.org/wiki/N-sphere)
- **punto di applicazione**: un punto dello spazio fisico (nel caso del piano
  un punto di $\reals^2$, in caso di spazio piatto/non vincolato $\reals^d$),
  che d'ora in avanti non verrà più menzionato (ma chi farà *Relatività
  Generale* scoprirà essere fondamentale)

## Vettori che si sommano

Torniamo alla definizione 4, cioè ai vettori come oggetti che si sommano e si
riscalano.

### Prodotto **per** scalare

Cosa significa riscalare un vettore? Il nome tecnico è *moltiplicazione per
scalare*, ed è un'operazione:

<Math display latex="\cdot : \mathbb{'{'}K{'}'} \times V \to V"/>

dove $V$ è l'insieme dei vettori, e <Math latex="\mathbb{'{'}K{'}'}"/> un
*campo* di numeri, per noi i numeri reali $\reals$ (ma potrebbero essere,
e saranno, anche i numeri complessi $\Complex$).

Che aspetto ha graficamente quest'operazione?

<Img alt="scale" src="/2021-prepmath/vectors-scale.png"/>

che in parole possiamo descrivere come:

- dati un vettore $\vec v$ e un numero $\alpha$
- moltiplica il modulo di $\vec v$ per il numero $\alpha$
- mantieni la stessa direzione

e in questo modo si ottiene un nuovo vettore:

$$
\vec w =  \alpha \cdot \vec v
$$

### Somma di vettori

L'altra operazione richiesta dalla definizione 4 è la somma, quindi bisogna
capire come definire la somma con il modello di vettori che è stato usato fin
qui: i vettori della definizione 2.

La somma è un'operazione che a due vettori ne associa un terzo, quindi una
funzione:

$$
+ : V \times V \to V
$$

Il modo per farlo è la cosiddetta **regola del parallelogramma**.

<Img alt="scale" src="/2021-prepmath/vectors-sum.png"/>

Che corrisponde a concatenare i vettori (la punta di uno con la coda
dell'altro).

In parole si può dire che:

- dati due vettori $\vec v$ e $\vec w$
- si ottiene un nuovo vettore somma $\vec u = \vec v + \vec w$ che ha per modulo
  la lunghezza della diagonale del parallelogramma costruito sui due vettori di
  partenza
- e come direzione la direzione della diagonale

(si può pensare anche come la **regola del triangolo**, più che del
parallelogramma: dati due lati ne ottenete il terzo).

### Esempi

Ogni cosa che può essere moltiplicata per uno scalare e sommata è quindi un
vettore:

- le matrici sono vettori
- i polinomi sono vettori
- le funzioni sono vettori
- le successioni sono (funzioni e quindi) vettori
- ...

### Componenti

Ogni vettore (in dimensione finita) può essere decomposto in componenti (lungo
una certa base, cioè degli assi).
Questo corrisponde a usare i vettori che sono stati introdotti fin qui
(definizione 4) in un linguaggio che è più affine alla definizione 3 (si noti
appunto che funziona bene con un numero finito di componenti, ma non con *spazi
di dimensione infinita*).

<Img alt="components" src="/2021-prepmath/vectors-components.png" align="left"/>

Decomporre in componenti corrisponde a prendere le proiezioni su un insieme di
assi di riferimento. In un piano ad esempio questi assi possono essere le
ordinate e le ascisse.

In questo modo le componenti diventano un concetto familiari: sono le
*coordinate* del punto indicato dal vettore quando applicato nell'origine!

Riconsiderando il *prodotto per scalare* in questo linguaggio, si ottiene che
dato un vettore $\vec v  = (v_x, v_y)$ si ottiene:

<Math display latex="\vec w = \alpha \vec v = \alpha \begin{'{'}pmatrix{'}'} v_x \\
v_y \end{'{'}pmatrix{'}'} = \begin{'{'}pmatrix{'}'} \alpha v_x \\
\alpha v_y \end{'{'}pmatrix{'}'}"/>

Riconsiderando anche la *somma di vettori* si ottiene:
<Math display latex="\vec u = \vec v + \vec w = \begin{'{'}pmatrix{'}'} v_x \\
v_y \end{'{'}pmatrix{'}'} + \begin{'{'}pmatrix{'}'} w_x \\
w_y \end{'{'}pmatrix{'}'} = \begin{'{'}pmatrix{'}'} v_x + w_x \\
v_y + w_y \end{'{'}pmatrix{'}'} = \begin{'{'}pmatrix{'}'} u_x \\
u_y \end{'{'}pmatrix{'}'}"/>

E quindi le componenti della somma si ottengono sommando le singole componenti
degli addendi.

## Prodotto scalare

Il *prodotto scalare* è diverso dal *prodotto **per** uno scalare*, infatti il
secondo era un'operazione da $\reals \times V \to V$, mentre questo è:

$$
\cdot : V \times V \to \reals
$$

Il prodotto scalare esiste per vettori di qualunque dimensione (e ne esisteranno
più d'uno, ma per ora noi usiamo quello canonico).

In particolare in 2D il prodotto scalare di due vettori $\vec v$ e $\vec w$
corrisponde al *prodotto dei moduli dei due vettori per il coseno dell'angolo
compreso*, cioè:

<Math display latex="\vec v \cdot \vec w = |\vec v||\vec w| \text{'{'}cos{'}'}(\alpha)"/>

### 3D (e più)

La definizione che è stata data sopra è semplice in due dimensioni, ma
è altrettanto valida in qualunque numero di dimensioni: due vettori infatti sono
come i due lati di un triangolo (il punto di applicazione e i due punti di
arrivo delle frecce), perciò individuano un unico piano in qualunque numero di
dimensioni.

Per cui in dimensione maggiore di 2 la ricetta è la seguente:
- si individua il piano che contiene i due vettori
- si applica la definizione di prodotto scalare all'interno del piano

Dato che il risultato è un numero reale (uno scalare) non ha alcuna reminiscenza
del numero di dimensioni di partenza.

### Componenti

Scrivendo i due vettori in componenti si può ottenere una definizione
particolarmente semplice del prodotto scalare, che corrisponde esattamente alla
precedente, cioè:

$$
\vec v \cdot \vec w = \sum_i v_i w_i = v_x w_x + v_y w_y + \dots
$$

Questa operazione si può scrivere in modo più esplicito usando i vettori:

<Math display latex="\begin{'{'}pmatrix{'}'} v_x & v_y
& v_z\end{'{'}pmatrix{'}'}  \begin{'{'}pmatrix{'}'} w_x \\ w_y
\\ w_z\end{'{'}pmatrix{'}'} = \begin{'{'}pmatrix{'}'} v_x & v_y
& v_z\end{'{'}pmatrix{'}'}  \begin{'{'}pmatrix{'}'} 1 & 0 & 0 \\ 0 & 1 & 0 \\
0 & 0 & 1\end{'{'}pmatrix{'}'} \begin{'{'}pmatrix{'}'} w_x \\ w_y
\\ w_z\end{'{'}pmatrix{'}'}"/>

La matrice identità che compare **è** il prodotto canonico (si possono scegliere
altri prodotti usando una matrice diversa, ammesso che abbia certe proprietà).

*Nota: E' possibile usare questa come definizione del prodotto scalare, e definire 
il <Math latex="\text{'{'}cos{'}'}(\alpha)"/> di conseguenza.*

### Proprietà

Una proprietà fondamentale del prodotto scalare è che né le rotazioni né le
simmetrie cambiano il valore del prodotto, dato che non cambiano né il valore
dei moduli né l'angolo compreso (o meglio il suo coseno).

## Prodotto vettoriale

$$
\times : V \times V \to V
$$

Il prodotto vettoriale esiste solo in $3$ dimensioni, né più né meno.
Intuitivamente il motivo è che rappresenta un'*area*, e in 3D a ogni area si può
associare un vettore (modulo pari alla superficie, e direzione ortogonale
all'area).

### Componenti


<!-- vim: set spelllang=it: -->
