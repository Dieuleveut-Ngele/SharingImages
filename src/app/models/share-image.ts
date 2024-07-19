export class ShareImage {

    location?: string;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public snaps: number) {}
    
    addShare(): void {
         this.snaps ++
    }

    removeShare(): void{
        this.snaps --
    }

    setLocation(location: string): void {
        this.location = location;
    }
}
  