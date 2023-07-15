# Inversify-NestJS DI poc

a POC to showcase how our inversifyDI and NestJS DI can live side by side
and how we can expose container in inversify to nestjs.

how to play with it:

everything is exposed as Http Routes

`localhost:3000/transient` 
`localhost:3000/singelton`  
`localhost:3000/childContainer-childMethod`
`localhost:3000/childContainer-getConstant`
`localhost:3000/childContainer-getDynamic`

