an example how scully isn't generating any route

this project has two lazy loaded module

`home` and `privacy`

just run

```
npm i
npm run build
npx scully
```

according to the documentation it's the minimum setup you need to be able run scully, but it's not true

![scully can't find all the route](images\Code_PDU7fEHJkl.png)

as you can see there is no folder for the `privacy` and `home`

I tired to route `extraRoute` but didn't help
