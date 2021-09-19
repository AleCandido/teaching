---
title: Integrali
---

<script>
	import Definition from "$lib/envs/Definition.svelte";
	import Math from "$lib/envs/Math.svelte";
	import Img from "$lib/objs/Img.svelte";
</script>

## Integrali definiti

<Img alt="rectangles" src="/2021-prepmath/int-rect.png"/>

<Img alt="definition" src="/2021-prepmath/int-def.png"/>

<Img alt="area with sign" src="/2021-prepmath/int-sign.png"/>

## Integrali indefiniti

<Img alt="primitive definition" src="/2021-prepmath/int-dx.png"/>

<Img alt="multiple primitives" src="/2021-prepmath/int-prim.png"/>

## Teorema fondamentale del calcolo integrale

[Wikipedia](https://it.wikipedia.org/wiki/Teorema_fondamentale_del_calcolo_integrale)

## Funzioni elementari

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
