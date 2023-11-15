export interface IBtns {
  body: string;
  id: number;
  active: boolean;
}
export interface INavigation{
  id: number;
  img: string;
  title: string;
}
export interface IMenu {
  routeTo: string;
  svgMenu?: string;
  more?: string;
  id?: number;
  about: string;
  svg?: string;
}

export interface IDiagnostic{
  id: number;
  title: string;
  body: string;
}