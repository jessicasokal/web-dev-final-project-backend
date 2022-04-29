import webpageModel from "./webpage-model";

export const findAllProfiles = () => {
    return webpageModel.find({}, {profiles:1, _id:0});
}

export const findAllMovies = () => {
    return webpageModel.find({}, {genericMovies: 1, _id: 0});
}

export const findWebpageById = (id) => {
    return webpageModel.findById(id)
}
export const findUserByUsername = (username) => {
    // return usersModel.findOne({email: email})
    return webpageModel.findOne({username})
}
export const findUserByCredentials = (username, password) => {
    return webpageModel.findOne({username, password})
}
export const createUser = (user) => {
    return webpageModel.create(user)
}
export const deleteUser = (id) => {
    return webpageModel.deleteOne({_id: id})
}
export const updateProfiles = (id, updatedProfile) => {
    return webpageModel.updateOne(
        {_id: id},
        {$set: {profiles: {...findAllProfiles, updatedProfile}}}
    )
}
