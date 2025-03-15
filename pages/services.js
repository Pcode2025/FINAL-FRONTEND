import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

export default function services() {
    return <>
        <Head>
            <title>Services</title>
        </Head>

        <div className="servicespage">
            <div className="topservices">
                <div className="container">
                    <h2 data-aos="fade-up">My Design Nexus Services</h2>
                </div>
            </div>
            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        <div className="csservice" data-aos="fade-right">
                            <span>01</span>
                            <div>
                                <h2>User interface</h2>
                            </div>
                            <ul>
                                <li> Modern & Aesthetic Design </li>
                                <li> User-Centered Approach</li>
                                <li>Responsiveness</li>
                                <li> Optimized Performance </li>
                                <li> Consistency & Branding </li>
                                <li>Interactive & Engaging</li>
                                <li>Scalability & Reusability</li>
                            </ul>
                            <p>Our designs focus on enhancing user experience through intuitive layouts,
                                interactive elements, and optimized performance for a smooth digital journey.</p>
                        </div>
                        <div className="csservice" data-aos="fade-right">
                            <span>02</span>
                            <div>
                                <h2>User Experience</h2>
                            </div>
                            <ul>
                                <li>Empathy-Driven Design</li>
                                <li>Seamless Multi-Device Experience</li>
                                <li>Data-Backed Decision Making</li>
                                <li>Minimalistic & Clutter-Free Interfaces</li>
                                <li>Personalization & Customization</li>
                            </ul>
                            <p>By combining research-driven insights with creative design,
                                we craft experiences that not only look great but also feel natural and effortless for users.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>03</span>
                            <div>
                                <h2>Frontend Development</h2>
                            </div>
                            <ul>
                                <li>Responsive & Mobile-First Design</li>
                                <li>High Performance & Fast Load Times </li>
                                <li>Cross-Browser Compatibility</li>
                                <li>Interactive & Dynamic UI </li>
                                <li>SEO-Friendly Development</li>
                                <li>Modern Technologies & Frameworks</li>
                                <li> Clean & Maintainable Code</li>
                                <li> Accessibility & Usability</li>
                            </ul>
                            <p>Our frontend development focuses on responsive design, high performance, and smooth interactions to enhance user engagement.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>04</span>
                            <div>
                                <h2>Backend Development</h2>
                            </div>
                            <ul>
                                <li>Scalable Architecture </li>
                                <li>High Performance & Speed </li>
                                <li> Secure Authentication & Authorization</li>
                                <li>Database Management</li>
                                <li> RESTful & GraphQL APIs</li>
                                <li>Server-Side Logic</li>
                                <li>Cloud & DevOps Integration</li>
                                <li>Error Handling & Logging</li>
                            </ul>
                            <p>From blog posts and social media content to website copy and multimedia storytelling, we create content that drives engagement and conversions.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>05</span>
                            <div>
                                <h2>Content Creator</h2>
                            </div>
                            <ul>
                                <li> SEO-Optimized Writing</li>
                                <li> Engaging & Persuasive Copy</li>
                                <li> Brand Consistency</li>
                                <li> Audience-Centric Approach</li>
                                <li> Diverse Content Formats</li>
                                <li> Research-Driven Content</li>
                                <li>Multimedia Integration</li>
                                <li> Content Strategy & Planning</li>
                            </ul>
                            <p>With modern technologies and best coding practices, we build reliable backend architectures that support business growth and scalability.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>06</span>
                            <div>
                                <h2>Work Automation</h2>
                            </div>
                            <ul>
                                <li>Process Optimization</li>
                                <li>AI & Machine Learning Integration</li>
                                <li>Task Scheduling & Execution</li>
                                <li> Seamless API Integrations</li>
                                <li>  Low-Code & No-Code Automation </li>
                                <li>Chatbots & Virtual Assistants </li>
                                <li> Data Processing & Reporting</li>
                                <li> Error Reduction & Compliance</li>
                            </ul>
                            <p>By automating business processes, we help organizations save time, minimize errors, and focus on high-impact tasks.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>07</span>
                            <div>
                                <h2>Quality Assurance</h2>
                            </div>
                            <ul>
                                <li> Automated & Manual Testing </li>
                                <li> Performance Testing</li>
                                <li> Security Testing</li>
                                <li>Usability & Accessibility Testing</li>
                                <li> Functional Testing</li>
                                <li> Cross-Browser & Device Testing</li>
                                <li>Regression Testing</li>
                                <li>Bug Tracking & Fixing</li>
                            </ul>
                            <p>By implementing automated and manual testing strategies, we identify and resolve issues before deployment, ensuring reliability.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>08</span>
                            <div>
                                <h2>Public Relations</h2>
                            </div>
                            <ul>
                                <li> Media Relations & Outreach </li>
                                <li> Brand Reputation Management</li>
                                <li>Crisis Communication</li>
                                <li>Press Releases & Storytelling</li>
                                <li> Social Media PR</li>
                                <li> Influencer & Partnership Collaborations </li>
                                <li> Event & Campaign Management </li>
                                <li>Internal & Corporate Communications </li>
                            </ul>
                            <p>By crafting compelling narratives and fostering key relationships, we help businesses establish a strong public presence and industry authority.</p>
                        </div>

                        <div className="csservice" data-aos="fade-left">
                            <span>09</span>
                            <div>
                                <h2>Public Relations</h2>
                            </div>
                            <ul>
                                <li>Targeted Digital Ads </li>
                                <li>Creative & Engaging Ad Content </li>
                                <li> Performance & ROI Optimization</li>
                                <li> Multi-Platform Advertising</li>
                                <li> A/B Testing & Analytics</li>
                                <li> Retargeting & Remarketing</li>
                                <li> Brand Awareness Campaigns</li>
                                <li> Influencer & Sponsored Ads </li>
                            </ul>
                            <p>By leveraging innovative ad formats and audience insights, we help businesses connect with the right people at the right time.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>10</span>
                            <div>
                                <h2>Media Planning</h2>
                            </div>
                            <ul>
                                <li>Audience Research & Targeting </li>
                                <li>Multi-Channel Strategy</li>
                                <li> Budget Optimization</li>
                                <li>  Ad Placement & Scheduling</li>
                                <li> Performance Tracking & Analytics</li>
                                <li>Competitor Analysis</li>
                                <li> Cross-Platform Integration </li>
                            </ul>
                            <p>By leveraging data analytics and audience insights, we create targeted media strategies that drive engagement and business growth.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>11</span>
                            <div>
                                <h2>
                                    Media Buying</h2>
                            </div>
                            <ul>
                                <li> Cost-Effective Ad Purchasing </li>
                                <li> Strategic Placement </li>
                                <li> Multi-Platform Buying</li>
                                <li> Programmatic Advertising</li>
                                <li> Real-Time Bidding (RTB)</li>
                                <li> Performance Optimization</li>
                                <li> Ad Inventory Management </li>
                                <li> Brand Safety & Compliance </li>
                            </ul>
                            <p>We negotiate and purchase the best ad placements at the most competitive rates to maximize your brand's reach and impact.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>12</span>
                            <div>
                                <h2>
                                    Recruitment</h2>
                            </div>
                            <ul>
                                <li> Talent Sourcing & Acquisition</li>
                                <li>Job Posting & Advertising</li>
                                <li> Resume Screening & Shortlisting </li>
                                <li> Interview Coordination</li>
                                <li> Skill & Personality Assessment</li>
                                <li> Executive Search & Headhunting</li>
                                <li> Onboarding & Employee Integration</li>
                                <li> Employer Branding</li>
                            </ul>
                            <p>We streamline the hiring process by connecting businesses with top talent, ensuring the perfect match for every role.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>13</span>
                            <div>
                                <h2>
                                Cold Email Outreach</h2>
                            </div>
                            <ul>
                                <li>Personalized Messaging</li>
                                <li> High-Converting Subject Lines</li>
                                <li> Targeted Audience Segmentation </li>
                                <li> Automated Follow-Ups </li>
                                <li>A/B Testing & Optimization </li>
                                <li> Spam Compliance & Deliverability</li>
                                <li> Lead Nurturing & Relationship Building</li>
                                <li> Performance Tracking & Analytics </li>
                            </ul>
                            <p>Our cold email outreach strategies focus on targeted messaging, persuasive copy, and optimized follow-ups to increase response rates.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>14</span>
                            <div>
                                <h2>
                                Project for students</h2>
                                {/*<img src="https://www.svgrepo.com/show/475678/shopify-color.svg" alt="" />*/}
                            </div>
                            <ul>
                                <li>Main & Mini Projects</li>
                                <li>Hands-On Learning </li>
                                <li>  Customizable Solutions</li>
                                <li> Source Code & Documentation</li>
                                <li> Mentorship & Guidance</li>
                                <li>  Industry-Relevant Topics</li>
                                <li> Portfolio & Resume Building </li>
                            </ul>
                            <p>We offer both main and mini projects for students across diverse fields, helping them gain practical experience and industry-relevant skills.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricingplansec">
                <div className="container">
                    <div className="pricingtitles text-center">
                        <h3><img src="/img/chevron_right.png" alt="" /> PRICING PLAN</h3>
                        <h2>Pricing My Work</h2>
                    </div>

                    <div className="pricingcards">
                        <div className="pricingcard">
                            <h4>Life Plan </h4>
                            <p>Perfect Choice for Students</p>
                            <h2 style={{fontSize:'35px'}}>$6 - $115<span style={{paddingLeft: '10px'}}>/Project</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Lite includes:</h5>
                                <ul>
                                    <li><IoMdCheckmark />Complete Source Code for student projects</li>
                                    <li><IoMdCheckmark />  Literature Survey Report included</li>
                                    <li><IoMdCheckmark /> College Report Format as per university guidelines.</li>
                                    <li><IoMdCheckmark /> EEE Project Reports.</li>
                                    <li><IoMdCheckmark /> Free Installation support for local systems.</li>
                                    <li><IoMdCheckmark />Free Global Hosting for online project deployment.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pricingcard" data-aos="fade-up">
                            <h4>Premium Plan</h4>
                            <p>Perfect Choice for Startup</p>
                            <h2>$150.00 <span style={{paddingLeft: '10px'}}>/Project</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Everything in lite, plus:</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Free Hosting & Free Domain (Lifetime).</li>
                                    <li><IoMdCheckmark /> Free SSL Certificate (Lifetime security)</li>
                                    <li><IoMdCheckmark /> 500+ WordPress Templates for selection.</li>
                                    <li><IoMdCheckmark /> Modern UI Static & Dynamic Websites.</li>
                                    <li><IoMdCheckmark /> Trending MERN Stack Websites (Full-Stack Development).</li>
                                    <li><IoMdCheckmark /> Free 5+ Business Emails (Professional Email Setup).</li>
                                    <li><IoMdCheckmark /> AI Task Automation (Smart Business Operations).</li>
                                    <li><IoMdCheckmark /> 35+ Business Templates for Social Media (Marketing Ready).</li>
                                    <li><IoMdCheckmark /> One Month Free Social Media Handling (Boost Online Presence).</li>
                                    <li><IoMdCheckmark /> Technical Support (Ongoing Assistance).</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pricingcard" >
                            <h4>Pro Plan</h4>
                            <p>Perfect Choice for Businesses</p>
                            <h2> $580<span style={{paddingLeft: '10px'}}>/Project</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Everything in pro, plus:</h5>
                                <ul>
                                    <li><IoMdCheckmark />  Website Redesign & Optimization (Modern UI/UX for better engagement).</li>
                                    <li><IoMdCheckmark /> Speed & Performance Enhancement (Faster loading time).</li>
                                    <li><IoMdCheckmark /> Free SSL & Security Updates (Protect customer data).</li>
                                    <li><IoMdCheckmark /> SEO Optimization (Improve Google rankings & traffic).</li>
                                    <li><IoMdCheckmark /> Mobile-Friendly Design (Optimize for all devices).</li>
                                    <li><IoMdCheckmark /> AI Task Automation (Save time with automated workflows).</li>
                                    <Link href='/contact'><li><IoMdCheckmark /><u>And More</u></li></Link>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}