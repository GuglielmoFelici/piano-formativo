import {Component} from '@angular/core';
import {Course, getCourses, getGroups, getMaxCFU} from "../assets/data";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    curriculum: string = 'MCI';
    selectedCourses: {course: Course, group: string}[] = []
    getCourses = getCourses
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


}
