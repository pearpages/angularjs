# Big Picture

## Angular Arhitecture

Angular is an HTML Compiler.

When any event is produced starts a **Digest** cycle and compares the values with **Dirty Checking** to see if it has to re-render or not.

## External Events

You either build directives or manually trigger the digest cycle.

## Performance Issues

Most of the time due of too many bindings -> Use Fewer Bindings! or Use ONe time Bindings.

Very large code bases:

- minimize
- concatenate
- gzip

or

- lazy loading

