import Image from "next/image";

export const team2 = [
    {
      id: 1,
      name: "username",
      profession: "profession",
      image: "/team1.jpg"
    },
    {
      id: 2,
      name: "username",
      profession: "profession",
      image: "/team2.jpg"
    },
    {
      id: 3,
      name: "username",
      profession: "profession",
      image: "/team3.jpg"
    },
    {
      id: 4,
      name: "username",
      profession: "profession",
      image: "/team4.jpg"
    },
    {
      id: 5,
      name: "username",
      profession: "profession",
      image: "/team5.jpg"
    },
    {
      id: 6,
      name: "username",
      profession: "profession",
      image: "/team6.jpg"
    },
    {
      id: 7,
      name: "username",
      profession: "profession",
      image: "/team7.jpg"
    },
    {
      id: 8,
      name: "username",
      profession: "profession",
      image: "/team8.jpg"
    },
    {
      id: 9,
      name: "username",
      profession: "profession",
      image: "/team9.jpg"
    },
  ]
export default function TeamMember() {
    return (
        <div>
            {/* Team Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-6 w-full mt-20">
                {team2.map((teamMember) => (
                    <div key={teamMember.id}>
                        <Image
                            src={teamMember.image}
                            alt={teamMember.name}
                            width={1000}
                            height={1000}
                            className="w-full h-64 object-cover"
                        />

                        <div className="font-bold mt-10 text-center grid justify-items-center">
                            <h1 className=" text-[#252B42] tracking-tiny text-[16px]">{teamMember.name}</h1>
                            <p className="text-[#737373] tracking-md text-[14px] mt-2">{teamMember.profession}</p>

                            <div className="flex gap-4 mt-3 items-center">
                                <Image src="/fb2.svg" alt="Facebook" width={21} height={21} />
                                <Image src="/insta2.svg" alt="Instagram" width={18} height={18} />
                                <Image src="/twitter3.svg" alt="Twitter" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}