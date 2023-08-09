type teamcard ={
    alt:string;
    index:number;
    img:string;
}
const Teamcard = ({alt,index,img}:teamcard) => {
    let baseclass=""
    let secondclass=""
    if(index&1){
        baseclass=" group min-w-[50%] lg:min-w-[25%] flex justify-center px-5 rounded-2xl relative rotate-2"
        secondclass=" overflow-hidden rounded-2xl relative group-hover:rotate-[-2deg] group-hover:scale-110 group-hover:duration-300 linear group-hover:linear"
    }
    else{
        baseclass=" group min-w-[50%] lg:min-w-[25%] flex justify-center px-5 rounded-2xl relative rotate-[-2deg]"
        secondclass=" overflow-hidden rounded-2xl relative group-hover:rotate-[2deg] group-hover:scale-110 group-hover:duration-300 linear group-hover:linear"
    }
    return (
        <div className={baseclass}>
            <div className={secondclass}>
                <img src={img} alt={alt} className="aspect-[4/3] w-full h-full flex bg-slate-200 min-w-full object-cover" />
            </div>
        </div>
    )
}

function Team() {

    const Team = [
        {
          title1: "Sachin",
          title2: "Pathak",
          img: "https://avatars.githubusercontent.com/u/103988614?v=4",
          post: "Site Developer",
          links: [
            { to: "https://www.linkedin.com/in/sachin-pathak-b52b20215", icon: 'linkedin' },
            { to: "https://instagram.com/sup_sachin07", icon: 'instagram' },
            { to: "https://github.com/sachinpathak123", icon: 'github' }
          ]
        },
        {
          title1: "Subhashis",
          title2: "Banerjee",
          img: "/Images/Subhashis_sir.jpg",
          post: "Mentor",
          links: [
            { to: "https://www.facebook.com/subhasish.banerjee.39", icon: 'facebook' }
          ]
        },
        {
          title1: "Pursottam",
          title2: "Shah",
          img: "https://avatars.githubusercontent.com/u/81693090",
          post: "Mentor",
          links: [
            { to: "https://www.linkedin.com/in/pursottamsah", icon: 'linkedin' },
            { to: "https://instagram.com/rahulsah6003", icon: 'instagram' },
            { to: "https://github.com/pursottam6003", icon: 'github' }
          ]
        },
        {
          title1: "Chandreshekhar",
          title2: "Tripathi",
          img: "https://avatars.githubusercontent.com/u/68462214",
          post: "Mentor",
          links: [
            { to: "https://www.linkedin.com/in/tripathics", icon: 'linkedin' },
            { to: "https://instagram.com/c_strip.z", icon: 'instagram' },
            { to: "https://github.com/tripathics", icon: 'github' }
          ]
        },
        {
          title1: "Dev",
          title2: "Kanyal",
          img: "https://avatars.githubusercontent.com/u/77870205",
          post: "Mentor",
          links: [
            { to: "https://www.linkedin.com/in/dev-singh-kanyal", icon: 'linkedin' },
            { to: "https://instagram.com/dev_singh_kanyal", icon: 'instagram' },
            { to: "https://github.com/dev-singh-kanyal", icon: 'github' }
          ]
        },
        {
          title1: "Keshav",
          title2: "Arora",
          img: "https://avatars.githubusercontent.com/u/124811079",
          post: "Site Developer",
          links: [
            { to: "https://www.linkedin.com/in/keshav-arora-a5a20325b", icon: 'linkedin' },
            { to: "https://instagram.com/keshav_7104", icon: 'instagram' },
            { to: "https://github.com/Keshav7104", icon: 'github' }
          ]
        },
        {
          title1: "Vanshika",
          title2: "Marwaha",
          img: "https://avatars.githubusercontent.com/u/101502532?v=4",
          post: "Site Developer",
          links: [
            { to: "https://www.linkedin.com/in/vanshika-marwaha", icon: 'linkedin' },
            { to: "https://instagram.com/d_chaotic_vibe", icon: 'instagram' },
            { to: "https://github.com/marwahavanshika", icon: 'github' }
          ]
        },
      ]
    return (
        <div className="flex flex-col bg-teal-600">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-semibold text-white mx-auto mt-3">Our Code Coaches</h1>
        <div className=" relative flex overflow-x-hidden overflow-y-visible w-auto stop">
            <div className="w-full py-12 lg:py-20 whitespace-nowrap flex flex-row animate-scroll lg:animate-large-scroll hover:stop">
                {Team.map((alt,index)=>(
                    <Teamcard alt={alt.title1} key={index} index={index} img={alt.img} />
                ))}
            </div>
            <div className="w-full absolute top-0 py-12 lg:py-20 whitespace-nowrap flex flex-row animate-scroll2 lg:animate-large-scroll2">
                {
                    Team.map((alt,index)=>(
                        <Teamcard alt={alt.title1} key={index} index={index} img={alt.img} />
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default Team