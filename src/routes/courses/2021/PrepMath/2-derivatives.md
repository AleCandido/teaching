---
title: Derivate
---

<script>
	import Definition from "$lib/envs/Definition.svelte";
	import Math from "$lib/envs/Math.svelte";
	import Img from "$lib/objs/Img.svelte";
</script>

<Img alt="slope" src="/2021-prepmath/dx.png" align="right"/>

La *derivata* e' un'operazione che dovrebbe risultare intuitiva dal punto di
vista fisico: immaginando una funzione che rappresenti l'altitudine di una
strada in base alla distanza percorsa in orizzontale, la derivata in ogni punto
non e' altro che la **pendenza** della strada che si sta percorrendo.

Dato che la pendenza cambia da punto a punto, la derivata e' a sua volta una
funzione, che associa ad ogni punto la pendenza in quel punto.

<Definition title="Derivata">

La **derivata** di una funzione $f: \reals \to \reals$ e' un'altra
funzione <Math latex="\dx f"/> definita come il *limite del rapporto
incrementale* in quel punto, cioè:

<Math display latex="\dx f(x) = \lim_{'{'}\Delta x \to 0{'}'} \frac{'{'}f(x
+ \Delta x) - f(x){'}'}{'{'}\Delta x{'}'}"/>

</Definition>

<Img alt="speed" src="/2021-prepmath/dxdt.png"/>

Un altro esempio tipico, sempre preso dalla fisica, e' il concetto di velocita'
istantanea: la velocita' media e' il rapporto fra lo spazio percorso in un certo
lasso di tempo e il tempo impiegato per percorrerlo.

Prendendo intervalli di tempo sempre più brevi, che cominciano tutti nello
stesso istante, si ottiene una progressione di velocita' convergenti ad un unico
valore, la velocita' istantanea.
Questa procedura di prendere il rapporto fra due quantita' progressivamente
sempre più piccole e' esattamente quello che nella definizione di *derivata* e'
stato chiamato *limite del rapporto incrementale*.

### Derivate di funzioni elementari

- **potenze**: $f(x) = x^\alpha$

<Math display latex="\dx f (x) = \alpha x^{'{'}\alpha - 1{'}'}"/>

<Img alt="power derivative" src="/2021-prepmath/dxpow.png"/>

- **esponenziale**: $f(x) = e^x$

<Math display latex="\dx f (x) = e^x"/>

e' il *punto fisso* della derivata!

- **logaritmo**: $f(x) = \log x$

<Math display latex="\dx f (x) = \frac 1 x"/>

- **funzioni trigonometriche**


<Math display latex="\dx{'{'} \sin {'}'} (x) = \cos (x)"/>
<Math display latex="\dx{'{'} \cos {'}'} (x) = -\sin (x)"/>
<Math display latex="\dx{'{'} \tan {'}'} (x) = \frac 1 {'{'} \cos^2 (x){'}'}"/>

<Img alt="sine derivative" src="/2021-prepmath/dxsin.png"/>

## Regole di derivazione

### Derivata di operazioni binarie $+$ $\times$ $\div$

- **somma**: la derivata e' un'operazione *lineare*, per cui commuta con la
	somma, cioe':

<Math display latex="\dx{'{}'}[f \pm g] (x) = \dx f (x) \pm \dx g (x)"/>

- **prodotto**: la derivata del prodotto di due funzioni e':

<Math display latex="\dx{'{}'}[f \cdot g] (x) = \left[\dx f \cdot g\right] (x)
+ \left[f \cdot \dx g\right] (x)"/>

<Img alt="not product derivative" src="/2021-prepmath/notdxprod.png"/>

Da questo segue semplicemente che se una delle due funzioni e' una costante,
allora la derivata commuta con il prodotto (*la derivata di una costante e'
nulla*):

<Math display latex="\dx{'{}'}[a \cdot f] (x) = a \dx f (x)"/>

Anche il fatto di commutare col prodotto di una costante e' parte della
*linearita'* della derivata (di più nel corso di algebra lineare, ma per questo
strano: *una funzione e' un vettore*)

- **rapporto**: la derivata del rapporto di due funzioni e':

<Math display latex="\dx{'{}'}[f / g]  (x) = \frac{'{'} \dx f g (x) - f \dx
g (x){'}'}{'{'} g (x)^2 {'}'} "/>

<Img alt="not ratio derivative" src="/2021-prepmath/notdxratio.png"/>

### Derivata di una funzione composta

<Definition title="Composizione">

La composizione $\circ$ di due funzioni, $f: B \to C$ e $g: A \to B$, e' data
dall'applicazione successiva delle due funzioni:

$$
f \circ g (x) = f \left( g(x) \right)
$$

</Definition>

Capita frequentemente di comporre funzioni, e quindi anche di dover derivare la
composizione, e per questo serve una regola specifica. Questa regola e' anche
chiamata *regola della catena* (in inglese: **chain rule**)

<Definition title="Chain Rule">

La derivata di una funzione **composta** si ottiene moltiplicando la derivata
delle due funzioni:

<Math display latex="\dx{'{}'}[f \circ g]  (x) = \left[ \dx f \circ g \right] (x) \cdot \dx
g (x)"/>

</Definition>

Vediamo un esempio notevole:

<Math display latex="\dx a^x= \ddx e^{'{'}x \log a {'}'} = \dv{'{'} e^y {'}'}
y (x \log a ) \dx{'{'} (x \log a) {'}'} = e^{'{'}x \log a {'}'} \log a = a^x
\log a"/>

Per cui come nel caso dell'esponenziale rimane in se stesso, stavolta a meno di
un fattore aggiuntivo.

## Derivate e Monotonia

<Img alt="max min derivative" src="/2021-prepmath/dxmaxmin.png" align="right"/>

La derivata prima e' associata alla pendenza della curva per cui:

- quando la pendenza e' **positiva** vuol dire che la curva sta crescendo, cioe'
	sale (nel verso positivo delle $x$), cioe' e' *localmente crescente*
- all'opposto, quando e' **negativa** la funzione e' *localmente decrescente*
- se la derivata e' **nulla** non sale ne' scende, per cui e' *localmente
	stazionaria*

<br class="m-10">

<Img alt="second derivative" src="/2021-prepmath/dx2.png" align="left"/>

Dato che la derivata di una funzione e' ancora una funzione, allora puo' essere
anch'essa derivata.

Procedendo in questo modo si ottiene la **derivata seconda**, che e' legata alla
curvatura della funzione.

Reiterando il procedimento si ottengono poi le derivate successive (terza,
quarta, ...)

<!-- vim: set spelllang=it: -->
