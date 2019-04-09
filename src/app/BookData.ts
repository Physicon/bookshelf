export interface BookData {
  items: [
      {
          courseId: string,
          extId: string,
          courseHash: string,
          title: string,
          grade: string,
          genre: string,
          subject: string,
          itunes_id: string,
          progress: 0,
          description: string,
          status: string,
          price: number,
          shopUrl: any,
          google_id: string,
          winstore_id: any,
          isNew: boolean,
          priceBonus: number
      }
 ],
  result: string,
  errorMessage: any
}
