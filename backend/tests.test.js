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