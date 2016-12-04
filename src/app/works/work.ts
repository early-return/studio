export class Work {

  constructor(
    public id: number,
    public name: string,
    public detail: string,
    public cover: string,
    public demo?: string,
    public source?: string,
    public download?: string
  ) {}

}
