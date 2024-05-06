const Header = ({ header }) => <h2>{header}</h2>

const Part = (props) => <p>{props.part} {props.exercises}</p>

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part.name} exercises={part.exercises} />
            )}
        </div>)
}

const Total = ({ parts }) => {
    const sum_exercises = parts.reduce((acc, part) => acc + part.exercises, 0)
    return <p><strong>Total of {sum_exercises} exercises</strong></p>
}

const Course = ({ course }) => {
    return (
        <div>
            <Header header={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Courses = ({ courses }) => {
    return (
        <div>
            <h1>Web Development Curriculum</h1>
            {courses.map(course =>
                <Course key={course.id} course={course} />
            )}
        </div>
    )
}

export default Courses