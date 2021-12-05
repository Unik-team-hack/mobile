import { API } from "@/api"
import { UserResponseDto } from "@/api/dto"
import { makeAutoObservable } from "mobx"
import { createContext } from "react"

class ProfileStore {
    user?: UserResponseDto

    constructor(){
        makeAutoObservable(this)
    }

    private setUser = (user:UserResponseDto) =>{
        this.user = user
    }

    fetchUser = async () => {
        try{
            const user = await API.auth.getMe()
            console.log(user)
            this.setUser(user)
        }catch(e){
            console.log(e)
        }
    }

    updateInfo = async (firstName:string,lastName:string,patronymic:string)=>{
        try {
            await API.auth.update(firstName,lastName,patronymic)
        } catch (e) {
            console.log(e)
        }
    }

    updatePass = async (newPass:string) =>{
        try {
            await API.auth.updatePassword(newPass)
        } catch (error) {
            console.log(error)
        }
    }
}

const profileStore = new ProfileStore()
export default createContext(profileStore)