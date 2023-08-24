export const Database: User[] =[
    {
        id: 1,
        userName: 'oshi',
        password: 'jakepogi',
        role: 'ADMIN'
    },
    {
        id: 2,
        userName: 'mac',
        password: 'mac',
        role: 'USER'
    }
]

export type User = {
    id: number,
    userName: string,
    password: string,
    role: 'ADMIN' | 'USER'
}
