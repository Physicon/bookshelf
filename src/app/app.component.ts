import { BookData } from './BookData'
import { DataService } from './services/data.service'
import { Component } from '@angular/core'
import { trigger, style, transition, animate, group } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent {

  title: string = 'bookshelf'
  showBonuses = false

  bookList: BookData['items']
  loaded = false

  // selectors
  selectedSubject = 'none'
  selectedGenre = 'none'
  selectedClass = 'none'
  query = ''

  subjects = []
  genres = []
  classes = []

  constructor(private bookService: DataService) { }

  ngOnInit(): void {
    this.renderBooks()
  }

  renderBooks(): void {
    this.bookService
      .getBookList()
      .subscribe((data: BookData) => {
        this.bookList = data.items

        if (this.bookList.length) {
          this.setDataForSelectors()
        }

        this.loaded = true
      })
  }

  private setDataForSelectors() {

    this.bookList.forEach(b => {
      if (!this.subjects.includes(b.subject)) {
        this.subjects.push(b.subject)
      }
      if (!this.genres.includes(b.genre)) {
        this.genres.push(b.genre)
      }

      b.grade.split(';').forEach(g => {
        if (!this.classes.includes(g)) {
          this.classes.push(g)
        }
      })
    })

    this.classes.sort((a, b) => a - b)
    this.genres.sort()
    this.subjects.sort()
  }

  onToggleBonuses(e) {
    this.showBonuses = e.checked
  }
}
