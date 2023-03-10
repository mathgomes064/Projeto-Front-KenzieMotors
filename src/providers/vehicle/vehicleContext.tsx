import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IVehicleCreate, IVehicleProvidersProps, IVehicleUpdate } from "../../interfaces/vehicle";
import { UserContext } from "../user/userContext";

export const AuthContext = createContext({})

export const VehicleProvider = ({children}: IVehicleProvidersProps) =>{
    
    const {token, getUserData, user} : any = useContext(UserContext)


    const [allCars, setAllCar] = useState([])
    const [allMotorcycles, setAllMotorcycles] = useState([])
    const [userCars, setUserCars] = useState([])
    const [userMotorcycles, setUserMotorcycles] = useState([])
    const [vehicle, setVehicle] = useState<IVehicleCreate[]>([])
    
    const registerVehicle = (data: IVehicleCreate) =>{
        setVehicle([data, ...vehicle])
        axios.post("http://localhost:3000/vehicles", data, {
            headers: {
                Authorization: token
            }
        })
        .then((response) =>{
            getUserData()
        })
        .catch((err) => console.log(err))
    }
    
    const [id, setId] = useState("")
    const updateVehicle = (data: IVehicleUpdate, id: string) =>{
        axios.patch(`http://localhost:3000/vehicles/${id}`, data, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) =>{
            getUserData()
        })
        .catch((err) => console.log(err))
    }

    const deleteVehicle = (id: string) =>{
        axios.delete(`http://localhost:3000/vehicles/${id}`, {
            headers: {
                Authorization: token
            }
        })
        .then((response) =>{
            getUserData()
        })
        .catch((err) => console.log(err))
    }
    
    const getCars = () =>{
        axios.get("http://localhost:3000/vehicles/cars")
        .then((response) => {
            setAllCar(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const getMotorcycles = () =>{
        axios.get("http://localhost:3000/vehicles/motorcycles")
        .then((response) => {
            setAllMotorcycles(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    const getCarsByUser = () =>{
        axios.get(`http://localhost:3000/vehicles/userCars`, {
            headers:{
                Authorization: token
            },
        })
        .then((response) => {
            setUserCars(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const getMotorcyclesByUser = () =>{
        axios.get(`http://localhost:3000/vehicles/userMotorcycles`, {
            headers:{
                Authorization: token
            },
        })
        .then((response) => {
            setUserMotorcycles(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    return(
        <AuthContext.Provider
        value={{
            getCars,
            userCars,
            getMotorcycles,
            userMotorcycles,
            registerVehicle,
            getCarsByUser,
            getMotorcyclesByUser,
            allCars,
            allMotorcycles,
            id,
            setId,
            deleteVehicle,
            updateVehicle,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

