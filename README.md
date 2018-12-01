## READ ME 

## INSTALL

```
git clone https://www.github.com/nicholasgriffen/tempo-server.git    
cd tempo-server    
npm install    
```

## CONFIGURE DB

```
echo "DATABASE_URL=postgres://localhost/tempo-server-dev"
createdb tempo-server-dev
```

## RUN 

```
NODE_ENV=development node index.jsjs
```
