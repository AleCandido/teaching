---
title: Integrali
---

<script>
	import Definition from "$lib/envs/Definition.svelte";
	import Math from "$lib/envs/Math.svelte";
	import Img from "$lib/objs/Img.svelte";
</script>

Un'altra informazione importante che si puo' estrarre da una funzione e' legata
all'area tra il grafico della curva e l'asse delle $x$.

L'area in questione e' detta **integrale della funzione**, e ha un notevole
interesse anche fisica.
Nel caso di una funzione a gradine (tipo un	istogramma) l'integrale corrisponde
alla somma dei valori della funzione, e in generale e' questa l'idea (solo per
dei gradini infinitesimali).

## Integrali definiti

Come detto sopra, l'idea dietro un **integrale definito** e' quella di trovare
l'area delimitata dalla funzione e dall'asse delle $x$.

Per fare questo si puo' approssimare la funzione con dei gradini e sommarne le
aree:

- approssimando la funzione con dei gradini sempre piu' grandi della funzione
	e sommando l'altezza dei gradini moltiplicata per la loro larghezza,
	e prendendo il limite per la larghezza degli intervalli che va a $0$, si
	ottiene l'**integrale superiore**
- stessa cosa approssimando la funzione con dei gradini sempre piu' piccoli
	della funzione si ottiene l'**integrale inferiore**

<Img alt="rectangles" src="/2021-prepmath/int-rect.png"/>

<Definition title="Integrale Definito">

Quando l'integrale superiore e inferiore esistono e coincidono, la funzione si
dice **integrabile** e il valore dei due si chiama **integrale** della funzione,
e si scrive

$$
\int_a^b f(x) \dd x
$$

Dove $a$ e $b$ sono gli estremi dell'intervallo su cui si integra.

</Definition>

Un integrale definito e' sempre definito su un intervallo definito, e per
definire un intervallo illimitato (su uno o entrambi gli estremi) e' sempre
necessaria una procedura di limite ([integrazione alla
Riemann](https://it.wikipedia.org/wiki/Integrale_di_Riemann)).

<Img alt="definition" src="/2021-prepmath/int-def.png"/>

Inoltre il segno dell'integrale dipende da:

- l'ordinamento degli estremi: se $a \leq b$ allora si procede come sopra,
	altrimenti si cambia segno e si invertono gli estremi:

$$
\int_a^b f(x) \dd x = -\int_b^a f(x) \dd x
$$

- il segno della funzione: la formula e' "base per altezza", dove l'altezza e'
	il valore della funzione, incluso il segno, per cui se la funzione e' negativa
	allora anche l'area e' negativa

<Img alt="area with sign" src="/2021-prepmath/int-sign.png"/>

## Integrali indefiniti

<Definition title="Primitiva">

La **primitiva** di una funzione $f$ e' una funzione $F$, t.c.:

<Math display latex="\dx F = f"/>

e si scrive:

$$
\int f ~\dd x = F
$$

(si noti l'assenza degli estremi d'integrazione)

</Definition>

La primitiva di una funzione e' quindi l'operazione inversa di una derivata.
Infatti la derivata e' un'operazione che associa a ogni funzione (derivabile)
un'altra funzione (la sua derivata), quindi e' una funzione dall'insieme delle
funzioni derivabili all'insieme delle funzioni.

<Img alt="primitive definition" src="/2021-prepmath/int-dx.png"/>

In realta' la derivazione non e' una funzione iniettiva, per cui non e'
strettamente invertibile, e infatti la primitiva non e' unica.

Il motivo e' che la derivata di ogni costante e' nulla, quindi la primitiva e'
unica a meno di una costante.

<Img alt="multiple primitives" src="/2021-prepmath/int-prim.png"/>

## Teorema fondamentale del calcolo integrale

Perche' l'area sotto il grafico e l'operazione inversa di una derivata si
chiamano entrambi ***integrale*** e si indicano entrambi con $\int$?

La risposta e' che le due cose sono associate, e' il risultato e' noto come
[teorema fondamentale del calcolo
integrale](https://it.wikipedia.org/wiki/Teorema_fondamentale_del_calcolo_integrale).


<Definition title="Teorema fondamentale del calcolo integrale">

L'integrale **definito** si puo' calcolare come la differenza della
**primitiva** della funzione fra l'estremo superiore dell'intervallo e quello
inferiore:

$$
\int_a^b f(x) = F(b) - F(a)
$$

con $F$ una primitiva di $f$, cioe' $F = \int f \dd x$.

</Definition>

Ma se la primitiva non e' unica come scegliere quale usare?

La risposta e' che e' irrilevante, infatti nella formula compare la differenza
della primitiva $F$ in due punti, percio' qualunque costante si cancella, e non
c'e' alcuna ambiguita'.

## Primitive di Funzioni elementari

Indicando con $C \in \reals$ la costante di integrazione (l'ambiguita' sulla
primitiva), valgono le seguenti regole di integrazione per le funzioni
elementari, e si trovano applicando la definizione e le regole di derivazione
note:

- potenze $x^\alpha \quad \alpha \neq 1$

<Math display latex="\int x^\alpha \dd x = \frac{'{'}x^{'{'}\alpha
+ 1{'}'}{'}'}{'{'}\alpha + 1{'}'} + C"/>

- $1/x$

<Math display latex="\int \frac 1 x \dd x = \log(x) + C"/>

- $e^x$

<Math display latex="\int e^x \dd x = e^x + C"/>

- $\sin(x)$

<Math display latex="\int \sin(x) \dd x = -\cos(x) + C"/>

- $\cos(x)$

<Math display latex="\int \cos(x) \dd x = \sin(x) + C"/>

- <Math latex="\frac 1 {'{'}1 + x^2{'}'}"/> 

<Math display latex="\int \frac 1 {'{'}1 + x^2{'}'} \dd x = \arctan(x) + C"/>


## Regole di integrazione

### Per sostituzione

### Per parti

Deriva dalla regola di derivazione del prodotto di due funzioni:

<Math display latex="\dx{'{'}(f \cdot g){'}'} = \dx f \cdot g + f \cdot \dx
g \implies \dx f \cdot g = \dx{'{'}(f \cdot g){'}'} - f \cdot \dx g"/>

e integrando a destra e sinistra si ottiene

$$
\int_a^b \dx f \cdot g = f \cdot g \Big|_a^b - \int_a^b f \cdot \dx g
$$


<!-- vim: set spelllang=it: -->
