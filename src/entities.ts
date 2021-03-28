export type CatFact = {
  status: {
    verified: boolean,
    sentCount: number,
  },
  type: string,
  deleted: boolean,
  _id: string,
  user: string,
  text: string,
  __v: number,
  source: string,
  updatedAt: Date,
  createdAt: Date,
  used: boolean,
}