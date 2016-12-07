export class Panel {
  constructor(
    public title: string,
    public subtitle: string,
    public iconClass: string,
    public content: string,
    public button?: string,
    public handler?: any
  ) {}
}
