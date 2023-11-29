export type ChernoffFace = {
  eyes: number,
  mouth: number,
  nose: number,
  hair: number,
  head: number
}

export type VoivodeFace = {
  id: number,
  symbol: string,
  name: string,
  points: string,
  population: number,
  internalMigration: number,
  externalMigration: number,
  birth: number,
  deaths: number,
  face: {
    eyes: string | null,
    mouth: string | null,
    nose: string | null,
    hair: string | null,
    head: string | null
  },
};

export type VoivodeAverage = {
  population: number,
  internalMigration: number,
  externalMigration: number,
  birth: number,
  deaths: number
}