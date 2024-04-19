import { useState } from "react";
import { useLocation } from 'react-router-dom';
import axios  from "axios";
import "./index.css"

function EditEvent() {

    const location = useLocation();
    const { state } = location;



    const [formData, setFormData] = useState({
        name: state.name,
        description: state.description,
        task: state.task,
        timing: new Date(state.timing).toISOString().slice(0, 16),
        duration: state.duration,
        venue: state.venue,
        coOrdinateNumber:state.coOrdinateNumber,
        whatsappGroup:state.whatsappGroup,
        isTechnical: Boolean(state.isTechnical),
        price:state.price,
        image: state.image

    });


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setFormData({
              ...formData,
              image: reader.result
            });
          };
          reader.readAsDataURL(file);
        }
      };
      



    const handleChange = (event) => {
        let { name, value } = event.target;


        if (value === "true") {
            value = true
        }
        if (value === "false") {
            value = false
        }

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };




    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.patch(`${process.env.REACT_APP_BACKEND}/api/v1/event/${state._id}`, formData)

            if (response.status ===200) {
                setFormData({
                    name: '',
                    description: '',
                    task: '',
                    coOrdinateNumber: '',
                    whatsappGroup:"",
                    timing: new Date().toISOString().substring(0, 16),
                    duration: 0,
                    venue: '',
                    isTechnical: "",
                    price:"",
                    image:""
                });
               alert('edited successfully')
            } 

        } catch (error) {
            console.error('Error submitting form:', error);
         }
    }

    return (
        <div className="create-event-container">
            <div className="create-event-form-container">
                <form
                    method="patch"
                    action="#"
                    onSubmit={onSubmitHandler}>
                    <div className="form-div-container">
                        <label htmlFor="name">Event Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange} />
                    </div>
                    <div className="form-div-container">
                        <label htmlFor="description">Event Description</label>
                        <textarea
                            className="long-input"
                            rows="5"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}>
                        </textarea >
                    </div>
                    <div className="form-div-container">
                        <label htmlFor="task">Event Task</label>
                        <textarea
                            className="long-input"
                            rows="5"
                            id="task"
                            name="task"
                            value={formData.task}
                            onChange={handleChange}>
                        </textarea >
                    </div>
                    <div className="form-div-row-container">
                        <div >
                            <label htmlFor="time">Starts At</label>
                            <input
                                type="datetime-local"
                                id="time"
                                name="timing"
                                value={formData.timing}
                                onChange={handleChange}
                            />
                        </div>
                        <div >
                            <label htmlFor="duration">Duration</label>
                            <input
                                type="text"
                                id="duration"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-div-container">
                        <label htmlFor="venue">Venue Name</label>
                        <input
                            type="text"
                            id="venue"
                            name="venue"
                            value={formData.venue}
                            onChange={handleChange} />
                    </div>

                    <div className="form-div-container">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange} />
                    </div>

                    <div className="form-div-container">
                        <label htmlFor="coOrdinateNumber">Co-ordinate Number</label>
                        <input
                            type="text"
                            id="coOrdinateNumber"
                            name="coOrdinateNumber"
                            value={formData.coOrdinateNumber}
                            onChange={handleChange} />
                    </div>

                    <div className="form-div-container">
                        <label htmlFor="whatsappGroup">Whatsapp group</label>
                        <input
                            type="text"
                            id="whatsappGroup"
                            name="whatsappGroup"
                            value={formData.whatsappGroup}
                            onChange={handleChange} />
                    </div>

                    <div>
                        <p>Tecnical Event</p>
                        <div className="form-radio-button">
                            <div>
                                <input
                                    type="radio"
                                    id="true"
                                    name="isTechnical"
                                    value="true"
                                    onChange={handleChange}
                                    checked={formData.isTechnical === true}
                                />

                                <label htmlFor="true"> Yes</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="false"
                                    name="isTechnical"
                                    value="false"
                                    onChange={handleChange}
                                    checked={formData.isTechnical === false}
                                />
                                <label htmlFor="false">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-div-image-container">
                        <label htmlFor="image">Upload Image :</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            accept="image/*"
                            id="image" />
                    </div>
                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>
    );
}

export default EditEvent;