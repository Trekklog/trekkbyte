## trekkbyte V1.0 `Digital Storage Converter`

>>****Conversions you can do:****

>  Bits (bit)
>- [x] b -   bit
>- [x] kbit `>` kilobit
>- [x] Mbit `>` megabit
>- [x] Gbit `>` gigabit
>- [x] Tbit `>` terabit
>- [x] Pbit `>` petabit
>- [x] Ebit `>` exabit
>- [x] Zbit `>` zettabit
>- [x] Ybit `>` yottabit
>- [x] Kibit `>` kibibit
>- [x] Mibit `>` mebibit
>- [x] Gibit `>` gibibit
>- [x] Tibit `>` tebibit
>- [x] Pibit `>` pebibit
>- [x] Eibit `>` exbibit
>- [x] Zibit `>` zebibit
>- [x] Yibit `>` yobibit

>  Bytes (B)
>- [x] B `>` byte
>- [x] kB `>` kilobyte
>- [x] MB `>` megabyte
>- [x] GB `>` gigabyte
>- [x] TB `>` terabyte
>- [x] PB `>` petabyte
>- [x] EB `>` exabyte
>- [x] ZB `>` zettabyte
>- [x] YB `>` yottabyte
>- [x] KiB `>` kibibyte
>- [x] MiB `>` mebibyte
>- [x] GiB `>` gibibyte
>- [x] TiB `>` tebibyte
>- [x] PiB `>` pebibyte
>- [x] EiB `>` exbibyte
>- [x] ZiB `>` zebibyte
>- [x] YiB `>` yobibyte
___
>>****Usage:****
	
> Console:
	
```javascript
λ npm i trekkbyte
```

>JavaScript file:

```javascript
import {trekkbyte} from trekkbyte
```

```javascript
// trekkbyte(value, from, to)
const converted = trekkbyte(2, 'GiB', 'MiB')
console.log(converted)
```
>Console:

```javascript
λ { value: 2, from: 'gibibyte', to: 'mebibyte', converted: 2048 }
```

___

>> ****Examples:****

```javascript
// converted values
trekkbyte(3.4, "MB", 'Kibit') // { ..., converted: 26562.5 }
trekkbyte(44, "b", 'B') // { ..., converted: 5.5 }
trekkbyte(0.04, "TB", 'GiB') // { ..., converted: 37.25290298461914 }
trekkbyte(28716, "Mibit", 'MiB') // { ..., converted: 3589.5 }

// get all storage values in a object
trekkbyte.trekkbyteList() //  {b: { storage: 0.125, name: 'bit', ... }}

```


>> ****ML****

010100200300203004004050060000700007008080

>> ****Else:****

>- No dependencies.