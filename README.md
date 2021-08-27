# Checkers

## Initial Logic

### Spot with piece is Clicked

1. Grab team of clicked spot
2. If team doesn't match current team, exit
3. If it is, set a state of 'clicked'
4. Calculate available spots to move to (diagonal)

### Empty spot is clicked
1. Check if spot with piece has been clicked
2. If not, exit
3. If a spot with a piece has been clicked, move that piece to that spot

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
