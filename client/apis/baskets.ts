import request from 'superagent'

//Get data
export async function getBaskets(token: string) {
  const res = await request
    .get('/api/v1/baskets')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body
}

//Patch data
export async function patchBaskets(token: string, giverId: number) {
  const res = await request
    .patch(`/api/v1/baskets/${giverId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send({
      status: 'inactive',
      updated_at: Date.now(),
    })
  return res.body
}
