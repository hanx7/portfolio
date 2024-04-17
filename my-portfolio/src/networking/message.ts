import axios from "axios";

export const sendMessageRequest = async (
    firstName: String,
    lastName: String,
    message: String,
) => {
    const sendMessageRequestURL = process.env.REACT_APP_BACKEND_DOMAIN +"/message/sendMessages"
    return await axios.post( sendMessageRequestURL, { firstName, lastName, message});
}