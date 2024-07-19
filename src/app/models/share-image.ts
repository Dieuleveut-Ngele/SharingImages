import { SnapType } from "./share-type.type";

export class ShareImage {

    location?: string;
    id: string;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public snaps: number) {

        this.id = crypto.randomUUID().substring(0, 8);
        console.log(this)
        
    }
        
    
    addShare(): void {
         this.snaps ++
    }

    removeShare(): void{
        this.snaps --
    }

    snap(snapType: SnapType) {
        if (snapType === 'snap') {
          this.addShare();
        } else if (snapType === 'unSnap') {
          this.removeShare();
        }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): ShareImage {
        this.setLocation(location);
          return this;
    }  
}
  