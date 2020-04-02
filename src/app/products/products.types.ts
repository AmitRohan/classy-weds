

export class ProductKnownForStatus {
    title : string;
    selected : boolean;
}

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
    photos : Array<string>;
    reviewResponse : ProductReview;
}

export class ProductReview {
    socialReview : string;
    socialReviewSource : string;
    reviewHighlights : Array<string>;
    starCounts : Array<number>;    // [1 Star, 2 Star, 3 Star, 4 Star, 5 Star]
    reviewList : Array<Review>;
}

export class Review {
    from : string;
    review : string;
    time : number;
    rating : number;
    tags : Array<string>;
    replyAvailale : boolean;
    replyFrom : string;
    reply : string;
}