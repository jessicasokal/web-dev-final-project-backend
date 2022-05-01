import usersModel from '../users/users-model.js';

export const findAllUsers = () => {
    return usersModel.find()
}
export const findUserById = (id) => {
    return usersModel.findById(id)
}
export const findUserByUsername = (username) => {
    return usersModel.findOne({username})
}
export const findUserByCredentials = (username, password) => {
    return usersModel.findOne({username, password})
}
export const createUser = (user) => {
    return usersModel.create(user)
}
export const deleteUser = (id) => {
    return usersModel.deleteOne({_id: id})
}
export const updateUser = (id, updatedUser) => {
    return usersModel.updateOne(
        {_id: id},
        {$set: updatedUser}
    )
}
