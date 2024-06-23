// Icons
import { IoCallOutline } from "react-icons/io5";
import { GoLocation, GoMail } from "react-icons/go";

export default function ContactInfo() {

    const contactInfo = [
        {
            id: 1,
            type: "Email",
            description: "Our friendly team is here to help.",
            value: "bongobrain24@gmail.com",
            icon: "GoMail",
            Animation: 'fade-up'
        },
        {
            id: 2,
            type: "Office",
            description: "Come say hello at our office HQ.",
            value: "Banashree E-block, Road-05, House-42",
            icon: "GoLocation",
            Animation: 'fade-down'
        },
        {
            id: 3,
            type: "Phone",
            description: "Mon-Fri from 8am to 5pm.",
            value: "+8801789247373",
            icon: "IoCallOutline",
            Animation: 'fade-up'
        }
    ]
    return (
        <div className="w-10/12 mx-auto flex flex-wrap items-center lg:justify-between justify-center gap-12 my-10 py-10 xl:px-10">
            {
                contactInfo?.map((contact) => <div key={contact?.id} data-aos={contact?.Animation} className="flex flex-col items-center justify-center text-center">
                    <span className="p-3 text-xl  text-green-400  rounded-full bg-[#748e6324] ] ">
                        {contact?.icon === "GoMail" && <GoMail />}
                        {contact?.icon === "GoLocation" && <GoLocation />}
                        {contact?.icon === "IoCallOutline" && <IoCallOutline />}
                    </span>
                    <h2 className="mt-4 text-lg font-medium text-green-400 ">{contact?.type}</h2>
                    <p className="mt-2 text-gray-300">{contact?.description}</p>
                    <p className="mt-2 text-gray-300 ">{contact?.value}</p>
                </div>)
            }
        </div>
    )
}
