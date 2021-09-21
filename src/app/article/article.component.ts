
import { Component } from '@angular/core';


@Component ({
    selector: 'app-article',
    templateUrl: './article.component.html'

})

 export class ArticleComponent {

    title = "Article";
    content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    isTechrelated: boolean = true;
    buttonOnClick() {
      this.isTechrelated = !this.isTechrelated;

    }
 }



