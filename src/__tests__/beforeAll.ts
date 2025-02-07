import { beforeAll } from 'vitest'

export let testUser = {
    id: '',
    name: ''
}

beforeAll(async () => {
        testUser = {
            id: '123',
            name: 'Test User'
        }
        console.log('Before all setup complete')
    }
)