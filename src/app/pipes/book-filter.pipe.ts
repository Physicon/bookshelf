import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: any, empty: any, selectedSubject: any, selectedGenre: any, selectedClass: any, query: any) {

    if (selectedSubject !== 'none') {
      value = value.filter(b => b.subject === selectedSubject)
    }
    if (selectedGenre !== 'none') {
      value = value.filter(b => b.genre === selectedGenre)
    }
    if (selectedClass !== 'none') {
      value = value.filter(b => (b.grade === selectedClass) || (b.grade.includes(';'+selectedClass+';')) || (b.grade.includes(selectedClass+';') || (b.grade.includes(';'+selectedClass))))
    }
    if (query.trim()) {
      value = value.filter(b => b.title.toLowerCase().includes(query.trim().toLowerCase()))
    }

    return value
  }

}
