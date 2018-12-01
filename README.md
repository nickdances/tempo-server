## Tempo

## install

```
git clone https://www.github.com/nicholasgriffen/tempo-server.git    
cd tempo-server    
npm install    
```

## configure postgresql database

```
echo "DATABASE_URL=postgres://localhost/tempo-server-dev" >> .env
createdb tempo-server-dev
```

## run

```
npm run dev // shorthand for NODE_ENV=development node index.js
```
