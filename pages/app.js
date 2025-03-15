import Head from "next/head";
import Link from "next/link";

export default function app() {
    return <>

        <Head>
            <title>App</title>
        </Head>

        {/* AI TOOLS */}
        <section className="recentblogs">
            <div className="container">
                <div className="myskills_title">
                    <h2 data-aos="fade-up">OUR Web Applications</h2>
                    <p data-aos="fade-up">We offer more than just AI—we provide an intelligent, intuitive, and powerful solution that simplifies your work and enhances productivity like never before.</p>
                </div>
                <div className="cservicesbox">
                    <a href="/">
                        <div className="csservice" data-aos="fade-right">
                            <div>
                                <h2>AI Course Builder</h2>
                                <img src="/img/AICourse.svg" alt="" />
                            </div>
                            <ul>
                                <li>Performance & Load Time</li>
                                <li>Reusable Components</li>
                                <li>Responsiveness</li>
                                <li>Quality assurance and testing.</li>
                                <li>Ongoing maintenance, updates, and bug fixes.</li>
                            </ul>
                            <p>I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need.</p>
                        </div>
                    </a>
                    <a href="/">
                        <div className="csservice" data-aos="fade-right">
                            <div>
                                <h2>Wireframe to React Code Generator</h2>
                                <img src="/img/Wirefram.svg" alt="" />
                            </div>
                            <ul>
                                <li>Prototyping and Wireframing</li>
                                <li>UI/UX Design</li>
                                <li>Coding and Programming</li>
                                <li>Quality Assurance (QA) Testing</li>
                                <li>App Deployment</li>
                            </ul>
                            <p>Experienced mobile developer offering innovative solutions. Proficient in creating high-performance, user-centric mobile apps. Expertise in iOS, Android, and cross-platform development.</p>
                        </div>
                    </a>
                    <a href="/">
                        <div className="csservice" data-aos="fade-up">
                            <div>
                                <h2>AI Mock Interview</h2>
                                <img src="/img/AI-Mock-Interview.svg" alt="" />
                            </div>
                            <ul>
                                <li>Marketing Strategy</li>
                                <li>Research On Customer</li>
                                <li>Monetize Products</li>
                                <li>Marketing Strategy</li>
                                <li>Research On Customer</li>
                                <li>Monetize Products</li>
                                <li>Monetize Products</li>
                            </ul>
                            <p>My digital marketing services will take your business to the next level, we offer remarkable digital marketing strategies that drives traffic to your website, your business, and improves your brand awareness to potential customers.</p>
                        </div>
                    </a>
                    <a href="/">
                        <div className="csservice" data-aos="fade-up">
                            <div>
                                <h2>NextJs Full Stack AI PDF Notes Taking App</h2>
                                <img src="/img/AIPDF.svg" alt="" />
                            </div>
                            <ul>
                                <li>Crispy Digital Editing</li>
                                <li>Crispy Digital Editing</li>
                                <li>Marketing and Promotion on Social Platforms</li>
                                <li>Client communication skill</li>
                            </ul>
                            <p>Passionate photographer and videographer capturing moments with creativity. Transforming visions into visual stories. Expert in visual storytelling, skilled in both photography and videography to deliver captivating content.</p>
                        </div>
                    </a>
                    <a href="/">
                        <div className="csservice" data-aos="fade-left">
                            <div>
                                <h2>Video Conferencing App</h2>
                                <img src="/img/Video.svg" alt="" />
                            </div>
                            <ul>
                                <li>Video Conferencing App</li>
                                <li>Responsiveness</li>
                                <li>Quality assurance and testing.</li>
                                <li>UI/UX Design</li>
                            </ul>
                            <p>I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need.</p>
                        </div>
                    </a>
                </div>

            </div>

        </section>

    </>
}