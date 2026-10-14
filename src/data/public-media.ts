export type PublicMedia={id:string;title:string;category:"territoire"|"production"|"communautes"|"infrastructures";imagePath:string;alt:string;credit:string;verified:boolean;permissionConfirmed:boolean;};
export const publicMedia:PublicMedia[]=[];
export function publishedMedia(){return publicMedia.filter(item=>item.verified&&item.permissionConfirmed&&item.imagePath.startsWith("/media/"));}
