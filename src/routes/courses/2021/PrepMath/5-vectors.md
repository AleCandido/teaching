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
è estremamente profonda.

Non è connessa al punto di vista tipico sui vettori, ma coglie il concetto per
che la fisica vuole codificare in questi oggetti.

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

che in parole possiamo dire:

- dati un vettore $\vec v$ e un numero $\alpha$
- moltiplica il modulo di $\vec v$ per il numero $\alpha$
- mantieni la stessa direzione

e in questo modo si ottiene un nuovo vettore:

$$
\vec w =  \alpha \cdot \vec v
$$

### Somma di vettori

### Componenti

## Prodotto scalare


$$
\cdot : V \times V \to \reals
$$

Il prodotto scalare esiste per vettori di qualunque dimensione (e ne esisteranno
più d'uno, ma per ora noi usiamo quello canonico).

### 3D

## Prodotto vettoriale

$$
\times : V \times V \to V
$$

Il prodotto vettoriale esiste solo in $3$ dimensioni, né meno né più.
Intuitivamente il motivo è che rappresenta un'*area*, e in 3D a ogni area si può
associare un vettore (modulo pari alla superficie, e direzione ortogonale
all'area).

<!-- vim: set spelllang=it: -->
