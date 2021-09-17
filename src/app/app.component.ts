import {Component} from '@angular/core';
import {Course, getCourses, getGroups, getMaxCFU} from "../assets/data";
import * as FileSaver from "file-saver";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    curriculum: string = 'MCI';
    selectedCourses: {course: Course, group: string}[] = []
    getMaxCFU = getMaxCFU


    getCurriculumGroups() {
        if (this.curriculum) {
            return getGroups().filter(g => g.includes(this.curriculum) || g === 'C')
        }
        return []
    }

    updateCurriculum($event: Event) {
        // @ts-ignore
        this.curriculum = $event.target?.value
        this.selectedCourses = []
    }

    getCourses(filter: Partial<Pick<Course, "name" | "year" | "semester">> = {}) {
        return getCourses(filter).sort((c1,c2) => {
            const comp = (c1.year || 0) - (c2.year || 0)
            return comp || (c1.name || '').localeCompare(c2.name || '')
        })
    }

    getCourseIfSelected(course: Course, group?: string) {
        return this.selectedCourses.find(c => c.course === course && c.group === (group ? group : c.group))
    }

    addCourse(course: Course, group: string) {
        const selected = this.getCourseIfSelected(course)
        if (selected) {
            selected.group = group
        } else {
            this.selectedCourses.push(
                {
                    course,
                    group: group,
                })
        }
    }

    removeCourse(course: Course) {
        this.selectedCourses = this.selectedCourses.filter(c => c.course !== course)
    }

    removeAllCourses() {
        this.selectedCourses = []
    }

    getCFU(group: string) {
        return this.selectedCourses.filter(c => c.group === group).length * 6
    }

    getCFUCellStyle(group: string) {
        return {
            'font-weight': this.getCFU(group) > 0 ? 'bold' : 'normal',
            'color': this.getCFU(group) > getMaxCFU(group)
                ? 'red'
                : this.getCFU(group) < getMaxCFU(group)
                    ? 'black'
                    : 'green'
        }
    }

    saveToFile() {
        let data = ['Name, Year, Semester, Group\n']
        data = data.concat(this.selectedCourses.map(c => `${c.course.name},${c.course.year},${c.course.semester},${c.group}\n`))
        const myFile = new File(data, "piano.csv", {type: "text/csv;charset=utf-8"});
        FileSaver.saveAs(myFile);
    }


}
