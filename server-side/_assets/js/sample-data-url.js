/*
01/27/2021 - 11:08 AM 
E: 'Are we converting images to data URI? Or do we use a different method?'
B: 'passing url'
*/

return from(fetch(proxiedSrc, { mode: 'cors' })).pipe(
    switchMap((res) => from(res.blob())),
    switchMap((_blob: Blob) => {
        return Observable.create(observable => {
            if (_blob.type.indexOf('image') === -1 || _blob.size === 0) {
                observable.throwError('Invalid image type');
            }
            const reader = new FileReader();
            reader.addEventListener('load', function () {
                observable.next(reader.result);
                observable.complete();
            }, false);
            reader.onerror = (err) => {
                return observable.throwError(err);
            };
            reader.readAsDataURL(_blob);
        });
    }),
    tap((base64Image) => {
        this.imageMap[image.src] = base64Image;
    }),
    catchError((err) => {
        proxiedSrc
          var n = proxiedSrc.includes("/locations/");
          if(n){
            this.imageMap[image.src] = this.imageMap['locationPlaceholder'];
          }else{
            this.imageMap[image.src] = this.imageMap['placeholder'];
          }
        // Could not fetch image, apply placeholder image instead
        return of(false);
    }));

// readAsDataURL