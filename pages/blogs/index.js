import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';
import Head from 'next/head';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import Blogsearch from '@/components/Blogsearch';
import Link from 'next/link';
import useFetchData from '@/hooks/useFetchData';
import Spinner from '@/components/Spinner';

export default function blogs() {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');

    const { alldata, loading } = useFetchData('/api/blogs');

    // Function to handle page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const allblog = alldata.length; // Total number of blogs
    // Filter all data based on search query
    const filteredBlogs = searchQuery.trim() === '' ? alldata : alldata.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Calculate index of the first blog displayed on the current page
    const indexOfFirstblog = (currentPage - 1) * perPage;
    const indexOfLastblog = currentPage * perPage;

    // Get the current page's blogs
    const currentBlogs = filteredBlogs.slice(indexOfFirstblog, indexOfLastblog);

    // publish blogs
    const publishedData = currentBlogs.filter(ab => ab.status === "publish");

    const sliderpubdata = alldata.filter(ab => ab.status === "publish");

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allblog / perPage); i++) {
        pageNumbers.push(i);
    }


    const [searchInput, setSearchInput] = useState(false);

    const handleSearchOpen = () => {
        setSearchInput(!searchInput);
    }

    const handleSearchClose = () => {
        setSearchInput(false);
    }



    return <>
        <Head>
                {/* Basic Meta Tags */}
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Design Nexus Blog | UI/UX Design, Web Development,  AI Tools and More</title>
                <meta name="description" content="Explore articles on UI/UX design, web development, AI tools, career advice, and more at My Design Nexus - your resource hub for design and tech professionals." />

                {/* Open Graph Meta Tags */}
                <meta property="og:site_name" content="My Design Nexus" />
                <meta property="og:title" content="My Design Nexus Blog - UI/UX Design, Web Development & AI Tools" />
                <meta property="og:description" content="Explore articles on UI/UX design, web development, AI tools, career advice, and more at My Design Nexus." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mydesignnexus.in/blogs" />
                <meta property="og:image" content="https://www.mydesignnexus.in/img/logo.png" />
                <meta property="og:image:alt" content="My Design Nexus Blog" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="My Design Nexus Blog - UI/UX Design, Web Development & AI Tools" />
                <meta name="twitter:description" content="Explore articles on UI/UX design, web development, AI tools, career advice, and more at My Design Nexus." />
                <meta name="twitter:image" content="https://www.mydesignnexus.in/img/blog-featured-image.jpg" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.mydesignnexus.in/blogs" />

                {/* Additional SEO Meta Tags */}
                <meta name="author" content="Rakshith Gowda" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="UI design, UX design, web development, AI tools, Figma, JavaScript, HTML5, CSS3, resume builder, interview tips, job hunt, prompt engineering" />

                {/* Mobile-specific */}
                <meta name="theme-color" content="#19195c" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />


                {/* Blog Categories Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "My Design Nexus - Blog Categories",
                        "description": "Explore our blog categories covering UI/UX design, web development, AI tools, career advice, and more.",
                        "url": "https://www.mydesignnexus.in/blogs",
                        "isPartOf": {
                            "@type": "WebSite",
                            "name": "My Design Nexus",
                            "url": "https://www.mydesignnexus.in"
                        },
                        "hasPart": [
                            {
                                "@type": "CollectionPage",
                                "name": "User Interface",
                                "description": "Articles about UI design principles, best practices, and trends",
                                "url": "https://www.mydesignnexus.in/blogs/category/User%20Interface",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "User Experience",
                                "description": "Articles about UX design, user research, and experience optimization",
                                "url": "https://www.mydesignnexus.in/blogs/category/User%20Experience",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "Figma",
                                "description": "Tutorials, tips, and workflows for Figma design tool",
                                "url": "https://www.mydesignnexus.in/blogs/category/Figma",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "Gen AI",
                                "description": "Articles about generative AI applications in design and development",
                                "url": "https://www.mydesignnexus.in/blogs/category/Gen%20AI",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "Prompt Engineering",
                                "description": "Guides and best practices for crafting effective AI prompts",
                                "url": "https://www.mydesignnexus.in/blogs/category/Prompt%20Engineering",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "HTML5",
                                "description": "Tutorials and articles about HTML5 features and implementations",
                                "url": "https://www.mydesignnexus.in/blogs/category/HTML5",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "CSS3",
                                "description": "Guides and resources for CSS3 styling and animations",
                                "url": "https://www.mydesignnexus.in/blogs/category/CSS3",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "JavaScript",
                                "description": "Tutorials and articles about JavaScript programming and frameworks",
                                "url": "https://www.mydesignnexus.in/blogs/category/Java%20Script",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "Aptitude",
                                "description": "Resources for improving technical and logical aptitude skills",
                                "url": "https://www.mydesignnexus.in/blogs/category/Aptitude",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "Soft Skills",
                                "description": "Articles on developing communication, teamwork, and professional skills",
                                "url": "https://www.mydesignnexus.in/blogs/category/Soft%20Skills",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "Resume Builder",
                                "description": "Tips and guides for creating effective resumes and portfolios",
                                "url": "https://www.mydesignnexus.in/blogs/category/Resume%20Builder",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "Interview",
                                "description": "Preparation guides and tips for technical and design interviews",
                                "url": "https://www.mydesignnexus.in/blogs/category/Resume%20Builder",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "Job Hunt",
                                "description": "Strategies and resources for finding design and development jobs",
                                "url": "hhttps://www.mydesignnexus.in/blogs/category/Job%20Hunt",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "AI Tools",
                                "description": "Reviews and guides for AI tools useful in design and development",
                                "url": "https://www.mydesignnexus.in/blogs/category/AI%20Tools",
                                "numberOfItems": 1
                            },
                            {
                                "@type": "CollectionPage",
                                "name": "Others",
                                "description": "Miscellaneous articles on design, development, and technology",
                                "url": "https://www.mydesignnexus.in/blogs/category/AI%20Tools",
                                "numberOfItems": 1
                            },
                            ,
                            {
                                "@type": "CollectionPage",
                                "name": "Others",
                                "description": "Miscellaneous articles on design, development, and technology",
                                "url": "https://www.mydesignnexus.in/blogs/category/Others",
                                "numberOfItems": 1
                            }
                        ]
                    })}
                </script>

                {/* Blog Post Schema Template - Use this for individual blog posts */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.mydesignnexus.in/blogs/[slug]"
                        },
                        "headline": "Blog Post Title",
                        "description": "Brief description of the blog post content",
                        "image": "https://www.mydesignnexus.in/img/logo.png",
                        "author": {
                            "@type": "Person",
                            "name": "Rakshith Gowda",
                            "url": "https://www.mydesignnexus.in"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "My Design Nexus",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.mydesignnexus.in/img/logo.png"
                            }
                        },
                        "datePublished": "2025-03-15T09:00:00+05:30",
                        "dateModified": "2025-03-15T09:00:00+05:30",
                        "articleBody": "This is the full content of the blog post...",
                        "keywords": "keyword1, keyword2, keyword3",
                        "articleSection": "User Interface",
                        "wordCount": "1500"
                    })}
                </script>

                {/* Blog Category Pages Meta Tags */}
                {/* Example for a specific category page - repeat for each category */}
                {/* Add these conditionally based on current page */}

                <meta name="description" content="Explore our User Interface design articles covering principles, best practices, trends, and case studies to enhance your UI design skills." />
                <meta property="og:title" content="User Interface Articles - My Design Nexus Blog" />
                <meta property="og:description" content="Discover UI design principles, best practices, and trends to create more effective user interfaces." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mydesignnexus.in/blogs/category/user-interface" />
                <meta name="twitter:title" content="User Interface Articles - My Design Nexus Blog" />
                <meta name="twitter:description" content="Discover UI design principles, best practices, and trends to create more effective user interfaces." />


                {/* Blog Archive Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "url": "https://www.mydesignnexus.in/blogs",
                        "name": "My Design Nexus Blog",
                        "description": "Articles on design, development, AI tools, and career guidance for tech professionals",
                        "publisher": {
                            "@type": "Organization",
                            "name": "My Design Nexus",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.mydesignnexus.in/img/logo.png"
                            }
                        },
                        "blogPost": [
                            {
                                "@type": "BlogPosting",
                                "headline": "Example Blog Post Title",
                                "description": "Brief description of the blog post content",
                                "url": "https://www.mydesignnexus.in/blogs/example-post",
                                "image": "https://www.mydesignnexus.in/img/logo.png",
                                "author": {
                                    "@type": "Person",
                                    "name": "Rakshith Gowda"
                                },
                                "datePublished": "2025-03-15T09:00:00+05:30",
                                "articleSection": "User Interface"
                            }
                            // Add more blog posts as needed
                        ]
                    })}
                </script>

                {/* BreadcrumbList Schema for Blog Category Pages */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.mydesignnexus.in"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blog",
                                "item": "https://www.mydesignnexus.in/blogs"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "User Interface",
                                "item": "https://www.mydesignnexus.in/blogs/category/user-interface"
                            }
                        ]
                    })}
                </script>

                {/* How-to Schema for Tutorial Blog Posts */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Create Effective UI Designs in Figma",
                        "description": "Step-by-step guide to creating user-friendly interface designs using Figma",
                        "totalTime": "PT30M",
                        "estimatedCost": {
                            "@type": "MonetaryAmount",
                            "currency": "USD",
                            "value": "0"
                        },
                        "tool": [
                            {
                                "@type": "HowToTool",
                                "name": "Figma"
                            },
                            {
                                "@type": "HowToTool",
                                "name": "Web browser"
                            }
                        ],
                        "supply": [
                            {
                                "@type": "HowToSupply",
                                "name": "UI design kit (optional)"
                            }
                        ],
                        "step": [
                            {
                                "@type": "HowToStep",
                                "url": "https://www.mydesignnexus.in/blogs/example-post#step1",
                                "name": "Set up your Figma document",
                                "itemListElement": {
                                    "@type": "HowToDirection",
                                    "text": "Create a new Figma file and set up your document structure with frames for different screen sizes."
                                },
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://www.mydesignnexus.in/img/figma.svg"
                                }
                            },
                            {
                                "@type": "HowToStep",
                                "url": "https://www.mydesignnexus.in/blogs/example-post#step2",
                                "name": "Create a component library",
                                "itemListElement": {
                                    "@type": "HowToDirection",
                                    "text": "Build reusable components for buttons, input fields, and other UI elements."
                                },
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://www.mydesignnexus.in/img/component-library.jpg"
                                }
                            }
                            // Add more steps as needed
                        ]
                    })}
                </script>

                {/* Article Schema for Opinion/Editorial Blog Posts */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "The Future of UI Design with AI Integration",
                        "description": "An analysis of how AI is transforming user interface design and what designers need to know",
                        "image": "https://www.mydesignnexus.in/img/sui.svg",
                        "author": {
                            "@type": "Person",
                            "name": "Rakshith Gowda"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "My Design Nexus",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.mydesignnexus.in/img/logo.png"
                            }
                        },
                        "datePublished": "2025-03-01T09:00:00+05:30",
                        "dateModified": "2025-03-15T09:00:00+05:30"
                    })}
                </script>
        </Head>
        <div className="blogpage">
            <section className="tophero">
                <div className="container">
                    <div className="toptitle">
                        <div className="toptitlecont flex">
                            <h1 data-aos="fade-right">Welcome to <span>Rakshith Blog!</span></h1>
                            <p data-aos="fade-right">I write about web,User Interface, User Experience, mobile development and modern JavaScript frameworks. The best articles, links and news related to web and mobile development </p>
                            <div className="subemail" data-aos="fade-up">
                                <form action="#" className="flex">
                                    <input onClick={handleSearchOpen} type="text" placeholder="Search blogs here..." />
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="featured">
                        <div className="container">
                            <div className="border"></div>
                            <div className="featuredposts">
                                <div className="fetitle flex">
                                    <h3 data-aos="fade-up">Featured Posts :</h3>
                                </div>
                                <div className="feposts flex">
                                    <Swiper
                                        slidesPerView={'auto'}
                                        freeMode={true}
                                        spaceBetween={30}
                                        className="mySwiper"
                                        modules={[FreeMode]}
                                    >
                                        {loading ? <Spinner /> : <>
                                            {sliderpubdata.slice(0, 2).map((blog) => {
                                                return <SwiperSlide key={blog._id}>
                                                    <div  className="fpost" key={blog._id}>
                                                        <Link href={`/blogs/${blog.slug}`}>
                                                            <img src={blog.images[0]} alt={blog.title} />
                                                        </Link>
                                                        <div className="fpostinfo">
                                                            <div className="tegs flex">
                                                                {blog.blogcategory.map((cat) => {
                                                                    return <Link href={`/blogs/category/${cat}`} className="ai"><span></span>{cat}</Link>
                                                                })}
                                                            </div>
                                                            <h2><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></h2>
                                                            <div className="fpostby flex">
                                                                <img src="/img/coder.jpg" alt="" />
                                                                <p>Rakshith</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            })}
                                        </>}


                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="populartegssec">
                <div className="container">
                    <div className="border"></div>
                    <div className="populartegsdata">
                        <div className="fetitle">
                            <h3>All Tegs</h3>
                        </div>
                        <div className="poputegs">
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/User Interface" className="pteg" data-aos="fade-right">
                                <img src="/img/ui.svg" alt="" />
                                <div className="tegs">
                                    <div className="apps"><span></span>User Interface</div>
                                </div>
                            </Link>
                            <Link  style={{borderRadius:'30px'}} href="/blogs/category/User Experience" className="pteg" data-aos="fade-right">
                                <img src="/img/ux.svg" alt="" />
                                <div className="tegs">
                                    <div className="ai"><span></span>User Experience</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/Figma" className="pteg" data-aos="fade-right">
                                <img src="/img/figma.svg" alt="" />
                                <div className="tegs">
                                    <div className="vr"><span></span>Figma</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/Gen AI" className="pteg" data-aos="fade-left">
                                <img src="/img/genai.svg" alt="" />
                                <div className="tegs">
                                    <div className="apple"><span></span>Gen AI</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/Prompt Engineering" className="pteg" data-aos="fade-left">
                                <img src="/img/prompt.svg" alt="" />
                                <div className="tegs">
                                    <div className="google"><span></span>Prompt Eng</div>
                                </div>
                            </Link>
                        </div><br /><br />

                        <div className="poputegs">
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/HTML5" className="pteg" data-aos="fade-left">
                                <img src="/img/html.svg" alt="" />
                                <div className="tegs">
                                    <div className="vr"><span></span>HTML5</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/CSS3" className="pteg" data-aos="fade-left">
                                <img src="/img/css.svg" alt="" />
                                <div className="tegs">
                                    <div className="google"><span></span>CSS3</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/Java Script" className="pteg" data-aos="fade-left">
                                <img src="/img/java.svg" alt="" />
                                <div className="tegs">
                                    <div className="ai"><span></span>Java Script</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/Aptitude" className="pteg" data-aos="fade-left">
                                <img src="/img/apti.svg" alt="" />
                                <div className="tegs">
                                    <div className="apps"><span></span>Aptitude</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/Soft Skills" className="pteg" data-aos="fade-left">
                                <img src="/img/soft.svg" alt="" />
                                <div className="tegs">
                                    <div className="apple"><span></span>Soft Skills</div>
                                </div>
                            </Link>
                        </div><br /> <br />

                        <div className="poputegs">
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/Resume Builder" className="pteg" data-aos="fade-left">
                                <img src="/img/resume.svg" alt="" />
                                <div className="tegs">
                                    <div className="apple"><span></span>Resume Builder</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/Interview" className="pteg" data-aos="fade-left">
                                <img src="/img/interview.svg" alt="" />
                                <div className="tegs">
                                    <div className="apps"><span></span>Interview</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/Job Hunt" className="pteg" data-aos="fade-left">
                                <img src="/img/job.svg" alt="" />
                                <div className="tegs">
                                    <div className="ai"><span></span>Job Hunt</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/AI Tools" className="pteg" data-aos="fade-left">
                                <img src="/img/ai.svg" alt="" />
                                <div className="tegs">
                                    <div className="vr"><span></span>AI Tools</div>
                                </div>
                            </Link>
                            <Link style={{borderRadius:'30px'}} href="/blogs/category/Others" className="pteg" data-aos="fade-left">
                                <img src="/img/others.svg" alt="" />
                                <div className="tegs">
                                    <div className="fintech"><span></span>Others</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latestpostssec">
                <div className="container">
                    <div className="border"></div>
                    <div className="latestpostsdata">
                        <div className="fetitle">
                            <h3>Latest Articles :</h3>
                        </div>
                        <div className="latestposts">
                            {loading ? <Spinner /> : <>
                                {publishedData.map((blog) => {
                                    return <div className="lpost" data-aos="flip-right" key={blog._id}>
                                        <div className="lpostimg">
                                            <Link href={`/blogs/${blog.slug}`}><img src={blog.images[0]} alt={blog.title} /></Link>
                                            <div className="tegs">
                                                {blog.blogcategory.map((cat) => {
                                                    return <Link href={`/blogs/category/${cat}`} className="ai"><span></span>{cat}</Link>
                                                })}
                                            </div>
                                        </div>
                                        <div className="lpostinfo">
                                            <h3><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                                            </h3>
                                            <p>Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Haec
                                                et tu ita posuisti, et verba vestra sunt. Contemnit enim disserendi elegantiam,
                                                confuse loquitur.

                                                Bona autem corporis huic sunt, quod posterius posui, similiora. Quod cum ita sit,
                                                perspicuum est omnis rectas res atque laudabilis eo referri, ut</p>
                                            <h4 className="flex"><img src="img/coder.jpg" alt="" /><span>Rakshith</span></h4>
                                        </div>
                                    </div>
                                })}
                            </>}

                        </div>
                    </div>

                    {publishedData.length === 0 ? (
                        ""
                    ) : (
                        <div className='blogspaginationbtn flex flex-center mt-3'>
                            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                            {pageNumbers.slice(Math.max(currentPage - 3, 0), Math.min(currentPage + 2, pageNumbers.length)).map(number => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`${currentPage === number ? 'active' : ''}`}
                                >
                                    {number}
                                </button>
                            ))}
                            <button onClick={() => paginate(currentPage + 1)} disabled={currentBlogs.length < perPage}>Next</button>
                        </div>
                    )}
                </div>
            </section>


            {searchInput ? <Blogsearch cls={handleSearchClose} /> : null}


        </div>
    </>
}
