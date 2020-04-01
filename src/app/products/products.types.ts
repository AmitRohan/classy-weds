
export class AboutContent {
    title : string;
    description : string;
  }

export class PackageAvailable {
    title : string;
    description : string;
    price : number
}

export class ProductModel {
    index : number;
    icon : string;
    name : string;
    description : string;
    intro : string
    price : number;
    landmark : string;
    address : string;
    reviewsCount : number;
    rating : number;
    aboutContent : Array<AboutContent>;
    packageAvailable : Array<PackageAvailable>;
    photos : Array<string>
  }

export class ProductKnownForStatus {
    title : string;
    selected : boolean;
}