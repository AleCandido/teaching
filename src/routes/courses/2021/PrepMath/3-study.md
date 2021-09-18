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

<Img alt="intersections" src="/2021-prepmath/study-intersections.png"/>

## Segno

<Img alt="discontinuities" src="/2021-prepmath/study-discontinuity.png"/>

## Limiti

Discontinuità

<Img alt="asymptotes" src="/2021-prepmath/study-asymptotes.png"/>

<Img style="width: 20rem" alt="gandalf" src="/2021-prepmath/study-gandalf.png"
align="right"/>

## Derivata prima

<Img alt="derivative discontinuities" src="/2021-prepmath/study-dx-discontinuity.png"/>

## Derivata seconda

max $\neq$ min

<Img alt="derivatives signs" src="/2021-prepmath/study-derivatives.png"/>

<!-- vim: set spelllang=it: -->
