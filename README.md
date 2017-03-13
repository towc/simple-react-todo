# simple-react-todo
sharpening react with a simple todo. Code is very basic and very wrong, please tell me why though

# running
simply clone and `npm run build` then `npm run start`. Obviously, `&&` and `; and` notation works, depending on your shell. Once it runs, go to `localhost` in the browser. You may have to allow node to run on port 80: [here's how](http://stackoverflow.com/a/23281401/3161092)

# usage
you can change title of the app, or name and description of each todo by simply clicking on it. Ticking is equivalent to removing. Once you have something you want to save, just click `save` at the bottom, and you'll find that you're selecting a string right above the button, which is simply a JSON representation of what you currently have.

You can use that string in various ways. Probably the easiest is to keep it somewhere in your laptop/device, then copy it back in next time you want it, and tap/click `load`. The other way is to add it as a hash: `http://localhost/#{"name":"learn JavaScript","todos":[{"name":"conditionals","desc":"if, ==="},{"name":"loops","desc":"for, while"},{"name":"functions","desc":"function(), ()=>{}"},{"name":"abstractProxyFactories","desc":"just messing with you"}]}`
