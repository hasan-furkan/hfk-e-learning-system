import logo from '../../assets/images/logo.jpeg'
const LessonsComponent = () => {
    return (
            <div style={{
                display: 'flex',
                width: 350,
                borderRadius: 10,
                overflowY: 'auto',
                height: 400,
            }}>

                <img src={logo} alt="" style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    position: 'sticky',
                }}/>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 12,
                    fontSize: 12,
                }}>
                    <h1>Math 101</h1>
                    <p>Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                        Math 101 is a course that teaches you the basics of math.
                    </p>
                    <span>Author</span>
                </div>
            </div>
    )
}

export default LessonsComponent