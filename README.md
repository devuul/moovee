# ```moovee 🐮```
A (Node based) P2P cli tool to browse and play moovees 🐮

***Note:** All here is also on [YTS](https://yts.mx/)*

### License & Disclaimer
See [LICENSE.md](./LICENSE.md) &  [DISCLAIMER.md](./DISCLAIMER.md)

## Installing
``` bash
npm i moovee -g
```

*Option 2 : Clone & Install*
``` bash
# clone
git clone https://github.com/devuul/moovee/

# install globally
npm i ./moovee -g
```

## Usage
``` bash
# play whatever moovee that will be selected with vlc
moovee -p vlc
```

``` bash
# -l argument show the webtorrent output after closing media player 
moovee -p vlc -l
```

### Tools Used
- Webtorrent
- Prompts
- Axios
- Kleur

[See Dependencies](https://github.com/devuul/moovee/network/dependencies)

### Todo
- [ ] Refactoring ♻️  
- [ ] Error Handling 🐞  
- [x] Publish to npm 📦  
- [ ] Improvements?  

#### No moovee?
Well I think it's because they are 0 peers, so no peers no moovee 😞  
Webtorrent handles all the playing and streaming, you can throw in the `-l` argument to see what webtorrent is doing

### Contributing
Send a Pull Request matching the criteria: 
- Clear commit messages 🗨️ (what are you doing??)
- description (optional) 📝 (approach/how/why) 
- maybe some emojis? (optional) [Gitmoji 🍋](https://github.com/carloscuesta/gitmoji) (for fun)

*Well, criteria wont matter if all is good, I pull*
