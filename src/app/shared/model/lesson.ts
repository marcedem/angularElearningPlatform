export class Lesson {

    constructor(
        public $key: string,
        public description: string,
        public duration: string,
        public url: string,
        public tags: string,
        public pro: boolean,
        public longDescription: string,
        public courseId: string,
        public videoUrl: string) {

    }

    get isBeginner() {
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
    static fromJson({$key, description, duration, url, tags, pro, longDescription, courseId, videoUrl}): Lesson {
        return new Lesson( $key, description, duration, url, tags, pro, longDescription, courseId, videoUrl);
    }

}


