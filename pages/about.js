import Head from "next/head";
import React, { useState, useEffect, useMemo } from 'react';
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from 'recharts';
import { Calendar, Briefcase, Award, ChevronRight, Clock, MapPin } from 'lucide-react';



export default function about() {
    // Sample education data - BE data
    const educationData = [
        { semester: 'Sem 3 (jan/feb 2023)', SGPA: 5.61, CGPA: 7.21 },
        { semester: 'Sem 4 (May/June/July 2023)', SGPA: 8.0, CGPA: 7.73 },
        { semester: 'Sem 5 (Dec/Jan 2023-24)', SGPA: 7.5, CGPA: 7.56 },
        { semester: 'Sem 6 (June/July 2024)', SGPA: 9.0, CGPA: 7.82 },
        { semester: 'Sem 7 (Dec/Jan 2024-25)', SGPA: 8.0, CGPA: 7.85 },
        { semester: 'Sem 8 (Result Not Declared)', SGPA: 0.0, CGPA: 7.85 },
    ];

    // Diploma education data - you can replace with your actual data
    const diplomaData = [
        { semester: 'Sem 1 (Aug-Dec 2016)', SGPA: 6.6, CGPA: 6.6 },
        { semester: 'Sem 2 (Jan-May 2017)', SGPA: 7.1, CGPA: 7.1 },
        { semester: 'Sem 3 (Jun-Dec 2017)', SGPA: 7.5, CGPA: 7.5 },
        { semester: 'Sem 4 (Jan-May 2018)', SGPA: 7.6, CGPA: 7.6 },
        { semester: 'Sem 5 (Jun-Dec 2018)', SGPA: 8.2, CGPA: 8.2 },
        { semester: 'Sem 6 (Jan-May 2019)', SGPA: 7.7, CGPA: 7.7 },
        { semester: 'In-plant Training (Jun 2019-Jun 2020)', SGPA: 8.2, CGPA: 8.2 },
    ];

    // SSLC data
    const sslcData = [
        { name: "SSLC (2016)", percentage: 68.88 }
    ];

    // Custom tooltip component to clearly display percentage values
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}>
                    <p style={{ margin: '0', fontWeight: 'bold' }}>{`${label}`}</p>
                    {payload[0]?.name === "percentage" ? (
                        <p style={{ margin: '0', color: '#ff7300' }}>{`Percentage: ${payload[0]?.value}%`}</p>
                    ) : (
                        <>
                            <p style={{ margin: '0', color: '#8884d8' }}>{`SGPA: ${payload[0]?.value} (${(payload[0]?.value * 10).toFixed(1)}%)`}</p>
                            <p style={{ margin: '0', color: '#82ca9d' }}>{`CGPA: ${payload[1]?.value} (${(payload[1]?.value * 10).toFixed(1)}%)`}</p>
                        </>
                    )}
                </div>
            );
        }
        return null;
    };

    // Animation states for each section
    const [animateBE, setAnimateBE] = useState(false);
    const [animateDiploma, setAnimateDiploma] = useState(false);
    const [animateSSLC, setAnimateSSLC] = useState(false);

    // Enhanced animation with intersection observer
    useEffect(() => {
        // Create intersection observers for each section
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const beObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setAnimateBE(true);
                beObserver.disconnect();
            }
        }, observerOptions);

        const diplomaObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setAnimateDiploma(true);
                diplomaObserver.disconnect();
            }
        }, observerOptions);

        const sslcObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setAnimateSSLC(true);
                sslcObserver.disconnect();
            }
        }, observerOptions);

        // Observe elements
        const beElement = document.getElementById('be-section');
        const diplomaElement = document.getElementById('diploma-section');
        const sslcElement = document.getElementById('sslc-section');

        if (beElement) beObserver.observe(beElement);
        if (diplomaElement) diplomaObserver.observe(diplomaElement);
        if (sslcElement) sslcObserver.observe(sslcElement);

        return () => {
            beObserver.disconnect();
            diplomaObserver.disconnect();
            sslcObserver.disconnect();
        };
    }, []);





    // Use React.memo for heavy components
    const EducationChart = useMemo(() => {
        return (
            <ResponsiveContainer width="95%" height="100%">
                <LineChart
                    data={educationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                        dataKey="semester"
                        tick={{ fill: '#333' }}
                        axisLine={{ stroke: '#ddd' }}
                    />
                    <YAxis
                        domain={[0, 10]}
                        tick={{ fill: '#333' }}
                        axisLine={{ stroke: '#ddd' }}
                        label={{
                            value: 'GPA (Scale of 10)',
                            angle: -90,
                            position: 'insideLeft',
                            style: { textAnchor: 'middle', fill: '#666' }
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ paddingTop: '10px' }}
                        formatter={(value) => <span style={{ color: '#333', fontWeight: 'bold' }}>{value}</span>}
                    />
                    <Line
                        type="monotone"
                        dataKey="SGPA"
                        stroke="#8884d8"
                        strokeWidth={3}
                        dot={{
                            r: 6,
                            strokeWidth: 2,
                            fill: 'white',
                            stroke: '#8884d8'
                        }}
                        activeDot={{
                            r: 8,
                            stroke: '#8884d8',
                            strokeWidth: 2,
                            fill: '#8884d8'
                        }}
                        name="Semester GPA"
                        animationDuration={1500}
                        animationEasing="ease-in-out"
                    />
                    <Line
                        type="monotone"
                        dataKey="CGPA"
                        stroke="#82ca9d"
                        strokeWidth={3}
                        dot={{
                            r: 6,
                            strokeWidth: 2,
                            fill: 'white',
                            stroke: '#82ca9d'
                        }}
                        activeDot={{
                            r: 8,
                            stroke: '#82ca9d',
                            strokeWidth: 2,
                            fill: '#82ca9d'
                        }}
                        name="Cumulative GPA"
                        animationDuration={1500}
                        animationEasing="ease-in-out"
                        animationBegin={300}
                    />
                </LineChart>
            </ResponsiveContainer>
        );
    }, [educationData]);

    const DiplomaChart = useMemo(() => {
        return (
            <ResponsiveContainer width="95%" height="100%">
                <LineChart
                    data={diplomaData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                        dataKey="semester"
                        tick={{ fill: '#333' }}
                        axisLine={{ stroke: '#ddd' }}
                    />
                    <YAxis
                        domain={[0, 10]}
                        tick={{ fill: '#333' }}
                        axisLine={{ stroke: '#ddd' }}
                        label={{
                            value: 'GPA (Scale of 10)',
                            angle: -90,
                            position: 'insideLeft',
                            style: { textAnchor: 'middle', fill: '#666' }
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ paddingTop: '10px' }}
                        formatter={(value) => <span style={{ color: '#333', fontWeight: 'bold' }}>{value}</span>}
                    />
                    <Line
                        type="monotone"
                        dataKey="SGPA"
                        stroke="#ff5722"
                        strokeWidth={3}
                        dot={{
                            r: 6,
                            strokeWidth: 2,
                            fill: 'white',
                            stroke: '#ff5722'
                        }}
                        activeDot={{
                            r: 8,
                            stroke: '#ff5722',
                            strokeWidth: 2,
                            fill: '#ff5722'
                        }}
                        name="Semester GPA"
                        animationDuration={1500}
                        animationEasing="ease-in-out"
                    />
                    <Line
                        type="monotone"
                        dataKey="CGPA"
                        stroke="#2196f3"
                        strokeWidth={3}
                        dot={{
                            r: 6,
                            strokeWidth: 2,
                            fill: 'white',
                            stroke: '#2196f3'
                        }}
                        activeDot={{
                            r: 8,
                            stroke: '#2196f3',
                            strokeWidth: 2,
                            fill: '#2196f3'
                        }}
                        name="Cumulative GPA"
                        animationDuration={1500}
                        animationEasing="ease-in-out"
                        animationBegin={300}
                    />
                </LineChart>
            </ResponsiveContainer>
        );
    }, [diplomaData]);

    const SSLCChart = useMemo(() => {
        return (
            <ResponsiveContainer width="95%" height="100%">
                <BarChart
                    data={sslcData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: '#333' }}
                        axisLine={{ stroke: '#ddd' }}
                    />
                    <YAxis
                        domain={[0, 100]}
                        tick={{ fill: '#333' }}
                        axisLine={{ stroke: '#ddd' }}
                        label={{
                            value: 'Percentage (%)',
                            angle: -90,
                            position: 'insideLeft',
                            style: { textAnchor: 'middle', fill: '#666' }
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                        dataKey="percentage"
                        fill="#ff7300"
                        animationDuration={1500}
                        animationEasing="ease-in-out"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        );
    }, [sslcData]);

    return <>
        <Head>
            <title>About</title>
        </Head>

        {/* hero section */}
        <section style={{ marginTop: '-50px' }} className="hero" >
            <div className="container">
                <div className="flex w-100">
                    <div className="heroinfoleft">
                        {/* About */}
                        <div className="myskills_title">
                            <h2 data-aos="fade-up">About</h2>
                            <div className="exper_card" data-aos="fade-up">
                                <p style={{ textAlign: 'left' }}>
                                    I hold a Diploma in Tool and Die Making (DTDM),
                                    completed at the Government Tool Room and Training Center between 2016 and 2019.
                                    The program was a full 4-year course. Though I highly appreciate my background in mechanical engineering,
                                    as of January 2023, I have been a Computer Science student because I have always been fascinated by design and
                                    wanted to become a software engineer. My dream is to solve real-world problems with the help of innovative software
                                    solutions that merge creativity and technology. <br /> <br />

                                    Being in a UI/UX design learning experience,
                                    I find it truly exciting to venture into the dynamic and user-centered discipline.
                                    Learning about basic principles of design, wireframing,
                                    and prototyping is like unlocking new abilities within oneself for developing meaningful user experiences.
                                    Fun and inspiring at the same time, it inspires growth, experimentation,
                                    and constantly improves one's capabilities in order to grow creatively with design.
                                    This fuels the fire to achieve my passion in making something through creativity and innovation.
                                </p>
                            </div>
                        </div>
                        <div className="hero_img_box heroimgbox" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="/img/me.jpg" alt="" />
                        </div>
                    </div>
                    <div className="heroimageright" >
                        <div className="hero_img_box" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img style={{ marginTop: '-0px' }} src='/img/me.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Education */}
        <section className="recentblogs">
            <div className="container">
                <div className="myskills_title">
                    <h2 data-aos="fade-up">My Education History</h2>
                    <p data-aos="fade-up">Explore my comprehensive education history, including my school academics, diploma, engineering scores, projects, and achievements.</p>
                </div>

                {/* Bachelor of Engineering Section */}
                <div id="be-section" style={{
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                    marginBottom: '50px',
                    opacity: animateBE ? 1 : 0,
                    transform: animateBE ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}>
                    <h2 style={{
                        color: '#9500ff',
                        fontWeight: 'bold',
                        padding: '20px',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                        borderRadius: '12px 12px 0 0',
                        margin: 0
                    }}>Bachelor of Engineering (2023-2025)</h2>

                    {/* CGPA and SGPA Chart with enhanced animations and tooltips */}
                    <div className="education-chart" style={{
                        width: '95%',
                        height: '500px',
                        padding: '20px',
                        margin: '20px auto'
                    }}>
                        {EducationChart}
                    </div>

                    <div style={{ margin: '20px', color: 'black' }}>
                        <div style={{ borderLeft: '4px solid #9500ff', paddingLeft: '15px', marginBottom: '25px' }}>
                            <h2 style={{ color: '#9500ff', fontSize: '30px', marginBottom: '15px' }}> Academic Information</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b> Degree: </b> Bachelor of Engineering (BE)</p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>Specialization: </b> Computer Science</p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>College: </b><a href="https://bce.org.in/" style={{ color: '#9500ff' }}><u> Visit To My College</u></a></p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>Key Skills:</b> UI/UX, HTMI5, CSS3, JS, MERN</p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>CGPA/Percentage:</b> 7.85</p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>More Details:</b><a href="https://docs.google.com/spreadsheets/d/1MqPRE1SjcqKOSivubwWdvDGPm_pA4AsC96iaBPcr948/edit?gid=0#gid=0" style={{ color: '#9500ff' }}><u> View More</u></a></p>
                            </div>
                        </div>

                        <div  style={{ marginTop: '25px', background: '#fff8e1', padding: '15px', borderRadius: '8px', border: '1px solid #4caf50' }}>
                            <h2 style={{ fontSize: '15px', marginBottom: '0' }}><span style={{ color: '#4caf50', fontWeight: 'bold' }}>Note:</span> As per VTU rules diploma student can join directly to B.E 3rd sem</h2>
                        </div><br />
                    </div>
                </div>

                {/* Diploma Section */}
                <div id="diploma-section" style={{
                   width: '100%',
                   height: '100%',
                   background: 'white',
                   borderRadius: '12px',
                   boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                   marginBottom: '50px',
                   opacity: animateBE ? 1 : 0,
                   transform: animateBE ? 'translateY(0)' : 'translateY(30px)',
                   transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}>
                    <h2 style={{
                         color: '#9500ff',
                         fontWeight: 'bold',
                         padding: '20px',
                         textAlign: 'center',
                         background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                         borderRadius: '12px 12px 0 0',
                         margin: 0
                    }}>Diploma in Tool and Die Making (2016-2020)</h2>

                    {/* Diploma Chart */}
                    <div className="education-chart" style={{
                        width: '95%',
                        height: '500px',
                        padding: '20px',
                        margin: '20px auto'
                    }}>
                        {DiplomaChart}
                    </div>

                    <div style={{ margin: '20px', color: 'black' }}>
                        <div style={{ borderLeft: '4px solid #9500ff', paddingLeft: '15px', marginBottom: '25px' }}>
                            <h2 style={{ color: '#9500ff', fontSize: '30px', marginBottom: '15px' }}>Diploma Information</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>Diploma: </b> Tool and Die Making (DTDM)</p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>Institution: </b> Government Tool Room and Training Center</p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>Duration: </b> 3 Years Academics + 1 Year In-plant Training</p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>CGPA/Percentage: </b> 7.84</p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>Key Skills: </b> CNC Programming, CAD/CAM, Die Design</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '25px', background: '#fff8e1', padding: '15px', borderRadius: '8px', border: '1px solid #4caf50' }}>
                            <h2 style={{ fontSize: '15px', marginBottom: '0' }}><span style={{ color: '#4caf50', fontWeight: 'bold' }}>Highlight:</span> Completed one year of in-plant training with hands-on industrial experience</h2>
                        </div><br />
                    </div>
                </div>

                {/* SSLC Section */}
                <div id="sslc-section" style={{
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                    marginBottom: '50px',
                    opacity: animateSSLC ? 1 : 0,
                    transform: animateSSLC ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                    transitionDelay: '0.4s'
                }}>
                    <h2 style={{
                         color: '#9500ff',
                         fontWeight: 'bold',
                         padding: '20px',
                         textAlign: 'center',
                         background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                         borderRadius: '12px 12px 0 0',
                         margin: 0
                    }}>Secondary School Leaving Certificate (SSLC)</h2>

                    {/* SSLC Chart */}
                    <div className="education-chart" style={{
                        width: '95%',
                        height: '300px',
                        padding: '20px',
                        margin: '20px auto'
                    }}>
                        {SSLCChart}
                    </div>

                    <div style={{ margin: '20px', color: 'black' }}>
                        <div style={{ borderLeft: '4px solid #9500ff', paddingLeft: '15px', marginBottom: '25px' }}>
                            <h2 style={{ color: '#9500ff', fontSize: '30px', marginBottom: '15px' }}>School Information</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>Certificate: </b> SSLC (10th Standard)</p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>Year of Completion: </b> 2016</p>
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', transition: 'transform 0.3s', cursor: 'pointer' }} className="info-card">
                                <p style={{ fontSize: '16px' }}> <b>Percentage: </b> 68.88%</p>
                            </div><br />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Add styles for the info card hover effect */}
        <style jsx>{`
            .info-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            /* Add animation for chart elements */
            .recharts-layer {
                transition: opacity 0.3s ease-in-out;
            }
        `}</style>
    </>
}