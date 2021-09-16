---
title: Funzioni
---

<script>
	import Definition from "$lib/envs/Definition.svelte";
	import Img from "$lib/objs/Img.svelte";
</script>

Nota: *Dato che la tecnologia non mi supporta gli insiemi sono indicati con parentesi
quadre, anziché le solite parentesi graffe...*
<br>

## Definizione

All'inizio del '900 la matematica era già una disciplina abbastanza ampia, per
cui i matematici hanno iniziato a indagare le basi su cui essa era fondata.
Questo processo è stato chiamato ["crisi dei
fondamenti"](https://it.wikipedia.org/wiki/Crisi_dei_fondamenti_della_matematica),
in seguito al quale è stato proposto di definire l'intera matematica sul
concetto di insieme.

Per quanto interessante questo va oltre l'interesse di questo corso, ma
è interessante perché anche il concetto di **funzione** non solo è relativo agli
insiemi, ma la definizione stessa consiste in un insieme.



<Definition title="Prodotto Cartesiano">

Il prodotto cartesiano di due insiemi $A$ e $B$ è l'insieme $A \times B$ formato
dalle coppie di elementi, i.e.:

$$
A \times B = \left[ (a, b) | a \in A \land b \in B \right]
$$

</Definition>

Un generico sottoinsieme del prodotto cartesiano di due insiemi si dice
**relazione**.

Due tipi specifici di relazioni sono:

- le *relazioni di equivalenza*, che sono relazioni sul prodotto di un insieme
	con se stesso $A \times A$, e soddisfano le seguenti proprietà:
	1. *riflessività*: la "diagonale" è sempre inclusa, cioè tutti gli elementi di
		 $(a,a)$ sono inclusi
	2. *simmetria*: se $(a,b)$ è incluso, allora anche $(b,a)$
	3. *transitività*: se $(a,b)$ e $(b,c)$ sono inclusi, allora anche $(a,c)$

	Spesso si scrive una relazione di equivalenza con un simbolo, per cui se
	è $(a,b)$ è incluso allora si dice $a \sim b$. La relazione di equivalenza più
	nota è l'uguaglianza $=$.
- le *funzioni*, che per ogni elemento del primo insieme includono uno e una
	sola coppia che lo contiene

<Definition title="Funzione">

E' una *relazione* sul prodotto $A \times B$ tale che $\forall a \in A$ esiste
una e una sola coppia $(a,b)$, con $b \in B$

- l'insieme $A$ è detto **dominio** della funzione
- l'insieme $B$ è detto **codominio**

E si scrive $f: A \to B$, e per ogni coppia $(a,b)$ inclusa si scrive:

$$
f(a) = b
$$

o anche $f: a \mapsto b$.

</Definition>

<Img alt="function" src="/2021-prepmath/function.png"/>

Nella figura il dominio è l'insieme $D$, mentre il codominio è chiamato $C$.
Inoltre si chiama **immagine**:

- sia l'*elemento* corrispondente a un elemento del dominio, attraverso la
	funzione, e si dice "l'immagine dell'elemento $a$ è $b$"
- sia l'*insieme* delle immagini di qualunque sottoinsieme di elementi del
	dominio, e si dice "l'immagine dell'insieme $X$ è $Y$"

L'immagine dell'intero dominio è detta solamente **immagine**.

<Img alt="not-a-function" src="/2021-prepmath/not-a-function.png"/>

Nell'immagine precedente ci sono due esempi dove il dominio e il codominio sono
i numeri reali:

1. nel primo caso non è una funzione perché non tutti gli elementi del dominio
	 hanno un'immagine, ma lo diventa restringendo il dominio
2. nel secondo caso non è una funzione sia per il motivo precedente, sia poiché
	 ad alcuni punti sono associate due immagini

## Proprietà

<Definition title="Iniettiva">

Una funzione è **iniettiva** se ogni elemento del codominio ha *al più una
preimmagine*, cioè:

$$
x_1 \neq x_2 \implies f(x_1) \neq f(x_2)
$$

</Definition>

Graficamente il requisito corrisponde a richiedere che ogni punto del codominio
sia raggiunto da non più di una freccia.

<Img alt="injective function" src="/2021-prepmath/injective.png"/>

<Definition title="Suriettiva">

Una funzione è **suriettiva** (o *surgettiva*) se ogni elemento del codominio ha
*almeno una preimmagine*, cioè:

$$
\forall y \in C ~ \exists x \in D : f(x) = y
$$

</Definition>


<Img alt="surjective function" src="/2021-prepmath/surjective.png"/>

Anche in questo caso si può dare una rappresentazione grafica: corrisponde
a richiedere che ogni punto del codominio sia raggiunto da almeno una freccia.

<Img alt="surjective sets" src="/2021-prepmath/surjective-set.png"/>

<Definition title="Biunivoca">

Una funzione è **biunivoca** (o *bigettiva*) se è sia iniettiva che suriettiva,
cioè:
$$
\forall y \in C ~ \exists ! x \in D : f(x) = y
$$

</Definition>

Dato che in una funzione biunivoca:
- ogni elemento del codominio è coperto da una freccia ➡ (suriettività)
- ma non più di una freccia (iniettività)

si può partire da un qualunque elemento del codominio e seguire la freccia al
contrario ⬅.

<Img alt="bijective sets" src="/2021-prepmath/bijective.png"/>

<Definition title="Funzione Inversa">

L'**inversa** di una funzione $f: D \to C$ è la funzione $f^{-1}: C \to D$ tale
che:

$$
\forall y \in C ~ f^{-1}(y) = x \iff f(x) = y
$$

</Definition>


## Proprietà delle funzioni reali

Gli insiemi sono strutture molto generiche, nel senso che hanno davvero poche
proprietà.

Un insieme molto particolare, sicuramente familiare, è quello dei numeri reali
$\reals$, che è invece ricco di proprietà.
Sulla base di queste caratteristiche addizionali è possibile dare delle
definizioni aggiuntive anche per ulteriori categorie di funzioni.

<Definition title="Monotònia">

Una funzione è **monotòna** se:

- preserva l'ordine (funzione **crescente**)
$$
x_1 \geq x_2 \implies f(x_1) \geq f(x_2)
$$
- inverte l'ordine (funzione **decrescente**)
$$
x_1 \geq x_2 \implies f(x_1) \leq f(x_2)
$$

Rimuovendo l'uguaglianza ($\geq ~\to~ >$) si ottengono
rispettivamente la definizione di funzione **strettamente crescente**
e **strettamente decrescente**.

</Definition>

In particolare questa definizione si applica non solo alle funzioni $f: \reals
\to \reals$, ma a tutte le funzioni $f: A \to B$ in cui entrambi gli insiemi
[siano ordinati](https://it.wikipedia.org/wiki/Relazione_d%27ordine).

<Img alt="monotonicity" src="/2021-prepmath/monotonic.png"/>

**Osservazione:** se una funzione è strettamente monotona allora è iniettiva.

Un'altra proprietà dei numeri reali è quella di avere una "prossimità"
(formalmente in realtà una
[*distanza*](https://it.wikipedia.org/wiki/Spazio_metrico)) tra loro.
In base a questa relazione è possibile dare quindi la definizione di proprietà
locali, proprio perché la distanza ci dice cosa è *locale*, mentre in un insieme
generico tutti gli elementi sono equivalenti e non hanno relazione tra loro.


<Img alt="max-min-flex" src="/2021-prepmath/maxmin.png"/>

<Definition title="Massimo locale">

Si dice *massimo locale* per una funzione $f: D \to C$ un punto $w \in D$ tale
per cui esiste un intorno $I$ di $w$ in cui 
$$
\forall x \in I ~ f(x) \leq f(w)
$$

</Definition>

<Definition title="Minimo locale">

Nozione analoga alla precedente, ma:
$$
\forall x \in I ~ f(x) \geq f(w)
$$

</Definition>

In generale è sempre possibile definire massimi e minimi locali per una funzione
$f: A \to B$ se l'insieme di partenza $A$ ammette una nozione di
[località](https://it.wikipedia.org/wiki/Spazio_topologico) e l'insieme $B$ un
ordinamento.

Un massimo o minimo **globale** è invece un punto per cui le condizioni
precedenti valgono non per un intorno $I$, ma per tutto il dominio $D$.
Il massimo/minimo globale può *non esistere* (nel caso di un massimo/minimo
stretto se esiste è unico). 

<Img alt="max-mins" src="/2021-prepmath/maxmins.png"/>

Di massimi e minimi locali invece ne possono esistere *molti* per una stessa
funzione.

## Funzioni specifiche

Le seguenti classi di funzioni sono di particolare interesse fra le funzioni
reali:

- le [funzioni
	polinomiali](https://en.wikipedia.org/wiki/Polynomial#Polynomial_functions),
	sono funzioni ottenute definite sulla base di polinomi (non sono la stessa
	cosa dei polinomi, che invece sono oggetti formali), cioé sommando potenze
	della variabile moltiplicate per coefficienti reali
- le [funzioni razionali](https://en.wikipedia.org/wiki/Rational_function) si
	ottengono come rapporti fra funzioni polinomiali
- le [funzioni
	trigonometriche](https://en.wikipedia.org/wiki/Trigonometric_functions) sono
	funzioni legate agli angoli (oppure equivalentemente al cerchio o ai triangoli
	rettangoli), fra cui il $\sin$, $\cos$ e la $\tan$
- l'[esponenziale](https://en.wikipedia.org/wiki/Exponential_function) e il
	[logaritmo](https://en.wikipedia.org/wiki/Logarithm) (che è l'inversa) sono
	funzioni che hanno un ruolo speciale nell'analisi

Non è particolarmente utile fare una revisione di tutte le proprietà di queste
funzioni, ma una cosa che vale la pena sapere è che le ultime due categorie non
sono realmente distinte, ma connesse dalla [formula di
Eulero](https://en.wikipedia.org/wiki/Euler%27s_formula) (e quindi la
connessione è evidente solo quando vengono considerate come funzioni complesse).

<!-- vim: set spelllang=it: -->

