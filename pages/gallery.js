import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import { Photo } from "@/models/Photo";
import Head from "next/head";
import Link from "next/link";

export default function gallery() {

    const { alldata, loading } = useFetchData('/api/photos')

    return <>

        <Head>
            <title>AI Photos Gallery | Rakshith's AI Generated Images</title>
            
            <meta name="description" content="Experience the beauty of AI-generated images, crafted with cutting-edge technology. Discover unique, high-quality visuals perfect for creativity and inspiration." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="keywords" content="AI photos, AI generated images, artificial intelligence art, digital art, Rakshith" />
            <meta name="author" content="Rakshith" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.mydesignnexus.in/gallery" />
            <meta property="og:title" content="AI Photos Gallery | Rakshith's AI Generated Images" />
            <meta property="og:description" content="Experience the beauty of AI-generated images, crafted with cutting-edge technology. Discover unique, high-quality visuals perfect for creativity and inspiration." />
            <meta property="og:image" content="https://www.mydesignnexus.in/img/logo.png" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://www.mydesignnexus.in/gallery" />
            <meta name="twitter:title" content="AI Photos Gallery | Rakshith's AI Generated Images" />
            <meta name="twitter:description" content="Experience the beauty of AI-generated images, crafted with cutting-edge technology. Discover unique, high-quality visuals perfect for creativity and inspiration." />
            <meta name="twitter:image" content="https://www.mydesignnexus.in/img/logo.png" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

            {/* AOS Animation library */}
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

            {/* Schema.org structured data for better SEO */}
            <script type="application/ld+json">
                {`
            {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "AI Photos Gallery",
                "description": "Experience the beauty of AI-generated images, crafted with cutting-edge technology.",
                "creator": {
                    "@type": "Person",
                    "name": "Rakshith"
                },
                "about": {
                    "@type": "Thing",
                    "name": "AI-generated art"
                },
                "url": "https://www.mydesignnexus.in/gallery"
            }
        `}
            </script>

            {/* Preload critical images */}
            <link rel="preload" as="image" href="https://wpthemebooster.com/demo/themeforest/html/kimono/assets/img/projects/3/1.jpg" />
        </Head>

        <div className="container">
            <div className="toptitle">
                <div className="toptitlecont flex">
                    <h1 data-aos="fade-right">AI <span>Photos</span></h1>
                    {/*<Link href='/gallery#galleryimages'><button>VIEW MORE</button></Link> */}
                    <p data-aos="fade-right">Experience the beauty of AI-generated images, crafted with cutting-edge technology.
                        Discover unique, high-quality visuals perfect for creativity and inspiration.
                        Explore the future of digital art with our stunning AI-powered gallery!</p>
                    <div className="rightimgsec">
                        <Link href='/gallery#galleryimages'><button>VIEW MORE</button></Link>
                        <img data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" src="https://wpthemebooster.com/demo/themeforest/html/kimono/assets/img/projects/3/1.jpg" alt="" />
                        <div className="r_img_top">
                            <img data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" src="https://wpthemebooster.com/demo/themeforest/html/kimono/assets/img/projects/1/6.jpg" alt="" />
                            <img data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" src="https://wpthemebooster.com/demo/themeforest/html/kimono/assets/img/projects/1/5.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="gallerybtmphotos" id="galleryimages">
            <div className="container">
                <div className="gbtmtitles text-center">
                    <h2><span>AI Generated</span> beautiful Photos</h2>
                </div>
                <div className="gallery_image_grid" >

                    {loading ? <Spinner /> : <>
                        {alldata.map((Photo) => {
                            return <div className="image-item">
                                <img src={Photo.images[0]} alt="" />
                                <div style={{backgroundColor:  '#9500ff', textAlign: 'center', height: 'auto', color: 'white', borderRadius:'5px', fontSize: "7px"}}>
                                    <h2>{Photo.title}</h2>
                                    <p>By Rakshith</p>
                                </div>
                            </div>
                        })}
                    </>
                    }
                    {/*<div className="image-item" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="https://wpthemebooster.com/demo/themeforest/html/kimono/assets/img/projects/6/1.jpg"
                            alt="Image 1" />
                        <div className="galeryimgiteminfo">
                            <h2>Bright Boho Sunshine</h2>
                            <p>By Lovette Nkayi</p>
                        </div>
                    </div>
                    <div className="image-item" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa3%2F7a%2F07%2Fa37a0778b22df62fbc87061413e6885f.jpg&f=1&nofb=1&ipt=a2b7945510b82dbf6d87b5c20d6f366b414445c07b9e7337752156422275186a&ipo=images"
                            alt="Image 5" />
                        <div className="galeryimgiteminfo">
                            <h2>Bright Boho Sunshine</h2>
                            <p>By Lovette Nkayi</p>
                        </div>
                    </div>
                    <div className="image-item" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F23%2F8f%2F34%2F238f34438bb5bef44315de6a26063dea.jpg&f=1&nofb=1&ipt=091969dee08c205db2a934bb6fd6699f5a1bb67556c2c434f612864d4842cf5d&ipo=images"
                            alt="Image 2" />
                        <div className="galeryimgiteminfo">
                            <h2>Bright Boho Sunshine</h2>
                            <p>By Lovette Nkayi</p>
                        </div>
                    </div>
                    <div className="image-item" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fda%2F00%2F77%2Fda00778a953d4ae89fcada7f977121f6.jpg&f=1&nofb=1&ipt=37261c5aeac3718141168a12d48ff2035c954d2baf75801e733ebd0c74fa6793&ipo=images"
                            alt="Image 3" />
                        <div className="galeryimgiteminfo">
                            <h2>Bright Boho Sunshine</h2>
                            <p>By Lovette Nkayi</p>
                        </div>
                    </div>
                    <div className="image-item" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F73%2Fa3%2F33%2F73a3331fdaf5e912a8b27534c15db703.jpg&f=1&nofb=1&ipt=c5164e15b379b9813be09e3e07194a377c32d6219f065967037a61c262231533&ipo=images"
                            alt="Image 4" />
                        <div className="galeryimgiteminfo">
                            <h2>Bright Boho Sunshine</h2>
                            <p>By Lovette Nkayi</p>
                        </div>
                    </div>
                    <div className="image-item" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uniqueideas.site%2Fwp-content%2Fuploads%2Fbig-little-best-friend-or-sister-fall-photoshoot-snap-pinterest.jpg&f=1&nofb=1&ipt=e9ab6bb60b4340ea1821d61587e262b86717c7b834d4bf5df46a144aea23125d&ipo=images"
                            alt="Image 6" />
                        <div className="galeryimgiteminfo">
                            <h2>Bright Boho Sunshine</h2>
                            <p>By Lovette Nkayi</p>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    </>
}
