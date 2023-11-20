import React, { useState } from 'react'
import MyNavbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Styles from './EditUser.module.css'
import { useUser } from '../../providers/UserProvider'

export default function EditUser() {
    const { user } = useUser();
    const data = user;

    const [formData, setFormData] = useState({
        firstname: data.firstname || "",
        lastname: data.lastname || "",
        gender: data.gender || "",
        email: data.email || "",
        mobile: data.phone || "",
        profile_image_link: data.profile_image_link || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = formData
        console.log(data)
    };


    return (
        <>
            <MyNavbar />
            <div className={Styles.body}>
                <h1 className={Styles.h1}>All Personal Details</h1>
                <form onSubmit={handleSubmit} className={Styles.form}>
                    <div className={Styles.complete}>
                        <div className="one">
                            <label htmlFor="firstname" className={Styles.label}>First Name</label>
                            <span className="incfn" style={{ color: "red" }}></span>
                            <input className={Styles.input}type="text" id="firstname" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required /><br />
                            <label htmlFor="lastname" className={Styles.label}>Last Name</label>
                            <span className="incln" style={{ color: "red" }}></span>
                            <input className={Styles.input}type="text" id="lastname" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required  /><br />
                            <label htmlFor="gender" className={Styles.label}>Gender</label>
                            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required
                            >
                                <option value="" disabled selected>Select Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="Trans">Transgender</option>
                            </select><br />
                            <label htmlFor="email" className={Styles.label}>Email</label>
                            <input className={Styles.input}type="email" id="email" name="email" placeholder="email" value={formData.email} onChange={handleChange}/><br />
                            <label htmlFor="mobile" className={Styles.label}>Mobile Number</label>
                            <span className="inccn" style={{ color: "red" }}></span>
                            <input className={Styles.input}type="tel" id="mobile" name="mobile" value={formData.mobile} pattern="[0-9]{10}" placeholder="10 digit mobile number" onChange={handleChange} required /><br />
                            <label htmlFor="link" className={Styles.label}>Profile image link</label>
                            <input className={Styles.input}type="text" id="link" name="link" value={formData.profile_image_link} onChange={handleChange}/>
                        </div>
                    </div>
                    <button className={`${Styles.register} ${Styles.button}`} type="submit">Save Changes</button>
                </form>
            </div>
            <Footer />
        </>
    )
}
