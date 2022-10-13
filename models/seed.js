
const products = [
   { name: 'Nvidia RTX 2080ti',
     image: 'https://www.servethehome.com/wp-content/uploads/2019/01/NVIDIA-RTX-2080-Ti.jpg',
     price: 1549.00,
     productDescription:"The EVGA GeForce RTX 20-Series Graphics Cards are powered by the all-new NVIDIA Turing architecture to give you incredible new levels of gaming realism, speed, power efficiency, and immersion. With the EVGA GeForce RTX 20-Series gaming cards you get the best gaming experience with next generation graphics performance, ice cold cooling, and advanced overclocking features with the all new EVGA Precision X1 software.",
     inventory: 3,
     id: 0
   },
   { name: 'GIGABYTE GeForce RTX 3090 GAMING OC 24G Video Card, GV-N3090GAMING OC-24GD',
     image: 'https://c1.neweggimages.com/ProductImageCompressAll1280/14-932-327-01.jpg',
     price: 1799.99,
     productDescription: "Break gaming barriers with the ASUS NVIDIA GeForce RTX 3090 Ti TUF Gaming Overclocked Graphics Card. Supporting NVIDIA's newest Ampere architecture, you can put this graphics card to the test handling 4k and 1440p gaming at the highest possible frame rates and succeed.",
     inventory: 10,
     id: 1
    },
    { name: 'Acer Nitro XV272U 27" 2K WQHD (2560 x 1440) 170Hz Gaming Monitor FreeSync; HDR; HDMI DisplayPort; IPS Panel',
      image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/626571_152389_01_front_zoom.jpg',
      price: 249.00,
      productDescription: "In competitive gaming, every frame matters. Introducing Acer's XV272U gaming monitor - the WQHD (2560 x 1440) resolution monitor that can keep up with your game play. Through AMD Radeon technology, the games frame rate is determined by your graphics card, not the fixed refresh rate of the monitor, giving you a serious competitive edge. Plus, users can enjoy comfortable viewing experience while gaming via flicker-less, low dimming and ComfyView display. The design saves space on your desk and lets you place multiple monitors side by side to build a seamless big-screen display.",
      inventory: 25,
      id : 2
    },
    {name: "AOC CU34G2X 34\" 2K UWQHD (3440 x 1440) 144Hz UltraWide Curved Screen Gaming Monitor FreeSync; HDMI DisplayPort; Flicker-Free",
     image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/618536_074237_01_front_zoom.jpg',
     price: 348.99,
     productDescription: 'G2 series ultra-wide gaming monitor with 2K resolution, height adjustable stand, and 300 nits of brightness will bring in-game realism and immersion to another level.',
     inventory: 12,
     id: 3
    }, 
    {name: "Corsair Vengeance LPX 32GB (2 x 16GB) DDR4-3200 PC4-25600 CL16 Dual Channel Desktop Memory Kit CMK32GX4M2E3200 - Black",
     image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/616299_046201_01_front_zoom.jpg',
     price: 154.99,
     productDescription: "The VENGEANCE LPX DDR4 memory is designed for gamers and DIY enthusiasts seeking a compact performance memory solution. Equipped with an eight-layer PCB, highly-screened memory ICs, and efficient aluminum heat spreader, the VENGEANCE LPX DDR4 memory runs extremely fast on various motherboards and keeps high temperature at bay for superior overclocking headroom. Overclocking is safe and totally hassle-free, thanks to support for XMP 2.0. Choose from four colors and outshine your competitors.",
     inventory: 99,
     id: 4
    },
    {name: "G.Skill Trident Z5 Neo RGB Series 32GB (2 x 16GB) DDR5-6000 PC5-48000 CL36 Dual Channel Desktop Memory Kit F5-6000J3636F16GX2-TZ5NR - Black",
     image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/653732_440784_01_front_zoom.jpg',
     price: 249.99,
     productDescription: "Trident Z5 Neo RGB series DDR5 memory is the latest flagship memory series designed for high-performance overclocked performance on DDR5-enabled AMD platforms, and supports AMD EXPO overclocking profiles to enable easy memory overclocking by simply enabling the EXPO profile in the BIOS with a compatible motherboard and processor. Featuring a sleek and streamlined aluminum heatspreader design with CNC highlight strips along the curves, as well as customizable RGB lighting support, the Trident Z5 Neo RGB is the ideal choice for overclockers, gamers, and PC enthusiasts to build a highperformance AMD system.",
     inventory: 50,
     id: 5
    },
    {name: "Lian Li Lancool II MESH Type C RGB Tempered Glass ATX Mid-Tower Computer Case - Black",
     image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/642886_329698_01_front_zoom.jpg',
     price: 124.99,
     productDescription: "LANCOOL II MESH RGB features a mesh front panel and mesh bottom left shroud panel, honeycomb vent design and built-in RGB fans, ensuring bountiful airflow delivered to your high-performance components while adorning the system with an RGB touch.",
     inventory: 12,
      id: 6
    },
    {name: "Lian Li O11 Dynamic EVO Tempered Glass ATX Mid-Tower Computer Case - Black",
     image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/645428_360032_01_front_zoom.jpg",
     price: 179.99,
     productDescription: "With only a few steps, the O11D EVO can be flipped in reverse mode to experience a seamless front and side tempered glass showroom view on the right side of the chassis. With only a few steps, the O11D EVO can be flipped in reverse mode to experience a seamless front and side tempered glass showroom view on the right side of the chassis.",
     inventory: 5,
     id: 7
    },
    {name: "NZXT H510 Flow Tempered Glass ATX Mid-Tower Computer Case - Black",
     image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/640393_309096_01_front_zoom.jpg",
     price:  89.99,
     productDescription: "This compact mid-tower is an ideal case for high-performance builds and features a perforated front panel for maximized airflow. The H510 is easy to build in and offers flexibility for a variety of ATX parts.",
     inventory: 4,
     id: 8

    },
    {name: "LG 65UQ7570 65\" Class (64.5\" Diag.) 4K Ultra HD Smart LED TV a5 Gen 5 AI Processor 4K; LG Channels; Game Optimizer",
     image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/647790_387522_01_front_zoom.jpg",
     price: 429.99,
     productDescription: "Dive into a world of free content, thanks to over 300+ free LG Channels and personalized recommendations for every one you share the remote with. Enhance your picture and sound with AI from the a5 Gen 5 AI Processor 4K. Customize your viewing experience with separate accounts and personalized recommendations for every member of your family. Make it the best gaming experience by quickly adjusting all your game settings in one location.",
     inventory: 16,
     id: 9
    },
    {name:"LG UP7670PUB 75\" Class (74.5\" Diag.) 4K Ultra HD Smart LED TV Quad Core Processor; Game Optimizer; webOS",
     image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/652757_437178_01_front_zoom.jpg",
     price: 649.99,
     productDescription: "More of what you want in one ultra-slim 4K package. It's Ultra High Definition backed by our premium processor to enhance color, contrast, detail, and sound. It's a huge library of content right at your fingertips. Our Quad Core Processor 4K gives you a smooth, crisp viewing experience with enhanced contrast, color, and blacks. TruMotion 120 technology reduces blur to sharpen details with up to 120 frames per second, giving fast-moving action sequences and lightning-quick sports a smooth, clean look. The rich 4K displays of LG UHD TVs deliver the quality you can see in every scene. Enjoy bright colors, high contrast, and impeccable detail. LG's fan-favorite webOS 6.0 platform supports popular streaming apps like Netflix, Hulu, Disney+, Apple TV+, Prime Video, and LG Channels meaning you always have a huge library of your favorite content right at your fingertips.",
     inventory: 2,
     id: 10

    },
    {name: "Samsung LogoSamsung 980 Pro SSD 2TB M.2 NVMe Interface PCIe Gen 4x4 Internal Solid State Drive with V-NAND 3 bit MLC Technology (MZ-V8P2T0B/AM)",
     image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/633342_229948_01_front_zoom.jpg",
     price: 239.99,
     productDescription: "Unleash the power of the Samsung 980 PRO PCIe 4.0 NVMe SSD for next-level computing. 980 PRO delivers 2x the data transfer rate of PCIe 3.0, while maintaining compatibility with PCIe 3.0. Get read speeds up to 7,000 MB/s with 980 PRO and push the limits of what SSDs can do. Powered by a new Elpsis controller designed to harmonize the flash memory components and the interface for superior speed - with a PCIe 4.0 interface thats 2x faster than PCIe 3.0 SSDs and 12x faster than Samsung SATA SSDs - every component of this NVMe SSD is manufactured by Samsung for performance that lasts.",
     inventory: 4,
     id: 11

    },
    {name: "Samsung 970 EVO Plus SSD 1TB M.2 NVMe Interface PCIe 3.0 x4 Internal Solid State Drive with V-NAND 3 bit MLC Technology (MZ-V7S1T0B/AM)",
     image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/601600_874099_01_front_zoom.jpg",
     price: 99.99,
     productDescription: "Accelerate into next-gen computing. The Samsung 970 EVO delivers breakthrough speeds and best-in-class reliability. The latest V-NAND, new Phoenix controller, and Intelligent TurboWrite technology enhance high-end gaming and 4K & 3D graphic editing. Samsung's innovative technology empowers you with the capacity to do more and accomplish more.",
     inventory: 10,
     id: 12

    },
    {name: "Inland Performance Plus 4TB 3D TLC NAND PCIe Gen 4 x4 NVMe M.2 Internal SSD",
     image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/647867_386813_01_front_zoom.jpg",
     price: 399.99,
     productDescription: "Get SSD speeds and inject new life into your laptop or desktop PC with a solid state drive from Inland Performance Plus. With a fast, reliable Inland SSD, you will experience quicker bootup and shutdown, and quicker application response and data transfer speeds than with a typical hard disk drive without purchasing a new computer. Designed for the new Gen4 x4 PCIe slots to achieve the fastest read/write speeds available. SSD Capacity 2TB Lastest Extreme NVMe M.2 PCIe Gen4 x4 Interface PCIe 4.0 and NVMe 1.3 compliance - backwards compatible with PCIe 3.0 M.2 2280 M Key form factor fits directly into your motherboard Incredible sequential read/write speed up to 7,200MB/s and 6,800MB/s (CDM) respectively, making it nearly ten times faster than a SATA SSD 3D TLC NAND flash, resistant to shock, vibration, and movement - no overheating, no noise, keeps your drive performing at its best for years Power Management Support for APST / ASM / L1.2 - supports SMART and TRIM commands Advanced Wear Leveling, Bad Block Management, and Over Provision Ideal for mainstream PCs, laptops, and ultrabooks for personal, gaming, and business use.",
     invetory: 1,
     id: 13

    }


]


module.exports = products;