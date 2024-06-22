import { TbMailShare } from "react-icons/tb";
import Button from "../components/sheard/button/Button";
import Input from "../components/sheard/FormElement/Input";
import Textarea from "../components/sheard/FormElement/Textarea";


export default function ContactFrom() {
    return (
        <div data-aos="fade-up" className=" xl:px-36 sm:mt-16 md:px-10 px-5 lg:w-10/12 2xl:w-9/12 mx-auto pt-10">
            <div className=" sm:flex items-center xl:gap-14 gap-10 my-8 ">
                <Input data-aos="fade-up" type='text' idFor='firstName' label='First name' placeholder='Enter your firstName' />
                <Input data-aos="fade-down" type='text' idFor='lastName' label='Last name' placeholder='Enter your lastName' />
            </div>
            <div className=" sm:flex items-center xl:gap-14 gap-10 my-8 ">
                <Input data-aos="fade-up" type='email' idFor='email' label='Email' placeholder='Enter your email' />
                <Input data-aos="fade-down" type='number' idFor='number' label='Phone number' placeholder='Enter your phone Number' />
            </div>
            <Textarea data-aos="fade-up" idFor='message' label='Your message' placeholder='Your message here . . .' />
            <div className=' flex justify-end mt-10'>
                <Button data-aos="fade-up" type='button' text='Send' isFill={false} icon={<TbMailShare />} />
            </div>
        </div>
    )
}