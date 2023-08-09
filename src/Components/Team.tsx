type link ={
  to:string;
  icon:number;
}

type teamcard = {
  id: number;
  title: string;
  img: string;
  post: string;
  links: link[];
}
const Teamcard = ({ title, id, img, post, links }: teamcard) => {
  const icons =[
    'https://img.icons8.com/fluent/40/000000/facebook-new.png',
    'https://img.icons8.com/fluent/40/000000/linkedin-circled.png',
    'https://static.cdninstagram.com/rsrc.php/yv/r/BTPhT6yIYfq.ico',
    "https://img.icons8.com/dusk/40/null/github.png"
  ]// 0 for facebook 1 for linkedin 2 for instagram 3 for github
  let baseclass = ""
  let secondclass = ""
  if (id & 1) {
    baseclass = " group min-w-[50%] lg:min-w-[25%] flex justify-center px-5 rounded-2xl relative rotate-2"
    secondclass = " overflow-hidden rounded-2xl relative group-hover:rotate-[-2deg] group-hover:scale-110 group-hover:duration-300 linear group-hover:linear"
  }
  else {
    baseclass = " group min-w-[50%] lg:min-w-[25%] flex justify-center px-5 rounded-2xl relative rotate-[-2deg]"
    secondclass = " overflow-hidden rounded-2xl relative group-hover:rotate-[2deg] group-hover:scale-110 group-hover:duration-300 linear group-hover:linear"
  }
  return (
    <div className={baseclass}>
      <div className={secondclass}>
        <div className=" absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.7)] opacity-0 group-hover:opacity-70 transition-opacity"></div>
        <img src={img} alt={title} className="aspect-[4/3] w-full h-full flex bg-slate-200 min-w-full object-cover " />
        <div className=" absolute top-3/4 left-1/4 opacity-0 group-hover:opacity-100 ease-in transition-all group-hover:top-1/2">
          <h3 className="text-white text-xl lg:text-2xl ">{title}</h3>
          <h4 className=" text-white text-xs md:text-sm lg:text-lg">{post}</h4>
          <ul className=" flex flex-row items-center justify-center gap-2">
            {links.map(link => (
              <li key={link.to}>
                <a href={link.to}>
                  <img src={icons[link.icon]} alt="link" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Team() {

  const Team = [
    {
      id: 1,
      title: "Sachin Pathak",
      img: "https://avatars.githubusercontent.com/u/103988614?v=4",
      post: "Site Developer",
      links: [
        { to: "https://www.linkedin.com/in/sachin-pathak-b52b20215", icon: 1 },
        { to: "https://instagram.com/sup_sachin07", icon: 2 },
        { to: "https://github.com/sachinpathak123", icon: 3 }
      ]
    },
    {
      id: 2,
      title: "Subhashis Banerjee",
      img: "/Images/Subhashis_sir.jpg",
      post: "Mentor",
      links: [
        { to: "https://www.facebook.com/subhasish.banerjee.39", icon: 0 }
      ]
    },
    {
      id: 3,
      title: "Pursottam Shah",
      img: "https://avatars.githubusercontent.com/u/81693090",
      post: "Mentor",
      links: [
        { to: "https://www.linkedin.com/in/pursottamsah", icon: 1 },
        { to: "https://instagram.com/rahulsah6003", icon: 2 },
        { to: "https://github.com/pursottam6003", icon: 3 }
      ]
    },
    {
      id: 4,
      title: "Chandreshekhar Tripathi",
      img: "https://avatars.githubusercontent.com/u/68462214",
      post: "Mentor",
      links: [
        { to: "https://www.linkedin.com/in/tripathics", icon: 1 },
        { to: "https://instagram.com/c_strip.z", icon: 2 },
        { to: "https://github.com/tripathics", icon: 3 }
      ]
    },
    {
      id: 5,
      title: "Dev kanyal",
      img: "https://avatars.githubusercontent.com/u/77870205",
      post: "Mentor",
      links: [
        { to: "https://www.linkedin.com/in/dev-singh-kanyal", icon: 1 },
        { to: "https://instagram.com/dev_singh_kanyal", icon: 2 },
        { to: "https://github.com/dev-singh-kanyal", icon: 3 }
      ]
    },
    {
      id: 6,
      title: "Keshav Arora",
      img: "https://avatars.githubusercontent.com/u/124811079",
      post: "Site Developer",
      links: [
        { to: "https://www.linkedin.com/in/keshav-arora-a5a20325b", icon: 1 },
        { to: "https://instagram.com/keshav_7104", icon: 2 },
        { to: "https://github.com/Keshav7104", icon: 3 }
      ]
    },
    {
      id: 7,
      title: "Vanshika Marwaha",
      img: "https://avatars.githubusercontent.com/u/101502532?v=4",
      post: "Site Developer",
      links: [
        { to: "https://www.linkedin.com/in/vanshika-marwaha", icon: 1 },
        { to: "https://instagram.com/d_chaotic_vibe", icon: 2 },
        { to: "https://github.com/marwahavanshika", icon: 3 }
      ]
    },
  ]
  return (
    <div className="flex flex-col bg-teal-600">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-semibold text-white mx-auto mt-3">Our Code Coaches</h1>
      <div className=" relative flex overflow-x-hidden overflow-y-visible w-auto stop">
        <div className="w-full py-12 lg:py-20 whitespace-nowrap flex flex-row animate-scroll lg:animate-large-scroll hover:stop">
          {Team.map((alt, index) => (
            <Teamcard {...alt} key={index} />
          ))}
        </div>
        <div className="w-full absolute top-0 py-12 lg:py-20 whitespace-nowrap flex flex-row animate-scroll2 lg:animate-large-scroll2">
          {
            Team.map((alt, index) => (
              <Teamcard {...alt} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Team