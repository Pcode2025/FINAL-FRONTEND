import Head from "next/head";
import Link from "next/link";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { useEffect, useState } from "react";
import { LuMedal } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import Spinner from "@/components/Spinner";
import Typed from 'typed.js';



export default function Home() {


  // activeservice background color
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleMouseOut = () => {
    setActiveIndex(0); // Set the first item as active when mouse leaves
  };




  // services data
  const services = [
    {
      title: "User Interface Design",
      description: "We design modern, visually appealing, and user-friendly interfaces that enhance user experience, ensuring seamless navigation and engagement across all devices."
    },
    {
      title: "User Experience Design",
      description: "We create intuitive and research-backed UX designs that optimize user interaction, improving usability, accessibility, and overall satisfaction."
    },
    {
      title: "Frontend Development",
      description: "We develop high-performance, responsive, and interactive web applications using modern technologies like React, Next.js, and Tailwind CSS."
    },
    {
      title: "Backend Development",
      description: "We build scalable and secure backend systems using Node.js, Express, and databases like MongoDB and PostgreSQL, ensuring efficient data handling and API integration."
    },
    {
      title: "Content Creation",
      description: "We produce engaging and high-quality digital content, including blog posts, social media graphics, and marketing materials tailored to your brand."
    },
    {
      title: "Work Automation",
      description: "We streamline business processes by implementing automation solutions that save time, increase efficiency, and reduce manual effort."
    },
    {
      title: "Quality Assurance",
      description: "We ensure flawless performance through rigorous testing, identifying and fixing bugs to enhance user experience and application reliability."
    },
    {
      title: "Public Relations",
      description: "We help build and maintain your brand’s reputation through strategic communication, media outreach, and community engagement."
    },
    {
      title: "Advertising",
      description: "We create targeted advertising campaigns that boost brand awareness, drive conversions, and maximize ROI through digital and traditional media."
    },
    {
      title: "Media Planning",
      description: "We develop effective media strategies, selecting the best platforms and timing to reach your target audience and maximize engagement."
    },
    {
      title: "Media Buying",
      description: "We negotiate and purchase ad placements to ensure cost-effective media exposure, optimizing reach and performance."
    },
    {
      title: "Recruitment",
      description: "We assist in finding top talent by implementing strategic hiring processes, ensuring you get skilled professionals who align with your business needs."
    },
    {
      title: "Cold Email Outreach",
      description: "We craft personalized cold email campaigns that generate high-quality leads, boost conversions, and create business opportunities through strategic email marketing."
    }
  ];


  const [loading, setLoading] = useState(true);
  const [alldata, setAllData] = useState([]);
  const [allwork, setAllWork] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsResponse, blogsResponse] = await Promise.all([
          fetch('/api/projects'),
          fetch('/api/blogs')
        ]);

        const projectsData = await projectsResponse.json();
        const blogsData = await blogsResponse.json();

        setAllData(projectsData);
        setAllWork(blogsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter projects based on selectedCategory
    if (selectedCategory === 'All') {
      setFilteredProjects(alldata.filter(pro => pro.status === 'publish'));
    } else {
      setFilteredProjects(alldata.filter(pro => pro.status === 'publish' && pro.projectcategory[0] === selectedCategory));
    }
  }, [selectedCategory, alldata]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };



  // Function to format the date as "20 May 2024 14:11 pm"
  const formatDate = (date) => {
    // Check if date is valid
    if (!date || isNaN(date)) {
      return ''; // or handle the error as needed
    }

    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour12: true // Use 12-hour format
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkMode(document.body.classList.contains('dark'));
    }
  }, []);


  // type js

  useEffect(() => {
    const options = {
      strings: ['UX Designer +', 'Frontend Dev +', 'Backend Dev + ', 'Social Media Marketing +', 'Quality Assurance +',],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
      const typed = new Typed(typedElement, options);

      // Clean up on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);



  return (
    <>
      <Head>
        <title>Rakshith - Personal Portfolio</title>
        <meta name="description" content="vbmcoder - Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* hero section */}
      <section className="hero">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" text-anchor="middle" className="animate-stroke">Hi</text>
          </svg>
        </div>
        <div className="container">
          <div className="flex w-100">
            <div className="heroinfoleft">
              <span className="hero_sb_title" data-aos="fade-right" >I AM RAKSHITH</span>
              <h1 className="hero_title" data-aos="fade-right" >UI Designer + <br /><span className="typed-text"></span></h1>
              <div className="hero_img_box heroimgbox" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src="/img/me.jpg" alt="" />
              </div>
              <div className="lead" data-aos="fade-up"  >I break down complex user experience problems to create integrity focus solutions that connect billions of people</div>
              <div className="hero_btn_box" data-aos="fade-up">
                <Link href='/img/resume.pdf' download={'/img/resume.pdf'} className="download_cv">Download CV <BiDownload /></Link>
                <ul className="hero_social">
                  <li><a href="https://www.linkedin.com/in/rakshithgowdaofficial?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><GrLinkedinOption /></a></li>
                  <li><a href="https://www.instagram.com/my.designnexus?igsh=Z2d5N2Qza3IzaWx1"><IoLogoInstagram /></a></li>
                  <li><a href="https://dribbble.com/Raks025"><LiaBasketballBallSolid /></a></li>
                  <li><a href="https://www.pinterest.com/rakshithgowdamsofficial2025/"><FaPinterest /></a></li>
                  <li><a href="/"><FaGithub /></a></li>
                </ul>
              </div>
            </div>
            <div className="heroimageright" >
              <div className="hero_img_box" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src='/img/me.png' alt="" />
              </div>
            </div>
          </div>
          <div className="funfect_area flex flex-sb">
            <div className="funfect_item" data-aos="fade-right">
              <h3>1+</h3>
              <h4>Years of <br />
                Experience</h4>
            </div>
            <div className="funfect_item" data-aos="fade-right">
              <h3>15+</h3>
              <h4>Projects <br />
                Completed</h4>
            </div>
            <div className="funfect_item" data-aos="fade-left">
              <h3>1+</h3>
              <h4>Freelancing <br />
                Experience</h4>
            </div>
            <div className="funfect_item" data-aos="fade-left">
              <h3>5+</h3>
              <h4>Happy <br />
                Customers</h4>
            </div>
          </div>
        </div>
      </section>



      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="services_titles">
            <h2 data-aos="fade-up">My Quality Services</h2>
            <p data-aos="fade-up">We transform your ideas into impactful digital solutions, offering top-tier design, development, marketing,
              and automation services that drive engagement, efficiency, and growth.</p>
          </div>
          <div className="services_menu" data-aos="fade-up">
            {services.map((service, index) => (
              <div
                key={index}
                className={`services_item ${activeIndex === index ? 'sactive' : ''}`}
                onMouseOver={() => handleHover(index)}
                onMouseOut={handleMouseOut}
              >
                <div className="left_s_box">
                  <span>{index + 1}</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="right_s_box">
                  <p>{service.description}</p>
                </div>
                <GoArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Projects */}
      <section className="projects">
        <div className="container">
          <div className="project_titles">
            <h2 data-aos="fade-up">My Recent Works</h2>
            <p data-aos="fade-up">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
          </div>
          <div className="project_buttons" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
            <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => setSelectedCategory('All')}>All</button>
            <button className={selectedCategory === 'userinterface1' ? 'active' : ''} onClick={() => setSelectedCategory('userinterface1')}>UI</button>
            <button className={selectedCategory === 'userexperience1' ? 'active' : ''} onClick={() => setSelectedCategory('userexperience1')}>UX</button>
            <button className={selectedCategory === 'websitedevelopment' ? 'active' : ''} onClick={() => setSelectedCategory('websitedevelopment')}>Website Development</button>
            <button className={selectedCategory === 'websiteapplicationdevelopment' ? 'active' : ''} onClick={() => setSelectedCategory('websiteapplicationdevelopment')}>Website APK</button>
            <button className={selectedCategory === 'iosapplicationdevelopment' ? 'active' : ''} onClick={() => setSelectedCategory('iosapplicationdevelopment')}>IOS APK</button>
            <button className={selectedCategory === 'androidWebsiteapplicationdevelopment' ? 'active' : ''} onClick={() => setSelectedCategory('androidWebsiteapplicationdevelopment')}>Android APK</button>
            <button className={selectedCategory === 'others' ? 'active' : ''} onClick={() => setSelectedCategory('others')}>Others</button>

          </div>
          <div className="projects_cards">
            {loading ? <Spinner /> : (
              filteredProjects.length === 0 ? (
                <h1 className="w-100 flex flex-center mt-3">No Projects Found</h1>
              ) : (
                filteredProjects.slice(0, 4).map((pro) => (
                  <Link href={`/projects/${pro.slug}`} key={pro._id} className="procard" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="proimgbox">
                      <img src={pro.images[0]} alt={pro.title} />
                    </div>
                    <div className="procontentbox">
                      <h2>{pro.title}</h2>
                      <GoArrowUpRight />
                    </div>
                  </Link>
                ))
              )
            )}

          </div>
        </div>
      </section>

      {/* Experience study */}
      <section className="exstudy">
        <div className="container flex flex-left flex-sb">
          <div className="experience">
            <div className="experience_title flex gap-1" data-aos="fade-right">
              <LuMedal />
              <h2>My Experience</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card" data-aos="fade-up">
                <span>25 Sept 2024 - 31 March  · 6 mos</span>
                <h3>IBM India Private Limited -<a href="https://maps.app.goo.gl/AdnPqmuq4Y9KVUiM6"><u>Bengaluru</u></a><br /><p style={{ margin: '2px' }}>9:00AM - 11:59AM</p></h3>
                <p style={{ fontSize: '2.0rem' }}>Internship (Online)</p><br />
                <p style={{ fontSize: '1.2rem' }}>
                  During my 6-month internship at IBM, I developed expertise in front-end and back-end technologies, including HTML, CSS, JavaScript,
                  React.js, Node.js, Express.js, SQL, and NoSQL databases like MongoDB. I successfully completed various assessments and worked on real-time
                  projects, such as a collaborative whiteboard, a chat application, and a file transfer application,
                  applying my skills to build functional and interactive solutions.</p><br />

              </div>

              <div className="exper_card" data-aos="fade-up">
                <span>25 Sept 2024 - 31 March  · 6 mos</span>
                <h3>Rooman Technology pvt ltd -<a href="https://maps.app.goo.gl/kRJkH5NkHbzbLNu66"><u>Bengaluru</u></a><br /><p style={{ margin: '2px' }}>9:00AM - 11:59AM</p></h3>
                <p style={{ fontSize: '2.0rem' }}>Internship (Online)</p><br />
                <p style={{ fontSize: '1.2rem' }}>
                  I completed a 6-month internship at Rooman Technology Pvt.
                  Ltd., where I gained hands-on experience in Python programming, Prompt Engineering, AI Coding Assistants,
                  Linux Basics, Networking Essentials, Databases, Web Development with Flask, Cloud Computing, and Java Basics.
                  During my internship, I also worked on real-world assignments and web projects, applying my skills to practical
                  scenarios and building impactful solutions.</p><br />
                
                
              </div>

              <div className="exper_card" data-aos="fade-up">
                <span>25 Sept 2024 - 31 March  · 6 mos</span>
                <h3>Wadhwani Foundation -<a href="https://wadhwanifoundation.org/contact-us/"><u>Bengaluru</u></a><br /><p style={{ margin: '2px' }}> 1:15PM - 2:15 PM (Fri-Sat)</p></h3>
                <p style={{ fontSize: '2.0rem' }}>Internship (Online)</p><br />
                <p style={{ fontSize: '1.2rem' }}>
                Successfully completed the Life Skills (Jeevan Kaushal) 2.0 program at Wadhwani Foundation, gaining expertise in 
                communication, leadership, digital literacy, entrepreneurial skills, ethics, and innovative thinking. 
                This program enhanced my professional and managerial skills, equipping me with essential employability competencies
                 for career growth.</p><br />
                
              </div>
            </div>
          </div>

          <div className="education">
            <div className="experience_title flex gap-1" data-aos="fade-left">
              <PiGraduationCap />
              <h2>My Education</h2>
            </div>
            <div >
              <div className="exper_card" data-aos="fade-up">
                <span>Jan 2023 - May 2025</span>
                <h3>BAHUBALI COLLEGE OF ENGINEERING</h3>
                <p>Computer Science</p>
              </div>
              <div className="exper_card" data-aos="fade-up">
                <span>Jun 2016 - Jul 2019Jun 2016 - Jul 2019</span>
                <h3>GOVERNMENT TOOL ROOM AND TRAINING CENTRE</h3>
                <p>Diploma Tool and Die Making</p>
              </div>
            </div>
          </div>
        </div>


        <div data-aos="fade-right" style={{ justifyContent: 'center', display: 'flex', marginTop: '20px', width: '100%', height: '100%' }}>
          <div style={{ width: '250px', height: '70px', borderRadius: '10px', backgroundColor: '#905ff1', color: 'white', border: 'none', fontSize: '20px' }} className="exper_card" data-aos="fade-up">

            <center><a style={{ justifyContent: 'center', fontSize: '35px', fontWeight: 'bold' }} href="https://www.linkedin.com/in/rakshithgowdaofficial?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">View More</a></center>

          </div>
        </div>
      </section>




      {/* My Skills */}
      <section className="myskills">
        <div className="container">
          <div className="myskills_title">
            <h2 data-aos="fade-up">My Skills</h2>
            <p data-aos="fade-up">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
          </div>
          <div className="myskils_cards">
          <div className="mys_card" data-aos="fade-right">
              <div className="mys_inner">
                <img src="/img/sui.svg" alt="" />
                <h3>95%</h3>
              </div>
              <p className="text-center">UI</p>
            </div>
            <div className="mys_card" data-aos="fade-right">
              <div className="mys_inner">
                <img src="/img/sux.svg" alt="" />
                <h3>92%</h3>
              </div>
              <p className="text-center">Python</p>
            </div>
            <div className="mys_card" data-aos="fade-right">
              <div className="mys_inner">
                <img src="/img/python.svg" alt="" />
                <h3>93%</h3>
              </div>
              <p className="text-center">Python</p>
            </div>
            <div className="mys_card" data-aos="fade-left">
              <div className="mys_inner">
                <img src="/img/js.svg" alt="" />
                <h3>86%</h3>
              </div>
              <p className="text-center">JavaScript</p>
            </div>
            <div className="mys_card" data-aos="fade-left">
              <div className="mys_inner">
                <img src="/img/Html5.svg" alt="" />
                <h3>95%</h3>
              </div>
              <p className="text-center">Html</p>
            </div>
            <div className="mys_card" data-aos="fade-left">
              <div className="mys_inner">
                <img src="/img/CSS3.svg" alt="" />
                <h3>98%</h3>
              </div>
              <p className="text-center">React</p>
            </div>
            <div className="mys_card" data-aos="fade-right">
              <div className="mys_inner">
                <img src="/img/mongodb.svg" alt="" />
                <h3>90%</h3>
              </div>
              <p className="text-center">MongoDB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="recentblogs">
        <div className="container">
          <div className="myskills_title">
            <h2 data-aos="fade-up">Recent Blogs</h2>
            <p data-aos="fade-up">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
          </div>
          <div className="recent_blogs gap-2">
            {allwork.slice(0, 3).map((blog) => {
              return <Link href={`/blogs/${blog.slug}`} key={blog._id} className="re_blog" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="re_blogimg">
                  <img src={blog.images[0] || '/img/noimage.png'} alt={blog.title} />
                  <span>{blog.blogcategory[0]}</span>
                </div>
                <div className="re_bloginfo">
                  <div className="re_topdate flex gap-1">
                    <div className="res_date">
                      <FaCalendarDays /> <span>{formatDate(new Date(blog.createdAt))}</span>
                    </div>
                  </div>
                  <h2>{blog.title}</h2>
                </div>
              </Link>
            })}
          </div>
        </div>
      </section>

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
            <a href="/app">
              <div className="csservice" data-aos="fade-left">
                <div>
                  <h2>View More</h2>
                </div>
              </div>
            </a>
          </div>

        </div>

      </section>




      {/* Experience study */}
      <section className="exstudy">
        <div className="myskills_title">
          <h2 data-aos="fade-up">FAQ</h2>
          <p data-aos="fade-up">
            Have questions? We have answers! Explore our FAQs to learn more about our
            services and how we can help streamline your work with intelligent, intuitive, and powerful solutions.</p>
        </div>
        <div className="container flex flex-left flex-sb">

          <div className="experience">
            <div className="exper_cards">
              <div className="exper_card" data-aos="fade-up">
                <span style={{ paddingtop: '20px' }}>1. What services do you offer?</span>
                <div style={{ width: '100%', justifyContent: 'left', textAlign: 'left', border: '2px solid #91a1bf', padding: '20px', borderRadius: '10px' }} className="exper_card" data-aos="fade-right">
                  <p style={{ padding: '5px' }}>We provide a wide range of services, including UI/UX design, front-end and back-end development,
                    content creation, digital marketing, work automation, and quality assurance.
                    Additionally, We specialize in media planning, public relations, recruitment, and cold email outreach.</p>
                </div>
              </div>

              <div className="exper_card" data-aos="fade-up">
                <span style={{ paddingtop: '20px' }}>3.  How can your work automation services benefit my business?</span>
                <div style={{ width: '100%', justifyContent: 'left', textAlign: 'left', border: '2px solid #91a1bf', padding: '20px', borderRadius: '10px' }} className="exper_card" data-aos="fade-right">
                  <p style={{ padding: '5px' }}>We implement custom automation solutions that streamline repetitive tasks, improve efficiency, and save time.
                    This includes workflow automation, chatbot integration, and AI-driven processes that optimize business operations.</p>
                </div>
              </div>

              <div className="exper_card" data-aos="fade-up">
                <span style={{ paddingtop: '20px' }}>5. What kind of content creation services do you offer?</span>
                <div style={{ width: '100%', justifyContent: 'left', textAlign: 'left', border: '2px solid #91a1bf', padding: '20px', borderRadius: '10px' }} className="exper_card" data-aos="fade-right">
                  <p style={{ padding: '5px' }}>We specialize in creating engaging digital content, including blog posts, social media graphics,
                    marketing materials, and video production that align with your brand and audience.</p>
                </div>
              </div>
            </div>
          </div>



          <div className="education">

            <div >

              <div className="exper_cards">
                <div className="exper_card" data-aos="fade-up">
                  <span style={{ paddingtop: '20px' }}>2. Do you provide full-stack web development?</span>
                  <div style={{ width: '100%', justifyContent: 'left', textAlign: 'left', border: '2px solid #91a1bf', padding: '20px', borderRadius: '10px' }} className="exper_card" data-aos="fade-right">
                    <p style={{ padding: '5px' }}>Yes! We offer full-stack development services using modern technologies like React.js, Next.js, Node.js, Express.js, and MongoDB/PostgreSQL.
                      Whether you need a dynamic website or a scalable web application,
                      We can build a tailored solution.</p>
                  </div>
                </div>
              </div>

              <div className="exper_card" data-aos="fade-up">
                <span style={{ paddingtop: '20px' }}>4. Can you help with digital marketing and advertising?</span>
                <div style={{ width: '100%', justifyContent: 'left', textAlign: 'left', border: '2px solid #91a1bf', padding: '20px', borderRadius: '10px' }} className="exper_card" data-aos="fade-right">
                  <p style={{ padding: '5px' }}>
                    Absolutely! We offer advertising, media planning, media buying, and public relations services to boost brand awareness,
                    drive traffic, and increase conversions through strategic campaigns.
                  </p>
                </div>
              </div>

              <div className="exper_card" data-aos="fade-up">
                <span style={{ paddingtop: '20px' }}>6. How can I get started with your services?</span>
                <div style={{ width: '100%', justifyContent: 'left', textAlign: 'left', border: '2px solid #91a1bf', padding: '20px', borderRadius: '10px' }} className="exper_card" data-aos="fade-right">
                  <p style={{ padding: '5px' }}>
                    Getting started is easy! Simply contact me with your project requirements,
                    and we can discuss your goals, timelines, and the best approach to bring your ideas to life.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>







      
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="myskills_title">
            <h2 data-aos="fade-up">Testimonials</h2>
            <p data-aos="fade-up">
              Don't just take my word for it. Here's what my clients have to say about working with me.</p>
          </div>
          <div className="testimonials_slider">
            <div className="testimonial_cards">
              <div className="testimonial_card" data-aos="fade-up">
                <div className="testimonial_content">
                  <p>"Rakshith helped us transform our outdated website into a modern, user-friendly platform. 
                    His attention to detail and technical expertise were invaluable. 
                    Our conversion rates have increased by 35% since the redesign!"</p>
                </div>
                <div className="testimonial_author">
                  <div className="author_img">
                    <img src="/img/t1.jpg" alt="Client" />
                  </div>
                  <div className="author_info">
                    <h4>Dileep</h4>
                    <p>Founder CFO, <br />Dishiinfosolutions .</p>
                  </div>
                </div>
              </div>

              <div className="testimonial_card" data-aos="fade-up" data-aos-delay="100">
                <div className="testimonial_content">
                  <p>"Working with Rakshith was a game-changer for our startup. His UI/UX design skills and development expertise helped us launch our product on time and within budget. Our users consistently praise the intuitive interface."</p>
                </div>
                <div className="testimonial_author">
                  <div className="author_img">
                    <img src="/img/t2.webp" alt="Client" />
                  </div>
                  <div className="author_info">
                    <h4>Harish</h4>
                    <p>CO-Founder CEO, <br /> Dishiinfosolutions</p>
                  </div>
                </div>
              </div>

              <div className="testimonial_card" data-aos="fade-up" data-aos-delay="200">
                <div className="testimonial_content">
                  <p>"Rakshith's work on our e-commerce platform exceeded our expectations. The responsive design and seamless checkout process have significantly improved our customer experience. Sales have increased by 50% since the implementation!"</p>
                </div>
                <div className="testimonial_author">
                  <div className="author_img">
                    <img src="/img/t3.webp" alt="Client" />
                  </div>
                  <div className="author_info">
                    <h4>Emily Rodriguez</h4>
                    <p>Marketing Director, StyleHub</p>
                  </div>
                </div>
              </div>

              <div className="testimonial_card" data-aos="fade-up" data-aos-delay="300">
                <div className="testimonial_content">
                  <p>"Working with Rakshith on UI/UX design was a game-changer for our project. Their ability to create intuitive, user-friendly interfaces while maintaining a sleek and modern aesthetic was truly impressive. They not only enhanced the visual appeal but also improved the overall user experience, making navigation seamless and engaging. Their attention to detail and deep understanding of user behavior helped us achieve a product that our users love. I highly recommend Rakshith for any UI/UX design needs!"</p>
                </div>
                <div className="testimonial_author">
                  <div className="author_img">
                    <img src="/img/t4.jpeg" alt="Client" />
                  </div>
                  <div className="author_info">
                    <h4>Manoj</h4>
                    <p>Freelancer, Mr.SMM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
