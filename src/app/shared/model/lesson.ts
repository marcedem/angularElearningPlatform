// properties of the lessons

export class Lesson {
    key: string;
    description: string;
    duration: string;
    url: string;
    tags: string;
    pro: boolean;
    longDescription: string;
    courseId: string;

    constructor(
        key: string,
        description: string,
        duration: string,
        url: string,
        tags: string,
        pro: boolean,
        longDescription: string,
        courseId: string) {

        this.tags = tags;
        this.description = description;
        this.duration = duration;

    }

    get isBiginner() {
        return this.tags && this.tags.includes('BEGINNER');
    }

    // takes a plain javascript array and return a lesson array
    // use array.map() operator
    // maping lesson array with the json object
    static fromJsonList(array): Lesson[] {
        return array.map(Lesson.fromJson);
    }

    // Create a lesson object from a plain javascript object
    // using ES6 destructuring
    static fromJson({
        key,
        description,
        duration,
        url,
        tags,
        pro,
        longDescription,
        courseId
    }): Lesson {
        return new Lesson(key, description, duration, url, tags, pro, longDescription, courseId);
    }

}
