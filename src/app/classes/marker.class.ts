export class Marker {
  constructor(
    public lat: number,
    public lon: number,
    public placeId?: string,
    public title: string = 'Sin título',
    public description: string = 'Sin descripción'
  ) {}
}
