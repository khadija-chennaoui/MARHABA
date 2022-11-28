   ____ Docker Compose ____    
1_ Crée "dockerfile" de partie backend :

        FROM node:16
        WORKDIR /app
        COPY package.json .
        RUN npm install
        COPY . .
        EXPOSE 4000
        CMD ["node", "index.js"]

2_ Crée "dockerfile" de partie frontend :

        FROM node:16
        WORKDIR /app
        COPY package.json .
        RUN npm install
        COPY . .
        EXPOSE 3000
        CMD ["npm", "start"]

3_ pour crée une image de front : 

    docker build -t front .

4_ pour crée une image de backend : 

    docker bluid -t api .

5_ crée fichier : "docker-compose-yaml" pour buile les images  

6_ Run le programme par la commande : 

     docker-compose up -d

7_ pour effacer les images en utilise la commande : 

    docker system prune -a

____ Test Unitaire____

1_ installe jest :

    npm i jest

2_ installe supertest:

    npm i supertest

3_ créer le Test login :
    
    const request = require('supertest')

    const app = require('./index')

    describe('post /api/auth/login',()=>{
 
    let body = {
    
        email:'email_not_found@gmail.com',
        
        password:'123456'
        
    }
    
    describe('Test login', ()=> {
    
        it('email incorrect', async ()=>{
        
            const res = await request(app).post('/api/auth/login').send(body)
            
            expect(res.statusCode).toBe(400)
            
        })
        
        it('password incorrect', async ()=>{
        
            const res = await request(app).post('/api/auth/login').send(body)
            
            expect(res.statusCode).toBe(400)
        })
    })

    })
