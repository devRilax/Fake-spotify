import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  private unknownImage: string = "https://vignette.wikia.nocookie.net/marsargo/images/5/52/Unknown.jpg/revision/latest?cb=20170904102656"

  transform( images: any[] ): any {
    if(!images) {
      return this.unknownImage;
    }

    if( images.length > 0 ) {
      return images[0].url
    } else {
      return this.unknownImage;
    }
  }

}
