// properties of the lessons

export class Lesson {
    tags : string;
    constructor(key : string, description : string, duration : string, url : string, tags : string, pro : boolean, longDescription : string, courseId : string) {
        this.tags = tags;
    }

    get isBiginner() {
        return this.tags && this.tags.includes('BEGINNER');
    }

    static fromJsonList(array) : Lesson[] {
        return array.map(Lesson.fromJson);
    }

    static fromJson({
        key,
        description,
        duration,
        url,
        tags,
        pro,
        longDescription,
        courseId
    }) : Lesson {
        return new Lesson(key, description, duration, url, tags, pro, longDescription, courseId);
    }

}