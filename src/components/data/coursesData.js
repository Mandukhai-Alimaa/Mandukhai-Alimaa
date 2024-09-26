
const coursesData = [
    {
        courseName: "CSS 537: INTRODUCTION TO OPERATING SYSTEMS",
        courseDescription: "Input-output hardware, interrupt handling, properties of magnetic tapes, discs and drums, associative memories and virtual address translation techniques. Batch processing, time sharing and real-time systems, scheduling resource allocation, modular software systems, performance measurement and system evaluation.",
        logoSrc: `${process.env.PUBLIC_URL}/UWMadison-logo.jpg`,
    },
    {
        courseName: "CSS 540: INTRODUCTION TO ARTIFICIAL INTELLIGENCE",
        courseDescription: "Principles of knowledge-based search techniques, automatic deduction, knowledge representation using predicate logic, machine learning, probabilistic reasoning. Applications in tasks such as problem solving, data mining, game playing, natural language understanding, computer vision, speech recognition, and robotics.",
        logoSrc: `${process.env.PUBLIC_URL}/UWMadison-logo.jpg`,
    },
    {
        courseName: "CSS 544: INTRODUCTION TO BIG DATA SYSTEMS",
        courseDescription: "Deploy and use distributed systems to store and analyze large datasets. Unstructured and structured approaches to storage will be covered. Analysis will involve learning new query languages, processing streaming data, and training machine learning models. Most programming will be done in Python.",
        logoSrc: `${process.env.PUBLIC_URL}/UWMadison-logo.jpg`,
    },
    {
        courseName: "CSS 507: Software Modeling Techniques".toUpperCase(),
        courseDescription: "Provides the concepts and skills needed to use modeling in software analysis and design to foster understanding and communications of a problem and its potential solutions. Includes the creation of modeling artifacts for projects by hand and using CASE tools.",
        logoSrc: `${process.env.PUBLIC_URL}/UWash-logo.jpeg`,
    },
    {
        courseName: "CSS 506: Software Development Processes".toUpperCase(),
        courseDescription: "Provides a foundation in software engineering processes, methods and practices associated with prescriptive and agile software process models. Includes the creation of artifacts commonly used to communicate, justify, and manage computing projects.",
        logoSrc: `${process.env.PUBLIC_URL}/UWash-logo.jpeg`,
    },
    {
        courseName: "CSS 502: Data Structures and Object-oriented Programming 2".toUpperCase(),
        courseDescription: "Covers advanced data structures included trees, balanced trees, heaps, graphs, and hash tables along with associated algorithms. Covers object-oriented programming with a focus on design and implementation of programs using inheritance and polymorphism. Introduces formal automata theory.",
        logoSrc: `${process.env.PUBLIC_URL}/UWash-logo.jpeg`,
    },
    {
        courseName: "CSS 501: Data Structures and Object-oriented Programming 1".toUpperCase(),
        courseDescription: "Covers data structures and object-oriented programming. Studies basic and advanced data types, their uses, and implementations. Students design solutions to programming problems using object-oriented techniques with various data types. Covers algorithms and their tradeoffs. Uses modern software engineering practices.",
        logoSrc: `${process.env.PUBLIC_URL}/UWash-logo.jpeg`,
    },
    {
        courseName: "CSS 307: Introduction to Cybersecurity".toUpperCase(),
        courseDescription: "This course provides an overview of modern security concepts. Topics covered will include security terminology, risk management, security policy and strategy, security awareness, cryptography, operating system security, network security, physical security and digital forensics. The course will contain a lab component where students will investigate current hardware and software tools for vulnerability analysis and penetration testing.",
        logoSrc: `${process.env.PUBLIC_URL}/Smumn-logo.jpeg`,
    },
    {
        courseName: "CSS 310: Introduction to Web Programming".toUpperCase(),
        courseDescription: "This course will introduce the essential topics of Internet programming. Students will design interactive web pages using HTML, CSS, JavaScript, and other client-side script technology. Concepts such as cookies, manipulating multimedia, and publishing and managing a remote site will be discussed.",
        logoSrc: `${process.env.PUBLIC_URL}/Smumn-logo.jpeg`,
    },
    {
        courseName: "CSS 355: Database Engineering".toUpperCase(),
        courseDescription: "A study of fundamental database management systems. Course topics include: data modeling, database design and structured query language (SQL), transaction management, data integrity and security. Object-relational mapping techniques and technologies will also be covered.",
        logoSrc: `${process.env.PUBLIC_URL}/Smumn-logo.jpeg`,
    },
    {
        courseName: "CSS 210: Programming with Data Structures".toUpperCase(),
        courseDescription: "CS210 expands on the programming techniques covered in CS110, adding discussion of recursion and data structures such as lists, stacks, queues, balanced trees, graphs and heaps. Specific algorithms that use these structures efficiently and general algorithm techniques and their analysis are also covered. Class lab time is used to reinforce concepts and practices covered in lectures.",
        logoSrc: `${process.env.PUBLIC_URL}/Smumn-logo.jpeg`,
    },
    {
        courseName: "CSS 110: Introduction to Programming".toUpperCase(),
        courseDescription: "This course introduces students to the practice of software development. Students learn the fundamentals of programming, algorithm development, and basic design principles.",
        logoSrc: `${process.env.PUBLIC_URL}/Smumn-logo.jpeg`,
    }, 
    {
        courseName: "BU 243: Business Computer Applications".toUpperCase(),
        courseDescription: "This course provides in-depth coverage of Microsoft Excel and Access in the context of business applications. Excel topics include formulas and functions, charting, large datasets, pivot tables and what-if analysis. Access topics include relational database concepts, database design, basic query construction, and report generation. This course combines on-line and hands-on learning.",
        logoSrc: `${process.env.PUBLIC_URL}/Smumn-logo.jpeg`,
    },
    {
        courseName: "BU 354: Data Mining for Decision Making".toUpperCase(),
        courseDescription: "This course provides both the theoretical and practical knowledge of data mining topics. Particular topics include cluster analytics, text-mining regression, and random forest models.  Neural networks and artificial intelligence are explored.  Students will have the opportunity to work with a number of exercises to practice and understand the uses of data mining in business organizations. Students will complete a machine learning project as part of the course requirements.  Students will present their work at the Celebration of Scholarship.",
        logoSrc: `${process.env.PUBLIC_URL}/Smumn-logo.jpeg`,
    },
    {
        courseName: "BU 352: Data Analysis and Business Modeling".toUpperCase(),
        courseDescription: "This course is designed to introduce the concept of data science in business.  The application of data science helps businesses make informed decisions by using sound judgment and data.  This is a skill development class that explores how statistics, optimization models, and key performance indicators are used in business.  Students in this course will leave with a specialized skillset used in a variety of roles within an organization.  Storytelling skills are taught and a final project is required",
        logoSrc: `${process.env.PUBLIC_URL}/Smumn-logo.jpeg`,
    },
    {
        courseName: "BU 351:  Information Systems for Business Intelligence".toUpperCase(),
        courseDescription: "This course focuses on the fundamentals of information systems and their foundational technologies as they can be used for business analysis and intelligence. Areas studied will include hardware, operating systems, database systems, knowledge management, decision support systems, and networked computing concepts. Data oriented techniques for business intelligence and decision making are introduced.  Structured Query Language (SQL) is studied.",
        logoSrc: `${process.env.PUBLIC_URL}/Smumn-logo.jpeg`,
    },
    {
        courseName: "BU 420: Business Analytics".toUpperCase(),
        courseDescription: "This course will examine methods that have been studied in previous Business Intelligence major courses and those from the business core proven to be of value in recognizing patterns and making predictions from an applications perspective.  Course learning will involve utilizing a variety of software to aid in the review of analytical cases to improve understanding of enterprise level analytics.  Students will build a data warehouse, using data profiling and quality skills, and lifecycle models introduced in the course.",
        logoSrc: `${process.env.PUBLIC_URL}/Smumn-logo.jpeg`,
    },
];

export default coursesData;
