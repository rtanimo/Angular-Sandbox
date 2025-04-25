import { Injectable } from '@angular/core';
import { Chapter, Section } from '../models/interfaces';
import { contents } from '../data/table-of-contents.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private toc: Chapter[] = contents;

  constructor() {}

  findNextPrevSection(chapterTitle: string, sectionTitle: string) {
    // find current chapter
    const chapter = this.toc.find((c) => c.title === chapterTitle);
    if (!chapter) throw new Error('Could not find chapter!');

    // find current section index
    const sectionIdx = chapter.sections.findIndex(
      (s) => s.title === sectionTitle
    );
    if (!sectionIdx) throw new Error('Could not find section!');

    let prevSection: Section | null = null;
    let nextSection: Section | null = null;

    // find previous section
    if (sectionIdx > 0) prevSection = chapter.sections[sectionIdx - 1];
    else {
      const prevChapter = this.toc.find((c) => c.number === chapter.number - 1);
      if (prevChapter)
        prevSection = prevChapter.sections[prevChapter.sections.length - 1];
    }

    // find next section
    if (sectionIdx > 0) nextSection = chapter.sections[sectionIdx + 1];
    else {
      const nextChapter = this.toc.find((c) => c.number === chapter.number + 1);
      if (nextChapter) nextSection = nextChapter.sections[0];
    }

    return { prev: prevSection, next: nextSection };
  }
}
