---
title: Studi di Funzione
---

<script>
	import Definition from "$lib/envs/Definition.svelte";
	import Math from "$lib/envs/Math.svelte";
	import Img from "$lib/objs/Img.svelte";
</script>

In uno studio di funzione si analizzano sistematicamente le proprietà di una
funzione.
Funzioni diverse hanno proprietà differenti, e quindi è interessante adattare
conseguentemente l'analisi, ma uno schema generale è il seguente:

- dominio
- parità
- intersezione con gli assi
- segno
- limiti (*"bordi del dominio"*)
- derivata prima (*zeri*: punti stazionari, *segno*: andamento)
- derivata seconda (*zeri*: punti di flesso, *segno*: curvatura)

## Dominio

Poiché le funzioni che studiamo sono funzioni reali, il **dominio** sarà sempre un
sottoinsieme di $\reals$

*esempio*: <Math latex="f(x) = x \sqrt{'{'}1-x^2{'}'}"/>

Il dominio è $D = [-1,1]$, ed è ristretto dalla condizione che la radice sia
valutata solo su argomenti positivi.

<Img alt="domain" src="/2021-prepmath/study-domain.png"/>

## Parità

La **parità** classifica le funzioni in base alle loro proprietà di
trasformazioni per simmetrie rispetto all'asse $y$, cioè per ribaltamenti
dell'asse $x$:

$$
x \to -x
$$

- una funzione **pari** è una funzione che va in se stessa sotto simmetria, cioè
	$f(x) = f(-x)$ (e quindi sono simmetriche)
- una funzione **dispari** è una funzione che cambia segno invece, $f(x)
	= -f(-x)$
- non tutte le funzioni hanno una parità definita

*esempi*:

- tutte le funzioni polinomiali contenenti solo monomi pari sono pari, $f(x)
	= 4 x^2 + 1$
- tutte le funzioni polinomiali contenenti solo monomi dispari sono dispari,
	$g(x) = x^5 -6 x^3 + 7 x$
- se contiene sia monomi dispari che pari allora non ha parità definita, $f(x) + g(x)$

## Intersezioni con gli assi

Al fine di classificare il comportamento di una funzione è utile studiare

- l'intersezione con l'asse $y$
- la/le possibile/i intersezione/i con l'asse $x$

<Img alt="intersections" src="/2021-prepmath/study-intersections.png"/>

Prima di continuare è bene fare un appunto:

<Definition title="Traslazioni">

E' importante notare che gli assi $x$ e $y$ sono in prima approssimazione
convenzionali, nel senso che una funzione o la stessa traslata hanno
essenzialmente le stesse proprietà (e.g. le derivate non tengono conto di alcuna
traslazione verticale).

In alcuni casi può esserci invece una scelta non arbitraria, per esempio:
- per una distribuzione di probabilità la posizione verticale non è arbitraria:
	$0$ significa che quell'evento è impossibile, e la funzione è sempre non
	negativa
- per una funzione che dipende dal raggio la posizione orizzontale è fissa: la
	funzione in particolare è definita solo per $x \geq 0$ (e.g. l'attrazione
	gravitazionale fra due particelle)

</Definition>

Spesso il fatto che la posizione orizzontale/verticale abbia un significato
specifico è legato al dominio/codominio della funzione: se il uno dei due non
corrisponde all'intera retta $\reals$, ma è una semiretta (e.g. solo valori
positivi per $x$ o $y$) o un intervallo, allora i bordi di questo insieme (la
"frontiera") assumono un significato specifico.

### Intersezione con l'asse verticale

Questa in qualche modo non è che un punto di riferimento il più delle volte,
infatti se non c'è un significato intrinseco per la posizione orizzontale
l'intersezione con l'asse $y$ non è altro che il valore della funzione per
$x=0$, cioè $f(0)$ (che in generale non è più rilevante del valore della
funzione in qualunque altro punto).

In alcuni casi invece non è affatto così: tornando all'esempio dell'attrazione
gravitazionale per $x \to 0$ c'è un asintoto, con un significato fisico ben
preciso.

### Intersezione con l'asse orizzontale

L'intersezione l'asse $x$ invece è diversa: può esserci, non esserci,
o essercene molte. Corrisponde agli **zeri della funzione**, anche detti "nodi",
che spesso caratterizzano il comportamento della funzione.

Sono le soluzioni dell'equazione:

$$
f(x) = 0
$$

Ad esempio: se $f$ è una funzione polinomiale di secondo grado, i suoi zeri sono
le soluzioni dell'equazione di secondo grado associata.

Come vedremo sotto, c'è un esempio principe in cui la posizione verticale non
è affatto convenzionale, e gli zeri della funzione assumono un significato
intrinseco: le *derivate* di una funzione.

## Segno

Il segno è strettamente legato alle intersezioni con l'asse delle $x$:

- può essere "convenzionale" (vedi sopra) se le traslazioni verticali non
	assumono un significato particolare
- per una funzione continua ogni **cambio di segno** implica la presenza di uno
	**zero**

### Discontinuità

Non tutte le funzioni rilevanti sono continue, ma in generale lo sono a meno di
alcuni punti specifici, chiamati **discontinuità**.

<Img alt="discontinuities" src="/2021-prepmath/study-discontinuity.png"/>

Le discontinuità di una funzione (continua a meno di un insieme discreto di
punti) si classificano in tre categorie:

1. tipo **"salto"**: la funzione ha due diversi limiti da sinistra e destra
2. tipo **"asintoto"**: il limite della funzione da almeno uno dei due lati
	 è $\pm \infty$
3. tipo **"puntuale"** (in mancanza di nome migliore...): la funzione ha lo
	 stesso limite da destra e sinistra, che è diverso però dal valore della
	 funzione in quel punto

## Limiti

Già sopra si è parlato dei bordi del dominio come un qualcosa di intrinseco, che
vale la pena analizzare nel dettaglio.

In generale i bordi possono essere di più tipi:
- *esterni finiti*, quando la funzione è definita su un intervallo o una
	semiretta, si ha una frontiera sulla quale è utile studiare che valore e/o
	limite assume la funzione
- *esterni infiniti*, dato che $\reals$ è di per sé un insieme senza bordi, uno
	può non averne; in questo caso però è interessante studiare il comportamento
	della funzione all'infinito
- *interni*, è possibile che la funzione non sia definita su alcuni punti
	specifici, come nel caso delle discontinuità, e anche questi diventano punti
	interessanti su cui studiare il comportamento della funzione

### Asintoti

<Img alt="asymptotes" src="/2021-prepmath/study-asymptotes.png"/>

E' sempre interessante studiare quelle regioni in cui una funzione approssimi il
comportamento di una retta:

- nel caso del comportamento all'infinito si possono averi degli asintoti
	**orizzontali** (funzione tende a un limite finito) o **obliqui** (il limite
	della funzione è infinito, ma il rapporto con una retta approssima $1$)
- nel caso di discontinuità è possibile sviluppare degli asintoti **verticali**,
	quindi la funzione diverge in un punto finito

<Img style="width: 20rem" alt="gandalf" src="/2021-prepmath/study-gandalf.png"/>

## Derivata prima

Lo studio della derivata prima è interessante perché essendo legata alla
pendenza, il suo segno da un informazione sulla monotonia della funzione:

- derivata prima **positiva** $\to$ funzione localmente **crescente**
- derivata prima **negativa** $\to$ funzione localmente **decrescente**
- derivata prima **nulla** $\to$ **punto stazionario** (per la classificazione dei punti
	stazionari è utile studiare le derivate successive, per cui si veda più avanti
	a proposito della derivata seconda)

### Discontinuità

<Img alt="derivative discontinuities"
src="/2021-prepmath/study-dx-discontinuity.png" align="right"/>

Nel caso delle discontinuità della derivata prima la funzione assume un
comportamento specifico:

- una funzione con una **tangente verticale** avrà una derivata con discontinuità di
	tipo "asintoto", con lo stesso segno da entrambi i lati
- se invece la funzione forma una **cuspide** la discontinuità sarà sempre un
	asintoto, ma con segno opposto sui due lati
- se la funzione ha un **punto angoloso** la derivata avrà invece una
	discontinuità di tipo "salto", infatti la pendenza a destra e sinistra
	è differente

## Derivata seconda

La derivata seconda è legata alla curvatura della funzione, per cui è utile
studiarne il segno per individuare la concavità:

- se la derivata secondo è $\geq 0$ allora la funzione è "più che crescente",
	per cui giace al di sopra di ogni tangente (nell'intervallo in cui la derivata
	seconda rimane positiva), e quindi la funzione ha la concavità rivolta verso
	il basso
- simmetricamente, se la derivata seconda è $\leq 0$ la concavità è rivolta
	verso il basso

E' particolarmente utile nel caso dell'analisi dei punti stazionari:

- un punto con derivata prima nulla, ma derivata seconda positiva, è un
	**minimo locale**, perché è il punto con tangente orizzontale in una regione
	con concavità verso l'alto
- al contrario se la derivata seconda è negativa allora è un **massimo locale**
- se invece <Math latex="\frac{'{'} \dd^2 f {'}'}{'{'}\dd x^2 {'}'} = 0"/>
	allora è necessario analizzare le derivate successive per scoprire se si
	tratta di un massimo, un minimo (o nessuno dei due, e.g. una funzione
	crescente con una regione piatta)

<Img alt="derivatives signs" src="/2021-prepmath/study-derivatives.png"/>

<!-- vim: set spelllang=it: -->
